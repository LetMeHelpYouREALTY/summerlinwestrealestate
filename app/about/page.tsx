import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Meet Dr. Jan Duffy | Top Summerlin REALTOR® with $6B+ Sales | Expert Guide',
  description: 'Meet Dr. Jan Duffy, your trusted Summerlin West real estate expert! $6B+ in sales, 15+ years experience, insider market knowledge. Call (702) 550-0112 for personalized service!',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Meet Dr. Jan Duffy | Top Summerlin REALTOR® with $6B+ Sales | Expert Guide',
    description: 'Meet Dr. Jan Duffy, your trusted Summerlin West real estate expert! $6B+ in sales, 15+ years experience, insider market knowledge. Call (702) 550-0112 for personalized service!',
    url: 'https://summerlinwestrealestate.com/about',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Summerlin West Real Estate Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Dr. Jan Duffy | Top Summerlin REALTOR® with $6B+ Sales | Expert Guide',
    description: 'Meet Dr. Jan Duffy, your trusted Summerlin West real estate expert! $6B+ in sales, 15+ years experience, insider market knowledge. Call (702) 550-0112 for personalized service!',
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

export default function About() {
  return <AboutClient />;
}
