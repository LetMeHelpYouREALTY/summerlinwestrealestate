import type { BlogPost } from "../types/blog";
import { posts as staticPosts } from "./posts";
import {
  fetchMarketInsightsRssItems,
  getImageUrlFromRssItem,
  type MarketInsightRssItem,
} from "./market-insights-feed";

function slugFromLink(link: string | undefined): string {
  if (!link) return "";
  try {
    const pathname = new URL(link).pathname.replace(/\/$/, "");
    const segment = pathname.split("/").filter(Boolean).pop();
    return segment ?? "";
  } catch {
    return "";
  }
}

function mapRssItemToBlogPost(item: MarketInsightRssItem): BlogPost | null {
  if (!item.title) return null;

  const encodedContent = (item as Record<string, unknown>)["content:encoded"];

  const link = item.link ?? "";
  const guidValue =
    typeof item.guid === "string"
      ? item.guid
      : item.guid && typeof item.guid === "object" && "_" in item.guid
        ? String((item.guid as { _: string })._)
        : "";

  const slug =
    slugFromLink(link) ||
    guidValue ||
    item.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const image = getImageUrlFromRssItem(item);

  return {
    id: slug,
    slug,
    title: item.title,
    excerpt: item.contentSnippet ?? item.summary ?? "",
    content:
      typeof encodedContent === "string"
        ? encodedContent
        : typeof item.content === "string"
          ? item.content
          : "",
    image,
    alt: image ? `Image for ${item.title}` : undefined,
    publishedAt: item.isoDate ?? "",
    author:
      (typeof item.creator === "string" ? item.creator : "") ||
      (typeof (item as Record<string, unknown>).author === "string"
        ? String((item as Record<string, unknown>).author)
        : ""),
    date: item.pubDate ?? item.isoDate ?? "",
  };
}

/** RSS posts when the feed works; otherwise curated static posts. */
export async function getBlogPostsForIndex(): Promise<BlogPost[]> {
  const rssItems = await fetchMarketInsightsRssItems();
  const fromFeed = rssItems
    .map(mapRssItemToBlogPost)
    .filter((post): post is BlogPost => post !== null && Boolean(post.slug));

  if (fromFeed.length > 0) {
    return fromFeed;
  }

  return staticPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const fromStatic = staticPosts.find((p) => p.slug === slug);
  if (fromStatic) return fromStatic;

  const rssItems = await fetchMarketInsightsRssItems();
  for (const item of rssItems) {
    const post = mapRssItemToBlogPost(item);
    if (post?.slug === slug) return post;
  }

  return undefined;
}
