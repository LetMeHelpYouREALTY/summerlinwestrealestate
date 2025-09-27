# Background Agents Prompts - Summerlin West Real Estate

## Performance Optimization Prompts

### Core Web Vitals Optimization
```
Optimize the Summerlin West Real Estate website for Core Web Vitals performance:

1. **LCP Optimization (Target: < 2.5s)**
   - Optimize hero images and above-the-fold content
   - Use Next.js Image component with priority loading
   - Implement proper image sizing and formats (WebP, AVIF)
   - Minimize render-blocking resources
   - Use proper preloading strategies

2. **CLS Optimization (Target: < 0.1)**
   - Reserve space for images and dynamic content
   - Use proper aspect ratios for property images
   - Avoid inserting content above existing content
   - Use proper font loading strategies
   - Implement skeleton screens for dynamic content

3. **FID Optimization (Target: < 100ms)**
   - Minimize JavaScript execution time
   - Use code splitting and lazy loading
   - Optimize third-party scripts (RealScout, Google Maps)
   - Implement proper event delegation
   - Use web workers for heavy computations

4. **TTFB Optimization (Target: < 600ms)**
   - Optimize server response times
   - Implement proper caching strategies
   - Use CDN for static assets
   - Optimize database queries
   - Implement proper error handling

Focus on the homepage, property listings, and market reports pages.
```

### Image Optimization
```
Optimize all images on the Summerlin West Real Estate website:

1. **Property Images**
   - Convert all property images to WebP format
   - Implement proper image sizing and responsive images
   - Add descriptive alt text for accessibility
   - Use Next.js Image component for all property photos
   - Implement lazy loading for below-the-fold images

2. **Hero Images**
   - Optimize hero images for fast loading
   - Use priority loading for above-the-fold images
   - Implement proper aspect ratios
   - Add meaningful alt text
   - Use appropriate image formats

3. **Community Images**
   - Optimize neighborhood and community photos
   - Add location-specific alt text
   - Implement proper image compression
   - Use responsive image sizes
   - Ensure mobile optimization

4. **Performance Targets**
   - Image file sizes < 100KB for web
   - Use WebP format when possible
   - Implement proper image caching
   - Use responsive images for different screen sizes
   - Optimize image loading strategies

Focus on the featured home slider, property galleries, and community photos.
```

### Bundle Optimization
```
Optimize the JavaScript bundle for the Summerlin West Real Estate website:

1. **Code Splitting**
   - Split large components and pages
   - Use dynamic imports for heavy libraries
   - Implement route-based code splitting
   - Split vendor and application code
   - Use proper loading strategies

2. **Tree Shaking**
   - Remove unused code and imports
   - Use ES modules for better tree shaking
   - Avoid importing entire libraries
   - Use proper import statements
   - Monitor bundle size increases

3. **Bundle Size Targets**
   - Main bundle < 250KB
   - Vendor bundle < 500KB
   - Total bundle < 1MB
   - Monitor bundle size changes
   - Implement bundle analysis

4. **Third-Party Scripts**
   - Optimize RealScout widget loading
   - Implement proper Google Maps loading
   - Optimize analytics script loading
   - Use proper script prioritization
   - Monitor script performance

Focus on the main application bundle and third-party integrations.
```

## SEO Optimization Prompts

### Technical SEO
```
Implement comprehensive technical SEO for the Summerlin West Real Estate website:

1. **Meta Tags & Headers**
   - Implement proper page titles (50-60 characters)
   - Use descriptive meta descriptions (150-160 characters)
   - Include proper Open Graph tags
   - Implement Twitter Card metadata
   - Use proper canonical URLs

2. **Structured Data (Schema.org)**
   - Implement RealEstateAgent schema for Dr. Jan Duffy
   - Use LocalBusiness schema markup
   - Include Property schema for listings
   - Add Organization schema
   - Implement FAQ schema for common questions

3. **URL Structure**
   - Use SEO-friendly URLs
   - Implement proper URL hierarchy
   - Use descriptive URL paths
   - Avoid unnecessary parameters
   - Implement proper redirects

4. **Performance SEO**
   - Optimize for Core Web Vitals
   - Implement proper caching
   - Use CDN for static assets
   - Optimize images and media
   - Minimize render-blocking resources

Focus on the homepage, property listings, and community pages.
```

