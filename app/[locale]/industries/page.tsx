import Link from "next/link";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { Locale, industries, localizedPath } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/industries",
    title: "Financial Advisory for Real Estate, FMCG, F&B, Startups and SMEs | Rakiza",
    description:
      "Rakiza provides growth and financial advisory for real estate, FMCG, F&B, startups, and SME businesses in Egypt and MENA."
  });
}

export default async function IndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return (
    <main className="bg-cream pt-32">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">Industry financial systems for complex growth.</h1>
          <p className="mt-7 text-lg leading-8 text-slate">
            Every sector has a different control problem. Rakiza maps the economics, cadence, and
            reporting layer around the realities of your business model.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <Link key={industry.slug} href={localizedPath(locale, `/industries/${industry.slug}`)} className="bg-white p-7 transition hover:bg-ink hover:text-cream">
              <h2 className="text-2xl font-semibold">{industry.title}</h2>
              <p className="mt-5 text-sm leading-6 text-slate">{industry.challenge}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
