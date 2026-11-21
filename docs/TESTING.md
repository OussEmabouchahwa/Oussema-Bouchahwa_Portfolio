# Testing

## Unit (Vitest) · `src/**/*.test.ts`
1. `secondsToTimecode(0)` → `00:00:00:00`; `(61.04)` → `00:01:01:01`; `(3599.96)` → `00:59:59:24`; negative input clamps to 0. Implement from total frames (`Math.round(sec * fps)`) to avoid floating-point errors.
2. `ringRadius(200, 8)` equals `100 / tan(π/8) + 70` (rounded).
3. Content: every project has a title, text, at least one tag, a unique id and a media slot; every media `file` path is unique and starts with `assets/`; jobs months are 12, 6, 1; LMS project text never contains "built" or "deployed".
4. Sections: ids are unique and timecodes increase.

## End-to-end (Playwright) · `tests/e2e/`
| Spec | Checks |
| --- | --- |
| `sections.spec.ts` | All 6 sections render with their h2; nav links and every sequence clip scroll to the right section |
| `responsive.spec.ts` | At 390, 768, 1440: `scrollWidth <= innerWidth`; screenshots saved to `tests/screenshots/` |
| `media.spec.ts` | Missing file → placeholder with hint and path; with a fixture image in `public/assets/projects/` → `img` is rendered and placeholder is gone |
| `ring.spec.ts` | Next button changes counter to `02 / 08`; previous returns to `01 / 08`; with `reducedMotion: 'reduce'` the ring angle does not change over 1 s |
| `nav.spec.ts` | Scrolling to the bottom sets the progress bar near 100% and the timecode is not `00:00:00:00` |
| `copy.spec.ts` | With clipboard permission, Copy email shows "Copied" and the clipboard holds the email |
| `a11y.spec.ts` | `@axe-core/playwright`: zero serious or critical violations; every interactive element reachable by Tab with a visible focus ring |
| `console.spec.ts` | No console errors or failed requests on load |

## Visual review
Use the screenshots from `responsive.spec.ts`. Compare with `docs/design-reference.html` at the same widths. Look for clipped text, overlap, wrong font, a second accent color, banned styles.

## Lighthouse
Run on the Vercel preview (mobile). Record the four scores in the PR description.
