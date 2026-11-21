# Architecture

## Goals
Fast static page, real content, media that can be added without touching code, every interaction usable by keyboard and with reduced motion.

## Stack and why
| Choice | Why | Rejected |
| --- | --- | --- |
| Next.js App Router, static rendering | React and TypeScript on the CV, first-class on Vercel, server components keep JS small | Astro (fine, but React shows the CV skills), CRA/Vite SPA (no SSR/SEO) |
| CSS Modules + tokens in `globals.css` | Full control of the design, zero runtime | Tailwind, UI kits (generic look) |
| Content as typed TS files | Type-checked, no CMS to run | CMS, MDX for everything |
| CSS 3D transforms | Light, no WebGL needed for cards | three.js (heavy for this) |
| Vitest + Playwright + axe | Unit, e2e, accessibility in one flow | – |

## Folder structure
```
src/
  app/
    layout.tsx        fonts, metadata, JSON-LD Person, body
    page.tsx          composes sections in order
    globals.css       tokens, reset, base type
    opengraph-image.tsx
  components/
    Nav/  NavTimecode/ (client)
    Hero/  HeroStack3D/ (client)  SequenceBar/ (client)  Stats/
    SectionHeader/
    MediaSlot/  VideoSlot/
    ProjectFeature/  ProjectCard/  MoreSites/
    Showreel/  Reels/  Promo/  PosterRing/ (client)
    ExperienceTracks/  JobList/
    StackList/  About/  Contact/  CopyEmail/ (client)  Footer/
  content/
    types.ts  profile.ts  projects.ts  media.ts  experience.ts  stack.ts  sections.ts
  lib/
    timecode.ts       secondsToTimecode(sec, fps=25), computed from Math.round(sec * fps) total frames
    ring.ts           ringRadius(width, n, extra=0.35)
    assets.ts         assetExists(path) via fs at build time (server only)
public/assets/        posters video reels photos projects sites about cv
tests/e2e/            *.spec.ts
```

## Data model (src/content/types.ts)
```ts
type Media = { kind: 'image' | 'video'; file: string; poster?: string; hint: string; ratio: `${number}/${number}`; label?: string; alt?: string };
type Project = { id: string; index: string; title: string; meta: string[]; text: string; tags: string[]; facts?: { value: string; label: string }[]; link: { label: string; href: string } | null; media: Media; featured?: boolean };
type Job = { track: 'V1' | 'V2' | 'V3'; company: string; place: string; role: string; months: number; points: string[]; color: 'tape' | 'steel' | 'sage' };
type Section = { id: string; timecode: string; track?: string; title: string; italic: string; note?: string };
```

## Rendering
- Everything is a server component except: NavTimecode, HeroStack3D, SequenceBar, PosterRing, CopyEmail (`'use client'`, small, no libraries).
- `MediaSlot` (server) calls `assetExists()` at build time: file present → `next/image` (images) or `<video preload="none" poster controls muted playsInline>`; missing → placeholder markup. No runtime 404s.
- Images: `next/image` with explicit sizes, `loading="lazy"` except the hero.
- Fonts: `next/font/google` (self-hosted at build, no layout shift).

## Client behaviour
- Scroll: one passive listener, `requestAnimationFrame` throttle, updates nav timecode, progress bar and playhead.
- Sequence clips: `flex-grow` from each section's real height, recomputed on resize.
- Pointer parallax only for `(pointer: fine)` and no reduced motion.
- Ring: `requestAnimationFrame`, paused when off screen (IntersectionObserver) or hovered.

## SEO
Metadata title "Oussema Bouchahwa · Full-stack developer & video creator", description, canonical, Open Graph image (generated), JSON-LD `Person` with name, jobTitle, address Sfax TN, sameAs LinkedIn and GitHub. `robots.txt` and `sitemap.xml`.

## Security (static site)
- No forms, no secrets, no API routes.
- Headers in `next.config.ts`: Content-Security-Policy (self, Google fonts not needed after next/font), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` denying camera, microphone, geolocation, `frame-ancestors 'none'`.
- External links `target="_blank" rel="noopener noreferrer"`.
- Email shown as text plus copy button (no mailto dependency).

## Performance budget
- First-load JS for `/` under 100 KB gzip.
- LCP under 2.5 s on mobile (hero text is the LCP, not media).
- Videos: never preload; each file under 15 MB; posters as JPG/WebP under 250 KB.
- Lighthouse mobile ≥ 95 in all four categories.
