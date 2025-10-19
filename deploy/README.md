# GitHub Pages Deployment

This folder contains the built files for GitHub Pages deployment.

## Files Included

- `index.html` - Main HTML file
- `404.html` - Custom 404 page
- `assets/` - CSS and JavaScript bundles
- `images/` - Static images
- `.nojekyll` - Tells GitHub Pages to skip Jekyll processing
- `vite.svg` - Favicon

## Deployment Commands

### Build for Deployment
```bash
npm run build:deploy
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

### Build and Deploy in One Command
```bash
npm run deploy:build
```

## GitHub Pages Setup

1. Push this repository to GitHub
2. Go to Repository Settings > Pages
3. Set Source to "Deploy from a branch"
4. Select "main" branch and "/deploy" folder
5. Save and wait for deployment

## Local Preview

To preview the built files locally:
```bash
npm run preview:deploy
```

The site will be available at http://localhost:4173
