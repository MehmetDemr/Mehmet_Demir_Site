import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetler | Mehmet Demir – Yazılım Geliştirici, İzmir",
  description:
    "İzmir merkezli bilgisayar mühendisi Mehmet Demir'den QR menü, 3D e-ticaret sitesi, işletme tanıtım sayfası ve kurumsal web sitesi hizmetleri.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
