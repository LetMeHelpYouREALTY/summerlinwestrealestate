# Project Configuration Guide

## Overview
This document outlines the configuration options for colors, typography, and logo management in the Summerlin West Real Estate project.

## 🎨 Colors Configuration

### Location: `app/globals.css`

The project now includes both the existing design system and your custom color overrides:

```css
:root {
  /* ===== CUSTOM COLOR OVERRIDES ===== */
  --color-primary: #07be8a;        /* Teal green */
  --color-skyblue: #79adff;        /* Light blue */
  --color-lightskyblue: #9cc2dd;    /* Light sky blue */
  --color-dark: #172023;            /* Dark charcoal */

  /* ===== EXISTING DESIGN SYSTEM ===== */
  /* All existing --brand-*, --neutral-*, etc. variables remain */
}
```

### Usage Examples:
```css
/* Using your custom colors */
.custom-button {
  background-color: var(--color-primary);
  color: var(--color-dark);
}

.sky-section {
  background-color: var(--color-skyblue);
}
```

## 🔤 Typography Configuration

### Location: `app/layout.tsx`

The project now includes **Bricolage_Grotesque** alongside existing fonts:

```typescript
import { Inter, Outfit, Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
```

### Available Font Variables:
- `--font-inter` (Inter)
- `--font-outfit` (Outfit) 
- `--font-geist-sans` (Geist Sans)
- `--font-geist-mono` (Geist Mono)
- `--font-bricolage` (Bricolage Grotesque) ✨ **NEW**

### Usage Examples:
```css
.heading-bricolage {
  font-family: var(--font-bricolage);
}

.custom-heading {
  font-family: var(--font-bricolage), sans-serif;
  font-weight: 600;
}
```

## 🏷️ Logo Configuration

### Location: `components/layout/Header/Logo/index.tsx`

The logo component supports responsive and theme-aware display:

```typescript
interface LogoProps {
  isHomepage?: boolean;  // Whether on homepage
  sticky?: boolean;      // Whether header is sticky
}
```

### Logo Files Required:
Place these files in the `public/images/header/` directory:
- `dark-logo.svg` - For light backgrounds
- `logo.svg` - For dark backgrounds

### Logo Display Logic:
- **Homepage + Sticky**: Shows dark logo on light, light logo on dark
- **Homepage + Not Sticky**: Shows light logo only
- **Other Pages + Sticky**: Shows dark logo on light, light logo on dark  
- **Other Pages + Not Sticky**: Shows dark logo on light, light logo on dark

### Integration:
The logo is automatically included in the Header component and styled with:
- Fixed positioning
- Responsive design
- Theme-aware display
- Proper accessibility attributes

## 🛠️ Implementation Status

### ✅ Completed:
- [x] Custom color variables added to `globals.css`
- [x] Bricolage_Grotesque font imported and configured
- [x] Logo component created with responsive logic
- [x] Header component updated to include logo
- [x] CSS styling for header layout
- [x] Cross-browser compatibility fixes

### 📋 Next Steps:
1. **Add Logo Files**: Place `dark-logo.svg` and `logo.svg` in `public/images/header/`
2. **Test Responsive Design**: Verify logo display on different screen sizes
3. **Customize Colors**: Update components to use new color variables
4. **Typography**: Apply Bricolage_Grotesque to headings and key elements

## 🎯 Usage Recommendations

### For Colors:
- Use `--color-primary` for main brand elements (buttons, links, highlights)
- Use `--color-skyblue` for secondary elements and backgrounds
- Use `--color-lightskyblue` for subtle accents and borders
- Use `--color-dark` for text and high-contrast elements

### For Typography:
- Apply Bricolage_Grotesque to headings (h1, h2, h3)
- Keep Inter for body text and UI elements
- Use Outfit for special sections or callouts

### For Logo:
- Ensure SVG files are optimized for web
- Test both light and dark theme compatibility
- Verify accessibility with proper alt text

## 🔧 Customization Examples

### Custom Button with New Colors:
```css
.btn-custom {
  background: linear-gradient(135deg, var(--color-primary), var(--color-skyblue));
  color: var(--color-dark);
  border: 2px solid var(--color-lightskyblue);
}
```

### Custom Heading with Bricolage:
```css
.heading-custom {
  font-family: var(--font-bricolage);
  color: var(--color-dark);
  font-weight: 700;
}
```

### Custom Section with Sky Colors:
```css
.section-sky {
  background: linear-gradient(180deg, var(--color-skyblue), var(--color-lightskyblue));
  color: var(--color-dark);
}
```

---

**Note**: All existing functionality remains intact. These additions provide new customization options while maintaining backward compatibility with the current design system.
