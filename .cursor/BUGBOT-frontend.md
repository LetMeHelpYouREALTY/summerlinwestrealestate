# Frontend Code Review Rules - Summerlin West Real Estate

## React Component Standards

### Component Structure
- Use functional components with TypeScript
- Define proper prop interfaces
- Use React.memo() for performance optimization
- Implement proper error boundaries
- Use proper key props for lists

### State Management
- Use React hooks (useState, useEffect, etc.)
- Avoid prop drilling - use context when needed
- Implement proper state updates
- Use useCallback and useMemo for performance

### Event Handling
- Use proper event handlers with TypeScript
- Implement proper form validation
- Handle loading and error states
- Use proper accessibility attributes

## Styling Guidelines

### CSS Modules
- Use CSS modules with BEM methodology
- Avoid inline styles
- Use consistent naming conventions
- Implement responsive design patterns

### Tailwind CSS
- Use Tailwind utility classes
- Implement consistent spacing and typography
- Use proper color schemes
- Ensure mobile-first responsive design

## Performance Optimization

### Image Optimization
- Use Next.js Image component
- Provide proper alt text for accessibility
- Optimize image sizes and formats
- Use proper loading strategies

### Code Splitting
- Use dynamic imports for large components
- Implement proper lazy loading
- Optimize bundle size
- Use proper loading states

## Accessibility Requirements

### WCAG Compliance
- Use semantic HTML elements
- Implement proper ARIA labels
- Ensure keyboard navigation
- Provide proper focus management
- Use sufficient color contrast

### Screen Reader Support
- Provide descriptive alt text
- Use proper heading hierarchy
- Implement skip links
- Use proper form labels

## Real Estate Specific Requirements

### Property Listings
- Display property information clearly
- Use high-quality images
- Provide accurate property details
- Include proper contact information

### Lead Capture
- Implement secure form handling
- Validate all form inputs
- Provide clear error messages
- Use proper form accessibility

### Market Data
- Display accurate market information
- Use proper data visualization
- Implement proper data updates
- Ensure data accuracy

## AI Hallucination Detection

### Frontend-Specific Hallucinations
- **Non-existent React Hooks**: Flag hooks that don't exist in React
- **Fake Component Props**: Detect props that aren't in actual component interfaces
- **Invalid CSS Properties**: Identify CSS properties that don't exist
- **Fake Event Handlers**: Flag event handlers that aren't valid
- **Invented State Management**: Detect state management patterns that don't exist

### Verification Requirements
- **Component Props**: Check actual component interfaces in the codebase
- **React Hooks**: Verify against official React documentation
- **CSS Properties**: Validate against CSS specification
- **Event Handlers**: Check against DOM event documentation
- **State Management**: Verify against actual state management libraries

## Common Issues to Flag

### Performance Issues
- Large bundle sizes
- Unoptimized images
- Inefficient re-renders
- Missing code splitting
- **AI Hallucinations**: Non-existent optimization methods

### Accessibility Issues
- Missing alt text
- Poor color contrast
- Missing ARIA labels
- Inaccessible forms
- **Invalid ARIA Attributes**: ARIA attributes that don't exist

### Code Quality Issues
- Unused imports
- Missing error handling
- Inconsistent styling
- Poor component structure
- **Unverified AI Suggestions**: Code that hasn't been tested

### Real Estate Compliance
- Missing property information
- Incomplete contact details
- Broken lead capture forms
- Inconsistent branding
- **Invalid Real Estate Components**: Components that don't exist in the codebase
