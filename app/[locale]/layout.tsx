import { notFound } from "next/navigation";
import { Cormorant_Garamond, Geist, Geist_Mono, Cairo } from "next/font/google";
import { Header, Footer } from "@/components/site-shell";
import { Locale, locales } from "@/lib/site";
import "../globals.css";

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

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700"]
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${display.variable} ${ui.variable} ${data.variable} ${cairo.variable}`}>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
