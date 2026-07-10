# CakeBazar Codex Task Backlog

**Status:** Active backlog  
**Owner:** Founder + ChatGPT strategy lead  
**Last reviewed:** 2026-07-10  
**Persian companion:** [CODEX_TASKS.fa.md](CODEX_TASKS.fa.md)

## Operating rule

Codex is an implementation partner, not the product owner.

Every task must be unlocked by founder/strategy review, linked to a GitHub issue, implemented on a focused branch, and reviewed through a pull request. Priority follows the active Phase 0 experiment, not feature attractiveness.

Before starting any task, read `AGENTS.md` and the canonical Founder Reset documents.

## Priority order

1. Repository truth and engineering hygiene
2. Research and experiment evidence system
3. Testable request prototype
4. Minimal persistence and admin operations
5. Seller-pool management
6. Pilot analytics and export
7. Only then: self-service marketplace capabilities

---

## CDX-001 — Repository hygiene and canonical-doc audit

**Status:** Ready after Founder Reset PR is merged  
**Type:** Maintenance  
**Risk:** Low

### Goal

Remove accidental artifacts and make the source of truth obvious without deleting valuable history.

### Scope

- Inventory empty files, accidental files, duplicate root documents, and legacy copies.
- Classify each as keep, consolidate, archive, or delete.
- Remove obvious accidental artifacts such as files named `#` or `touch` after confirming they contain no value.
- Preserve valuable history under a clear legacy/archive location.
- Do not rewrite substantive business documents in this task.

### Acceptance criteria

- No accidental empty artifacts remain in active paths.
- Canonical files are not duplicated without explanation.
- Valuable historical content is preserved.
- English and Persian documentation are updated where needed.
- `npm run lint` and `npm run build` still pass.

### Codex prompt

> Read `AGENTS.md`, `README.md`, `docs/governance/DOCUMENTATION_POLICY.md`, and the current audit. Create a repository-hygiene inventory, make only low-risk cleanup changes, preserve valuable history, and open a focused PR. Do not change product behavior.

---

## CDX-002 — Research evidence templates

**Status:** Ready  
**Type:** Research operations  
**Risk:** Low

### Goal

Turn interviews and experiments into structured, traceable evidence.

### Scope

Create paired English/Persian templates for:

- Customer interview record
- Seller interview record
- Participant/recruitment log
- Assumption register
- Live request experiment log
- Weekly evidence review
- Market selection scorecard

Prefer simple Markdown or CSV formats that the founder can use immediately. Do not build a research application.

### Acceptance criteria

- Every record has an evidence ID, date, market, segment, source, observation, interpretation, confidence, and decision impact.
- PII collection is minimized.
- Observation and interpretation are separated.
- A short usage guide exists in both languages.

### Codex prompt

> Build the smallest evidence system that supports the six-week Phase 0 plan. Use simple files, not a new application. Ensure every human-readable document has an English and Persian companion.

---

## CDX-003 — Functional mobile-first request prototype

**Status:** Blocked until Week 2 interview findings confirm the fields  
**Type:** Product  
**Risk:** Medium

### Goal

Replace dead search/order controls with one testable customer request journey.

### Scope

- Create a mobile-first request page.
- Use validated Phase 0 fields only.
- Support Persian RTL first and keep copy localization-ready.
- Include accessible labels, validation, progress, error states, and success confirmation.
- Add image handling only if privacy, storage, and cost implications are explicitly addressed.
- Instrument key funnel events through an environment-safe abstraction.
- Do not add accounts, public seller search, payments, AI recommendations, or reliability scores.

### Acceptance criteria

- A real user can complete the request on mobile.
- Required fields match approved research findings.
- The UI clearly states what happens after submission.
- No dead controls remain in the active journey.
- Accessibility and RTL are checked.
- Behavior has appropriate automated tests.
- Lint, tests, and build pass.
- English/Persian user-facing copy is managed consistently.

### Codex prompt

