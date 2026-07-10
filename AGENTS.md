# Agent Instructions

This repository is the canonical CakeHub/CakeBazar project. It is separate from the Rakuten notebook project.

## Project Identity

- Product name: CakeBazar.
- Repository name: CakeHub.
- Purpose: trust-first marketplace for cakes and celebration services.
- Current stage: strategic prototype with a Next.js frontend and extensive planning docs.
- Main repo path on the user's machine: `/Users/mohsenjamshidi/cake-startup/Cakehub`.

## Source Of Truth

Use these files before making major assumptions:

- `README.md`
- `PROJECT_CONTEXT.md`
- `AI_COLLABORATION.md`
- `docs/product/PRODUCT_STRATEGY.md`
- `docs/product/PRD.md`
- `docs/architecture/ARCHITECTURE.md`
- `docs/audit/COMPREHENSIVE_STARTUP_AUDIT.md`

## Working Rules

- Do not treat this as a production marketplace yet.
- Do not imply backend, database, auth, payments, admin, seller workflows, or order workflows are implemented unless source files prove it.
- Prefer one-city validation and manual trust operations before broad feature expansion.
- Keep AI, corporate, supplier marketplace, BNPL, academy, and ecosystem ideas out of MVP unless the user explicitly changes scope.
- Preserve Persian companion documents when they exist.
- Keep GitHub as the coordination layer: issues, pull requests, docs, and commits should carry durable decisions.

## Engineering Rules

- Read existing files before editing.
- Keep changes scoped and evidence-based.
- Do not commit secrets. `.env`, `node_modules`, `.next`, and local generated files should remain untracked.
- For frontend work, read `apps/web/AGENTS.md` before editing `apps/web`.
- Run relevant validation before proposing a push. For docs-only changes, `git diff --check` is enough.

## Collaboration With Other AI Assistants

When ChatGPT, Codex, Claude, or another assistant contributes:

- Ask it to read `PROJECT_CONTEXT.md` and `AI_COLLABORATION.md` first.
- Require it to state whether it is proposing strategy, documentation, design, or implementation.
- Require it to name the files it used as evidence.
- Put durable outputs into repo files or GitHub issues, not only chat.
