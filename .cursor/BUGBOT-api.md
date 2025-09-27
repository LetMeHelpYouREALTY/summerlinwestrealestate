# API Code Review Rules - Summerlin West Real Estate

## Next.js API Routes

### Route Structure
- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Implement proper error handling
- Use TypeScript for request/response types
- Follow RESTful API conventions

### Request Validation
- Validate all incoming requests
- Sanitize user inputs
- Implement proper type checking
- Handle malformed requests gracefully

### Response Formatting
- Use consistent response formats
- Include proper HTTP status codes
- Provide meaningful error messages
- Implement proper CORS headers

## Security Requirements

### Data Protection
- Never expose sensitive data in responses
- Use environment variables for configuration
- Implement proper authentication
- Validate all user inputs

### Rate Limiting
- Implement rate limiting for API endpoints
- Prevent abuse and spam
- Use proper caching strategies
- Monitor API usage

## Real Estate Specific APIs

### Lead Capture
- Secure form submission handling
- Validate lead data
- Implement proper data storage
- Send confirmation emails

### Property Data
- Cache property information
- Implement proper data validation
- Handle missing data gracefully
- Provide accurate property details

### Market Reports
- Ensure data accuracy
- Implement proper data caching
- Handle data updates
- Provide real-time information

## Error Handling

### Error Responses
- Use proper HTTP status codes
- Provide meaningful error messages
- Log errors for debugging
- Handle edge cases gracefully

### Validation Errors
- Return specific validation errors
- Provide field-level error messages
- Use consistent error formats
- Help users fix input issues

## Performance Optimization

### Caching
- Implement proper caching strategies
- Use appropriate cache headers
- Cache expensive operations
- Invalidate cache when needed

### Database Queries
- Optimize database queries
- Use proper indexing
- Implement query caching
- Monitor query performance

## Monitoring & Logging

### Error Tracking
- Log all errors and exceptions
- Monitor API performance
- Track usage patterns
- Implement proper alerting

### Analytics
- Track API usage
- Monitor response times
- Log important events
- Generate usage reports

## AI Hallucination Detection

### API-Specific Hallucinations
- **Non-existent API Methods**: Flag methods that don't exist in Next.js, RealScout, or other APIs
- **Fake Response Formats**: Detect response structures that don't match actual APIs
- **Invalid HTTP Methods**: Identify HTTP methods that aren't valid for the endpoint
- **Fake Authentication**: Flag authentication methods that don't exist
- **Invented Error Codes**: Detect error codes that aren't in the actual API

### Verification Requirements
- **API Documentation**: Verify against official API documentation
- **Response Formats**: Check actual API response structures
- **HTTP Methods**: Validate against REST API standards
- **Authentication**: Verify against actual authentication methods
- **Error Handling**: Check against actual API error responses

## Common Issues to Flag

### Security Issues
- Exposed sensitive data
- Missing input validation
- Insecure authentication
- SQL injection vulnerabilities
- **AI Hallucinations**: Non-existent security methods

### Performance Issues
- Slow API responses
- Inefficient database queries
- Missing caching
- Large response payloads
- **Invalid Optimization Claims**: Performance improvements that aren't real

### Code Quality Issues
- Missing error handling
- Inconsistent response formats
- Poor type definitions
- Missing documentation
- **Unverified AI Suggestions**: Code that hasn't been tested

### Real Estate Compliance
- Insecure lead data handling
- Missing data validation
- Incomplete error responses
- Poor user experience
- **Invalid RealScout API Usage**: Methods that don't exist in the actual API
