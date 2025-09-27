import { readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { NextResponse } from 'next/server';

interface ImageMetadata {
  title: string;
  caption: string;
  geoLocation: string;
  keywords: string[];
  propertyType: string;
  priceRange: string;
}

interface MetadataFile {
  [category: string]: {
    [filename: string]: ImageMetadata;
  };
}

export async function GET() {
  const baseUrl = 'https://summerlinwestrealestate.com';
  const today = new Date().toISOString().split('T')[0];

  // Define image directories to scan
  const imageDirectories = [
    'public/images',
    'public/images/featured-homes',
    'public/images/icons',
    'public/images/logos',
    'public/images/agent-photos',
    'public/images/community-photos',
    'public/images/blog-images',
  ];

  const imageUrls: Array<{
    loc: string;
    title?: string;
    caption?: string;
    geoLocation?: string;
    license?: string;
    keywords?: string[];
    propertyType?: string;
    priceRange?: string;
  }> = [];

  // Load metadata from JSON file
  let metadata: MetadataFile = {};
  try {
    const metadataPath = join(process.cwd(), 'public/images/image-metadata.json');
    const metadataContent = readFileSync(metadataPath, 'utf-8');
    metadata = JSON.parse(metadataContent);
  } catch (error) {
    console.warn('Could not load image metadata file:', error);
  }

  try {
    // Scan each directory for images
    for (const dir of imageDirectories) {
      try {
        const files = await readdir(join(process.cwd(), dir));

        for (const file of files) {
          if (isImageFile(file)) {
            const imagePath = `${dir.replace('public', '')}/${file}`;
            const fullUrl = `${baseUrl}${imagePath}`;

            // Get metadata from JSON file or generate default
            const category = dir.split('/').pop() || 'unknown';
            const imageMetadata = metadata[category]?.[file] || generateDefaultMetadata(file, dir);

            imageUrls.push({
              loc: fullUrl,
              title: imageMetadata.title,
              caption: imageMetadata.caption,
              geoLocation: imageMetadata.geoLocation,
              license: 'https://summerlinwestrealestate.com/terms',
              keywords: imageMetadata.keywords,
              propertyType: imageMetadata.propertyType,
              priceRange: imageMetadata.priceRange,
            });
          }
        }
      } catch (error) {
        console.warn(`Could not read directory ${dir}:`, error);
      }
    }
  } catch (error) {
    console.error('Error generating image sitemap:', error);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    ${imageUrls
      .map(
        (img) => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      ${img.title ? `<image:title><![CDATA[${img.title}]]></image:title>` : ''}
      ${img.caption ? `<image:caption><![CDATA[${img.caption}]]></image:caption>` : ''}
      ${img.geoLocation ? `<image:geo_location><![CDATA[${img.geoLocation}]]></image:geo_location>` : ''}
      ${img.license ? `<image:license>${img.license}</image:license>` : ''}
    </image:image>`
      )
      .join('')}
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

// Helper function to check if file is an image
function isImageFile(filename: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.tiff'];
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return imageExtensions.includes(extension);
}

// Helper function to generate default metadata
function generateDefaultMetadata(filename: string, directory: string): ImageMetadata {
  const name = filename.replace(/\.[^/.]+$/, ''); // Remove extension
  const words = name.split(/[-_\s]+/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  let title = `${capitalizedWords.join(' ')} - Summerlin West Real Estate`;
  let caption = `High-quality image of ${capitalizedWords.join(' ').toLowerCase()} in Summerlin West, Las Vegas`;
  const geoLocation = 'Summerlin West, Las Vegas, NV, USA';
  const keywords = [...capitalizedWords, 'Summerlin West', 'Las Vegas', 'real estate'];
  let propertyType = 'Real Estate';
  let priceRange = 'N/A';

  // Customize based on directory
  if (directory.includes('featured-homes')) {
    title = `${capitalizedWords.join(' ')} - Summerlin West Luxury Homes`;
    caption = `Featured luxury home in Summerlin West showcasing ${capitalizedWords.join(' ').toLowerCase()}`;
    propertyType = 'Single Family Home';
    priceRange = '$800K - $2.5M';
  } else if (directory.includes('icons')) {
    title = `${capitalizedWords.join(' ')} - Summerlin West Real Estate`;
    caption = `Professional icon representing ${capitalizedWords.join(' ').toLowerCase()} for Summerlin West Real Estate`;
    propertyType = 'Branding';
  } else if (directory.includes('agent-photos')) {
    title = `${capitalizedWords.join(' ')} - Summerlin West Real Estate Agent`;
    caption = `Professional photo of ${capitalizedWords.join(' ').toLowerCase()} from Summerlin West Real Estate`;
    propertyType = 'Agent';
  } else if (directory.includes('community-photos')) {
    title = `${capitalizedWords.join(' ')} - Summerlin West Community`;
    caption = `Beautiful community photo showing ${capitalizedWords.join(' ').toLowerCase()} in Summerlin West`;
    propertyType = 'Community';
  } else if (directory.includes('blog-images')) {
    title = `${capitalizedWords.join(' ')} - Summerlin West Real Estate Blog`;
    caption = `Blog image featuring ${capitalizedWords.join(' ').toLowerCase()} for Summerlin West Real Estate`;
    propertyType = 'Blog';
  }

  return {
    title,
    caption,
    geoLocation,
    keywords,
    propertyType,
    priceRange,
  };
}
