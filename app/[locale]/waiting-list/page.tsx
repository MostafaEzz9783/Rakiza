import { DiagnosticForm } from "@/components/diagnostic-form";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    path: "/waiting-list",
    title: locale === "ar" ? "تسجيل دخول الشركاء المؤسسين | ركيزة" : "Founding Client Access | Rakiza",
    description:
      locale === "ar" 
        ? "اطلب دخول الشركاء المؤسسين لتشخيص جاهزية الرقابة والتحكم المالي الخاص بشركتك النامية."
        : "Request founding client access to Rakiza's private Financial Control Readiness diagnostic for scaling SMEs and founder-led companies."
  });
}

export default async function WaitingListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  const criteria = [
    [
      "01", 
      locale === "ar" ? "تعقيد التدفقات النقدية" : "Revenue complexity", 
      locale === "ar" 
        ? "تجاوزت الشركة مرحلة المحاسبة البسيطة، وأصبحت بحاجة إلى انضباط ورقابة مالية صارمة عبر الفروع والمستودعات والمنتجات والقنوات."
        : "The company has moved beyond simple bookkeeping and needs financial control across teams, products, branches, or channels."
    ],
    [
      "02", 
      locale === "ar" ? "الحاجة القيادية الملحة" : "Leadership urgency", 
      locale === "ar"
        ? "يحتاج المؤسسون أو أعضاء الإدارة إلى رؤية واضحة وحقيقية لأرقامهم قبل اتخاذ قرارات التوسع الاستراتيجي أو جولات التمويل أو التقييم."
        : "Founders or executives need stronger visibility before expansion, fundraising, pricing changes, or restructuring decisions."
    ],
    [
      "03", 
      locale === "ar" ? "الجاهزية التشغيلية" : "Operational readiness", 
      locale === "ar"
        ? "المنشأة وفريق العمل مستعدون لقياس النقد، الهوامش، الربحية، والتسعير، وتحمل المسؤولية المحاسبية بانضباط كامل."
        : "The business is prepared to measure cash, margin, pricing, reporting, and accountability with discipline."
    ]
  ];

  return (
    <main className="relative overflow-hidden bg-[var(--bg-void)] pt-32 text-[var(--text-primary)] text-left rtl:text-right">
      <section className="relative mx-auto grid min-h-[calc(100dvh-6rem)] max-w-[1180px] gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="absolute bottom-[8vh] left-[12vw] h-[520px] w-[520px] rounded-full bg-[var(--gold-whisper)] blur-[150px]" />
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--gold-muted)]">
            {dict.foundingAccess.badge}
          </p>
          <h1 className="font-display mt-10 max-w-3xl text-[clamp(56px,7vw,96px)] leading-[0.95] tracking-[-0.035em]">
            {dict.foundingAccess.title}
          </h1>
          <p className="mt-10 max-w-2xl text-lg font-light leading-[1.75] text-[var(--text-secondary)]">
            {dict.foundingAccess.para1} {dict.foundingAccess.para2} {dict.foundingAccess.para3}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <DiagnosticForm locale={locale} />
        </Reveal>
      </section>

      <section className="relative border-t border-[var(--border-faint)] bg-[var(--bg-deep)] px-5 py-28 sm:px-8 lg:px-[10vw]">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--gold-muted)]">
              {locale === "ar" ? "شروط الاستحقاق والتأهيل" : "Qualification logic"}
            </p>
            <h2 className="font-display mt-8 text-[clamp(42px,5vw,72px)] leading-[1] tracking-[-0.025em]">
              {locale === "ar" ? "استشارات خاصة للشركات المستعدة لقياس ما يهم فعلاً." : "Private access for companies prepared to measure what matters."}
            </h2>
          </Reveal>
          <div className="grid gap-10">
            {criteria.map(([number, title, copy]) => (
              <Reveal key={title} className="grid gap-6 border-t border-[var(--border-faint)] pt-7 sm:grid-cols-[0.18fr_0.82fr]">
                <span className="font-data text-xs text-[var(--text-tertiary)]">{number}</span>
                <div>
                  <h3 className="text-3xl font-light tracking-[-0.025em]">{title}</h3>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
