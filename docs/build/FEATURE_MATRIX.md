# CakeBazar Website Feature Matrix

**Status:** Proposed
**Owner:** Founder + ChatGPT strategy lead
**Last reviewed:** 2026-08-12
**Review trigger:** Phase 0 evidence unlocks CDX-003 or website architecture materially changes
**Persian companion:** [FEATURE_MATRIX.fa.md](FEATURE_MATRIX.fa.md)

## Authority and classifications

This matrix controls website scope and is subordinate to the accepted Founder Reset, Phase 0 plan, and canonical Codex backlog.

- **Implemented now:** present and functional in the repository.
- **Architecture preparation:** interfaces, boundaries, or decision questions may be prepared without freezing product behavior.
- **Build next:** eligible only after the named gate passes.
- **Manual in pilot:** intentionally human-operated before automation.
- **Blocked by evidence:** implementation waits for discovery or verified outcomes.
- **Blocked by legal/compliance:** implementation waits for market-specific professional review.
- **Future:** intentionally deferred.
- **Rejected:** outside the approved direction.

## Matrix

| Feature | Status | Rationale / gate |
| --- | --- | --- |
| Cinematic Persian homepage | Implemented now | Preserve its premium, emotional, food-first identity. |
| Homepage navigation cleanup | Architecture preparation | Inventory dead controls now; activate links only when truthful destinations exist. |
| Homepage request CTA | Build next | Enable only with the functional `CDX-003` request target. |
| Request-domain hypothesis document | Architecture preparation | May list questions and candidate concepts; must not freeze production fields. |
| Structured cake request flow | Blocked by evidence | `CDX-003`: Week 2 customer/seller findings must confirm the fields. |
| Production request schema | Blocked by evidence | Requires approved fields, data classification, and ownership decisions. |
| Request validation implementation | Blocked by evidence | Requires an approved request schema; server validation is mandatory for real submissions. |
| Request confirmation UI | Build next | Build with unlocked `CDX-003`; state the real manual follow-up process. |
| Request persistence | Build next | `CDX-004`: requires unlocked `CDX-003` and approved data/market decision. |
| Internal operations queue | Build next | `CDX-004`: requires approved persistence, privacy, retention, export, and access control. |
| Typecheck script | Implemented now | Added by this planning PR as a quality gate. |
| Full design system | Architecture preparation | Define minimal tokens and primitives before multiplying routes. |
| Persian RTL quality | Architecture preparation | Preserve current strength; plan systematic RTL and accessibility review. |
| English locale | Future | Required by long-term direction, not by the current validation gate. |
| German locale | Future | Requires localization and market-specific legal/operating review. |
| Locale/market boundary | Architecture preparation | Avoid equating language with market or hard-coding Iran/Germany rules. |
| Portion/size assistant | Blocked by evidence | Requires observed customer need and an explicit estimate method. |
| Dietary/allergen fields | Blocked by evidence | Fields and disclaimers require discovery plus market-specific review; no medical inference. |
| Nutrition calculations | Blocked by evidence | Do not invent nutrition data; distinguish seller-confirmed from estimated data. |
| Seller recruitment | Manual in pilot | Founder/operator contacts sellers during validation. |
| Seller discovery | Blocked by evidence | Requires validated seller supply, public-data rules, and truthful availability. |
| Seller cards and profiles | Future | No fake sellers, ratings, availability, or verification claims. |
| Seller workspace | Future | Build after seller scope, auth, and operating need are validated. |
| Customer accounts/dashboard | Future | Requires identity, persistence, privacy, and support decisions. |
| Managed matching | Manual in pilot | Operator-mediated matching precedes automation. |
| Seller invitations | Manual in pilot | Operator contact is sufficient for initial learning. |
| Quote collection and normalization | Manual in pilot | Learn the real fields and effort before building self-service. |
| Quote submission/comparison UI | Future | Requires approved request, seller, and quote models. |
| Payment processing | Blocked by legal/compliance | Requires selected market, provider, contracting, refund, tax, and privacy decisions. |
| Deposits/refunds/payouts | Blocked by legal/compliance | Requires market-specific legal and payment architecture. |
| Trust-evidence model | Architecture preparation | Define factual evidence questions; implementation requires verified outcomes. |
| Public reliability score | Blocked by evidence | Requires sample size, explainability, governance, and appeal; no opaque score. |
| Seller verification | Manual in pilot | Use a market-reviewed checklist and operator records. |
| Reviews | Future | Must be tied to verified completed transactions and moderation rules. |
| Incident and recovery handling | Manual in pilot | Human-led workflow first; record real failure modes before tooling. |
| Emergency replacement attempt | Manual in pilot | May be attempted operationally but must not be promised as a guarantee. |
| Celebration guarantee | Blocked by legal/compliance | No broad promise before legal, financial, seller-density, and operations proof. |
| Privacy/data-classification questions | Architecture preparation | Prepare decisions before any real PII collection. |
| Production privacy controls | Build next | Implement with `CDX-003`/`CDX-004`, selected market, consent, and retention decisions. |
| Security threat model | Architecture preparation | Must precede protected operator tooling and real PII. |
| Authentication/authorization | Build next | Required by `CDX-004` before a real operations queue. |
| Analytics event contract | Architecture preparation | Vendor-neutral and PII-safe; implementation follows a real approved flow. |
| Analytics/observability implementation | Build next | Requires functional flow and approved event/data policy. |
| AI request structuring | Future | Requires real structured data, evaluation, and human review. |
| AI seller matching | Blocked by evidence | Requires real supply, requests, outcomes, and safety evaluation. |
| AI trust/safety decisions | Rejected | AI must not make final trust, legal, safety, seller-eligibility, or pricing decisions. |
| Image-based discovery | Future | Preserve as an idea; do not overclaim accuracy. |
| Voice input | Future | Requires transcription, confirmation, accessibility, and privacy design. |
| Supplier marketplace | Future | Preserve as a separate future module. |
| Academy/certification | Future | No official certification claims without authority and evidence. |
| Corporate/B2B | Future | Outside the initial validation scope. |
| Logistics network | Future | Seller delivery/pickup and manual operations come first. |
| Legal pages | Blocked by legal/compliance | Require market-specific professional review. |
| CI quality gates | Build next | Add focused CI for install, lint, typecheck, build, and tests. |
| Dependency/security remediation | Build next | Separate focused PR required before accepting real customer PII. |
| Automated behavior tests | Build next | Add with each unlocked functional behavior; no behavior is added by this PR. |
| SEO route expansion | Future | Avoid low-quality generated routes before validated content and data. |

