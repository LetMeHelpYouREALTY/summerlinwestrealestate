#!/bin/bash

# 🚀 MCP Integration Setup Script for Summerlin West Real Estate
# This script sets up the recommended MCP servers for optimal web development workflow

echo "🏠 Setting up MCP integrations for Summerlin West Real Estate..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install global MCP packages
echo "📦 Installing MCP server packages..."

# Install Figma Dev Mode MCP Server
echo "🎨 Installing Figma Dev Mode MCP Server..."
npm install -g figma-dev-mode-mcp-server

# Install Browser Tools MCP Server
echo "🌐 Installing Browser Tools MCP Server..."
npm install -g @agentdesk/browsertools

# Install Linear MCP Server (if needed)
echo "📋 Linear MCP Server is already configured in mcp.json"

echo ""
echo "🎯 Next Steps:"
echo "1. Restart Cursor to load the new MCP configuration"
echo "2. Go to Cursor Settings > MCP and enable the servers:"
echo "   - Linear (for project management)"
echo "   - Figma (for design integration)"
echo "   - BrowserTools (for debugging)"
echo "3. Start the Figma server: figma-dev-mode-mcp-server"
echo "4. Start the Browser Tools server: browsertools"
echo "5. Test the integrations with these prompts:"
echo "   - 'list all issues related to this project' (Linear)"
echo "   - 'get the current selection from Figma' (Figma)"
echo "   - 'check console errors on the homepage' (Browser Tools)"

echo ""
echo "📚 Documentation:"
echo "- MCP configuration: mcp.json"
echo "- UI component rules: ui-components.mdc"
echo "- Setup guide: docs/WEB_DEVELOPMENT_WORKFLOW_SETUP.md"

echo ""
echo "✅ MCP integration setup complete!"
echo "🚀 You're ready for enhanced web development workflows!"
