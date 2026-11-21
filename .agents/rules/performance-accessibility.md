---
trigger: always_on
---
# Performance and accessibility
- Respect `prefers-reduced-motion`: no parallax, no auto-turn, no smooth scroll.
- Every interactive element is a real `button` or `a`, reachable by keyboard, with a visible focus ring in `--tape`.
- Images have meaningful `alt`; decorative SVGs `aria-hidden`. Placeholders use `role="img"` and an `aria-label`.
- Text contrast 4.5:1, control borders 3:1, measured.
- Videos never autoplay with sound and use `preload="none"`.
- No layout shift: every media slot has an aspect ratio.
- No horizontal scroll at any width from 360 px.
