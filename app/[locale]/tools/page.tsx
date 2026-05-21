import { CalculatorPreview, DiagnosticForm } from "@/components/diagnostic-form";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { Locale, tools } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/tools",
    title: locale === "ar" ? "أدوات التشخيص المالي | ركيزة" : "Financial Health Tools | Rakiza",
    description:
      locale === "ar"
        ? "أدوات وحسابات الفحص المالي التفاعلية للشركات المتوسطة والناشئة، حاسبات التدفق النقدي والربحية والتسعير."
        : "Interactive financial health score, cash flow calculator, growth readiness score, profitability calculator, and pricing health checker for SMEs."
  });
}

export default async function ToolsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  // Localized tools list for display
  const translatedTools = [
    locale === "ar" ? "فحص جاهزية الرقابة والتحكم المالي" : "Financial Control Readiness Score",
    locale === "ar" ? "حاسبة تخطيط التدفق النقدي" : "Cash Flow Planner",
    locale === "ar" ? "فاحص جاهزية واستعداد التوسع" : "Growth Readiness Score",
    locale === "ar" ? "مقياس وضبط نسبة ربحية المنشأة" : "Profitability control calculator",
    locale === "ar" ? "أداة تشخيص مرونة وانضباط التسعير" : "Pricing Health Diagnostic"
  ];

  return (
    <main className="bg-[var(--bg-void)] text-[var(--text-primary)] min-h-screen pt-32 text-left rtl:text-right">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col justify-between py-4">
          <div>
            <h1 className="font-display text-5xl leading-[1.05] tracking-[-0.03em] sm:text-7xl">
              {dict.toolsPage.title}
            </h1>
            <p className="mt-7 text-lg font-light leading-8 text-[var(--text-secondary)]">
              {dict.toolsPage.subtitle}
            </p>
          </div>
          
          <div className="mt-10 grid gap-3">
            {translatedTools.map((tool) => (
              <div 
                key={tool} 
                className="border border-[var(--border-faint)] bg-[var(--bg-deep)] p-4 text-sm font-medium rounded-lg hover:border-[var(--gold-muted)] transition duration-300 font-data"
              >
                {tool}
              </div>
            ))}
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <DiagnosticForm compact locale={locale} />
        </Reveal>
      </section>
      
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 border-t border-[var(--border-faint)] pt-16">
        <CalculatorPreview locale={locale} />
      </section>
    </main>
  );
}
