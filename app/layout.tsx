import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"]
});

const ui = Geist({
  subsets: ["latin"],
  variable: "--font-ui"
});

const data = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-data"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rakiza.co"),
  title: {
    default: "Rakiza — Financial Advisory & CFO-as-a-Service | Egypt, GCC, MENA",
    template: "%s | Rakiza"
  },
  description:
    "Rakiza is a boutique Growth & Financial Advisory firm for scaling companies across Egypt, GCC and MENA. Fractional CFO, FP&A infrastructure, financial modeling, and cash flow architecture.",
  applicationName: "Rakiza",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    type: "website",
    siteName: "Rakiza",
    title: "Rakiza — Financial Intelligence for Scaling Companies",
    description:
      "Premium CFO-as-a-Service, FP&A, pricing intelligence, financial modeling, valuation, and business analytics for modern SMEs.",
    url: "https://rakiza.co",
    images: ["/og-image.jpg"]
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
      <body className={`${display.variable} ${ui.variable} ${data.variable}`}>{children}</body>
    </html>
  );
}
