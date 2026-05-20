"use client";

import Link from "next/link";
import { ArrowRight, Check, Circle, LockKeyhole, RadioTower } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Locale, localizedPath } from "@/lib/site";
import { Reveal } from "./motion";

const kpis = [
  ["Cash Conversion Cycle", "34 days", "-8 vs last Q"],
  ["Forecast Confidence", "91%", "+4pts"],
  ["Gross Margin Target", "64.2%", "on track"],
  ["Reporting Latency", "3 days", "improved"],
  ["Pricing Leakage Risk", "LOW", "monitored"],
  ["Monthly Close Day", "Day 4", "achieved"]
];

const systems = [
  ["01", "CFO-as-a-Service", "Financial leadership without the full-time cost"],
  ["02", "FP&A Infrastructure", "Budgets, forecasts, and variance that boards trust"],
  ["03", "Financial Modeling", "Decisions built on numbers, not instinct"],
  ["04", "Pricing Intelligence", "Capture the value you are already creating"],
  ["05", "Cash Flow Architecture", "Runway clarity and working capital control"],
  ["06", "Growth Reporting Systems", "The operating rhythm that scaling demands"]
];

const controlWords = "We do not deliver reports. We build your financial operating rhythm.".split(" ");

export function HomeExperience({ locale }: { locale: Locale }) {
  const { scrollYProgress } = useScroll();
  const lineY = useTransform(scrollYProgress, [0, 0.2], [0, -55]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.12, 0.24], [0.28, 0.85, 0.18]);

  return (
    <main className="bg-[var(--bg-void)] text-[var(--text-primary)]">
      <section className="relative min-h-[100dvh] overflow-hidden bg-[var(--bg-void)] px-5 pb-24 pt-28 sm:px-8 lg:px-[10vw]">
        <div className="absolute inset-0 control-grid opacity-45" />
        <div className="absolute bottom-[12vh] left-[18vw] h-[520px] w-[520px] rounded-full bg-[var(--gold-whisper)] blur-[140px]" />
        <motion.div
          style={{ y: lineY, opacity: lineOpacity }}
          className="absolute bottom-[26vh] right-[12vw] hidden h-32 w-[38vw] lg:block"
        >
          <svg viewBox="0 0 620 160" className="h-full w-full overflow-visible">
            <path
              d="M2 122 C 80 118, 110 88, 170 96 S 276 132, 338 76 450 34, 618 48"
              fill="none"
              stroke="rgba(201,169,110,0.42)"
              strokeWidth="1.5"
            />
            <circle cx="338" cy="76" r="4" fill="var(--gold-muted)" />
          </svg>
        </motion.div>

        <div className="relative z-10 flex min-h-[calc(100dvh-7rem)] items-end">
          <Reveal className="max-w-4xl pb-10">
            <p className="mb-8 inline-flex rounded-full border border-[rgba(201,169,110,0.28)] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[var(--gold-muted)]">
              Financial Intelligence · Cairo — Dubai — Riyadh
            </p>
            <h1 className="font-display max-w-4xl text-[clamp(56px,7vw,96px)] leading-[0.95] tracking-[-0.035em] text-[var(--text-primary)]">
              Clarity is a competitive advantage.
            </h1>
            <p className="mt-8 max-w-[440px] text-lg font-light leading-[1.75] text-[var(--text-secondary)]">
              Most businesses do not fail from lack of growth. They fail from lack of visibility.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={localizedPath(locale, "/waiting-list")}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(201,169,110,0.56)] px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-500 hover:border-[var(--gold-primary)] hover:text-[var(--text-primary)]"
              >
                Founding Client Access
              </Link>
              <Link
                href={localizedPath(locale, "/book-call")}
                className="inline-flex items-center justify-center gap-2 rounded-full px-3 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)] transition duration-500 hover:text-[var(--text-primary)]"
              >
                Strategy Call <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SignalBar />
      <ProblemReveal />
      <VisibilitySystem />
      <SystemsList />
      <IntelligenceDetails />
      <ControlStatement />
      <ScalingCascade />
      <FoundingAccess locale={locale} />
    </main>
  );
}

function SignalBar() {
  return (
    <section className="border-y border-[var(--border-faint)] bg-[var(--bg-deep)] px-5 py-8 sm:px-8 lg:px-[10vw]">
      <div className="flex flex-col justify-between gap-5 text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)] md:flex-row">
        <span>Serving scaling companies across Egypt, GCC & MENA</span>
        <span>EGP 20M+ Revenue · Growth-Stage · Founder-Led</span>
      </div>
    </section>
  );
}

