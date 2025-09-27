'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import FeaturedHomeSlider from '../components/ui/FeaturedHomeSlider';
import SummerlinWestOverview from '../components/ui/SummerlinWestOverview';
import { useLeadCaptureModal } from '../hooks/useLeadCaptureModal';
import styles from './page.module.css';

// Dynamically import components for performance
const RealScoutAdvancedSearch = dynamic(() => import('../components/ui/RealScoutAdvancedSearch'), {
  ssr: false,
});
const LeadCaptureForm = dynamic(() => import('../components/ui/LeadCaptureForm'), { ssr: false });
const HomebotWidget = dynamic(() => import('../components/ui/HomebotWidget'), {
  ssr: false,
});
const LatestMarketInsights = dynamic(() => import('../components/ui/LatestMarketInsights'), {
  ssr: false,
});
const RealScoutListings = dynamic(() => import('../components/ui/RealScoutListings'), {
  ssr: false,
});

type Faq = {
  question: string;
  answer: string;
};

function HomeHeroImage() {
  const [src, setSrc] = useState('/images/og-image.svg');
  useEffect(() => {
    const prompt =
      'A luxury residential neighborhood in Summerlin West, Las Vegas, with modern homes and Red Rock Canyon views, blue sky, and desert landscaping.';
    fetch('/api/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
      cache: 'force-cache',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.imagePath) {
          setSrc(data.imagePath);
        } else if (data.fallback) {
          setSrc(data.fallback);
        }
      })
      .catch(() => setSrc('/images/featured-homes/featured-home-1.jpg'));
  }, []);
  return (
    <Image
      src={src}
      alt="Luxury homes in Summerlin West, Las Vegas with Red Rock Canyon mountain views and desert landscaping - Dr. Jan Duffy Real Estate"
      width={600}
      height={300}
      className={styles.heroImage}
      priority
    />
  );
}

