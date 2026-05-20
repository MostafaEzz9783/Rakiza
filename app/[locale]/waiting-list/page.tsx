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
      "Request founding client access to Rakiza's private Financial Control Readiness diagnostic for scaling SMEs and founder-led companies."
  });
}

const criteria = [
  ["01", "Revenue complexity", "The company has moved beyond simple bookkeeping and needs financial control across teams, products, branches, or channels."],
  ["02", "Leadership urgency", "Founders or executives need stronger visibility before expansion, fundraising, pricing changes, or restructuring decisions."],
  ["03", "Operational readiness", "The business is prepared to measure cash, margin, pricing, reporting, and accountability with discipline."]
];

export default function WaitingListPage() {
  return (
    <main className="relative overflow-hidden bg-[var(--bg-void)] pt-32 text-[var(--text-primary)]">
      <section className="relative mx-auto grid min-h-[calc(100dvh-6rem)] max-w-[1180px] gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="absolute bottom-[8vh] left-[12vw] h-[520px] w-[520px] rounded-full bg-[var(--gold-whisper)] blur-[150px]" />
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--gold-muted)]">Founding Client Access · By Qualification</p>
          <h1 className="font-display mt-10 max-w-3xl text-[clamp(56px,7vw,96px)] leading-[0.95] tracking-[-0.035em]">
            Built for businesses ready to be seen clearly.
          </h1>
          <p className="mt-10 max-w-2xl text-lg font-light leading-[1.75] text-[var(--text-secondary)]">
            Rakiza accepts a limited number of founding clients per quarter. This is not a
            subscription. This is not a demo. This is the beginning of operational clarity.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <DiagnosticForm />
        </Reveal>
      </section>

      <section className="relative border-t border-[var(--border-faint)] bg-[var(--bg-deep)] px-5 py-28 sm:px-8 lg:px-[10vw]">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--gold-muted)]">Qualification logic</p>
            <h2 className="font-display mt-8 text-[clamp(42px,5vw,72px)] leading-[1] tracking-[-0.025em]">
              Private access for companies prepared to measure what matters.
            </h2>
          </Reveal>
          <div className="grid gap-10">
            {criteria.map(([number, title, copy]) => (
              <Reveal key={title} className="grid gap-6 border-t border-[var(--border-faint)] pt-7 sm:grid-cols-[0.18fr_0.82fr]">
                <span className="font-data text-xs text-[var(--text-tertiary)]">{number}</span>
                <div>
                  <h3 className="text-3xl font-light tracking-[-0.025em]">{title}</h3>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
