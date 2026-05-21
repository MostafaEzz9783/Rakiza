"use client";

import Link from "next/link";
import { ArrowRight, Circle, LockKeyhole } from "lucide-react";
import { motion } from "framer-motion";
import { Locale, localizedPath } from "@/lib/site";
import { Reveal } from "./motion";

const visibilityRows = [
  ["Cash Conversion Cycle", "14 days", "31 days", "-55%", "IMPROVED", "green"],
  ["Forecast Confidence", "94.2%", "61.0%", "+33.2pp", "ON TARGET", "green"],
  ["Gross Margin", "67.8%", "64.1%", "+3.7pp", "ABOVE PLAN", "green"],
  ["Reporting Latency", "2 days", "18 days", "-89%", "RESOLVED", "green"],
  ["Pricing Leakage", "0.8%", "4.2%", "-3.4pp", "CONTROLLED", "amber"],
  ["Monthly Close", "Day 3", "Day 14", "-79%", "ACCELERATED", "green"]
];

const services = [
  ["CFO-as-a-Service", "Fractional CFO Egypt leadership for cash, reporting, and board-grade decisions."],
  ["FP&A Infrastructure", "FP&A Consultant Egypt systems for budgets, forecasts, and variance control."],
  ["Financial Modeling", "Business Valuation Egypt and scenario models built on numbers, not instinct."],
  ["Pricing Intelligence", "Pricing discipline that connects revenue decisions to margin outcomes."],
  ["Cash Flow Architecture", "Cash Flow Management Egypt frameworks for runway and working capital control."],
  ["Growth Reporting Systems", "SME Financial Advisory cadence for weekly pulse and board intelligence."]
];

const cadenceRows = [
  ["Weekly Executive Briefing", "Automated", "Every Monday 06:00"],
  ["Cash Flow Horizon", "Rolling", "90-Day Forward View"],
  ["Scenario Modeling", "Active", "3 Parallel Projections"],
  ["Board Reporting Package", "Ready", "Quarterly + On-Demand"]
];

const arc = [
  ["01", "Visibility", "Visibility without control is awareness."],
  ["02", "Control", "Control without intelligence is process."],
  ["03", "Intelligence", "Intelligence with systems is compounding advantage."]
];

export function HomeExperience({ locale }: { locale: Locale }) {
  return (
    <main className="bg-[var(--bg-void)] text-[var(--text-primary)]">
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[var(--bg-void)] px-5 py-28 sm:px-8 lg:px-[10vw]">
        <div className="absolute inset-0 control-grid opacity-70" />
        <div className="absolute left-1/2 top-1/2 h-[70vw] max-h-[720px] w-[70vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(75%_0.12_85_/_0.03)] blur-[120px]" />
        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <Reveal>
            <p className="mx-auto mb-8 w-fit rounded-full border border-[oklch(75%_0.12_85_/_0.28)] px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-[var(--gold-muted)]">
              Financial Intelligence · Cairo — Dubai — Riyadh
            </p>
            <h1 className="font-display mx-auto max-w-[760px] text-[clamp(3.5rem,7vw,7rem)] leading-[0.95] tracking-[-0.03em]">
              Clarity is a competitive advantage.
            </h1>
            <p className="mx-auto mt-8 max-w-[440px] text-[1.0625rem] font-light leading-[1.7] text-[var(--text-secondary)]">
              Most businesses do not fail from lack of growth. They fail from lack of visibility.
            </p>
            <HeroSignalStrip />
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={localizedPath(locale, "/waiting-list")} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[oklch(75%_0.12_85_/_0.4)] bg-[oklch(6%_0.005_60)] px-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-300 hover:border-[var(--gold-primary)] hover:bg-[oklch(75%_0.12_85_/_0.06)]">
                Founding Client Access
              </Link>
              <Link href={localizedPath(locale, "/book-call")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)] transition duration-300 hover:text-[var(--text-primary)]">
                Strategy Call <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SignalBar />
      <ProblemReveal />
      <VisibilitySystem />
      <ServicesSection />
      <IntelligenceDetails />
      <ControlStatement />
      <ScalingArc />
      <FoundingAccess locale={locale} />
    </main>
  );
}

