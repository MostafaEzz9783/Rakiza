import { HomeExperience } from "@/components/control-room";
import { JsonLd } from "@/components/schema";
import { createMetadata, faqSchema, orgSchema } from "@/lib/seo";
import { faqs, Locale } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const metadata = createMetadata({
    locale,
    title: "Rakiza — Financial Intelligence & Advisory | CFO Services Egypt & GCC",
    description:
      "Rakiza is a private financial intelligence firm delivering CFO-as-a-Service, FP&A infrastructure, financial modeling, and growth reporting systems for scaling companies across Egypt, GCC, and MENA."
  });
  return {
    ...metadata,
    title: {
      absolute: "Rakiza — Financial Intelligence & Advisory | CFO Services Egypt & GCC"
    },
    openGraph: {
      ...metadata.openGraph,
      title: "Clarity is a competitive advantage. — Rakiza",
      description: "Most businesses don't fail from lack of growth. They fail from lack of visibility."
    }
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  return (
    <>
      <JsonLd data={[orgSchema(), faqSchema(faqs[locale] ?? faqs.en)]} />
      <HomeExperience locale={locale} />
    </>
  );
}
