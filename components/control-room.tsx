"use client";

import Link from "next/link";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { motion } from "framer-motion";
import { Locale, localizedPath } from "@/lib/site";
import { Reveal } from "./motion";
import { getDictionary } from "@/lib/dictionary";

export function HomeExperience({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const translatedVisibilityRows = [
    [dict.osPanel.rows["Cash Conversion Cycle"], locale === "ar" ? "34 يوماً" : "34 days", locale === "ar" ? "48 يوماً" : "48 days", locale === "ar" ? "-8 أيام" : "-8 days", dict.osPanel.rows["improved"], "green"],
    [dict.osPanel.rows["Forecast Confidence"], "91%", "76%", "+15pp", dict.osPanel.rows["onTarget"], "green"],
    [dict.osPanel.rows["Gross Margin Target"], "64.2%", "58.0%", "+6.2pp", dict.osPanel.rows["abovePlan"], "green"],
    [dict.osPanel.rows["Reporting Latency"], locale === "ar" ? "3 أيام" : "3 days", locale === "ar" ? "11 يوماً" : "11 days", locale === "ar" ? "-8 أيام" : "-8 days", dict.osPanel.rows["resolved"], "green"],
    [dict.osPanel.rows["Pricing Leakage Risk"], dict.osPanel.rows["low"], dict.osPanel.rows["elevated"], dict.osPanel.rows["monitored"], dict.osPanel.rows["controlled"], "amber"],
    [dict.osPanel.rows["Monthly Close Day"], locale === "ar" ? "اليوم 4" : "Day 4", locale === "ar" ? "اليوم 12" : "Day 12", locale === "ar" ? "-8 أيام" : "-8 days", dict.osPanel.rows["accelerated"], "green"],
    [dict.osPanel.rows["Working Capital Ratio"], "1.8x", "1.4x", "+0.4x", dict.osPanel.rows["healthy"], "green"],
    [dict.osPanel.rows["Runway"], locale === "ar" ? "11 شهراً" : "11 months", locale === "ar" ? "7 أشهر" : "7 months", locale === "ar" ? "+4 أشهر" : "+4 months", dict.osPanel.rows["extended"], "green"]
  ];

  const translatedServices = [
    ["01", locale === "ar" ? "المدير المالي الاستشاري (Fractional CFO)" : "CFO-as-a-Service", locale === "ar" ? "قيادة مالية تنفيذية متقدمة دون تكلفة التوظيف الكامل." : "Financial leadership without the full-time cost."],
    ["02", locale === "ar" ? "استشارات التخطيط المالي (FP&A)" : "FP&A Infrastructure", locale === "ar" ? "الموازنات والتوقعات والتحليلات المالية الموثوقة لمجلس الإدارة." : "Budgets, forecasts, and variance analysis that boards trust."],
    ["03", locale === "ar" ? "النمذجة المالية التفاعلية" : "Financial Modeling", locale === "ar" ? "بناء القرارات المالية المصيرية على أسس علمية صلبة، لا على الغريزة." : "Decisions built on structure, not instinct."],
    ["04", locale === "ar" ? "استراتيجيات التسعير الذكي" : "Pricing Intelligence", locale === "ar" ? "استخلص القيمة الحقيقية الكاملة التي تولدها أعمالك بالفعل." : "Capture the value you're already creating."],
    ["05", locale === "ar" ? "هندسة التدفق النقدي" : "Cash Flow Architecture", locale === "ar" ? "الوضوح التام لفترة الأمان المالي وضبط دورة رأس المال العامل." : "Runway clarity and working capital control."],
    ["06", locale === "ar" ? "أنظمة تقارير النمو والـ BI" : "Growth Reporting Systems", locale === "ar" ? "تأسيس إيقاع تشغيل رقمي حي تتطلبه الشركات للتوسع والنمو." : "The operating rhythm that scaling demands."]
  ];

  const translatedControlMetricRows = [
    [dict.osPanel.rows["Cash Conversion Cycle"], locale === "ar" ? "34 يوماً" : "34 days", dict.intelligence.rows["priorQuarter"]],
    [dict.intelligence.rows["Forecast Accuracy"], "91%", dict.intelligence.rows["threshold90"]],
    [dict.intelligence.rows["Gross Margin"], "64.2%", dict.intelligence.rows["benchmark"]],
    [dict.osPanel.rows["Reporting Latency"], locale === "ar" ? "3 أيام" : "3 days", dict.intelligence.rows["from11days"]],
    [dict.osPanel.rows["Pricing Leakage Risk"], dict.osPanel.rows["low"], dict.intelligence.rows["monitoredWeekly"]],
    [dict.intelligence.rows["Monthly Close"], locale === "ar" ? "اليوم 4" : "Day 4", dict.intelligence.rows["within5days"]],
    [dict.osPanel.rows["Working Capital Ratio"], "1.8x", dict.intelligence.rows["healthyThreshold"]],
    [dict.osPanel.rows["Runway"], locale === "ar" ? "11 شهراً" : "11 months", dict.intelligence.rows["extendedFrom7"]]
  ];

  const translatedArc = [
    ["01", dict.scalingArc["01"], dict.scalingArc["01Copy"]],
    ["02", dict.scalingArc["02"], dict.scalingArc["02Copy"]],
    ["03", dict.scalingArc["03"], dict.scalingArc["03Copy"]]
  ];

  return (
    <main className="bg-[var(--bg-void)] text-[var(--text-primary)] text-left rtl:text-right">
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[var(--bg-void)] px-5 py-28 sm:px-8 lg:px-[10vw]">
        <div className="absolute inset-0 control-grid opacity-70" />
        <div className="absolute left-1/2 top-1/2 h-[70vw] max-h-[720px] w-[70vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(75%_0.12_85_/_0.03)] blur-[120px]" />
        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <Reveal>
            <p className="mx-auto mb-8 w-fit rounded-full border border-[oklch(75%_0.12_85_/_0.28)] px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-[var(--gold-muted)]">
              {dict.hero.badge}
            </p>
            <h1 className="font-display mx-auto max-w-[760px] text-[clamp(3.5rem,7vw,7rem)] leading-[0.95] tracking-[-0.03em]">
              {dict.hero.title}
            </h1>
            <p className="mx-auto mt-8 max-w-[440px] text-[1.0625rem] font-light leading-[1.7] text-[var(--text-secondary)]">
              {dict.hero.subtitle}
            </p>
            <HeroSignalStrip locale={locale} />
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={localizedPath(locale, "/waiting-list")} className="inline-flex min-h-12 items-center justify-center rounded-full border border-[oklch(75%_0.12_85_/_0.4)] bg-[oklch(6%_0.005_60)] px-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-300 hover:border-[var(--gold-primary)] hover:bg-[oklch(75%_0.12_85_/_0.06)]">
                {dict.hero.ctaFounding}
              </Link>
              <Link href={localizedPath(locale, "/book-call")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-secondary)] transition duration-300 hover:text-[var(--text-primary)]">
                {dict.hero.ctaStrategy} <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SignalBar locale={locale} />
      <ProblemReveal locale={locale} />
      <VisibilitySystem locale={locale} rows={translatedVisibilityRows} />
      <ServicesSection locale={locale} services={translatedServices} />
      <IntelligenceDetails locale={locale} rows={translatedControlMetricRows} />
      <ControlStatement locale={locale} />
      <ScalingArc locale={locale} arc={translatedArc} />
      <FoundingAccess locale={locale} />
    </main>
  );
}

