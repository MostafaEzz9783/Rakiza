"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLink } from "./brand";
import { Locale, localizedPath } from "@/lib/site";

const nav = [
  ["Approach", "/"],
  ["Advisory", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"]
];

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 text-[var(--text-primary)] sm:px-8">
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between rounded-full border border-[var(--border-subtle)] bg-[rgba(8,8,8,0.85)] px-4 shadow-[0_24px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:px-6">
        <BrandLink locale={locale} />
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-[var(--text-secondary)] lg:flex">
          {nav.map(([label, path]) => (
            <Link key={label} href={localizedPath(locale, path)} className="transition duration-300 hover:text-[var(--text-primary)]">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <Link href={localizedPath(locale === "en" ? "ar" : "en")} className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
            {locale === "en" ? "AR" : "EN"}
          </Link>
          <Link
            href={localizedPath(locale, "/waiting-list")}
            className="rounded-full border border-[rgba(201,169,110,0.5)] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)] transition duration-300 hover:border-[var(--gold-primary)] hover:text-[var(--text-primary)]"
          >
            Founding Access
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
        <div className="fixed inset-0 z-[-1] bg-black/90 px-6 pt-28 backdrop-blur-3xl lg:hidden">
          <nav className="grid gap-7 text-2xl text-[var(--text-primary)]">
            {nav.map(([label, path]) => (
              <Link key={label} href={localizedPath(locale, path)} onClick={() => setOpen(false)} className="font-display">
                {label}
              </Link>
            ))}
            <Link href={localizedPath(locale, "/book-call")} onClick={() => setOpen(false)} className="font-display">
              Strategy Call
            </Link>
            <Link
              href={localizedPath(locale, "/waiting-list")}
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full border border-[rgba(201,169,110,0.5)] px-5 py-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-primary)]"
            >
              Founding Client Access
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-[var(--bg-void)] text-[var(--text-primary)]">
      <div className="mx-auto grid max-w-[1180px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <BrandLink locale={locale} />
          <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
            Financial Intelligence for Scaling Companies.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          <FooterGroup title="Services" items={["CFO-as-a-Service", "FP&A Infrastructure", "Financial Modeling", "Pricing Intelligence"]} />
          <FooterGroup title="Contact" items={["Cairo", "Dubai", "Riyadh", "hello@rakiza.com"]} />
          <FooterGroup title="Access" items={["Founding Client Access", "Strategy Call", "Advisory Path"]} />
        </div>
      </div>
      <div className="border-t border-[var(--border-faint)] px-5 py-6 text-center text-[10px] text-[var(--text-tertiary)]">
        © 2026 Rakiza. Growth & Financial Advisory.
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
