"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from '../page.module.css';
import dynamic from "next/dynamic";
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false },
);
const LeadCaptureForm = dynamic(
  () => import("../../components/ui/LeadCaptureForm"),
  { ssr: false },
);
const RealScoutAdvancedSearch = dynamic(
  () => import("../../components/ui/RealScoutAdvancedSearch"),
  { ssr: false },
);

export default function Properties() {
  return (
    <div
      className={styles.page}
    >
      <Head>
        <title>
          Properties for Sale in Summerlin | Summerlin West Real Estate
        </title>
        <meta
          name="description"
          content="Browse properties for sale in Summerlin West. Find your dream home with detailed listings, photos, and market insights from your local Summerlin real estate expert."
        />
        <meta
          property="og:title"
          content="Properties for Sale in Summerlin | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Browse properties for sale in Summerlin West. Find your dream home with detailed listings, photos, and market insights from your local Summerlin real estate expert."
        />
      </Head>

      <div className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Properties for Sale in Summerlin</h1>
          <p className={styles.subtitle}>
            Discover your perfect home in Summerlin West with our curated
            selection of properties
          </p>
        </section>

        <LatestMarketInsights />

        {/* Property Search Widget */}
        <section className={styles.sectionCard}>
          <RealScoutAdvancedSearch
            title="Search All Properties"
            subtitle="Find homes that match your criteria in Summerlin"
            variant="page"
            showFeatures={true}
          />
        </section>

        {/* Featured Properties */}
        <section className={styles.sectionCard}>
          <h2>Featured Properties</h2>
          <div className={styles.featuredListingsGrid}>
            {[
              {
                id: 1,
                title: "Luxury Home in The Vistas",
                price: "$1,250,000",
                beds: 4,
                baths: 3,
                sqft: "3,200",
                image: "/images/properties/vistas-luxury-home.png",
                status: "Active",
              },
              {
                id: 2,
                title: "Modern Townhome in Redpoint",
                price: "$875,000",
                beds: 3,
                baths: 2.5,
                sqft: "2,400",
                image: "/images/properties/redpoint-square.png",
                status: "Active",
              },
              {
                id: 3,
                title: "Family Home in Stonebridge",
                price: "$950,000",
                beds: 4,
                baths: 3,
                sqft: "2,800",
                image: "/images/properties/paseos-home.png",
                status: "Active",
              },
              {
                id: 4,
                title: "Elegant Estate in The Ridges",
                price: "$2,100,000",
                beds: 5,
                baths: 4.5,
                sqft: "4,500",
                image: "/images/properties/reverence-home.png",
                status: "Active",
              },
              {
                id: 5,
                title: "Cozy Home in The Cliffs",
                price: "$725,000",
                beds: 3,
                baths: 2,
                sqft: "2,100",
                image: "/images/properties/stonebridge-home.png",
                status: "Active",
              },
              {
                id: 6,
                title: "Contemporary in Reverence",
                price: "$1,450,000",
                beds: 4,
                baths: 3.5,
                sqft: "3,600",
                image: "/images/properties/redpoint-luxury.png",
                status: "Active",
              },
            ].map((property) => (
              <div key={property.id} className={styles.featuredListingCard}>
                <Image
                  src={property.image}
                  alt={property.title}
                  width={400}
                  height={220}
                  className={styles.featuredListingImage}
                />
                <div className={styles.listingContent}>
                  <h3 className={styles.listingTitle}>{property.title}</h3>
                  <p className={styles.listingPrice}>{property.price}</p>
                  <p className={styles.listingDetails}>
                    {property.beds} bed &bull; {property.baths} bath &bull;{" "}
                    {property.sqft} sqft
                  </p>
                  <span className={styles.listingStatus}>
                    {property.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Market Overview */}
        <section className={styles.sectionCard}>
          <h2>Summerlin Market Overview</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>312</div>
              <div className={styles.statLabel}>Active Listings</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>$675K</div>
              <div className={styles.statLabel}>Median Price</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>14</div>
              <div className={styles.statLabel}>Avg Days on Market</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>List-to-Sale Ratio</div>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>
            Get Notified About New Properties
          </h2>
          <LeadCaptureForm
            variant="inline"
            title="Property Alert Signup"
            subtitle="Be the first to know about new listings that match your criteria."
            source="Properties Page"
          />
        </section>

        {/* Quick Links */}
        <section className={styles.sectionCard}>
          <h2>Explore More</h2>
          <ul className={styles.resourceLinks}>
            <li>
              <Link href="/current-listing">View Our Featured Listing</Link>
            </li>
            <li>
              <Link href="/communities">Browse Summerlin Communities</Link>
            </li>
            <li>
              <Link href="/market-reports">Get Market Reports</Link>
            </li>
            <li>
              <Link href="/sold">See Recently Sold Homes</Link>
            </li>
            <li>
              <Link href="/contact">Contact for Custom Search</Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
