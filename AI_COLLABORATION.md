# AI Collaboration Workflow

## Purpose

This file defines how the user, Codex, ChatGPT, and any other assistant should collaborate on CakeHub without losing context or creating conflicting work.

## Shared Source Of Truth

GitHub is the durable coordination layer.

Use GitHub for:

- Issues and task definitions.
- Pull requests and review threads.
- Commits and implementation history.
- Project docs and decision records.

Do not rely on chat history alone for important project decisions.

## Assistant Roles

### Codex

Best used for:

- Reading and editing the local repository.
- Creating files, code, docs, branches, commits, and pull requests.
- Running terminal commands and validation.
- Keeping changes scoped and git-ready.

### ChatGPT

Best used for:

- Product thinking.
- Founder strategy.
- Market, positioning, and customer analysis.
- Review of docs, specs, PRDs, and PR text.
- Generating alternative options before implementation.

### Human Founder

Owns:

- Final product judgment.
- Business priorities.
- Go/no-go decisions.
- GitHub merge and release decisions, unless explicitly delegated.

## Operating Loop

1. Define the task in a GitHub issue or repo document.
2. State the desired outcome and scope.
3. Have the assistant read source files and cite evidence.
4. Make changes on a branch or in a clear local working tree.
5. Validate the change.
6. Commit and push only after review/approval.
7. Record decisions in docs or issues.

## Handoff Prompt For ChatGPT

Use this when asking ChatGPT to join the project:

```text
You are helping with CakeHub/CakeBazar.
The GitHub repo is git@github.com:JamshidiML/cakehub.git.
Before making recommendations, read README.md, PROJECT_CONTEXT.md, AI_COLLABORATION.md, docs/product/PRODUCT_STRATEGY.md, docs/product/PRD.md, and docs/audit/COMPREHENSIVE_STARTUP_AUDIT.md.
Treat the project as a strategic prototype, not a production marketplace.
Prioritize trust-first marketplace validation, a one-city pilot, and evidence over broad feature expansion.
When you propose work, name the files or issues that should become the durable source of truth.
```

## Decision Rules

- If a decision changes MVP scope, update `docs/product/PRD.md` or create a decision record in `docs/decisions/`.
- If a decision changes technical direction, update `docs/architecture/ARCHITECTURE.md`.
- If a decision changes validation strategy, update `docs/research/EXPERIMENTS.md` or create a GitHub issue.
- If a decision affects trust, sellers, support, guarantee, or incidents, update the related file under `docs/operations/`.

## Guardrails

- Do not build AI features before marketplace validation.
- Do not build corporate, BNPL, supplier, academy, or event-management features into the first MVP.
- Do not introduce paid ranking before trust/relevance rules are explicit.
- Do not describe planned trust scores, guarantees, or verification as real until implemented and operationally supported.
- Do not commit secrets or local generated files.
