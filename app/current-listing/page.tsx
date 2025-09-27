import { Metadata } from 'next';
import Image from 'next/image';
import LatestMarketInsights from '../../components/ui/LatestMarketInsights';
import LeadCaptureForm from '../../components/ui/LeadCaptureForm';
import SummerlinWestOverview from '../../components/ui/SummerlinWestOverview';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'Stunning Vistas Home for Sale | 4BR/3BA Luxury Property | Dr. Jan Duffy',
  description: 'Tour this gorgeous 4BR/3BA home in The Vistas! Red Rock Canyon views, 2,800 sq ft, luxury finishes. Dr. Jan Duffy, REALTOR® - $6B+ in sales. Call (702) 550-0112 for private showing!',
  alternates: {
    canonical: '/current-listing',
  },
  openGraph: {
    title: 'Stunning Vistas Home for Sale | 4BR/3BA Luxury Property | Dr. Jan Duffy',
    description: 'Tour this gorgeous 4BR/3BA home in The Vistas! Red Rock Canyon views, 2,800 sq ft, luxury finishes. Dr. Jan Duffy, REALTOR® - $6B+ in sales. Call (702) 550-0112 for private showing!',
    url: 'https://summerlinwestrealestate.com/current-listing',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Stunning Vistas Home for Sale',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stunning Vistas Home for Sale | 4BR/3BA Luxury Property | Dr. Jan Duffy',
    description: 'Tour this gorgeous 4BR/3BA home in The Vistas! Red Rock Canyon views, 2,800 sq ft, luxury finishes. Dr. Jan Duffy, REALTOR® - $6B+ in sales. Call (702) 550-0112 for private showing!',
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function CurrentListing() {
  const propertyDetails = [
    '4 bedrooms, 3 bathrooms, 2,800 sq ft',
    'Upgraded kitchen, modern flooring, energy-efficient features',
    'Spacious backyard with mountain views',
    'Move-in ready with smart home technology',
  ];

  const communityBenefits = [
    'Access to top-rated Summerlin schools',
    'Beautiful parks and walking trails',
    'Minutes from Downtown Summerlin shopping & dining',
    'Exclusive community events and amenities',
    'Low HOA fees',
  ];

  const marketAnalysis = [
    'Comparable homes in The Vistas have sold for $875k–$950k in the last 6 months',
    'Upgraded kitchen, flooring, and energy-efficient features',
    'Move-in ready with modern finishes',
    'Low days on market for similar homes (avg. 12 days)',
    'Expert local pricing strategy based on current demand',
  ];

  const photoGallery = [1, 2, 3, 4, 5, 6];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: 'The Vistas Summerlin Home for Sale',
    description:
      'Modern 4 bed, 3 bath home in The Vistas, Summerlin. Upgraded kitchen, smart home tech, mountain views.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1980 Festival Plaza Dr (One Summerlin)',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89135',
      addressCountry: 'US',
    },
    image: [
      'https://placehold.co/400x300?text=Photo+1',
      'https://placehold.co/400x300?text=Photo+2',
    ],
    numberOfRooms: 8,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: 2800,
      unitCode: 'SQF',
    },
    offers: {
      '@type': 'Offer',
      price: '899000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    telephone: '+1-702-550-0112',
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2),
        }}
      />

      <main className={`${styles.luxuryMainContent} ${styles.currentListingContainer}`}>
        <SummerlinWestOverview />
        <section className={styles.gallerySection}>
          <h2>Photo Gallery</h2>
          <div className={styles.photoGallery}>
            {photoGallery.map((num, index) => {
              const imageFiles = [
                'featured-home-1.jpg',
                '02-DSC03093.jpg',
                '03-DJI_20250707145902_0780_D.jpg',
                '04-DJI_20250707150132_0797_D.jpg',
                '05-DSC03003.jpg',
                '06-DSC03075.jpg',
                '07-DSC03018.jpg',
                '08-DSC03006.jpg',
                '09-DSC03048.jpg',
                '10-DSC02961.jpg',
                '11-DSC02991.jpg',
                '12-DSC02970.jpg'
              ];
              const imageSrc = `/images/featured-homes/${imageFiles[index % imageFiles.length]}`;
              return (
                <Image
                  key={num}
                  src={imageSrc}
                  alt={`Luxury home in Summerlin West - Photo ${num}`}
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              );
            })}
          </div>
        </section>
        <section className={styles.propertyDetailsSection}>
          <h2>Property Details</h2>
          <ul>
            {propertyDetails.map((detail, idx) => (
              <li key={`detail-${idx}-${detail.slice(0, 20)}`}>{detail}</li>
            ))}
          </ul>
        </section>
        <section className={styles.communityBenefitsSection}>
          <h2>Community Benefits</h2>
          <ul>
            {communityBenefits.map((benefit, idx) => (
              <li key={`benefit-${idx}-${benefit.slice(0, 20)}`}>{benefit}</li>
            ))}
          </ul>
        </section>
        <section className={styles.marketAnalysisSection}>
          <h2>Market Analysis</h2>
          <ul>
            {marketAnalysis.map((item, idx) => (
              <li key={`market-${idx}-${item.slice(0, 20)}`}>{item}</li>
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
