---
name: motion-3d
description: Use for any 3D or motion work: the hero stack parallax, the tilted feature screen, the poster ring, card hover tilt, the playhead and nav timecode.
---
# Motion and 3D
- CSS transforms only. Perspective on the parent, `preserve-3d` on the rig, transforms on the children. Never perspective and transform on the same element.
- Exact values are in DESIGN_SYSTEM "3D specs". Use them before inventing new ones.
- Client components stay tiny: one `useEffect`, one passive listener, `requestAnimationFrame`, cleanup on unmount.
- Ring radius comes from `ringRadius()` in `src/lib/ring.ts`; counter text from the nearest step; tween to targets, pause 5 s after a click.
- Pause work when off screen (IntersectionObserver) and when the tab is hidden.
- With reduced motion: render the resting pose and skip all listeners.
- Verify with a screenshot; a wrong rotation sign looks fine in code.
