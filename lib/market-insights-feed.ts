import Parser from "rss-parser";

/** KCM feed (Simplifying the Market URLs now redirect to HTML). */
export const MARKET_INSIGHTS_FEED_URL =
  "https://www.keepingcurrentmatters.com/feed/";

const parser = new Parser({
  customFields: {
    item: ["media:content", "enclosure", "content:encoded"],
  },
});

export type MarketInsightRssItem = Parser.Item & {
  "media:content"?: { $?: { url?: string }; url?: string } | Array<{
    $?: { url?: string };
    url?: string;
  }>;
  enclosure?: { url?: string };
};

function looksLikeXml(body: string): boolean {
  const trimmed = body.trim();
  return (
    trimmed.startsWith("<?xml") ||
    trimmed.startsWith("<rss") ||
    trimmed.startsWith("<feed")
  );
}

function extractImageFromHtml(html: string): string | undefined {
  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imgMatch?.[1]?.trim();
}

export function getImageUrlFromRssItem(item: MarketInsightRssItem): string | undefined {
  const media = item["media:content"];
  if (Array.isArray(media)) {
    for (const entry of media) {
      const url = entry.$?.url ?? entry.url;
      if (url) return url;
    }
  } else if (media) {
    const url = media.$?.url ?? media.url;
    if (url) return url;
  }
  if (item.enclosure?.url) return item.enclosure.url;
  const encoded = (item as Record<string, unknown>)["content:encoded"];
  const encodedHtml = typeof encoded === "string" ? encoded : undefined;
  if (encodedHtml) return extractImageFromHtml(encodedHtml);
  if (item.content) return extractImageFromHtml(item.content);
  return undefined;
}

/**
 * Fetches and parses the market insights RSS feed. Returns an empty array when the
 * feed is unavailable, redirected to HTML, or malformed (no throw).
 */
export async function fetchMarketInsightsRssItems(): Promise<
  MarketInsightRssItem[]
> {
  try {
    const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
    };
    if (typeof window === "undefined") {
      fetchOptions.next = { revalidate: 3600 };
    }

    const response = await fetch(MARKET_INSIGHTS_FEED_URL, fetchOptions);

    if (!response.ok) {
      console.warn(
        `[market-insights-feed] Feed HTTP ${response.status} for ${MARKET_INSIGHTS_FEED_URL}`,
      );
      return [];
    }

    const body = await response.text();
    if (!looksLikeXml(body)) {
      console.warn(
        "[market-insights-feed] Response is not XML (likely HTML redirect page)",
      );
      return [];
    }

    const feed = await parser.parseString(body);
    return (feed.items ?? []) as MarketInsightRssItem[];
  } catch (error) {
    console.warn(
      "[market-insights-feed] Failed to parse feed:",
      error instanceof Error ? error.message : error,
    );
    return [];
  }
}
