import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { JsonLd } from "@/components/schema";
import { Reveal } from "@/components/motion";
import { breadcrumbSchema, createMetadata, serviceSchema } from "@/lib/seo";
import { baseUrl, Locale, localizedPath, services } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

export function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) => 
    services[locale as Locale].map((service) => ({ locale, slug: service.slug }))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const service = services[locale].find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    locale,
    path: `/services/${service.slug}`,
    title: locale === "ar" ? `${service.title} | استشارات ركيزة` : `${service.title} | Rakiza Advisory`,
    description: `${service.short} ${service.outcome}`,
    keywords: [service.search, service.title]
  });
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  
  const currentServices = services[locale];
  const service = currentServices.find((item) => item.slug === slug);
  if (!service) notFound();
  
  const path = `/${locale}/services/${service.slug}`;

  return (
    <main className="bg-[var(--bg-void)] text-[var(--text-primary)] min-h-screen pt-32 text-left rtl:text-right">
      <JsonLd
        data={[
          serviceSchema(service.title, service.short, path),
          breadcrumbSchema([
            { name: "Home", url: `${baseUrl}/${locale}` },
            { name: "Services", url: `${baseUrl}/${locale}/services` },
            { name: service.title, url: `${baseUrl}${path}` }
          ])
        ]}
      />
      
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="flex flex-col justify-between py-4">
          <div>
            <p className="font-data text-xs text-[var(--gold-muted)] uppercase tracking-wider">{service.search}</p>
            <h1 className="font-display mt-6 text-5xl leading-[1.05] tracking-[-0.03em] sm:text-7xl">
              {service.title}
            </h1>
            <p className="mt-8 text-lg font-light leading-8 text-[var(--text-secondary)]">{service.short}</p>
          </div>
          
          <div className="mt-10">
            <Link 
              href={localizedPath(locale, "/waiting-list")} 
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[oklch(75%_0.12_85_/_0.4)] bg-[oklch(6%_0.005_60)] px-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-300 hover:border-[var(--gold-primary)] hover:bg-[oklch(75%_0.12_85_/_0.06)]"
            >
              {dict.servicesPage.ctaWaitingList} <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>
        </Reveal>
        
        <Reveal delay={0.1} className="outer-shell">
          <div className="inner-core p-6 sm:p-8 h-full flex flex-col justify-between">
            <div className="scan-line" />
            <div>
              <h2 className="font-display text-2xl tracking-[-0.02em] text-[var(--gold-primary)]">
                {dict.servicesPage.outcomeLabel}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{service.outcome}</p>
            </div>
            
            <div className="mt-8 grid gap-4">
              {service.bullets.map((bullet) => (
                <div key={bullet} className="border border-[var(--border-faint)] bg-[var(--bg-deep)] p-5 rounded-lg">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{bullet}</p>
                  <p className="mt-2 text-xs leading-5 text-[var(--text-tertiary)] font-data">
                    {locale === "ar" 
                      ? "مصمم ليصبح جزءاً حيوياً من إيقاع تشغيل وتوجيه أرقام الشركة، وليس مجرد ملف عرض تقليدي."
                      : "Designed to become part of the company's operating rhythm, not a one-time deck."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      
      <section className="border-t border-[var(--border-faint)] bg-[var(--bg-deep)] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-light tracking-[-0.02em] text-center lg:text-left rtl:lg:text-right">
              {dict.servicesPage.engagementTitle}
            </h2>
            <div className="mt-10 grid gap-px border border-[var(--border-faint)] bg-[var(--border-faint)] md:grid-cols-3">
              {dict.servicesPage.steps.map((step, index) => (
                <div key={step} className="bg-[var(--bg-void)] p-8 text-left rtl:text-right relative">
                  <p className="font-data text-xs text-[var(--gold-muted)]">0{index + 1}</p>
                  <h3 className="font-display mt-8 text-2xl font-light">{step}</h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                    {dict.servicesPage.stepDesc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
