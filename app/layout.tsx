import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/language-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cengmehmetdemir.com"),
  title: "Mehmet Demir | Bilgisayar Mühendisi & Full Stack Yazılım Geliştirici – İzmir, Türkiye",
  description:
    "Mehmet Demir, İzmir merkezli bilgisayar mühendisi ve full stack yazılım geliştiricisidir. Next.js, TypeScript ile web sitesi, QR menü ve e-ticaret çözümleri geliştirir.",
  keywords: [
    "Mehmet Demir",
    "bilgisayar mühendisi Mehmet Demir",
    "Ceng Mehmet Demir",
    "full stack developer Mehmet Demir",
    "full stack geliştirici Mehmet Demir",
    "Türkiye bilgisayar mühendisi",
    "Türkiye yazılım",
    "İzmir yazılım",
    "İzmir bilgisayar mühendisi",
    "İzmir web yazılım",
    "yazılım geliştirici",
  ],
  authors: [{ name: "Mehmet Demir", url: "https://cengmehmetdemir.com" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://cengmehmetdemir.com",
    siteName: "Mehmet Demir",
    locale: "tr_TR",
    title: "Mehmet Demir | Bilgisayar Mühendisi & Full Stack Yazılım Geliştirici",
    description:
      "İzmir merkezli bilgisayar mühendisi ve full stack yazılım geliştiricisi Mehmet Demir'in portfolyosu ve hizmetleri.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mehmet Demir",
  url: "https://cengmehmetdemir.com",
  jobTitle: "Bilgisayar Mühendisi ve Full Stack Yazılım Geliştirici",
  alternateName: ["Ceng Mehmet Demir", "Mehmet Demir Full Stack Developer"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "İzmir",
    addressCountry: "TR",
  },
  knowsAbout: ["Full Stack Development", "Next.js", "TypeScript", "Web Yazılım"],
  sameAs: [
    "https://github.com/MehmetDemr",
    "https://linkedin.com/in/mehmet-demir-",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
