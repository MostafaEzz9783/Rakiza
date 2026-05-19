"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Crosshair, LineChart, LockKeyhole, RadioTower, ScanLine, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./motion";
import { Locale, industries, localizedPath, services } from "@/lib/site";

const storyFrames = [
  {
    number: "01",
    title: "Chaos",
    line: "Growth creates pressure before it creates control.",
    copy: "Revenue rises, but decisions still move through scattered sheets, delayed reports, hidden cash strain, and pricing instincts."
  },
  {
    number: "02",
    title: "Visibility",
    line: "The business becomes legible.",
    copy: "Cash, margin, runway, pricing, and operating performance are translated into one leadership view."
  },
  {
    number: "03",
    title: "Control",
    line: "Finance becomes an operating rhythm.",
    copy: "Forecasts, board packs, KPI systems, pricing logic, and accountability loops move into the company cadence."
  },
  {
    number: "04",
    title: "Growth",
    line: "Scale stops being a guess.",
    copy: "Leadership can expand with strategic confidence because the financial system shows what the business can actually sustain."
  }
];

const intelligenceRows = [
  ["Cash conversion cycle", "41 days", "-12d"],
  ["Forecast confidence", "87%", "+18%"],
  ["Gross margin signal", "42.6%", "+6.3%"],
  ["Pricing leakage", "EGP 3.8M", "flagged"],
  ["Reporting latency", "6 days", "-9d"]
];

