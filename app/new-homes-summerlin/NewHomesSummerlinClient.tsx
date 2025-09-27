'use client';

import dynamic from 'next/dynamic';
import styles from './NewHomesSummerlin.module.css';

// Dynamic imports for client components
const _LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), {
  ssr: false,
});

const _LeadCaptureForm = dynamic(() => import('../../components/ui/LeadCaptureForm'), {
  ssr: false,
});

export default function NewHomesSummerlinClient() {
  return (
    <div className={`${styles.page} ${styles.newHomesContainer}`}>
      <main>
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>New Construction Homes in Summerlin West</h1>
            <p className={styles.headerSubtitle}>Luxury Living at the Gateway to Red Rock Canyon</p>
            <p>
              <strong>Dr. Jan Duffy, REALTOR® | Your New Construction Specialist</strong>
            </p>
          </div>
        </header>

        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.introContainer}>
            <h2>Discover Your Dream Home in Summerlin West's Premier New Construction Communities</h2>
            <p>
              Summerlin West represents the pinnacle of luxury living in Las Vegas, and new construction
              homes here offer the perfect blend of modern design, energy efficiency, and prime location.
              As your dedicated new construction specialist, Dr. Jan Duffy provides exclusive access to
              the finest builders and communities in the area.
            </p>
            <p>
              With over 15 years of experience in Summerlin West real estate, Dr. Duffy understands the
              unique advantages of new construction: cutting-edge design, energy-efficient features,
              builder warranties, and the opportunity to customize your home to your exact specifications.
            </p>
          </div>
        </section>

        {/* Featured Communities Section */}
        <section className={styles.communitiesSection}>
          <h2>Featured New Construction Communities</h2>
          <div className={styles.communitiesGrid}>
            <div className={styles.communityCard}>
              <h3>The Vistas</h3>
              <p>
                Luxury single-family homes with Red Rock Canyon views. Features include gourmet kitchens,
                master suites, and outdoor living spaces.
              </p>
              <ul>
                <li>2,500 - 4,000 sq ft homes</li>
                <li>4-6 bedrooms, 3-5 bathrooms</li>
                <li>Starting from $850,000</li>
                <li>Builder: KB Home</li>
              </ul>
            </div>
            <div className={styles.communityCard}>
              <h3>Stonebridge</h3>
              <p>
                Modern townhomes and single-family homes with contemporary design and smart home technology.
              </p>
              <ul>
                <li>1,800 - 3,200 sq ft homes</li>
                <li>3-5 bedrooms, 2-4 bathrooms</li>
                <li>Starting from $650,000</li>
                <li>Builder: Toll Brothers</li>
              </ul>
            </div>
            <div className={styles.communityCard}>
              <h3>Redpoint</h3>
              <p>
                Upscale single-family homes with mountain views and premium finishes throughout.
              </p>
              <ul>
                <li>2,200 - 3,800 sq ft homes</li>
                <li>4-5 bedrooms, 3-4 bathrooms</li>
                <li>Starting from $750,000</li>
                <li>Builder: Taylor Morrison</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <h2>Why Choose New Construction in Summerlin West?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Modern Design & Features</h3>
              <p>
                New homes feature the latest in architectural design, open floor plans, and contemporary
                finishes that reflect current lifestyle trends.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Energy Efficiency</h3>
              <p>
                Built with the latest energy-efficient materials and systems, new construction homes
                offer significant savings on utility bills.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Builder Warranty</h3>
              <p>
                Comprehensive warranties cover structural elements, systems, and finishes, providing
                peace of mind for years to come.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Customization Options</h3>
              <p>
                Many builders offer customization options, allowing you to personalize your home
                with your preferred finishes and features.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <h2>Your New Construction Journey</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Community Selection</h3>
              <p>
                Dr. Duffy will help you explore available communities, understand builder reputations,
                and find the perfect location for your lifestyle.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Home Design & Customization</h3>
              <p>
                Work with builders to select floor plans, finishes, and upgrades that match your
                vision and budget.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Construction Monitoring</h3>
              <p>
                Dr. Duffy will monitor construction progress, coordinate inspections, and ensure
                quality standards are met throughout the build process.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Final Walkthrough & Closing</h3>
              <p>
                Comprehensive final walkthrough, warranty review, and smooth closing process to
                get you into your new home.
              </p>
            </div>
          </div>
        </section>

        {/* Builder Relationships Section */}
        <section className={styles.buildersSection}>
          <h2>Exclusive Builder Relationships</h2>
          <p>
            Dr. Jan Duffy has established strong relationships with Summerlin West's premier builders,
            providing her clients with exclusive access to:
          </p>
          <ul className={styles.builderList}>
            <li>Pre-construction pricing and incentives</li>
            <li>Priority access to new releases</li>
            <li>Enhanced customization options</li>
            <li>Streamlined communication and updates</li>
            <li>Advocate representation throughout the process</li>
          </ul>
        </section>

        {/* Market Insights Section */}
        <section className={styles.insightsSection}>
          <h2>New Construction Market Insights</h2>
          <div className={styles.insightsGrid}>
            <div className={styles.insightCard}>
              <h3>Current Market Trends</h3>
              <p>
                New construction in Summerlin West continues to see strong demand, with limited
                inventory driving competitive pricing and quick sales.
              </p>
            </div>
            <div className={styles.insightCard}>
              <h3>Investment Potential</h3>
              <p>
                New construction homes in Summerlin West have shown consistent appreciation,
                making them excellent long-term investments.
              </p>
            </div>
            <div className={styles.insightCard}>
              <h3>Future Development</h3>
              <p>
                Planned infrastructure improvements and community amenities continue to enhance
                the value proposition of new construction in the area.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>Ready to Build Your Dream Home?</h2>
          <p>
            Contact Dr. Jan Duffy today to explore new construction opportunities in Summerlin West.
            Get exclusive access to the finest builders, communities, and pricing available.
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:7025500112" className={styles.ctaButton}>
              Call (702) 550-0112
            </a>
            <a href="mailto:DrJanSells@SummerlinWestRealEstate.com" className={styles.ctaButtonSecondary}>
              Email Dr. Duffy
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
