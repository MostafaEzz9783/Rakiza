import { DiagnosticForm } from "@/components/diagnostic-form";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { Locale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/waiting-list",
    title: "Founding Client Access | Rakiza",
    description:
      "Request founding client access to Rakiza's private Growth & Financial Advisory diagnostic for scaling SMEs and founder-led companies."
  });
}

const criteria = [
  ["01", "Revenue complexity", "The company has moved beyond simple bookkeeping and needs financial control across teams, products, branches, or channels."],
  ["02", "Leadership urgency", "Founders or executives need stronger visibility before expansion, fundraising, pricing changes, or restructuring decisions."],
  ["03", "Operational readiness", "The business is prepared to measure cash, margin, pricing, reporting, and accountability with discipline."]
];

export default function WaitingListPage() {
  return (
    <main className="cinematic-light relative overflow-hidden pt-32 text-cream">
      <div className="noise-layer" />
      <section className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1480px] gap-16 px-5 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-gold/80">Private intake / Rakiza</p>
          <h1 className="mt-10 max-w-4xl text-[clamp(4rem,8vw,9.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            Founding Client Access.
          </h1>
          <p className="mt-10 max-w-2xl text-xl leading-9 text-cream/62">
            This is not a newsletter signup. It is a selective diagnostic for founder-led companies
            that need visibility, control, and strategic financial infrastructure before scaling further.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <DiagnosticForm />
        </Reveal>
      </section>

      <section className="relative border-t border-white/10 bg-ink/82 py-24">
        <div className="mx-auto grid max-w-[1480px] gap-14 px-5 sm:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold/75">Qualification logic</p>
            <h2 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl">
              Built for companies ready to be seen clearly.
            </h2>
          </Reveal>
          <div className="grid gap-10">
            {criteria.map(([number, title, copy]) => (
              <Reveal key={title} className="grid gap-6 border-t border-white/12 pt-7 sm:grid-cols-[0.18fr_0.82fr]">
                <span className="text-sm text-gold">{number}</span>
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.035em]">{title}</h3>
                  <p className="mt-4 text-base leading-8 text-cream/52">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
