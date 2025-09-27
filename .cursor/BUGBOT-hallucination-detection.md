# AI Hallucination Detection Rules - Summerlin West Real Estate

## Overview
This document provides specific rules for detecting and preventing AI hallucinations in the Summerlin West Real Estate project. AI hallucinations occur when AI models generate plausible-sounding but incorrect information.

## Common Hallucination Patterns

### 1. Non-existent API Methods
```typescript
// AI might suggest:
import { PropertySearch } from "realscout";
const results = PropertySearch.findByLocation("Summerlin West");

// Reality: Check RealScout documentation for actual API methods
// Flag: Method doesn't exist in RealScout API
```

### 2. Fake Configuration Options
```json
// AI might suggest:
{
  "next": {
    "realEstate": {
      "autoOptimize": true,
      "propertyCache": "smart"
    }
  }
}
// Reality: These aren't valid Next.js options
// Flag: Invalid configuration properties
```

### 3. Invented Component Props
```tsx
// AI might suggest:
<PropertyCard 
  autoOptimize={true}
  smartCache="enabled"
  marketInsights={true}
/>

// Reality: Check actual component props in the codebase
// Flag: Props don't exist in PropertyCard component
```

### 4. Plausible but Incorrect Code
```typescript
// AI might suggest:
const debouncedSearch = useDebounce(searchTerm, 300);
// Reality: useDebounce doesn't exist in React
// Flag: Non-existent React hook
```

## Verification Requirements

### API Methods
- **RealScout API**: Verify against official RealScout documentation
- **Next.js API**: Check Next.js official documentation
- **Google Maps API**: Validate against Google Maps documentation
- **React Hooks**: Verify against React official documentation
- **TypeScript**: Check TypeScript language specification

### Component Props
- **PropertyCard**: Check actual props in `/components/ui/PropertyCard.tsx`
- **RealScoutWidget**: Verify props in `/components/ui/RealScoutWidget.tsx`
- **LeadCaptureForm**: Check props in `/components/ui/LeadCaptureForm.tsx`
- **Header**: Verify props in `/components/layout/Header.tsx`
- **Footer**: Check props in `/components/layout/Footer.tsx`

### Configuration Options
- **Next.js Config**: Validate against Next.js configuration schema
- **Package.json**: Check against npm package.json specification
- **TypeScript Config**: Verify against TypeScript configuration schema
- **Tailwind Config**: Check against Tailwind CSS configuration
- **Biome Config**: Validate against Biome configuration schema

### CSS Properties
- **Tailwind Classes**: Verify against Tailwind CSS documentation
- **CSS Modules**: Check against CSS specification
- **Custom Properties**: Validate against CSS custom properties spec
- **Media Queries**: Check against CSS media queries specification
- **Flexbox/Grid**: Verify against CSS layout specifications

## Hallucination Red Flags

### 1. Methods That Sound Plausible
- Methods that follow common naming patterns
- Methods that seem logical for the use case
- Methods that match other similar APIs
- Methods that sound like they should exist

### 2. Configuration Options That Seem Reasonable
- Options that follow common configuration patterns
- Options that seem logical for the framework
- Options that match other similar configurations
- Options that sound like they should exist

### 3. Component Props That Don't Match Interfaces
- Props that seem logical for the component
- Props that follow common naming patterns
- Props that match other similar components
- Props that sound like they should exist

### 4. Performance Claims Without Evidence
- Claims about performance improvements
- Claims about optimization benefits
- Claims about speed improvements
- Claims about bundle size reductions

## Real Estate Specific Hallucinations

### Property Data
- **Non-existent Property Fields**: Fields that don't exist in property data
- **Fake Market Data**: Market data that doesn't match actual sources
- **Invalid Location Data**: Location information that's incorrect
- **Fake Property Features**: Features that don't exist in property listings

