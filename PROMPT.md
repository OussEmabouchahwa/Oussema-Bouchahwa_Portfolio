# Master prompt: Oussema Bouchahwa portfolio

Paste everything below the line into Claude Code or the Antigravity agent (Planning mode).

---

You are a senior front-end engineer and a careful visual designer. Build my personal portfolio website as a production project, phase by phase, and stop for my review at the end of each phase.

## Read these first (in this order)
1. `docs/CONTENT.md`: every word, project, job and media slot. Do not invent facts.
2. `docs/DESIGN_SYSTEM.md`: tokens, type, components, 3D and motion specs, bans.
3. `docs/ARCHITECTURE.md`: stack, folder structure, data model, rendering, security, performance.
4. `docs/TESTING.md`: the tests you must write and pass.
5. `docs/design-reference.html`: the approved visual reference. Open it in a browser and match it. It is a reference, not code to copy line by line.
6. The rules in `.agents/rules/` (Claude Code: imported by `CLAUDE.md`). They are always on.

## Product
A one-page portfolio for a full-stack developer who is also a video editor and visual creator. Visitors are recruiters and clients deciding whether to contact me. The design concept is an **editing timeline**: sections are timecoded clips on one sequence, a sequence bar in the hero is the table of contents, and a playhead follows the scroll.

## Stack (do not change without asking)
Next.js (App Router) + React + TypeScript strict, plain CSS with custom properties (CSS Modules per component, tokens in `globals.css`), content as typed TypeScript files, Vitest for unit tests, Playwright + axe for end-to-end and accessibility, deployed on Vercel. No UI kit, no Tailwind, no animation library, no 3D library: all 3D is CSS transforms.

## Phases
1. **Setup**: scaffold the project, strict TS, ESLint, Prettier, Vitest, Playwright, folder structure from ARCHITECTURE. Commit.
2. **Tokens and shell**: `globals.css` tokens, fonts via `next/font/google`, layout, sticky nav with timecode, footer. Commit.
3. **Content model**: typed content files from `docs/CONTENT.md`, `MediaSlot` and `VideoSlot` that render the real file if it exists in `public/` at build time and a placeholder otherwise. Unit tests for the content. Commit.
4. **Sections**: Hero, Sequence bar, Stats, Work (feature + cards + more sites), Media (showreel, reels, promo, poster wall), Experience tracks, Stack, About, Contact. Server components by default. Commit after each two sections.
5. **3D and motion**: hero stack pointer parallax, feature screen tilt, poster ring, playhead, nav timecode. Respect reduced motion. Commit.
6. **Quality**: SEO metadata, Open Graph image, JSON-LD Person, security headers, performance budget. Run `/verify` and fix everything. Commit.
7. **Deploy**: Vercel config, README, then a final `/review-design` pass with screenshots at 390, 768 and 1440.

## Definition of done
- `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`, `npm run e2e` all pass.
- axe reports zero serious or critical violations.
- No horizontal scroll at 390, 768, 1440 px. No console errors.
- Lighthouse mobile: Performance, Accessibility, Best Practices and SEO at 95 or above.
- Every text and fact matches `docs/CONTENT.md`. Every media slot works with and without its file.
- Screenshots at three widths reviewed against `docs/design-reference.html` and the bans in DESIGN_SYSTEM.

## Do not
- Invent projects, numbers, employers, dates, clients or testimonials.
- Add a contact form, analytics, cookies, a CMS or a database.
- Use gradients as decoration, glassmorphism, glow, neon, purple or indigo, emoji, stock photos, or icon-in-circle feature tiles.
- Autoplay video with sound, or load all videos on page load.
- Say a visual is fixed without a screenshot after the fix.

Use the skills in `.agents/skills/` (Claude Code: `.claude/skills/`) when their task comes up. Start with phase 1 and show me the plan first.
