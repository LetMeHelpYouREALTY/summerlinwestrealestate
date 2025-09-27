#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

/**
 * Image Management Script for Summerlin West Real Estate
 *
 * Usage:
 * node scripts/manage-images.js [command] [options]
 *
 * Commands:
 * - validate: Validate all image metadata
 * - suggestions: Get optimization suggestions for all images
 * - search [keyword]: Search images by keyword
 * - stats: Show image statistics
 * - add-metadata [category] [filename]: Add metadata for a specific image
 */

const METADATA_FILE = path.join(process.cwd(), 'public/images/image-metadata.json');
const IMAGE_DIRS = [
  'public/images/featured-homes',
  'public/images/icons',
  'public/images/logos',
  'public/images/agent-photos',
  'public/images/community-photos',
  'public/images/blog-images',
];

function loadMetadata() {
  try {
    const content = fs.readFileSync(METADATA_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error loading metadata:', error.message);
    return {};
  }
}

function saveMetadata(metadata) {
  try {
    fs.writeFileSync(METADATA_FILE, JSON.stringify(metadata, null, 2));
    console.log('✅ Metadata saved successfully');
  } catch (error) {
    console.error('Error saving metadata:', error.message);
  }
}

function validateMetadata() {
  console.log('🔍 Validating image metadata...\n');

  const metadata = loadMetadata();
  const errors = [];
  const warnings = [];

  Object.entries(metadata).forEach(([category, images]) => {
    Object.entries(images).forEach(([filename, imageData]) => {
      const requiredFields = [
        'title',
        'caption',
        'geoLocation',
        'keywords',
        'propertyType',
        'priceRange',
      ];

      // Check required fields
      requiredFields.forEach((field) => {
        if (!imageData[field]) {
          errors.push(`${category}/${filename}: Missing required field '${field}'`);
        }
      });

      // Check data types
      if (imageData.keywords && !Array.isArray(imageData.keywords)) {
        errors.push(`${category}/${filename}: &apos;keywords&apos; must be an array`);
      }

      if (imageData.title && imageData.title.length < 10) {
        warnings.push(
          `${category}/${filename}: Title is very short (${imageData.title.length} chars)`
        );
      }

      if (imageData.caption && imageData.caption.length < 20) {
        warnings.push(
          `${category}/${filename}: Caption is very short (${imageData.caption.length} chars)`
        );
      }

      // Check for SEO optimization
      if (!imageData.altText) {
        warnings.push(`${category}/${filename}: Missing alt text for accessibility`);
      }

      if (!imageData.imageSize) {
        warnings.push(`${category}/${filename}: Missing image dimensions`);
      }
    });
  });

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All metadata is valid!');
  } else {
    if (errors.length > 0) {
      console.log('❌ Errors found:');
      errors.forEach((error) => console.log(`  - ${error}`));
    }

    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      warnings.forEach((warning) => console.log(`  - ${warning}`));
    }
  }

  return { errors, warnings };
}

function getOptimizationSuggestions() {
  console.log('💡 Generating optimization suggestions...\n');

  const metadata = loadMetadata();
  const suggestions = [];

  Object.entries(metadata).forEach(([category, images]) => {
    Object.entries(images).forEach(([filename, imageData]) => {
      const imageSuggestions = [];

      if (!imageData.altText) {
        imageSuggestions.push('Add alt text for accessibility');
      }

      if (!imageData.imageSize) {
        imageSuggestions.push('Add image dimensions for better SEO');
      }

      if (!imageData.photographer) {
        imageSuggestions.push('Add photographer credit if applicable');
      }

      if (!imageData.dateTaken) {
        imageSuggestions.push('Add date taken for better context');
      }

      if (!imageData.license) {
        imageSuggestions.push('Add license information');
      }

      // Check filename format
      if (!/^[a-z0-9-]+\.(jpg|jpeg|png|webp|svg)$/i.test(filename)) {
        imageSuggestions.push('Use lowercase, hyphens, and standard image extensions');
      }

      if (imageSuggestions.length > 0) {
        suggestions.push({
          image: `${category}/${filename}`,
          suggestions: imageSuggestions,
        });
      }
    });
  });

  if (suggestions.length === 0) {
    console.log('✅ All images are well optimized!');
  } else {
    suggestions.forEach(({ image, suggestions: imageSuggestions }) => {
      console.log(`📸 ${image}:`);
      imageSuggestions.forEach((suggestion) => console.log(`  - ${suggestion}`));
      console.log('');
    });
  }

  return suggestions;
}

function searchImages(keyword) {
  console.log(`🔍 Searching for images with keyword: "${keyword}"\n`);

  const metadata = loadMetadata();
  const results = [];

  Object.entries(metadata).forEach(([category, images]) => {
    Object.entries(images).forEach(([filename, imageData]) => {
      const searchableText = [
        imageData.title,
        imageData.caption,
        ...imageData.keywords,
        imageData.propertyType,
        imageData.geoLocation,
      ]
        .join(' ')
        .toLowerCase();

      if (searchableText.includes(keyword.toLowerCase())) {
        results.push({
          category,
          filename,
          path: `/images/${category}/${filename}`,
          title: imageData.title,
          caption: imageData.caption,
        });
      }
    });
  });

  if (results.length === 0) {
    console.log('No images found matching your search.');
  } else {
    console.log(`Found ${results.length} image(s):\n`);
    results.forEach((result) => {
      console.log(`📸 ${result.path}`);
      console.log(`   Title: ${result.title}`);
      console.log(`   Caption: ${result.caption}`);
      console.log('');
    });
  }

  return results;
}

