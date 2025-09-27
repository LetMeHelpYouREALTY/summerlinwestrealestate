#!/bin/bash

# Vercel Toolbar Configuration Deployment Script
# Summerlin West Real Estate - Performance Optimization

echo "🚀 Deploying Vercel Toolbar Configuration..."
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if pnpm is available
if command -v pnpm &> /dev/null; then
    PACKAGE_MANAGER="pnpm"
else
    PACKAGE_MANAGER="npm"
fi

echo "📋 Configuration Summary:"
echo "  ✅ Next.js config optimized for Core Web Vitals"
echo "  ✅ Vercel deployment configuration created"
echo "  ✅ Performance monitoring utilities added"
echo "  ✅ Accessibility audit tools implemented"
echo "  ✅ Layout shift detection configured"
echo "  ✅ Google Analytics integration ready"
echo ""

# Install dependencies if needed
echo "📦 Installing dependencies..."
$PACKAGE_MANAGER install

# Type check
echo "🔍 Running type check..."
$PACKAGE_MANAGER run type-check

# Lint check
echo "🔍 Running lint check..."
$PACKAGE_MANAGER run lint

# Build test
echo "🏗️  Testing build..."
vercel build --output public

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful! Ready for deployment."
    echo ""
    echo "🎯 Next Steps:"
    echo "  1. Deploy to Vercel: vercel --prod"
    echo "  2. Enable Vercel Toolbar in Chrome extension"
    echo "  3. Configure toolbar settings as per documentation"
    echo "  4. Monitor Core Web Vitals in production"
    echo ""
    echo "📊 Vercel Toolbar Settings to Enable:"
    echo "  ✅ Use toolbar in all environments"
    echo "  ✅ Always Activate"
    echo "  ✅ Layout Shift Detection"
    echo "  ✅ Accessibility Audit"
    echo "  ✅ Measure Interaction Timing"
    echo ""
    echo "📖 See docs/VERCEL_TOOLBAR_CONFIGURATION.md for detailed instructions"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

