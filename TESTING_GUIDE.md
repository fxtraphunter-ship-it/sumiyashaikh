# Testing Guide

## Pre-Deployment Testing Checklist

### 1. Local Development Test

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Start dev server
npm run dev
```

**Expected Result:**
- ✅ Server starts on `http://localhost:5173`
- ✅ No console errors
- ✅ Page loads in ~1-2 seconds

### 2. Build Test

```bash
# Create production build
npm run build
```

**Expected Output:**
```
vite v6.3.5 building for production...
✓ xx modules transformed.
dist/index.html                   [size]
dist/assets/index-[hash].js       [size]
dist/assets/index-[hash].css      [size]
✓ built in [time]
```

**What to Check:**
- ✅ Build completes without errors
- ✅ `dist/` folder created
- ✅ `dist/index.html` exists
- ✅ Assets folder has JS and CSS files

### 3. Preview Build

```bash
# Preview production build locally
npm run preview
```

**Expected Result:**
- ✅ Server starts on `http://localhost:4173`
- ✅ Site works exactly like production
- ✅ All features functional

---

## Functional Testing

### Test All Sections

1. **Hero Section** ✅
   - [ ] Typing animation works
   - [ ] "Available for Projects" badge visible
   - [ ] "View Work" button scrolls to work section
   - [ ] "Contact Me" button scrolls to contact section

2. **Value Strip** ✅
   - [ ] Text scrolls smoothly
   - [ ] No stuttering or jumping
   - [ ] Continuous loop animation

3. **Featured Work Section** ✅
   - [ ] Tab filters work (All, UI/UX, Graphic, YouTube)
   - [ ] Carousel shows center card prominently
   - [ ] Side cards partially visible
   - [ ] Left/Right arrows navigate correctly
   - [ ] Tab switch changes carousel content
   - [ ] Hover effects work on cards
   - [ ] Images load correctly

4. **Services Section** ✅
   - [ ] All 5 service cards display
   - [ ] Icons render correctly
   - [ ] Hover effects work
   - [ ] Card animations trigger on scroll

5. **About Section** ✅
   - [ ] Content displays correctly
   - [ ] Stats cards animate
   - [ ] "Connect on LinkedIn" button works
   - [ ] Opens in new tab

6. **Skills Section** ✅
   - [ ] 3 skill categories display
   - [ ] Progress bars animate on scroll
   - [ ] Tool tags display
   - [ ] Hover effects work

7. **Contact Section** ✅
   - [ ] All contact info visible
   - [ ] Email link works (mailto:)
   - [ ] Phone displays correctly
   - [ ] LinkedIn link works
   - [ ] "Send a Message" opens WhatsApp
   - [ ] WhatsApp link: `https://wa.me/923368299388`

---

## Navigation Testing

### Desktop Navigation
- [ ] Navbar stays fixed at top
- [ ] All nav links work
- [ ] Smooth scroll to sections
- [ ] Active section highlighting (if implemented)

### Mobile Navigation
- [ ] Hamburger menu opens/closes
- [ ] Mobile menu items work
- [ ] Menu closes after clicking link
- [ ] Responsive below 768px

---

## UI/UX Testing

### Glassmorphism Effects
- [ ] Navbar has glass effect
- [ ] Cards have glass effect with blur
- [ ] Borders visible (white/20)
- [ ] Shadows render correctly

### Animations
- [ ] Hero typing animation smooth
- [ ] Scroll animations trigger once
- [ ] No animation lag or jank
- [ ] Hover effects responsive
- [ ] No layout shift on animation

### Gradients
- [ ] Purple/blue gradients visible
- [ ] Background gradient subtle
- [ ] Text gradients render correctly
- [ ] No color banding

### Dark Theme
- [ ] Background is #0B0B0F
- [ ] Text readable (white with opacity)
- [ ] Contrast ratio acceptable
- [ ] No white backgrounds appearing

---

## Responsive Testing

### Desktop (1920x1080)
- [ ] Full width layout works
- [ ] No horizontal scroll
- [ ] All sections visible
- [ ] Images scale properly

### Laptop (1366x768)
- [ ] Layout adjusts correctly
- [ ] Text remains readable
- [ ] Images responsive

### Tablet (768x1024)
- [ ] Grid changes to 2 columns
- [ ] Mobile menu appears
- [ ] Touch interactions work
- [ ] No overflow issues

