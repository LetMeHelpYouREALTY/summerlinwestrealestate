import { Metadata } from 'next';
import HomeClient from './HomeClient';

// Metadata for homepage
export const metadata: Metadata = {
  title: 'Summerlin West Homes for Sale | Dr. Jan Duffy REALTOR® | The Vistas',
  description: 'Find your dream home in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales. Luxury properties, market insights, and expert guidance. Call (702) 550-0112 today!',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Summerlin West Homes for Sale | Dr. Jan Duffy REALTOR® | The Vistas',
    description: 'Find your dream home in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales. Luxury properties, market insights, and expert guidance. Call (702) 550-0112 today!',
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
    description: 'Find your dream home in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales. Luxury properties, market insights, and expert guidance. Call (702) 550-0112 today!',
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


export default function Home() {
  return <HomeClient />;
}
