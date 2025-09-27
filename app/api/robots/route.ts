import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap Index
Sitemap: https://summerlinwestrealestate.com/sitemap-index.xml

# Individual Sitemaps
Sitemap: https://summerlinwestrealestate.com/sitemap.xml
Sitemap: https://summerlinwestrealestate.com/sitemap-images.xml

# Disallow duplicate content
Disallow: /market-report

# Allow important pages
Allow: /market-reports
Allow: /communities
Allow: /about
Allow: /contact
Allow: /current-listing
Allow: /the-vistas
Allow: /sold
Allow: /new-homes-summerlin
Allow: /downtown-summerlin
Allow: /compare
Allow: /google-places
Allow: /service-area/

# Crawl delay (optional)
Crawl-delay: 1`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

