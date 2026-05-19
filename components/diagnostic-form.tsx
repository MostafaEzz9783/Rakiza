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
    <div className="border border-line bg-white p-6 shadow-panel">
      <div className="flex items-start justify-between gap-5">
        <div>
          <h2 className="text-2xl font-semibold">SME Financial Health Check</h2>
          <p className="mt-2 text-sm leading-6 text-slate">
            Score your current control layer and identify the advisory path your company needs next.
          </p>
        </div>
        <div className="min-w-20 text-right">
          <p className="text-xs text-slate">Score</p>
          <p className="text-4xl font-semibold tracking-[-0.04em]">{score}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-5">
        {fields.map(([key, label]) => (
          <label key={key} className="grid gap-2">
            <span className="flex justify-between text-sm font-medium text-ink">
              {label} <span className="text-gold">{values[key]}/5</span>
            </span>
            <input
              type="range"
              min="1"
              max="5"
              value={values[key]}
              onChange={(event) => setValues((current) => ({ ...current, [key]: Number(event.target.value) }))}
              className="accent-[#C9A84C]"
            />
          </label>
        ))}
      </div>
      {compact ? null : (
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <input className="border border-line px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Founder name" />
          <input className="border border-line px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Work email" />
          <input className="border border-line px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Company revenue range" />
          <input className="border border-line px-4 py-3 text-sm outline-none focus:border-gold" placeholder="Industry" />
        </div>
      )}
      <button
        type="button"
        onClick={() => setSubmitted(true)}
        className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-ink px-5 py-4 text-sm font-semibold text-cream transition hover:bg-gold hover:text-ink"
      >
        {submitted ? "Application Captured" : "Generate Advisory Snapshot"}
        {submitted ? <Download size={16} /> : <Send size={16} />}
      </button>
      {submitted ? (
        <div className="mt-6 border border-gold/40 bg-gold/10 p-4 text-sm leading-6 text-ink">
          Your toolkit architecture is ready: score summary, CFO priority map, and recommended next
          conversation. The email automation hook is ready for a CRM or marketing platform.
        </div>
      ) : null}
    </div>
  );
}

export function CalculatorPreview() {
  return (
    <div className="grid gap-4">
      {["Cash Flow Calculator", "Profitability Calculator", "Pricing Health Checker"].map((name) => (
        <div key={name} className="flex items-center justify-between border border-line bg-white p-5">
          <span className="font-semibold">{name}</span>
          <ArrowRight className="text-gold" size={17} />
        </div>
      ))}
    </div>
  );
}
