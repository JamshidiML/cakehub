# CakeBazar Website Master Plan

**Status:** Proposed
**Owner:** Founder + ChatGPT strategy lead
**Last reviewed:** 2026-08-12
**Review trigger:** Phase 0 evidence unlocks CDX-003 or website architecture materially changes
**Persian companion:** [WEBSITE_MASTER_PLAN.fa.md](WEBSITE_MASTER_PLAN.fa.md)

## 1. Authority and scope

This document plans the website architecture. It does not redefine company strategy, product evidence, or implementation priorities.

The accepted Founder Reset already exists on `main` and is the governing strategic baseline. This plan is subordinate to:

- [`docs/strategy/FOUNDER_RESET.md`](../strategy/FOUNDER_RESET.md)
- [`docs/execution/PHASE_0_PLAN.md`](../execution/PHASE_0_PLAN.md)
- [`docs/execution/CODEX_TASKS.md`](../execution/CODEX_TASKS.md)
- [`docs/governance/DOCUMENTATION_POLICY.md`](../governance/DOCUMENTATION_POLICY.md)

If this plan conflicts with an accepted canonical document, the canonical document wins and this plan must be revised.

## 2. Evidence and repository context

This plan was reconciled with repository history through the accepted Founder Reset integration on `main` at commit `c64045f`. The earlier PR draft was based on `4d90416`; that stale history must not be treated as the current strategy.

Reviewed context includes:

- Root coordination documents: `README.md`, `AGENTS.md`, `PROJECT_CONTEXT.md`, and `AI_COLLABORATION.md`.
- Accepted strategy, execution, and governance documents listed above.
- Startup audit and its Persian companion under `docs/audit/`.
- Product, research, operations, architecture, finance, investor, ideas, strategy, and legacy documents.
- The frontend under `apps/web` and repository issue/PR templates.

No interview findings or live-market evidence were added by this PR.

## 3. Current state

### Implemented now

- Next.js frontend in `apps/web`.
- Persian RTL cinematic homepage with responsive layout, motion, and cake-focused imagery.
- Extensive bilingual and legacy documentation.
- GitHub issue and pull-request templates.

### Not implemented now

- Functional customer request flow or server-side validation.
- Request persistence, backend API, or database.
- Authentication, authorization, or protected operator routes.
- Seller onboarding, matching, quotes, orders, payments, or reviews.
- Trust-evidence, incident, recovery, analytics, or audit tooling.
- Multilingual routing for English and German.

The current homepage is a visual prototype. Several navigation, search, and CTA controls are non-functional and must not be presented as completed marketplace capabilities.

## 4. Product and design direction to preserve

- Cinematic first impression and emotional Persian copy.
- Premium, warm, food-first visual identity.
- Strong cake imagery and celebration storytelling.
- Mobile-first interaction and high-quality Persian RTL behavior.
- Future English and German localization without assuming identical market rules.
- Modular architecture inside the existing application; no premature microservices.
- Human-in-the-loop trust operations and incident recovery.
- No fake sellers, ratings, trust claims, marketplace activity, or reliability scores.
- No invented legal claims and no AI decisions for trust, safety, seller eligibility, or final pricing.

Remote stock imagery may be used only as clearly non-production development material. Existing image and font warnings should be handled in a focused implementation task.

## 5. Planned information architecture

The website may eventually contain four distinct surfaces:

1. Public brand and product education.
2. Customer request and later account experiences.
3. Seller participation and later workspace experiences.
4. Protected operator tooling.

These surfaces are architecture targets, not claims of current functionality. The detailed route inventory and gates live in [`WEBSITE_ROUTE_MAP.md`](WEBSITE_ROUTE_MAP.md).

Architecture preparation may define route boundaries, component ownership, localization seams, and data-classification questions. Product implementation must follow the evidence gates in the canonical backlog.

## 6. Domain and data architecture

The following concepts are planning hypotheses only:

- Market and locale.
- Customer request and request status.
- Occasion, timing, service area, cake brief, and dietary disclosure.
- Contact consent and operator notes.
- Seller profile, match, quote, order, review, trust evidence, incident, recovery attempt, and audit event.

The names do not approve production fields, required/optional rules, validation constraints, retention periods, or data ownership. Those decisions require Week 2 findings and the relevant `CDX-003`/`CDX-004` approvals.

When persistence is considered, an architecture decision record must compare the smallest production-ready options for privacy, access control, deletion, export, auditability, cost, and operational simplicity.

## 7. Technical architecture

Preserve the current stack unless an approved task demonstrates a need to change it:

- Next.js 16.2.9 and React 19.2.4.
- TypeScript and Tailwind CSS v4.
- Framer Motion and `lucide-react`.
- One modular frontend application.

Implementation principles:

- Separate domain hypotheses, validation, UI, persistence, and operator concerns.
- Validate untrusted input on the server once a real submission path exists.
- Keep public and private data boundaries explicit.
- Protect operator routes before real personal data is stored.
- Do not use browser storage as production request persistence.
- Treat uploads as untrusted and defer them until privacy, storage, moderation, and cost decisions exist.

## 8. Localization and market architecture

Planned locales are Persian (`fa`, RTL), English (`en`, LTR), and German (`de`, LTR). Persian remains the current implemented experience.

Architecture should keep locale, market, currency, service area, consent text, and compliance content configurable. Iran and Germany remain separate discovery hypotheses; neither market's legal or operating requirements may be invented or copied to the other.

