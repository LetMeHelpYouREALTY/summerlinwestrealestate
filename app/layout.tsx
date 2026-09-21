import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import Footer from "../components/layout/Footer";
import BreadcrumbsClient from "../components/layout/BreadcrumbsClient";
import Head from "next/head";
import RealScoutWidget from "../components/ui/RealScoutWidget";
import styles from "./page.module.css";
import Header from "../components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://summerlinwestrealestate.com"),
  title: "Summerlin West Real Estate | The Vistas & Communities",
  description:
    "Market authority for Summerlin West and The Vistas community. Get listings, market reports, and expert guidance.",
  keywords: [
    "Summerlin West",
    "Las Vegas real estate",
    "luxury homes",
    "master-planned community",
    "Red Rock Canyon",
    "The Vistas",
    "Stonebridge",
  ],
  authors: [{ name: "Summerlin West Real Estate" }],
  creator: "Summerlin West Real Estate",
  publisher: "Summerlin West Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Summerlin West Real Estate | The Vistas & Communities",
    description:
      "Market authority for Summerlin West and The Vistas community. Get listings, market reports, and expert guidance.",
    url: "https://summerlinwestrealestate.com",
    siteName: "Summerlin West Real Estate",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Summerlin West Real Estate Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summerlin West Real Estate | The Vistas & Communities",
    description:
      "Market authority for Summerlin West and The Vistas community. Get listings, market reports, and expert guidance.",
    images: [
      {
        url: "/images/og-image.png",
        alt: "Summerlin West Real Estate Hero",
      },
    ],
    site: "@summerlinwestre",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Enhanced Schema Markup
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://summerlinwestrealestate.com/#agent",
      name: "Dr. Jan Duffy",
      jobTitle: "REALTOR®",
      description:
        "Summerlin West real estate specialist with 15+ years of experience",
      url: "https://summerlinwestrealestate.com",
      telephone: "+1-702-550-0112",
      email: "jan@summerlinwestrealestate.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1980 Festival Plaza Dr (One Summerlin)",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89135",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.1865,
        longitude: -115.3432,
      },
      areaServed: {
        "@type": "Place",
        name: "Summerlin West",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Summerlin West Homes for Sale",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Place",
              name: "The Vistas",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Place",
              name: "Stonebridge",
            },
          },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": "https://summerlinwestrealestate.com/#organization",
      name: "Summerlin West Real Estate",
      url: "https://summerlinwestrealestate.com",
      logo: {
        "@type": "ImageObject",
        url: "https://summerlinwestrealestate.com/images/logo.png",
      },
      sameAs: [
        "https://www.facebook.com/summerlinwestrealestate",
        "https://www.linkedin.com/company/summerlin-west-real-estate",
      ],
    },
    {
      "@type": "Place",
      "@id": "https://summerlinwestrealestate.com/#place",
      name: "Summerlin West",
      description:
        "Luxury master-planned community in Las Vegas with Red Rock Canyon views",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.1865,
        longitude: -115.3432,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        addressCountry: "US",
      },
    },
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

function StickyPhoneMenu() {
  return (
    <div
      className={styles.stickyPhoneMenu}
      aria-label="Call Summerlin West Real Estate"
    >
      <span className={styles.stickyPhoneMenuLabel}>Call Us</span>
      <a href="tel:7025500112" className={styles.stickyPhoneMenuCallButton}>
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        className={`${inter.variable} ${outfit.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StickyPhoneMenu />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
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
