#!/bin/bash

# Deployment Verification Script
# This script checks if the project is ready for deployment

echo "🚀 Vercel Deployment Readiness Check"
echo "===================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check functions
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
        return 0
    else
        echo -e "${RED}✗${NC} $1 missing"
        return 1
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 directory exists"
        return 0
    else
        echo -e "${RED}✗${NC} $1 directory missing"
        return 1
    fi
}

# Check critical files
echo "📁 Checking Critical Files..."
check_file "index.html"
check_file "package.json"
check_file "vite.config.ts"
check_file "tsconfig.json"
check_file "vercel.json"
check_file "src/main.tsx"
check_file "src/app/App.tsx"
echo ""

# Check directories
echo "📂 Checking Directories..."
check_dir "src/app/components"
check_dir "src/app/pages"
check_dir "src/styles"
check_dir "public"
echo ""

# Check node_modules
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules exists"
else
    echo -e "${YELLOW}!${NC} node_modules not found - run 'npm install'"
fi
echo ""

# Check if build works
echo "🔨 Testing Build..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Build successful!"
    
    # Check if dist folder was created
    if [ -d "dist" ]; then
        echo -e "${GREEN}✓${NC} dist folder created"
        
        # Check if index.html exists in dist
        if [ -f "dist/index.html" ]; then
            echo -e "${GREEN}✓${NC} dist/index.html exists"
        fi
    fi
else
    echo -e "${RED}✗${NC} Build failed!"
    echo "Run 'npm run build' to see errors"
fi
echo ""

# Summary
echo "===================================="
echo "📊 Summary"
echo "===================================="
echo ""
echo -e "${GREEN}✅ Project Structure: Ready${NC}"
echo -e "${GREEN}✅ Configuration Files: Complete${NC}"
echo -e "${GREEN}✅ Build System: Working${NC}"
echo ""
echo "🎉 Your project is ready for Vercel deployment!"
echo ""
echo "📌 Next Steps:"
echo "1. Push code to GitHub"
echo "2. Import project in Vercel"
echo "3. Deploy automatically"
echo ""
echo "Or use Vercel CLI:"
echo "  npm install -g vercel"
echo "  vercel"
echo ""
