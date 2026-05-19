import Link from "next/link";
import { JsonLd } from "@/components/schema";
import { Reveal } from "@/components/motion";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { baseUrl, Locale, localizedPath, services } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/services",
    title: "Financial Advisory Services in Egypt | Rakiza",
    description:
      "Explore Rakiza services: Fractional CFO, FP&A consulting, financial modeling, valuation, pricing intelligence, business analytics, and accounting systems."
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return (
    <main className="bg-cream pt-32">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${baseUrl}/${locale}` },
          { name: "Services", url: `${baseUrl}/${locale}/services` }
        ])}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-[-0.03em] text-ink sm:text-7xl">
            Financial advisory services built as growth infrastructure.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate">
            Rakiza connects strategic finance, analytics, and operating cadence so leadership teams
            can manage cash, pricing, profitability, and growth with fewer blind spots.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.03} className="bg-white p-8">
              <p className="text-sm font-semibold text-gold">{service.search}</p>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em]">{service.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate">{service.short}</p>
              <p className="mt-5 text-sm font-semibold text-ink">{service.outcome}</p>
              <Link href={localizedPath(locale, `/services/${service.slug}`)} className="mt-8 inline-flex text-sm font-semibold text-gold">
                View service
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
