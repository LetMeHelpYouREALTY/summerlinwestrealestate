import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/market-reports",
        "/communities",
        "/about",
        "/contact",
        "/current-listing",
        "/the-vistas",
        "/sold",
        "/new-homes-summerlin",
        "/downtown-summerlin",
        "/compare",
        "/google-places",
        "/service-area/",
      ],
      disallow: "/market-report",
      crawlDelay: 1,
    },
    sitemap: [
      `${SITE_URL}/sitemap-index.xml`,
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap-images.xml`,
    ],
  };
}
