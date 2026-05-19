import Link from "next/link";
import { Locale, localizedPath } from "@/lib/site";

export function RakizaMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-grid h-10 w-10 place-items-center overflow-hidden border border-gold/40 bg-ink text-cream ${className}`}
    >
      <span className="absolute inset-1 border-l-2 border-t-2 border-gold" />
      <span className="absolute right-2 top-2 h-6 w-2 bg-gold" />
      <span className="absolute bottom-2 left-3 h-2 w-5 bg-gold" />
      <span className="relative text-lg font-semibold tracking-[0.08em]">R</span>
    </span>
  );
}

export function BrandLink({ locale }: { locale: Locale }) {
  return (
    <Link href={localizedPath(locale)} className="flex items-center gap-3" aria-label="Rakiza home">
      <RakizaMark />
      <span className="text-lg font-semibold tracking-[0.02em]">Rakiza</span>
    </Link>
  );
}
