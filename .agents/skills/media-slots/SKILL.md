---
name: media-slots
description: Use when adding, renaming or rendering images, videos, posters, reels, photos or the CV, or when a media slot shows the wrong state.
---
# Media slots
- All slots are declared in `src/content/media.ts` and `projects.ts` with `file`, `ratio`, `hint` and for video `poster` and `label`.
- `MediaSlot` checks the file with `assetExists()` at build time. Present → real media. Missing → placeholder with crop marks, hint and path.
- Images: `next/image`, explicit `sizes`, lazy except hero. Video: `<video controls muted playsInline preload="none" poster>`.
- Size limits: posters and stills under 250 KB (WebP or JPG), videos under 15 MB, 1080p max, H.264.
- After adding a file, rebuild and check the slot in the browser and in `media.spec.ts`.
