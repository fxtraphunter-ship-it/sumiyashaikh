# Troubleshooting Guide

## Common Build Errors & Solutions

### Error: "Cannot find module 'react'"

**Cause:** React not in dependencies

**Solution:**
```bash
npm install react react-dom
```

✅ **Already Fixed:** React is now in `dependencies` in package.json

---

### Error: "Failed to resolve entry for package"

**Cause:** Missing main entry file

**Solution:**
Ensure `/src/main.tsx` exists and `/index.html` points to it:
```html
<script type="module" src="/src/main.tsx"></script>
```

✅ **Already Fixed:** Both files created

---

### Error: "Cannot find module 'vite'"

**Cause:** Vite not installed

**Solution:**
```bash
npm install -D vite @vitejs/plugin-react
```

✅ **Already Fixed:** Vite in devDependencies

---

### Error: "Module 'figma:asset/...' not found"

**Cause:** Virtual module not resolved

**Solution:**
Ensure `vite.config.ts` has the figmaAssetPlugin:
```typescript
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-plugin',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) return id
      return null
    },
    load(id: string) {
      if (id.startsWith('figma:asset/')) {
        return `export default ''`
      }
      return null
    }
  }
}
```

✅ **Already Fixed:** Plugin configured in vite.config.ts

---

### Error: TypeScript errors during build

**Cause:** Strict TypeScript checks

**Solution:**
Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
```

✅ **Already Fixed:** tsconfig.json configured

---

### Error: "Peer dependency warnings"

**Cause:** Conflicting peer dependencies

**Solution:**
Add to `.npmrc`:
```
legacy-peer-deps=true
auto-install-peers=true
```

Or install with:
```bash
npm install --legacy-peer-deps
```

✅ **Already Fixed:** .npmrc created

---

## Development Issues

### Issue: Port 5173 already in use

**Solution:**
```bash
# Mac/Linux
lsof -ti:5173 | xargs kill -9

# Windows
netstat -ano | findstr :5173
taskkill /PID [PID] /F