function ProblemReveal() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-void)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <div className="grid gap-16 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
        <Reveal>
          <h2 className="font-display text-[clamp(42px,5vw,76px)] leading-[0.96] tracking-[-0.025em]">
            You’re growing.
            <br />
            But you’re flying
            <br />
            without instruments.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <ChaosVisual />
        </Reveal>
      </div>
      <div className="mt-20 grid gap-10 border-t border-[var(--border-faint)] pt-12 text-lg font-light leading-[1.75] text-[var(--text-secondary)] md:grid-cols-2">
        <Reveal>
          <p>Cash flow is guesswork. Pricing is instinct. Margins are unclear. Your reporting lags by weeks. Forecasts are spreadsheets with hope.</p>
        </Reveal>
        <Reveal delay={0.08}>
          <p>You have talented people. You have revenue. But your financial infrastructure is invisible to leadership.</p>
        </Reveal>
      </div>
    </section>
  );
}

function ChaosVisual() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-[var(--border-faint)] bg-[var(--bg-deep)]">
      <div className="absolute inset-0 terminal-grid opacity-35" />
        {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={index}
          initial={false}
          whileInView={{ opacity: 0.22, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
          className="absolute h-px bg-[rgba(242,240,235,0.32)]"
          style={{
            left: `${8 + index * 5}%`,
            right: `${12 + (index % 4) * 8}%`,
            top: `${14 + index * 6}%`
          }}
        />
      ))}
      <div className="absolute bottom-8 left-8 right-8 grid gap-3 font-data text-xs text-[var(--text-tertiary)]">
        <span>margin variance: unresolved</span>
        <span>cash forecast: source conflict</span>
        <span>pricing leakage: unknown</span>
      </div>
    </div>
  );
}

function VisibilitySystem() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-deep)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--bg-void)] to-transparent" />
      <Reveal className="mx-auto max-w-5xl text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--gold-muted)]">Financial Visibility Infrastructure</p>
        <h2 className="font-display mt-8 text-[clamp(42px,5vw,72px)] leading-[1] tracking-[-0.025em]">
          Rakiza turns fragmented financial data into clear leadership intelligence.
        </h2>
      </Reveal>
      <Reveal delay={0.12} className="mx-auto mt-20 max-w-6xl">
        <DashboardPanel />
      </Reveal>
    </section>
  );
}

