import Link from "next/link";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { Locale, localizedPath } from "@/lib/site";

const cases = [
  ["F&B operator", "Cash control and branch profitability rhythm", "Visibility across branch economics, working capital, and weekly leadership decisions."],
  ["FMCG portfolio", "Pricing intelligence and margin leakage map", "Clear SKU/channel margin signals and pricing actions without revenue panic."],
  ["Growth startup", "Investor-ready model and reporting pack", "Runway clarity, board reporting, and fundraising assumptions leadership could defend."]
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/case-studies",
    title: "Financial Advisory Case Studies | Rakiza",
    description:
      "Premium case-study structures for CFO-as-a-Service, FP&A, pricing intelligence, cash flow control, and startup finance advisory."
  });
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return (
    <main className="bg-ink pt-32 text-cream">
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">Case studies with numbers, systems, and decisions.</h1>
          <p className="mt-7 text-lg leading-8 text-cream/62">
            Each case study is designed around a premium advisory narrative: context, diagnostic,
            system implemented, measurable clarity, and decision unlocked.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {cases.map(([industry, title, copy]) => (
            <div key={title} className="bg-ink p-7">
              <p className="text-sm font-semibold text-gold">{industry}</p>
              <h2 className="mt-8 text-3xl font-semibold tracking-[-0.02em]">{title}</h2>
              <p className="mt-5 text-sm leading-7 text-cream/58">{copy}</p>
            </div>
          ))}
        </div>
        <Link href={localizedPath(locale, "/waiting-list")} className="mt-12 inline-flex bg-gold px-6 py-4 text-sm font-semibold text-ink">
          Join the Waiting List
        </Link>
      </section>
    </main>
  );
}
