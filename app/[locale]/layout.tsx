import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/site-shell";
import { Locale, locales } from "@/lib/site";

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
    <>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
