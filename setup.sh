#!/bin/bash

# Cocktail Compass - Development Setup Script
# This script sets up the development environment

set -e

echo "🍸 Welcome to Cocktail Compass Development Setup!"
echo "================================================="

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check Node.js version
print_status "Checking Node.js version..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    print_success "Node.js found: $NODE_VERSION"
    
    # Extract major version number
    MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
    if [ "$MAJOR_VERSION" -lt 20 ]; then
        print_warning "Node.js version 20+ is recommended. Current: $NODE_VERSION"
        echo "Please update Node.js: https://nodejs.org/"
    fi
else
    print_warning "Node.js not found. Please install Node.js 20+: https://nodejs.org/"
    exit 1
fi

# Check npm
print_status "Checking npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    print_success "npm found: $NPM_VERSION"
else
    print_warning "npm not found. Please install npm."
    exit 1
fi

# Install dependencies
print_status "Installing dependencies..."
npm install

# Setup environment file
if [ ! -f ".env.local" ]; then
    print_status "Setting up environment file..."
    cp .env.example .env.local
    print_success "Created .env.local from .env.example"
    print_warning "Please edit .env.local with your actual values if needed"
else
    print_success ".env.local already exists"
fi

# Run type check
print_status "Running type check..."
npm run typecheck

# Run linting
print_status "Running linting..."
npm run lint

print_success "Setup completed successfully! 🎉"
echo ""
echo "Available commands:"
echo "  npm run dev          # Start development server"
echo "  npm run dev:turbo    # Start with Turbopack (faster)"
echo "  npm run build        # Build for production"
echo "  npm run typecheck    # Check TypeScript"
echo "  npm run lint         # Run ESLint"
echo "  ./deploy.sh          # Deploy to Vercel"
echo ""
echo "To start developing:"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
echo "Happy coding! 🚀"
