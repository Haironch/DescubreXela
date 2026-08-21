import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages = {
    "es-GT": SITE_URL,
    en: `${SITE_URL}/en`,
  };

  const businessLanguages = {
    "es-GT": `${SITE_URL}/negocios`,
    en: `${SITE_URL}/en/businesses`,
  };

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: homeLanguages },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: homeLanguages },
    },
    {
      url: `${SITE_URL}/negocios`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: businessLanguages },
    },
    {
      url: `${SITE_URL}/en/businesses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: { languages: businessLanguages },
    },
  ];
}
