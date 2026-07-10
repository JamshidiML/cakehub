# CakeBazar Agent Instructions

This file defines repository-wide instructions for Codex and other coding agents.

**Human Persian companion:** [AGENTS.fa.md](AGENTS.fa.md)

## Project identity and current stage

- Product name: CakeBazar
- Repository name: CakeHub
- Current stage: **Phase 0 validation**
- Current implementation: a Next.js visual prototype and extensive planning documents
- Current product hypothesis: a trust-first, managed request workflow for custom cakes
- This is not a production marketplace.

The active Phase 0 flow is:

1. Customer submits a structured request.
2. An operator qualifies the request.
3. The request is matched manually to a curated seller pool.
4. Comparable seller responses are collected.
5. The selected order is followed to a verified outcome.

Do not implement future ecosystem ideas unless an accepted decision explicitly unlocks them.

## Canonical context

Read these files before substantial work:

- `README.md`
- `PROJECT_CONTEXT.md`
- `AI_COLLABORATION.md`
- `docs/strategy/FOUNDER_RESET.md`
- `docs/execution/PHASE_0_PLAN.md`
- `docs/execution/CODEX_TASKS.md`
- `docs/governance/DOCUMENTATION_POLICY.md`
- `docs/audit/COMPREHENSIVE_STARTUP_AUDIT.md`

Existing product, architecture, finance, investor, operations, and idea documents may be aspirational, duplicated, mixed-language, or superseded. When they conflict with the accepted Founder Reset documents, the Founder Reset documents define current direction.

## Working rules

- Never push directly to `main`.
- Work on a focused branch linked to an issue or task ID.
- Keep pull requests small and single-purpose.
- State assumptions explicitly.
- Read the relevant source files before editing.
- Name the files and evidence used in the pull request.
- Do not invent customer research, market data, financial evidence, legal conclusions, or implementation status.
- Do not represent planned features as implemented.
- Avoid unrelated refactors.
- Do not add production dependencies without explaining the need and evaluating a simpler option.
- Never commit secrets, credentials, tokens, private customer data, national IDs, banking data, or real interview PII.
- Use synthetic or clearly anonymized fixtures in tests and examples.
- Keep GitHub as the durable coordination layer for decisions, issues, branches, pull requests, and review.

## Bilingual documentation rule

When adding or substantially revising a human-readable project document, update both:

- `NAME.md` — English
- `NAME.fa.md` — Persian

Source code, lockfiles, generated files, machine configuration, migrations, and binary assets are language-neutral and are not duplicated.

User-facing copy must be localization-ready. Do not duplicate business-critical copy across components when a shared content or i18n layer is appropriate.

## Web application

Primary app: `apps/web`

Current stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

Before submitting changes in `apps/web`, read `apps/web/AGENTS.md` and run:

```bash
cd apps/web
npm ci
npm run lint
npm run build
```

When functional behavior is introduced, add the smallest appropriate automated test layer and document how to run it. Do not claim a task is complete if required checks fail.

For documentation-only changes, run at least a whitespace/link sanity check such as `git diff --check` when working locally.

## Product quality

For every feature, verify:

- Mobile-first usability
- Persian RTL behavior where relevant
- Accessibility and keyboard behavior
- Clear loading, empty, success, validation, and error states
- No dead buttons or misleading controls
- No fake trust signals or fabricated seller/customer data presented as real
- Privacy-by-design and data minimization
- Operational visibility for the founder/admin during the pilot

## Phase 0 architecture principles

Prefer the smallest reversible system that supports real learning.

Prioritize:

- Structured request capture
- Request validation
- Simple seller records
- Manual matching support
- Traceable request status
- Event instrumentation
- Admin visibility
- Exportable data

Avoid unless explicitly authorized:

- Microservices
- Complex event infrastructure
- Public reliability scores
- Automated seller approval
- AI-based high-stakes decisions
- Dynamic pricing
- Full payment orchestration
- Corporate, academy, supplier, financing, or event-OS features

## AI usage

AI may assist with low-risk internal tasks such as:

- Detecting missing request fields
- Normalizing briefs
- Suggesting tags
- Improving draft seller copy
- Summarizing operator feedback
- Assisting moderation with human review

AI must not, during Phase 0:

- Approve or reject sellers autonomously
- Produce public trust scores
- Make unsupported food-safety claims
- Give final legal advice
- Set final transaction prices
- Promise fulfillment or successful celebrations

## Data and privacy

- Collect only data required for the active experiment.
- Separate public seller information from private operational data.
- Add consent and retention considerations to any task that introduces personal data.
- Do not log sensitive request details unnecessarily.
- Treat dietary restrictions and allergen information carefully; do not infer medical conditions.

## Definition of done

A coding task is complete only when:

1. Acceptance criteria are met.
2. Relevant checks pass.
3. Behavior changes have tests where appropriate.
4. Error and empty states are handled.
5. Documentation is updated in both languages when needed.
6. The pull request explains scope, evidence connection, trade-offs, and verification.
7. No unrelated changes are included.

## Review guidelines

Treat the following as high priority:

- Broken build, lint, or tests
- Security or privacy regressions
- PII leakage
- Misleading trust claims
- Dead controls in a user flow
- Missing validation for customer requests
- Accessibility blockers
- Incorrect RTL behavior
- Divergence between English and Persian documentation
- Feature creep beyond the active experiment
- Financial, market, or legal claims presented without evidence

## Final instruction

Build evidence before complexity. Build trust before scale.
