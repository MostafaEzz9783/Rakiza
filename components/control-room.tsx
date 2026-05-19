"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, CalendarDays, Check, CircleDollarSign, LineChart, LockKeyhole, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./motion";
import { Locale, industries, localizedPath, services, tools } from "@/lib/site";

const narrative = [
  ["Chaos", "Cash cycles, disconnected reports, pricing guesswork, and reactive decisions."],
  ["Visibility", "A clean operating model that shows revenue, margin, cash, and growth quality."],
  ["Control", "CFO cadence, FP&A systems, dashboards, pricing logic, and accountability loops."],
  ["Growth", "Scale decisions made with confidence, investor readiness, and profitability discipline."]
];

export function HomeExperience({ locale }: { locale: Locale }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.22], [1, 0.62]);

  return (
    <main>
      <section className="control-grid relative min-h-screen overflow-hidden bg-ink pt-28 text-cream">
        <motion.div style={{ y, opacity }} className="absolute right-[-8%] top-28 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
                Growth & Financial Advisory for companies ready to scale with control.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/68">
                Rakiza helps SMEs and growth-stage companies across Egypt and MENA build scalable
                financial systems, improve profitability, optimize pricing, and gain strategic
                visibility through CFO-as-a-Service, FP&A, financial modeling, valuation, and
                business intelligence.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={localizedPath(locale, "/waiting-list")}
                  className="inline-flex items-center justify-center gap-3 bg-gold px-6 py-4 text-sm font-semibold text-ink transition hover:bg-cream"
                >
                  Join the Waiting List <ArrowRight size={16} />
                </Link>
                <Link
                  href={localizedPath(locale, "/book-call")}
                  className="inline-flex items-center justify-center gap-3 border border-white/16 px-6 py-4 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
                >
                  Book a Strategy Call <CalendarDays size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ControlDashboard />
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
              From financial noise to a leadership operating system.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              Rakiza turns fragmented finance into an executive rhythm: reliable numbers, clear
              choices, and systems that keep profitability visible as the company scales.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-4">
            {narrative.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.06} className="bg-cream p-7">
                <span className="text-sm font-semibold text-gold">0{index + 1}</span>
                <h3 className="mt-8 text-2xl font-semibold text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-24 text-cream">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">Advisory systems, not isolated reports.</h2>
              <p className="mt-5 text-lg leading-8 text-cream/62">
                Each service is designed to become part of the company’s financial control layer.
              </p>
            </div>
            <Link href={localizedPath(locale, "/services")} className="justify-self-start border border-gold/50 px-5 py-3 text-sm font-semibold text-gold lg:justify-self-end">
              Explore all services
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.slug} href={localizedPath(locale, `/services/${service.slug}`)} className="group bg-[#111111] p-6 transition hover:bg-gold hover:text-ink">
                <LineChart className="text-gold transition group-hover:text-ink" size={22} />
                <h3 className="mt-10 text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-cream/58 transition group-hover:text-ink/72">{service.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">Start with the SME Financial Health Check.</h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              A focused diagnostic for cash visibility, reporting maturity, pricing health,
              profitability discipline, and growth readiness. The result becomes your first advisory map.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {tools.slice(0, 4).map((tool) => (
                <div key={tool} className="flex items-center gap-3 border border-line bg-white/55 p-4 text-sm font-medium text-ink">
                  <Check size={16} className="text-gold" /> {tool}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <DiagnosticCard locale={locale} />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">Built for the economics of modern MENA companies.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-5">
            {industries.map((industry) => (
              <Link href={localizedPath(locale, `/industries/${industry.slug}`)} key={industry.slug} className="bg-white p-6 transition hover:bg-cream">
                <h3 className="text-xl font-semibold">{industry.title}</h3>
                <p className="mt-5 text-sm leading-6 text-slate">{industry.challenge}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">A calmer way to make expensive decisions.</h2>
            <p className="mt-5 text-lg leading-8 text-cream/62">
              Case studies and insights are structured for answer engines and leadership teams:
              clear problems, methods, numbers, and strategic implications.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {["Cash flow control for a multi-site F&B operator", "Pricing intelligence for an FMCG portfolio", "Investor-ready finance pack for a growth-stage startup"].map((title) => (
                <div key={title} className="border border-white/10 p-6">
                  <p className="text-sm text-gold">Case Study Framework</p>
                  <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-cream/56">Problem, diagnostic, system implemented, financial visibility gained, and next decision unlocked.</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function ControlDashboard() {
  return (
    <div className="relative">
      <div className="absolute -left-8 top-10 hidden border border-gold/30 bg-ink/80 p-4 shadow-gold backdrop-blur-xl lg:block">
        <p className="text-xs text-cream/50">Cash Visibility</p>
        <p className="mt-2 text-2xl font-semibold text-gold">91%</p>
      </div>
      <div className="absolute -right-4 bottom-16 hidden border border-white/12 bg-cream p-4 text-ink shadow-panel lg:block">
        <p className="text-xs text-slate">Margin Leakage</p>
        <p className="mt-2 text-2xl font-semibold">-18%</p>
      </div>
      <div className="gold-gradient border border-white/12 p-4 shadow-2xl">
        <div className="border border-white/10 bg-[#0f0f0f]/92 p-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-cream/50">Financial Control Room</p>
              <h2 className="mt-2 text-2xl font-semibold">Executive Growth System</h2>
            </div>
            <TrendingUp className="text-gold" />
          </div>
          <div className="grid gap-4 py-5 sm:grid-cols-3">
            {[
              ["Revenue", "EGP 84.2M", "+14.8%"],
              ["Runway", "11.4 mo", "+2.1"],
              ["Gross Margin", "42.6%", "+6.3%"]
            ].map(([label, value, delta]) => (
              <div key={label} className="border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-cream/48">{label}</p>
                <p className="mt-3 text-xl font-semibold">{value}</p>
                <p className="mt-2 text-xs text-gold">{delta}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="h-52 border border-white/10 bg-black/20 p-4">
              <div className="flex h-full items-end gap-2">
                {[42, 58, 46, 72, 63, 88, 76, 94, 84, 97].map((height, index) => (
                  <div key={index} className="flex-1 bg-gradient-to-t from-gold/35 to-gold" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              {[
                ["Forecast confidence", "High"],
                ["Pricing discipline", "Improving"],
                ["Reporting cycle", "6 days"],
                ["Board pack", "Ready"]
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border border-white/10 px-4 py-3 text-sm">
                  <span className="text-cream/52">{label}</span>
                  <span className="font-semibold text-cream">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiagnosticCard({ locale }: { locale: Locale }) {
  return (
    <div className="border border-line bg-white p-6 shadow-panel">
      <div className="flex items-center justify-between">
        <CircleDollarSign className="text-gold" size={28} />
        <span className="text-sm font-semibold text-slate">Score preview</span>
      </div>
      <div className="mt-8">
        <p className="text-sm text-slate">Financial Health Score</p>
        <p className="mt-2 text-6xl font-semibold tracking-[-0.04em]">74</p>
        <p className="mt-4 text-sm leading-6 text-slate">
          Strong commercial momentum, but cash controls and pricing visibility need executive
          attention before the next growth phase.
        </p>
      </div>
      <div className="mt-8 grid gap-3">
        {["Cash control", "Reporting maturity", "Pricing health"].map((label, index) => (
          <div key={label}>
            <div className="mb-2 flex justify-between text-xs text-slate">
              <span>{label}</span>
              <span>{[68, 82, 71][index]}%</span>
            </div>
            <div className="h-2 bg-ink/8">
              <div className="h-2 bg-gold" style={{ width: `${[68, 82, 71][index]}%` }} />
            </div>
          </div>
        ))}
      </div>
      <Link href={localizedPath(locale, "/waiting-list")} className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-ink px-5 py-4 text-sm font-semibold text-cream">
        Begin Diagnostic <ArrowRight size={16} />
      </Link>
    </div>
  );
}
