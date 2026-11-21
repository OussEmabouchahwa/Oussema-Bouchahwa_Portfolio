---
name: content-model
description: Use when editing text, projects, jobs, stats, stack or links, or when moving content from docs/CONTENT.md into src/content.
---
# Content model
1. Change `docs/CONTENT.md` first, then mirror the change in `src/content/*.ts` with the types from `types.ts`.
2. Never invent facts (see rule content-truth). Unknown values stay `TODO` and render as a dashed placeholder.
3. Run the content unit tests. They check ids, paths, durations and banned wording.
