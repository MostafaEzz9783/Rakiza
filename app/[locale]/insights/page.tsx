import Link from "next/link";
import { JsonLd } from "@/components/schema";
import { Reveal } from "@/components/motion";
import { articleSchema, createMetadata } from "@/lib/seo";
import { Locale, localizedPath } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

// Localized articles metadata
const getArticles = (locale: Locale) => [
  {
    slug: "financial-visibility-for-smes",
    title: 
      locale === "ar"
        ? "ماذا تعني الرؤية والرقابة المالية للشركات المتوسطة التي تتجاوز إيراداتها 20 مليون جنيه"
        : "What financial visibility means for SMEs above 20M EGP revenue",
    description:
      locale === "ar"
        ? "إطار عمل عملي لإدارة التدفقات النقدية، وضبط ربحية المنشأة، ونضج التقارير المالية للقيادة."
        : "A practical framework for cash flow, profitability, reporting maturity, and leadership cadence."
  },
  {
    slug: "fractional-cfo-egypt-guide",
    title:
      locale === "ar"
        ? "المدير المالي الاستشاري الجزئي في مصر: متى تحتاجه الشركات التي يقودها المؤسسون؟"
        : "Fractional CFO in Egypt: when founder-led companies need one",
    description:
      locale === "ar"
        ? "كيف تحدد اللحظة التي تصبح فيها الإدارة المالية الحالية لشركتك عائقاً حقيقياً أمام التوسع والنمو."
        : "How to identify the moment where finance leadership becomes a growth constraint."
  },
  {
    slug: "pricing-intelligence-margin-growth",
    title:
      locale === "ar"
        ? "استخبارات تسعير الخدمات: كيف تحقق النمو دون الإضرار بهوامش الربح الصافية؟"
        : "Pricing intelligence for growth without margin erosion",
    description:
      locale === "ar"
        ? "منهجية هادئة لهيكلة الأسعار وحماية أرباحك الصافية من تقلبات العملة وبناء ثقة مستدامة مع عملائك."
        : "A calm approach to price architecture, margin leakage, and customer trust."
  }
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/insights",
    title: locale === "ar" ? "تحليلات وأفكار ركيزة المالية | استشارات استراتيجية" : "Financial Advisory Insights | Rakiza",
    description:
      locale === "ar"
        ? "تحليلات عميقة غنية بالمعلومات الاستراتيجية حول الـ CFO والـ FP&A والتسعير والنمذجة والسيولة النقدية للشركات."
        : "Answer-engine optimized insights on CFO-as-a-Service, FP&A, cash flow, pricing, financial modeling, valuation, and business analytics."
  });
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  
  const currentArticles = getArticles(locale);

  return (
    <main className="bg-[var(--bg-void)] text-[var(--text-primary)] min-h-screen pt-32 text-left rtl:text-right">
      <JsonLd data={currentArticles.map((article) => articleSchema(article.title, article.description, `/${locale}/insights/${article.slug}`))} />
      
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="max-w-4xl">
          <h1 className="font-display text-5xl leading-[1.05] tracking-[-0.03em] sm:text-7xl">
            {dict.insightsPage.title}
          </h1>
          <p className="mt-7 text-lg font-light leading-8 text-[var(--text-secondary)]">
            {dict.insightsPage.subtitle}
          </p>
        </Reveal>
        
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {currentArticles.map((article) => (
            <Link 
              key={article.slug} 
              href={localizedPath(locale, `/insights/${article.slug}`)} 
              className="outer-shell group block"
            >
              <div className="inner-core p-7 h-full flex flex-col justify-between min-h-[300px] hover:bg-[oklch(75%_0.12_85_/_0.03)] transition duration-300">
                <div className="scan-line" />
                <div>
                  <p className="font-data text-xs text-[var(--gold-primary)] uppercase tracking-wider">{dict.insightsPage.badge}</p>
                  <h2 className="font-display mt-8 text-2xl font-light tracking-[-0.02em] leading-snug group-hover:text-[var(--gold-primary)] transition duration-300">
                    {article.title}
                  </h2>
                </div>
                <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
