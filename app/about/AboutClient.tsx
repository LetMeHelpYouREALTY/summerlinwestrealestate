'use client';
import { FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import TestimonialsSectionClient from '../../components/ui/TestimonialsSectionClient';
import styles from '../page.module.css';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Summerlin West Real Estate',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1980 Festival Plaza Dr (One Summerlin)',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    addressCountry: 'US',
  },
  description:
    'Local Summerlin real estate expert with 15+ years of experience helping buyers and sellers in Summerlin West.',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.154,
    longitude: -115.3336,
  },
    url: 'https://summerlinwestrealestate.com/about',
  telephone: '+1-702-550-0112',
};

export default function AboutClient() {
  return (
    <div className={styles.page}>
      <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
        <h1>Meet Dr. Jan Duffy: Your Trusted Summerlin West Real Estate Expert with 15+ Years of Experience</h1>
        <p>
          <strong>
            Helping families discover luxury living at the gateway to Red Rock Canyon since 2015
          </strong>
        </p>
        <p>
          As a dedicated <strong>Summerlin West REALTOR®</strong> and longtime Las Vegas resident,
          Dr. Jan Duffy brings unparalleled expertise to one of Nevada&apos;s most sought-after
          master-planned communities. With her unique background as both a licensed real estate
          professional and doctorate-level educator, Dr. Duffy combines analytical precision with
          deep local market knowledge to deliver exceptional results for{' '}
          <strong>Summerlin West home buyers and sellers</strong>. Her comprehensive understanding of the local market, combined with her educational background in psychology and business, allows her to provide personalized service that goes beyond traditional real estate transactions.
        </p>
        <h2>Your Summerlin West Market Specialist and Local Community Expert</h2>
        <p>
          Dr. Duffy specializes exclusively in <strong>Summerlin West real estate</strong>,
          including the prestigious communities of{' '}
          <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>. She
          understands what makes this area special: the breathtaking{' '}
          <strong>Red Rock Canyon views</strong>, world-class amenities, and the perfect blend of
          luxury living with outdoor adventure that draws families from across the country to call
          Summerlin West home. Her deep knowledge of each community's unique characteristics, from the luxury estates in The Ridges to the family-friendly neighborhoods in The Vistas, allows her to match clients with their perfect home and lifestyle.
        </p>
        <p>
          <strong>Recent Market Results and Achievements:</strong>
        </p>
        <ul>
          <li>
            Successfully guided over 200 clients through Summerlin West&apos;s competitive market where 50%
            of homes sell within 30 days, with an average of 12 days on market for Dr. Duffy's listings
          </li>
          <li>
            Expert navigation of the area&apos;s premium price points, with median home values
            reaching $920,000+ and luxury properties exceeding $2 million in The Ridges and Red Rock Country Club
          </li>
          <li>
            Specialized knowledge of new construction opportunities from premier builders like KB
            Homes, Toll Brothers, and Taylor Morrison, with exclusive access to pre-construction pricing and incentives
          </li>
          <li>
            Consistently achieves 98% list-to-sale ratio, ensuring clients receive maximum value for their properties
          </li>
          <li>
            Recognized as a top producer in Summerlin West real estate, with over $50 million in sales volume in 2024
          </li>
        </ul>
        <h2>Comprehensive Summerlin West Real Estate Services and Expertise</h2>
        <p>
          <strong>For Home Sellers:</strong>
        </p>
        <ul>
          <li>
            Strategic pricing analysis leveraging Summerlin West&apos;s 8.2% year-over-year
            appreciation and current market conditions, ensuring maximum return on investment
          </li>
          <li>
            Professional staging consultation to highlight Red Rock Canyon views and luxury features,
            with access to premium staging companies and interior designers
          </li>
          <li>
            Targeted marketing to qualified buyers seeking Summerlin&apos;s lifestyle amenities,
            including international marketing for luxury properties
          </li>
          <li>Expert positioning for quick sales in this fast-moving market, with average days on market of 12 days</li>
          <li>Comprehensive market analysis and competitive positioning to ensure your home stands out</li>
          <li>Negotiation expertise to secure the best possible terms and price for your property</li>
        </ul>
        <p>
          <strong>For Home Buyers:</strong>
        </p>
          <ul>
            <li>
              Exclusive access to new construction in Grand Park District and Kestrel Commons Village,
              with pre-construction pricing and builder incentives
            </li>
            <li>In-depth neighborhood guidance across Summerlin West&apos;s distinct villages,
                including detailed information about amenities, HOA fees, and community culture</li>
            <li>
              School district expertise for families prioritizing top-rated Clark County schools,
              with detailed information about test scores, programs, and enrollment
            </li>
            <li>Investment analysis for luxury properties and custom home opportunities,
                including ROI projections and market appreciation potential</li>
            <li>First-time buyer assistance with down payment programs and financing options</li>
            <li>Relocation services for out-of-state buyers, including area orientation and local connections</li>
          </ul>
        <h2>Deep Community Connections and Local Expertise</h2>
        <p>
          Living in Summerlin West for over a decade, Dr. Duffy knows every trail in the{' '}
          <strong>150-mile trail system</strong>, the best tee times at{' '}
          <strong>TPC Summerlin</strong>, and which neighborhoods offer the most spectacular{' '}
          <strong>Red Rock Canyon sunset views</strong>. She&apos;s an active member of the
          Summerlin community, regularly participating in <strong>Tour de Summerlin</strong> and
          volunteering at local schools. Her involvement in community events, local business networks,
          and neighborhood associations gives her insider knowledge about upcoming developments,
          community changes, and local market trends that benefit her clients.
        </p>
        <p>
          Dr. Duffy&apos;s clients consistently praise her responsiveness, market expertise, and
          ability to simplify complex transactions. Whether you&apos;re relocating from
          out-of-state, seeking a luxury retirement home, or ready to sell your Summerlin West
          property, her commitment to excellence ensures a smooth, successful real estate
          experience. Her educational background in psychology allows her to understand client needs
          and concerns, while her business expertise ensures every transaction is handled with
          professional precision and attention to detail.
        </p>
        <p>
          <strong>
            Ready to explore Summerlin West&apos;s luxury lifestyle? Contact Dr. Jan Duffy today for
            your complimentary market consultation and discover why Summerlin West continues to rank
            among America&apos;s top master-planned communities. With her proven track record,
            deep local knowledge, and commitment to client success, Dr. Duffy is the ideal partner
            for your Summerlin West real estate journey.
          </strong>
        </p>
        <hr />
        <p>
          <em>
            Dr. Jan Duffy, REALTOR® | Summerlin West Specialist | Licensed in Nevada | Serving The
            Ridges, Red Rock Country Club, The Vistas, The Paseos, and all Summerlin West
            communities
          </em>
        </p>
      </section>
      <section className={styles.hero}>
        <h2>About Your Summerlin Real Estate Expert</h2>
        <p className={styles.subtitle}>Local knowledge. Proven results. Personalized service.</p>
      </section>
      <div className={`${styles.container} ${styles.aboutContainer}`}>
        <section className={styles.sectionCard} aria-labelledby="about-jan-duffy">
          <h2 id="about-jan-duffy" className={styles.centerTitle}>
            Meet Dr. Jan Duffy: Professional Credentials and Background
          </h2>
          <div className={styles.agentProfile}>
            <FaUserTie className={styles.agentIcon} aria-hidden="true" />
            <div>
              <h3>Dr. Jan Duffy, REALTOR®</h3>
              <p>
                Licensed Real Estate Agent (License# S.0197614)
                <br />
                Berkshire Hathaway HomeServices Nevada Properties
                <br />
                Background in psychology, business, and marketing strategies.
                <br />
                Keynote speaker, relocation specialist, and more.
              </p>
              <p>
                Dr. Jan Duffy brings a unique combination of academic excellence and real-world experience to her real estate practice. With a doctorate-level education in psychology and extensive business training, she understands both the emotional and practical aspects of buying and selling homes. Her background allows her to provide exceptional service to clients from all walks of life, from first-time buyers to luxury property investors.
              </p>
              <div className={styles.badges} role="list" aria-label="Professional badges">
                <span className={styles.badge} role="listitem">
                  Veteran-Owned
                </span>
                <span className={styles.badge} role="listitem">
                  Women-Owned
                </span>
                <span className={styles.badge} role="listitem">
                  LGBTQ+ Friendly
                </span>
                <span className={styles.badge} role="listitem">
                  Se Habla Español
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionCard} aria-labelledby="specializations-services">
          <h2 id="specializations-services" className={styles.centerTitle}>
            Specializations & Comprehensive Real Estate Services
          </h2>
          <p className={styles.heroSubtitle}>
            Dr. Jan Duffy offers a comprehensive range of real estate services tailored to meet the diverse needs of Summerlin West clients. Her specialized expertise covers everything from luxury property transactions to first-time buyer assistance, ensuring every client receives personalized, professional service regardless of their real estate goals or experience level.
          </p>
          <ul className={styles.servicesList}>
            <li>Summerlin Vistas Homes Neighborhoods Specialist</li>
            <li>Luxury real estate transactions</li>
            <li>First-time home buyer support</li>
            <li>Foreclosed property deals</li>
            <li>Las Vegas real estate investment insights</li>
            <li>New construction sales and consulting</li>
            <li>Relocation services</li>
            <li>Expired listing consultant</li>
            <li>Divorce real estate specialist</li>
            <li>55+ Community Specialist</li>
          </ul>
        </section>
        <section className={styles.sectionCard} aria-labelledby="vistas-neighborhoods">
          <h2 id="vistas-neighborhoods" className={styles.centerTitle}>
            Summerlin Vistas Neighborhoods and Communities Served
          </h2>
          <p className={styles.heroSubtitle}>
            Dr. Jan Duffy provides expert real estate services across all Summerlin Vistas neighborhoods, each offering unique amenities, architectural styles, and lifestyle options. Her deep knowledge of these communities allows her to match clients with their perfect neighborhood based on their preferences, budget, and lifestyle needs.
          </p>
          <div className={styles.areasGrid} role="list" aria-label="Neighborhoods served">
            <span role="listitem">The Vistas</span>
            <span role="listitem">The Paseos</span>
            <span role="listitem">Stonebridge</span>
            <span role="listitem">Redpoint</span>
            <span role="listitem">Redpoint Square</span>
            <span role="listitem">Reverence</span>
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Latest News">
          <h2 className={styles.centerTitle}>Latest Real Estate News and Market Updates</h2>
          <p className={styles.heroSubtitle}>
            Stay informed about the latest developments in the Summerlin West real estate market and broader Las Vegas area. Dr. Jan Duffy regularly shares insights about market trends, new developments, and opportunities that could impact your real estate decisions.
          </p>
          <div className={styles.newsList}>
            <article className={styles.newsCard} aria-labelledby="news-mortgage">
              <span className={styles.newsBadge}>News</span>
              <div className={styles.newsContent}>
                <h3 id="news-mortgage">What You Should Know About Getting a Mortgage Today</h3>
                <time className={styles.newsDate} dateTime="2025-07-07">
                  7/7/2025
                </time>
                <p>
                  If you&apos;ve been putting off buying a home because you thought getting approved
                  would be too hard, know this: qualifying for a mortgage is starting to get a bit
                  more achievable, but lending standards are still strong.
                </p>
              </div>
            </article>
            <article className={styles.newsCard} aria-labelledby="news-buying-homes">
              <span className={styles.newsBadge}>News</span>
              <div className={styles.newsContent}>
                <h3 id="news-buying-homes">
                  Think No One&apos;s Buying Homes Right Now? Think Again.
                </h3>
                <time className={styles.newsDate} dateTime="2025-07-03">
                  7/3/2025
                </time>
                <p>
                  If you&apos;ve seen headlines saying home sales are down compared to last year,
                  you might be thinking – is it even a good time to sell?
                </p>
              </div>
            </article>
            <article className={styles.newsCard} aria-labelledby="news-investors">
              <span className={styles.newsBadge}>News</span>
              <div className={styles.newsContent}>
                <h3 id="news-investors">
                  Why Big Investors Aren&apos;t a Challenge for Today&apos;s Homebuyer
                </h3>
                <time className={styles.newsDate} dateTime="2025-07-02">
                  7/2/2025
                </time>
                <p>
                  Remember the chatter in the headlines about all the homes big institutional
                  investors were buying? If you were thinking about buying a home yourself, you may
                  have wondered how you&apos;d ever be able to compete with that.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className={styles.sectionCard} aria-labelledby="testimonials">
          <h2 id="testimonials" className={styles.centerTitle}>
            What Our Clients Say: Real Testimonials from Summerlin West Buyers and Sellers
          </h2>
          <p className={styles.sectionSubtitle}>Real stories from real buyers and sellers who have worked with Dr. Jan Duffy. These testimonials reflect the exceptional service, expertise, and results that Dr. Duffy consistently delivers to her clients in Summerlin West and surrounding communities.</p>
          <TestimonialsSectionClient />
        </section>
        <section className={styles.sectionCard} aria-labelledby="office-location">
          <h2 id="office-location" className={styles.centerTitle}>
            Our Office Location and Contact Information
          </h2>
          <p className={styles.heroSubtitle}>
            Visit Dr. Jan Duffy at her conveniently located office in the heart of Summerlin. Our office is easily accessible from all Summerlin West communities and provides a professional environment for consultations, document signing, and client meetings.
          </p>
          <div className={styles.officeCard}>
            <div className={styles.officeInfo}>
              <FaMapMarkerAlt className={styles.officeIcon} aria-hidden="true" />
              <div>
                <address className={styles.officeAddress}>
                  1980 Festival Plaza Dr (One Summerlin)
                  <br />
                  Las Vegas, NV 89135
                </address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1980+Festival+Plaza+Dr,+Las+Vegas,+NV+89135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsBtn}
                  aria-label="Get directions to our office"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className={styles.officeMapWrapper}>
              <iframe
                title="Office Location Map - 1980 Festival Plaza Dr, Las Vegas, NV 89135"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.123456789!2d-115.3336!3d36.1540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c1a2b3c4d5e6%3A0x1234567890abcdef!2s1980%20Festival%20Plaza%20Dr%2C%20Las%20Vegas%2C%20NV%2089135!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                className={styles.officeMap}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        <section className={styles.sectionCard} aria-labelledby="featured-listings">
          <h2 id="featured-listings" className={styles.centerTitle}>
            Featured Summerlin West Listings and Market Insights
          </h2>
          <p className={styles.heroSubtitle}>
            Explore current market conditions and featured properties in Summerlin West. Dr. Jan Duffy provides up-to-date market analysis and showcases exceptional properties that represent the best of Summerlin West real estate.
          </p>
          <LatestMarketInsightsClient />
        </section>
      </div>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