function DashboardPanel() {
  return (
    <div className="outer-shell relative">
      <div className="inner-core relative overflow-hidden p-5 sm:p-8">
        <div className="scan-line" />
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[var(--border-faint)] pb-6 sm:flex-row">
          <div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
              <span className="live-dot" />
              Live control model
            </div>
            <h3 className="mt-4 text-2xl font-light text-[var(--text-primary)]">Financial Control Metrics</h3>
          </div>
          <span className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">Last updated: 04s ago</span>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl bg-[var(--border-faint)] sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map(([label, value, delta], index) => (
            <motion.div
              key={label}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--bg-card)] p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">{label}</p>
              <p className="font-data mt-5 text-[clamp(28px,3vw,42px)] text-[var(--text-data)]">{value}</p>
              <p className="mt-4 text-xs text-[var(--text-secondary)]">{delta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SystemsList() {
  return (
    <section className="bg-[var(--bg-void)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--gold-muted)]">What we build</p>
      </Reveal>
      <div className="mt-10">
        {systems.map(([number, title, copy]) => (
          <Link
            key={number}
            href="/en/services"
            className="group grid gap-5 border-b border-[var(--border-faint)] py-8 transition duration-300 hover:pl-1 md:grid-cols-[0.12fr_0.38fr_0.5fr]"
          >
            <span className="font-data text-xs text-[var(--text-tertiary)] transition group-hover:text-[var(--gold-muted)]">{number}</span>
            <span className="text-2xl font-light text-[var(--text-primary)]">{title}</span>
            <span className="text-base leading-7 text-[var(--text-secondary)] md:text-right">{copy}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function IntelligenceDetails() {
  const rows = [
    ["Cash Conversion Cycle", "34 days", "-8 vs prior quarter"],
    ["Forecast Accuracy", "91%", "Above 90% threshold"],
    ["Gross Margin", "64.2%", "Sector benchmark: 58-65%"],
    ["Reporting Latency", "3 days", "From 11 days at intake"],
    ["Pricing Leakage Risk", "LOW", "Monitored weekly"],
    ["Monthly Close", "Day 4", "Within 5-day target"],
    ["Working Capital Ratio", "1.8x", "Healthy threshold: >1.5x"],
    ["Runway", "11 months", "Extended from 7 months"]
  ];

  return (
    <section className="bg-[var(--bg-deep)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <div className="grid gap-16 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
        <Reveal>
          <h2 className="font-display text-[clamp(42px,4.8vw,70px)] leading-[1] tracking-[-0.025em]">
            Your business already generates the data. We build the systems that make it speak.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="outer-shell">
            <div className="inner-core relative overflow-hidden p-6">
              <div className="scan-line" />
              <h3 className="mb-7 text-[11px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Financial Control Metrics</h3>
              <div className="grid gap-px bg-[var(--border-faint)]">
                {rows.map(([label, value, note]) => (
                  <div key={label} className="grid grid-cols-[1fr_0.36fr_0.9fr] gap-4 bg-[var(--bg-card)] px-4 py-4 text-sm">
                    <span className="text-[var(--text-secondary)]">{label}</span>
                    <span className="font-data text-[var(--text-data)]">{value}</span>
                    <span className="text-right text-[var(--text-tertiary)]">{note}</span>
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
        <h2 className="font-display text-[clamp(42px,5.5vw,82px)] leading-[1] tracking-[-0.025em]">
          {controlWords.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
              className="mr-[0.18em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-lg font-light leading-[1.75] text-[var(--text-secondary)]">
          The difference between a growing company and a scaling company is financial control. Not
          spreadsheets. Not monthly PDFs. A living system that runs before decisions are made.
        </p>
      </div>
    </section>
  );
}

function ScalingCascade() {
  const panels = [
    "Visibility without control is just awareness.",
    "Control without intelligence is just process.",
    "Intelligence with systems is compounding advantage."
  ];

  return (
    <section className="bg-[var(--bg-deep)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <div className="relative mx-auto max-w-5xl">
        {panels.map((panel, index) => (
          <motion.div
            key={panel}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.15, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group relative border-l-2 border-[rgba(201,169,110,0.42)] bg-[var(--bg-surface)] p-8 shadow-[0_28px_120px_rgba(0,0,0,0.26)] transition duration-500 hover:z-10 hover:translate-x-1 sm:p-12"
            style={{ marginTop: index === 0 ? 0 : -12, marginLeft: `${index * 3}%` }}
          >
            <p className="font-display text-[clamp(32px,4vw,56px)] leading-[1.05] text-[var(--text-primary)]">{panel}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FoundingAccess({ locale }: { locale: Locale }) {
  return (
    <article className="bg-[var(--bg-void)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-48">
      <Reveal className="mx-auto max-w-5xl text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--gold-muted)]">Founding Client Access · By Qualification</p>
        <h2 className="font-display mt-8 text-[clamp(44px,5vw,76px)] leading-[1] tracking-[-0.025em]">
          Built for businesses ready to be seen clearly.
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg font-light leading-[1.75] text-[var(--text-secondary)]">
          Rakiza accepts a limited number of founding clients per quarter. Founding access includes a
          private Financial Control Readiness diagnostic, an advisory path recommendation, and direct
          access to the founding team.
        </p>
      </Reveal>
      <Reveal delay={0.12} className="mx-auto mt-16 max-w-4xl">
        <div className="outer-shell">
          <div className="inner-core p-6 sm:p-9">
            <LockKeyhole className="text-[var(--gold-muted)]" size={22} />
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <Question title="Company stage" options={["Growth-stage startup", "Established SME (20M+ EGP revenue)", "Real Estate / FMCG / F&B operator", "Other"]} />
              <Question title="Primary financial challenge" options={["No visibility into cash flow or runway", "Forecasts exist but are not trusted", "Pricing feels disconnected from margins", "Reporting is slow and not board-ready"]} />
            </div>
            <div className="mt-8">
              <label className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Founder / executive email</label>
              <input
                suppressHydrationWarning
                className="mt-4 w-full border-0 border-b border-[rgba(201,169,110,0.34)] bg-transparent px-0 py-4 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
                placeholder="name@company.com"
              />
            </div>
            <Link
              href={localizedPath(locale, "/waiting-list")}
              className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[rgba(201,169,110,0.54)] px-6 py-5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-500 hover:border-[var(--gold-primary)] hover:text-[var(--text-primary)]"
            >
              Request Diagnostic Access <span className="grid h-7 w-7 place-items-center rounded-full border border-[rgba(201,169,110,0.34)]"><ArrowRight size={13} /></span>
            </Link>
            <p className="mt-6 text-center text-xs leading-6 text-[var(--text-tertiary)]">
              Applications are reviewed personally. Founding client positions are limited per quarter.
            </p>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

function Question({ title, options }: { title: string; options: string[] }) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-[0.18em] text-[var(--text-secondary)]">{title}</h3>
      <div className="mt-5 grid gap-3">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
            <Circle size={9} className="text-[var(--gold-muted)]" />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
