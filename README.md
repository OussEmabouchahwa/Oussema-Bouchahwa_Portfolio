# Oussema Bouchahwa · Portfolio

Personal portfolio of a full-stack developer and video creator, designed as an editing timeline: timecoded sections, a sequence bar that doubles as navigation, a playhead that follows the scroll, and CSS-only 3D.

**Live:** https://your-domain.vercel.app (replace)

## Stack
Next.js (App Router) · React · TypeScript (strict) · CSS Modules + custom properties · Vitest · Playwright + axe · Vercel

## Getting started
```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts
| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test` | Unit tests (Vitest) |
| `npm run e2e` | End-to-end, accessibility and screenshot tests (Playwright) |

## Adding media
Put files in `public/assets/` with the names listed in `docs/CONTENT.md` (section "Media slots"). A slot shows the file when it exists at build time and a labelled placeholder when it does not. No code change needed.

## Project structure
```
src/
  app/            layout, page, globals.css (tokens), metadata
  components/     one folder per component (tsx + module.css)
  content/        profile, projects, media, experience, stack (typed)
  lib/            timecode, ring geometry, asset lookup
public/assets/    posters, video, reels, photos, projects, sites, about, cv
tests/e2e/        Playwright specs
```

## License
Code: MIT. Media and written content: © Oussema Bouchahwa, all rights reserved.
