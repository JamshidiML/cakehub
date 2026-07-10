# CakeBazar Documentation and Localization Policy

**Status:** Accepted for Founder Reset v1  
**Owner:** Founder  
**Last reviewed:** 2026-07-10  
**Review cadence:** Monthly during validation  
**Persian companion:** [DOCUMENTATION_POLICY.fa.md](DOCUMENTATION_POLICY.fa.md)

## Purpose

Documentation is CakeBazar's decision system and long-term memory. It must help the founder, future team members, operators, investors, and AI agents understand what is true now, what is only a hypothesis, and what has been intentionally deferred.

## 1. Bilingual standard

Every new or substantially revised human-readable project document must be delivered as a pair:

- English: `DOCUMENT_NAME.md`
- Persian: `DOCUMENT_NAME.fa.md`

The two files must represent the same decision state. Natural translation is preferred over word-for-word translation.

This applies to strategy, product requirements, research, operations, architecture explanations, finance, investor material, contributor guidance, agent instructions, and user-facing policies.

Source code, lockfiles, generated files, machine configuration, migrations, images, and binary assets are language-neutral and are not duplicated. User-facing copy must remain localization-ready.

## 2. Canonical source of truth

Each subject must have one canonical document. Other documents may link to it but must not silently redefine it.

| Subject | Canonical location |
|---|---|
| Current company direction | `docs/strategy/FOUNDER_RESET.md` |
| Current validation work | `docs/execution/PHASE_0_PLAN.md` |
| Codex delivery backlog | `docs/execution/CODEX_TASKS.md` |
| AI collaboration model | `AI_COLLABORATION.md` |
| Current project context | `PROJECT_CONTEXT.md` |
| Major decisions | `docs/decisions/DECISION_LOG.md` |
| Evidence and learnings | `docs/research/` |
| Future ideas | `docs/ideas/` |
| Current implementation status | root `README.md` |

If documents conflict, the newest accepted canonical document wins and the conflict must be logged for cleanup.

## 3. Required document header

Canonical documents should state:

- Status: Draft, Proposed, Accepted, Superseded, or Archived
- Owner
- Last reviewed date
- Next review trigger or cadence
- Link to the language companion

## 4. Evidence labels

Important claims must be labeled as one of:

- **Observed:** directly measured or witnessed
- **Validated:** supported by repeated evidence against a predefined threshold
- **Hypothesis:** plausible but not yet tested
- **Assumption:** used for planning and especially uncertain
- **Estimate:** numerical approximation with method and date
- **Decision:** an explicit choice with rationale

Repeating a hypothesis across many documents does not turn it into a fact.

## 5. Current versus target state

Product, architecture, competitor, finance, and investor documents must separate:

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

Unvalidated figures must be marked as assumptions. Revenue is not contribution margin. Customer lifetime value should normally be based on contribution margin rather than gross revenue.

## 7. Research discipline

Interview templates are not evidence. A completed research record must include:

- Evidence ID
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

- Exact date and owner
- Problem or trigger
- Options considered
- Evidence available
- Chosen option and rationale
- Risks
- Reversible or irreversible classification
- Review trigger
- Status

## 9. AI and Codex rules

AI-generated content is a draft until reviewed against evidence.

Codex must receive repository rules through `AGENTS.md` and task-specific acceptance criteria. Every implementation task must:

1. Link to an issue or task ID.
2. State in-scope and out-of-scope work.
3. Add or update tests when behavior changes.
4. Run required checks.
5. Update both language versions of affected human-readable documentation.
6. Open a focused pull request.
7. Avoid inventing market evidence, legal conclusions, financial proof, or product requirements.

## 10. Legacy-document migration

Existing mixed-language, duplicated, empty, or aspirational documents are not deleted blindly. They will be classified as:

- Canonical and paired
- Consolidated into another document
- Historical/legacy
- Archived
- Deleted as accidental artifact

Until that migration is complete, the root README and accepted Founder Reset documents define current truth.

## Founder rule

> Fewer documents with evidence are more valuable than hundreds of pages of untested certainty.
