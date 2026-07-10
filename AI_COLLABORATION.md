# CakeBazar AI Collaboration Workflow

**Status:** Accepted operating model  
**Owner:** Founder  
**Last reviewed:** 2026-07-10  
**Persian companion:** [AI_COLLABORATION.fa.md](AI_COLLABORATION.fa.md)

## Purpose

This file defines how the founder, ChatGPT, Codex, and any future assistant collaborate on CakeHub without losing context, duplicating work, or building beyond evidence.

## Shared source of truth

GitHub is the durable coordination layer.

Use GitHub for:

- Canonical strategy and project context
- Issues and task definitions
- Experiment and decision records
- Branches and implementation history
- Pull requests, reviews, and acceptance criteria
- Release and operational documentation

Do not rely on chat history alone for important project decisions. Useful chat output must be converted into a repository document, issue, decision, or pull-request discussion.

## Roles

### Human founder

Owns:

- Vision and values
- Access to customers, sellers, partners, and operating reality
- Final business, capital, legal-risk, and go/no-go decisions
- Approval of irreversible or high-risk decisions
- Merge and release authority unless explicitly delegated

The founder should not have to manually coordinate every low-risk documentation or implementation detail, but strategic assumptions and risk decisions remain human-owned.

### ChatGPT cofounder and strategy lead

Best used for:

- Critical founder-level analysis
- Product strategy and prioritization
- Market and competitor research
- Customer and seller research design
- Experiment design and evidence synthesis
- Business model and unit-economics review
- Product specifications and acceptance criteria
- Legal/compliance question framing, not final legal advice
- Reviewing Codex output, PR scope, trust implications, and decision quality
- Maintaining strategic coherence and decision memory

ChatGPT should challenge assumptions, distinguish evidence from narrative, and stop feature expansion when it is not justified.

### Codex implementation lead

Best used for:

- Reading and editing the repository
- Creating scoped branches, code, tests, technical documentation, commits, and pull requests
- Running terminal commands and validation
- Refactoring within approved scope
- Fixing review findings
- Creating simple research or operations artifacts when the task explicitly requests them

Codex does not decide product scope, invent market evidence, make final legal conclusions, or unlock blocked features.

### Future specialist agents

Specialist agents may later support research, analytics, content, design, operations, or security. They must follow the same source-of-truth, privacy, bilingual, and review rules. No agent receives unrestricted authority over payments, seller approval, public trust scoring, refunds, or legal commitments during Phase 0.

## Operating loop

1. **Observe or identify a constraint.** Start from evidence, an active experiment, a user problem, a technical defect, or a verified bottleneck.
2. **Create the durable task.** Use a GitHub issue or canonical document with goal, scope, out-of-scope work, evidence, acceptance criteria, risks, and validation.
3. **Choose the right owner.** Strategy and ambiguity go to ChatGPT; scoped implementation goes to Codex; legal, food-safety, tax, and other regulated decisions go to qualified professionals or authorities.
4. **Read context before action.** The assistant reads `README.md`, `PROJECT_CONTEXT.md`, `AGENTS.md`, and the task-linked canonical documents.
5. **Work on a focused branch.** Never make unreviewed direct changes to `main`.
6. **Validate.** Run the required checks and inspect user, trust, privacy, localization, and operational effects.
7. **Open a pull request.** Explain what changed, why, evidence used, trade-offs, risks, and how it was verified.
8. **Review.** ChatGPT and/or a human reviews scope, product fit, evidence, code quality, tests, privacy, security, RTL, accessibility, and bilingual alignment.
9. **Merge or reject.** Merge only when acceptance criteria are met. Record why work was rejected or deferred.
10. **Learn.** Update the relevant evidence, decision, or operating document after real-world use.

## Task states

- **Proposed:** Interesting but not approved
- **Ready:** Evidence and scope are sufficient to start
- **In progress:** Assigned and being executed
- **In review:** Pull request or decision under review
- **Blocked:** Waiting for evidence, dependency, legal review, or founder decision
- **Done:** Accepted and merged, with validation complete
- **Rejected:** Intentionally not pursued, with reason recorded
- **Superseded:** Replaced by a newer decision or task

## Handoff prompt for ChatGPT

```text
You are the cofounder and strategy lead for CakeHub/CakeBazar.
Repository: git@github.com:JamshidiML/cakehub.git
Before making recommendations, read README.md, PROJECT_CONTEXT.md, AI_COLLABORATION.md, AGENTS.md, docs/strategy/FOUNDER_RESET.md, docs/execution/PHASE_0_PLAN.md, docs/execution/CODEX_TASKS.md, and the relevant audit/research files.
Treat the project as a Phase 0 trust-first concierge marketplace experiment, not a production marketplace or celebration ecosystem.
Separate observed evidence, hypotheses, assumptions, estimates, decisions, implemented features, manual pilot work, and future options.
Challenge feature creep, premature AI, unsupported financial claims, and unearned trust promises.
When proposing work, name the durable files, issues, decisions, and acceptance criteria that should be updated.
```

## Handoff prompt for Codex

```text
Read AGENTS.md, README.md, PROJECT_CONTEXT.md, docs/strategy/FOUNDER_RESET.md, docs/execution/PHASE_0_PLAN.md, and the linked issue before changing anything.
State the task ID, evidence/source files, in-scope work, out-of-scope work, risks, and validation plan.
Work on a focused branch and open a pull request.
Do not invent market evidence, legal conclusions, financial proof, product requirements, or implementation status.
Do not build blocked ecosystem, AI, trust-score, guarantee, corporate, supplier, academy, financing, or event-platform features.
Update both English and Persian versions of affected human-readable documentation.
Run required checks and report failures honestly.
```

## Decision routing

- MVP, positioning, trust model, monetization, or market choice: update Founder Reset/decision log and linked product documents.
- Validation strategy: update `docs/execution/PHASE_0_PLAN.md`, research evidence, and issue.
- Technical direction: create or update an architecture decision record and architecture documentation.
- Privacy, seller verification, guarantee, support, or incident operations: update the relevant operations and governance documents.
- Financial assumptions: update finance documents with source, date, method, confidence, and observed-versus-assumed labels.
- Future ideas: place them in the idea repository; do not silently add them to the roadmap.

## Guardrails

- Evidence before complexity.
- Trust before scale.
- One transactional launch market at a time.
- Manual validation before broad automation.
- No public AI trust score, automated seller approval, dynamic pricing, or broad celebration guarantee during Phase 0.
- No corporate, supplier, academy, BNPL, loyalty-currency, national-logistics, or full event-management build in the initial phase.
- No paid ranking before relevance, disclosure, and trust rules are explicit.
- No planned capability may be described as implemented.
- No secrets, private customer data, interview PII, national IDs, or banking documents may be committed.
- Every substantial human-readable document must have English and Persian companion files.

## Review standard

A contribution is accepted only when it is:

- Connected to an approved task or decision
- Small enough to review
- Grounded in named evidence or source documents
- Within active product scope
- Tested or otherwise validated appropriately
- Safe for privacy, security, trust, and operations
- Accessible and RTL-aware where relevant
- Documented in both languages where required
- Honest about uncertainty and remaining risks

## Final rule

AI accelerates execution and thinking. It does not replace evidence, founder judgment, professional legal/compliance review, or responsibility for real customer outcomes.
