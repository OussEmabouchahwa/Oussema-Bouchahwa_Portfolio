# How to use this kit

## Claude Code
1. Create an empty folder, copy everything from this kit into it (keep the hidden `.agents` and `.claude` folders).
2. Open a terminal in that folder and run `claude`.
3. Say: "Read PROMPT.md and start with phase 1." CLAUDE.md loads the rules automatically, skills are in `.claude/skills/`, and `/verify`, `/review-design`, `/add-media`, `/add-project` are slash commands.

## Antigravity
1. Copy the kit into an empty folder and open it in Antigravity.
2. Choose Planning mode.
3. Paste everything under the line in `PROMPT.md` into the agent chat.
4. Rules are in `.agents/rules/`, skills in `.agents/skills/`, workflows in `.agents/workflows/` (run `/verify` at the end of each phase).
Folder names can change between Antigravity versions (older ones use `.agent/`); check its current docs if the rules do not load.

## Your media
Put your files in `public/assets/` with the names in `docs/CONTENT.md` → "Media slots".
