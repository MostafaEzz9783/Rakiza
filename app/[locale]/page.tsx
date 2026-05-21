import { HomeExperience } from "@/components/control-room";
import { JsonLd } from "@/components/schema";
import { createMetadata, faqSchema, orgSchema } from "@/lib/seo";
import { faqs, Locale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const metadata = createMetadata({
    locale,
    title: "Rakiza - Financial Advisory & CFO-as-a-Service | Egypt, GCC, MENA",
    description:
      "Rakiza is a boutique Growth & Financial Advisory firm for scaling companies across Egypt, GCC and MENA. Fractional CFO, FP&A infrastructure, financial modeling, and cash flow architecture."
  });
  return {
    ...metadata,
    title: {
      absolute: "Rakiza - Financial Advisory & CFO-as-a-Service | Egypt, GCC, MENA"
    }
  };
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
