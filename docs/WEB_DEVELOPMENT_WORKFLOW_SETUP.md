# 🚀 Web Development Workflow Setup Guide

## **Overview**
This guide sets up Cursor for optimal web development workflows with tight feedback loops, integrating project management, design, and browser tools for your Summerlin West Real Estate website.

## **🔧 MCP Server Setup**

### **1. Linear Integration (Project Management)**
```bash
# MCP configuration is already set up in mcp.json
# To enable:
# 1. Go to MCP settings in Cursor
# 2. Enable Linear server
# 3. Authorize with Linear when prompted
```

**Usage Examples:**
- `list all issues related to this project`
- `create a new issue for homepage redesign`
- `update issue status for property listing feature`

### **2. Figma Integration (Design System)**
```bash
# Install Figma MCP server locally
npm install -g figma-dev-mode-mcp-server

# Start the server
figma-dev-mode-mcp-server

# Server runs on http://127.0.0.1:3845/sse
```

**Usage Examples:**
- `get the current selection from Figma`
- `export design tokens for the property card component`
- `sync color palette from Figma design system`

### **3. Browser Tools Integration (Debugging)**
```bash
# Install browser tools MCP server
npm install -g @agentdesk/browsertools

# Start the server
browsertools
```

**Usage Examples:**
- `check console errors on the homepage`
- `monitor network requests for property data`
- `capture performance metrics for Core Web Vitals`

## **🎨 Design System Integration**

### **Component Reuse Rules**
The `ui-components.mdc` file enforces:
- **Reuse existing components** from `/components/ui/`
- **Maintain real estate branding** for Dr. Janet Duffy
- **Ensure compliance** with fair housing laws
- **Optimize for SEO** and Core Web Vitals

### **Real Estate Specific Components**
- **Property Cards**: Reuse for all property listings
- **Contact Forms**: Consistent lead capture across site
- **Image Galleries**: Property photo displays
- **Maps**: Location and community displays
- **Market Data**: Visualization components

## **🔄 Development Workflow**

### **Phase 1: Planning & Design**
1. **Linear**: Create issues for new features
2. **Figma**: Review designs and extract design tokens
3. **Chat**: Plan implementation approach

### **Phase 2: Development**
1. **Inline Edit**: Make surgical changes to existing code
2. **Tab**: Use for code completion and suggestions
3. **Component Reuse**: Follow ui-components.mdc rules

### **Phase 3: Testing & Debugging**
1. **Browser Tools**: Monitor console and network
2. **Performance**: Check Core Web Vitals
3. **Accessibility**: Validate WCAG compliance

### **Phase 4: Deployment**
1. **Vercel CLI**: Use `vercel build` for production
2. **Monitoring**: Track performance metrics
3. **Iteration**: Update Linear issues based on results

## **📊 Real Estate Specific Workflows**

### **Property Listing Development**
```
Linear Issue → Figma Design → Component Development → Browser Testing → Deployment
```

### **Market Report Updates**
```
Data Analysis → Visualization Design → Component Implementation → Performance Check → Publish
```

### **SEO Optimization**
```
Content Audit → Design Updates → Technical Implementation → Performance Testing → Launch
```

## **🛠️ Quick Commands**

### **Development**
```bash
# Start development server
vercel dev

# Type checking
pnpm type-check

# Linting and formatting
pnpm biome:fix

# Build for production
vercel build
```

### **MCP Server Management**
```bash
# Check MCP server status
cursor mcp status

# Restart MCP servers
cursor mcp restart

# View MCP logs
cursor mcp logs
```

## **🎯 Best Practices**

### **Component Development**
- **Always reuse** existing components first
- **Follow TypeScript** strict typing
- **Use CSS modules** with BEM methodology
- **Include accessibility** features
- **Optimize for performance**

### **Real Estate Compliance**
- **Fair Housing**: Ensure all components comply
- **Lead Capture**: Secure and compliant forms
- **Data Protection**: Protect client information
- **Licensing**: Include proper license information

### **SEO & Performance**
- **Core Web Vitals**: LCP < 2.5s, CLS < 0.1, FID < 100ms
- **Image Optimization**: Use Next.js Image component
- **Mobile-First**: Responsive design priority
- **Structured Data**: JSON-LD for real estate schema

## **🚨 Troubleshooting**

### **MCP Server Issues**
- Check server status: `cursor mcp status`
- Restart servers: `cursor mcp restart`
- Check logs: `cursor mcp logs`

### **Build Issues**
- Use Vercel CLI: `vercel build`
- Check memory: `NODE_OPTIONS='--max-old-space-size=4096'`
- Debug logs: `vercel logs`

### **Component Issues**
- Check ui-components.mdc rules
- Verify TypeScript types
- Test across screen sizes
- Validate accessibility

## **📈 Success Metrics**

### **Development Velocity**
- **Faster iterations** with MCP integrations
- **Reduced context switching** between tools
- **Consistent component reuse**
- **Improved code quality**

### **Real Estate Performance**
- **Better SEO rankings** for property searches
- **Higher conversion rates** from lead forms
- **Improved user experience** on mobile
- **Faster page load times**

## **🔄 Continuous Improvement**

### **Weekly Reviews**
- **MCP server performance**
- **Component library growth**
- **Development workflow efficiency**
- **Real estate market trends**

### **Monthly Updates**
- **Design system evolution**
- **Component library expansion**
- **Performance optimization**
- **SEO strategy refinement**

---

**Remember**: This workflow is designed to keep you in flow state while maintaining high-quality, compliant real estate website development. Use Cursor as a co-pilot, not an autopilot, to enhance your decision-making and development speed.
