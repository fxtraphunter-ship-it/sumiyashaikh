# Deployment Guide

This project is configured for seamless deployment to Vercel.

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect the settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

## Build Configuration

The project uses these settings (auto-detected by Vercel):

- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 18.x or higher

## Vercel Configuration

The `vercel.json` file is already configured with:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Manual Build & Test

To test the build locally before deploying:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build
npm run preview
```

## Troubleshooting

### Build Fails

1. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node version (should be 18+):**
   ```bash
   node --version
   ```

3. **Test build locally:**
   ```bash
   npm run build
   ```

### Missing Dependencies

If you see missing dependency errors, run:
```bash
npm install
```

### Environment Variables

This project doesn't require any environment variables for basic deployment.

## Post-Deployment

After successful deployment:

1. ✅ Visit your deployed URL
2. ✅ Test all navigation links
3. ✅ Verify carousel/slider works
4. ✅ Test WhatsApp contact button
5. ✅ Check responsive design on mobile
6. ✅ Verify all animations load correctly

## Custom Domain

To add a custom domain:

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance

The build is optimized with:

- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification
- ✅ Asset optimization
- ✅ Lazy loading

## Support

For issues:
- Check the Vercel deployment logs
- Review the browser console for errors
- Ensure all dependencies are installed

---

**Deployed with ❤️ using Vercel**
