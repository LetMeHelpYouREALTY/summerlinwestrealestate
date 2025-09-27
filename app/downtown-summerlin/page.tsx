import Image from 'next/image';
import Link from 'next/link';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import LeadCaptureFormClient from '../../components/ui/LeadCaptureFormClient';
import SummerlinWestOverview from '../../components/ui/SummerlinWestOverview';
import styles from '../page.module.css';

// Metadata export (replaces Head component)
export const metadata = {
  title: 'Downtown Summerlin Real Estate Guide | Shopping, Dining, Homes & Market',
  description:
    'Explore Downtown Summerlin: shopping, dining, entertainment, and real estate market trends. Find homes for sale and get your free Summerlin market report.',
  openGraph: {
    title: 'Downtown Summerlin Real Estate Guide | Shopping, Dining, Homes & Market',
    description:
      'Explore Downtown Summerlin: shopping, dining, entertainment, and real estate market trends. Find homes for sale and get your free Summerlin market report.',
  },
};

export default function DowntownSummerlin() {
  return (
    <div className={`${styles.page} ${styles.downtownSummerlinContainer}`}>
      <main>
        <SummerlinWestOverview />
        <section className={styles.hero}>
          <h1>Downtown Summerlin Real Estate Guide</h1>
          <p className={styles.subtitle}>
            Your comprehensive resource for living, shopping, and investing in Downtown Summerlin
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
          <LatestMarketInsightsClient />
        </section>
        <section className={styles.sectionCard}>
          <h2>Shopping in Downtown Summerlin</h2>
          <div className={styles.contentGrid}>
            <Image
              src="https://placehold.co/320x200?text=Shopping"
              alt="Shopping in Downtown Summerlin"
              width={320}
              height={200}
              className={styles.contentImage}
              priority
            />
            <p className={styles.contentText}>
              Downtown Summerlin is home to over 125 stores, from luxury boutiques to popular
              national brands. Enjoy open-air shopping, seasonal events, and a vibrant atmosphere
              perfect for families and trendsetters alike. Whether you&apos;re looking for fashion,
              home goods, or unique gifts, you&apos;ll find it all in this premier Las Vegas
              shopping destination.
            </p>
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2>Dining in Downtown Summerlin</h2>
          <div className={styles.contentGrid}>
            <p className={styles.contentText}>
              Experience a culinary adventure with Downtown Summerlin&apos;s diverse dining options.
              From upscale steakhouses and trendy cafes to family-friendly eateries and quick bites,
              there&apos;s something for every palate. Enjoy al fresco dining, happy hours, and
              chef-driven menus in a lively, walkable environment.
            </p>
            <Image
              src="https://placehold.co/320x200?text=Dining"
              alt="Dining in Downtown Summerlin"
              width={320}
              height={200}
              className={styles.contentImage}
            />
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2>Entertainment & Lifestyle</h2>
          <div className={styles.contentGrid}>
            <Image
              src="https://placehold.co/320x200?text=Entertainment"
              alt="Entertainment in Downtown Summerlin"
              width={320}
              height={200}
              className={styles.contentImage}
            />
            <p className={styles.contentText}>
              Downtown Summerlin is more than shopping and dining—it&apos;s a lifestyle hub. Enjoy
              year-round events, live music, farmers markets, and the Las Vegas Ballpark. The area
              is also home to City National Arena, practice facility for the Vegas Golden Knights,
              making it a hotspot for sports fans and families.
            </p>
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2>Downtown Summerlin Real Estate Market</h2>
          <div className={styles.contentGrid}>
            <div className={styles.contentText}>
              <p>
                The Downtown Summerlin area offers a mix of luxury condos, modern townhomes, and
                single-family homes. With walkable access to shopping, dining, and entertainment,
                it&apos;s one of the most desirable places to live in Las Vegas. The real estate
                market here is competitive, with homes selling quickly and strong appreciation
                trends.
              </p>
              <ul className={styles.contentList}>
                <li>Median Home Price: $650,000</li>
                <li>Average Days on Market: 14</li>
                <li>Walkability Score: 9/10</li>
                <li>Top-rated schools nearby</li>
              </ul>
            </div>
            <Image
              src="https://placehold.co/320x200?text=Real+Estate"
              alt="Downtown Summerlin real estate market"
              width={320}
              height={200}
              className={styles.contentImage}
            />
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2>Get Your Downtown Summerlin Market Report</h2>
          <LeadCaptureFormClient />
        </section>
        <section className={styles.sectionCard}>
          <h2>Explore More Summerlin Real Estate Resources</h2>
          <ul className={styles.resourceLinks}>
            <li>
              <Link href="/market-reports">See all Summerlin market reports</Link>
            </li>
            <li>
              <Link href="/communities">Explore Summerlin West communities</Link>
            </li>
            <li>
              <Link href="/current-listing">View our current listing in The Vistas</Link>
            </li>
            <li>
              <Link href="/contact">Contact a Summerlin real estate expert</Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
