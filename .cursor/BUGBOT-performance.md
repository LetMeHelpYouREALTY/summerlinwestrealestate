# Performance Optimization Rules - Summerlin West Real Estate

## Core Web Vitals Optimization

### LCP (Largest Contentful Paint) - Target: < 2.5s
- Optimize hero images and above-the-fold content
- Use Next.js Image component with priority loading
- Implement proper image sizing and formats
- Minimize render-blocking resources
- Use proper preloading strategies

### CLS (Cumulative Layout Shift) - Target: < 0.1
- Reserve space for images and dynamic content
- Use proper aspect ratios for images
- Avoid inserting content above existing content
- Use proper font loading strategies
- Implement skeleton screens for dynamic content

### FID (First Input Delay) - Target: < 100ms
- Minimize JavaScript execution time
- Use code splitting and lazy loading
- Optimize third-party scripts
- Implement proper event delegation
- Use web workers for heavy computations

### TTFB (Time to First Byte) - Target: < 600ms
- Optimize server response times
- Implement proper caching strategies
- Use CDN for static assets
- Optimize database queries
- Implement proper error handling

## Image Optimization

### Next.js Image Component
- Use Next.js Image component for all images
- Implement proper sizing and responsive images
- Use priority loading for above-the-fold images
- Implement proper lazy loading
- Use appropriate image formats (WebP, AVIF)

### Property Images
- Optimize property gallery images
- Use proper aspect ratios
- Implement image compression
- Provide multiple image sizes
- Use proper alt text for accessibility

### Performance Targets
- Image file sizes < 100KB for web
- Use WebP format when possible
- Implement proper image caching
- Use responsive images for different screen sizes
- Optimize image loading strategies

## Bundle Optimization

### Code Splitting
- Split large components and pages
- Use dynamic imports for heavy libraries
- Implement route-based code splitting
- Split vendor and application code
- Use proper loading strategies

### Tree Shaking
- Remove unused code and imports
- Use ES modules for better tree shaking
- Avoid importing entire libraries
- Use proper import statements
- Monitor bundle size increases

### Bundle Size Targets
- Main bundle < 250KB
- Vendor bundle < 500KB
- Total bundle < 1MB
- Monitor bundle size changes
- Implement bundle analysis

## Caching Strategies

### Static Assets
- Use proper cache headers for static assets
- Implement long-term caching for images
- Use versioning for cache busting
- Implement proper CDN caching
- Monitor cache hit rates

### API Responses
- Cache API responses appropriately
- Use proper cache invalidation
- Implement client-side caching
- Use service workers for offline caching
- Monitor API performance

### Database Queries
- Implement proper query caching
- Use database connection pooling
- Optimize database indexes
- Monitor query performance
- Implement proper error handling

## Loading Performance

### Critical Rendering Path
- Minimize render-blocking resources
- Use proper resource hints
- Implement critical CSS inlining
- Optimize font loading
- Use proper preloading strategies

### Lazy Loading
- Lazy load images below the fold
- Implement component lazy loading
- Use intersection observer for lazy loading
- Implement proper loading states
- Use skeleton screens for better UX

### Preloading
- Preload critical resources
- Use proper preload hints
- Implement strategic preloading
- Monitor preload effectiveness
- Use proper preload priorities

## Third-Party Scripts

### Script Optimization
- Minimize third-party script impact
- Use proper script loading strategies
- Implement script deferring
- Monitor third-party performance
- Use proper error handling

### Real Estate Scripts
- Optimize RealScout widget loading
- Implement proper Google Maps loading
- Optimize analytics script loading
- Use proper script prioritization
- Monitor script performance

## Mobile Performance

### Mobile Optimization
- Ensure mobile-first responsive design
- Optimize for mobile performance
- Use proper viewport settings
- Implement touch-friendly interactions
- Test on various mobile devices

### Mobile Performance Targets
- Mobile LCP < 3.0s
- Mobile CLS < 0.1
- Mobile FID < 100ms
- Mobile bundle size < 200KB
- Mobile image optimization

## Performance Monitoring

### Real User Monitoring
- Track Core Web Vitals
- Monitor page load times
- Analyze user behavior
- Track performance metrics
- Identify optimization opportunities

### Synthetic Monitoring
- Use performance testing tools
- Monitor performance regressions
- Test on various devices
- Monitor performance trends
- Implement performance alerts

## Common Performance Issues to Flag

### Critical Issues
- Bundle size > 1MB
- LCP > 3.0s
- CLS > 0.1
- FID > 100ms
- Unoptimized images

### Optimization Opportunities
- Missing image optimization
- Inefficient code splitting
- Poor caching strategies
- Slow API responses
- Inefficient re-renders

### Real Estate Specific
- Large property image galleries
- Slow property search
- Inefficient lead capture forms
- Poor mobile performance
- Slow market data loading

## Performance Best Practices

### Development
- Use performance profiling tools
- Monitor bundle size during development
- Implement proper error handling
- Use performance testing
- Optimize for production builds

### Production
- Monitor performance metrics
- Implement proper caching
- Use CDN for static assets
- Optimize database queries
- Monitor performance regressions

### Real Estate
- Optimize property image loading
- Implement efficient property search
- Optimize lead capture performance
- Ensure mobile optimization
- Monitor conversion rates
