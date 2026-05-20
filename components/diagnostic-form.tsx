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

const stages = ["Growth-stage startup", "Established SME (20M+ EGP revenue)", "Real Estate / FMCG / F&B operator", "Other"];
const challenges = ["No visibility into cash flow or runway", "Forecasts exist but are not trusted", "Pricing feels disconnected from margins", "Reporting is slow and not board-ready"];

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
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--gold-muted)]">Financial Control Readiness</p>
            <h2 className="font-display mt-5 text-4xl leading-[1] tracking-[-0.025em]">Private advisory intake</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--text-secondary)]">
              A qualification flow for companies that need financial visibility before the next stage of scale.
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">Score</p>
            <p className="font-data mt-2 text-5xl text-[var(--text-data)]">{score}</p>
          </div>
        </div>

        {compact ? null : (
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <ChoiceSet title="Company stage" options={stages} />
            <ChoiceSet title="Primary financial challenge" options={challenges} />
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

        {compact ? null : (
          <div className="mt-9">
            <label className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Founder / executive email</label>
            <input
              suppressHydrationWarning
              className="mt-4 w-full border-0 border-b border-[rgba(201,169,110,0.34)] bg-transparent px-0 py-4 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
              placeholder="name@company.com"
            />
          </div>
        )}

        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[rgba(201,169,110,0.54)] px-6 py-5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-500 hover:border-[var(--gold-primary)] hover:text-[var(--text-primary)]"
        >
          {submitted ? "Access Request Captured" : "Request Diagnostic Access"}
          {submitted ? <Download size={15} /> : <span className="grid h-7 w-7 place-items-center rounded-full border border-[rgba(201,169,110,0.34)]"><ArrowRight size={13} /></span>}
        </button>
        {submitted ? (
          <div className="mt-6 border-t border-[var(--border-faint)] pt-6 text-sm leading-7 text-[var(--text-secondary)]">
            Your request has been captured. Applications are reviewed personally, with founding client positions limited per quarter.
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ChoiceSet({ title, options }: { title: string; options: string[] }) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">{title}</h3>
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
