import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './Press.module.css';

export const metadata: Metadata = {
  title: 'Press & Media Coverage | Dr. Jan Duffy Real Estate | Summerlin West',
  description:
    'Read the latest press coverage and media insights from Dr. Jan Duffy, luxury real estate expert in Summerlin West, Las Vegas.',
  keywords:
    'Dr. Jan Duffy press, luxury real estate news, Summerlin West media, Las Vegas real estate coverage',
  openGraph: {
    title: 'Press & Media Coverage | Dr. Jan Duffy Real Estate | Summerlin West',
    description: 'Read the latest press coverage and media insights from Dr. Jan Duffy.',
    type: 'website',
  },
};

export default function Press() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Press & Media Coverage</h1>
          <p className={styles.heroSubtitle}>
            Stay informed with the latest luxury real estate insights and market analysis from Dr.
            Jan Duffy
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.featuredArticle}>
            <div className={styles.featuredImage}>
              <Image
                src="/images/press/featured-article.jpg"
                alt="Dr. Jan Duffy featured in luxury real estate publication"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.featuredBadge}>Featured Article</div>
              <h2 className={styles.featuredTitle}>
                "Summerlin West: The New Epicenter of Luxury Living in Las Vegas"
              </h2>
              <p className={styles.featuredExcerpt}>
                Dr. Jan Duffy shares insights on why Summerlin West has become the premier
                destination for luxury homebuyers seeking the perfect blend of natural beauty,
                world-class amenities, and investment potential.
              </p>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredDate}>January 15, 2025</span>
                <span className={styles.featuredSource}>Luxury Real Estate Magazine</span>
              </div>
              <a href="#" className={styles.featuredLink}>
                Read Full Article
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Press */}
      <section className={styles.recentPress}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Recent Press Coverage</h2>
          <div className={styles.pressGrid}>
            <article className={styles.pressCard}>
              <div className={styles.pressImage}>
                <Image
                  src="/images/press/press-1.jpg"
                  alt="Market analysis article"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.pressContent}>
                <div className={styles.pressCategory}>Market Analysis</div>
                <h3 className={styles.pressTitle}>
                  "Las Vegas Luxury Market Shows Strong Growth in Q4 2024"
                </h3>
                <p className={styles.pressExcerpt}>
                  Dr. Jan Duffy provides expert analysis on the continued growth of luxury real
                  estate in Las Vegas, with particular focus on Summerlin West's performance.
                </p>
                <div className={styles.pressMeta}>
                  <span className={styles.pressDate}>January 10, 2025</span>
                  <span className={styles.pressSource}>Las Vegas Review-Journal</span>
                </div>
              </div>
            </article>

            <article className={styles.pressCard}>
              <div className={styles.pressImage}>
                <Image
                  src="/images/press/press-2.jpg"
                  alt="Community spotlight article"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.pressContent}>
                <div className={styles.pressCategory}>Community Spotlight</div>
                <h3 className={styles.pressTitle}>
                  "The Vistas: Redefining Luxury Living in Summerlin West"
                </h3>
                <p className={styles.pressExcerpt}>
                  An in-depth look at The Vistas community and its appeal to luxury homebuyers,
                  featuring insights from Dr. Jan Duffy on what makes this community special.
                </p>
                <div className={styles.pressMeta}>
                  <span className={styles.pressDate}>January 5, 2025</span>
                  <span className={styles.pressSource}>Las Vegas Magazine</span>
                </div>
              </div>
            </article>

            <article className={styles.pressCard}>
              <div className={styles.pressImage}>
                <Image
                  src="/images/press/press-3.jpg"
                  alt="Investment insights article"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.pressContent}>
                <div className={styles.pressCategory}>Investment Insights</div>
                <h3 className={styles.pressTitle}>
                  "Why Summerlin West Remains a Top Investment Destination"
                </h3>
                <p className={styles.pressExcerpt}>
                  Dr. Jan Duffy discusses the long-term investment potential of Summerlin West
                  properties and what factors continue to drive demand in this prestigious market.
                </p>
                <div className={styles.pressMeta}>
                  <span className={styles.pressDate}>December 28, 2024</span>
                  <span className={styles.pressSource}>Real Estate Weekly</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className={styles.mediaKit}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Media Kit</h2>
          <div className={styles.mediaKitContent}>
            <div className={styles.mediaKitText}>
              <h3 className={styles.mediaKitTitle}>Press Resources</h3>
              <p className={styles.mediaKitDescription}>
                For media inquiries, interviews, or press materials, please contact our team. We're
                happy to provide expert commentary on luxury real estate trends, market analysis,
                and insights into the Summerlin West community.
              </p>
              <div className={styles.mediaKitItems}>
                <div className={styles.mediaKitItem}>
                  <h4 className={styles.mediaKitItemTitle}>High-Resolution Photos</h4>
                  <p className={styles.mediaKitItemDesc}>
                    Professional headshots and property photos
                  </p>
                </div>
                <div className={styles.mediaKitItem}>
                  <h4 className={styles.mediaKitItemTitle}>Biography & Credentials</h4>
                  <p className={styles.mediaKitItemDesc}>
                    Detailed professional background and achievements
                  </p>
                </div>
                <div className={styles.mediaKitItem}>
                  <h4 className={styles.mediaKitItemTitle}>Market Data & Statistics</h4>
                  <p className={styles.mediaKitItemDesc}>Current market trends and analysis</p>
                </div>
              </div>
            </div>
            <div className={styles.mediaKitContact}>
              <h3 className={styles.contactTitle}>Media Contact</h3>
              <div className={styles.contactInfo}>
                <p className={styles.contactName}>Dr. Jan Duffy</p>
                <p className={styles.contactRole}>Luxury Real Estate Expert</p>
                <p className={styles.contactPhone}>Phone: (702) 555-0123</p>
                <p className={styles.contactEmail}>Email: DrJanSells@SummerlinWestRealEstate.com</p>
              </div>
              <a href="/contact" className={styles.contactButton}>
                Contact for Media Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className={styles.awardsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Awards & Recognition</h2>
          <div className={styles.awardsGrid}>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className={styles.awardTitle}>Top Producer</h3>
              <p className={styles.awardDescription}>Las Vegas Association of Realtors</p>
              <p className={styles.awardYear}>2024</p>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className={styles.awardTitle}>Luxury Specialist</h3>
              <p className={styles.awardDescription}>Coldwell Banker Global Luxury</p>
              <p className={styles.awardYear}>2024</p>
            </div>
            <div className={styles.awardCard}>
              <div className={styles.awardIcon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className={styles.awardTitle}>Client Choice</h3>
              <p className={styles.awardDescription}>Best Real Estate Agent</p>
              <p className={styles.awardYear}>2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={styles.newsletterSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Stay Updated</h2>
            <p className={styles.newsletterSubtitle}>
              Get the latest press coverage and market insights delivered to your inbox
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email address"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterButton}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
