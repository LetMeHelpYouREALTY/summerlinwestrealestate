"use client";
import Head from "next/head";
import styles from './page.module.css';
import { useLeadCaptureModal } from '../hooks/useLeadCaptureModal';
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "../components/layout/Header";
import SummerlinWestOverview from '../components/ui/SummerlinWestOverview';
import FeaturedHomeSlider, {
  FeaturedHomeImage,
} from '../components/ui/FeaturedHomeSlider';
import { deliveryUrl, siteImages } from "../lib/site-images";

// Dynamically import RealScoutAdvancedSearch for performance
const RealScoutAdvancedSearch = dynamic(
  () => import("../components/ui/RealScoutAdvancedSearch"),
  { ssr: false },
);

// Dynamically import LeadCaptureForm for performance
const LeadCaptureForm = dynamic(
  () => import("../components/ui/LeadCaptureForm"),
  { ssr: false },
);

// Dynamically import HomebotWidget for performance
const HomebotWidget = dynamic(() => import("../components/ui/HomebotWidget"), {
  ssr: false,
});

// Dynamically import LatestMarketInsights for performance
const LatestMarketInsights = dynamic(
  () => import("../components/ui/LatestMarketInsights"),
  { ssr: false },
);

// Dynamically import RealScoutListings for performance
const RealScoutListings = dynamic(
  () => import("../components/ui/RealScoutListings"),
  { ssr: false },
);

type Faq = {
  question: string;
  answer: string;
};

function HomeHeroImage() {
  const hero = siteImages.heroH1;
  return (
    <Image
      src={deliveryUrl(hero)}
      alt={hero.alt}
      width={1200}
      height={630}
      className={styles.heroImage}
      priority
    />
  );
}

