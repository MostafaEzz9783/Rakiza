import { DiagnosticForm } from "@/components/diagnostic-form";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { Locale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/waiting-list",
    title: "Join the Rakiza Waiting List | SME Financial Health Check",
    description:
      "Apply for Rakiza's Growth & Financial Advisory waiting list and receive an SME Financial Health Check snapshot."
  });
}

export default function WaitingListPage() {
  return (
    <main className="bg-ink pt-32 text-cream">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <h1 className="text-5xl font-semibold tracking-[-0.03em] sm:text-7xl">Join the Waiting List.</h1>
          <p className="mt-7 text-lg leading-8 text-cream/64">
            Built for founders and leadership teams who need financial control before the next stage
            of growth. Complete the diagnostic and receive a structured advisory snapshot.
          </p>
          <div className="mt-10 grid gap-px border border-white/10 bg-white/10">
            {["Founder application", "Dynamic score/result", "Downloadable toolkit ready", "Email automation ready"].map((item) => (
              <div key={item} className="bg-ink p-5 text-sm text-cream/78">{item}</div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="text-ink">
            <DiagnosticForm />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