### RealScout Integration
- **Non-existent RealScout Methods**: Methods that don't exist in RealScout API
- **Fake RealScout Props**: Props that don't exist in RealScout components
- **Invalid RealScout Configuration**: Configuration that doesn't match RealScout
- **Fake RealScout Events**: Events that don't exist in RealScout

### Market Reports
- **Non-existent Market Data**: Market data that doesn't exist
- **Fake Market Trends**: Trends that aren't based on real data
- **Invalid Market Metrics**: Metrics that don't exist in market data
- **Fake Market Predictions**: Predictions that aren't based on real data

## Detection Strategies

### 1. Documentation Verification
- Always check official documentation
- Verify against multiple sources
- Cross-reference with actual code
- Test in development environment

### 2. Codebase Analysis
- Check existing implementations
- Look for similar patterns
- Verify component interfaces
- Check utility functions

### 3. Runtime Testing
- Test in development environment
- Check browser console for errors
- Verify TypeScript compilation
- Test actual functionality

### 4. Pattern Recognition
- Look for common hallucination patterns
- Check for plausible but incorrect code
- Verify naming conventions
- Check for consistency

## Prevention Measures

### 1. Strict TypeScript
- Use strict type checking
- Define proper interfaces
- Avoid `any` types
- Use proper type definitions

### 2. Development Tools
- Use TypeScript compiler
- Use ESLint and Biome
- Use development server
- Use browser developer tools

### 3. Testing
- Test in development environment
- Check for runtime errors
- Verify functionality
- Test on different devices

### 4. Documentation
- Maintain up-to-date documentation
- Document component props
- Document API methods
- Document configuration options

## Common Hallucination Examples

### React Hooks
```typescript
// AI might suggest:
const debouncedValue = useDebounce(value, 300);
const throttledCallback = useThrottle(callback, 100);
const previousValue = usePrevious(value);

// Reality: These hooks don't exist in React
// Flag: Non-existent React hooks
```

### Next.js Configuration
```javascript
// AI might suggest:
const nextConfig = {
  experimental: {
    realEstate: {
      autoOptimize: true,
      propertyCache: "smart"
    }
  }
};

// Reality: These aren't valid Next.js options
// Flag: Invalid Next.js configuration
```

### CSS Properties
```css
/* AI might suggest: */
.property-card {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  property-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Reality: property-shadow doesn't exist */
/* Flag: Non-existent CSS property */
```

### API Methods
```typescript
// AI might suggest:
const properties = await RealScout.search({
  location: "Summerlin West",
  priceRange: [500000, 2000000],
  autoOptimize: true
});

// Reality: autoOptimize doesn't exist in RealScout API
// Flag: Non-existent API method
```

## Verification Checklist

### Before Implementing AI Suggestions
- [ ] Check if API methods exist in documentation
- [ ] Verify component props in the codebase
- [ ] Test configuration changes in development
- [ ] Validate TypeScript types and interfaces
- [ ] Check for existing similar implementations

### After Implementation
- [ ] Run `pnpm run type-check` for TypeScript errors
- [ ] Test functionality in development environment
- [ ] Check browser console for runtime errors
- [ ] Verify performance improvements
- [ ] Test on mobile devices

## Best Practices

### 1. Always Verify
- Don't trust AI suggestions blindly
- Always check documentation
- Test in development environment
- Verify against actual code

### 2. Use Development Tools
- Use TypeScript strict mode
- Use ESLint and Biome
- Use development server
- Use browser developer tools

### 3. Maintain Documentation
- Keep documentation up to date
- Document component props
- Document API methods
- Document configuration options

### 4. Test Thoroughly
- Test in development environment
- Check for runtime errors
- Verify functionality
- Test on different devices

## Conclusion

AI hallucinations are a real concern when working with AI tools. By following these rules and verification strategies, you can prevent hallucinations from affecting your Summerlin West Real Estate project. Always verify AI suggestions against official documentation and test them in your development environment before implementing them in production.
