"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import styles from "../../app/page.module.css";
import {
  fetchMarketInsightsRssItems,
  getImageUrlFromRssItem,
  type MarketInsightRssItem,
} from "../../lib/market-insights-feed";

let rssCache: { data: MarketInsightRssItem[] | null; timestamp: number } = {
  data: null,
  timestamp: 0,
};
const CACHE_DURATION = 5 * 60 * 1000;

const LatestMarketInsights = React.memo(function LatestMarketInsights() {
  const [rssItems, setRssItems] = useState<MarketInsightRssItem[]>([]);
  const [aiImages, setAiImages] = useState<{ [title: string]: string }>({});

  useEffect(() => {
    async function fetchRSS() {
      try {
        const now = Date.now();

        if (rssCache.data && now - rssCache.timestamp < CACHE_DURATION) {
          setRssItems(rssCache.data);
          return;
        }

        const items = (await fetchMarketInsightsRssItems()).slice(0, 3);
        rssCache = { data: items, timestamp: now };
        setRssItems(items);
      } catch {
        // Graceful degradation: section hidden when empty
      }
    }
    void fetchRSS();
  }, []);

  useEffect(() => {
    rssItems.forEach((item) => {
      const title = item.title ?? "";
      const imageUrl = getImageUrlFromRssItem(item) ?? "/images/og-image.png";
      if (imageUrl.includes("placehold.co") && !aiImages[title]) {
        const prompt = `News headline: ${title}. Real estate, Las Vegas, Summerlin West, modern homes, market insights.`;
        fetch("/api/generate-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        })
          .then((res) => res.json())
          .then((data: { base64?: string }) => {
            if (data.base64) {
              setAiImages((prev) => ({
                ...prev,
                [title]: `data:image/png;base64,${data.base64}`,
              }));
            }
          })
          .catch(() => undefined);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rssItems]);

  const getImageUrl = useMemo(() => {
    return (item: MarketInsightRssItem) => {
      const title = item.title ?? "";
      if (aiImages[title]) {
        return aiImages[title];
      }
      return getImageUrlFromRssItem(item) ?? "/images/og-image.png";
    };
  }, [aiImages]);

  if (rssItems.length === 0) return null;

  return (
    <section className={styles.sectionCard}>
      <h2 className={styles.centerTitle}>Latest Market Insights</h2>
      <ul className={styles.insightsList}>
        {rssItems.map((item, idx) => {
          const title = item.title ?? "Market insight";
          const imageUrl = getImageUrl(item);
          return (
            <li key={item.link ?? idx} className={styles.insightItem}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.insightLink}
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  width={120}
                  height={80}
                  className={styles.insightImage}
                />
                <div>
                  <div className={styles.insightTitle}>{title}</div>
                  <div className={styles.insightDate}>
                    {item.pubDate &&
                      new Date(item.pubDate).toLocaleDateString()}
                  </div>
                  <div className={styles.insightSnippet}>
                    {item.contentSnippet}
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
});

export default LatestMarketInsights;
