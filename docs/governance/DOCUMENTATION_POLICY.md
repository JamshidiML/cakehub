# CakeBazar Documentation and Localization Policy

**Status:** Accepted for Founder Reset v1  
**Owner:** Founder  
**Review cadence:** Monthly during validation  
**Persian companion:** [DOCUMENTATION_POLICY.fa.md](DOCUMENTATION_POLICY.fa.md)

## Purpose

CakeBazar must remain understandable to the founder, future team members, investors, operators, and AI coding agents. Documentation is a decision system, not a warehouse of impressive text.

## 1. Bilingual standard

Every new or substantially revised human-readable project document must be delivered as a pair:

- English: `DOCUMENT_NAME.md`
- Persian: `DOCUMENT_NAME.fa.md`

The two files must represent the same decision state. They may use natural phrasing rather than sentence-by-sentence literal translation.

### Applies to

- Strategy
- Product requirements
- Research plans and reports
- Operations manuals
- Architecture explanations
- Finance and investor documents
- Contributor and agent guidance
- User-facing policy and help content

### Does not require duplicated files

- Source code
- Package lockfiles
- Images and binary assets
- Generated artifacts
- Machine-only configuration
- Database migrations

Code remains language-neutral. User-visible text must be localization-ready and must not be hard-coded in multiple components when a shared content or i18n layer becomes justified.

## 2. Canonical source of truth

Each subject must have one canonical document. Other documents may link to it but must not silently redefine it.

Canonical areas:

| Subject | Canonical location |
|---|---|
| Current company direction | `docs/strategy/FOUNDER_RESET.md` |
| Current validation work | `docs/execution/PHASE_0_PLAN.md` |
| Codex delivery backlog | `docs/execution/CODEX_TASKS.md` |
| Major decisions | `docs/decisions/DECISION_LOG.md` |
| Evidence and learnings | `docs/research/` |
| Future ideas | `docs/ideas/` |
| Current implementation status | root `README.md` |

If two documents conflict, the newest accepted canonical document wins and the conflict must be logged for cleanup.

## 3. Required document header

Every canonical document should state:

- Status: Draft, Proposed, Accepted, Superseded, or Archived
- Owner
- Last reviewed date
- Next review trigger or cadence
- Link to language companion

## 4. Evidence labels

Important claims must be labeled as one of:

- **Observed:** directly measured or witnessed
- **Validated:** supported by repeated evidence against a predefined threshold
- **Hypothesis:** plausible but not yet tested
- **Assumption:** used for planning and especially uncertain
- **Estimate:** numerical approximation with method and date
- **Decision:** an explicit choice with rationale

Never convert a hypothesis into a fact by repeating it across documents.

## 5. Current versus target state

Product, architecture, competitor, finance, and investor documents must clearly separate:

- `Implemented now`
- `Manual in pilot`
- `Planned next`
- `Future option`
- `Rejected or paused`

Future capabilities cannot be counted as current competitive advantages.

## 6. Financial discipline

Every financial number must include:

- Currency and unit
- Date or price basis
- Source or calculation method
- Confidence level
- Owner
- Review date

Unvalidated figures must be marked as assumptions. Revenue is not contribution margin. Customer lifetime value should be based on contribution margin unless a different definition is explicitly stated.

## 7. Research discipline

Interview templates are not evidence. A completed research record must include:

- Participant segment
- Date and market
- Recruitment source
- Notes or transcript reference
- Direct observations
- Interpretation
- Confidence
- Decision impact

Sensitive personal information must be minimized and protected.

## 8. Decision discipline

A major decision must include:

- Exact date
- Decision owner
- Problem or trigger
- Options considered
- Evidence available
- Chosen option
- Risks and reversible/irreversible classification
- Review trigger
- Status

## 9. AI and Codex rules

AI-generated content is a draft until reviewed against evidence.

Codex must receive repository rules through `AGENTS.md` and task-specific acceptance criteria. Each implementation task must:

1. Link to an issue or task ID.
2. State in-scope and out-of-scope work.
3. Add or update tests when behavior changes.
4. Run required checks.
5. Update both language versions of affected human-readable documentation.
6. Open a focused pull request.
7. Avoid inventing market evidence, legal conclusions, or product requirements.

## 10. Migration of legacy documents

Existing mixed-language, duplicated, empty, or aspirational documents are not deleted immediately. They will be classified during a controlled migration as:

- Canonical and paired
- Consolidated into another document
- Historical/legacy
- Archived
- Deleted as accidental artifact

Until migration is complete, the root README and Founder Reset documents define current truth.

## Founder rule

> Fewer documents with evidence are more valuable than hundreds of pages of untested certainty.
