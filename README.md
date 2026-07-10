# CakeHub / CakeBazar

CakeHub is the working repository for CakeBazar, a trust-first marketplace concept for cakes and celebration services.

The project is currently a strategic prototype: it has a polished Next.js frontend under `apps/web` and a broad documentation system under `docs`, but the production marketplace backend, database, authentication, seller workflow, order workflow, and admin systems are not implemented yet.

## Current Source Of Truth

- Product strategy: `docs/product/PRODUCT_STRATEGY.md`
- MVP requirements: `docs/product/PRD.md`
- Architecture direction: `docs/architecture/ARCHITECTURE.md`
- Startup audit: `docs/audit/COMPREHENSIVE_STARTUP_AUDIT.md`
- Persian audit companion: `docs/audit/COMPREHENSIVE_STARTUP_AUDIT_FA.md`
- AI collaboration rules: `AI_COLLABORATION.md`
- Project context for assistants: `PROJECT_CONTEXT.md`

## Repository Map

- `apps/web`: Next.js frontend prototype.
- `docs/product`: product strategy, PRD, stories, epics, metrics, and release planning.
- `docs/research`: assumptions, experiments, interview guides, market research, and competitor analysis.
- `docs/operations`: trust, seller verification, risk, guarantee, and incident response docs.
- `docs/architecture`: system and future agent architecture.
- `docs/audit`: file-by-file startup audit and Persian companion.
- `docs/legacy/cakebazar`: older CakeBazar documents preserved during consolidation.

## Strategic Guardrails

- Trust before growth.
- Marketplace first.
- Data before AI.
- One city before one country.
- Manual validation before broad automation.

## Recommended Next Phase

The next phase should be a narrow validation pilot, not a broad feature build:

1. Choose one launch city.
2. Recruit a small group of real sellers.
3. Run manual seller verification.
4. Collect structured customer requests.
5. Track seller response quality, delivery reliability, and post-event satisfaction.
6. Use findings to reduce the MVP scope before building backend systems.

## Local Development

Frontend app:

```bash
cd apps/web
npm install
npm run dev
```

Build:

```bash
cd apps/web
npm run build
```

## Collaboration Model

GitHub is the shared source of truth for humans and AI assistants. Important decisions, specs, tasks, and reviews should be recorded in repository files, issues, pull requests, or commits rather than only in chat.
