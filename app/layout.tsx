import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../components/layout/Header';
import RealScoutWidget from '../components/ui/RealScoutWidget';
import styles from './page.module.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://summerlinwestrealestate.com'),
  title: 'Summerlin West Homes for Sale | Dr. Jan Duffy REALTOR® | The Vistas',
  description:
    'Find your dream home in Summerlin West with Dr. Jan Duffy, REALTOR®. Expert guidance, luxury properties, and insider market knowledge. Schedule your consultation today!',
  keywords: [
    'Summerlin West',
    'Las Vegas real estate',
    'luxury homes',
    'master-planned community',
    'Red Rock Canyon',
    'The Vistas',
    'Stonebridge',
  ],
  authors: [{ name: 'Summerlin West Real Estate' }],
  creator: 'Summerlin West Real Estate',
  publisher: 'Summerlin West Real Estate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Summerlin West Homes for Sale | Dr. Jan Duffy REALTOR® | The Vistas',
    description:
      'Find your dream home in Summerlin West with Dr. Jan Duffy, REALTOR®. Expert guidance, luxury properties, and insider market knowledge. Schedule your consultation today!',
    url: 'https://summerlinwestrealestate.com',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Real Estate Hero',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summerlin West Homes for Sale | Dr. Jan Duffy REALTOR® | The Vistas',
    description:
      'Find your dream home in Summerlin West with Dr. Jan Duffy, REALTOR®. Expert guidance, luxury properties, and insider market knowledge. Schedule your consultation today!',
    images: [
      {
        url: '/images/og-image.svg',
        alt: 'Summerlin West Real Estate Hero',
      },
    ],
    site: '@summerlinwestre',
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
  verification: {
    google: 'google-site-verification-code-here',
  },
};

// Enhanced Schema Markup
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'RealEstateAgent',
      '@id': 'https://summerlinwestrealestate.com/#agent',
      name: 'Dr. Jan Duffy',
      jobTitle: 'REALTOR®',
      description: 'Summerlin West real estate specialist with 15+ years of experience',
      url: 'https://summerlinwestrealestate.com',
      telephone: '+1-702-550-0112',
      email: 'DrJanSells@SummerlinWestRealEstate.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1980 Festival Plaza Dr (One Summerlin)',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89135',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.1865,
        longitude: -115.3432,
      },
      areaServed: {
        '@type': 'Place',
        name: 'Summerlin West',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Summerlin West Homes for Sale',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Place',
              name: 'The Vistas',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Place',
              name: 'Stonebridge',
            },
          },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://summerlinwestrealestate.com/#organization',
      name: 'Summerlin West Real Estate',
      url: 'https://summerlinwestrealestate.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://summerlinwestrealestate.com/images/logo.png',
      },
      sameAs: [
        'https://www.facebook.com/summerlinwestrealestate',
        'https://www.linkedin.com/company/summerlin-west-real-estate',
      ],
    },
    {
      '@type': 'Place',
      '@id': 'https://summerlinwestrealestate.com/#place',
      name: 'Summerlin West',
      description: 'Luxury master-planned community in Las Vegas with Red Rock Canyon views',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.1865,
        longitude: -115.3432,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    },
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

function StickyPhoneMenu() {
  const handlePhoneClick = () => {
    // Facebook Pixel tracking for phone clicks
    if (typeof window !== 'undefined' && typeof (window as Window & { fbq?: (action: string, event: string, data?: Record<string, unknown>) => void }).fbq === 'function') {
      (window as Window & { fbq: (action: string, event: string, data?: Record<string, unknown>) => void }).fbq('track', 'Contact', {
        content_name: 'Phone Call',
        content_category: 'Lead Generation',
        value: 75,
        currency: 'USD',
      });
    }
  };

  return (
    <div className={styles.stickyPhoneMenu}>
      <span className={styles.stickyPhoneMenuLabel}>Call Us</span>
      <a 
        href="tel:7025500112" 
        className={styles.stickyPhoneMenuCallButton}
        onClick={handlePhoneClick}
      >
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          className={styles.stickyPhoneMenuIcon}
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
        </svg>
        (702) 550-0112
      </a>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
        `}</style>
      </Head>
      <body
        className={`${inter.variable} ${outfit.variable} ${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        <StickyPhoneMenu />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="lazyOnload"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1415682742567480');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1415682742567480&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* Core Web Vitals Monitoring */}
        <Script id="web-vitals" strategy="afterInteractive">
          {`
            function sendToAnalytics(metric) {
              if (typeof gtag !== 'undefined') {
                gtag('event', metric.name, {
                  event_category: 'Web Vitals',
                  event_label: metric.id,
                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                  non_interaction: true,
                });
              }
            }
            
            // Load web-vitals library and send metrics
            import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
              getCLS(sendToAnalytics);
              getFID(sendToAnalytics);
              getFCP(sendToAnalytics);
              getLCP(sendToAnalytics);
              getTTFB(sendToAnalytics);
            });
          `}
        </Script>
        <Header />
        <main className="pt-16">{children}</main>
        <div className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Featured Summerlin Listings</h2>
          <RealScoutWidget priceMin={600000} />
        </div>
      </body>
    </html>
  );
}
