"use client";

import styles from "./NewHomesSummerlin.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import SummerlinWestOverview from "../../components/ui/SummerlinWestOverview";
import AmenityMapSection from "../../components/ui/AmenityMapSection";

// Dynamic imports for client components
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false },
);

const LeadCaptureForm = dynamic(
  () => import("../../components/ui/LeadCaptureForm"),
  { ssr: false },
);

export default function NewHomesSummerlin() {
  return (
    <div className={`${styles.page} ${styles.newHomesContainer}`}>
      <main>
        {/* Header Section */}
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>
              New Construction Homes in Summerlin West
            </h1>
            <p className={styles.headerSubtitle}>
              Luxury Living at the Gateway to Red Rock Canyon
            </p>
            <p>
              <strong>
                Dr. Jan Duffy, REALTOR® | Your New Construction Specialist
              </strong>
            </p>
          </div>
        </header>

        {/* Intro Section */}
        <section className={styles.introSection}>
          <div className={styles.introContainer}>
            <div className={styles.introContent}>
              <h2 className={styles.introTitle}>
                Build Your Dream Home in Summerlin West
              </h2>
              <p className={styles.introText}>
                Discover the ultimate in luxury living with brand-new
                construction homes in Summerlin West, Las Vegas&apos;s most
                prestigious master-planned community. As your dedicated new
                construction specialist, Dr. Jan Duffy provides expert guidance
                through every step of building your dream home with Summerlin&apos;s
                premier national builders.
              </p>
              <p className={styles.introText}>
                From energy-efficient designs to cutting-edge smart home
                technology, these new homes offer the perfect blend of
                innovation, quality, and the legendary Summerlin lifestyle—all
                with breathtaking Red Rock Canyon views and world-class
                amenities at your doorstep.
              </p>
            </div>
          </div>
        </section>

        <AmenityMapSection
          heading="What's Nearby for New Summerlin West Homeowners"
          compact
        />

        {/* Builders Section */}
        <section className={styles.buildersSection}>
          <div className={styles.buildersContainer}>
            <h2 className={styles.buildersTitle}>
              Meet Summerlin&apos;s Premier Builders
            </h2>
            <p className={styles.buildersSubtitle}>
              Summerlin&apos;s all-star roster of national homebuilders ensures
              quality, innovation, and progressive home design while maintaining
              the community&apos;s aesthetic excellence and lasting value.
            </p>
            <div className={styles.buildersGrid}>
              {/* Builder Cards */}
              {[
                {
                  name: "KB Home",
                  desc: "Building dreams since 1957, KB Home offers customizable new construction with dependable materials and an industry-leading 10-year limited warranty. Their commitment to quality homes at affordable prices, combined with outstanding customer service, makes them a trusted choice for Summerlin West families.",
                  link: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0",
                },
                {
                  name: "Toll Brothers",
                  desc: "America&apos;s luxury home builder since 1967, Toll Brothers homes perform well above building code standards. Each community is managed with meticulous attention to detail, offering the personalized service of a local builder backed by national resources and an impeccable reputation.",
                  link: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0",
                },
                {
                  name: "Taylor Morrison",
                  desc: "Wherever life takes you, Taylor Morrison builds homes and communities inspired by you. They believe your life should feel inspired—by joy, adventure, and new beginnings. Their innovative designs and community focus make finding your perfect Summerlin West home effortless.",
                  link: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0",
                },
                {
                  name: "Lennar",
                  desc: "With the Logic of Lennar, you get everything you want and need to enhance luxury, quality, and ease of purchase. Founded in 1954, Lennar is dedicated to Total Lennar Care (TLC), making the home buying process a true celebration for all generations.",
                  link: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0",
                },
                {
                  name: "Pulte Homes",
                  desc: "Pulte&apos;s Life Tested® homes are designed and built for the way you live. With functional design, innovation, and beautiful liveable communities, Pulte offers energy-efficient homebuilding with more customer satisfaction awards than any other homebuilder.",
                  link: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0",
                },
                {
                  name: "Richmond American Homes",
                  desc: "For over 45 years, Richmond American has designed and built 240,000+ homes with livability and style in mind. Their designer-curated details and inviting layouts fit any lifestyle, backed by experience, quality craftsmanship, and unwavering customer service.",
                  link: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0",
                },
                {
                  name: "SHAWOOD",
                  desc: "The flagship brand of Sekisui House, one of the world&apos;s largest residential homebuilders. Since 1995, SHAWOOD uses proprietary technology for maximum design flexibility while being stronger, safer, and more sustainable—home, perfected.",
                  link: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0",
                },
                {
                  name: "Tri Pointe Homes",
                  desc: "In the life-changing business, Tri Pointe designs homes, neighborhoods, and experiences that inspire and uplift. As local specialists on a national scale, they&apos;re customer-driven and committed to environmentally responsible practices and enduring craftsmanship.",
                  link: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0",
                },
                {
                  name: "Woodside Homes",
                  desc: "A highly respected leader integrating great design with green solutions. Utilizing the latest technology and construction methods, Woodside puts great design and flexible choices within reach, making the process fun, easy, and affordable.",
                  link: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0",
                },
                {
                  name: "Edward Homes",
                  desc: "A local development firm built on being attentive to every detail and fiscally responsible. Edward Homes believes quality, not quantity, matters most. Their Thrive community offers modern townhome living with low-maintenance lifestyle near Downtown Summerlin.",
                  link: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0",
                },
              ].map((builder, idx) => (
                <div key={builder.name} className={styles.builderCard}>
                  <h3 className={styles.builderName}>{builder.name}</h3>
                  <p className={styles.builderDesc}>{builder.desc}</p>
                  <a
                    href={builder.link}
                    className={styles.viewInventoryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View {builder.name} Inventory
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsContainer}>
            <h2 className={styles.benefitsTitle}>
              Why Choose New Construction in Summerlin West?
            </h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🏠</div>
                <h4 className={styles.benefitTitle}>Latest Design Trends</h4>
                <p>
                  Energy-efficient features, smart home technology, and
                  contemporary layouts designed for modern living
                </p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🛡️</div>
                <h4 className={styles.benefitTitle}>Builder Warranties</h4>
                <p>
                  Comprehensive protection with industry-leading warranties up
                  to 10 years for peace of mind
                </p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🏔️</div>
                <p>
                  Premium location with Red Rock Canyon views, 150+ miles of
                  trails, and world-class amenities
                </p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>👩‍🎓</div>
                <h4 className={styles.benefitTitle}>Expert Guidance</h4>
                <p>
                  Dr. Jan Duffy&apos;s expertise in new construction contracts,
                  builder negotiations, and Summerlin market knowledge
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <div>
              <h2 className={styles.ctaTitle}>
                Ready to Build Your Summerlin West Dream Home?
              </h2>
              <p className={styles.ctaText}>
                Let Dr. Jan Duffy guide you through the new construction process
                with her expert knowledge of builders, communities, and market
                timing.
              </p>
              <div className={styles.ctaButtons}>
                <a
                  href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                  className={styles.ctaBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Builder Tour
                </a>
                <a
                  href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                  className={styles.ctaBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get New Construction Guide
                </a>
                <a href="/contact" className={styles.ctaBtn}>
                  Contact Dr. Duffy
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <p>
              &copy; 2025 Dr. Jan Duffy, REALTOR® | SummerlinWestRealEstate.com
              | Licensed in Nevada
            </p>
            <p>
              Specializing in Summerlin West New Construction | Red Rock Canyon
              Luxury Homes
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
