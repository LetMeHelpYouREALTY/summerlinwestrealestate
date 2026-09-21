import LeadCaptureForm from "../../components/ui/LeadCaptureForm";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from '../page.module.css';
import LatestMarketInsights from "../../components/ui/LatestMarketInsights";
import SummerlinWestOverview from '../../components/ui/SummerlinWestOverview';

export default function CurrentListing() {
  const propertyDetails = [
    "4 bedrooms, 3 bathrooms, 2,800 sq ft",
    "Upgraded kitchen, modern flooring, energy-efficient features",
    "Spacious backyard with mountain views",
    "Move-in ready with smart home technology",
  ];

  const communityBenefits = [
    "Access to top-rated Summerlin schools",
    "Beautiful parks and walking trails",
    "Minutes from Downtown Summerlin shopping & dining",
    "Exclusive community events and amenities",
    "Low HOA fees",
  ];

  const marketAnalysis = [
    "Comparable homes in The Vistas have sold for $875k–$950k in the last 6 months",
    "Upgraded kitchen, flooring, and energy-efficient features",
    "Move-in ready with modern finishes",
    "Low days on market for similar homes (avg. 12 days)",
    "Expert local pricing strategy based on current demand",
  ];

  const photoGallery = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.page}>
      <Head>
        <title>
          The Vistas Summerlin Home for Sale | Summerlin West Real Estate
        </title>
        <meta
          name="description"
          content="Tour this stunning home for sale in The Vistas, Summerlin. View photos, property details, market analysis, and schedule a private showing with a Summerlin expert."
        />
        <meta
          property="og:title"
          content="The Vistas Summerlin Home for Sale | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Tour this stunning home for sale in The Vistas, Summerlin. View photos, property details, market analysis, and schedule a private showing with a Summerlin expert."
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Residence",
                name: "The Vistas Summerlin Home for Sale",
                description:
                  "Modern 4 bed, 3 bath home in The Vistas, Summerlin. Upgraded kitchen, smart home tech, mountain views.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "1980 Festival Plaza Dr (One Summerlin)",
                  addressLocality: "Las Vegas",
                  addressRegion: "NV",
                  postalCode: "89135",
                  addressCountry: "US",
                },
                image: [
                  "/images/properties/vistas-luxury-home.png",
                  "/images/properties/stonebridge-home.png",
                ],
                numberOfRooms: 8,
                floorSize: {
                  "@type": "QuantitativeValue",
                  value: 2800,
                  unitCode: "SQF",
                },
                offers: {
                  "@type": "Offer",
                  price: "899000",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                },
                telephone: "+1-702-550-0112",
              },
              null,
              2,
            ),
          }}
        />
      </Head>

      <main className={`${styles.luxuryMainContent} ${styles.currentListingContainer}`}>
        <SummerlinWestOverview />
        <section className={styles.gallerySection}>
          <h2>Photo Gallery</h2>
          <div className={styles.photoGallery}>
            {photoGallery.map((num) => (
              <Image
                key={num}
                src={`/images/properties/paseos-home.png`}
                alt={`Home photo ${num}`}
                width={400}
                height={300}
                className={styles.galleryImage}
              />
            ))}
          </div>
        </section>
        <section className={styles.propertyDetailsSection}>
          <h2>Property Details</h2>
          <ul>
            {propertyDetails.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </section>
        <section className={styles.communityBenefitsSection}>
          <h2>Community Benefits</h2>
          <ul>
            {communityBenefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </section>
        <section className={styles.marketAnalysisSection}>
          <h2>Market Analysis</h2>
          <ul>
            {marketAnalysis.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        <section className={styles.ctaSection}>
          <h2>Schedule a Private Showing</h2>
          <LeadCaptureForm
            variant="inline"
            title="Request a Private Tour"
            subtitle="Get in touch to schedule a private showing or request more information."
            source="Current Listing CTA"
            formId="current-listing"
          />
        </section>
      </main>
      <LatestMarketInsights />
    </div>
  );
}