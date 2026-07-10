# CakeBazar Project Context

**Status:** Accepted current context  
**Owner:** Founder  
**Last reviewed:** 2026-07-10  
**Persian companion:** [PROJECT_CONTEXT.fa.md](PROJECT_CONTEXT.fa.md)

## One-line summary

CakeBazar is testing a trust-first, managed request network for custom cakes and home-made sweets. It is currently a Phase 0 validation project with a Next.js visual prototype and extensive startup documentation — not a production marketplace.

## Current reality

Implemented today:

- Next.js frontend prototype under `apps/web`
- Persian cinematic landing page
- Product, strategy, research, finance, investor, architecture, operations, and idea documents
- File-by-file startup audit in English and Persian
- GitHub issue and pull-request templates for human–AI collaboration
- Founder Reset, Phase 0, documentation-governance, and Codex-backlog documents
- Legacy CakeBazar material preserved under `docs/legacy/cakebazar`

Not yet implemented:

- Production backend API
- Persistent marketplace database
- Authentication
- Seller onboarding and verification workflow
- Customer request and quote workflow
- Listing management
- Order workflow
- Payments
- Admin operations dashboard
- Verified-review system
- Public reliability indicators
- Incident operations tooling
- Production analytics and deployment

Never describe these planned systems as live capabilities.

## Current source of truth

Read in this order:

1. `README.md`
2. `PROJECT_CONTEXT.md`
3. `AI_COLLABORATION.md`
4. `docs/strategy/FOUNDER_RESET.md`
5. `docs/execution/PHASE_0_PLAN.md`
6. `docs/execution/CODEX_TASKS.md`
7. `docs/governance/DOCUMENTATION_POLICY.md`
8. `AGENTS.md`
9. `docs/audit/COMPREHENSIVE_STARTUP_AUDIT.md`

Older product, finance, investor, architecture, operations, and idea documents remain inputs and historical memory. Some are aspirational, overlapping, mixed-language, or superseded. When they conflict with the accepted Founder Reset documents, Founder Reset defines current direction.

## Product thesis

Celebration purchases are emotionally important and operationally fragile. Customers are not only buying cake; they are protecting a meaningful moment from uncertainty.

CakeBazar's initial job is not to create the largest catalog. It is to help customers create a complete request, reach appropriate available sellers, compare responses, and improve the chance of a reliable outcome.

## Current validation wedge

The active product is a concierge workflow:

1. Customer submits a structured request.
2. An operator completes and qualifies it.
3. A curated seller pool receives the request.
4. Sellers return availability, price range, conditions, and relevant examples.
5. Responses are normalized for comparison.
6. Customer selects a seller.
7. CakeBazar follows the order to a verified post-event outcome.

Manual operation comes before broad automation so the team can learn the real taxonomy, trust needs, failure modes, support cost, seller objections, and response behavior.

## Strategic principles

- Evidence before complexity
- Trust before scale
- One city before one country
- Manual validation before automation
- Seller quality before seller quantity
- Customer outcome before feature count
- Data before public AI
- Transparent trust evidence before opaque scoring
- One launch market, even while Iran and Germany are both explored

## Current priority

1. Merge and adopt the Founder Reset source of truth.
2. Build the structured research-evidence system.
3. Run customer and seller discovery in Iran and Germany.
4. Select one launch city using evidence and compliance readiness.
5. Recruit a small curated seller pool.
6. Run a manual concierge pilot.
7. Use observed behavior and costs to define the first functional product slice.

## Important open risks

- Documentation scope is much larger than implemented software.
- Market, competitor, pricing, and financial claims need current external evidence.
- Trust operations create legal, privacy, fairness, food-safety, and support obligations.
- Germany requires a dedicated legal and operating-model review before launch.
- Iran requires current validation of payments, refunds, logistics, seller formalization, and platform trust.
- Seller willingness to pay or surrender customer ownership is unknown.
- Operator effort may make the model uneconomic unless the workflow is carefully designed.
- Paid ranking could damage trust if introduced before explicit relevance and disclosure rules.

## Build guardrails

Do not build yet:

- Public reliability score
- Broad celebration guarantee
- AI recommender or dynamic pricing
- Corporate celebration SaaS
- Supplier marketplace
- Academy or certification
- Financing/BNPL
- CakeCoins
- National logistics network
- Full event operating system

## How to use this file

Any human or AI assistant joining the project should read this file and the canonical documents before making recommendations or code changes. Durable decisions belong in GitHub documents, issues, pull requests, commits, or decision records — not only in chat.