### Local SEO
```
Optimize the website for local search in Summerlin West, Las Vegas:

1. **Location-Based Keywords**
   - Optimize for "Summerlin West homes for sale"
   - Include "Las Vegas real estate" keywords
   - Use neighborhood-specific terms (The Vistas, Stonebridge, etc.)
   - Include "Red Rock Canyon" and local landmarks
   - Optimize for "near me" searches

2. **Local Business Optimization**
   - Implement proper NAP (Name, Address, Phone) consistency
   - Use local business schema markup
   - Include business hours and contact information
   - Add local business categories
   - Implement Google My Business optimization

3. **Community Pages**
   - Create detailed community information pages
   - Include local amenities and features
   - Add neighborhood-specific content
   - Include school district information
   - Add commute times and local attractions

4. **Local Content**
   - Create market reports for Summerlin West
   - Include local market trends and insights
   - Add neighborhood guides and information
   - Include local events and community news
   - Optimize for local search terms

Focus on The Vistas, Stonebridge, and other Summerlin West communities.
```

### Real Estate SEO
```
Optimize the website for real estate search terms and property discovery:

1. **Property Listings**
   - Include property-specific keywords
   - Use descriptive property titles
   - Provide detailed property descriptions
   - Include neighborhood information
   - Optimize for property type searches

2. **Market Reports**
   - Include market-specific keywords
   - Use data-driven content
   - Provide market insights
   - Include local market trends
   - Optimize for market report searches

3. **Property Search**
   - Optimize search functionality
   - Implement proper filtering
   - Use location-based search
   - Include price range optimization
   - Add property feature search

4. **Lead Generation**
   - Optimize contact forms
   - Include proper CTAs
   - Implement lead capture optimization
   - Use conversion-focused design
   - Track lead generation metrics

Focus on property listings, market reports, and lead generation pages.
```

## Code Quality Optimization Prompts

### TypeScript Optimization
```
Improve TypeScript implementation across the Summerlin West Real Estate website:

1. **Type Safety**
   - Fix all TypeScript errors and warnings
   - Implement strict type checking
   - Use proper type definitions
   - Avoid `any` types
   - Implement proper interface definitions

2. **Component Types**
   - Define proper prop interfaces
   - Use generic types where appropriate
   - Implement proper event handler types
   - Use proper form types
   - Implement proper API response types

3. **Error Handling**
   - Implement proper error boundaries
   - Use proper error types
   - Implement proper validation
   - Use proper exception handling
   - Implement proper logging

4. **Performance Types**
   - Use proper memoization types
   - Implement proper callback types
   - Use proper effect types
   - Implement proper state types
   - Use proper ref types

Focus on components, hooks, and API routes.
```

### React Optimization
```
Optimize React components for performance and maintainability:

1. **Component Performance**
   - Use React.memo() for expensive components
   - Implement proper state management
   - Use useCallback and useMemo appropriately
   - Avoid unnecessary re-renders
   - Implement proper error boundaries

2. **Component Structure**
   - Use functional components with hooks
   - Implement proper prop interfaces
   - Use proper component composition
   - Implement proper component lifecycle
   - Use proper component patterns

3. **State Management**
   - Use proper state patterns
   - Implement proper state updates
   - Use proper state validation
   - Implement proper state persistence
   - Use proper state synchronization

4. **Event Handling**
   - Use proper event handlers
   - Implement proper event delegation
   - Use proper event validation
   - Implement proper event cleanup
   - Use proper event patterns

Focus on property components, forms, and interactive elements.
```

### Accessibility Optimization
```
Ensure WCAG compliance and accessibility across the website:

1. **WCAG Compliance**
   - Ensure proper color contrast ratios
   - Implement keyboard navigation
   - Use proper ARIA labels
   - Provide screen reader support
   - Implement proper focus management

2. **Semantic HTML**
   - Use proper HTML elements
   - Implement proper heading hierarchy
   - Use proper form labels
   - Implement proper navigation
   - Use proper content structure

3. **Interactive Elements**
   - Ensure proper button labels
   - Implement proper form validation
   - Use proper link text
   - Implement proper focus indicators
   - Use proper error messages

4. **Media Accessibility**
   - Provide proper alt text for images
   - Use proper video captions
   - Implement proper audio descriptions
   - Use proper media controls
   - Implement proper media alternatives

Focus on forms, navigation, and interactive components.
```

