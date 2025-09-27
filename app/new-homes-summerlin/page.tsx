import { Metadata } from 'next';
import NewHomesSummerlinClient from './NewHomesSummerlinClient';

export const metadata: Metadata = {
  title: 'New Construction Homes in Summerlin West | Dr. Jan Duffy REALTOR®',
  description: 'Discover luxury new construction homes in Summerlin West. Expert guidance from Dr. Jan Duffy, REALTOR® with exclusive access to premier builders and pre-construction pricing.',
  alternates: {
    canonical: '/new-homes-summerlin',
  },
  openGraph: {
    title: 'New Construction Homes in Summerlin West | Dr. Jan Duffy REALTOR®',
    description: 'Discover luxury new construction homes in Summerlin West. Expert guidance from Dr. Jan Duffy, REALTOR® with exclusive access to premier builders and pre-construction pricing.',
    url: 'https://summerlinwestrealestate.com/new-homes-summerlin',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'New Construction Homes in Summerlin West',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Construction Homes in Summerlin West | Dr. Jan Duffy REALTOR®',
    description: 'Discover luxury new construction homes in Summerlin West. Expert guidance from Dr. Jan Duffy, REALTOR® with exclusive access to premier builders and pre-construction pricing.',
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

export default function NewHomesSummerlin() {
  return <NewHomesSummerlinClient />;
}
