---
name: deploy-vercel
description: Use when preparing or checking the Vercel deployment, headers, SEO files or the production build.
---
# Deploy on Vercel
1. `npm run build` locally must pass with zero warnings you have not explained.
2. Security headers in `next.config.ts` (see ARCHITECTURE). Check them with `curl -I` on the preview.
3. `robots.txt`, `sitemap.xml`, Open Graph image, JSON-LD Person present.
4. Push to GitHub, import the repo on Vercel, framework preset Next.js, no env vars needed.
5. Run Lighthouse (mobile) on the preview URL and record the scores.
