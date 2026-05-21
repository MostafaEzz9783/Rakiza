"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Circle, Download } from "lucide-react";

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
    <div className="outer-shell">
      <div className="inner-core relative overflow-hidden p-6 text-[var(--text-primary)] sm:p-8">
        <div className="scan-line" />
        <div className="flex items-start justify-between gap-6 border-b border-[var(--border-faint)] pb-8">
          <div>
            <p className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--gold-muted)]">Financial Control Readiness</p>
            <h2 className="font-display mt-5 text-4xl leading-[1] tracking-[-0.02em]">Private advisory intake</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--text-secondary)]">
              A qualification flow for companies that need financial visibility before the next stage of scale.
            </p>
          </div>
          <div className="text-right">
            <p className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">Score</p>
            <p className="font-data mt-2 text-5xl text-[var(--text-data)]">{score}</p>
          </div>
        </div>

        {compact ? null : (
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            <SelectLike label="Company stage" value="Established SME (20M+ EGP revenue)" />
            <SelectLike label="Primary challenge" value="Cash flow, forecasting, pricing, reporting" />
            <Field label="Company name" placeholder="Company legal or trade name" />
            <Field label="Executive email" placeholder="name@company.com" />
          </div>
        )}

        <div className="mt-9 grid gap-6">
          {fields.map(([key, label]) => (
            <label key={key} className="grid gap-3">
              <span className="flex justify-between text-sm text-[var(--text-secondary)]">
                {label} <span className="font-data text-[var(--text-data)]">{values[key]}/5</span>
              </span>
              <input
                type="range"
                min="1"
                max="5"
                value={values[key]}
                onChange={(event) => setValues((current) => ({ ...current, [key]: Number(event.target.value) }))}
                className="h-1 accent-[#A88A50]"
              />
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[oklch(75%_0.12_85_/_0.4)] bg-[oklch(6%_0.005_60)] px-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-300 hover:border-[var(--gold-primary)] hover:bg-[oklch(75%_0.12_85_/_0.06)]"
        >
          {submitted ? "Access Request Captured" : "Request Diagnostic Access"}
          {submitted ? <Download size={15} /> : <ArrowRight size={14} />}
        </button>
        {submitted ? (
          <div className="mt-6 border-t border-[var(--border-faint)] pt-6 text-sm leading-7 text-[var(--text-secondary)]">
            Your request has been captured. All submissions are reviewed personally by Rakiza principals.
          </div>
        ) : null}
      </div>
    </div>
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

export function CalculatorPreview() {
  return (
    <div className="grid gap-px bg-[var(--border-faint)]">
      {["Cash Flow Calculator", "Profitability Calculator", "Pricing Health Checker"].map((name) => (
        <div key={name} className="flex items-center justify-between bg-[var(--bg-card)] p-6 text-[var(--text-primary)]">
          <span className="font-light tracking-[-0.015em]">{name}</span>
          <ArrowRight className="text-[var(--gold-muted)]" size={17} />
        </div>
      ))}
    </div>
  );
}