export function HomeExperience({ locale }: { locale: Locale }) {
  const { scrollYProgress } = useScroll();
  const heroLift = useTransform(scrollYProgress, [0, 0.18], [0, -90]);
  const systemOpacity = useTransform(scrollYProgress, [0, 0.16, 0.28], [0.5, 1, 0.72]);
  const terminalY = useTransform(scrollYProgress, [0, 0.2], [60, -40]);

  return (
    <main className="bg-ink">
      <section className="cinematic-light control-grid relative min-h-[118vh] overflow-hidden pt-28 text-cream">
        <div className="noise-layer" />
        <motion.div
          style={{ y: heroLift, opacity: systemOpacity }}
          className="absolute right-[-22vw] top-20 hidden h-[920px] w-[920px] rounded-full border border-gold/10 lg:block"
        />
        <motion.div
          style={{ y: terminalY }}
          className="absolute right-[3vw] top-[24vh] hidden w-[30vw] max-w-[520px] lg:block"
        >
          <TerminalSystem />
        </motion.div>
        <div className="mx-auto flex min-h-[calc(118vh-7rem)] max-w-[1480px] items-center px-5 pb-28 sm:px-10">
          <Reveal className="relative z-10 max-w-5xl">
            <p className="mb-12 text-xs uppercase tracking-[0.34em] text-gold/80">Rakiza / Financial Control Room</p>
            <h1 className="max-w-[820px] text-[clamp(4rem,7.2vw,8.4rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              Most businesses don’t fail from lack of growth.
            </h1>
            <div className="mt-12 max-w-2xl border-l border-gold/45 pl-6">
              <p className="text-2xl leading-snug text-cream/78 sm:text-3xl">
                They fail from lack of visibility.
              </p>
              <p className="mt-5 text-base leading-8 text-cream/52 sm:text-lg">
                Rakiza builds the financial systems, forecasting cadence, pricing intelligence, and
                executive reporting layer that scaling companies need before complexity becomes expensive.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={localizedPath(locale, "/waiting-list")}
                className="inline-flex w-fit items-center gap-3 border border-gold/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition hover:bg-gold hover:text-ink"
              >
                Founding Client Access <ArrowRight size={15} />
              </Link>
              <Link
                href={localizedPath(locale, "/book-call")}
                className="inline-flex w-fit items-center gap-3 px-2 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-cream/62 transition hover:text-cream"
              >
                Strategy Call <CalendarDays size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink via-ink/82 to-transparent" />
      </section>

      <section className="relative bg-ink text-cream">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-24 sm:px-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="text-xs uppercase tracking-[0.28em] text-gold/75">The operating problem</p>
            <h2 className="mt-7 text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-7xl">
              Growth hides the signals leaders need most.
            </h2>
          </div>
          <div className="grid gap-24 py-8">
            {storyFrames.map((frame) => (
              <Reveal key={frame.title} className="grid gap-8 border-t border-white/10 pt-9 md:grid-cols-[0.22fr_0.78fr]">
                <span className="text-sm text-gold">{frame.number}</span>
                <div>
                  <h3 className="text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">{frame.title}</h3>
                  <p className="mt-5 text-2xl leading-snug text-cream/82">{frame.line}</p>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-cream/50">{frame.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-28 text-ink">
        <div className="absolute left-0 top-20 h-px w-full gold-line opacity-45" />
        <div className="mx-auto grid max-w-[1480px] gap-16 px-5 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Visibility architecture</p>
            <h2 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl">
              We turn financial noise into a leadership control system.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate">
              Not more reports. A system of linked assumptions, operating metrics, forecasts, and
              decision rules that makes the business easier to steer.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <SystemsMap />
          </Reveal>
        </div>
      </section>

      <section className="terminal-grid relative overflow-hidden bg-[#090909] py-28 text-cream">
        <div className="noise-layer" />
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10">
          <Reveal className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold/80">Institutional intelligence</p>
              <h2 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl">
                Analytics that feel operational, not ornamental.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-cream/54">
              Rakiza designs dashboards around real executive decisions: cash, margin, pricing,
              working capital, runway, forecast confidence, and board-level reporting.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <InstitutionalDashboard />
            </Reveal>
            <Reveal delay={0.1}>
              <IntelligenceTable />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-cream">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-10">
          <Reveal className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gold/75">What Rakiza installs</p>
            <h2 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl">
              Advisory that becomes infrastructure.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.025} className="border-t border-white/12 pt-6">
                <LineChart size={18} className="text-gold/80" />
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cream/48">{service.outcome}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-28 text-ink">
        <div className="mx-auto grid max-w-[1480px] gap-14 px-5 sm:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Strategic scale</p>
            <h2 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl">
              Built for founder-led companies outgrowing informal finance.
            </h2>
          </Reveal>
          <div className="grid gap-8">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 0.035} className="grid gap-5 border-t border-ink/14 py-7 sm:grid-cols-[0.3fr_0.7fr]">
                <h3 className="text-2xl font-semibold tracking-[-0.025em]">{industry.title}</h3>
                <div>
                  <p className="text-base leading-7 text-slate">{industry.challenge}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold">{industry.focus.join(" / ")}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cinematic-light relative overflow-hidden py-28 text-cream">
        <div className="noise-layer" />
        <div className="mx-auto grid max-w-[1480px] gap-16 px-5 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold/80">Selective conversion</p>
            <h2 className="mt-8 text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-7xl">
              Founding Client Access is for companies ready to be measured.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-cream/55">
              The first step is not a newsletter. It is a private diagnostic to understand whether
              your financial visibility, pricing, cash control, and reporting cadence can support the
              growth you are pursuing.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <AccessPanel locale={locale} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function TerminalSystem() {
  return (
    <div className="relative border border-white/15 bg-black/28 p-5 shadow-[0_50px_140px_rgba(0,0,0,0.55)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-xs uppercase tracking-[0.2em] text-cream/45">Control layer / live model</span>
        <ScanLine size={18} className="text-gold" />
      </div>
      <div className="grid gap-px bg-white/10">
        {intelligenceRows.slice(0, 4).map(([label, value, delta]) => (
          <div key={label} className="grid grid-cols-[1.1fr_0.55fr_0.45fr] bg-[#10100e]/92 px-4 py-4 text-sm">
            <span className="text-cream/52">{label}</span>
            <span className="font-semibold text-cream">{value}</span>
            <span className="text-right text-gold">{delta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemsMap() {
  return (
    <div className="relative min-h-[560px] overflow-hidden bg-ink p-6 text-cream shadow-panel">
      <div className="noise-layer" />
      <div className="terminal-grid absolute inset-0 opacity-45" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-cream/45">
          <span>Operating model</span>
          <RadioTower size={18} className="text-gold" />
        </div>
        <div className="grid gap-6">
          {["Cash flow", "Forecasting", "Pricing", "Margins", "Board visibility"].map((item, index) => (
            <div key={item} className="flex items-center gap-5">
              <span className="w-10 text-xs text-gold">0{index + 1}</span>
              <div className="h-px flex-1 bg-white/12" />
              <span className="min-w-36 text-right text-lg text-cream/82">{item}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 text-xs text-cream/52">
          <span>Assumptions linked</span>
          <span>Variance tracked</span>
          <span>Actions assigned</span>
        </div>
      </div>
    </div>
  );
}

function InstitutionalDashboard() {
  return (
    <div className="border border-white/12 bg-[#0d0d0d]/92 p-6 shadow-[0_40px_130px_rgba(0,0,0,0.45)]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-gold/70">Executive model</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">Margin and cash control</h3>
        </div>
        <TrendingUp className="text-gold" />
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="h-80 border-l border-b border-white/14 p-5">
          <div className="flex h-full items-end gap-3">
            {[38, 46, 44, 59, 55, 68, 63, 79, 72, 84, 78, 91].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: "18%" }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 bg-gradient-to-t from-gold/18 via-gold/56 to-gold"
              />
            ))}
          </div>
        </div>
        <div className="grid content-between gap-4">
          {[
            ["Runway", "11.4 mo"],
            ["Monthly close", "6 days"],
            ["Leakage found", "EGP 3.8M"],
            ["Decision cadence", "Weekly"]
          ].map(([label, value]) => (
            <div key={label} className="border-t border-white/12 pt-4">
              <p className="text-xs text-cream/42">{label}</p>
              <p className="mt-2 text-2xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IntelligenceTable() {
  return (
    <div className="h-full border border-white/12 bg-black/25 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-[-0.025em]">Signals monitored</h3>
        <Crosshair className="text-gold" size={20} />
      </div>
      <div className="mt-8 grid gap-px bg-white/10">
        {intelligenceRows.map(([label, value, delta]) => (
          <div key={label} className="grid grid-cols-[1.1fr_0.55fr_0.45fr] bg-[#0d0d0d] px-4 py-4 text-sm">
            <span className="text-cream/52">{label}</span>
            <span className="font-semibold">{value}</span>
            <span className="text-right text-gold/82">{delta}</span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm leading-7 text-cream/46">
        Built for leadership meetings where every number must connect to a decision, an owner, and a
        financial consequence.
      </p>
    </div>
  );
}

function AccessPanel({ locale }: { locale: Locale }) {
  return (
    <div className="border border-gold/24 bg-black/25 p-7 shadow-[0_40px_130px_rgba(0,0,0,0.5)] backdrop-blur-xl">
      <LockKeyhole className="text-gold" size={28} />
      <h3 className="mt-10 text-4xl font-semibold tracking-[-0.04em]">Private diagnostic access</h3>
      <div className="mt-8 grid gap-5 text-sm text-cream/62">
        {["Founder-led qualification", "Financial health scoring", "Control maturity review", "Advisory path recommendation"].map((item) => (
          <div key={item} className="flex items-center gap-3 border-t border-white/10 pt-4">
            <Check size={15} className="text-gold" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <Link
        href={localizedPath(locale, "/waiting-list")}
        className="mt-10 inline-flex w-full items-center justify-center gap-3 bg-gold px-6 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-cream"
      >
        Request Founding Access <ArrowRight size={15} />
      </Link>
    </div>
  );
}
