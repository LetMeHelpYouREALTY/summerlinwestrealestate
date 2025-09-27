'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import styles from './market.module.css';

export default function Market() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Summerlin Real Estate Market | Trends & Analysis</title>
        <meta
          name="description"
          content="Get the latest Summerlin real estate market trends, home values, and expert analysis. Stay informed about Summerlin West housing market conditions."
        />
        <meta property="og:title" content="Summerlin Real Estate Market | Trends & Analysis" />
        <meta
          property="og:description"
          content="Get the latest Summerlin real estate market trends, home values, and expert analysis. Stay informed about Summerlin West housing market conditions."
        />
      </Head>
      <section className={styles.hero}>
        <h1>Summerlin Real Estate Market</h1>
        <p className={styles.subtitle}>
          Trends, home values, and expert analysis for Summerlin West
        </p>
      </section>
      <LatestMarketInsightsClient />
      <section className={styles.sectionCard}>
        <h2>Current Market Trends</h2>
        <Image
          src="https://placehold.co/800x300?text=Market+Trends"
          alt="Summerlin real estate market trends graph"
          width={800}
          height={300}
          className={styles.trendsGraphImage}
        />
        <ul className={styles.contentList}>
          <li>Median home price: $850,000</li>
          <li>Average days on market: 14</li>
          <li>Inventory: Low, with high buyer demand</li>
          <li>List-to-sale price ratio: 98%</li>
        </ul>
      </section>
      <section className={styles.sectionCard}>
        <h2>Expert Market Insights</h2>
        <ul className={styles.contentList}>
          <li>Summerlin West remains a top choice for families and professionals</li>
          <li>Strong appreciation and resale value</li>
          <li>New construction and resale opportunities</li>
          <li>Contact for a personalized market report</li>
        </ul>
      </section>
      <section className={styles.sectionCard}>
        <h2>Explore More</h2>
        <ul className={styles.resourceLinks}>
          <li>
            <Link href="/market-reports">Summerlin Market Reports</Link>
          </li>
          <li>
            <Link href="/current-listing">Featured Home for Sale</Link>
          </li>
          <li>
            <Link href="/about">Meet Your Summerlin Expert</Link>
          </li>
          <li>
            <Link href="/contact">Contact for Market Insights</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