function showStats() {
  console.log('📊 Image Statistics\n');

  const metadata = loadMetadata();
  let totalImages = 0;
  const totalCategories = Object.keys(metadata).length;

  Object.entries(metadata).forEach(([category, images]) => {
    const imageCount = Object.keys(images).length;
    totalImages += imageCount;
    console.log(`${category}: ${imageCount} images`);
  });

  console.log(`\nTotal: ${totalImages} images across ${totalCategories} categories`);

  // Check for missing metadata
  const allFiles = [];
  IMAGE_DIRS.forEach((dir) => {
    try {
      const files = fs.readdirSync(dir);
      files.forEach((file) => {
        if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
          allFiles.push(`${dir.replace('public/images/', '')}/${file}`);
        }
      });
    } catch (_error) {
      // Directory doesn&apos;t exist
    }
  });

  const filesWithMetadata = new Set();
  Object.entries(metadata).forEach(([category, images]) => {
    Object.keys(images).forEach((filename) => {
      filesWithMetadata.add(`${category}/${filename}`);
    });
  });

  const filesWithoutMetadata = allFiles.filter((file) => !filesWithMetadata.has(file));

  if (filesWithoutMetadata.length > 0) {
    console.log(`\n⚠️  ${filesWithoutMetadata.length} images without metadata:`);
    filesWithoutMetadata.forEach((file) => console.log(`  - ${file}`));
  }
}

function addMetadata(category, filename) {
  console.log(`➕ Adding metadata for ${category}/${filename}\n`);

  const metadata = loadMetadata();

  if (!metadata[category]) {
    metadata[category] = {};
  }

  // Generate default metadata
  const name = filename.replace(/\.[^/.]+$/, '');
  const words = name.split(/[-_\s]+/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  const defaultMetadata = {
    title: `${capitalizedWords.join(' ')} - Summerlin West Real Estate`,
    caption: `High-quality image of ${capitalizedWords.join(' ').toLowerCase()} in Summerlin West, Las Vegas`,
    geoLocation: 'Summerlin West, Las Vegas, NV, USA',
    keywords: [...capitalizedWords, 'Summerlin West', 'Las Vegas', 'real estate'],
    propertyType: 'Real Estate',
    priceRange: 'N/A',
  };

  // Customize based on category
  if (category === 'featured-homes') {
    defaultMetadata.title = `${capitalizedWords.join(' ')} - Summerlin West Luxury Homes`;
    defaultMetadata.caption = `Featured luxury home in Summerlin West showcasing ${capitalizedWords.join(' ').toLowerCase()}`;
    defaultMetadata.propertyType = 'Single Family Home';
    defaultMetadata.priceRange = '$800K - $2.5M';
  } else if (category === 'agent-photos') {
    defaultMetadata.title = `${capitalizedWords.join(' ')} - Summerlin West Real Estate Agent`;
    defaultMetadata.caption = `Professional photo of ${capitalizedWords.join(' ').toLowerCase()} from Summerlin West Real Estate`;
    defaultMetadata.propertyType = 'Agent';
  }

  metadata[category][filename] = defaultMetadata;
  saveMetadata(metadata);

  console.log('✅ Default metadata added. Please review and update as needed.');
}

// Main script execution
const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
  case 'validate':
    validateMetadata();
    break;

  case 'suggestions':
    getOptimizationSuggestions();
    break;

  case 'search':
    if (args.length === 0) {
      console.log('❌ Please provide a search keyword');
      console.log('Usage: node scripts/manage-images.js search [keyword]');
    } else {
      searchImages(args[0]);
    }
    break;

  case 'stats':
    showStats();
    break;

  case 'add-metadata':
    if (args.length < 2) {
      console.log('❌ Please provide category and filename');
      console.log('Usage: node scripts/manage-images.js add-metadata [category] [filename]');
    } else {
      addMetadata(args[0], args[1]);
    }
    break;

  default:
    console.log('📸 Image Management Script for Summerlin West Real Estate\n');
    console.log('Usage: node scripts/manage-images.js [command] [options]\n');
    console.log('Commands:');
    console.log('  validate                    - Validate all image metadata');
    console.log('  suggestions                 - Get optimization suggestions for all images');
    console.log('  search [keyword]            - Search images by keyword');
    console.log('  stats                       - Show image statistics');
    console.log('  add-metadata [cat] [file]   - Add metadata for a specific image\n');
    console.log('Examples:');
    console.log('  node scripts/manage-images.js validate');
    console.log('  node scripts/manage-images.js search "kitchen"');
    console.log('  node scripts/manage-images.js add-metadata featured-homes new-home.jpg');
}
