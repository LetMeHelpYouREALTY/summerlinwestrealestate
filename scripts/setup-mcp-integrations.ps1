# 🚀 MCP Integration Setup Script for Summerlin West Real Estate
# This script sets up the recommended MCP servers for optimal web development workflow

Write-Host "🏠 Setting up MCP integrations for Summerlin West Real Estate..." -ForegroundColor Green

# Check if Node.js is installed
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if npm is installed
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm is not installed. Please install npm first." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Node.js and npm are installed" -ForegroundColor Green

# Install global MCP packages
Write-Host "📦 Installing MCP server packages..." -ForegroundColor Yellow

# Install Figma Dev Mode MCP Server
Write-Host "🎨 Installing Figma Dev Mode MCP Server..." -ForegroundColor Cyan
npm install -g figma-dev-mode-mcp-server

# Install Browser Tools MCP Server
Write-Host "🌐 Installing Browser Tools MCP Server..." -ForegroundColor Cyan
npm install -g @agentdesk/browsertools

# Install Linear MCP Server (if needed)
Write-Host "📋 Linear MCP Server is already configured in mcp.json" -ForegroundColor Cyan

Write-Host ""
Write-Host "🎯 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Restart Cursor to load the new MCP configuration"
Write-Host "2. Go to Cursor Settings > MCP and enable the servers:"
Write-Host "   - Linear (for project management)"
Write-Host "   - Figma (for design integration)"
Write-Host "   - BrowserTools (for debugging)"
Write-Host "3. Start the Figma server: figma-dev-mode-mcp-server"
Write-Host "4. Start the Browser Tools server: browsertools"
Write-Host "5. Test the integrations with these prompts:"
Write-Host "   - 'list all issues related to this project' (Linear)"
Write-Host "   - 'get the current selection from Figma' (Figma)"
Write-Host "   - 'check console errors on the homepage' (Browser Tools)"

Write-Host ""
Write-Host "📚 Documentation:" -ForegroundColor Yellow
Write-Host "- MCP configuration: mcp.json"
Write-Host "- UI component rules: ui-components.mdc"
Write-Host "- Setup guide: docs/WEB_DEVELOPMENT_WORKFLOW_SETUP.md"

Write-Host ""
Write-Host "✅ MCP integration setup complete!" -ForegroundColor Green
Write-Host "🚀 You're ready for enhanced web development workflows!" -ForegroundColor Green
