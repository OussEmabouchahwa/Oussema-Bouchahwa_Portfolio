# Design system

## Direction
An editing suite at night. The page is one sequence: sections are clips with timecodes, the hero sequence bar is the navigation, the playhead follows the scroll, and experience is drawn as tracks. The single accent is gaffer-tape amber, the color of the playhead and record light. Dark by design (single theme): video and posters read best on a dark ground.

Signature elements (use them, do not add new gimmicks):
1. **Timecodes** `HH:MM:SS:FF` in mono on every section header and in the nav.
2. **Sequence bar**: ruler + clips sized by real section height + playhead.
3. **Crop marks**: amber L-marks on the top-left and bottom-right corners of every empty media slot.
4. **Tracks**: experience clips on V1/V2/V3 lanes, width = duration.

## Color tokens (60 / 30 / 10)
| Token | Hex | Role | Share |
| --- | --- | --- | --- |
| `--bg` | #0E1013 | page ground (cool graphite) | 60% |
| `--panel` | #14171B | panels: wall, tracks, screen | 60% |
| `--raised` | #1A1E23 | empty media slots | 60% |
| `--line` | #252A30 | dividers | 30% |
| `--line-2` | #363C44 | control borders, ruler | 30% |
| `--fg` | #ECEAE5 | text | 30% |
| `--fg-2` | #A9AEB5 | secondary text | 30% |
| `--fg-3` | #80878F | captions, file paths | 30% |
| `--tape` | #F2B33D | accent: primary button, timecodes, playhead progress, italic headline word | 10% |
| `--tape-ink` | #16110A | text on tape | – |
| `--steel` | #7DA7D3 | clip color, V2 only | marks |
| `--sage` | #93BE9C | clip color, V3 and "passing" only | marks |

Contrast (measure, do not estimate): fg on bg ≈ 16:1, fg-2 on bg ≈ 8.6:1, fg-3 on bg ≈ 5:1, tape on bg ≈ 10:1, tape-ink on tape ≈ 10:1. Text must be 4.5:1, control borders 3:1. `--line` is for dividers only, never the only border of a control.

## Typography
- Display and body: **Geist** 400 / 500 (`next/font/google`).
- Mono (timecodes, labels, tags, paths): **Geist Mono** 400 / 500.
- Accent: **Instrument Serif Italic** for one word per heading only (films, built, & stills, job, reach for, camera, ships).
- Scale: 13 / 16 / 19 / 24 / 32 px fixed; h2 `clamp(2.25rem, 5vw, 4rem)`; h1 `clamp(3rem, 8.2vw, 7.25rem)`, line-height .94, letter-spacing -0.045em.
- Headings 500, tracking -0.025 to -0.05em. Mono labels 11–13px. Tabular numerals for timecodes and stats. `text-wrap: balance` on headings. Body max 36em.

## Space, shape, layout
- Container max 1360px; side gutter `max(16px, env(safe-area-inset-left))`, 40px from 720px.
- Section padding `clamp(72px, 10vw, 128px)` vertical; sections separated by a 1px `--line` top border.
- Radius: 4px tags and clips, 6px buttons and layers, 8px slots, 10–12px panels. No other radii.
- Shadows only under 3D layers (`0 40px 60px -30px #000b`). No other shadows.

## Components
- **Nav**: sticky, solid `--bg`, bottom border, 2px amber scroll progress, timecode chip `TC 00:00:00:00` with amber dot. Links hidden under 860px (sequence bar is the mobile nav).
- **Button**: primary = tape fill + tape-ink text; secondary = 1px `--line-2` border. 14×20 padding, 6px radius, verb-first labels.
- **Tag**: mono 12px, 1px `--line-2` border, 4px radius.
- **Section header**: timecode (tape) + h2 with one italic word, right note in mono `--fg-3`, bottom border.
- **MediaSlot / VideoSlot**: aspect-ratio box, dashed `--line-2` border, crop marks, icon, "Drop …" hint, file path. Video adds amber play button, label chip, scrubber. Filled state: solid border, no marks.
- **Feature**: 2-column, screen with file bar tilted in 3D, facts list with mono numbers.
- **Card**: slot + meta (P/0N in tape) + title + text + tags + arrow link.
- **Tracks**: label column 200px + lanes with 3-month grid; clip colors tape / steel / sage.
- **Stack rows**: 240px label column + tags.
- **Contact**: giant heading, email in mono with Copy button, link buttons.

## 3D specs (CSS only)
- Hero stack: container `perspective: 1600px`; rig `preserve-3d`, `rotateX(9deg) rotateY(-24deg)`; layers translateZ poster -160, reel 0, shot 140, code 230. Pointer moves rig by up to ±12° Y and ±8° X; returns on leave; transition 0.6s cubic-bezier(.2,.7,.2,1).
- Feature screen: `perspective: 1500px`, `rotateY(16deg) rotateX(5deg)`, origin left; on hover or focus-within eases to `rotateY(4deg) rotateX(2deg)`.
- Poster ring: n = 8, step 45°, radius `w/2 / tan(π/n) + 0.35w`, ring `translateZ(-r) rotateY(a)`, backfaces hidden, auto-turn 0.08°/frame when visible and not hovered, arrows tween to the next step and pause 5s, counter "01 / 08" (aria-live).
- Cards: hover `perspective(900px) rotateX(4deg) translateY(-4px)`.

## Motion
One orchestrated moment: the hero stack. Everything else is small. With `prefers-reduced-motion: reduce`: no pointer parallax, no ring auto-turn, no smooth scroll, no tilt transitions. Never animate in from opacity 0; the page is complete at rest.

## Bans
Gradients as decoration, glass, blur, glow, neon, purple or indigo, emoji, icon-in-circle tiles, progress rings, sparklines, "Welcome" heroes, nested cards, pill-shaped everything, stock photos, lorem ipsum, centered-everything layouts, more than one accent.
