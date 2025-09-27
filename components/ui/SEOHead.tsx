import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
  structuredData?: object;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = '/images/og-image.svg',
  keywords = [],
  structuredData,
}: SEOHeadProps) {
  const fullTitle = `${title} | Summerlin West Real Estate`;
  const fullDescription = `${description} Expert guidance from Dr. Jan Duffy, REALTOR®.`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Summerlin West Real Estate" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      {canonical && (
        <link rel="canonical" href={`https://summerlinwestrealestate.com${canonical}`} />
      )}

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
