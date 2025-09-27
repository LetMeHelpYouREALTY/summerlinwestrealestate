import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://summerlinwestrealestate.com';
  const today = new Date().toISOString().split('T')[0];

  // Main pages with proper priorities
  const mainPages = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: 'about', priority: '0.8', changefreq: 'weekly' },
    { path: 'team', priority: '0.8', changefreq: 'weekly' },
    { path: 'properties', priority: '0.9', changefreq: 'weekly' },
    { path: 'communities', priority: '0.9', changefreq: 'weekly' },
    { path: 'press', priority: '0.7', changefreq: 'weekly' },
    { path: 'testimonials', priority: '0.7', changefreq: 'weekly' },
    { path: 'market', priority: '0.8', changefreq: 'weekly' },
    { path: 'market-reports', priority: '0.8', changefreq: 'weekly' },
    { path: 'maps', priority: '0.9', changefreq: 'weekly' },
    { path: 'sold', priority: '0.7', changefreq: 'weekly' },
    { path: 'new-homes-summerlin', priority: '0.8', changefreq: 'weekly' },
    { path: 'downtown-summerlin', priority: '0.7', changefreq: 'monthly' },
    { path: 'the-vistas', priority: '0.8', changefreq: 'weekly' },
    { path: 'vistas-listing', priority: '0.7', changefreq: 'weekly' },
    { path: 'current-listing', priority: '0.7', changefreq: 'weekly' },
    { path: 'compare', priority: '0.6', changefreq: 'monthly' },
    { path: 'contact', priority: '0.6', changefreq: 'monthly' },
    { path: 'google-places', priority: '0.5', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${mainPages
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}/${url.path}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
