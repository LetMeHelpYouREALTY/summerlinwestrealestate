import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Properties.module.css';

export const metadata: Metadata = {
  title: 'Luxury Homes for Sale in Summerlin West | Dr. Jan Duffy REALTOR®',
  description:
    'Browse exclusive luxury homes for sale in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales. The Vistas, Red Rock Canyon views, resort amenities. Call (702) 550-0112!',
  keywords: 'luxury properties, Summerlin West, Las Vegas real estate, The Vistas, luxury homes',
  openGraph: {
    title: 'Luxury Homes for Sale in Summerlin West | Dr. Jan Duffy REALTOR®',
    description:
      'Browse exclusive luxury homes for sale in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales. The Vistas, Red Rock Canyon views, resort amenities. Call (702) 550-0112!',
    type: 'website',
  },
};

export default function Properties() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Luxury Properties in Summerlin West</h1>
          <p className={styles.heroSubtitle}>
            Discover exclusive residences in Las Vegas's most prestigious master-planned community
          </p>
        </div>
      </section>

      {/* Properties Overview */}
      <section className={styles.propertiesOverview}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Homes That Inspire</h2>
          <p className={styles.sectionSubtitle}>
            From contemporary estates to traditional masterpieces, find your perfect home in
            Summerlin West
          </p>

          <div className={styles.propertyGrid}>
            <div className={styles.propertyCard}>
              <div className={styles.propertyImage}>
                <Image
                  src="/images/featured-homes/featured-home-1.jpg"
                  alt="Luxury home in The Vistas with Red Rock Canyon views"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.propertyContent}>
                <h3 className={styles.propertyTitle}>The Vistas Estate</h3>
                <p className={styles.propertyLocation}>The Vistas, Summerlin West</p>
                <p className={styles.propertyPrice}>$2,500,000</p>
                <p className={styles.propertyDetails}>5 BD / 6 BA / 4,200 SQFT</p>
                <Link href="/current-listing" className={styles.propertyLink}>
                  View Details
                </Link>
              </div>
            </div>

            <div className={styles.propertyCard}>
              <div className={styles.propertyImage}>
                <Image
                  src="/images/featured-homes/02-DSC03093.jpg"
                  alt="Modern luxury home in Stonebridge community"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.propertyContent}>
                <h3 className={styles.propertyTitle}>Stonebridge Modern</h3>
                <p className={styles.propertyLocation}>Stonebridge, Summerlin West</p>
                <p className={styles.propertyPrice}>$1,850,000</p>
                <p className={styles.propertyDetails}>4 BD / 5 BA / 3,800 SQFT</p>
                <Link href="/current-listing" className={styles.propertyLink}>
                  View Details
                </Link>
              </div>
            </div>

            <div className={styles.propertyCard}>
              <div className={styles.propertyImage}>
                <Image
                  src="/images/featured-homes/03-DJI_20250707145902_0780_D.jpg"
                  alt="Traditional estate in Redpoint community"
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.propertyContent}>
                <h3 className={styles.propertyTitle}>Redpoint Estate</h3>
                <p className={styles.propertyLocation}>Redpoint, Summerlin West</p>
                <p className={styles.propertyPrice}>$3,200,000</p>
                <p className={styles.propertyDetails}>6 BD / 7 BA / 5,100 SQFT</p>
                <Link href="/current-listing" className={styles.propertyLink}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Search Options */}
      <section className={styles.searchOptions}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Find Your Perfect Home</h2>
          <div className={styles.searchGrid}>
            <div className={styles.searchCard}>
              <h3 className={styles.searchTitle}>Current Listings</h3>
              <p className={styles.searchDescription}>
                Browse our exclusive collection of luxury properties currently on the market
              </p>
              <Link href="/current-listing" className={styles.searchButton}>
                View Current Listings
              </Link>
            </div>

            <div className={styles.searchCard}>
              <h3 className={styles.searchTitle}>Recent Sales</h3>
              <p className={styles.searchDescription}>
                Explore recently sold properties to understand market trends and pricing
              </p>
              <Link href="/sold" className={styles.searchButton}>
                View Recent Sales
              </Link>
            </div>

            <div className={styles.searchCard}>
              <h3 className={styles.searchTitle}>Advanced Search</h3>
              <p className={styles.searchDescription}>
                Use our comprehensive search tool to find properties matching your exact criteria
              </p>
              <a
                href="https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0"
                className={styles.searchButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Advanced Search
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className={styles.marketInsights}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Market Insights</h2>
          <div className={styles.insightsGrid}>
            <div className={styles.insightCard}>
              <h3 className={styles.insightTitle}>Average Sale Price</h3>
              <p className={styles.insightValue}>$1,850,000</p>
              <p className={styles.insightChange}>+12% vs. last year</p>
            </div>
            <div className={styles.insightCard}>
              <h3 className={styles.insightTitle}>Days on Market</h3>
              <p className={styles.insightValue}>45 days</p>
              <p className={styles.insightChange}>-8% vs. last year</p>
            </div>
            <div className={styles.insightCard}>
              <h3 className={styles.insightTitle}>Active Listings</h3>
              <p className={styles.insightValue}>127 homes</p>
              <p className={styles.insightChange}>+15% inventory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={styles.newsletterSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Stay Updated on New Listings</h2>
            <p className={styles.newsletterSubtitle}>
              Get exclusive access to new luxury properties before they hit the market
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email address"
                className={styles.newsletterInput}
              />
              <button type="button" className={styles.newsletterButton}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