function HeroSignalStrip() {
  return (
    <div className="mx-auto mt-9 flex max-w-3xl flex-col justify-center gap-3 font-data text-[10px] uppercase tracking-[0.16em] text-[var(--text-secondary)] md:flex-row md:gap-8">
      {["Close Cycle · 18 days -> 6 days", "Forecast Accuracy · 61% -> 94%", "Cash Visibility · 30 days ahead"].map((metric) => (
        <span key={metric} className="inline-flex items-center justify-center gap-2">
          <span className="live-dot" />
          {metric}
        </span>
      ))}
    </div>
  );
}

function SignalBar() {
  const line = "SERVING SCALING COMPANIES ACROSS EGYPT · GCC · MENA      EGP 20M+ REVENUE · GROWTH-STAGE · FOUNDER-LED";
  return (
    <section className="overflow-hidden border-y border-[oklch(100%_0_0_/_0.06)] bg-[var(--bg-deep)] py-7">
      <div className="signal-marquee flex w-[200%] gap-16 font-data text-[10px] uppercase tracking-[0.2em] text-[oklch(50%_0_0)] md:animate-[signal-marquee_42s_linear_infinite]">
        <span className="w-1/2 whitespace-nowrap text-center">{line}</span>
        <span className="hidden w-1/2 whitespace-nowrap text-center md:block">{line}</span>
      </div>
    </section>
  );
}

function ProblemReveal() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-warm)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <div className="grid gap-16 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.98] tracking-[-0.02em]">
            You&apos;re growing.
            <br />
            But you&apos;re flying
            <br />
            without instruments.
          </h2>
          <p className="mt-10 font-data text-xs uppercase tracking-[0.15em] text-[oklch(45%_0_0)]">
            No real-time cash position · Reporting arrives 3 weeks late · P&amp;L does not match decisions
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <ChaosFragments />
        </Reveal>
      </div>
      <div className="mt-20 grid gap-10 border-t border-[var(--border-faint)] pt-12 text-[1.0625rem] font-light leading-[1.7] text-[var(--text-secondary)] md:grid-cols-2">
        <p>Cash flow is guesswork. Pricing is instinct. Margins are unclear. Your reporting lags by weeks. Forecasts are spreadsheets with hope.</p>
        <p>You have talented people. You have revenue. But your financial infrastructure is invisible to leadership.</p>
      </div>
    </section>
  );
}

function ChaosFragments() {
  return (
    <div className="relative h-[360px] overflow-hidden rounded-2xl border border-[var(--border-faint)] bg-[var(--bg-deep)]">
      <svg viewBox="0 0 520 360" className="absolute inset-0 h-full w-full">
        <path d="M58 90 L130 72 L190 128 L255 96 L334 118 L430 70" fill="none" stroke="oklch(75% 0.12 85 / 0.12)" strokeWidth="2" />
        <path d="M76 188 L142 164 L216 212 L280 172 L356 226 L454 198" fill="none" stroke="oklch(75% 0.12 85 / 0.12)" strokeWidth="2" />
        <path d="M96 282 L164 246 L220 270 L294 238 L390 294" fill="none" stroke="oklch(75% 0.12 85 / 0.12)" strokeWidth="2" />
      </svg>
      <div className="absolute inset-8 terminal-grid opacity-45" />
    </div>
  );
}

function VisibilitySystem() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-deep)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <Reveal className="mx-auto max-w-5xl text-center">
        <p className="font-data text-[11px] uppercase tracking-[0.15em] text-[var(--gold-muted)]">Financial Visibility Infrastructure</p>
        <h2 className="font-display mt-8 text-[clamp(2rem,4vw,3.5rem)] leading-[1] tracking-[-0.02em]">
          Rakiza turns fragmented financial data into clear leadership intelligence.
        </h2>
      </Reveal>
      <Reveal delay={0.12} className="mx-auto mt-20 max-w-6xl">
        <IntelligenceOsPanel />
      </Reveal>
    </section>
  );
}

