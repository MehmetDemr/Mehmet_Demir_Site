import { isMailerConfigured, sendContactEmail } from "@/lib/mailer";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const LIMITS = {
  name: { min: 2, max: 100 },
  subject: { max: 150 },
  message: { min: 10, max: 5000 },
};

// Basit IP bazlı hız sınırı (sunucu örneği başına): 10 dakikada en fazla 5 mesaj
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function str(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function error(code: string, status: number) {
  return Response.json({ ok: false, error: code }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return error("invalid", 400);
  }

  // Bot tuzağı: gerçek kullanıcılar bu gizli alanı doldurmaz
  if (str(body.website)) {
    return Response.json({ ok: true });
  }

  const name = str(body.name);
  const email = str(body.email);
  const subject = str(body.subject);
  const message = str(body.message);
  const locale = body.locale === "en" ? "en" : "tr";

  if (
    name.length < LIMITS.name.min ||
    name.length > LIMITS.name.max ||
    email.length > 254 ||
    !EMAIL.test(email) ||
    subject.length > LIMITS.subject.max ||
    message.length < LIMITS.message.min ||
    message.length > LIMITS.message.max
  ) {
    return error("invalid", 400);
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return error("rate_limited", 429);
  }

  if (!isMailerConfigured()) {
    console.error("Contact form: SMTP environment variables are missing.");
    return error("server", 500);
  }

  try {
    await sendContactEmail({
      name,
      email,
      subject,
      message,
      locale,
    });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return error("server", 500);
  }

  return Response.json({ ok: true });
}
