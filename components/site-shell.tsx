"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLink } from "./brand";
import { Locale, localizedPath } from "@/lib/site";

const nav = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["Tools", "/tools"],
  ["Case Studies", "/case-studies"]
];

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/85 text-cream backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <BrandLink locale={locale} />
        <nav className="hidden items-center gap-8 text-sm text-cream/74 lg:flex">
          {nav.map(([label, path]) => (
            <Link key={path} href={localizedPath(locale, path)} className="transition hover:text-gold">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href={localizedPath(locale === "en" ? "ar" : "en")} className="text-sm text-cream/70">
            {locale === "en" ? "العربية" : "English"}
          </Link>
          <Link
            href={localizedPath(locale, "/waiting-list")}
            className="border border-gold bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cream"
          >
            Join the Waiting List
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
          <nav className="grid gap-4 text-base text-cream/82">
            {nav.map(([label, path]) => (
              <Link key={path} href={localizedPath(locale, path)} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href={localizedPath(locale, "/book-call")}>Book a Strategy Call</Link>
            <Link
              href={localizedPath(locale, "/waiting-list")}
              className="mt-2 bg-gold px-5 py-3 text-center font-semibold text-ink"
            >
              Join the Waiting List
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
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <BrandLink locale={locale} />
          <p className="mt-6 max-w-md text-sm leading-7 text-cream/66">
            Premium Growth & Financial Advisory for SMEs and growth-stage companies across Egypt,
            GCC, and MENA.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <FooterGroup title="Advisory" items={["Fractional CFO", "FP&A", "Valuation", "Pricing"]} />
          <FooterGroup title="Company" items={["Industries", "Case Studies", "Insights", "Tools"]} />
          <FooterGroup title="Start" items={["Waiting List", "Book a Call", "Health Check"]} />
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-cream/48">
        © 2026 Rakiza. Growth & Financial Advisory.
      </div>
    </footer>
  );
}

function FooterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-gold">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm text-cream/66">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