function IntelligenceOsPanel() {
  return (
    <div className="outer-shell">
      <div className="inner-core relative overflow-x-auto p-5 sm:p-7">
        <div className="scan-line" />
        <div className="mb-5 flex min-w-0 items-center justify-between gap-4 font-data text-[9px] uppercase tracking-[0.18em] text-[oklch(40%_0_0)] sm:min-w-[760px]">
          <span>Rakiza Intelligence OS</span>
          <span className="inline-flex items-center gap-3"><span className="live-dot" /> Live · Updated 07:42 UTC</span>
        </div>
        <table className="w-full min-w-0 border-collapse font-data text-xs tabular-nums sm:min-w-[760px] sm:text-sm">
          <thead className="text-[9px] uppercase tracking-[0.18em] text-[oklch(40%_0_0)]">
            <tr className="border-b border-[oklch(100%_0_0_/_0.05)]">
              <th className="py-3 text-left font-normal">Label</th>
              <th className="py-3 text-left font-normal">Current</th>
              <th className="hidden py-3 text-left font-normal sm:table-cell">Prior</th>
              <th className="hidden py-3 text-left font-normal sm:table-cell">Delta</th>
              <th className="hidden py-3 text-left font-normal sm:table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {visibilityRows.map(([label, current, prior, delta, status, tone], index) => (
              <tr key={label} className={`h-11 border-b border-[oklch(100%_0_0_/_0.05)] last:border-b-0 ${index > 2 ? "hidden sm:table-row" : ""}`}>
                <td className="pr-4 text-[var(--text-secondary)]">{label}</td>
                <td className="whitespace-nowrap text-right text-[var(--text-data)] sm:pr-5 sm:text-left">{current}</td>
                <td className="hidden pr-5 text-[var(--text-tertiary)] sm:table-cell">{prior}</td>
                <td className={`hidden pr-5 sm:table-cell ${delta.startsWith("+") ? "text-[oklch(70%_0.15_145)]" : "text-[oklch(70%_0.15_145)]"}`}>{delta}</td>
                <td className="hidden h-11 items-center gap-2 text-[var(--text-secondary)] sm:inline-flex">
                  <span className={tone === "amber" ? "h-1.5 w-1.5 rounded-full bg-[oklch(75%_0.12_85)]" : "h-1.5 w-1.5 rounded-full bg-[oklch(70%_0.15_145)]"} />
                  {status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section className="bg-[var(--bg-void)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <Reveal>
        <p className="font-data text-[11px] uppercase tracking-[0.15em] text-[var(--gold-muted)]">Financial Advisory Egypt · What we build</p>
      </Reveal>
      <div className="mt-12 grid border-t border-l border-[oklch(100%_0_0_/_0.05)] md:grid-cols-2 lg:grid-cols-3">
        {services.map(([title, copy]) => (
          <Link key={title} href="/en/services" className="group border-r border-b border-[oklch(100%_0_0_/_0.05)] p-8 transition duration-200 hover:-translate-y-px">
            <h3 className="font-display text-[1.35rem] leading-tight text-[var(--text-primary)]">{title}</h3>
            <span className="mt-4 block h-px w-0 bg-[var(--gold-muted)] transition-all duration-300 group-hover:w-12" />
            <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">{copy}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function IntelligenceDetails() {
  return (
    <section className="bg-[var(--bg-deep)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <div className="grid gap-16 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1] tracking-[-0.02em]">
            Your business already generates the data. We build the systems that make it speak.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="outer-shell">
            <div className="inner-core p-6">
              <h3 className="mb-5 font-data text-[9px] uppercase tracking-[0.18em] text-[oklch(40%_0_0)]">Operational Cadence Metrics</h3>
              <div className="grid gap-px bg-[oklch(100%_0_0_/_0.05)] font-data text-sm">
                {cadenceRows.map(([label, state, detail]) => (
                  <div key={label} className="grid grid-cols-[1fr_0.45fr_0.95fr] gap-4 bg-[var(--bg-card)] px-4 py-4">
                    <span className="uppercase text-[var(--text-secondary)]">{label}</span>
                    <span className="text-[var(--text-data)]">{state}</span>
                    <span className="text-right text-[var(--text-tertiary)]">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ControlStatement() {
  return (
    <section className="bg-[var(--bg-void)] px-5 py-32 text-center sm:px-8 lg:px-[10vw] lg:py-48">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.75rem)] leading-[1] tracking-[-0.02em]">
          We do not deliver reports. We build your financial operating rhythm.
        </h2>
        <p className="mt-10 font-data text-xs uppercase tracking-[0.15em] text-[oklch(40%_0_0)]">
          Monthly Close · Weekly Pulse · Real-Time Visibility · Scenario Modeling · Board Intelligence
        </p>
      </div>
    </section>
  );
}

function ScalingArc() {
  return (
    <section className="bg-[var(--bg-deep)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <div className="mx-auto max-w-5xl">
        {arc.map(([number, phase, copy], index) => (
          <motion.div
            key={phase}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-6 border-b border-[oklch(100%_0_0_/_0.04)] py-12 md:grid-cols-[0.2fr_0.35fr_0.45fr]"
          >
            <span className="font-data text-6xl text-[oklch(20%_0_0)]">{number}</span>
            <h3 className={index === 2 ? "font-display text-4xl text-[var(--gold-muted)]" : "font-display text-4xl"}>{phase}</h3>
            <p className="text-lg leading-[1.7] text-[var(--text-secondary)]">{copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FoundingAccess({ locale }: { locale: Locale }) {
  return (
    <article className="bg-[var(--bg-void)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-48">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="font-data text-[11px] uppercase tracking-[0.15em] text-[var(--gold-muted)]">Founding Client Access</p>
        <h2 className="font-display mt-8 text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.02em]">
          Limited to 6 engagements per quarter.
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-[1.0625rem] font-light leading-[1.7] text-[var(--text-secondary)]">
          We work with companies who are ready to build financial infrastructure that compounds.
          Before we speak, we review your context. There are no cold calls. No pitches. No decks.
        </p>
        <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
          Revenue between EGP 20M and EGP 500M · Founder or executive-led with a growth mandate ·
          Committed to building real financial operating systems. SME Financial Advisory for
          companies ready to be measured.
        </p>
      </Reveal>
      <Reveal delay={0.12} className="mx-auto mt-16 max-w-4xl">
        <div className="outer-shell">
          <div className="inner-core p-6 sm:p-9">
            <LockKeyhole className="text-[var(--gold-muted)]" size={22} />
            <div className="mt-8 grid gap-7 md:grid-cols-2">
              <Field label="Company name" placeholder="Company legal or trade name" />
              <SelectLike label="Revenue range" value="EGP 20M - EGP 500M" />
              <SelectLike label="Primary challenge" value="Visibility, forecasting, pricing, or reporting" />
              <Field label="Executive email" placeholder="name@company.com" />
            </div>
            <div className="mt-7">
              <label className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">Brief context</label>
              <textarea
                suppressHydrationWarning
                className="mt-3 min-h-28 w-full resize-none border-0 border-b border-[oklch(100%_0_0_/_0.1)] bg-transparent py-4 text-base text-[var(--text-primary)] outline-none transition focus:border-[var(--gold-primary)]"
                placeholder="What financial control problem needs to be solved first?"
                spellCheck={false}
                style={{ caretColor: "var(--text-primary)" }}
              />
            </div>
            <Link href={localizedPath(locale, "/waiting-list")} className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[oklch(75%_0.12_85_/_0.4)] bg-[oklch(6%_0.005_60)] px-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-300 hover:border-[var(--gold-primary)] hover:bg-[oklch(75%_0.12_85_/_0.06)]">
              Request Private Access <ArrowRight size={14} />
            </Link>
            <p className="mt-6 text-center text-xs leading-6 text-[var(--text-tertiary)]">
              All submissions reviewed personally by Rakiza principals. Response within 5 business days.
            </p>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label>
      <span className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">{label}</span>
      <input suppressHydrationWarning spellCheck={false} autoComplete="off" style={{ caretColor: "var(--text-primary)" }} className="mt-3 w-full border-0 border-b border-[oklch(100%_0_0_/_0.1)] bg-transparent py-4 text-base text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-tertiary)] focus:border-[var(--gold-primary)]" placeholder={placeholder} />
    </label>
  );
}

function SelectLike({ label, value }: { label: string; value: string }) {
  return (
    <label>
      <span className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">{label}</span>
      <span className="mt-3 flex min-h-14 w-full items-center justify-between border-b border-[oklch(100%_0_0_/_0.1)] py-4 text-base text-[var(--text-secondary)]">
        {value}
        <Circle size={8} className="text-[var(--gold-muted)]" />
      </span>
    </label>
  );
}