# Or specify different port
npm run dev -- --port 3000
```

---

### Issue: Hot reload not working

**Solutions:**
1. Check if `.tsx` files are in `src/` directory
2. Restart dev server
3. Clear browser cache
4. Check for syntax errors in files

---

### Issue: Styles not applying

**Solutions:**
1. Check if Tailwind CSS imported:
   ```typescript
   import './styles/index.css'
   ```
2. Verify Tailwind config in `vite.config.ts`
3. Check if using correct Tailwind v4 syntax
4. Restart dev server

---

### Issue: Images not loading

**Solutions:**

**For external images (Unsplash):**
- Use `ImageWithFallback` component
- Check internet connection
- Verify image URL is valid

**For figma:asset imports:**
- Check vite.config.ts has figmaAssetPlugin
- Verify import path: `import img from "figma:asset/filename.png"`

**For public folder images:**
- Place in `/public/` folder
- Reference as `/image.png` (not `./public/image.png`)

---

### Issue: Animations not working

**Solutions:**
1. Check motion/react import:
   ```typescript
   import { motion } from "motion/react"
   ```
2. Verify AnimatePresence wrapper for conditional rendering
3. Check if CSS conflicts with animations
4. Ensure component is in viewport for scroll animations

---

### Issue: Carousel/Slider not working

**Solutions:**
1. Verify react-slick installed:
   ```bash
   npm install react-slick slick-carousel
   ```
2. Check CSS imports:
   ```typescript
   import "slick-carousel/slick/slick.css";
   import "slick-carousel/slick/slick-theme.css";
   ```
3. Verify sliderRef is used correctly:
   ```typescript
   const sliderRef = useRef<any>(null);
   <Slider ref={sliderRef} {...settings}>
   ```

---

## Build Issues

### Issue: Build succeeds but site is blank

**Solutions:**
1. Check browser console for errors
2. Verify `/dist/index.html` has content
3. Check if assets are loading (Network tab)
4. Ensure base URL is correct in vite.config.ts
5. Check if JavaScript is enabled in browser

---

### Issue: Build is very slow

**Solutions:**
1. Reduce bundle size:
   ```typescript
   // In vite.config.ts
   build: {
     rollupOptions: {
       output: {
         manualChunks: {
           vendor: ['react', 'react-dom'],
         },
       },
     },
   }
   ```
2. Use production mode
3. Clear `node_modules` and reinstall
4. Check for circular dependencies

---

### Issue: Large bundle size

**Solutions:**
1. Enable code splitting (already configured)
2. Lazy load components:
   ```typescript
   const Component = lazy(() => import('./Component'))
   ```
3. Remove unused dependencies
4. Check bundle analyzer:
   ```bash
   npm install -D rollup-plugin-visualizer
   ```

---

## Deployment Issues

### Issue: Vercel deployment fails

**Solutions:**
1. Check build logs in Vercel dashboard
2. Verify `vercel.json` is correct
3. Ensure Node version is 18+
4. Check if `package.json` scripts are correct:
   ```json
   {
     "scripts": {
       "build": "vite build"
     }
   }
   ```
5. Try deploying from local:
   ```bash
   vercel
   ```

---

### Issue: 404 on routes after deployment

**Cause:** SPA routing not configured

**Solution:**
Ensure `vercel.json` has rewrites:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

✅ **Already Fixed:** vercel.json configured

---

### Issue: Environment variables not working

**Solution:**
1. Create `.env` file in root
2. Prefix with `VITE_`:
   ```
   VITE_API_KEY=your_key_here
   ```
3. Access in code:
   ```typescript
   const apiKey = import.meta.env.VITE_API_KEY
   ```
4. Add to Vercel dashboard:
   - Go to Settings → Environment Variables
   - Add variables

---

### Issue: Assets not loading after deployment

**Solutions:**
1. Check if assets are in `dist/` folder after build
2. Verify asset paths don't use absolute file paths
3. Check if CDN links work (for external assets)
4. Use relative paths: `./assets/` instead of `/assets/`

---

## Performance Issues

### Issue: Slow initial load

**Solutions:**
1. Enable compression (Vercel does this automatically)
2. Lazy load images:
   ```typescript
   <img loading="lazy" src="..." />
   ```
3. Code split large components
4. Remove unused CSS/JS
5. Optimize images (use WebP format)

---

### Issue: Janky animations

**Solutions:**
1. Use `transform` and `opacity` for animations (GPU accelerated)
2. Avoid animating `width`, `height`, `top`, `left`
3. Use `will-change` sparingly:
   ```css
   .animated-element {
     will-change: transform;
   }
   ```
4. Reduce animation complexity
5. Check for main thread blocking

---

## Browser-Specific Issues

### Issue: Safari - Backdrop blur not working

**Solution:**
Add `-webkit-` prefix:
```css
.glass {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
```

✅ **Already Fixed:** Custom CSS includes webkit prefix

---

### Issue: Firefox - Smooth scroll not working

**Solution:**
Already using CSS:
```css
html {
  scroll-behavior: smooth;
}
```

If not working, use JS:
```typescript
element.scrollIntoView({ behavior: 'smooth' })
```

---

### Issue: Mobile Safari - 100vh issue

**Solution:**
Use dynamic viewport height:
```css
.full-height {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
```

---

## TypeScript Issues

### Issue: Type errors for imports

**Solution:**
Ensure `vite-env.d.ts` exists:
```typescript
/// <reference types="vite/client" />

declare module 'figma:asset/*' {
  const content: string
  export default content
}
```

✅ **Already Fixed:** vite-env.d.ts created

---

### Issue: "Cannot find module" for packages

**Solution:**
Install type definitions:
```bash
npm install -D @types/react @types/react-dom @types/react-slick
```

✅ **Already Fixed:** Types in devDependencies

---

## Still Having Issues?

### Debug Steps:
1. **Check Console:** F12 → Console tab
2. **Check Network:** F12 → Network tab (look for failed requests)
3. **Check Build Logs:** Read full error messages
4. **Test Locally:** `npm run build && npm run preview`
5. **Clear Cache:** 
   ```bash
   rm -rf node_modules dist .vite
   npm install
   npm run build
   ```

### Get Help:
1. Copy full error message
2. Check package versions
3. Check Node version: `node --version` (should be 18+)
4. Search error on Google/Stack Overflow
5. Check Vite docs: https://vitejs.dev
6. Check React Router docs: https://reactrouter.com

---

## Emergency Reset

If nothing works, start fresh:

```bash
# Backup your src/ folder
cp -r src src_backup

# Clean everything
rm -rf node_modules package-lock.json dist .vite

# Reinstall
npm install

# Try build
npm run build
```

---

## Project Health Checklist

Run this before asking for help:

```bash
# 1. Check Node version
node --version    # Should be 18+

# 2. Check npm version
npm --version     # Should be 9+

# 3. Clean install
rm -rf node_modules package-lock.json
npm install

# 4. Test build
npm run build

# 5. Check for errors
# Look at terminal output
```

---

**Remember:** Most issues are solved by:
1. Clean reinstall of dependencies
2. Restarting dev server
3. Clearing browser cache
4. Reading error messages carefully
