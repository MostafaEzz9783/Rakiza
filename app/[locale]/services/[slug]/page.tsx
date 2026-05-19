import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/schema";
import { Reveal } from "@/components/motion";
import { breadcrumbSchema, createMetadata, serviceSchema } from "@/lib/seo";
import { baseUrl, Locale, localizedPath, services } from "@/lib/site";

export function generateStaticParams() {
  return services.flatMap((service) => [
    { locale: "en", slug: service.slug },
    { locale: "ar", slug: service.slug }
  ]);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    locale,
    path: `/services/${service.slug}`,
    title: `${service.title} in Egypt and MENA | Rakiza`,
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
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const path = `/${locale}/services/${service.slug}`;

  return (
    <main className="bg-cream pt-32">
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
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-semibold text-gold">{service.search}</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.03em] text-ink sm:text-7xl">
            {service.title}
          </h1>
          <p className="mt-7 text-lg leading-8 text-slate">{service.short}</p>
          <Link href={localizedPath(locale, "/waiting-list")} className="mt-10 inline-flex items-center gap-3 bg-ink px-6 py-4 text-sm font-semibold text-cream">
            Join the Waiting List <ArrowRight size={16} />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border border-line bg-white p-8 shadow-panel">
            <h2 className="text-2xl font-semibold">What this unlocks</h2>
            <p className="mt-4 text-base leading-8 text-slate">{service.outcome}</p>
            <div className="mt-8 grid gap-4">
              {service.bullets.map((bullet) => (
                <div key={bullet} className="border border-line p-5">
                  <p className="text-sm font-semibold text-ink">{bullet}</p>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    Designed to become part of the company’s operating rhythm, not a one-time deck.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-[-0.02em]">Engagement structure</h2>
            <div className="mt-10 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
              {["Diagnostic", "System Design", "Operating Cadence"].map((step, index) => (
                <div key={step} className="bg-ink p-7">
                  <p className="text-sm text-gold">0{index + 1}</p>
                  <h3 className="mt-8 text-2xl font-semibold">{step}</h3>
                  <p className="mt-4 text-sm leading-6 text-cream/58">
                    A focused advisory stage that turns financial ambiguity into practical decisions.
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
