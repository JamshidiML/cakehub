# CakeBazar Website Route Map

**Status:** Proposed
**Owner:** Founder + ChatGPT strategy lead
**Last reviewed:** 2026-08-12
**Review trigger:** Phase 0 evidence unlocks CDX-003 or website architecture materially changes
**Persian companion:** [WEBSITE_ROUTE_MAP.fa.md](WEBSITE_ROUTE_MAP.fa.md)

## Authority

This route map is subordinate to the accepted Founder Reset and canonical execution backlog. A listed route is an architecture target, not evidence that it should be implemented now.

## Routing principles

- Keep public, customer, seller, and operations surfaces distinct.
- Prefer one evidence-backed vertical slice over many empty pages.
- Do not expose dead controls as working marketplace functionality.
- Prepare for Persian (`fa`), English (`en`), and German (`de`) without inventing market rules.
- Protect operations routes before real personal data is stored.
- Use the canonical `CDX-003` and `CDX-004` gates for request and persistence work.

## Status language

- **Implemented now:** present and functional in the current repository.
- **Architecture preparation:** boundaries and dependencies may be planned; product behavior is not approved.
- **Build next:** eligible only after its named gate is satisfied.
- **Manual in pilot:** intentionally operated by people before automation.
- **Blocked by evidence:** implementation must wait for research or outcome evidence.
- **Blocked by legal/compliance:** implementation requires market-specific professional review.
- **Future:** intentionally deferred.

## Public routes

| Route | Status | Purpose and gate |
| --- | --- | --- |
| `/` | Implemented now | Cinematic Persian homepage. Non-functional controls remain a known limitation. |
| `/request` | Blocked by evidence | `CDX-003`: Week 2 findings must confirm customer fields before implementation. |
| `/request/confirmation` | Build next | Implement with the approved `CDX-003` prototype; explain manual follow-up truthfully. |
| `/discover` | Future | Requires truthful seller/category data and an approved discovery model. |
| `/cakes` | Future | Catalog only after real-data or explicitly synthetic-data rules are accepted. |
| `/creators` | Blocked by evidence | Requires a validated pilot seller model and public-data policy. |
| `/creators/[slug]` | Future | Seller profile after approved seller data and verification boundaries exist. |
| `/how-it-works` | Build next | Eligible when the actual pilot workflow and public claims are approved. |
| `/trust` | Blocked by evidence | Requires factual trust evidence; no fake scores or guarantees. |
| `/about` | Future | Brand/company story after core validation needs are served. |
| `/help` | Future | Support content based on observed questions and incidents. |
| `/sell` | Build next | Eligible after the selected market and seller recruitment process are approved. |
| `/legal/...` | Blocked by legal/compliance | Market-specific privacy, terms, food, and platform notices require review. |

## Customer routes

| Route | Status | Purpose and gate |
| --- | --- | --- |
| `/account` | Future | Requires approved authentication and account scope. |
| `/account/requests` | Future | Requires secure request persistence and authorization. |
| `/account/requests/[id]` | Future | Requires ownership checks, status rules, and protected data. |
| `/account/orders` | Future | Requires an approved order model. |
| `/account/orders/[id]` | Future | Requires order, support, and incident rules. |
| `/account/favorites` | Future | Requires real discovery and identity. |
| `/account/messages` | Future | Requires communication, moderation, retention, and privacy decisions. |
| `/account/profile` | Future | Requires identity and consent-preference decisions. |

## Seller routes

| Route | Status | Purpose and gate |
| --- | --- | --- |
| `/seller` | Future | Workspace shell after seller scope and authentication are approved. |
| `/seller/requests` | Manual in pilot | Operator-mediated contact precedes seller self-service. |
| `/seller/quotes` | Future | Requires request, seller, and quote contracts. |
| `/seller/orders` | Future | Requires an approved order model and operating rules. |
| `/seller/calendar` | Future | Requires validated capacity and availability needs. |
| `/seller/portfolio` | Future | Requires ownership, moderation, storage, and public-data rules. |
| `/seller/profile` | Future | Requires approved seller identity and market fields. |
| `/seller/performance` | Blocked by evidence | Requires enough verified behavior, explainability, and appeal rules. |
| `/seller/messages` | Future | Requires communication and privacy architecture. |

## Operations routes

| Route | Status | Purpose and gate |
| --- | --- | --- |
| `/ops` | Build next | Shell is eligible only with an approved operations scope and protected access. |
| `/ops/requests` | Build next | `CDX-004`: requires unlocked `CDX-003`, approved persistence, privacy, and market decisions. |
| `/ops/requests/[id]` | Build next | Same `CDX-004` gate; includes private detail, notes, and status history. |
| `/ops/sellers` | Build next | Requires selected market and at least 10 pilot-willing sellers. |
| `/ops/orders` | Future | Requires an accepted quote/order model. |
| `/ops/incidents` | Future | Human-led recovery after real fulfillment operations exist. |
| `/ops/verification` | Manual in pilot | Use an approved manual checklist before building automation. |
| `/ops/reviews` | Future | Requires verified completed orders and moderation rules. |
| `/ops/content` | Future | Requires a demonstrated content-management need. |
| `/ops/analytics` | Build next | Requires a real flow, approved event contract, and PII-safe instrumentation. |

## Localization route strategy

Potential future locale routes are `/fa/...`, `/en/...`, and `/de/...`. The current `/` remains Persian-first. The final routing convention is an architecture decision and should be made before multiple public routes are implemented, without assuming that locale equals market.

## Planned first route slice

The intended route sequence is:

1. `/` links to `/request` only after `CDX-003` is unlocked and a functional target exists.
2. `/request` implements only evidence-approved fields and validation.
3. `/request/confirmation` states the real manual follow-up process.
4. `/ops/requests` is implemented only after the `CDX-004` persistence and access decisions.

Architecture preparation for these boundaries is allowed now. Product implementation is not.

## Routes to avoid now

- SEO-generated city/category pages without evidence.
- Public trust-score or seller-performance pages.
- Corporate dashboards, supplier marketplace, academy, or logistics network.
- AI-branded pages that imply unsupported automation.
- Static operator pages presented as a secure working queue.
