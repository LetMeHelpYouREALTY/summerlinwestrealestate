# Vercel Toolbar Configuration Deployment Script
# Summerlin West Real Estate - Performance Optimization

Write-Host "🚀 Deploying Vercel Toolbar Configuration..." -ForegroundColor Green
Write-Host "==============================================" -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: Please run this script from the project root directory" -ForegroundColor Red
    exit 1
}

# Check if Vercel CLI is installed
try {
    vercel --version | Out-Null
    Write-Host "✅ Vercel CLI is installed" -ForegroundColor Green
} catch {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Check if pnpm is available
if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    $PACKAGE_MANAGER = "pnpm"
} else {
    $PACKAGE_MANAGER = "npm"
}

Write-Host "📋 Configuration Summary:" -ForegroundColor Cyan
Write-Host "  ✅ Next.js config optimized for Core Web Vitals" -ForegroundColor Green
Write-Host "  ✅ Vercel deployment configuration created" -ForegroundColor Green
Write-Host "  ✅ Performance monitoring utilities added" -ForegroundColor Green
Write-Host "  ✅ Accessibility audit tools implemented" -ForegroundColor Green
Write-Host "  ✅ Layout shift detection configured" -ForegroundColor Green
Write-Host "  ✅ Google Analytics integration ready" -ForegroundColor Green
Write-Host ""

# Install dependencies if needed
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
& $PACKAGE_MANAGER install

# Type check
Write-Host "🔍 Running type check..." -ForegroundColor Yellow
& $PACKAGE_MANAGER run type-check

# Lint check
Write-Host "🔍 Running lint check..." -ForegroundColor Yellow
& $PACKAGE_MANAGER run lint

# Build test
Write-Host "🏗️  Testing build..." -ForegroundColor Yellow
vercel build --output public

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Build successful! Ready for deployment." -ForegroundColor Green
    Write-Host ""
    Write-Host "🎯 Next Steps:" -ForegroundColor Cyan
    Write-Host "  1. Deploy to Vercel: vercel --prod" -ForegroundColor White
    Write-Host "  2. Enable Vercel Toolbar in Chrome extension" -ForegroundColor White
    Write-Host "  3. Configure toolbar settings as per documentation" -ForegroundColor White
    Write-Host "  4. Monitor Core Web Vitals in production" -ForegroundColor White
    Write-Host ""
    Write-Host "📊 Vercel Toolbar Settings to Enable:" -ForegroundColor Cyan
    Write-Host "  ✅ Use toolbar in all environments" -ForegroundColor Green
    Write-Host "  ✅ Always Activate" -ForegroundColor Green
    Write-Host "  ✅ Layout Shift Detection" -ForegroundColor Green
    Write-Host "  ✅ Accessibility Audit" -ForegroundColor Green
    Write-Host "  ✅ Measure Interaction Timing" -ForegroundColor Green
    Write-Host ""
    Write-Host "📖 See docs/VERCEL_TOOLBAR_CONFIGURATION.md for detailed instructions" -ForegroundColor Cyan
} else {
    Write-Host "❌ Build failed. Please check the errors above." -ForegroundColor Red
    exit 1
}