### Mobile (375x667)
- [ ] Single column layout
- [ ] All sections stack vertically
- [ ] Text size appropriate
- [ ] Buttons easily tappable (min 44px)
- [ ] Images don't overflow

---

## Performance Testing

### Load Speed
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] Images lazy load
- [ ] No render blocking resources

### Bundle Size
Check `dist/` folder after build:
- [ ] Main JS < 500KB (gzipped)
- [ ] CSS < 100KB (gzipped)
- [ ] Total page size < 1MB

### Browser DevTools
```
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
```

**Target Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

---

## Browser Testing

### Chrome (Latest)
- [ ] All features work
- [ ] Animations smooth
- [ ] No console errors

### Firefox (Latest)
- [ ] All features work
- [ ] Glassmorphism renders
- [ ] No console errors

### Safari (Latest)
- [ ] All features work
- [ ] Backdrop blur works
- [ ] No console errors

### Edge (Latest)
- [ ] All features work
- [ ] All styles render
- [ ] No console errors

---

## Console Testing

Open browser console (F12) and check:

### Should Have NO Errors
```
No 404 errors
No module errors
No React errors
No hydration errors
```

### Allowed Warnings
```
⚠️ Development mode warnings (dev only)
⚠️ Some third-party library warnings (safe to ignore)
```

---

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus visible on all elements
- [ ] Enter/Space triggers actions
- [ ] No keyboard traps

### Screen Reader
- [ ] All images have alt text
- [ ] Headings in correct order (h1 → h2 → h3)
- [ ] Links descriptive
- [ ] Buttons have labels

### Color Contrast
- [ ] Text meets WCAG AA (4.5:1)
- [ ] Large text meets WCAG AA (3:1)
- [ ] Focus indicators visible

---

## SEO Testing

### Meta Tags
- [ ] Title tag present
- [ ] Meta description present
- [ ] Viewport meta tag present
- [ ] Open Graph tags (optional)

### Content
- [ ] H1 tag present (only one)
- [ ] Semantic HTML used
- [ ] Links descriptive
- [ ] Images have alt text

---

## Production Testing (After Deploy)

### On Vercel
1. **Deploy URL**
   - [ ] Site loads at Vercel URL
   - [ ] No 404 errors
   - [ ] SSL certificate active (https://)

2. **All Routes Work**
   - [ ] Home page loads
   - [ ] All sections accessible
   - [ ] No broken links

3. **Assets Load**
   - [ ] All images display
   - [ ] CSS loads correctly
   - [ ] JS loads correctly
   - [ ] Fonts load correctly

4. **Performance**
   - [ ] Fast initial load
   - [ ] Smooth animations
   - [ ] No lag on interactions

---

## Issue Resolution

### Common Issues & Fixes

**Issue: Build fails**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Issue: Images not loading**
- Check figma:asset imports
- Verify vite.config.ts plugin
- Check image paths

**Issue: Animations not working**
- Check motion/react imports
- Verify AnimatePresence usage
- Check CSS conflicts

**Issue: Carousel not working**
- Verify react-slick installed
- Check CSS imports
- Verify sliderRef usage

**Issue: Console errors**
- Check browser console
- Fix any module errors
- Update dependencies if needed

---

## Final Checklist

Before marking as "READY FOR PRODUCTION":

- [ ] All sections display correctly
- [ ] All animations work
- [ ] All links functional
- [ ] No console errors
- [ ] Build succeeds locally
- [ ] Preview looks good
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] Performance acceptable
- [ ] Accessibility basics met

---

## Testing Report Template

```markdown
# Testing Report - [Date]

## Environment
- Node Version: [version]
- npm Version: [version]
- OS: [Windows/Mac/Linux]

## Build Test
- [ ] Build Command: PASS/FAIL
- [ ] Build Time: [time]
- [ ] Bundle Size: [size]

## Functional Test
- [ ] All Sections: PASS/FAIL
- [ ] Navigation: PASS/FAIL
- [ ] Animations: PASS/FAIL
- [ ] Forms: PASS/FAIL

## Browser Test
- [ ] Chrome: PASS/FAIL
- [ ] Firefox: PASS/FAIL
- [ ] Safari: PASS/FAIL
- [ ] Edge: PASS/FAIL

## Performance
- Lighthouse Score: [score]
- Load Time: [time]

## Issues Found
1. [Issue description]
2. [Issue description]

## Status
✅ READY FOR PRODUCTION / ⚠️ NEEDS FIXES
```

---

**Remember:** Test locally before deploying to production!
