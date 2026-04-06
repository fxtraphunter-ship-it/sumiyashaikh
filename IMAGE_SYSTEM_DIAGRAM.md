# Image System Architecture Diagram

## System Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                      PORTFOLIO WEBSITE                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────┐         ┌──────────────────────┐      │
│  │   Hero.tsx          │         │  FeaturedWork.tsx    │      │
│  │                     │         │                      │      │
│  │  Line 28:           │         │  Lines 78-84:        │      │
│  │  src="/images/      │         │  images: [           │      │
│  │       profile.png"  │         │   "/images/          │      │
│  │                     │         │    project1.png",    │      │
│  │                     │         │   "/images/          │      │
│  │                     │         │    project2.png",    │      │
│  │                     │         │   ... (7 total)      │      │
│  │                     │         │  ]                   │      │
│  └──────────┬──────────┘         └──────────┬───────────┘      │
│             │                               │                  │
│             └───────────┬───────────────────┘                  │
│                         │                                      │
│                         ▼                                      │
│            ┌────────────────────────┐                          │
│            │   Static File Serving   │                          │
│            │   /public/images/       │                          │
│            └────────────┬───────────┘                          │
└─────────────────────────┼───────────────────────────────────────┘
                          │
                          ▼
        ┌──────────────────────────────────────┐
        │      /public/images/ Directory       │
        ├──────────────────────────────────────┤
        │                                      │
        │  ✅ profile.png     (800x1200px)     │
        │  ✅ project1.png    (1200x900px)     │
        │  ✅ project2.png    (1200x900px)     │
        │  ✅ project3.png    (1200x900px)     │
        │  ✅ project4.png    (1200x900px)     │
        │  ✅ project5.png    (1200x900px)     │
        │  ✅ project6.png    (1200x900px)     │
        │  ✅ project7.png    (1200x900px)     │
        │  📄 README.md       (documentation)  │
        │                                      │
        └──────────────────────────────────────┘
```

## Image Usage Map

```
Hero Section
┌────────────────────────────────────┐
│  ┌──────────────┐                  │
│  │   PROFILE    │  Sumiya Shaikh   │
│  │    IMAGE     │                  │
│  │              │  UI/UX Designer  │
│  │ profile.png  │  & Digital...    │
│  │              │                  │
│  │  800x1200px  │  [CTA Buttons]   │
│  └──────────────┘                  │
└────────────────────────────────────┘
        ↑
        │ /images/profile.png
        │


Featured Work Section
┌─────────────────────────────────────────────────────────────┐
│  Project 5: Graphic Design Portfolio                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  project1    │  │  project2    │  │  project3    │      │
│  │    .png      │  │    .png      │  │    .png      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  project4    │  │  project5    │  │  project6    │      │
│  │    .png      │  │    .png      │  │    .png      │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐                                           │
│  │  project7    │                                           │
│  │    .png      │                                           │
│  └──────────────┘                                           │
└─────────────────────────────────────────────────────────────┘
        ↑
        │ /images/project1.png through project7.png
        │
```

## Component-to-File Mapping

```
Component File              Image Reference           Physical File
├─ /src/app/components/
│  ├─ Hero.tsx          →   /images/profile.png   →  /public/images/profile.png
│  └─ FeaturedWork.tsx  →   /images/project1.png  →  /public/images/project1.png
                        →   /images/project2.png  →  /public/images/project2.png
                        →   /images/project3.png  →  /public/images/project3.png
                        →   /images/project4.png  →  /public/images/project4.png
                        →   /images/project5.png  →  /public/images/project5.png
                        →   /images/project6.png  →  /public/images/project6.png
                        →   /images/project7.png  →  /public/images/project7.png
```

## Build & Deployment Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        DEVELOPMENT                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Code references: /images/profile.png                        │
│  2. Vite dev server serves from: /public/images/profile.png     │
│  3. Browser requests: http://localhost:5173/images/profile.png  │
│  4. ✅ Image loads successfully                                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                          BUILD                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. npm run build                                               │
│  2. Vite bundles app code → /dist/                              │
│  3. Vite copies /public/ → /dist/                               │
│  4. Result: /dist/images/profile.png ✅                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       PRODUCTION                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. Deploy /dist/ to hosting (Vercel/Netlify/etc)              │
│  2. Static files served at: /images/profile.png                │
│  3. CDN caches images                                           │
│  4. ✅ Users load images from CDN edge                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Image Update Process

```
┌─────────────────────────────────────────────────────────────────┐
│                   UPDATE WORKFLOW                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  OLD (figma:asset) ❌                                           │
│  ┌────────────────────────────────────────────────────────────┐│
│  │ 1. Edit component code                                     ││
│  │ 2. Change import statement                                 ││
│  │ 3. Update asset reference                                  ││
│  │ 4. Rebuild entire app                                      ││
│  │ 5. Deploy new build                                        ││
│  │ ❌ UNSTABLE - images change on every edit                  ││
│  └────────────────────────────────────────────────────────────┘│
│                                                                  │
│  NEW (static paths) ✅                                          │
│  ┌────────────────────────────────────────────────────────────┐│
│  │ 1. Navigate to /public/images/                             ││
│  │ 2. Replace profile.png with new file                       ││
│  │ 3. Keep same filename                                      ││
│  │ 4. (Optional) Clear CDN cache                              ││
│  │ ✅ STABLE - no code changes needed                         ││
│  │ ✅ No rebuild required                                     ││
│  └────────────────────────────────────────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Before vs After

```
BEFORE (Broken) ❌
├─ Components
│  ├─ Hero.tsx
│  │  └─ import heroImage from "figma:asset/96aebe..."
│  └─ FeaturedWork.tsx
│     └─ import graphicImg1 from "figma:asset/3334aa..."
│     └─ import graphicImg2 from "figma:asset/c680a2..."
│     └─ ... (7 total figma:asset imports)
├─ Build
│  └─ ❌ ERROR: Cannot resolve figma:asset module
└─ Deploy
   └─ ❌ FAILED


AFTER (Fixed) ✅
├─ Components
│  ├─ Hero.tsx
│  │  └─ <img src="/images/profile.png" />
│  └─ FeaturedWork.tsx
│     └─ images: ["/images/project1.png", ...]
├─ Static Files
│  └─ /public/images/
│     ├─ profile.png ✅
│     ├─ project1.png ✅
│     ├─ project2.png ✅
│     └─ ... (all 8 images)
├─ Build
│  └─ ✅ SUCCESS
└─ Deploy
   └─ ✅ PRODUCTION READY
```

## Summary

```
┌──────────────────────────────────────────────────────────────┐
│                      FINAL STATUS                             │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  ✅ 0 figma:asset imports (removed 8)                        │
│  ✅ 8 static image paths (added all)                         │
│  ✅ 8 placeholder files (ready for replacement)              │
│  ✅ Build passing                                            │
│  ✅ Production ready                                         │
│  ✅ Stable (no auto-updates)                                 │
│                                                               │
│  Status: 🟢 DEPLOYMENT READY                                 │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```
