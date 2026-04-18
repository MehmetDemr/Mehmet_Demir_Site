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
  title: "Mehmet Demir | Full-Stack Developer",
  description:
    "Full-Stack Developer focused on scalable backend systems, modern frontend architectures, and high-performance web applications.",
  alternates: {
    canonical: "https://cengmehmetdemir.com",
    languages: {
      en: "https://cengmehmetdemir.com",
      tr: "https://cengmehmetdemir.com",
      de: "https://cengmehmetdemir.com",
      ru: "https://cengmehmetdemir.com",
      es: "https://cengmehmetdemir.com",
      fr: "https://cengmehmetdemir.com",
      pl: "https://cengmehmetdemir.com",
      it: "https://cengmehmetdemir.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
