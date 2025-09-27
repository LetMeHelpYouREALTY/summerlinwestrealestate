import { Metadata } from 'next';
import GooglePlacesClient from './GooglePlacesClient';

// Metadata for Google Places page
export const metadata: Metadata = {
  title: 'Google Places UI Kit for Real Estate | Summerlin West Real Estate',
  description: 'Integrate Google Places API for enhanced real estate search and property discovery. Autocomplete, place details, and location services for luxury real estate websites.',
  alternates: {
    canonical: '/google-places',
  },
  openGraph: {
    title: 'Google Places UI Kit for Real Estate | Summerlin West Real Estate',
    description: 'Integrate Google Places API for enhanced real estate search and property discovery. Autocomplete, place details, and location services for luxury real estate websites.',
    url: 'https://summerlinwestrealestate.com/google-places',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Google Places UI Kit for Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Places UI Kit for Real Estate | Summerlin West Real Estate',
    description: 'Integrate Google Places API for enhanced real estate search and property discovery. Autocomplete, place details, and location services for luxury real estate websites.',
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

export default function GooglePlaces() {
  return <GooglePlacesClient />;
}
