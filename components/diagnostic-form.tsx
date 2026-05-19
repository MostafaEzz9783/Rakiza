"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Download, Send } from "lucide-react";

const fields = [
  ["cash", "Cash visibility"],
  ["reporting", "Reporting maturity"],
  ["pricing", "Pricing discipline"],
  ["profit", "Profitability control"],
  ["growth", "Growth readiness"]
] as const;

export function DiagnosticForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<Record<string, number>>({
    cash: 3,
    reporting: 3,
    pricing: 2,
    profit: 3,
    growth: 4
  });
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    const total = Object.values(values).reduce((sum, value) => sum + value, 0);
    return Math.round((total / (fields.length * 5)) * 100);
  }, [values]);

  return (
    <div className="relative overflow-hidden border border-gold/24 bg-[#0c0c0b] p-6 text-cream shadow-[0_44px_140px_rgba(0,0,0,0.38)]">
      <div className="noise-layer" />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-7">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold/80">Founding client diagnostic</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em]">Financial Control Readiness</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-cream/52">
              A private qualification flow for companies that need sharper visibility before the
              next stage of growth.
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-cream/40">Score</p>
            <p className="mt-2 text-6xl font-semibold tracking-[-0.06em] text-gold">{score}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {fields.map(([key, label]) => (
            <label key={key} className="grid gap-3">
              <span className="flex justify-between text-sm text-cream/72">
                {label} <span className="font-semibold text-gold">{values[key]}/5</span>
              </span>
              <input
                type="range"
                min="1"
                max="5"
                value={values[key]}
                onChange={(event) => setValues((current) => ({ ...current, [key]: Number(event.target.value) }))}
                className="h-1 accent-[#C9A84C]"
              />
            </label>
          ))}
        </div>

        {compact ? null : (
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {["Founder name", "Work email", "Annual revenue range", "Industry"].map((placeholder) => (
              <input
                key={placeholder}
                className="border border-white/12 bg-white/[0.03] px-4 py-4 text-sm text-cream outline-none placeholder:text-cream/32 focus:border-gold/70"
                placeholder={placeholder}
              />
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="mt-9 inline-flex w-full items-center justify-center gap-3 bg-gold px-5 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-cream"
        >
          {submitted ? "Access Request Captured" : "Request Advisory Snapshot"}
          {submitted ? <Download size={16} /> : <Send size={16} />}
        </button>
        {submitted ? (
          <div className="mt-6 border border-gold/35 bg-gold/10 p-5 text-sm leading-7 text-cream/72">
            Your diagnostic has been captured. The next layer is a control-readiness review covering
            cash visibility, reporting maturity, pricing discipline, and advisory fit.
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function CalculatorPreview() {
  return (
    <div className="grid gap-px bg-ink/12">
      {["Cash Flow Calculator", "Profitability Calculator", "Pricing Health Checker"].map((name) => (
        <div key={name} className="flex items-center justify-between bg-cream p-6">
          <span className="font-semibold tracking-[-0.015em]">{name}</span>
          <ArrowRight className="text-gold" size={17} />
        </div>
      ))}
    </div>
  );
}
