# Background Agents Optimization Guide - Summerlin West Real Estate

## Overview
Background Agents are configured to run optimization tasks asynchronously for the Summerlin West Real Estate project. They can edit code, run tests, and implement improvements in isolated environments.

## Environment Configuration

### Base Environment
- **OS**: Ubuntu-based isolated machine
- **Package Manager**: pnpm
- **Framework**: Next.js 15.5.4 with React 19.1.1
- **Language**: TypeScript with strict checking
- **Styling**: Tailwind CSS 4.1.13

### Installation Process
1. Clone repository from GitHub
2. Run `pnpm install` to install dependencies
3. Run `pnpm run type-check` to validate TypeScript
4. Start development servers and watchers

### Running Terminals
- **Next.js Dev Server**: `pnpm run dev` - Main development server
- **TypeScript Watcher**: `pnpm run type-check --watch` - Continuous type checking
- **Biome Linter**: `pnpm run biome:check --watch` - Continuous linting

## Optimization Tasks

### Performance Optimization
- **Core Web Vitals**: Optimize LCP, CLS, FID, and TTFB
- **Image Optimization**: Implement Next.js Image component best practices
- **Bundle Optimization**: Code splitting and tree shaking
- **Caching Strategies**: Implement proper caching for static assets and API responses
- **Loading Performance**: Optimize critical rendering path and lazy loading

### SEO Optimization
- **Technical SEO**: Meta tags, structured data, and URL optimization
- **Content SEO**: Keyword optimization and content quality improvements
- **Local SEO**: Location-based optimization for Summerlin West
- **Real Estate SEO**: Property listings and market report optimization
- **Image SEO**: Alt text and image optimization

### Code Quality Optimization
- **TypeScript**: Strict type checking and proper type definitions
- **React**: Component optimization and performance improvements
- **Next.js**: App Router optimization and best practices
- **Accessibility**: WCAG compliance and screen reader support
- **Security**: Input validation and security best practices

### Real Estate Specific Optimization
- **Property Listings**: Optimize property search and display
- **Lead Capture**: Improve form performance and conversion rates
- **Market Data**: Optimize data visualization and reporting
- **Contact Forms**: Enhance user experience and security
- **Mobile Optimization**: Ensure mobile-first responsive design

## Background Agent Prompts

### Performance Optimization Prompts
```
Optimize the Summerlin West Real Estate website for Core Web Vitals:
- Improve LCP by optimizing hero images and above-the-fold content
- Reduce CLS by implementing proper image sizing and aspect ratios
- Optimize FID by minimizing JavaScript execution time
- Improve TTFB by implementing proper caching strategies
- Use Next.js Image component for all property images
- Implement code splitting for large components
- Optimize bundle size and loading performance
```

### SEO Optimization Prompts
```
Optimize the website for SEO and local search:
- Implement proper meta tags and structured data
- Optimize for "Summerlin West homes for sale" keywords
- Add RealEstateAgent and LocalBusiness schema markup
- Optimize property listing pages for search engines
- Implement proper internal linking and navigation
- Ensure mobile-first responsive design
- Optimize images with descriptive alt text
```

### Code Quality Prompts
```
Improve code quality and maintainability:
- Fix TypeScript errors and implement strict type checking
- Optimize React components for performance
- Implement proper error boundaries and error handling
- Ensure WCAG accessibility compliance
- Optimize Next.js App Router implementation
- Implement proper form validation and security
- Add comprehensive JSDoc comments
```

### Real Estate Optimization Prompts
```
Optimize for real estate business requirements:
- Improve property listing display and search functionality
- Optimize lead capture forms for conversion
- Enhance market report visualization and data presentation
- Implement proper contact information and CTAs
- Optimize for mobile property browsing
- Ensure fair housing compliance in all content
- Implement proper real estate disclaimers
```

## Security Considerations

### Data Protection
- Never expose API keys or sensitive data
- Use environment variables for configuration
- Implement proper input validation
- Protect against XSS and CSRF attacks
- Ensure secure form handling

### Privacy Mode
- Background Agents support Privacy Mode
- Code is not used for training
- Data retention is limited to agent runtime
- Isolated VM environments
- Encrypted storage for sensitive data

## Monitoring and Analytics

### Performance Monitoring
- Track Core Web Vitals improvements
- Monitor bundle size changes
- Analyze loading performance
- Track user experience metrics
- Identify optimization opportunities

### SEO Monitoring
- Monitor search ranking improvements
- Track organic traffic growth
- Analyze keyword performance
- Monitor local search visibility
- Track lead generation metrics

### Code Quality Monitoring
- Track TypeScript error reduction
- Monitor accessibility improvements
- Analyze security vulnerability fixes
- Track performance optimizations
- Monitor code maintainability

## Best Practices

### Agent Management
- Use descriptive prompts for specific tasks
- Monitor agent progress and status
- Review changes before merging
- Test optimizations thoroughly
- Document significant changes

### Optimization Strategy
- Focus on high-impact improvements first
- Prioritize Core Web Vitals optimization
- Implement SEO best practices
- Ensure mobile optimization
- Maintain code quality standards

### Real Estate Focus
- Optimize for property search and discovery
- Improve lead generation and conversion
- Enhance user experience for home buyers
- Ensure compliance with real estate regulations
- Maintain professional branding and credibility

## Common Optimization Tasks

### Performance Tasks
- Optimize image loading and compression
- Implement proper caching strategies
- Reduce bundle size and improve loading
- Optimize database queries and API responses
- Improve mobile performance and responsiveness

### SEO Tasks
- Implement structured data markup
- Optimize meta tags and descriptions
- Improve internal linking and navigation
- Optimize for local search terms
- Enhance content quality and relevance

### Code Quality Tasks
- Fix TypeScript errors and warnings
- Implement proper error handling
- Improve component structure and performance
- Ensure accessibility compliance
- Add comprehensive documentation

### Real Estate Tasks
- Optimize property listing pages
- Improve lead capture forms
- Enhance market report presentation
- Optimize contact information and CTAs
- Ensure mobile-friendly property browsing

## Troubleshooting

### Common Issues
- Agent fails to start: Check environment.json configuration
- Dependencies not installing: Verify pnpm configuration
- TypeScript errors: Check type definitions and imports
- Performance regressions: Monitor bundle size and loading times
- SEO issues: Validate meta tags and structured data

### Debugging
- Check agent logs and status
- Review terminal output for errors
- Validate environment configuration
- Test changes locally before deployment
- Monitor performance metrics after changes

## Success Metrics

### Performance Metrics
- Core Web Vitals scores (LCP < 2.5s, CLS < 0.1, FID < 100ms)
- Bundle size reduction
- Page load time improvement
- Mobile performance scores
- User experience metrics

### SEO Metrics
- Search ranking improvements
- Organic traffic growth
- Keyword performance
- Local search visibility
- Lead generation increase

### Code Quality Metrics
- TypeScript error reduction
- Accessibility score improvement
- Security vulnerability fixes
- Code maintainability index
- Performance optimization success
