import type { Metadata } from "next";
import { baseUrl, Locale, seoKeywords } from "./site";

type MetaInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  keywords?: string[];
};

export function createMetadata({
  locale,
  path = "",
  title,
  description,
  keywords = []
}: MetaInput): Metadata {
  const pathname = `/${locale}${path}`;
  const url = `${baseUrl}${pathname}`;
  return {
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en${path}`,
        ar: `${baseUrl}/ar${path}`,
        "x-default": `${baseUrl}/en${path}`
      }
    },
    openGraph: {
      title,
      description,
      url,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      siteName: "Rakiza",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rakiza",
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    areaServed: ["Egypt", "Saudi Arabia", "United Arab Emirates", "GCC", "MENA"],
    knowsAbout: [
      "Growth & Financial Advisory",
      "Fractional CFO",
      "FP&A Consulting",
      "Financial Modeling",
      "Business Valuation",
      "Pricing Strategy",
      "Business Analytics"
    ],
    sameAs: []
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Rakiza",
      url: baseUrl
    },
    areaServed: ["Egypt", "GCC", "MENA"],
    url: `${baseUrl}${path}`
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function articleSchema(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Organization",
      name: "Rakiza"
    },
    publisher: {
      "@type": "Organization",
      name: "Rakiza"
    },
    datePublished: "2026-05-19",
    dateModified: "2026-05-19",
    mainEntityOfPage: `${baseUrl}${path}`
  };
}
