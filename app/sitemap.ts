import { MetadataRoute } from "next";
import { CITIES, SERVICE_TYPES_SEO } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yogetsuakasaka.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ikigaizen`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic SEO landing pages (city + service combinations)
  const seoPages: MetadataRoute.Sitemap = [];

  for (const city of CITIES) {
    for (const service of SERVICE_TYPES_SEO) {
      seoPages.push({
        url: `${baseUrl}/book/${city.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return [...staticPages, ...seoPages];
}
