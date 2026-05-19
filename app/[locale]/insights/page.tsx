import Link from "next/link";
import { JsonLd } from "@/components/schema";
import { Reveal } from "@/components/motion";
import { articleSchema, createMetadata } from "@/lib/seo";
import { Locale, localizedPath } from "@/lib/site";

const articles = [
  {
    slug: "financial-visibility-for-smes",
    title: "What financial visibility means for SMEs above 20M EGP revenue",
    description:
      "A practical framework for cash flow, profitability, reporting maturity, and leadership cadence."
  },
  {
    slug: "fractional-cfo-egypt-guide",
    title: "Fractional CFO in Egypt: when founder-led companies need one",
    description:
      "How to identify the moment where finance leadership becomes a growth constraint."
  },
  {
    slug: "pricing-intelligence-margin-growth",
    title: "Pricing intelligence for growth without margin erosion",
    description:
      "A calm approach to price architecture, margin leakage, and customer trust."
  }
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/insights",
    title: "Financial Advisory Insights for SMEs and Startups | Rakiza",
    description:
      "Answer-engine optimized insights on CFO-as-a-Service, FP&A, cash flow, pricing, financial modeling, valuation, and business analytics."
  });
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return (
    <main className="bg-cream pt-32">
      <JsonLd data={articles.map((article) => articleSchema(article.title, article.description, `/${locale}/insights/${article.slug}`))} />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">Insights built for executives and answer engines.</h1>
          <p className="mt-7 text-lg leading-8 text-slate">
            Clear, structured thinking for founders and leadership teams: definitions, frameworks,
            diagnostics, and practical decision rules.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={localizedPath(locale, `/insights/${article.slug}`)} className="bg-white p-7 transition hover:bg-ink hover:text-cream">
              <p className="text-sm font-semibold text-gold">Rakiza Insight</p>
              <h2 className="mt-8 text-2xl font-semibold tracking-[-0.02em]">{article.title}</h2>
              <p className="mt-5 text-sm leading-7 text-slate">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
