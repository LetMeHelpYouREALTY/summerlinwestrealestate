import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import subdivisions from '../subdivisions.json';
import ClientSubdivisionPage from './ClientSubdivisionPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subdivision = subdivisions.find((s) => s.slug === slug);
  
  if (!subdivision) {
    return {
      title: 'Subdivision Not Found | Summerlin West Real Estate',
      description: 'The requested subdivision could not be found.',
    };
  }

  const title = `${subdivision.name} Homes for Sale | The Vistas Summerlin West`;
  const description = `Explore ${subdivision.name} in The Vistas, Summerlin West. ${subdivision.type} homes ${subdivision.builder && subdivision.builder !== '-' ? `by ${subdivision.builder}` : ''} with ${subdivision.homeSizes && subdivision.homeSizes !== '-' ? subdivision.homeSizes : 'luxury features'}. Contact Dr. Jan Duffy for exclusive access.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://summerlinwestrealestate.com/service-area/${slug}`,
      siteName: 'Summerlin West Real Estate',
      images: [
        {
          url: '/images/og-image.svg',
          width: 1200,
          height: 630,
          alt: `${subdivision.name} - The Vistas Summerlin West`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-image.svg'],
    },
    alternates: {
      canonical: `/service-area/${slug}`,
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
}

export default async function SubdivisionPage({ params }: PageProps) {
  const { slug } = await params;
  const subdivision = subdivisions.find((s) => s.slug === slug);
  if (!subdivision) {
    return notFound();
  }
  
  // Generate structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    "name": `${subdivision.name} - The Vistas`,
    "description": `Explore ${subdivision.name} in The Vistas, Summerlin West. ${subdivision.type} homes ${subdivision.builder && subdivision.builder !== '-' ? `by ${subdivision.builder}` : ''} with ${subdivision.homeSizes && subdivision.homeSizes !== '-' ? subdivision.homeSizes : 'luxury features'}.`,
    "url": `https://summerlinwestrealestate.com/service-area/${slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "amenityFeature": subdivision.features.map(feature => ({
      "@type": "LocationFeatureSpecification",
      "name": feature
    })),
    "containedInPlace": {
      "@type": "City",
      "name": "Summerlin West"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientSubdivisionPage subdivision={subdivision} />
    </>
  );
}
