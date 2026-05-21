import { CalendarDays } from "lucide-react";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/book-call",
    title: locale === "ar" ? "احجز مكالمة عمل استراتيجية | ركيزة" : "Book a Strategy Call | Rakiza",
    description:
      locale === "ar"
        ? "احجز مكالمة عمل استراتيجية مباشرة مع ركيزة لمناقشة الخدمات المالية الاستشارية ونظم FP&A والنمذجة والتسعير."
        : "Book a strategy call with Rakiza to discuss CFO-as-a-Service, FP&A, financial systems, valuation, pricing, and growth advisory."
  });
}

export default async function BookCallPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <main className="bg-[var(--bg-void)] text-[var(--text-primary)] min-h-screen pt-32 text-left rtl:text-right">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex flex-col justify-start py-4">
          <CalendarDays className="text-[var(--gold-primary)]" size={36} />
          <h1 className="font-display mt-8 text-5xl leading-[1.05] tracking-[-0.03em] sm:text-7xl">
            {dict.bookCallPage.title}
          </h1>
          <p className="mt-7 text-lg font-light leading-8 text-[var(--text-secondary)]">
            {dict.bookCallPage.subtitle}
          </p>
        </Reveal>
        
        <Reveal delay={0.1} className="outer-shell">
          <div className="inner-core min-h-[620px] p-6 flex flex-col justify-between relative">
            <div className="scan-line" />
            <div className="flex h-full min-h-[560px] flex-col items-center justify-center border border-dashed border-[var(--border-subtle)] text-center rounded-lg p-6 bg-[var(--bg-deep)]">
              <p className="font-data text-xs font-semibold text-[var(--gold-primary)] uppercase tracking-widest">
                {dict.bookCallPage.calendlySlot}
              </p>
              <h2 className="font-display mt-6 text-3xl font-light">
                {dict.bookCallPage.calendlyTitle}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-[var(--text-secondary)]">
                {dict.bookCallPage.calendlyDesc}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
