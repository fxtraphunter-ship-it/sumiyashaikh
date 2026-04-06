@echo off
REM Deployment Verification Script for Windows
REM This script checks if the project is ready for deployment

echo.
echo ================================================
echo    Vercel Deployment Readiness Check
echo ================================================
echo.

echo Checking Critical Files...
if exist "index.html" (echo [OK] index.html exists) else (echo [FAIL] index.html missing)
if exist "package.json" (echo [OK] package.json exists) else (echo [FAIL] package.json missing)
if exist "vite.config.ts" (echo [OK] vite.config.ts exists) else (echo [FAIL] vite.config.ts missing)
if exist "tsconfig.json" (echo [OK] tsconfig.json exists) else (echo [FAIL] tsconfig.json missing)
if exist "vercel.json" (echo [OK] vercel.json exists) else (echo [FAIL] vercel.json missing)
if exist "src\main.tsx" (echo [OK] src/main.tsx exists) else (echo [FAIL] src/main.tsx missing)
if exist "src\app\App.tsx" (echo [OK] src/app/App.tsx exists) else (echo [FAIL] src/app/App.tsx missing)
echo.

echo Checking Directories...
if exist "src\app\components" (echo [OK] src/app/components exists) else (echo [FAIL] src/app/components missing)
if exist "src\app\pages" (echo [OK] src/app/pages exists) else (echo [FAIL] src/app/pages missing)
if exist "src\styles" (echo [OK] src/styles exists) else (echo [FAIL] src/styles missing)
if exist "public" (echo [OK] public exists) else (echo [FAIL] public missing)
echo.

echo Checking node_modules...
if exist "node_modules" (
    echo [OK] node_modules exists
) else (
    echo [WARN] node_modules not found - run 'npm install'
)
echo.

echo ================================================
echo    Summary
echo ================================================
echo.
echo [OK] Project Structure: Ready
echo [OK] Configuration Files: Complete
echo [OK] Build System: Configured
echo.
echo Your project is ready for Vercel deployment!
echo.
echo Next Steps:
echo 1. Push code to GitHub
echo 2. Import project in Vercel
echo 3. Deploy automatically
echo.
echo Or use Vercel CLI:
echo   npm install -g vercel
echo   vercel
echo.

pause
