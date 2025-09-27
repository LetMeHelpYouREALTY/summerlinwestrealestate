# Homely Template Integration Guide

This document outlines how the Summerlin West Real Estate project has been enhanced with configurations inspired by the Homely Tailwind NextJS template.

## 🎨 Color System

### Primary Colors (Homely Template Style)
```css
--color-primary: #0084ff;        /* Main brand color */
--color-skyblue: #79adff;        /* Secondary blue */
--color-lightskyblue: #9cc2dd;   /* Light blue accent */
--color-dark: #172023;           /* Dark theme color */
```

### Usage in Tailwind
```jsx
// Primary color usage
<div className="bg-primary-500 text-white">
<div className="border-primary-300">
<div className="text-primary-600">

// Custom Homely colors
<div className="bg-[var(--color-primary)]">
<div className="text-[var(--color-skyblue)]">
```

## 🔤 Typography System

### Font Configuration
The project now includes Bricolage Grotesque font as recommended by the Homely template:

```typescript
// In app/layout.tsx
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});
```

### Usage in Tailwind
```jsx
<h1 className="font-bricolage text-4xl">
<p className="font-sans text-base">
<div className="font-outfit text-lg">
```

## 🏷️ Logo System

### Enhanced Logo Component
Created a comprehensive logo system with dark/light mode support:

```typescript
// Basic usage
<Logo width={150} height={68} />

// With sticky header support
<Logo sticky={true} />

// Simple logo without dark mode
<SimpleLogo />

// Footer-specific logo
<FooterLogo />
```

### Logo Files Required
Place these files in `/public/images/header/`:
- `logo.svg` - Light mode logo
- `dark-logo.svg` - Dark mode logo

### Logo Behavior
- **Light Mode**: Shows `logo.svg`
- **Dark Mode**: Shows `dark-logo.svg`
- **Homepage**: Special behavior for sticky headers
- **Other Pages**: Standard dark/light mode switching

## ⚙️ Tailwind Configuration

### Enhanced Config Features
- **Content Paths**: Properly configured for Next.js 15
- **Dark Mode**: Class-based dark mode support
- **Custom Colors**: Extended color palette
- **Animations**: Keyframe animations from Homely template
- **Typography**: Multiple font families
- **Spacing**: Extended spacing scale

### Key Extensions
```javascript
// Custom colors
primary: { 50: '#f0f7ff', ..., 950: '#000d1a' }
skyblue: { 500: '#79adff', 600: '#5a8fff' }
lightskyblue: { 500: '#9cc2dd', 600: '#7ba8cc' }
dark: { 500: '#172023', 600: '#0f1416', 700: '#0a0d0e' }

// Custom fonts
fontFamily: {
  bricolage: ['var(--font-bricolage-grotesque)', 'system-ui', 'sans-serif']
}

// Custom animations
animation: {
  'fade-in': 'fadeIn 0.5s ease-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'float': 'float 6s ease-in-out infinite'
}
```

## 🎯 Best Practices

### Color Usage
1. **Primary Actions**: Use `--color-primary` for CTAs
2. **Accent Elements**: Use `--color-skyblue` for highlights
3. **Backgrounds**: Use `--color-lightskyblue` for subtle backgrounds
4. **Dark Mode**: Use `--color-dark` for dark theme elements

### Typography Hierarchy
1. **Headlines**: Use `font-bricolage` for impact
2. **Body Text**: Use `font-sans` (Inter) for readability
3. **Special Elements**: Use `font-outfit` for unique styling

### Logo Implementation
1. **Header**: Use `<Logo sticky={true} />` for sticky headers
2. **Footer**: Use `<FooterLogo />` for footer placement
3. **Simple Cases**: Use `<SimpleLogo />` when dark mode isn't needed

## 🔄 Migration from Previous Setup

### What Changed
1. **Color System**: Updated primary color from `#07be8a` to `#0084ff`
2. **Typography**: Added Bricolage Grotesque font support
3. **Logo System**: Created comprehensive logo component
4. **Tailwind Config**: Added proper configuration file
5. **Dark Mode**: Enhanced dark mode support

### What Stayed the Same
1. **CSS Architecture**: Maintained existing advanced CSS system
2. **Component Structure**: Preserved existing component patterns
3. **Real Estate Branding**: Kept professional real estate focus
4. **Performance**: Maintained optimization features

## 🚀 Usage Examples

### Real Estate Property Card
```jsx
<div className="card card-hover">
  <div className="card-header">
    <h3 className="font-bricolage text-xl text-primary-600">
      Luxury Home in The Vistas
    </h3>
  </div>
  <div className="card-body">
    <p className="text-neutral-600 font-sans">
      Beautiful home with Red Rock Canyon views
    </p>
    <button className="btn btn-primary mt-4">
      View Details
    </button>
  </div>
</div>
```

### Dark Mode Navigation
```jsx
<nav className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
  <Logo sticky={false} />
  <div className="text-neutral-600 dark:text-neutral-300">
    Navigation items
  </div>
</nav>
```

### Animated Hero Section
```jsx
<section className="hero-section animate-fade-in">
  <h1 className="font-bricolage text-6xl text-primary-600 animate-slide-up">
    Summerlin West Real Estate
  </h1>
  <p className="text-xl text-neutral-600 animate-slide-up animation-delay-200">
    Your gateway to luxury living in Las Vegas
  </p>
</section>
```

## 📱 Responsive Design

The configuration maintains full responsive design support:

```jsx
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
<div className="p-4 md:p-6 lg:p-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🎨 Customization

### Adding New Colors
1. Update `tailwind.config.js` color palette
2. Add CSS custom properties in `globals.css`
3. Use in components with Tailwind classes

### Adding New Fonts
1. Import font in `app/layout.tsx`
2. Add to Tailwind config `fontFamily`
3. Use with `font-{name}` classes

### Custom Animations
1. Define keyframes in `globals.css`
2. Add to Tailwind config `animation`
3. Use with `animate-{name}` classes

This integration provides a solid foundation for building modern, responsive real estate websites with professional design and excellent user experience.