## Real Estate Specific Optimization Prompts

### Property Listings Optimization
```
Optimize property listings for better user experience and conversion:

1. **Property Display**
   - Optimize property image galleries
   - Implement proper property information display
   - Use high-quality property photos
   - Add property feature highlights
   - Implement proper property descriptions

2. **Property Search**
   - Optimize search functionality
   - Implement proper filtering options
   - Use location-based search
   - Add price range filtering
   - Implement property feature search

3. **Property Information**
   - Display accurate property details
   - Include neighborhood information
   - Add school district information
   - Include commute times
   - Add local amenities

4. **Lead Generation**
   - Optimize contact forms
   - Implement proper CTAs
   - Use conversion-focused design
   - Track user interactions
   - Implement proper follow-up

Focus on the property listings page and individual property pages.
```

### Market Reports Optimization
```
Optimize market reports for better data presentation and user engagement:

1. **Data Visualization**
   - Implement proper charts and graphs
   - Use interactive data displays
   - Add proper data labels
   - Implement proper data filtering
   - Use responsive data visualization

2. **Market Insights**
   - Provide accurate market data
   - Include trend analysis
   - Add market predictions
   - Include comparative data
   - Provide expert commentary

3. **Report Presentation**
   - Use clear and readable formatting
   - Implement proper data hierarchy
   - Add proper data sources
   - Include update timestamps
   - Use professional design

4. **User Engagement**
   - Implement proper navigation
   - Add sharing functionality
   - Include download options
   - Implement proper search
   - Add related content links

Focus on the market reports page and individual report pages.
```

### Lead Capture Optimization
```
Optimize lead capture forms and conversion processes:

1. **Form Design**
   - Implement user-friendly form layouts
   - Use proper form validation
   - Add clear error messages
   - Implement proper form flow
   - Use conversion-focused design

2. **Form Functionality**
   - Implement proper form submission
   - Use secure form handling
   - Add proper form validation
   - Implement proper error handling
   - Use proper success messages

3. **User Experience**
   - Implement proper form accessibility
   - Use proper form labels
   - Add helpful form hints
   - Implement proper form progress
   - Use proper form feedback

4. **Conversion Optimization**
   - Implement proper CTAs
   - Use conversion-focused copy
   - Add trust indicators
   - Implement proper follow-up
   - Track conversion metrics

Focus on contact forms, lead capture forms, and newsletter signup forms.
```

## Mobile Optimization Prompts

### Mobile Performance
```
Optimize the website for mobile devices and performance:

1. **Mobile Performance**
   - Ensure mobile-first responsive design
   - Optimize for mobile performance
   - Use proper viewport settings
   - Implement touch-friendly interactions
   - Test on various mobile devices

2. **Mobile Navigation**
   - Implement mobile-friendly navigation
   - Use proper mobile menu design
   - Add mobile search functionality
   - Implement proper mobile CTAs
   - Use mobile-optimized layouts

3. **Mobile Content**
   - Optimize content for mobile reading
   - Use mobile-friendly images
   - Implement proper mobile typography
   - Add mobile-specific features
   - Use mobile-optimized forms

4. **Mobile SEO**
   - Ensure mobile SEO optimization
   - Use proper mobile meta tags
   - Implement mobile-specific keywords
   - Add mobile-specific content
   - Use mobile-optimized URLs

Focus on mobile property browsing and lead generation.
```

## Security Optimization Prompts

### Security Implementation
```
Implement comprehensive security measures across the website:

1. **Input Validation**
   - Implement proper form validation
   - Sanitize user inputs
   - Validate all user data
   - Implement proper error handling
   - Use proper validation patterns

2. **Data Protection**
   - Protect sensitive user data
   - Use proper encryption
   - Implement proper access controls
   - Use secure data storage
   - Implement proper data backup

3. **Authentication**
   - Implement proper authentication
   - Use secure session management
   - Implement proper authorization
   - Use secure password handling
   - Implement proper logout functionality

4. **API Security**
   - Implement proper API authentication
   - Use secure API endpoints
   - Implement proper rate limiting
   - Use secure data transmission
   - Implement proper error handling

Focus on contact forms, lead capture, and user data handling.
```
