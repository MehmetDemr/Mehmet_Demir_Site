import nodemailer, { type Transporter } from "nodemailer";

type ContactEmailParams = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  locale: "tr" | "en";
};

const SITE_NAME = "cengmehmetdemir.com";
const SITE_URL = "https://cengmehmetdemir.com";

// Sitenin renk paleti (app/globals.css ile aynı)
const C = {
  bg: "#1F2329",
  bgSoft: "#262B33",
  surface: "#2D333B",
  text: "#F5F3EE",
  textSoft: "#C9C4BA",
  muted: "#8F8A80",
  accent: "#D6B36A",
  border: "#3A3A33",
};

const FONT = "'Segoe UI',Helvetica,Arial,sans-serif";
const TITLE_FONT = "Georgia,'Times New Roman',serif";

let transporter: Transporter | null = null;

// Brevo: 587 -> STARTTLS (secure: false), 465 -> SSL (secure: true)
function getTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER!,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USERNAME!,
        pass: process.env.SMTP_PASSWORD!,
      },
    });
  }
  return transporter;
}

export function isMailerConfigured() {
  return Boolean(
    process.env.SMTP_SERVER &&
      process.env.SMTP_USERNAME &&
      process.env.SMTP_PASSWORD &&
      process.env.SMTP_FROM,
  );
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Mail başlıklarına satır sonu sızmasın
function oneLine(s: string) {
  return s.replace(/[\r\n]+/g, " ").trim();
}

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Istanbul",
  }).format(d);
}

