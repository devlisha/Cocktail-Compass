#!/bin/bash

# Cocktail Compass - Vercel Deployment Script
# This script prepares and deploys the application to Vercel

set -e  # Exit on any error

echo "🍸 Cocktail Compass - Deployment Script"
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Make sure you're in the project root directory."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

print_status "Checking Node.js version..."
NODE_VERSION=$(node --version)
print_success "Node.js version: $NODE_VERSION"

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf .next
rm -rf out
npm run clean 2>/dev/null || true

# Install dependencies
print_status "Installing dependencies..."
npm ci

# Run type checking
print_status "Running type check..."
npm run typecheck

# Run linting
print_status "Running linting..."
npm run lint

# Run build
print_status "Building application..."
npm run build

print_success "Build completed successfully!"

# Ask for deployment type
echo ""
echo "Choose deployment type:"
echo "1) Preview deployment (for testing)"
echo "2) Production deployment"
echo "3) Just build (don't deploy)"

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        print_status "Deploying to preview..."
        vercel
        ;;
    2)
        print_status "Deploying to production..."
        vercel --prod
        ;;
    3)
        print_success "Build completed. Skipping deployment."
        exit 0
        ;;
    *)
        print_error "Invalid choice. Exiting."
        exit 1
        ;;
esac

print_success "Deployment completed! 🎉"
echo ""
echo "Next steps:"
echo "1. Visit your deployment URL to verify everything works"
echo "2. Test the multilingual functionality"
echo "3. Check mobile responsiveness"
echo "4. Verify search and favorites features"
echo ""
echo "Happy cocktail mixing! 🍹"