## Architecture preparation allowed now

- Document route and component boundaries.
- Record candidate domain concepts as hypotheses and open questions.
- Define locale-versus-market boundaries.
- Prepare privacy, threat-model, analytics-contract, and persistence-ADR questions.
- Preserve future founder ideas in this matrix without treating them as current features.

## Planned first implementation slice

The intended sequence is:

`Homepage CTA -> structured request -> validation -> confirmation -> protected operator queue`

The sequence is not unlocked as one block:

- Request fields and validation are **Blocked by evidence** until Week 2 findings unlock `CDX-003`.
- Confirmation UI is **Build next** only with the approved `CDX-003` prototype.
- Persistence and the internal queue are **Build next** only after `CDX-004` is unlocked and data/market decisions are approved.
- Seller matching remains **Manual in pilot**.

`CBZ-P1-001` must not start as a production schema task. A clearly labeled hypothesis document is the maximum preparation allowed before evidence.

## Explicitly outside the first slice

- Accounts and public seller marketplace.
- Payments, payouts, refunds, and card-data storage.
- Public ratings, reliability scores, or guarantee claims.
- Automated matching or high-stakes AI decisions.
- Corporate/B2B, supplier marketplace, academy, and national logistics.

## Recorded risk

The latest known dependency audit reported one moderate and six high vulnerabilities. Remediation is intentionally separated from this planning PR, but must occur in a focused security PR before a live pilot accepts real customer PII.
