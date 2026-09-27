import type { MetadataRoute } from "next";
import { COMMUNITY } from "../lib/community-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = COMMUNITY.siteUrl;
  const lastModified = new Date();

  const routes = [
    "",
    "/amenities",
    "/about",
    "/communities",
    "/contact",
    "/current-listing",
    "/downtown-summerlin",
    "/market",
    "/market-reports",
    "/new-homes-summerlin",
    "/the-vistas",
    "/compare",
    "/maps",
    "/blog",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/amenities" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/amenities" ? 0.9 : 0.7,
  }));
}
