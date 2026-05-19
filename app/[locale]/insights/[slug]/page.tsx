import { notFound } from "next/navigation";
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

export function generateStaticParams() {
  return articles.flatMap((article) => [
    { locale: "en", slug: article.slug },
    { locale: "ar", slug: article.slug }
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return createMetadata({
    locale,
    path: `/insights/${article.slug}`,
    title: `${article.title} | Rakiza Insights`,
    description: article.description
  });
}

export default async function InsightDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <main className="bg-cream pt-32">
      <JsonLd data={articleSchema(article.title, article.description, `/${locale}/insights/${article.slug}`)} />
      <article className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold text-gold">Rakiza Insight</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">{article.title}</h1>
          <p className="mt-7 text-xl leading-9 text-slate">{article.description}</p>
        </Reveal>
        <div className="prose prose-neutral mt-14 max-w-none">
          {["Executive definition", "Why it matters", "What to measure", "How Rakiza approaches it"].map((heading) => (
            <section key={heading} className="border-t border-line py-8">
              <h2 className="text-3xl font-semibold tracking-[-0.02em]">{heading}</h2>
              <p className="mt-4 text-base leading-8 text-slate">
                This article template is structured for Google Search, AI Overviews, ChatGPT,
                Perplexity, Gemini, Claude, and executive readers. It uses answer-first headings,
                entity-rich language, clear definitions, and practical advisory implications.
              </p>
            </section>
          ))}
        </div>
        <Link href={localizedPath(locale, "/waiting-list")} className="mt-8 inline-flex bg-ink px-6 py-4 text-sm font-semibold text-cream">
          Apply for a Financial Health Check
        </Link>
      </article>
    </main>
  );
}
