'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import NeighborhoodHero from '../../components/ui/NeighborhoodHero';
import RealScoutWidget from '../../components/ui/RealScoutWidget';
import styles from '../page.module.css';

export default function Communities() {
  const communities = [
    {
      name: 'The Vistas',
      description:
        'Luxury homes with stunning mountain views and gated communities for ultimate privacy and exclusivity.',
      priceRange: '$950K - $2.5M',
      minPrice: 950000,
      maxPrice: 2500000,
      features: ['Mountain Views', 'Luxury Homes', 'Gated Community', 'Golf Course'],
      homeTypes: 'Single Family, Custom Estates',
      image: 'https://placehold.co/400x220/1a365d/ffffff?text=The+Vistas',
      slug: 'the-vistas',
      highlighted: true,
      yearBuilt: '2018-Present',
      schools: ['Top-Rated Elementary', 'Award-Winning High School'],
      amenities: ['Private Golf Course', 'Community Center', 'Walking Trails'],
    },
    {
      name: 'The Paseos',
      description:
        'Family-friendly neighborhood with top-rated schools and abundant community amenities.',
      priceRange: '$750K - $1.5M',
      minPrice: 750000,
      maxPrice: 1500000,
      features: ['Top Schools', 'Family-Friendly', 'Parks Nearby', 'Community Pool'],
      homeTypes: 'Single Family, Townhomes',
      image: 'https://placehold.co/400x220/2d4a22/ffffff?text=The+Paseos',
      slug: 'the-paseos',
      highlighted: true,
      yearBuilt: '2019-Present',
      schools: ['Highly Rated Elementary', 'Prestigious Middle School'],
      amenities: ['Community Pools', 'Playgrounds', 'Sports Courts'],
    },
    {
      name: 'Stonebridge',
      description:
        'Modern homes with resort-style amenities, perfectly positioned near Red Rock Canyon.',
      priceRange: '$650K - $1.2M',
      minPrice: 650000,
      maxPrice: 1200000,
      features: ['Resort Amenities', 'New Construction', 'Walking Trails', 'Fitness Center'],
      homeTypes: 'Single Family, Patio Homes',
      image: 'https://placehold.co/400x220/8b4513/ffffff?text=Stonebridge',
      slug: 'stonebridge',
      highlighted: true,
      yearBuilt: '2020-Present',
      schools: ['Top Elementary', 'High-Performing Middle School'],
      amenities: ['Resort Pool', 'Fitness Center', 'Tennis Courts'],
    },
    {
      name: 'Redpoint',
      description:
        'New construction with contemporary design and cutting-edge smart home technology.',
      priceRange: '$750K - $1.8M',
      minPrice: 750000,
      maxPrice: 1800000,
      features: ['New Construction', 'Contemporary', 'Builder Incentives', 'Smart Homes'],
      homeTypes: 'Single Family, Modern Design',
      image: 'https://placehold.co/400x220/4a5568/ffffff?text=Redpoint',
      slug: 'redpoint',
      highlighted: false,
      yearBuilt: '2021-Present',
      schools: ['Modern Elementary', 'STEM-Focused High School'],
      amenities: ['Modern Clubhouse', 'Co-working Spaces', 'Dog Parks'],
    },
    {
      name: 'Redpoint Square',
      description:
        'Urban-style living in Summerlin West with walkable access to downtown entertainment.',
      priceRange: '$600K - $1.1M',
      minPrice: 600000,
      maxPrice: 1100000,
      features: ['Urban Style', 'Walkable', 'Downtown Access', 'Transit Friendly'],
      homeTypes: 'Condos, Townhomes, Lofts',
      image: 'https://placehold.co/400x220/2b6cb0/ffffff?text=Redpoint+Square',
      slug: 'redpoint-square',
      highlighted: false,
      yearBuilt: '2020-Present',
      schools: ['Urban Elementary', 'Arts-Focused Middle School'],
      amenities: ['Rooftop Terraces', 'Retail Shops', 'Cafes'],
    },
    {
      name: 'Reverence',
      description:
        'Luxury estates with unmatched privacy, elegant architecture, and panoramic city views.',
      priceRange: '$1.2M - $3M+',
      minPrice: 1200000,
      maxPrice: 3000000,
      features: ['Luxury Estates', 'Privacy', 'Elegant Design', 'City Views'],
      homeTypes: 'Custom Estates, Luxury Homes',
      image: 'https://placehold.co/400x220/553c9a/ffffff?text=Reverence',
      slug: 'reverence',
      highlighted: true,
      yearBuilt: '2017-Present',
      schools: ['Elite Private School', 'International Baccalaureate'],
      amenities: ['Private Club', 'Concierge Services', 'Wine Cellar'],
    },
  ];

  const medianPrice = Math.round(
    communities.reduce((sum, c) => sum + c.minPrice, 0) / communities.length
  );

  // Structured data for communities page
  const communitiesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Summerlin West Communities',
    description: 'Luxury neighborhoods and communities in Summerlin West, Las Vegas',
    numberOfItems: communities.length,
    itemListElement: communities.map((community, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Place',
        name: community.name,
        description: community.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
          addressCountry: 'US',
        },
        offers: {
          '@type': 'Offer',
          priceRange: community.priceRange,
          priceCurrency: 'USD',
        },
        amenityFeature: community.amenities.map(amenity => ({
          '@type': 'LocationFeatureSpecification',
          name: amenity,
        })),
      },
    })),
  };

  return (
    <div className={`${styles.page} ${styles.communitiesContainer}`}>
      <Head>
        <title>Summerlin West Communities | Luxury Neighborhoods & Homes for Sale</title>
        <meta
          name="description"
          content="Explore all Summerlin West communities including The Vistas, Redpoint, Stonebridge & more. Find neighborhood guides, amenities, and expert insights for Summerlin real estate."
        />
        <meta
          property="og:title"
          content="Summerlin West Communities | Luxury Neighborhoods & Homes for Sale"
        />
        <meta
          property="og:description"
          content="Explore all Summerlin West communities including The Vistas, Redpoint, Stonebridge & more. Find neighborhood guides, amenities, and expert insights for Summerlin real estate."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(communitiesJsonLd) }}
        />
      </Head>
      <main>
        <NeighborhoodHero
          neighborhood={{ name: 'Summerlin West' }}
          marketData={{
            medianPrice,
            priceChange: 0,
            daysOnMarket: 14,
            marketTrend: 'flat',
          }}
        />
        <section className={styles.hero}>
          <h1>Summerlin West Communities</h1>
          <p className={styles.subtitle}>
            Discover the best neighborhoods in Summerlin for your next home
          </p>
        </section>
        {/* Dr. Jan Duffy Callout Section */}
        <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
          <h2>Meet Your Summerlin West Real Estate Expert</h2>
          <p>
            <strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover luxury living at
            the gateway to Red Rock Canyon since 2015. As a longtime resident and doctorate-level
            educator, she brings analytical precision and deep local knowledge to every transaction.
          </p>
          <p>
            Specializing in{' '}
            <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr.
            Duffy is your go-to resource for buying or selling in Summerlin West.
          </p>
          <p>
            <Link href="/about">Learn more about Dr. Duffy &rarr;</Link>
          </p>
        </section>
        <LatestMarketInsightsClient />
        <section className={styles.sectionCard} aria-label="Featured Neighborhoods">
          <h2 className={styles.centerTitle}>Featured Neighborhoods</h2>
          <div className={styles.communitiesGrid}>
            {communities.slice(0, 4).map((community) => (
              <article key={community.name} className={styles.communityCard}>
                <Image
                  src={community.image}
                  alt={`${community.name} neighborhood homes in Summerlin West`}
                  width={400}
                  height={220}
                  className={styles.communityImage}
                  priority={communities.indexOf(community) < 2}
                />
                <div className={styles.communityContent}>
                  <h3 className={styles.communityTitle}>{community.name}</h3>
                  <p className={styles.communityDescription}>
                    Learn more about {community.name} and see available homes.
                  </p>
                  <Link
                    href={
                      community.slug === 'the-vistas'
                        ? 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0'
                        : `/communities/${community.slug}`
                    }
                    className={styles.communityLink}
                    aria-label={`View details about ${community.name} community`}
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Why Live in Summerlin West?">
          <h2 className={styles.centerTitle}>Why Live in Summerlin West?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon} aria-hidden="true">
                🎓
              </div>
              <h3 className={styles.featureTitle}>Top-Rated Schools</h3>
              <p className={styles.featureDescription}>
                Exceptional public and private schools with high academic performance and excellent
                extracurricular programs.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon} aria-hidden="true">
                🏞️
              </div>
              <h3 className={styles.featureTitle}>Parks & Recreation</h3>
              <p className={styles.featureDescription}>
                Access to Red Rock Canyon, walking trails, parks, and outdoor recreation for all
                ages and interests.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon} aria-hidden="true">
                🛒
              </div>
              <h3 className={styles.featureTitle}>Modern Amenities</h3>
              <p className={styles.featureDescription}>
                Modern shopping, dining, and entertainment options just minutes from your door.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Community Comparison">
          <h2 className={styles.centerTitle}>Community Comparison</h2>
          <div
            className={styles.comparisonTable}
            role="table"
            aria-label="Community comparison table"
          >
            <div className={styles.tableHeader} role="row">
              <div className={styles.tableCell} role="columnheader">
                Community
              </div>
              <div className={styles.tableCell} role="columnheader">
                Price Range
              </div>
              <div className={styles.tableCell} role="columnheader">
                Home Types
              </div>
              <div className={styles.tableCell} role="columnheader">
                Special Features
              </div>
            </div>
            {communities.slice(0, 4).map((community, _index) => (
              <div key={community.name} className={styles.tableRow} role="row">
                <div className={styles.tableCell} role="cell">
                  {community.name}
                </div>
                <div className={styles.tableCell} role="cell">
                  {community.priceRange}
                </div>
                <div className={styles.tableCell} role="cell">
                  {community.homeTypes}
                </div>
                <div className={styles.tableCell} role="cell">
                  {community.features.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Explore All Summerlin West Communities">
          <h2 className={styles.centerTitle}>Explore All Summerlin West Communities</h2>
          <div className={styles.communitiesGrid}>
            {communities.map((community) => (
              <article className={styles.communityCard} key={community.name}>
                <Image
                  src={community.image}
                  alt={`${community.name} luxury homes and neighborhoods in Summerlin West`}
                  width={400}
                  height={220}
                  className={styles.communityImage}
                  loading="lazy"
                />
                <div className={styles.communityContent}>
                  <h3 className={styles.communityTitle}>{community.name}</h3>
                  <p className={styles.communityDescription}>{community.description}</p>
                  <div className={styles.communityPrice}>{community.priceRange}</div>
                  <div className={styles.featuresContainer}>
                    {community.features.map((feature) => (
                      <span key={feature} className={styles.featureTag}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={
                      community.slug === 'the-vistas'
                        ? 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0'
                        : `/communities/${community.slug}`
                    }
                    className={styles.communityLink}
                    aria-label={`Explore ${community.name} homes and listings`}
                  >
                    Explore Community
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.realScoutSectionSpacer}>
            <RealScoutWidget priceMin={600000} />
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Summerlin West Market Overview">
          <h2 className={styles.centerTitle}>Summerlin West Market Overview</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>6</div>
              <div className={styles.statLabel}>Communities</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>$850K</div>
              <div className={styles.statLabel}>Median Price</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>312</div>
              <div className={styles.statLabel}>Active Listings</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>List-to-Sale Ratio</div>
            </div>
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="The Vistas Subdivisions">
          <h2 className={styles.centerTitle}>The Vistas Subdivisions</h2>
          <p className={styles.contentText}>
            Explore the individual subdivisions within The Vistas village, each offering unique amenities and home styles.
          </p>
          <div className={styles.communitiesGrid}>
            <div className={styles.communityCard}>
              <div className={styles.cardImageWrap}>
                <Image
                  src="https://placehold.co/400x200?text=San+Marcos"
                  alt="San Marcos subdivision in The Vistas"
                  width={400}
                  height={200}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>San Marcos</div>
              </div>
              <div className={styles.communityContent}>
                <h3 className={styles.communityTitle}>San Marcos</h3>
                <p className={styles.communityDescription}>
                  Established luxury gated community by Kimball Hill Homes with homes from 1,900-2,500 sq ft.
                </p>
                <Link href="/service-area/san-marcos" className={styles.ctaButton}>
                  Explore San Marcos
                </Link>
              </div>
            </div>
            
            <div className={styles.communityCard}>
              <div className={styles.cardImageWrap}>
                <Image
                  src="https://placehold.co/400x200?text=Casa+Rosa"
                  alt="Casa Rosa subdivision in The Vistas"
                  width={400}
                  height={200}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>Casa Rosa</div>
              </div>
              <div className={styles.communityContent}>
                <h3 className={styles.communityTitle}>Casa Rosa</h3>
                <p className={styles.communityDescription}>
                  Gated mid-range luxury homes by Kimball Hill Homes with 1,800-2,400 sq ft floor plans.
                </p>
                <Link href="/service-area/casa-rosa" className={styles.ctaButton}>
                  Explore Casa Rosa
                </Link>
              </div>
            </div>

            <div className={styles.communityCard}>
              <div className={styles.cardImageWrap}>
                <Image
                  src="https://placehold.co/400x200?text=Solano"
                  alt="Solano subdivision in The Vistas"
                  width={400}
                  height={200}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>Solano</div>
              </div>
              <div className={styles.communityContent}>
                <h3 className={styles.communityTitle}>Solano</h3>
                <p className={styles.communityDescription}>
                  Residential neighborhood within The Vistas offering single-family homes and community amenities.
                </p>
                <Link href="/service-area/solano" className={styles.ctaButton}>
                  Explore Solano
                </Link>
              </div>
            </div>

            <div className={styles.communityCard}>
              <div className={styles.cardImageWrap}>
                <Image
                  src="https://placehold.co/400x200?text=Encanto"
                  alt="Encanto subdivision in The Vistas"
                  width={400}
                  height={200}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>Encanto</div>
              </div>
              <div className={styles.communityContent}>
                <h3 className={styles.communityTitle}>Encanto</h3>
                <p className={styles.communityDescription}>
                  Family-friendly community by William Lyon Homes with varied one and two-story home styles.
                </p>
                <Link href="/service-area/encanto" className={styles.ctaButton}>
                  Explore Encanto
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionCard} aria-label="Explore More">
          <h2 className={styles.centerTitle}>Explore More</h2>
          <nav aria-label="Additional resources">
            <ul className={styles.resourceLinks}>
              <li>
                <Link href="/service-area">View All Vistas Subdivisions</Link>
              </li>
              <li>
                <Link href="/properties">Browse All Summerlin West Homes</Link>
              </li>
              <li>
                <Link href="/market-reports">Get Market Reports</Link>
              </li>
              <li>
                <Link href="/new-homes-summerlin">New Construction Homes</Link>
              </li>
              <li>
                <Link href="/about">Meet Your Summerlin West Expert</Link>
              </li>
              <li>
                <Link href="/contact">Schedule Community Tours</Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className={styles.sectionCard} aria-label="Featured Summerlin West Neighborhoods">
          <h2 className={styles.centerTitle}>Featured Summerlin West Neighborhoods</h2>
          <ul className={styles.featureList}>
            <li>
              <strong>The Vistas:</strong> Luxury homes with stunning mountain views and gated
              communities.
            </li>
            <li>
              <strong>Redpoint:</strong> New construction, modern amenities, and walkable parks.
            </li>
            <li>
              <strong>Stonebridge:</strong> Family-friendly, close to top-rated schools and Red Rock
              Canyon.
            </li>
            <li>
              <strong>The Cliffs:</strong> Resort-style living, scenic desert landscapes, and
              exclusive amenities.
            </li>
            <li>
              <strong>Reverence:</strong> Elevated living, private club access, and panoramic city
              views.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
