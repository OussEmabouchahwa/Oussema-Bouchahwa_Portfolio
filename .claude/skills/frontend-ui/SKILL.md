---
name: frontend-ui
description: Use when building or changing any section or component of the portfolio (nav, hero, sequence bar, cards, tracks, stack, about, contact). Covers structure, tokens, CSS Modules and responsive rules.
---
# Frontend UI
1. Read the matching part of `docs/DESIGN_SYSTEM.md` and `docs/CONTENT.md`, and look at the same section in `docs/design-reference.html`.
2. Create `src/components/Name/Name.tsx` and `Name.module.css`. Server component unless it needs the browser.
3. Take all copy from `src/content/`. Take all colors, fonts and radii from tokens.
4. Layout with grid or flex and `gap`. Give text children `min-width: 0`. Stack to one column under the breakpoints in the reference (960, 900, 860, 760, 640).
5. Semantic HTML: `section` with `id` and `aria-labelledby`, one `h2` per section, lists for tags.
6. Check at 390, 768 and 1440 with a screenshot before saying it is done.
