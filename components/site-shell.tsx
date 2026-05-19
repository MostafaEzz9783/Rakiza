"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLink } from "./brand";
import { Locale, localizedPath } from "@/lib/site";

const nav = [
  ["Advisory", "/services"],
  ["Industries", "/industries"],
  ["Intelligence", "/insights"],
  ["Diagnostics", "/tools"],
  ["Evidence", "/case-studies"]
];

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-ink/70 text-cream backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 sm:px-10">
        <BrandLink locale={locale} />
        <nav className="hidden items-center gap-9 text-[13px] uppercase tracking-[0.16em] text-cream/58 lg:flex">
          {nav.map(([label, path]) => (
            <Link key={path} href={localizedPath(locale, path)} className="transition hover:text-gold">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <Link href={localizedPath(locale === "en" ? "ar" : "en")} className="text-xs uppercase tracking-[0.16em] text-cream/55">
            {locale === "en" ? "AR" : "EN"}
          </Link>
          <Link
            href={localizedPath(locale, "/waiting-list")}
            className="border border-gold/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold transition hover:bg-gold hover:text-ink"
          >
            Founding Access
          </Link>
        </div>
        <button
          aria-label="Open navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-white/15 text-cream lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-ink px-5 py-6 lg:hidden">
          <nav className="grid gap-5 text-sm uppercase tracking-[0.12em] text-cream/78">
            {nav.map(([label, path]) => (
              <Link key={path} href={localizedPath(locale, path)} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href={localizedPath(locale, "/book-call")}>Strategy Call</Link>
            <Link
              href={localizedPath(locale, "/waiting-list")}
              className="mt-2 border border-gold bg-gold px-5 py-3 text-center font-semibold text-ink"
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
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-[1480px] gap-16 px-5 py-20 sm:px-10 lg:grid-cols-[1.1fr_1.4fr]">
        <div>
          <BrandLink locale={locale} />
          <p className="mt-7 max-w-md text-sm leading-7 text-cream/58">
            Growth & Financial Advisory for companies that need visibility, control, and strategic
            confidence before the next stage of scale.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          <FooterGroup title="Advisory" items={["Fractional CFO", "FP&A", "Valuation", "Pricing"]} />
          <FooterGroup title="Company" items={["Industries", "Evidence", "Intelligence", "Diagnostics"]} />
          <FooterGroup title="Access" items={["Founding Access", "Strategy Call", "Health Check"]} />
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-cream/40">
        © 2026 Rakiza. Growth & Financial Advisory.
      </div>
    </footer>
  );
}

function FooterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm text-cream/58">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
