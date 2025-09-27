# Image Management System

## Overview

The Summerlin West Real Estate website includes a comprehensive image management system designed to optimize SEO, improve accessibility, and provide detailed metadata for all images across the site.

## Directory Structure

```text
public/images/
├── featured-homes/     # Featured property photos
├── icons/             # Site icons and logos
├── logos/             # Brand logos
├── agent-photos/      # Agent headshots and photos
├── community-photos/  # Community and area photos
├── blog-images/       # Blog post images
└── image-metadata.json # Centralized metadata file
```

## Metadata Structure

Each image has comprehensive metadata stored in `public/images/image-metadata.json`:

```json
{
  "category": {
    "filename.jpg": {
      "title": "SEO-optimized title",
      "caption": "Detailed description",
      "geoLocation": "Location information",
      "keywords": ["keyword1", "keyword2"],
      "propertyType": "Type of property",
      "priceRange": "Price information",
      "altText": "Accessibility text",
      "license": "Usage license",
      "photographer": "Photographer credit",
      "dateTaken": "Date photo was taken",
      "imageSize": {
        "width": 1920,
        "height": 1080
      }
    }
  }
}
```

## Required Fields

- **title**: SEO-optimized title (10+ characters)
- **caption**: Detailed description (20+ characters)
- **geoLocation**: Location information
- **keywords**: Array of relevant keywords
- **propertyType**: Type of property or content
- **priceRange**: Price information or "N/A"

## Optional Fields

- **altText**: Accessibility text for screen readers
- **license**: Usage license information
- **photographer**: Photographer credit
- **dateTaken**: Date photo was taken
- **imageSize**: Image dimensions for SEO

## Management Script

Use the image management script for common tasks:

```bash
# Validate all metadata
node scripts/manage-images.js validate

# Get optimization suggestions
node scripts/manage-images.js suggestions

# Search images by keyword
node scripts/manage-images.js search "kitchen"

# Show image statistics
node scripts/manage-images.js stats

# Add metadata for a new image
node scripts/manage-images.js add-metadata featured-homes new-home.jpg
```

## Image Utilities

The `lib/image-utils.ts` file provides utility functions:

```typescript
import {
  getImageMetadata,
  generateAltText,
  getFeaturedHomeImages,
  searchImagesByKeyword,
} from "@/lib/image-utils";

// Get metadata for an image
const metadata = getImageMetadata("featured-homes", "featured-home-1.jpg");

// Generate alt text
const altText = generateAltText("featured-home-1.jpg", "featured-homes");

// Get all featured home images
const featuredHomes = getFeaturedHomeImages();

// Search images
const results = searchImagesByKeyword("kitchen");
```

## SEO Best Practices

### 1. Image Naming

- Use lowercase letters
- Separate words with hyphens
- Include descriptive terms
- Use standard extensions (.jpg, .png, .webp)

**Good**: `luxury-kitchen-summerlin-west.jpg`
**Bad**: `IMG_1234.JPG`

### 2. Title Optimization

- Include location (Summerlin West, Las Vegas)
- Include property type (Luxury Home, Kitchen, etc.)
- Keep under 60 characters
- Use relevant keywords

**Good**: "Luxury Kitchen - Summerlin West Real Estate"
**Bad**: "Kitchen"

### 3. Caption Writing

- Provide detailed descriptions
- Include key features
- Mention location context
- Use natural language

**Good**: "Chef's kitchen with high-end appliances, custom cabinetry, and quartz countertops in Summerlin West"
**Bad**: "Kitchen photo"

### 4. Keyword Strategy

- Include location keywords
- Add property-specific terms
- Use descriptive adjectives
- Include search intent terms

**Example**: `["luxury home", "kitchen", "Summerlin West", "Las Vegas", "real estate"]`

## Accessibility Guidelines

### Alt Text Requirements

- Describe the image content
- Include context when relevant
- Keep under 125 characters
- Don't start with "Image of" or "Picture of"

**Good**: "Luxury kitchen with granite countertops and stainless steel appliances"
**Bad**: "Image of a kitchen"

