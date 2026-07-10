# CakeBazar

> A trust-first marketplace experiment for custom cakes and home-made sweets.

**Current stage:** Founder reset and problem validation — not a production marketplace.

**Persian version:** [README.fa.md](README.fa.md)

## Product thesis

People are not only buying cake. They are protecting an important moment from uncertainty.

CakeBazar's first job is therefore not to become the largest catalog. It is to make a custom-cake request easier to specify, easier to match, and more reliable to fulfill.

## Strategic wedge

Start with one city, one narrow celebration segment, and a managed request flow:

1. A customer submits a structured request.
2. CakeBazar checks that the request is complete.
3. A small pool of manually verified sellers receives the request.
4. Availability and quotes are collected and compared.
5. The customer chooses a seller.
6. CakeBazar follows the order through the celebration and records the outcome.

This is a **concierge marketplace pilot**, not a full open marketplace.

## What exists today

### Implemented

- A Next.js web application in `apps/web`
- A cinematic Persian landing-page prototype
- A large body of product, business, finance, operations, architecture, and idea documents
- A comprehensive repository audit in `docs/audit`
- GitHub issue and pull-request templates for human–AI collaboration

### Not implemented yet

- Authentication
- Database and persistent marketplace data
- Seller onboarding and verification workflow
- Customer request and quotation workflow
- Order management
- Payments
- Reviews and trust signals backed by transactions
- Admin operations dashboard
- Analytics instrumentation
- Production deployment and operational support

Planned capabilities must never be presented as released capabilities.

## Current source of truth

Read these first:

- [Founder Reset](docs/strategy/FOUNDER_RESET.md)
- [Phase 0 Validation Plan](docs/execution/PHASE_0_PLAN.md)
- [Codex Task Backlog](docs/execution/CODEX_TASKS.md)
- [Documentation and Localization Policy](docs/governance/DOCUMENTATION_POLICY.md)
- [AI Collaboration Workflow](AI_COLLABORATION.md)
- [Project Context](PROJECT_CONTEXT.md)

Older product, finance, investor, architecture, operations, and idea documents remain valuable inputs, but some are aspirational, duplicated, mixed-language, or superseded. When they conflict with the accepted Founder Reset documents, the Founder Reset documents define current direction.

## Phase 0 objective

Validate that CakeBazar can repeatedly create a better outcome than Instagram, direct messages, search, or personal referrals for a narrow custom-cake use case.

Phase 0 is successful only when real customer requests produce measurable seller responses, quotes, completed orders, and verified post-celebration outcomes.

## Product guardrails

Until the Phase 0 evidence gates are passed, do not build:

- A computed reliability score
- A broad celebration guarantee
- AI recommendation systems
- A corporate celebration platform
- An academy
- A supplier marketplace
- Financing or BNPL
- A national logistics network
- A full event-management platform

AI may be used internally to accelerate research, coding, content quality, moderation support, and operations. It must not be used to simulate market evidence.

## Market sequencing

Iran and Germany are both discovery markets, but CakeBazar will not launch two marketplaces at the same time.

A time-boxed discovery sprint will score each candidate launch city on:

- Accessible seller supply
- Customer pain intensity
- Willingness to transact through the platform
- Fulfillment and delivery feasibility
- Regulatory and food-safety readiness
- Payment feasibility
- Founder access and operating speed
- Expected acquisition cost

The first launch market will be selected from evidence, not founder preference.

## Repository structure

```text
apps/web/                 Current Next.js prototype
.github/                  Issue and pull-request collaboration templates
docs/audit/               Evidence-based repository audits
docs/strategy/            Canonical strategic direction
docs/execution/           Validation plans and delivery backlog
docs/governance/          Documentation, localization, and decision rules
docs/product/             Existing product documents
docs/research/            Research templates and evidence
docs/operations/          Trust and operating concepts
docs/finance/             Financial hypotheses
docs/investor/            Investor narratives; not yet evidence-ready
docs/ideas/               Future ideas; not a delivery roadmap
```

## Local development

```bash
cd apps/web
npm ci
npm run dev
```

Before opening a pull request:

```bash
npm run lint
npm run build
```

Add tests as soon as functional product flows are introduced.

## Working model: Founder + ChatGPT + Codex

- **Founder:** vision, access to users, final risk and capital decisions
- **ChatGPT cofounder/strategist:** research synthesis, product strategy, prioritization, specifications, critical review, and decision memory
- **Codex:** scoped implementation, refactoring, tests, technical documentation, and pull-request fixes

GitHub is the durable coordination layer. Important decisions and implementation work must be traceable to repository documents, issues, branches, pull requests, and acceptance criteria rather than existing only in chat.

## Bilingual rule

Every new or substantially revised human-readable project document must have an English file and a Persian companion file:

- `NAME.md`
- `NAME.fa.md`

Code and machine configuration are language-neutral and are not duplicated. User-facing copy must be localization-ready.

## Founder rule

> Build evidence before complexity. Build trust before scale.
