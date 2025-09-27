# Bugbot Optimization Rules - Summerlin West Real Estate

## Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FID (First Input Delay)**: < 100ms
- **TTFB (Time to First Byte)**: < 600ms

### Image Optimization
- Use Next.js Image component for all images
- Implement proper image sizing and formats (WebP, AVIF)
- Lazy load images below the fold
- Provide proper alt text for accessibility
- Optimize image compression without quality loss

### Bundle Optimization
- Code split large components and pages
- Use dynamic imports for heavy libraries
- Implement proper tree shaking
- Monitor bundle size increases
- Use proper caching strategies

### Loading Performance
- Implement proper loading states
- Use skeleton screens for better UX
- Optimize critical rendering path
- Minimize render-blocking resources
- Use proper preloading strategies

## SEO Optimization

### Technical SEO
- Implement proper meta tags and structured data
- Optimize page titles and descriptions
- Use proper heading hierarchy (H1, H2, H3)
- Implement breadcrumb navigation
- Ensure proper URL structure

### Content Optimization
- Include relevant keywords naturally
- Use proper internal linking
- Implement proper schema markup
- Provide unique, valuable content
- Optimize for local search terms

### Real Estate SEO
- Include property-specific keywords
- Use location-based optimization
- Implement local business schema
- Optimize for "homes for sale" searches
- Include neighborhood-specific content

## Real Estate Specific Optimizations

### Property Listings
- Optimize property image galleries
- Implement proper property search functionality
- Use accurate property data and descriptions
- Include proper contact information
- Implement lead capture optimization

### Market Data
- Cache market reports and data
- Implement real-time data updates
- Optimize data visualization
- Ensure data accuracy and freshness
- Implement proper data validation

### Lead Generation
- Optimize form performance and UX
- Implement proper form validation
- Use secure form submission
- Implement proper error handling
- Track conversion rates

## Code Quality Optimizations

### TypeScript Optimization
- Use strict type checking
- Implement proper type definitions
- Avoid `any` types
- Use proper interface definitions
- Implement proper error handling

### React Optimization
- Use React.memo() for performance
- Implement proper state management
- Use useCallback and useMemo appropriately
- Avoid unnecessary re-renders
- Implement proper error boundaries

### Next.js Optimization
- Use proper App Router patterns
- Implement proper caching strategies
- Use static generation where possible
- Optimize API routes
- Implement proper error handling

## Accessibility Optimization

### WCAG Compliance
- Ensure proper color contrast ratios
- Implement keyboard navigation
- Use proper ARIA labels
- Provide screen reader support
- Implement proper focus management

### Mobile Optimization
- Ensure mobile-first responsive design
- Optimize for touch interactions
- Implement proper viewport settings
- Test on various devices
- Optimize mobile performance

## Security Optimization

### Data Protection
- Implement proper input validation
- Use secure form handling
- Protect against XSS and CSRF
- Implement proper authentication
- Use environment variables for sensitive data

### Performance Security
- Implement proper rate limiting
- Use secure headers
- Implement proper CORS policies
- Monitor for security vulnerabilities
- Use proper error handling

## Monitoring & Analytics

### Performance Monitoring
- Track Core Web Vitals
- Monitor page load times
- Analyze user behavior
- Track conversion rates
- Identify optimization opportunities

### SEO Monitoring
- Monitor search rankings
- Track organic traffic
- Analyze keyword performance
- Monitor local search visibility
- Track lead generation metrics

## Common Optimization Issues to Flag

### Performance Issues
- Large bundle sizes (> 250KB)
- Unoptimized images
- Slow API responses
- Poor caching strategies
- Inefficient re-renders

### SEO Issues
- Missing meta tags
- Poor page structure
- Duplicate content
- Missing alt text
- Poor internal linking

### Real Estate Issues
- Incomplete property information
- Poor image quality
- Missing contact details
- Broken lead capture forms
- Inconsistent branding

### Accessibility Issues
- Poor color contrast
- Missing ARIA labels
- Inaccessible forms
- Poor keyboard navigation
- Missing alt text

## Optimization Best Practices

### Performance
- Implement proper caching
- Use CDN for static assets
- Optimize database queries
- Implement proper error handling
- Monitor performance metrics

### SEO
- Create valuable, original content
- Update content regularly
- Implement proper schema markup
- Optimize for local search
- Monitor search performance

### Real Estate
- Provide accurate property data
- Use high-quality images
- Implement proper lead capture
- Ensure mobile optimization
- Monitor conversion rates

## Automated Optimization Checks

### Performance Checks
- Bundle size analysis
- Image optimization verification
- Loading performance testing
- Core Web Vitals monitoring
- Caching strategy validation

### SEO Checks
- Meta tag validation
- Schema markup verification
- Content quality assessment
- Internal linking analysis
- Local SEO optimization

### Real Estate Checks
- Property data completeness
- Image quality assessment
- Lead capture functionality
- Contact information accuracy
- Branding consistency

### Accessibility Checks
- WCAG compliance testing
- Keyboard navigation testing
- Screen reader compatibility
- Color contrast validation
- Focus management verification
