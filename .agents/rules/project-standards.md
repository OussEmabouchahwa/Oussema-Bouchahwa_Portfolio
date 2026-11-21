---
trigger: always_on
---
# Project standards
- TypeScript strict. No `any`, no `@ts-ignore`. Props typed with types from `src/content/types.ts`.
- Server components by default. `'use client'` only for the five client components listed in ARCHITECTURE.
- One component per folder: `Name.tsx` + `Name.module.css`. Files under 200 lines, functions under 40.
- No new dependency without asking. Allowed: next, react, react-dom, typescript, eslint, prettier, vitest, @playwright/test, @axe-core/playwright.
- Content lives only in `src/content/`. No hard-coded copy in components.
- Colors, fonts, radii and spacing only through tokens in `globals.css`. A raw hex outside `globals.css` is a bug.
- Small commits with clear messages after each phase step. Run lint, typecheck and unit tests before each commit.
