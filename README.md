# Bazzlow Luxury Watches

A Next.js website for Bazzlow luxury watches, inspired by Longines design.

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- Elegant landing page with video background
- Product collections (HydroConquest, PrimaLuna, Master Collection)
- Best sellers slider
- Responsive design using Tailwind CSS
- TypeScript support

## Project Structure

- `app/` - Next.js app directory with pages and layout
- `components/` - Reusable React components
- `public/` - Static assets like images
- `styles/` - Global styles

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint

## Customization

Replace placeholder images and videos with actual luxury watch assets. Update product data and styling as needed.

## Deployment

This project is configured to deploy automatically to GitHub Pages using `.github/workflows/deploy.yml`.

- The static export output is generated into `out/`.
- Deployed to the `gh-pages` branch for free hosting.

To publish:

1. Push to `master` or `main`.
2. Enable GitHub Pages in the repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
3. The site will be available at: `https://bazzcreate101-ship-it.github.io/bazzcrete/`

This is completely free hosting provided by GitHub.