function HeroSignalStrip({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <div className="mx-auto mt-9 flex max-w-3xl flex-col justify-center gap-3 font-data text-[10px] uppercase tracking-[0.16em] text-[var(--text-secondary)] md:flex-row md:gap-8">
      {dict.hero.metrics.map((metric) => (
        <span key={metric} className="inline-flex items-center justify-center gap-2">
          <span className="live-dot" />
          {metric}
        </span>
      ))}
    </div>
  );
}

function SignalBar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <section className="overflow-hidden border-y border-[oklch(100%_0_0_/_0.06)] bg-[var(--bg-deep)] py-7">
      <div className="mx-auto flex max-w-[100vw] justify-center overflow-hidden px-5 font-data text-[10px] uppercase tracking-[0.2em] text-[oklch(50%_0_0)]">
        <span className="text-center md:whitespace-nowrap">{dict.signalBar}</span>
      </div>
    </section>
  );
}

function ProblemReveal({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <section className="relative overflow-hidden bg-[var(--bg-warm)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <div className="grid gap-16 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.98] tracking-[-0.02em]">
            {dict.problem.title}
          </h2>
          <p className="mt-10 font-data text-xs uppercase tracking-[0.15em] text-[oklch(45%_0_0)]">
            {dict.problem.badge}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <ChaosFragments />
        </Reveal>
      </div>
      <div className="mt-20 grid gap-10 border-t border-[var(--border-faint)] pt-12 text-[1.0625rem] font-light leading-[1.7] text-[var(--text-secondary)] md:grid-cols-2">
        <p>{dict.problem.para1}</p>
        <p>{dict.problem.para2}</p>
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

function VisibilitySystem({ locale, rows }: { locale: Locale; rows: string[][] }) {
  const dict = getDictionary(locale);
  return (
    <section className="relative overflow-hidden bg-[var(--bg-deep)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <Reveal className="mx-auto max-w-5xl text-center">
        <p className="font-data text-[11px] uppercase tracking-[0.15em] text-[var(--gold-muted)]">
          {dict.osPanel.badge}
        </p>
        <h2 className="font-display mt-8 text-[clamp(2rem,4vw,3.5rem)] leading-[1] tracking-[-0.02em]">
          {dict.osPanel.title}
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-[1.0625rem] font-light leading-[1.7] text-[var(--text-secondary)]">
          {dict.osPanel.subtitle}
        </p>
      </Reveal>
      <Reveal delay={0.12} className="mx-auto mt-20 max-w-6xl">
        <IntelligenceOsPanel locale={locale} rows={rows} />
      </Reveal>
    </section>
  );
}

function IntelligenceOsPanel({ locale, rows }: { locale: Locale; rows: string[][] }) {
  const dict = getDictionary(locale);
  return (
    <div className="outer-shell">
      <div className="inner-core relative overflow-x-auto p-5 sm:p-7">
        <div className="scan-line" />
        <div className="mb-5 flex min-w-0 items-center justify-between gap-4 font-data text-[9px] uppercase tracking-[0.18em] text-[oklch(40%_0_0)] sm:min-w-[760px] ltr:flex-row rtl:flex-row-reverse">
          <span>{dict.osPanel.systemTitle}</span>
          <span className="inline-flex items-center gap-3"><span className="live-dot" /> {dict.osPanel.statusLive}</span>
        </div>
        <table className="w-full min-w-0 border-collapse font-data text-xs tabular-nums sm:min-w-[760px] sm:text-sm text-left rtl:text-right">
          <thead className="text-[9px] uppercase tracking-[0.18em] text-[oklch(40%_0_0)]">
            <tr className="border-b border-[oklch(100%_0_0_/_0.05)]">
              <th className="py-3 font-normal">{dict.osPanel.cols.label}</th>
              <th className="py-3 font-normal">{dict.osPanel.cols.current}</th>
              <th className="hidden py-3 font-normal sm:table-cell">{dict.osPanel.cols.prior}</th>
              <th className="hidden py-3 font-normal sm:table-cell">{dict.osPanel.cols.delta}</th>
              <th className="hidden py-3 font-normal sm:table-cell">{dict.osPanel.cols.status}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, current, prior, delta, status, tone], index) => (
              <tr key={label} className={`h-11 border-b border-[oklch(100%_0_0_/_0.05)] last:border-b-0 ${index > 2 ? "hidden sm:table-row" : ""}`}>
                <td className="pr-4 pl-4 text-[var(--text-secondary)]">{label}</td>
                <td className="whitespace-nowrap text-[var(--text-data)] sm:pr-5 sm:pl-5">{current}</td>
                <td className="hidden pr-5 pl-5 text-[var(--text-tertiary)] sm:table-cell">{prior}</td>
                <td className="hidden pr-5 pl-5 text-[oklch(70%_0.15_145)] sm:table-cell">{delta}</td>
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

function ServicesSection({ locale, services }: { locale: Locale; services: string[][] }) {
  const dict = getDictionary(locale);
  return (
    <section className="bg-[var(--bg-void)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <Reveal>
        <p className="font-data text-[11px] uppercase tracking-[0.15em] text-[var(--gold-muted)]">
          {dict.servicesSection.badge}
        </p>
        <h2 className="font-display mt-8 max-w-3xl text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1] tracking-[-0.02em]">
          {dict.servicesSection.title}
        </h2>
      </Reveal>
      <div className="mt-16 border-t border-[oklch(100%_0_0_/_0.05)]">
        {services.map(([number, title, copy]) => (
          <Link
            key={title}
            href={localizedPath(locale, "/services")}
            className="group grid gap-5 border-b border-[oklch(100%_0_0_/_0.05)] py-8 transition duration-300 hover:translate-x-1 rtl:hover:-translate-x-1 md:grid-cols-[0.16fr_0.34fr_0.5fr] md:items-baseline"
          >
            <span className="font-data text-xs text-[var(--text-tertiary)]">{number}</span>
            <h3 className="font-display text-[1.65rem] leading-tight text-[var(--text-primary)]">{title}</h3>
            <p className="text-[1rem] leading-7 text-[var(--text-secondary)]">{copy}</p>
            <span className="col-start-2 hidden h-px w-0 bg-[var(--gold-muted)] transition-all duration-300 group-hover:w-12 md:block" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function IntelligenceDetails({ locale, rows }: { locale: Locale; rows: string[][] }) {
  const dict = getDictionary(locale);
  return (
    <section className="bg-[var(--bg-deep)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-44">
      <div className="grid gap-16 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
        <Reveal>
          <p className="font-data text-[11px] uppercase tracking-[0.15em] text-[var(--gold-muted)]">
            {dict.intelligence.badge}
          </p>
          <h2 className="font-display mt-8 text-[clamp(2rem,4vw,3.5rem)] leading-[1] tracking-[-0.02em]">
            {dict.intelligence.title}
          </h2>
          <div className="mt-8 max-w-xl space-y-6 text-[1.0625rem] font-light leading-[1.7] text-[var(--text-secondary)]">
            <p>{dict.intelligence.para1}</p>
            <p>{dict.intelligence.para2}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="outer-shell">
            <div className="inner-core p-6">
              <h3 className="mb-5 SuppressHydrationWarning font-data text-[9px] uppercase tracking-[0.18em] text-[oklch(40%_0_0)]">
                {locale === "ar" ? "المؤشر / الحالة / الإشارة" : "Metric / Status / Signal"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse font-data text-xs tabular-nums text-left rtl:text-right">
                  <thead className="text-[9px] uppercase tracking-[0.18em] text-[oklch(40%_0_0)]">
                    <tr className="border-b border-[oklch(100%_0_0_/_0.05)]">
                      <th className="py-3 font-normal">{dict.intelligence.cols.metric}</th>
                      <th className="py-3 font-normal">{dict.intelligence.cols.status}</th>
                      <th className="py-3 font-normal">{dict.intelligence.cols.signal}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(([metric, status, signal]) => (
                      <tr key={metric} className="h-11 border-b border-[oklch(100%_0_0_/_0.05)] last:border-b-0">
                        <td className="pr-5 pl-5 text-[var(--text-secondary)]">{metric}</td>
                        <td className="pr-5 pl-5 text-[var(--text-data)]">{status}</td>
                        <td className="text-[var(--text-tertiary)]">{signal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ControlStatement({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <section className="bg-[var(--bg-void)] px-5 py-32 text-center sm:px-8 lg:px-[10vw] lg:py-48">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-[clamp(2.5rem,5.5vw,5.75rem)] leading-[1] tracking-[-0.02em]">
          {dict.controlStatement.title}
        </h2>
        <div className="mx-auto mt-9 max-w-3xl space-y-6 text-[1.0625rem] font-light leading-[1.7] text-[var(--text-secondary)]">
          <p>{dict.controlStatement.para1}</p>
          <p>{dict.controlStatement.para2}</p>
          <p>{dict.controlStatement.para3}</p>
        </div>
      </div>
    </section>
  );
}

function ScalingArc({ locale, arc }: { locale: Locale; arc: string[][] }) {
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
            className="grid gap-6 border-b border-[oklch(100%_0_0_/_0.04)] py-12 md:grid-cols-[0.2fr_0.4fr_0.4fr] text-left rtl:text-right"
          >
            <span className="font-data text-6xl text-[oklch(20%_0_0)]">{number}</span>
            <h3 className={index === 2 ? "font-display text-4xl text-[var(--gold-muted)]" : "font-display text-4xl"}>{phase}</h3>
            <p className="font-display text-3xl leading-tight text-[var(--text-primary)]">{copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FoundingAccess({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <article className="bg-[var(--bg-void)] px-5 py-32 sm:px-8 lg:px-[10vw] lg:py-48 text-center">
      <Reveal className="mx-auto max-w-4xl">
        <p className="font-data text-[11px] uppercase tracking-[0.15em] text-[var(--gold-muted)]">
          {dict.foundingAccess.badge}
        </p>
        <h2 className="font-display mt-8 text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-[-0.02em]">
          {dict.foundingAccess.title}
        </h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-[1.0625rem] font-light leading-[1.7] text-[var(--text-secondary)]">
          <p>{dict.foundingAccess.para1}</p>
          <p>{dict.foundingAccess.para2}</p>
          <p>{dict.foundingAccess.para3}</p>
        </div>
      </Reveal>
      <Reveal delay={0.12} className="mx-auto mt-16 max-w-4xl text-left rtl:text-right">
        <div className="outer-shell">
          <div className="inner-core p-6 sm:p-9">
            <LockKeyhole className="text-[var(--gold-muted)]" size={22} />
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <OptionGroup title={dict.foundingAccess.stageTitle} options={dict.foundingAccess.stages} />
              <OptionGroup title={dict.foundingAccess.challengeTitle} options={dict.foundingAccess.challenges} />
            </div>
            <Link href={localizedPath(locale, "/waiting-list")} className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[oklch(75%_0.12_85_/_0.4)] bg-[oklch(6%_0.005_60)] px-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-300 hover:border-[var(--gold-primary)] hover:bg-[oklch(75%_0.12_85_/_0.06)]">
              {dict.foundingAccess.cta} <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
            <p className="mt-6 text-center text-xs leading-6 text-[var(--text-tertiary)] font-data">
              {dict.foundingAccess.note}
            </p>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

function OptionGroup({ title, options }: { title: string; options: string[] }) {
  return (
    <fieldset>
      <legend className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">{title}</legend>
      <div className="mt-4 grid gap-3">
        {options.map((option) => (
          <label key={option} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]">
            <span className="mt-1.5 grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full border border-[oklch(75%_0.12_85_/_0.35)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-muted)] opacity-0 transition group-hover:opacity-100" />
            </span>
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
