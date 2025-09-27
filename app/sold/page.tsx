'use client';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SummerlinWestOverview from '../../components/ui/SummerlinWestOverview';
import styles from '../page.module.css';

// Dynamic import for client components
const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), {
  ssr: false,
});

export default function Sold() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Recently Sold Homes in Summerlin | Summerlin West Real Estate</title>
        <meta
          name="description"
          content="Track the latest sales and market activity in Summerlin West. View recently sold homes, market trends, and expert insights."
        />
        <meta
          property="og:title"
          content="Recently Sold Homes in Summerlin | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Track the latest sales and market activity in Summerlin West. View recently sold homes, market trends, and expert insights."
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                name: 'Recently Sold Homes in Summerlin',
                description:
                  'Track the latest sales and market activity in Summerlin West. View recently sold homes, market trends, and expert insights.',
                url: 'https://summerlinwestrealestate.com/sold',
              },
              null,
              2
            ),
          }}
        />
      </Head>
      <main>
        <SummerlinWestOverview />
        <section className={styles.hero}>
          <h1>Recently Sold Homes in Summerlin</h1>
          <p className={styles.subtitle}>
            Track the latest sales and market activity in Summerlin West
          </p>
        </section>
        {/* Dr. Jan Duffy Callout Section */}
        <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
          <h2>Meet Your Summerlin West Real Estate Expert</h2>
          <p>
            <strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover luxury living at
            the gateway to Red Rock Canyon since 2015. As a longtime resident and doctorate-level
            educator, she brings analytical precision and deep local knowledge to every transaction.
            Specializing in{' '}
            <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr.
            Duffy is your go-to resource for buying or selling in Summerlin West.
          </p>
          <p className={styles.calloutHighlight}>Ready to make your move in Summerlin West?</p>
          <p>
            <strong>
              Contact Dr. Jan Duffy today for your complimentary market consultation and discover
              your dream home or get top dollar for your property.
            </strong>
          </p>
          <p>
            <Link href="/contact">Contact Dr. Jan Duffy &rarr;</Link>
          </p>
        </section>
        <section className={styles.sectionCard}>
          <LatestMarketInsights />
        </section>
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Sold Listings</h2>
          <div className={styles.featuredListingsGrid} aria-label="Recently sold homes list">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <article key={i} className={styles.featuredListingCard}>
                <Image
                  src={`https://placehold.co/400x220?text=Sold+Home+${i}`}
                  alt={`Recently sold home in Summerlin ${i}`}
                  width={400}
                  height={220}
                  className={styles.featuredListingImage}
                />
                <div className={styles.listingContent}>
                  <h3 className={styles.listingTitle}>Sold Home #{i}</h3>
                  <p className={styles.listingDetails}>
                    Sold for $${800000 + i * 10000} &bull; 4 bed &bull; 3 bath
                  </p>
                  <span className={styles.listingDate}>
                    Closed: {2024 - i}-04-0{i + 1}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Summerlin Market Trends</h2>
          <ul className={styles.contentList}>
            <li>Median sale price: $850,000</li>
            <li>Average days on market: 14</li>
            <li>List-to-sale price ratio: 98%</li>
            <li>Low inventory, high demand in Summerlin West</li>
          </ul>
        </section>
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Explore More</h2>
          <ul className={styles.resourceLinks} aria-label="Explore more links">
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
              <Link href="/contact">Contact for a Home Value Report</Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
