import Image from 'next/image';
import Link from 'next/link';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import VistasListingFormClient from '../../components/ui/VistasListingFormClient';
import styles from '../page.module.css';

export const metadata = {
  title: 'Vistas Summerlin Home Listings | Summerlin West Real Estate',
  description:
    'Browse Vistas Summerlin home listings. See photos, property details, and connect with a Summerlin real estate expert for private tours and market insights.',
  openGraph: {
    title: 'Vistas Summerlin Home Listings | Summerlin West Real Estate',
    description:
      'Browse Vistas Summerlin home listings. See photos, property details, and connect with a Summerlin real estate expert for private tours and market insights.',
  },
};

export default function VistasListing() {
  const listings = [
    { id: 1, beds: 4, baths: 3, price: '$900,000+' },
    { id: 2, beds: 4, baths: 3, price: '$925,000+' },
    { id: 3, beds: 4, baths: 3, price: '$950,000+' },
  ];

  const vistaBenefits = [
    'Modern homes with mountain views',
    'Access to top-rated schools and parks',
    'Minutes from Downtown Summerlin',
    'Strong resale value and community amenities',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Vistas Summerlin Home Listings</h1>
          <p className={styles.subtitle}>Find your dream home in The Vistas, Summerlin West</p>
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
        <LatestMarketInsightsClient />
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Available Listings</h2>
          <div className={styles.listingsGrid}>
            {listings.map((listing) => (
              <div key={listing.id} className={styles.listingCard}>
                <Image
                  src={`https://placehold.co/400x220?text=Vistas+Listing+${listing.id}`}
                  alt={`Vistas Summerlin home listing ${listing.id}`}
                  width={400}
                  height={220}
                  className={styles.listingImage}
                />
                <div className={styles.listingContent}>
                  <h3 className={styles.listingTitle}>Listing #{listing.id}</h3>
                  <p className={styles.listingDetails}>
                    {listing.beds} bed &bull; {listing.baths} bath &bull; {listing.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Why Buy in The Vistas?</h2>
          <ul className={styles.benefitsList}>
            {vistaBenefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                {benefit}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Explore More</h2>
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
              <Link href="/contact">Contact for a Private Tour</Link>
            </li>
          </ul>
        </section>
        <section id="lead-capture" className={styles.leadCapture}>
          <h2>Interested in this home?</h2>
          <VistasListingFormClient formId="vistas-listing" />
        </section>
      </div>
    </div>
  );
}
