import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './Team.module.css';

export const metadata: Metadata = {
  title: 'Meet Dr. Jan Duffy | Luxury Real Estate Expert | Summerlin West',
  description:
    'Meet Dr. Jan Duffy, REALTOR® with over $6 billion in luxury real estate sales. Expert guidance for Summerlin West properties.',
  keywords:
    'Dr. Jan Duffy, luxury real estate agent, Summerlin West, Las Vegas realtor, luxury homes',
  openGraph: {
    title: 'Meet Dr. Jan Duffy | Luxury Real Estate Expert | Summerlin West',
    description: 'Meet Dr. Jan Duffy, REALTOR® with over $6 billion in luxury real estate sales.',
    type: 'website',
  },
};

export default function Team() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            <Image
              src="/images/team/dr-jan-duffy-hero.jpg"
              alt="Dr. Jan Duffy, Luxury Real Estate Expert"
              width={400}
              height={500}
              className={styles.image}
            />
          </div>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Dr. Jan Duffy</h1>
            <p className={styles.heroSubtitle}>Luxury Real Estate Expert</p>
            <p className={styles.heroDescription}>
              For more than four decades, Dr. Jan Duffy has proven herself indispensable in the
              refined world of luxury real estate. She is nothing short of a legend among her
              clients, professional colleagues, and the community she serves.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>$6B+</span>
                <span className={styles.statLabel}>In Sales</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>40+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>About Dr. Jan Duffy</h2>
              <p className={styles.aboutParagraph}>
                One of the most respected names in luxury real estate worldwide, Dr. Jan Duffy has
                amassed more than $6 billion in sales. Her expertise spans the most prestigious
                communities in Summerlin West, including The Vistas, Stonebridge, and Redpoint.
              </p>
              <p className={styles.aboutParagraph}>
                Dr. Duffy's approach combines deep market knowledge with personalized service,
                ensuring each client receives the attention and expertise they deserve. Her track
                record speaks to her ability to navigate complex transactions and deliver
                exceptional results.
              </p>
              <div className={styles.credentials}>
                <h3 className={styles.credentialsTitle}>Professional Credentials</h3>
                <ul className={styles.credentialsList}>
                  <li>Licensed REALTOR® in Nevada</li>
                  <li>Certified Luxury Home Marketing Specialist</li>
                  <li>Graduate of the Realtor Institute</li>
                  <li>Member of the National Association of Realtors</li>
                  <li>Las Vegas Association of Realtors</li>
                </ul>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <Image
                src="/images/team/dr-jan-duffy-office.jpg"
                alt="Dr. Jan Duffy in her office"
                width={500}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className={styles.expertiseSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              <h3 className={styles.expertiseTitle}>Luxury Homes</h3>
              <p className={styles.expertiseDescription}>
                Specializing in high-end properties in Summerlin West's most exclusive communities
              </p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className={styles.expertiseTitle}>Market Analysis</h3>
              <p className={styles.expertiseDescription}>
                Deep understanding of Las Vegas luxury real estate trends and pricing
              </p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.expertiseTitle}>Client Service</h3>
              <p className={styles.expertiseDescription}>
                Personalized attention and white-glove service for every transaction
              </p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>
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
              <h3 className={styles.expertiseTitle}>Negotiation</h3>
              <p className={styles.expertiseDescription}>
                Expert negotiation skills to achieve the best outcomes for clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className={styles.communitySection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Community Involvement</h2>
          <div className={styles.communityContent}>
            <div className={styles.communityText}>
              <p className={styles.communityParagraph}>
                Dr. Jan Duffy is deeply committed to the Summerlin West community, actively
                participating in local organizations and charitable causes. Her involvement extends
                beyond real estate to making a positive impact on the community she serves.
              </p>
              <div className={styles.organizations}>
                <h3 className={styles.organizationsTitle}>Professional Organizations</h3>
                <ul className={styles.organizationsList}>
                  <li>Las Vegas Association of Realtors</li>
                  <li>National Association of Realtors</li>
                  <li>Luxury Home Marketing Specialist</li>
                  <li>Certified Residential Specialist</li>
                </ul>
              </div>
            </div>
            <div className={styles.communityImage}>
              <Image
                src="/images/team/community-involvement.jpg"
                alt="Dr. Jan Duffy at community event"
                width={500}
                height={400}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.contactSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.contactContent}>
            <h2 className={styles.contactTitle}>Ready to Work Together?</h2>
            <p className={styles.contactSubtitle}>
              Let Dr. Jan Duffy's expertise guide your luxury real estate journey
            </p>
            <div className={styles.contactButtons}>
              <a href="/contact" className={styles.contactButton}>
                Get in Touch
              </a>
              <a href="/properties" className={styles.contactButtonSecondary}>
                View Properties
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
