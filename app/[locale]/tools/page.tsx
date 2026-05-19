import { CalculatorPreview, DiagnosticForm } from "@/components/diagnostic-form";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { Locale, tools } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/tools",
    title: "Financial Health Tools and Calculators | Rakiza",
    description:
      "Interactive financial health score, cash flow calculator, growth readiness score, profitability calculator, and pricing health checker for SMEs."
  });
}

export default function ToolsPage() {
  return (
    <main className="bg-cream pt-32">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h1 className="text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">Financial diagnostics before advisory.</h1>
          <p className="mt-7 text-lg leading-8 text-slate">
            Rakiza tools turn early conversations into structured financial intelligence. Each tool
            can feed a CRM, email automation, and advisory qualification workflow.
          </p>
          <div className="mt-10 grid gap-3">
            {tools.map((tool) => (
              <div key={tool} className="border border-line bg-white/70 p-4 text-sm font-medium">{tool}</div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <DiagnosticForm compact />
        </Reveal>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <CalculatorPreview />
      </section>
    </main>
  );
}
