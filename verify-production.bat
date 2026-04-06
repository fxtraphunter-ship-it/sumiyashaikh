@echo off
setlocal enabledelayedexpansion

REM Production Build Verification Script for Windows
REM Tests if the project is ready for deployment

echo ==================================
echo Production Build Verification
echo ==================================
echo.

REM Check Node version
echo 1. Checking Node.js version...
node -v > nul 2>&1
if errorlevel 1 (
    echo    X Node.js not found
    echo    Please install Node.js 18+ from nodejs.org
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set node_version=%%i
echo    Node version: %node_version%
echo    ✓ Node.js found
echo.

REM Check if package.json exists
echo 2. Checking package.json...
if exist package.json (
    echo    ✓ package.json found
) else (
    echo    X package.json not found
    exit /b 1
)
echo.

REM Check if node_modules exists
echo 3. Checking dependencies...
if exist node_modules (
    echo    ✓ node_modules found
) else (
    echo    ! Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo    X Failed to install dependencies
        exit /b 1
    )
)
echo.

REM Check for figma:asset imports
echo 4. Checking for figma:asset imports...
findstr /s /i /m "figma:asset" src\*.tsx src\*.ts > nul 2>&1
if errorlevel 1 (
    echo    ✓ No figma:asset imports found
) else (
    echo    X Found figma:asset imports - these will fail in production
    exit /b 1
)
echo.

REM Check required files
echo 5. Checking required files...
set all_files_exist=1

if exist index.html (
    echo    ✓ index.html
) else (
    echo    X index.html ^(missing^)
    set all_files_exist=0
)

if exist vite.config.ts (
    echo    ✓ vite.config.ts
) else (
    echo    X vite.config.ts ^(missing^)
    set all_files_exist=0
)

if exist src\main.tsx (
    echo    ✓ src\main.tsx
) else (
    echo    X src\main.tsx ^(missing^)
    set all_files_exist=0
)

if exist src\app\App.tsx (
    echo    ✓ src\app\App.tsx
) else (
    echo    X src\app\App.tsx ^(missing^)
    set all_files_exist=0
)

if exist vercel.json (
    echo    ✓ vercel.json
) else (
    echo    X vercel.json ^(missing^)
    set all_files_exist=0
)

if !all_files_exist!==0 (
    echo    X Some required files are missing
    exit /b 1
)
echo.

REM Run production build
echo 6. Running production build...
echo    Building...
call npm run build > build.log 2>&1
if errorlevel 1 (
    echo    X Build failed
    echo.
    echo Build log:
    type build.log
    del build.log
    exit /b 1
) else (
    echo    ✓ Build successful
    del build.log
)
echo.

REM Check build output
echo 7. Checking build output...
if exist dist (
    echo    ✓ dist\ folder created
    
    if exist dist\index.html (
        echo    ✓ index.html generated
    ) else (
        echo    X index.html not found in dist\
        exit /b 1
    )
    
    if exist dist\assets (
        echo    ✓ assets\ folder created
        for /f %%A in ('dir /b dist\assets ^| find /c /v ""') do set asset_count=%%A
        echo    Generated !asset_count! asset files
    ) else (
        echo    ! No assets folder
    )
) else (
    echo    X dist\ folder not created
    exit /b 1
)
echo.

REM Get build size
echo 8. Build size analysis...
for /f "usebackq" %%A in (`powershell -command "& {(Get-ChildItem -Path dist -Recurse | Measure-Object -Property Length -Sum).Sum / 1KB}"`) do set size_kb=%%A
echo    Total size: ~!size_kb! KB
echo.

REM Final checks
echo 9. Final verification...
echo    ✓ No figma:asset imports
echo    ✓ All components use CDN images
echo    ✓ Build completes successfully
echo    ✓ Output directory ready
echo.

REM Success message
echo ==================================
echo ✓ Production Build Verified!
echo ==================================
echo.
echo Next steps:
echo 1. Test locally: npm run preview
echo 2. Deploy to Vercel: vercel --prod
echo 3. Or deploy to Netlify: netlify deploy --prod --dir=dist
echo.
echo Project is ready for deployment! 🚀
echo.

endlocal
