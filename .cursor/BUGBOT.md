# Summerlin West Real Estate - Bugbot Configuration

## Project Overview
This is a Next.js 15.5.4 real estate website for Dr. Jan Duffy, REALTOR® specializing in Summerlin West, Las Vegas. The site focuses on luxury homes, market reports, and lead generation.

## Technology Stack
- **Framework**: Next.js 15.5.4 with React 19.1.1
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS 4.1.13 with CSS modules
- **Deployment**: Vercel with global CDN
- **Package Manager**: pnpm
- **Forms**: React Hook Form for lead capture
- **Animations**: Framer Motion for smooth interactions
- **Icons**: React Icons library

## Code Quality Standards

### TypeScript & React
- Use strict TypeScript with proper type definitions
- Prefer functional components with React hooks
- Use proper prop interfaces and type safety
- Avoid `any` types - use proper TypeScript types
- Use React.memo() for performance optimization when appropriate

### Next.js Best Practices
- Use Next.js Image component for all images with proper alt text
- Implement proper SEO metadata for each page
- Use dynamic imports for code splitting
- Follow Next.js App Router patterns
- Use proper error boundaries

### Performance & SEO
- Optimize for Core Web Vitals (LCP < 2.5s, CLS < 0.1, FID < 100ms)
- Implement proper image optimization
- Use semantic HTML for accessibility
- Include proper meta tags and structured data
- Optimize bundle size and loading performance

### Real Estate Compliance
- Ensure fair housing compliance in all content
- Include proper real estate disclaimers
- Protect client information and privacy
- Follow real estate advertising regulations

## Security Requirements

### Data Protection
- Never expose API keys or sensitive data in client-side code
- Use environment variables for all sensitive configuration
- Implement proper input validation for forms
- Sanitize user inputs to prevent XSS attacks

### Authentication & Authorization
- Implement proper lead capture form validation
- Use secure form submission methods
- Protect against CSRF attacks
- Validate all user inputs

## AI Hallucination Detection & Prevention

### Common Hallucination Patterns
- **Non-existent API Methods**: Flag methods that don't exist in RealScout, Next.js, or other libraries
- **Fake Configuration Options**: Identify invalid configuration properties
- **Invented Component Props**: Detect props that don't exist in actual components
- **Plausible but Incorrect Code**: Flag code that looks right but is wrong

### Verification Requirements
- **API Methods**: Verify against official documentation (RealScout, Next.js, Google Maps)
- **Component Props**: Check actual component interfaces in the codebase
- **Configuration**: Validate against official configuration schemas
- **TypeScript**: Ensure all types and interfaces are properly defined
- **Runtime Testing**: Verify code works in development environment

### Hallucination Red Flags
- Methods that sound plausible but aren't in documentation
- Configuration options that seem reasonable but aren't valid
- Component props that don't match actual interfaces
- API calls that don't match the actual API structure
- Performance claims without evidence

## Code Review Focus Areas

### Critical Issues
- Security vulnerabilities (XSS, CSRF, data exposure)
- Performance bottlenecks (slow loading, large bundles)
- Accessibility violations (WCAG compliance)
- SEO issues (missing meta tags, poor structure)
- TypeScript errors and type safety issues
- **AI Hallucinations**: Non-existent methods, props, or configuration options

### Code Quality
- Unused imports and variables
- Inconsistent code formatting
- Missing error handling
- Poor component structure
- Inefficient React patterns
- **Unverified AI Suggestions**: Code that hasn't been tested or validated

### Real Estate Specific
- Missing alt text on property images
- Incomplete property descriptions
- Missing contact information
- Broken lead capture forms
- Inconsistent branding
- **Invalid RealScout API Usage**: Methods that don't exist in the actual API

## File Structure Guidelines
- Components in `/components/ui/` for reusable UI components
- Pages in `/app/` directory with Next.js App Router
- Styles using CSS modules with `.module.css` extension
- Types in `/types/` directory for TypeScript definitions
- Utils in `/lib/` directory for utility functions

## Testing Requirements
- All new components should be properly typed
- Forms should have proper validation
- Images should have descriptive alt text
- Links should be properly formatted
- Performance should be optimized

## Deployment Considerations
- All changes must pass Vercel build
- Environment variables must be properly configured
- Images must be optimized for web
- Code must be production-ready

## Common Issues to Flag
- Missing error boundaries
- Unoptimized images
- Missing alt text
- Inconsistent styling
- Poor mobile responsiveness
- Missing SEO metadata
- Insecure form handling
- Performance regressions
- **AI Hallucinations**: Non-existent API methods, props, or configuration options
- **Unverified Code**: Code that hasn't been tested in development environment
- **Invalid Imports**: Importing from packages that don't export the specified methods
- **Fake Configuration**: Configuration options that don't exist in the actual library