## 9. Design, accessibility, and interaction quality

Before many routes are implemented, establish reusable foundations for:

- Typography, color, spacing, and motion tokens.
- Buttons, form controls, feedback states, dialogs, and sheets.
- RTL/LTR layout primitives.
- Keyboard navigation, visible focus, reduced motion, and accessible labels.
- Stable loading, error, empty, success, and offline/retry states where relevant.

This preparation must preserve the emotional food-first identity rather than turn the product into generic dashboard styling.

## 10. Trust, privacy, and security

Trust must begin with narrow factual evidence, such as a completed pilot order or an observed response time, and disclose its basis, sample size, and time window where relevant. A composite reliability score is blocked until real data, explainability, governance, and appeal rules exist.

Before accepting real customer PII:

- Collect only data required by the approved pilot workflow.
- Obtain explicit consent for contact and follow-up.
- Define retention, deletion, export, and access rules.
- Prevent sensitive contact, dietary, or image data from entering logs or analytics.
- Protect operator access with approved authentication and authorization.
- Complete a focused dependency/security remediation review.

CakeBazar must never store payment-card data directly.

## 11. Analytics and AI

Analytics architecture may be prepared as a vendor-neutral event contract, but event implementation follows a real approved flow. Payloads must exclude unnecessary PII.

AI is deferred from high-stakes decisions. Future low-risk uses may assist operators with missing-information detection, tagging, normalization, or summaries, subject to human review and evaluation. AI must not approve sellers, publish trust scores, set final prices, or promise outcomes.

## 12. Evidence gates and dependencies

### CDX-003: functional mobile-first request prototype

**Current status:** Blocked until Week 2 interview findings confirm the fields.

Architecture preparation is allowed. Production request fields, validation logic, and user-facing implementation are not unlocked by this plan.

### CDX-004: minimal persistence and admin queue

**Current status:** Blocked until CDX-003 and data/market decisions.

An operator queue depends on an approved request contract, persistence decision, privacy model, and protected access. A static or browser-local queue must not be represented as production operations capability.

### Later dependencies

- Seller matching remains manual during the pilot.
- Public seller discovery requires a validated seller model and truthful data rules.
- Trust indicators require verified outcomes and auditable evidence.
- AI assistance requires structured data, safety rules, human review, and evaluation datasets.

## 13. Website build stages

These are website stages, not a replacement for the company's canonical Phase 0.

| Website stage | Goal | Gate |
| --- | --- | --- |
| Website Build Stage A — Foundation Planning | Reconciled master plan, route map, and feature matrix | This PR; no product implementation |
| Website Build Stage B — Request Prototype | Mobile-first request and confirmation experience | `CDX-003` unlocked by Week 2 evidence |
| Website Build Stage C — Persistence and Operations | Secure persistence and protected operator queue | `CDX-004` plus approved data/market decisions |
| Website Build Stage D — Seller Pilot Support | Manual seller records and matching support | Selected market and pilot-willing supply |
| Website Build Stage E — Quote and Outcome Learning | Operator-supported comparison and outcome records | Real request and seller-response evidence |
| Website Build Stage F — Trust and Expansion | Factual indicators and additional locales/markets | Verified outcomes and market-specific review |
| Website Build Stage G — AI Assistance | Human-reviewed internal utilities | Sufficient data, safety rules, and evaluation |

## 14. Quality and dependency status

The branch adds `npm run typecheck` as a quality gate. No product behavior or dependency versions are changed.

The latest known install audit reported seven vulnerabilities: one moderate and six high. Broad dependency remediation is outside this planning PR. A separate focused dependency/security PR is required before CakeBazar accepts real customer PII in a live pilot.

Quality-check results for the repaired branch must be reported in the PR review; warnings are distinct from failures and audit findings must not be described as passing.

## 15. Acceptance gates for this planning PR

- The branch is based on the latest accepted `main`.
- Canonical Founder Reset documents remain unchanged.
- This plan, route map, and feature matrix exist in aligned English/Persian pairs with required metadata.
- Company Phase 0 is not redefined.
- `CDX-003` and `CDX-004` remain evidence-gated.
- Current, manual, blocked, and future capabilities are clearly separated.
- No fake evidence, seller, rating, trust claim, or product functionality is added.
- Install, lint, typecheck, build, and diff checks are reported honestly.

## 16. Planned first vertical slice

The intended first product slice remains:

`Homepage CTA -> structured request -> validation -> confirmation -> protected operator queue`

It is a dependency chain, not an instruction to implement now:

1. Week 2 evidence confirms the customer fields and unlocks `CDX-003`.
2. An approved request hypothesis becomes a tested prototype with appropriate tests.
3. A data/market decision and privacy review unlock `CDX-004`.
4. Approved persistence and protected operator access make the queue real.

Until those gates pass, only architecture preparation is allowed. `CBZ-P1-001` must not freeze a production schema.

## 17. Proposed delivery sequence after evidence

1. Merge this focused foundation-planning PR after Cofounder/QC review.
2. Continue the canonical Phase 0 evidence work.
3. After `CDX-003` is unlocked, approve a request-field hypothesis and prototype task.
4. Add tested request UI and confirmation behavior.
5. After `CDX-004` is unlocked, approve persistence, protected operations, retention, and export.
6. Add analytics and seller-pilot support only when their canonical gates pass.
