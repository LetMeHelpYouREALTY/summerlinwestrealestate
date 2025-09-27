# Immediate Action Plan - Summerlin West Real Estate

## Priority: High Impact, Low Effort Improvements

## 🚀 **Week 1: Technical Debt Resolution**

### **1. Font Optimization (30 minutes)**

```bash
# Remove deprecated @next/font
npm uninstall @next/font

# Update layout.tsx to use next/font
```

**File**: `app/layout.tsx`

```typescript
// Replace this:
import { Inter } from "@next/font/google";

// With this:
import { Inter } from "next/font/google";
```

### **2. Performance Optimization (1 hour)**

**File**: `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.keepingcurrentmatters.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
```

### **3. Analytics Setup (30 minutes)**

**File**: `app/layout.tsx` - Add Google Analytics

```typescript
// Add after existing Script components
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 📱 **Week 2: Mobile Experience**

### **1. Navigation Optimization (2 hours)**

**File**: `components/layout/Header.tsx`

```typescript
// Simplify navigation for mobile
const mobileNavItems = [
  { href: "/properties", label: "Homes" },
  { href: "/communities", label: "Communities" },
  { href: "/market", label: "Market" },
  { href: "/contact", label: "Contact" },
];
```

### **2. Form Optimization (1 hour)**

**File**: `components/ui/LeadCaptureForm.tsx`

- Add autocomplete attributes
- Improve mobile keyboard handling
- Add form validation feedback

### **3. Touch Target Optimization (30 minutes)**

**File**: `app/globals.css`

```css
/* Ensure minimum touch target size */
button,
a,
input[type="submit"] {
  min-height: 44px;
  min-width: 44px;
}

/* Improve mobile spacing */
@media (max-width: 768px) {
  .sectionCard {
    padding: 1.5rem;
    margin: 1rem 0;
  }
}
```

## 🎯 **Week 3: Conversion Optimization**

### **1. CTA Enhancement (1 hour)**

**File**: `app/page.tsx` - Add sticky CTA

```typescript
// Add floating CTA for mobile
const FloatingCTA = () => (
  <div className="fixed bottom-4 right-4 z-50 md:hidden">
    <Link
      href="/contact"
      className="bg-brand-600 text-white px-6 py-3 rounded-full shadow-lg"
    >
      Contact Dr. Duffy
    </Link>
  </div>
);
```

### **2. Lead Capture Optimization (2 hours)**

**File**: `components/ui/LeadCaptureForm.tsx`

```typescript
// Add progressive form fields
const formSteps = [
  { fields: ["name", "email"], title: "Get Your Market Report" },
  { fields: ["phone", "timeline"], title: "Tell Us More" },
  { fields: ["budget", "preferences"], title: "Property Preferences" },
];
```

### **3. Social Proof Enhancement (1 hour)**

**File**: `components/ui/TestimonialsSection.tsx`

- Add recent sales data
- Include client photos (with permission)
- Add trust badges and certifications

## 📊 **Week 4: Content & SEO**

### **1. Blog Content Calendar (2 hours)**

Create content plan for next 3 months:

- **Week 1**: "Summerlin West Market Update - January 2025"
- **Week 2**: "The Vistas Community Spotlight"
- **Week 3**: "Buying vs Renting in Summerlin West"
- **Week 4**: "Red Rock Canyon Views: What They're Worth"

### **2. Local SEO Enhancement (1 hour)**

**File**: `app/layout.tsx` - Add local business schema

```typescript
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy",
  image: "/images/dr-jan-duffy-headshot.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1980 Festival Plaza Dr (One Summerlin)",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89135",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.1865,
    longitude: -115.3432,
  },
  telephone: "+1-702-550-0112",
  email: "DrJanSells@SummerlinWestRealEstate.com",
  url: "https://summerlinwestrealestate.com",
  areaServed: "Summerlin West, Las Vegas, NV",
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 36.1865,
      longitude: -115.3432,
    },
    geoRadius: "5000",
  },
};
```

### **3. Internal Linking Strategy (1 hour)**

- Add related posts section to blog
- Create neighborhood cross-links
- Add "Featured Properties" to key pages

## 🔧 **Quick Wins (Can be done today)**

### **1. Page Speed (15 minutes)**

```bash
# Add to package.json scripts
"analyze": "ANALYZE=true npm run build"
```

### **2. Error Handling (30 minutes)**

**File**: `app/globals.css`

```css
/* Add loading states */
.loading {
  opacity: 0.6;
  pointer-events: none;
}

/* Add error states */
.error {
  border-color: var(--error-500);
  color: var(--error-700);
}
```

### **3. Accessibility (30 minutes)**

**File**: `app/globals.css`

```css
/* Improve focus states */
button:focus,
a:focus,
input:focus {
  outline: 2px solid var(--brand-500);
  outline-offset: 2px;
}

/* Add skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--brand-600);
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

## 📈 **Measurement Setup**

### **1. Google Analytics Events (30 minutes)**

```typescript
// Add to components
const trackEvent = (action: string, label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: "User Engagement",
      event_label: label,
    });
  }
};

// Track form submissions
trackEvent("form_submit", "lead_capture");

// Track phone clicks
trackEvent("phone_click", "contact");
```

### **2. Conversion Tracking (15 minutes)**

- Set up goals in Google Analytics
- Track form submissions
- Monitor phone call clicks
- Measure page engagement

## 🎯 **Success Metrics**

### **Week 1 Targets**

- [ ] Font warning resolved
- [ ] Page speed improved by 10%
- [ ] Analytics tracking active

### **Week 2 Targets**

- [ ] Mobile navigation simplified
- [ ] Form completion rate +15%
- [ ] Mobile bounce rate -10%

### **Week 3 Targets**

- [ ] CTA click-through rate +20%
- [ ] Lead form submissions +25%
- [ ] Phone call tracking active

### **Week 4 Targets**

- [ ] Blog traffic +30%
- [ ] Local search rankings improved
- [ ] Internal linking implemented

## 🚀 **Implementation Checklist**

### **Day 1-2: Technical**

- [ ] Fix font optimization
- [ ] Update Next.js config
- [ ] Add Google Analytics
- [ ] Test build performance

### **Day 3-4: Mobile**

- [ ] Optimize navigation
- [ ] Improve forms
- [ ] Add touch targets
- [ ] Test mobile experience

### **Day 5-7: Conversion**

- [ ] Add floating CTA
- [ ] Optimize lead forms
- [ ] Enhance social proof
- [ ] Set up tracking

### **Day 8-10: Content**

- [ ] Create content calendar
- [ ] Add local SEO schema
- [ ] Implement internal linking
- [ ] Publish first blog post

## Total Estimated Time: 10-15 hours over 2 weeks

## Expected Impact: 20-30% improvement in key metrics