> Implement only the approved Phase 0 request journey. Do not turn the landing page into a full marketplace. Optimize for learning, completion, accessibility, RTL, privacy, and operator follow-up.

---

## CDX-004 — Minimal request persistence and admin queue

**Status:** Blocked until CDX-003 and data/market decisions  
**Type:** Full stack  
**Risk:** Medium–High

### Goal

Persist real pilot requests securely and give the founder operational visibility.

### Scope

- Write an architecture decision record comparing the smallest viable persistence options.
- Implement the selected option only after approval.
- Store request status, timestamps, consent, and operational notes.
- Provide a private admin queue for triage and export.
- Define retention and deletion behavior.
- Separate public-facing fields from private operational data.

### Out of scope

- Customer accounts
- Seller accounts
- Public marketplace database
- Payment data storage
- National-ID or bank-document storage
- Automated matching

### Acceptance criteria

- Threat model and privacy review are included.
- Authentication protects admin access.
- Input is validated server-side.
- Sensitive data is not logged.
- Data can be exported for analysis.
- Retention/deletion is documented.
- Tests and required checks pass.

---

## CDX-005 — Curated seller-pool operations

**Status:** Blocked until the selected market has at least 10 pilot-willing sellers  
**Type:** Operations tooling  
**Risk:** Medium

### Goal

Help the founder match requests manually without building public seller self-service.

### Scope

- Private seller records
- City and service area
- Style tags
- Price range
- Capacity and lead time
- Delivery or pickup
- Relevant compliance status for the selected market
- Contact status and response history
- Manual match shortlist

### Acceptance criteria

- Operators can find relevant sellers quickly.
- No public score is computed.
- Private and public information are separated.
- Matching decisions remain explainable and editable by a human.
- Export is available.

---

## CDX-006 — Pilot funnel analytics

**Status:** Blocked until a real request flow exists  
**Type:** Analytics  
**Risk:** Medium

### Goal

Measure the Phase 0 funnel without surveillance-heavy tooling.

### Core events

- Request started
- Request step completed
- Validation error
- Request submitted
- Request qualified
- Seller contacted
- Seller responded
- First quote available
- Multiple quotes available
- Customer selected
- Order confirmed
- Fulfillment completed
- Feedback submitted
- Support incident opened/resolved

### Acceptance criteria

- Event names and properties are documented.
- No unnecessary PII is sent to analytics.
- Phase 0 funnel metrics can be calculated.
- Events are testable in development.
- Consent requirements are respected for the selected market.

---

## CDX-007 — Verified-outcome trust badges

**Status:** Blocked until enough completed pilot orders exist  
**Type:** Trust product  
**Risk:** High

### Goal

Display narrow, factual trust evidence tied to verified outcomes.

### Allowed examples

- Identity/contact checked
- Portfolio ownership checked
- Completed through CakeBazar pilot
- Delivered on the agreed date, with sample size shown

### Forbidden in this phase

- Opaque aggregate reliability score
- AI-generated trust score
- “Best seller” without defined evidence
- Broad celebration guarantee
- Paid placement presented as trust

### Acceptance criteria

- Every badge has an auditable evidence rule.
- Sample size and time window are shown where relevant.
- Seller appeal/correction path exists.
- Paid visibility cannot alter factual trust labels.

---

## Deferred task families

Do not create implementation issues for these until an accepted decision explicitly unlocks them:

- AI recommendation engine
- Dynamic pricing
- Public reliability score
- Celebration Guarantee program
- Corporate celebration SaaS
- Supplier marketplace
- Academy and certifications
- Financing/BNPL
- CakeCoins
- National logistics network
- Full event operating system

## Review checklist for every Codex PR

- Does this support a live experiment or verified bottleneck?
- Is the scope smaller than the proposed solution?
- Are current and future capabilities clearly separated?
- Are privacy and trust risks handled?
- Are Persian RTL and localization considered?
- Are tests and failure states present?
- Do lint, tests, and build pass?
- Are English and Persian docs aligned?
- Can the change be rolled back easily?
- What evidence will this change help collect?
