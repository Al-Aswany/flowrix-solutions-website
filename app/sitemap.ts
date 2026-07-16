import type { MetadataRoute } from "next";
import { getAllIndustrySlugs } from "@/lib/content/industries";
import { getAllServiceSlugs } from "@/lib/content/services";
import { siteConfig } from "@/lib/site";

const LAST_MODIFIED = new Date("2026-07-16");

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = getAllServiceSlugs().map((slug) => ({
    url: `${siteConfig.url}/services/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const industryRoutes = getAllIndustrySlugs().map((slug) => ({
    url: `${siteConfig.url}/industries/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/industries`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...serviceRoutes,
    ...industryRoutes,
  ];
}
