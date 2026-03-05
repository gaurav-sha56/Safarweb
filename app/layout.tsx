import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "SAFAR | Safety Infrastructure for Fleet Mobility",
  description:
    "Proactive monitoring, structured SOS workflows, and compliance-ready documentation for transport operators.",
  keywords:
    "fleet safety, mobility safety software, compliance documentation, transport operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body bg-stone-100 text-navy antialiased">{children}</body>
    </html>
  );
}
