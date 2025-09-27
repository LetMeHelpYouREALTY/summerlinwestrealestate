import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export interface ImageMetadata {
  title: string;
  caption: string;
  geoLocation: string;
  keywords: string[];
  propertyType: string;
  priceRange: string;
  altText?: string;
  license?: string;
  photographer?: string;
  dateTaken?: string;
  imageSize?: {
    width: number;
    height: number;
  };
}

export interface MetadataFile {
  [category: string]: {
    [filename: string]: ImageMetadata;
  };
}

/**
 * Load image metadata from JSON file
 */
export function loadImageMetadata(): MetadataFile {
  try {
    const metadataPath = join(process.cwd(), 'public/images/image-metadata.json');
    if (!existsSync(metadataPath)) {
      console.warn('Image metadata file not found');
      return {};
    }

    const metadataContent = readFileSync(metadataPath, 'utf-8');
    return JSON.parse(metadataContent);
  } catch (error) {
    console.error('Error loading image metadata:', error);
    return {};
  }
}

/**
 * Get metadata for a specific image
 */
export function getImageMetadata(category: string, filename: string): ImageMetadata | null {
  const metadata = loadImageMetadata();
  return metadata[category]?.[filename] || null;
}

/**
 * Generate SEO-optimized alt text for images
 */
export function generateAltText(filename: string, category: string, customTitle?: string): string {
  const metadata = getImageMetadata(category, filename);

  if (metadata?.altText) {
    return metadata.altText;
  }

  if (customTitle) {
    return customTitle;
  }

  if (metadata?.title) {
    return metadata.title;
  }

  // Fallback: generate from filename
  const name = filename.replace(/\.[^/.]+$/, '');
  const words = name.split(/[-_\s]+/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  return `${capitalizedWords.join(' ')} in Summerlin West, Las Vegas`;
}

/**
 * Generate Open Graph image metadata
 */
export function generateOGImageData(imagePath: string, category: string, filename: string) {
  const metadata = getImageMetadata(category, filename);

  return {
    url: imagePath,
    alt: generateAltText(filename, category, metadata?.title),
    width: metadata?.imageSize?.width || 1200,
    height: metadata?.imageSize?.height || 630,
    type: 'image/jpeg',
  };
}

/**
 * Generate structured data for images
 */
export function generateImageStructuredData(imagePath: string, category: string, filename: string) {
  const metadata = getImageMetadata(category, filename);

  if (!metadata) return null;

  return {
    '@type': 'ImageObject',
    contentUrl: imagePath,
    name: metadata.title,
    description: metadata.caption,
    license: metadata.license || 'https://summerlinwestrealestate.com/terms',
    creator: {
      '@type': 'Organization',
      name: 'Summerlin West Real Estate',
    },
    contentLocation: {
      '@type': 'Place',
      name: metadata.geoLocation,
    },
    keywords: metadata.keywords?.join(', '),
    datePublished: metadata.dateTaken || new Date().toISOString(),
    width: metadata.imageSize?.width,
    height: metadata.imageSize?.height,
  };
}

/**
 * Get all images in a category with metadata
 */
export function getCategoryImages(category: string): Array<{
  filename: string;
  path: string;
  metadata: ImageMetadata | null;
}> {
  const metadata = loadImageMetadata();
  const categoryMetadata = metadata[category] || {};

  return Object.keys(categoryMetadata).map((filename) => ({
    filename,
    path: `/images/${category}/${filename}`,
    metadata: categoryMetadata[filename] || null,
  }));
}

/**
 * Search images by keyword
 */
export function searchImagesByKeyword(keyword: string): Array<{
  filename: string;
  category: string;
  path: string;
  metadata: ImageMetadata;
}> {
  const metadata = loadImageMetadata();
  const results: Array<{
    filename: string;
    category: string;
    path: string;
    metadata: ImageMetadata;
  }> = [];

  const searchTerm = keyword.toLowerCase();

  Object.entries(metadata).forEach(([category, images]) => {
    Object.entries(images).forEach(([filename, imageMetadata]) => {
      const searchableText = [
        imageMetadata.title,
        imageMetadata.caption,
        ...imageMetadata.keywords,
        imageMetadata.propertyType,
        imageMetadata.geoLocation,
      ]
        .join(' ')
        .toLowerCase();

      if (searchableText.includes(searchTerm)) {
        results.push({
          filename,
          category,
          path: `/images/${category}/${filename}`,
          metadata: imageMetadata,
        });
      }
    });
  });

  return results;
}

/**
 * Get featured home images with metadata
 */
export function getFeaturedHomeImages(): Array<{
  filename: string;
  path: string;
  metadata: ImageMetadata;
}> {
  const featuredHomes = getCategoryImages('featured-homes');
  return featuredHomes
    .filter((item) => item.metadata)
    .map((item) => ({
      filename: item.filename,
      path: item.path,
      metadata: item.metadata!,
    }))
    .sort((a, b) => {
      // Sort by filename number if available
      const aNum = parseInt(a.filename.match(/\d+/)?.[0] || '0', 10);
      const bNum = parseInt(b.filename.match(/\d+/)?.[0] || '0', 10);
      return aNum - bNum;
    });
}

/**
 * Validate image metadata structure
 */
export function validateImageMetadata(metadata: unknown): metadata is ImageMetadata {
  const requiredFields = [
    'title',
    'caption',
    'geoLocation',
    'keywords',
    'propertyType',
    'priceRange',
  ];

  return requiredFields.every((field) => metadata && typeof metadata[field] !== 'undefined');
}

/**
 * Generate image optimization suggestions
 */
export function getImageOptimizationSuggestions(filename: string, category: string): string[] {
  const suggestions: string[] = [];
  const metadata = getImageMetadata(category, filename);

  if (!metadata) {
    suggestions.push('Add detailed metadata to image-metadata.json');
  } else {
    if (!metadata.altText) {
      suggestions.push('Add alt text for accessibility');
    }
    if (!metadata.imageSize) {
      suggestions.push('Add image dimensions for better SEO');
    }
    if (!metadata.photographer) {
      suggestions.push('Add photographer credit if applicable');
    }
    if (!metadata.dateTaken) {
      suggestions.push('Add date taken for better context');
    }
  }

  // Check filename format
  if (!/^[a-z0-9-]+\.(jpg|jpeg|png|webp|svg)$/i.test(filename)) {
    suggestions.push('Use lowercase, hyphens, and standard image extensions');
  }

  return suggestions;
}
