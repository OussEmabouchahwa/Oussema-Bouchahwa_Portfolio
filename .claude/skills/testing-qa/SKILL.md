---
name: testing-qa
description: Use when writing or running tests, before any commit, or when asked whether something works.
---
# Testing and QA
- Follow `docs/TESTING.md` exactly; add a test for every bug you fix.
- Order: lint → typecheck → unit → build → e2e (including axe and screenshots).
- Report results as a table: check, result, evidence (command output or screenshot path).
- Never mark a check as passing without running it.
