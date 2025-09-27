'use client';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import Parser from 'rss-parser';
import styles from '../../app/page.module.css';

const RSS_FEED_URL =
  'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

// Define specific types for RSS items
interface RSSItem {
  title: string;
  link: string;
  pubDate?: string;
  contentSnippet?: string;
  'media:content'?: { url: string } | { url: string }[];
  enclosure?: { url: string };
}

// Cache for RSS data
let rssCache: { data: RSSItem[] | null; timestamp: number } = {
  data: null,
  timestamp: 0,
};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const LatestMarketInsights = React.memo(function LatestMarketInsights() {
  const [rssItems, setRssItems] = useState<RSSItem[]>([]);
  const [aiImages, setAiImages] = useState<{ [title: string]: string }>({});

  useEffect(() => {
    async function fetchRSS() {
      try {
        const now = Date.now();

        // Check cache first
        if (rssCache.data && now - rssCache.timestamp < CACHE_DURATION) {
          setRssItems(rssCache.data);
          return;
        }

        const parser = new Parser({
          customFields: {
            item: ['media:content', 'enclosure'],
          },
        });
        const feed = await parser.parseURL(RSS_FEED_URL);
        const items = feed.items.slice(0, 3) as RSSItem[];

        // Update cache
        rssCache = { data: items, timestamp: now };
        setRssItems(items);
      } catch (_err) {
        // fallback: do nothing
      }
    }
    fetchRSS();
  }, []);

  // AI image fetch for items with placeholder
  useEffect(() => {
    rssItems.forEach((item) => {
      const title = item.title;
      const imageUrl = getImageUrl(item);
      if (imageUrl.includes('placehold.co') && !aiImages[title]) {
        const prompt = `News headline: ${title}. Real estate, Las Vegas, Summerlin West, modern homes, market insights.`;
        fetch('/api/generate-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
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
          });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rssItems, aiImages]);

  const getImageUrl = useMemo(() => {
    return (item: RSSItem) => {
      // Handle media:content as array or object
      const mediaContent = item['media:content'];
      if (Array.isArray(mediaContent)) {
        // Find first with url
        const found = mediaContent.find((mc) => mc.url);
        if (found) return found.url;
      } else if (mediaContent?.url) {
        return mediaContent.url;
      }
      if (item.enclosure?.url) {
        return item.enclosure.url;
      }
      // If AI image exists for this title, use it
      if (aiImages[item.title]) {
        return aiImages[item.title];
      }
      return 'https://placehold.co/120x80?text=News';
    };
  }, [aiImages]);

  if (rssItems.length === 0) return null;

  return (
    <section className={styles.sectionCard}>
      <h2 className={styles.centerTitle}>Latest Market Insights</h2>
      <ul className={styles.insightsList}>
        {rssItems.map((item, idx) => {
          const imageUrl = getImageUrl(item);
          return (
            <li key={idx} className={styles.insightItem}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.insightLink}
              >
                <Image
                  src={imageUrl}
                  alt={item.title}
                  width={120}
                  height={80}
                  className={styles.insightImage}
                />
                <div>
                  <div className={styles.insightTitle}>{item.title}</div>
                  <div className={styles.insightDate}>
                    {item.pubDate && new Date(item.pubDate).toLocaleDateString()}
                  </div>
                  <div className={styles.insightSnippet}>{item.contentSnippet}</div>
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