function infoRow(label: string, valueHtml: string) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid ${C.border};width:110px;vertical-align:top;font-size:12px;line-height:1.5;color:${C.muted};text-transform:uppercase;letter-spacing:0.08em;">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid ${C.border};vertical-align:top;font-size:14px;line-height:1.5;color:${C.text};">${valueHtml}</td>
  </tr>`;
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
  locale,
}: ContactEmailParams) {
  const cleanName = oneLine(name);
  const cleanSubject = oneLine(subject ?? "");
  const sentAt = formatDate(new Date());
  const languageLabel = locale === "tr" ? "Türkçe" : "English";

  const safeName = escapeHtml(cleanName);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(cleanSubject || "(Konu belirtilmedi)");
  const safeMessage = escapeHtml(message.trim()).replace(/\r?\n/g, "<br />");
  const replyHref = escapeHtml(
    `mailto:${email}?subject=${encodeURIComponent(`Re: ${cleanSubject || "Mesajınız"}`)}`,
  );
  const initial = escapeHtml(
    cleanName.charAt(0).toLocaleUpperCase("tr") || "?",
  );
  const preheader = `${cleanName} (${email}) iletişim formundan yazdı: ${message.trim().slice(0, 90)}`;

  const html = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>Yeni İletişim Mesajı</title>
  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .px { padding-left: 24px !important; padding-right: 24px !important; }
      .btn a { display: block !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:${C.bg};-webkit-text-size-adjust:100%;">
  <!-- Önizleme metni (gelen kutusunda konunun yanında görünür) -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">
    ${escapeHtml(preheader)}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${C.bg};">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <table role="presentation" class="container" width="560" cellpadding="0" cellspacing="0" border="0"
               style="width:560px;max-width:100%;background-color:${C.bgSoft};border:1px solid ${C.border};border-radius:12px;overflow:hidden;">

          <!-- Üst vurgu çizgisi -->
          <tr>
            <td style="height:4px;line-height:4px;font-size:0;background-color:${C.accent};">&nbsp;</td>
          </tr>

          <!-- Marka başlığı: mailin nereden geldiği -->
          <tr>
            <td class="px" style="padding:24px 40px;border-bottom:1px solid ${C.border};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="40" height="40" align="center" valign="middle"
                      style="width:40px;height:40px;background-color:${C.accent};border-radius:8px;color:${C.bg};font-family:${TITLE_FONT};font-size:16px;font-weight:bold;">
                    MD
                  </td>
                  <td style="padding-left:12px;font-family:${FONT};">
                    <div style="font-size:16px;font-weight:600;line-height:1.3;color:${C.text};">Mehmet Demir</div>
                    <div style="font-size:12px;line-height:1.3;color:${C.muted};">${SITE_NAME} · İletişim Formu</div>
                  </td>
                  <td align="right" style="font-family:${FONT};">
                    <span style="display:inline-block;padding:4px 10px;border:1px solid ${C.accent};border-radius:999px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${C.accent};">
                      Yeni Mesaj
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Başlık -->
          <tr>
            <td class="px" style="padding:32px 40px 8px;font-family:${FONT};">
              <h1 style="margin:0 0 8px;font-family:${TITLE_FONT};font-size:24px;line-height:1.3;font-weight:bold;color:${C.text};">
                ${safeName} size bir mesaj gönderdi
              </h1>
              <p style="margin:0;font-size:14px;line-height:1.6;color:${C.textSoft};">
                Web sitenizdeki iletişim formu üzerinden yeni bir mesaj aldınız.
              </p>
            </td>
          </tr>

          <!-- Gönderen bilgileri -->
          <tr>
            <td class="px" style="padding:20px 40px 8px;font-family:${FONT};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td colspan="2" style="padding-bottom:6px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="32" height="32" align="center" valign="middle"
                            style="width:32px;height:32px;background-color:${C.surface};border:1px solid ${C.accent};border-radius:50%;color:${C.accent};font-family:${TITLE_FONT};font-size:14px;font-weight:bold;">
                          ${initial}
                        </td>
                        <td style="padding-left:10px;font-size:13px;font-weight:600;color:${C.accent};letter-spacing:0.08em;text-transform:uppercase;">
                          Gönderen
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${infoRow("Ad Soyad", safeName)}
                ${infoRow(
                  "E-posta",
                  `<a href="mailto:${safeEmail}" style="color:${C.accent};text-decoration:none;">${safeEmail}</a>`,
                )}
                ${infoRow("Konu", safeSubject)}
              </table>
            </td>
          </tr>

          <!-- Mesaj -->
          <tr>
            <td class="px" style="padding:24px 40px 8px;font-family:${FONT};">
              <div style="margin:0 0 10px;font-size:13px;font-weight:600;color:${C.accent};letter-spacing:0.08em;text-transform:uppercase;">
                Mesaj
              </div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:${C.surface};border-left:3px solid ${C.accent};border-radius:4px;padding:18px 20px;font-size:15px;line-height:1.7;color:${C.text};word-break:break-word;">
                    ${safeMessage}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Yanıtla butonu -->
          <tr>
            <td class="px" style="padding:28px 40px 8px;font-family:${FONT};">
              <table role="presentation" class="btn" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" bgcolor="${C.accent}" style="border-radius:8px;background-color:${C.accent};">
                    <a href="${replyHref}" target="_blank"
                       style="display:inline-block;padding:14px 32px;font-family:${FONT};font-size:15px;font-weight:600;color:${C.bg};text-decoration:none;border-radius:8px;">
                      ${safeName} kişisine yanıt ver
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Kaynak bilgisi -->
          <tr>
            <td class="px" style="padding:28px 40px 32px;font-family:${FONT};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="background-color:${C.bg};border:1px solid ${C.border};border-radius:8px;">
                <tr>
                  <td style="padding:14px 16px;font-size:12px;line-height:1.8;color:${C.textSoft};">
                    <strong style="color:${C.accent};">Kaynak:</strong>
                    <a href="${SITE_URL}/#contact" target="_blank" style="color:${C.text};text-decoration:none;">${SITE_NAME}/#contact</a><br />
                    <strong style="color:${C.accent};">Tarih:</strong> ${escapeHtml(sentAt)}<br />
                    <strong style="color:${C.accent};">Site dili:</strong> ${languageLabel}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Alt bilgi -->
          <tr>
            <td class="px" style="padding:20px 40px;background-color:${C.bg};border-top:1px solid ${C.border};font-family:${FONT};">
              <p style="margin:0 0 6px;font-size:12px;line-height:1.6;color:${C.textSoft};">
                Bu e-postayı yanıtladığınızda cevabınız doğrudan <strong style="color:${C.text};">${safeEmail}</strong> adresine gider.
              </p>
              <p style="margin:0;font-size:11px;line-height:1.6;color:${C.muted};">
                Bu e-posta ${SITE_NAME} iletişim formu tarafından otomatik olarak gönderilmiştir.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `[${SITE_NAME}] Yeni iletişim formu mesajı`,
    "",
    `Ad Soyad: ${cleanName}`,
    `E-posta: ${email}`,
    `Konu: ${cleanSubject || "(Konu belirtilmedi)"}`,
    "",
    "Mesaj:",
    message.trim(),
    "",
    "---",
    `Kaynak: ${SITE_URL}/#contact`,
    `Tarih: ${sentAt}`,
    `Site dili: ${languageLabel}`,
    "",
    `Bu e-postayı yanıtladığınızda cevabınız doğrudan ${email} adresine gider.`,
  ].join("\n");

  await getTransporter().sendMail({
    from: { name: `${SITE_NAME} İletişim`, address: process.env.SMTP_FROM! },
    to: process.env.CONTACT_TO_EMAIL ?? process.env.SMTP_FROM!,
    replyTo: { name: cleanName, address: email },
    subject: `[${SITE_NAME}] ${cleanSubject || "Yeni mesaj"} · ${cleanName}`,
    html,
    text,
  });
}
