"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLink } from "./brand";
import { Locale, localizedPath } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const dict = getDictionary(locale);

  const nav = [
    [dict.nav.approach, "/"],
    [dict.nav.advisory, "/services"],
    [dict.nav.industries, "/industries"],
    [dict.nav.insights, "/insights"]
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 text-[var(--text-primary)] sm:px-8">
      <div className="mx-auto flex h-14 w-fit min-w-[min(1180px,calc(100vw-32px))] items-center justify-between rounded-full border border-[var(--border-subtle)] bg-[oklch(4%_0.005_60_/_0.85)] px-4 shadow-[0_24px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:px-5">
        <BrandLink locale={locale} />
        
        <nav className="hidden items-center gap-8 text-[0.8125rem] font-normal tracking-[0.04em] text-[var(--text-secondary)] lg:flex">
          {nav.map(([label, path]) => (
            <Link key={label} href={localizedPath(locale, path)} className="transition duration-300 hover:text-[var(--text-primary)]">
              {label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden items-center gap-5 lg:flex">
          <Link href={localizedPath(locale === "en" ? "ar" : "en")} className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition">
            {dict.nav.langSwitch}
          </Link>
          <Link
            href={localizedPath(locale, "/waiting-list")}
            className="rounded-full border border-[oklch(75%_0.12_85_/_0.4)] bg-[oklch(6%_0.005_60)] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-300 hover:border-[var(--gold-primary)] hover:bg-[oklch(75%_0.12_85_/_0.06)]"
          >
            {dict.nav.foundingAccess}
          </Link>
        </div>
        
        <button
          aria-label="Open navigation"
          onClick={() => setOpen((value) => !value)}
          className="relative grid h-10 w-10 place-items-center rounded-full border border-[var(--border-visible)] text-[var(--text-primary)] lg:hidden"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>
      
      {open ? (
        <div className="fixed inset-0 z-[-1] bg-black/90 px-6 pt-28 backdrop-blur-3xl lg:hidden text-left rtl:text-right">
          <nav className="grid gap-7 text-2xl text-[var(--text-primary)]">
            {nav.map(([label, path]) => (
              <Link key={label} href={localizedPath(locale, path)} onClick={() => setOpen(false)} className="font-display">
                {label}
              </Link>
            ))}
            <Link href={localizedPath(locale, "/book-call")} onClick={() => setOpen(false)} className="font-display">
              {dict.nav.strategyCall}
            </Link>
            <Link href={localizedPath(locale === "en" ? "ar" : "en")} onClick={() => setOpen(false)} className="font-display text-sm text-[var(--gold-muted)]">
              {locale === "en" ? "العربية (AR)" : "English (EN)"}
            </Link>
            <Link
              href={localizedPath(locale, "/waiting-list")}
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full border border-[rgba(201,169,110,0.5)] px-5 py-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)]"
            >
              {dict.nav.foundingAccess}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  
  const translatedServices = [
    locale === "ar" ? "المدير المالي الاستشاري" : "CFO-as-a-Service",
    locale === "ar" ? "استشارات التخطيط المالي" : "FP&A Infrastructure",
    locale === "ar" ? "النمذجة المالية التفاعلية" : "Financial Modeling",
    locale === "ar" ? "استراتيجيات التسعير الذكي" : "Pricing Intelligence",
    locale === "ar" ? "هندسة التدفق النقدي" : "Cash Flow Architecture",
    locale === "ar" ? "أنظمة تقارير النمو" : "Growth Reporting Systems"
  ];

  return (
    <footer className="bg-[var(--bg-void)] text-[var(--text-primary)] border-t border-[var(--border-faint)]">
      <div className="mx-auto grid max-w-[1180px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_2fr]">
        <div className="text-left rtl:text-right">
          <BrandLink locale={locale} />
          <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
            {dict.footer.tagline}
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 text-left rtl:text-right">
          <FooterGroup title={dict.footer.services} items={translatedServices} />
          <FooterGroup title={dict.footer.presence} items={[dict.footer.cities]} />
          <FooterGroup title={dict.footer.contact} items={[dict.footer.call, "hello@rakiza.com"]} />
        </div>
      </div>
      <div className="border-t border-[var(--border-faint)] px-5 py-6 text-center text-[10px] text-[var(--text-tertiary)] font-data">
        {dict.footer.rights}
      </div>
    </footer>
  );
}

function FooterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--gold-muted)]">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm text-[var(--text-secondary)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
