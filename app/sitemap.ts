import { MetadataRoute } from "next";
import { baseUrl, industries, locales, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/services", "/industries", "/insights", "/tools", "/case-studies", "/waiting-list", "/book-call"];
  const servicePaths = services.en.map((service) => `/services/${service.slug}`);
  const industryPaths = industries.en.map((industry) => `/industries/${industry.slug}`);
  const insightPaths = [
    "/insights/financial-visibility-for-smes",
    "/insights/fractional-cfo-egypt-guide",
    "/insights/pricing-intelligence-margin-growth"
  ];

  return locales.flatMap((locale) =>
    [...staticPaths, ...servicePaths, ...industryPaths, ...insightPaths].map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date("2026-05-19"),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.75
    }))
  );
}
