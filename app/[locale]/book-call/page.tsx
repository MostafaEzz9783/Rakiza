import { CalendarDays } from "lucide-react";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { Locale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/book-call",
    title: "Book a Strategy Call | Rakiza",
    description:
      "Book a strategy call with Rakiza to discuss CFO-as-a-Service, FP&A, financial systems, valuation, pricing, and growth advisory."
  });
}

export default function BookCallPage() {
  return (
    <main className="bg-cream pt-32">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <CalendarDays className="text-gold" size={36} />
          <h1 className="mt-8 text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">Book a Strategy Call.</h1>
          <p className="mt-7 text-lg leading-8 text-slate">
            Use this page for a Calendly embed or routing layer. The current placeholder preserves
            layout, conversion hierarchy, and deployment readiness.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="min-h-[620px] border border-line bg-white p-6 shadow-panel">
            <div className="flex h-full min-h-[560px] flex-col items-center justify-center border border-dashed border-line text-center">
              <p className="text-sm font-semibold text-gold">Calendly Integration Slot</p>
              <h2 className="mt-4 text-3xl font-semibold">Strategy Call Calendar</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate">
                Replace this surface with the official Calendly inline widget when the scheduling URL is available.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
