import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rakiza.co"),
  title: {
    default: "Rakiza | Growth & Financial Advisory",
    template: "%s | Rakiza"
  },
  description:
    "Rakiza helps SMEs and growth-stage companies in Egypt and MENA build scalable financial systems, improve profitability, and gain strategic visibility.",
  applicationName: "Rakiza",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    type: "website",
    siteName: "Rakiza",
    title: "Rakiza | Growth & Financial Advisory",
    description:
      "Premium CFO-as-a-Service, FP&A, pricing intelligence, financial modeling, valuation, and business analytics for modern SMEs.",
    url: "https://rakiza.co"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakiza | Growth & Financial Advisory",
    description:
      "Growth and financial infrastructure for SMEs and growth-stage companies across Egypt and MENA."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