export default function HomeClient() {
  const { source } = useLeadCaptureModal();

  const handleFormSuccess = () => {
    // Track successful submission
    if (
      typeof window !== 'undefined' &&
      typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === 'function'
    ) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag(
        'event',
        'lead_form_success',
        {
          event_category: 'Lead',
          event_label: source,
        }
      );
    }
  };

  const faqs: Faq[] = [
    {
      question: 'What are the best neighborhoods in Summerlin West?',
      answer:
        'Popular Summerlin West neighborhoods include The Vistas, Redpoint, Stonebridge, The Cliffs, and Reverence. Each offers unique amenities and lifestyle options.',
    },
    {
      question: 'What is the average home price in Summerlin West?',
      answer:
        'The median home price in Summerlin West is around $850,000, with luxury homes reaching $2M+. Prices vary by neighborhood and property type.',
    },
    {
      question: 'Are there new construction homes available in Summerlin West?',
      answer:
        'Yes! Summerlin West offers new construction in communities like Redpoint, Stonebridge, and The Cliffs. Contact us for the latest releases and builder incentives.',
    },
    {
      question: 'How do I schedule a home tour in Summerlin West?',
      answer:
        'Contact us via the form or call (702) 550-0112 to schedule a private showing of any Summerlin West property.',
    },
    {
      question: 'What makes Summerlin West special?',
      answer:
        'Summerlin West offers master-planned communities, top-rated schools, proximity to Red Rock Canyon, and a family-friendly lifestyle with excellent amenities.',
    },
    {
      question: 'How can I get a free Summerlin West market report?',
      answer:
        'Fill out the form on this page or visit our Market Reports section to get your free Summerlin West market analysis and neighborhood insights.',
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace('(702) 555-1234', '(702) 550-0112'),
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
            <h1 className={styles.heroTitle}>Find Your Dream Home in The Vistas, Summerlin West with Dr. Jan Duffy, REALTOR®</h1>
            <p className={styles.heroSubtitle}>
              Discover luxury living in Las Vegas&apos; most prestigious master-planned community. Expert guidance from Dr. Jan Duffy, REALTOR® with 15+ years of experience helping families find their perfect home in The Vistas, Stonebridge, Redpoint, and all Summerlin West communities.
            </p>
            {/* AI-generated hero image */}
            <HomeHeroImage />
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>$920K</span>
                <span className={styles.heroStatLabel}>Median Price</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>287</span>
                <span className={styles.heroStatLabel}>Active Listings</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>12</span>
                <span className={styles.heroStatLabel}>Avg Days on Market</span>
              </div>
            </div>
          </section>
          {/* HomebotWidget: Check the Value of Your Home */}
          <section className={styles.section} aria-label="Check the Value of Your Home">
            <h2 className={styles.sectionTitle}>Discover Your Home's Current Market Value in Summerlin West</h2>
            <p className={styles.heroSubtitle}>
              Get an instant, accurate estimate of your home's value in today's competitive Summerlin West market. Our advanced valuation tool uses real-time MLS data, recent comparable sales, and local market trends to provide you with the most current property assessment. Whether you're considering selling your home in The Vistas, Stonebridge, or any Summerlin West community, understanding your home's value is the first step in making informed real estate decisions.
            </p>
            <HomebotWidget />
          </section>
          {/* Hidden Home Equity Tax Section */}
          <section className={styles.section} aria-label="Hidden Home Equity Tax">
            <h2 className={styles.sectionTitle}>
              <span className={styles.equityIcon} aria-hidden="true">
                💡
              </span>
              Protect Your Summerlin West Home Equity from Hidden Tax Implications
            </h2>
            <p className={styles.heroSubtitle}>
              Many Summerlin West homeowners, especially those in The Vistas and other luxury communities, could be subject to significant tax implications when selling their homes. Due to outdated federal laws and recent market appreciation, homeowners with substantial equity may face unexpected tax burdens. Dr. Jan Duffy provides expert guidance on tax-efficient selling strategies, including 1031 exchanges, primary residence exclusions, and timing considerations that could save you thousands of dollars in taxes.
            </p>
            <Link href="/hidden-home-equity-tax" className={styles.card}>
              Learn About the Hidden Home Equity Tax
            </Link>
          </section>
          {/* Featured Home Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Exclusive Featured Home in The Vistas, Summerlin West</h2>
            <p className={styles.heroSubtitle}>
              Experience luxury living at its finest with this stunning featured home in The Vistas community. This exceptional property showcases the finest in Summerlin West real estate, featuring modern design, premium finishes, and breathtaking Red Rock Canyon views. Dr. Jan Duffy has personally selected this home to represent the quality and lifestyle that defines The Vistas community, where luxury meets convenience in one of Las Vegas's most sought-after master-planned communities.
            </p>
            <FeaturedHomeSlider
              images={[
                {
                  src: '/images/featured-homes/featured-home-1.jpg',
                  caption: 'Front Exterior',
                },
                {
                  src: '/images/featured-homes/02-DSC03093.jpg',
                  caption: 'Entryway',
                },
                {
                  src: '/images/featured-homes/03-DJI_20250707145902_0780_D.jpg',
                  caption: 'Living Room',
                },
                {
                  src: '/images/featured-homes/04-DJI_20250707150132_0797_D.jpg',
                  caption: 'Kitchen',
                },
                {
                  src: '/images/featured-homes/05-DSC03003.jpg',
                  caption: 'Dining Area',
                },
                {
                  src: '/images/featured-homes/06-DSC03075.jpg',
                  caption: 'Primary Bedroom',
                },
                {
                  src: '/images/featured-homes/07-DSC03018.jpg',
                  caption: 'Primary Bathroom',
                },
                {
                  src: '/images/featured-homes/08-DSC03006.jpg',
                  caption: 'Guest Bedroom',
                },
                {
                  src: '/images/featured-homes/09-DSC03048.jpg',
                  caption: 'Guest Bathroom',
                },
                {
                  src: '/images/featured-homes/10-DSC02961.jpg',
                  caption: 'Loft/Bonus Room',
                },
                {
                  src: '/images/featured-homes/11-DSC02991.jpg',
                  caption: 'Backyard Patio',
                },
                {
                  src: '/images/featured-homes/12-DSC02970.jpg',
                  caption: 'Pool & Spa',
                },
                {
                  src: '/images/featured-homes/13-DSC02964.jpg',
                  caption: 'Outdoor Kitchen',
                },
                {
                  src: '/images/featured-homes/14-DSC02967.jpg',
                  caption: 'Fire Pit Area',
                },
                {
                  src: '/images/featured-homes/15-DSC02973.jpg',
                  caption: 'Garage',
                },
                {
                  src: '/images/featured-homes/16-DSC02976.jpg',
                  caption: 'Laundry Room',
                },
                {
                  src: '/images/featured-homes/17-DSC02979.jpg',
                  caption: 'Community Park',
                },
                {
                  src: '/images/featured-homes/18-DSC02982.jpg',
                  caption: 'Neighborhood View',
                },
                {
                  src: '/images/featured-homes/19-DSC03027.jpg',
                  caption: 'Aerial View',
                },
                {
                  src: '/images/featured-homes/20-DSC03030.jpg',
                  caption: 'Twilight Exterior',
                },
              ]}
            />
          </section>
          {/* Dr. Jan Duffy Callout Section */}
          <section className={`${styles.section} ${styles.calloutSection}`}>
            <h2>Meet Dr. Jan Duffy: Your Trusted Summerlin West Real Estate Expert</h2>
            <p>
              <strong>Dr. Jan Duffy, REALTOR®</strong> has been helping families discover luxury living at
              the gateway to Red Rock Canyon since 2015. As a longtime Summerlin West resident and doctorate-level
              educator, she brings analytical precision and deep local market knowledge to every
              transaction. With over 15 years of experience in Las Vegas real estate and specialized expertise in Summerlin West communities, Dr. Duffy has successfully guided hundreds of families through their home buying and selling journeys.
            </p>
            <p>
              Specializing exclusively in{' '}
              <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr.
              Duffy offers unparalleled insight into Summerlin West's luxury real estate market. Her deep understanding of local market trends, community amenities, and investment opportunities makes her the go-to resource for discerning buyers and sellers in Summerlin West.
            </p>
            <p>
              <Link href="/about">Learn more about Dr. Duffy's expertise and track record &rarr;</Link>
            </p>
          </section>

          {/* Newsletter Signup Section */}
          <section className={`${styles.section} ${styles.newsletterSection}`}>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Stay Informed with Dr. Jan Duffy's Exclusive Summerlin West Market Newsletter</h2>
              <p className={styles.newsletterSubtitle}>
                Get Dr. Jan Duffy's monthly newsletter with exclusive market updates, new listings,
                community events, and insider insights sent straight to your email. Our subscribers receive early access to off-market properties, detailed market analysis, and expert tips for buying or selling in Summerlin West. Join over 2,000 local residents and investors who trust Dr. Duffy for the most current and accurate Summerlin West real estate information.
              </p>
              <LeadCaptureForm
                variant="newsletter"
                title="Subscribe to Our Newsletter"
                subtitle="Monthly updates, market trends, and exclusive insights."
                source="Homepage Newsletter"
                onSuccess={handleFormSuccess}
              />
            </div>
          </section>
          {/* Map of Summerlin West Section */}
          <section className={styles.section} aria-label="Map of Summerlin West">
            <h2 className={styles.sectionTitle}>Explore Summerlin West Communities with Our Interactive Property Map</h2>
            <p className={styles.heroSubtitle}>
              Discover the perfect location for your next home with our comprehensive interactive map of Summerlin West. This detailed map showcases all available properties across The Vistas, Stonebridge, Redpoint, and other premier communities. Filter by price range, home size, community amenities, and proximity to top-rated schools, shopping centers, and recreational facilities. Whether you're looking for a luxury home with Red Rock Canyon views or a family-friendly community near excellent schools, our map helps you find the ideal location in Summerlin West.
            </p>
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
            <h2 className={styles.sectionTitle}>Advanced Property Search: Find Your Perfect Home in Summerlin West</h2>
            <p className={styles.heroSubtitle}>
              Use our advanced search tool to find your ideal home in Summerlin West. Search by specific neighborhoods like The Vistas, Stonebridge, or Redpoint, filter by price range, home size, number of bedrooms and bathrooms, and special features like pools, mountain views, or gated communities. Our real-time MLS integration ensures you see the most current listings as soon as they hit the market, giving you a competitive advantage in Summerlin West's fast-moving real estate market.
            </p>
            <RealScoutAdvancedSearch
              title="Find Your Dream Home in Summerlin West"
              subtitle="Search by neighborhood, price, or features. Real-time MLS data."
              variant="page"
              showFeatures={true}
            />
          </section>
          {/* RealScout Listings Widget */}
          <section className={styles.section} aria-label="Featured Summerlin West Homes">
            <h2 className={styles.sectionTitle}>Featured Luxury Homes for Sale in Summerlin West Communities</h2>
            <p className={styles.heroSubtitle}>
              Browse our curated selection of the finest homes currently available in Summerlin West. From luxury estates in The Vistas with Red Rock Canyon views to modern family homes in Stonebridge, our featured listings represent the best of Summerlin West real estate. Each property has been personally selected by Dr. Jan Duffy for its exceptional quality, prime location, and investment potential. Whether you're looking for a move-in ready home or a property with renovation potential, our featured listings offer something for every discerning buyer.
            </p>
            <RealScoutListings />
          </section>
          {/* Market Overview */}
          <section className={styles.section} aria-label="Market Overview">
            <h2 className={styles.sectionTitle}>Current Summerlin West Real Estate Market Overview and Trends</h2>
            <p className={styles.heroSubtitle}>
              Stay informed about the latest market conditions in Summerlin West with our comprehensive market overview. Our data reflects the most current market trends, including median home prices, inventory levels, average days on market, and list-to-sale ratios. Understanding these key metrics helps you make informed decisions whether you're buying or selling in Summerlin West. The market continues to show strong demand with limited inventory, making it essential to work with an experienced local expert like Dr. Jan Duffy.
            </p>
            <div className={styles.grid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>$920K</div>
                <div className={styles.statLabel}>Median Home Price</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>287</div>
                <div className={styles.statLabel}>Active Listings</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>12</div>
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
            <h2 className={styles.sectionTitle}>Latest Market Insights and Real Estate News for Summerlin West</h2>
            <p className={styles.heroSubtitle}>
              Stay ahead of the market with our latest insights and real estate news specifically focused on Summerlin West. Our market analysis covers everything from local price trends and inventory changes to new development announcements and community updates. Dr. Jan Duffy regularly shares her expert perspective on market conditions, helping you understand how national trends impact the Summerlin West real estate market. Whether you're a first-time buyer, seasoned investor, or current homeowner, these insights provide valuable information for your real estate decisions.
            </p>
            <LatestMarketInsights />
          </section>
          {/* Lead Capture/FAQ/CTA */}
          <section className={styles.section} aria-label="Contact & FAQ">
            <h2 className={styles.sectionTitle}>Get Expert Guidance: Contact Dr. Jan Duffy for Your Summerlin West Real Estate Needs</h2>
            <p className={styles.heroSubtitle}>
              Ready to buy or sell in Summerlin West? Dr. Jan Duffy provides personalized, expert guidance tailored to your specific needs and goals. Whether you're a first-time buyer looking for your dream home in The Vistas, an investor seeking opportunities in Stonebridge, or a current homeowner considering selling, Dr. Duffy's deep local knowledge and proven track record ensure you get the best possible outcome. Contact us today for a confidential consultation and discover why hundreds of families trust Dr. Jan Duffy with their Summerlin West real estate transactions.
            </p>
            <LeadCaptureForm variant="inline" onSuccess={handleFormSuccess} />
            <div className={styles.faqSection}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions About Summerlin West Real Estate</h2>
              <p className={styles.heroSubtitle}>
                Get answers to the most common questions about buying, selling, and living in Summerlin West. Dr. Jan Duffy has compiled these FAQs based on years of experience helping clients navigate the Summerlin West real estate market. From market trends and pricing to community amenities and lifestyle, find the information you need to make informed decisions about your Summerlin West real estate journey.
              </p>
              <ul className={styles.faqList}>
                {faqs.map((faq, idx) => (
                  <li key={`faq-${idx}-${faq.question.slice(0, 20)}`} className={styles.faqItem}>
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

