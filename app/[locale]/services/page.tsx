import Link from "next/link";
import { JsonLd } from "@/components/schema";
import { Reveal } from "@/components/motion";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { baseUrl, Locale, localizedPath, services } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/services",
    title: locale === "ar" ? "الخدمات الاستشارية المالية والتشغيلية | ركيزة" : "Financial Advisory Services | Rakiza",
    description:
      locale === "ar"
        ? "استكشف خدمات ركيزة: إدارة المالية الاستشارية (CFO)، التخطيط FP&A، النمذجة والتقييم المالي، ذكاء التسعير، وتحليلات الأعمال وأنظمتها المحاسبية."
        : "Explore Rakiza services: Fractional CFO, FP&A consulting, financial modeling, valuation, pricing intelligence, business analytics, and accounting systems."
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  
  const currentServices = services[locale];

  return (
    <main className="bg-[var(--bg-void)] text-[var(--text-primary)] min-h-screen pt-32 text-left rtl:text-right">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${baseUrl}/${locale}` },
          { name: "Services", url: `${baseUrl}/${locale}/services` }
        ])}
      />
      
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="max-w-4xl">
          <h1 className="font-display text-5xl leading-[1.05] tracking-[-0.03em] sm:text-7xl">
            {dict.servicesPage.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-light leading-8 text-[var(--text-secondary)]">
            {dict.servicesPage.subtitle}
          </p>
        </Reveal>
        
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {currentServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.03} className="outer-shell">
              <div className="inner-core relative p-8 h-full flex flex-col justify-between min-h-[320px]">
                <div className="scan-line" />
                <div>
                  <p className="font-data text-xs text-[var(--gold-muted)] uppercase tracking-wider">{service.search}</p>
                  <h2 className="font-display mt-5 text-3xl font-light tracking-[-0.02em]">{service.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{service.short}</p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-[var(--border-faint)] flex items-center justify-between">
                  <span className="text-xs font-data text-[var(--text-tertiary)]">{service.outcome}</span>
                  <Link 
                    href={localizedPath(locale, `/services/${service.slug}`)} 
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[var(--gold-primary)] hover:text-[var(--text-primary)] transition duration-300"
                  >
                    {dict.servicesPage.viewService} <ArrowIcon />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-3.5 h-3.5 transition-transform duration-300 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );
}
