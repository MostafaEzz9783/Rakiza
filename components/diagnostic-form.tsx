"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Circle, Download, Loader2 } from "lucide-react";
import { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { submitDiagnostic } from "@/app/actions/submit-diagnostic";

export function DiagnosticForm({ compact = false, locale = "en" }: { compact?: boolean; locale?: Locale }) {
  const dict = getDictionary(locale);
  const fields = useMemo(() => [
    ["cash", dict.diagnosticForm.fields.cash],
    ["reporting", dict.diagnosticForm.fields.reporting],
    ["pricing", dict.diagnosticForm.fields.pricing],
    ["profit", dict.diagnosticForm.fields.profit],
    ["growth", dict.diagnosticForm.fields.growth]
  ] as const, [dict]);

  const [values, setValues] = useState<Record<string, number>>({
    cash: 3,
    reporting: 3,
    pricing: 2,
    profit: 3,
    growth: 4
  });

  const [companyName, setCompanyName] = useState("");
  const [executiveEmail, setExecutiveEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const score = useMemo(() => {
    const total = Object.values(values).reduce((sum, value) => sum + value, 0);
    return Math.round((total / (fields.length * 5)) * 100);
  }, [values, fields]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation if not compact
    if (!compact && !executiveEmail) {
      setErrorMsg(locale === "ar" ? "يرجى إدخال البريد الإلكتروني" : "Please enter email");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const response = await submitDiagnostic({
      companyStage: compact ? undefined : dict.diagnosticForm.stageValue,
      primaryChallenge: compact ? undefined : dict.diagnosticForm.challengeValue,
      companyName: compact ? undefined : companyName,
      executiveEmail: compact ? "diagnostic-compact@rakiza.co" : executiveEmail,
      score,
      formType: "diagnostic",
      values
    });

    setLoading(false);

    if (response.success) {
      setSubmitted(true);
    } else {
      setErrorMsg(locale === "ar" ? "حدث خطأ في الخادم، يرجى المحاولة لاحقاً." : "Server error, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="outer-shell text-left rtl:text-right">
      <div className="inner-core relative overflow-hidden p-6 text-[var(--text-primary)] sm:p-8">
        <div className="scan-line" />
        <div className="flex items-start justify-between gap-6 border-b border-[var(--border-faint)] pb-8">
          <div>
            <p className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--gold-muted)]">
              {dict.diagnosticForm.badge}
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1] tracking-[-0.02em]">
              {dict.diagnosticForm.title}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--text-secondary)]">
              {dict.diagnosticForm.subtitle}
            </p>
          </div>
          <div className="text-right rtl:text-left">
            <p className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
              {dict.diagnosticForm.scoreLabel}
            </p>
            <p className="font-data mt-2 text-5xl text-[var(--text-data)]">{score}</p>
          </div>
        </div>

        {compact ? null : (
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            <SelectLike label={dict.diagnosticForm.stageLabel} value={dict.diagnosticForm.stageValue} />
            <SelectLike label={dict.diagnosticForm.challengeLabel} value={dict.diagnosticForm.challengeValue} />
            <Field 
              label={dict.diagnosticForm.companyNameLabel} 
              placeholder={dict.diagnosticForm.companyNamePlaceholder} 
              value={companyName}
              onChange={setCompanyName}
            />
            <Field 
              label={dict.diagnosticForm.emailLabel} 
              placeholder={dict.diagnosticForm.emailPlaceholder} 
              value={executiveEmail}
              onChange={setExecutiveEmail}
              type="email"
            />
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
                className="h-1 accent-[#A88A50] cursor-pointer"
              />
            </label>
          ))}
        </div>

        {errorMsg && (
          <p className="mt-4 text-xs text-red-500 font-data">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-[oklch(75%_0.12_85_/_0.4)] bg-[oklch(6%_0.005_60)] px-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-300 hover:border-[var(--gold-primary)] hover:bg-[oklch(75%_0.12_85_/_0.06)] disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={15} />
          ) : submitted ? (
            dict.diagnosticForm.ctaSubmitted
          ) : (
            dict.diagnosticForm.ctaDefault
          )}
          {submitted ? <Download size={15} /> : <ArrowRight size={14} className="rtl:rotate-180" />}
        </button>
        
        {submitted && (
          <div className="mt-6 border-t border-[var(--border-faint)] pt-6 text-sm leading-7 text-[var(--text-secondary)]">
            {dict.diagnosticForm.successNote}
          </div>
        )}
      </div>
    </form>
  );
}

function Field({ 
  label, 
  placeholder, 
  value, 
  onChange,
  type = "text"
}: { 
  label: string; 
  placeholder: string; 
  value: string; 
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label>
      <span className="font-data text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">{label}</span>
      <input 
        suppressHydrationWarning 
        spellCheck={false} 
        autoComplete="off" 
        type={type}
        style={{ caretColor: "var(--text-primary)" }} 
        className="mt-3 w-full border-0 border-b border-[oklch(100%_0_0_/_0.1)] bg-transparent py-4 text-base text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-tertiary)] focus:border-[var(--gold-primary)]" 
        placeholder={placeholder} 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
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

export function CalculatorPreview({ locale = "en" }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const calculatorNames = [
    locale === "ar" ? "حاسبة التدفق النقدي" : "Cash Flow Calculator",
    locale === "ar" ? "حاسبة نسبة الربحية" : "Profitability Calculator",
    locale === "ar" ? "فاحص انضباط التسعير" : "Pricing Health Checker"
  ];
  
  return (
    <div className="grid gap-px bg-[var(--border-faint)]">
      {calculatorNames.map((name) => (
        <div key={name} className="flex items-center justify-between bg-[var(--bg-card)] p-6 text-[var(--text-primary)]">
          <span className="font-light tracking-[-0.015em]">{name}</span>
          <ArrowRight className="text-[var(--gold-muted)] rtl:rotate-180" size={17} />
        </div>
      ))}
    </div>
  );
}