### Caption Guidelines

- Provide detailed descriptions
- Include relevant context
- Use clear, descriptive language
- Mention key features and benefits

## Image Sitemap

The system automatically generates an XML sitemap for images at `/sitemap-images.xml` that includes:

- Image URLs
- Titles and captions
- Geographic location
- License information
- Keywords and metadata

This helps search engines discover and index your images properly.

## Adding New Images

### 1. Place Image in Appropriate Directory

```bash
# For featured homes
cp new-home.jpg public/images/featured-homes/

# For agent photos
cp agent-headshot.jpg public/images/agent-photos/
```

### 2. Add Metadata

```bash
# Generate default metadata
node scripts/manage-images.js add-metadata featured-homes new-home.jpg
```

### 3. Edit Metadata File

Open `public/images/image-metadata.json` and customize the generated metadata:

```json
{
  "featured-homes": {
    "new-home.jpg": {
      "title": "Custom Luxury Home Title",
      "caption": "Detailed description of the home features",
      "geoLocation": "The Vistas, Summerlin West, Las Vegas, NV, USA",
      "keywords": ["luxury", "home", "Summerlin West", "The Vistas"],
      "propertyType": "Single Family Home",
      "priceRange": "$950K - $2.5M",
      "altText": "Luxury home exterior with mountain views",
      "photographer": "Professional Photography Studio",
      "dateTaken": "2024-01-15"
    }
  }
}
```

### 4. Validate Metadata

```bash
node scripts/manage-images.js validate
```

## Performance Optimization

### Image Formats

- Use WebP for better compression
- Provide JPEG fallbacks
- Optimize SVG files
- Use appropriate quality settings

### Sizing Guidelines

- Featured homes: 1920x1080px minimum
- Agent photos: 800x800px square
- Blog images: 1200x630px for social sharing
- Icons: 64x64px or scalable SVG

### Compression

- Compress images before uploading
- Use tools like ImageOptim or TinyPNG
- Maintain quality while reducing file size
- Test loading performance

## Troubleshooting

### Common Issues

1. **Missing Metadata**

   ```bash
   node scripts/manage-images.js validate
   ```

2. **Image Not Appearing in Sitemap**
   - Check file extension is supported
   - Verify image is in correct directory
   - Ensure metadata exists

3. **SEO Issues**
   - Review title and caption length
   - Check keyword relevance
   - Verify alt text quality

### Validation Commands

```bash
# Check all metadata
node scripts/manage-images.js validate

# Get optimization suggestions
node scripts/manage-images.js suggestions

# Find images without metadata
node scripts/manage-images.js stats
```

## Integration with Components

### Using Images in React Components

```typescript
import { getImageMetadata, generateAltText } from '@/lib/image-utils';

function PropertyImage({ filename, category, className }) {
  const metadata = getImageMetadata(category, filename);
  const altText = generateAltText(filename, category, metadata?.title);

  return (
    <img
      src={`/images/${category}/${filename}`}
      alt={altText}
      title={metadata?.title}
      className={className}
    />
  );
}
```

### Featured Home Slider Integration

```typescript
import { getFeaturedHomeImages } from '@/lib/image-utils';

function FeaturedHomeSlider() {
  const featuredHomes = getFeaturedHomeImages();

  return (
    <div className="featured-homes-slider">
      {featuredHomes.map((home, index) => (
        <div key={index} className="slide">
          <img
            src={home.path}
            alt={home.metadata.title}
            title={home.metadata.title}
          />
          <div className="caption">
            <h3>{home.metadata.title}</h3>
            <p>{home.metadata.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

## Future Enhancements

- Automatic image optimization pipeline
- Integration with CDN for faster loading
- Advanced search and filtering
- Bulk metadata import/export
- Image analytics and performance tracking
- AI-powered alt text generation
- Automatic watermarking for branding

## Support

For questions or issues with the image management system:

1. Check this documentation
2. Run validation commands
3. Review the utility functions
4. Check the metadata file structure
5. Test with the management script

The system is designed to be maintainable and scalable for future growth of the Summerlin West Real Estate website.