export default function Home() {
  const { isOpen, source, openModal, closeModal } = useLeadCaptureModal();

  const handleFormSuccess = () => {
    // Track successful submission
    if (typeof window !== "undefined" && typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag("event", "lead_form_success", {
        event_category: "Lead",
        event_label: source,
      });
    }
  };

  const faqs: Faq[] = [
    {
      question: "Which Summerlin West communities can I tour?",
      answer:
        "Communities include The Vistas, Redpoint, Stonebridge, The Cliffs, and Reverence. Each has a distinct mix of floor plans, amenities, and price points.",
    },
    {
      question: "What is the average home price in Summerlin West?",
      answer:
        "The median home price in Summerlin West is around $850,000, with luxury homes reaching $2M+. Prices vary by neighborhood and property type.",
    },
    {
      question: "Are there new construction homes available in Summerlin West?",
      answer:
        "Yes! Summerlin West offers new construction in communities like Redpoint, Stonebridge, and The Cliffs. Contact us for the latest releases and builder incentives.",
    },
    {
      question: "How do I schedule a home tour in Summerlin West?",
      answer:
        "Contact us via the form or call (702) 550-0112 to schedule a private showing of any Summerlin West property.",
    },
    {
      question: "What makes Summerlin West special?",
      answer:
        "Summerlin West offers master-planned communities, trail access to Red Rock Canyon, and resort-style amenities across multiple villages.",
    },
    {
      question: "How can I get a free Summerlin West market report?",
      answer:
        "Fill out the form on this page or visit our Market Reports section to get your free Summerlin West market analysis and neighborhood insights.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace("(702) 555-1234", "(702) 550-0112"),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className={styles.main}>
        <div className={styles.container}>
          <SummerlinWestOverview />
          {/* Hero Section */}
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>
              Summerlin West Homes for Sale
            </h1>
            <p className={styles.heroSubtitle}>
              Discover luxury living in Las Vegas&apos; most prestigious master-planned
              community
            </p>
            {/* AI-generated hero image */}
            <HomeHeroImage />
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>$850K</span>
                <span className={styles.heroStatLabel}>Median Price</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>312</span>
                <span className={styles.heroStatLabel}>Active Listings</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>14</span>
                <span className={styles.heroStatLabel}>Avg Days on Market</span>
              </div>
            </div>
          </section>
          {/* HomebotWidget: Check the Value of Your Home */}
          <section className={styles.section} aria-label="Check the Value of Your Home">
            <h2 className={styles.sectionTitle}>Check the Value of Your Home</h2>
            <p className={styles.heroSubtitle}>
              Instantly see your home’s estimated value and equity growth in today’s Summerlin West market.
            </p>
            <HomebotWidget />
          </section>
          {/* Hidden Home Equity Tax Section */}
          <section className={styles.section} aria-label="Hidden Home Equity Tax">
            <h2 className={styles.sectionTitle}>
              <span className={styles.equityIcon} aria-hidden="true">💡</span>
              Are You Facing a Hidden Home Equity Tax?
            </h2>
            <p className={styles.heroSubtitle}>
              Many Summerlin West homeowners could be subject to a significant, often-overlooked tax when selling due to outdated federal laws. Find out if you&apos;re at risk and how to protect your hard-earned equity.
            </p>
            <Link href="/hidden-home-equity-tax" className={styles.card}>
              Learn About the Hidden Home Equity Tax
            </Link>
          </section>
          {/* Featured Home Section */}
          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              Featured Home in Summerlin West
            </div>
            <FeaturedHomeSlider
              images={[
                {
                  src: "/images/featured-home/featured-home-1.jpg",
                  caption: "Front Exterior",
                },
                {
                  src: "/images/featured-home/featured-home-2.jpg",
                  caption: "Entryway",
                },
                {
                  src: "/images/featured-home/featured-home-3.jpg",
                  caption: "Living Room",
                },
                {
                  src: "/images/featured-home/featured-home-4.jpg",
                  caption: "Kitchen",
                },
                {
                  src: "/images/featured-home/featured-home-5.jpg",
                  caption: "Dining Area",
                },
                {
                  src: "/images/featured-home/featured-home-6.jpg",
                  caption: "Primary Bedroom",
                },
                {
                  src: "/images/featured-home/featured-home-7.jpg",
                  caption: "Primary Bathroom",
                },
                {
                  src: "/images/featured-home/featured-home-8.jpg",
                  caption: "Guest Bedroom",
                },
                {
                  src: "/images/featured-home/featured-home-9.jpg",
                  caption: "Guest Bathroom",
                },
                {
                  src: "/images/featured-home/featured-home-10.jpg",
                  caption: "Loft/Bonus Room",
                },
                {
                  src: "/images/featured-home/featured-home-11.jpg",
                  caption: "Backyard Patio",
                },
                {
                  src: "/images/featured-home/featured-home-12.jpg",
                  caption: "Pool & Spa",
                },
                {
                  src: "/images/featured-home/featured-home-13.jpg",
                  caption: "Outdoor Kitchen",
                },
                {
                  src: "/images/featured-home/featured-home-14.jpg",
                  caption: "Fire Pit Area",
                },
                {
                  src: "/images/featured-home/featured-home-15.jpg",
                  caption: "Garage",
                },
                {
                  src: "/images/featured-home/featured-home-16.jpg",
                  caption: "Laundry Room",
                },
                {
                  src: "/images/featured-home/featured-home-17.jpg",
                  caption: "Community Park",
                },
                {
                  src: "/images/featured-home/featured-home-18.jpg",
                  caption: "Neighborhood View",
                },
                {
                  src: "/images/featured-home/featured-home-19.jpg",
                  caption: "Aerial View",
                },
                {
                  src: "/images/featured-home/featured-home-20.jpg",
                  caption: "Twilight Exterior",
                },
              ]}
            />
          </section>
          {/* Dr. Jan Duffy Callout Section */}
          <section className={`${styles.section} ${styles.calloutSection}`}>
            <h2>Meet Your Summerlin West Real Estate Expert</h2>
            <p>
              <strong>Dr. Jan Duffy, REALTOR®</strong> has helped families
              discover luxury living at the gateway to Red Rock Canyon since 2015.
              As a longtime resident and doctorate-level educator, she brings
              analytical precision and deep local knowledge to every transaction.
            </p>
            <p>
              Specializing in{" "}
              <strong>
                The Ridges, Red Rock Country Club, The Vistas, and The Paseos
              </strong>
              , Dr. Duffy is your go-to resource for buying or selling in
              Summerlin West.
            </p>
            <p>
              <Link href="/about">Learn more about Dr. Duffy &rarr;</Link>
            </p>
          </section>
          {/* Map of Summerlin West Section */}
          <section
            className={styles.section}
            aria-label="Map of Summerlin West"
          >
            <div className={styles.sectionTitle}>Map of Summerlin West</div>
            <div className={styles.grid}>
              <div className={styles.mapContainer}>
                <iframe
                  title="Summerlin West Map"
                  src="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                  width="100%"
                  height="450"
                  className={styles.mapIframe}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
          {/* Property Search Widget */}
          <section className={styles.section} aria-label="Property Search">
            <RealScoutAdvancedSearch
              title="Find Your Dream Home in Summerlin West"
              subtitle="Search by neighborhood, price, or features. Real-time MLS data."
              variant="page"
              showFeatures={true}
            />
          </section>
          {/* RealScout Listings Widget */}
          <section
            className={styles.section}
            aria-label="Featured Summerlin West Homes"
          >
            <div className={styles.sectionTitle}>
              Featured Summerlin West Homes
            </div>
            <p className={styles.heroSubtitle}>
              Browse the latest homes for sale in Summerlin West communities
            </p>
            <RealScoutListings />
          </section>
          {/* Market Overview */}
          <section className={styles.section} aria-label="Market Overview">
            <div className={styles.sectionTitle}>
              Summerlin West Market Overview
            </div>
            <div className={styles.grid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>$850K</div>
                <div className={styles.statLabel}>Median Home Price</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>312</div>
                <div className={styles.statLabel}>Active Listings</div>
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
          {/* Market Insights */}
          <section className={styles.section} aria-label="Market Insights">
            <LatestMarketInsights />
          </section>
          {/* Lead Capture/FAQ/CTA */}
          <section className={styles.section} aria-label="Contact & FAQ">
            <LeadCaptureForm variant="inline" onSuccess={handleFormSuccess} />
            <div className={styles.faqSection}>
              <div className={styles.sectionTitle}>
                Frequently Asked Questions
              </div>
              <ul className={styles.faqList}>
                {faqs.map((faq, idx) => (
                  <li key={idx} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
