import { HomeExperience } from "@/components/control-room";
import { JsonLd } from "@/components/schema";
import { createMetadata, faqSchema, orgSchema } from "@/lib/seo";
import { faqs, Locale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return createMetadata({
    locale,
    title: "Rakiza | Growth & Financial Advisory for SMEs in Egypt and MENA",
    description:
      "CFO-as-a-Service, FP&A, financial modeling, valuation, pricing intelligence, and business analytics for SMEs and growth-stage companies."
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return (
    <>
      <JsonLd data={[orgSchema(), faqSchema(faqs)]} />
      <HomeExperience locale={locale} />
    </>
  );
}
