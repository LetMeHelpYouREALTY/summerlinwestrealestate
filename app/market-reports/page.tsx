import { Metadata } from 'next';
import MarketReportsClient from './MarketReportsClient';

// Metadata for market reports page
export const metadata: Metadata = {
  title: 'Summerlin Market Reports & Trends | Summerlin West Real Estate',
  description: 'Get the latest Summerlin real estate market reports, trends, and expert analysis. Download detailed reports and sign up for the Summerlin market newsletter.',
  alternates: {
    canonical: '/market-reports',
  },
  openGraph: {
    title: 'Summerlin Market Reports & Trends | Summerlin West Real Estate',
    description: 'Get the latest Summerlin real estate market reports, trends, and expert analysis. Download detailed reports and sign up for the Summerlin market newsletter.',
    url: 'https://summerlinwestrealestate.com/market-reports',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Summerlin Market Reports',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summerlin Market Reports & Trends | Summerlin West Real Estate',
    description: 'Get the latest Summerlin real estate market reports, trends, and expert analysis. Download detailed reports and sign up for the Summerlin market newsletter.',
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

export default function MarketReports() {
  return <MarketReportsClient />;
}
