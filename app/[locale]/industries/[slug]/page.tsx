import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { Locale, industries, localizedPath } from "@/lib/site";

export function generateStaticParams() {
  return industries.flatMap((industry) => [
    { locale: "en", slug: industry.slug },
    { locale: "ar", slug: industry.slug }
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return {};
  return createMetadata({
    locale,
    path: `/industries/${industry.slug}`,
    title: `${industry.title} Financial Advisory | Rakiza`,
    description: `${industry.challenge} Rakiza builds financial systems and reporting infrastructure for ${industry.title} companies.`
  });
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  return (
    <main className="bg-cream pt-32">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h1 className="text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">{industry.title} Financial Advisory</h1>
          <p className="mt-7 text-lg leading-8 text-slate">{industry.challenge}</p>
          <Link href={localizedPath(locale, "/waiting-list")} className="mt-10 inline-flex bg-ink px-6 py-4 text-sm font-semibold text-cream">
            Start Financial Health Check
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-px border border-line bg-line">
            {industry.focus.map((focus, index) => (
              <div key={focus} className="bg-white p-8">
                <p className="text-sm font-semibold text-gold">Priority 0{index + 1}</p>
                <h2 className="mt-5 text-3xl font-semibold">{focus}</h2>
                <p className="mt-4 text-sm leading-7 text-slate">
                  We translate this priority into metrics, reporting rhythms, decision rules, and
                  financial models that leadership can use every month.
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
