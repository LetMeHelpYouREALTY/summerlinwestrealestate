"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import LatestMarketInsightsClient from "../../components/ui/LatestMarketInsightsClient";
import TestimonialsSectionClient from "../../components/ui/TestimonialsSectionClient";
import { FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import { absoluteUrl } from "../../lib/site-url";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Summerlin West Real Estate",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1980 Festival Plaza Dr (One Summerlin)",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89135",
    addressCountry: "US",
  },
  description:
    "Local Summerlin real estate expert with 15+ years of experience helping buyers and sellers in Summerlin West.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.154,
    longitude: -115.3336,
  },
  url: absoluteUrl("/about"),
  telephone: "+1-702-550-0112",
};

export default function About() {
  return (
    <div className={styles.page}>
      <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
        <h1>Dr. Jan Duffy, REALTOR® - Your Summerlin West Real Estate Expert</h1>
        <p>
          <strong>
            Helping families discover luxury living at the gateway to Red Rock Canyon since 2015
          </strong>
        </p>
        <p>
          As a dedicated <strong>Summerlin West REALTOR®</strong> and longtime Las Vegas resident, Dr. Jan Duffy brings unparalleled expertise to one of Nevada&apos;s most sought-after master-planned communities. With her unique background as both a licensed real estate professional and doctorate-level educator, Dr. Duffy combines analytical precision with deep local market knowledge to deliver exceptional results for <strong>Summerlin West home buyers and sellers</strong>.
        </p>
        <h2>Your Summerlin West Market Specialist</h2>
        <p>
          Dr. Duffy specializes exclusively in <strong>Summerlin West real estate</strong>, including the prestigious communities of <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>. She understands what makes this area special: the breathtaking <strong>Red Rock Canyon views</strong>, world-class amenities, and the perfect blend of luxury living with outdoor adventure that draws families from across the country to call Summerlin West home.
        </p>
        <p>
          <strong>Recent Market Results:</strong>
        </p>
        <ul>
          <li>Successfully guided clients through Summerlin West&apos;s competitive market where 50% of homes sell within 30 days</li>
          <li>Expert navigation of the area&apos;s premium price points, with median home values reaching $680,000+</li>
          <li>Specialized knowledge of new construction opportunities from premier builders like KB Homes, Toll Brothers, and Taylor Morrison</li>
        </ul>
        <h2>Comprehensive Summerlin West Services</h2>
        <p><strong>For Home Sellers:</strong></p>
        <ul>
          <li>Strategic pricing analysis leveraging Summerlin West&apos;s 8.8% year-over-year appreciation</li>
          <li>Professional staging consultation to highlight Red Rock Canyon views and luxury features</li>
          <li>Targeted marketing to qualified buyers seeking Summerlin&apos;s lifestyle amenities</li>
          <li>Expert positioning for quick sales in this fast-moving market</li>
        </ul>
        <p><strong>For Home Buyers:</strong></p>
        <ul>
          <li>Exclusive access to new construction in Grand Park District and Kestrel Commons Village</li>
          <li>In-depth neighborhood guidance across Summerlin West&apos;s distinct villages</li>
          <li>School district expertise for families prioritizing top-rated Clark County schools</li>
          <li>Investment analysis for luxury properties and custom home opportunities</li>
        </ul>
        <h2>Deep Community Connections</h2>
        <p>
          Living in Summerlin West for over a decade, Dr. Duffy knows every trail in the <strong>150-mile trail system</strong>, the best tee times at <strong>TPC Summerlin</strong>, and which neighborhoods offer the most spectacular <strong>Red Rock Canyon sunset views</strong>. She&apos;s an active member of the Summerlin community, regularly participating in <strong>Tour de Summerlin</strong> and volunteering at local schools.
        </p>
        <p>
          Dr. Duffy&apos;s clients consistently praise her responsiveness, market expertise, and ability to simplify complex transactions. Whether you&apos;re relocating from out-of-state, seeking a luxury retirement home, or ready to sell your Summerlin West property, her commitment to excellence ensures a smooth, successful real estate experience.
        </p>
        <p>
          <strong>
            Ready to explore Summerlin West&apos;s luxury lifestyle? Contact Dr. Jan Duffy today for your complimentary market consultation and discover why Summerlin West continues to rank among America&apos;s top master-planned communities.
          </strong>
        </p>
        <hr />
        <p>
          <em>
            Dr. Jan Duffy, REALTOR® | Summerlin West Specialist | Licensed in Nevada | Serving The Ridges, Red Rock Country Club, The Vistas, The Paseos, and all Summerlin West communities
          </em>
        </p>
      </section>
      <section className={styles.hero}>
        <h1>About Your Summerlin Real Estate Expert</h1>
        <p className={styles.subtitle}>
          Local knowledge. Proven results. Personalized service.
        </p>
      </section>
      <div className={`${styles.container} ${styles.aboutContainer}`}>
        <section
          className={styles.sectionCard}
          aria-labelledby="about-jan-duffy"
        >
          <h2 id="about-jan-duffy" className={styles.centerTitle}>
            Meet Dr. Jan Duffy
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
              <div
                className={styles.badges}
                role="list"
                aria-label="Professional badges"
              >
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
        <section
          className={styles.sectionCard}
          aria-labelledby="specializations-services"
        >
          <h2 id="specializations-services" className={styles.centerTitle}>
            Specializations & Services
          </h2>
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
        <section
          className={styles.sectionCard}
          aria-labelledby="vistas-neighborhoods"
        >
          <h2 id="vistas-neighborhoods" className={styles.centerTitle}>
            Summerlin Vistas Neighborhoods Served
          </h2>
          <div
            className={styles.areasGrid}
            role="list"
            aria-label="Neighborhoods served"
          >
            <span role="listitem">The Vistas</span>
            <span role="listitem">The Paseos</span>
            <span role="listitem">Stonebridge</span>
            <span role="listitem">Redpoint</span>
            <span role="listitem">Redpoint Square</span>
            <span role="listitem">Reverence</span>
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Latest News">
          <h2 className={styles.centerTitle}>Latest News</h2>
          <div className={styles.newsList}>
            <article
              className={styles.newsCard}
              tabIndex={0}
              aria-labelledby="news-mortgage"
            >
              <span className={styles.newsBadge}>News</span>
              <div className={styles.newsContent}>
                <h3 id="news-mortgage">
                  What You Should Know About Getting a Mortgage Today
                </h3>
                <time className={styles.newsDate} dateTime="2025-07-07">
                  7/7/2025
                </time>
                <p>
                  If you&apos;ve been putting off buying a home because you thought
                  getting approved would be too hard, know this: qualifying for
                  a mortgage is starting to get a bit more achievable, but
                  lending standards are still strong.
                </p>
              </div>
            </article>
            <article
              className={styles.newsCard}
              tabIndex={0}
              aria-labelledby="news-buying-homes"
            >
              <span className={styles.newsBadge}>News</span>
              <div className={styles.newsContent}>
                <h3 id="news-buying-homes">
                  Think No One&apos;s Buying Homes Right Now? Think Again.
                </h3>
                <time className={styles.newsDate} dateTime="2025-07-03">
                  7/3/2025
                </time>
                <p>
                  If you&apos;ve seen headlines saying home sales are down compared
                  to last year, you might be thinking – is it even a good time
                  to sell?
                </p>
              </div>
            </article>
            <article
              className={styles.newsCard}
              tabIndex={0}
              aria-labelledby="news-investors"
            >
              <span className={styles.newsBadge}>News</span>
              <div className={styles.newsContent}>
                <h3 id="news-investors">
                  Why Big Investors Aren&apos;t a Challenge for Today&apos;s Homebuyer
                </h3>
                <time className={styles.newsDate} dateTime="2025-07-02">
                  7/2/2025
                </time>
                <p>
                  Remember the chatter in the headlines about all the homes big
                  institutional investors were buying? If you were thinking
                  about buying a home yourself, you may have wondered how you&apos;d
                  ever be able to compete with that.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className={styles.sectionCard} aria-labelledby="testimonials">
          <h2 id="testimonials" className={styles.centerTitle}>
            What Our Clients Say
          </h2>
          <p className={styles.sectionSubtitle}>
            Real stories from real buyers and sellers
          </p>
          <TestimonialsSectionClient />
        </section>
        <section
          className={styles.sectionCard}
          aria-labelledby="office-location"
        >
          <h2 id="office-location" className={styles.centerTitle}>
            Our Office Location
          </h2>
          <div className={styles.officeCard}>
            <div className={styles.officeInfo}>
              <FaMapMarkerAlt
                className={styles.officeIcon}
                aria-hidden="true"
              />
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
        <section
          className={styles.sectionCard}
          aria-labelledby="featured-listings"
        >
          <h2 id="featured-listings" className={styles.centerTitle}>
            Featured Summerlin Listings
          </h2>
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
