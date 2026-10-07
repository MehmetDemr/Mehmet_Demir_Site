import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projelerim | Mehmet Demir – Full Stack Yazılım Geliştirici",
  description:
    "Bilgisayar mühendisi Mehmet Demir'in Next.js, TypeScript ve full stack web projeleri.",
  alternates: { canonical: "/myprojects" },
};

export default function MyProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
