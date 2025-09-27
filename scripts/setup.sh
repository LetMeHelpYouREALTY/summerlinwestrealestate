#!/bin/bash

# 1. Clone your project template
if [ -z "$1" ]; then
  echo "Usage: ./scripts/setup.sh <repo-url>"
  exit 1
fi
REPO_URL="$1"
REPO_NAME=$(basename "$REPO_URL" .git)

echo "Cloning repository: $REPO_URL"
git clone "$REPO_URL"
cd "$REPO_NAME" || exit 1

# 2. Open in Cursor (if installed)
if command -v cursor &> /dev/null; then
  echo "Opening project in Cursor..."
  cursor . &
else
  echo "Cursor is not installed or not in PATH. Please open the project manually."
fi

# 3. Install dependencies (using pnpm)
if command -v pnpm &> /dev/null; then
  echo "Installing dependencies with pnpm..."
  pnpm install
else
  echo "pnpm is not installed. Please install pnpm or use npm/yarn manually."
fi

# 4. Configure environment
if [ -f .env.example ]; then
  cp .env.example .env.local
  echo "Copied .env.example to .env.local. Please add your Supabase, MLS API keys, and other secrets to .env.local."
else
  echo ".env.example not found. Please create your .env.local manually."
fi

echo "Setup complete!" 