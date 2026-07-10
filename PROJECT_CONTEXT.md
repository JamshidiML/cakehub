# Project Context

## One-Line Summary

CakeBazar is a trust-first marketplace concept for cakes and celebration services, currently represented by a Next.js frontend prototype and extensive startup/product documentation.

## Current Reality

The repository is not yet a full marketplace application. The implemented code is concentrated in `apps/web`, which is a polished static frontend prototype. The broader backend and operations systems described in the documents are mostly planned, not implemented.

Currently present:

- Next.js frontend prototype.
- Product, strategy, research, finance, investor, architecture, and operations documents.
- File-by-file startup audit in English and Persian.
- Legacy CakeBazar documents preserved under `docs/legacy/cakebazar`.

Not yet present as implemented systems:

- Production backend API.
- Database schema and migrations.
- Authentication.
- Seller onboarding workflow.
- Listing management workflow.
- Order workflow.
- Payment workflow.
- Admin dashboard.
- Trust score engine.
- Incident operations tooling.

## Product Thesis

Celebration purchases are emotionally important and operationally fragile. Customers need trust, reliability, and recovery support more than another generic catalog. CakeBazar should prove that verified sellers, structured requests, transparent reliability signals, and human support can produce better celebration outcomes.

## Strategic Principles

- Trust before growth.
- Marketplace first.
- Data before AI.
- One city before one country.
- Manual validation before automation.
- Seller quality before seller quantity.
- Customer outcome before feature count.

## MVP Direction

The current documentation contains a broad MVP. The audit recommends cutting it down into a manual pilot before building a full platform.

Recommended validation wedge:

- One city.
- Around 20 real sellers.
- Manual seller verification.
- Simple listing/request capture.
- Manual matching and follow-up.
- Post-event customer feedback.
- Seller response and reliability tracking.

## Important Open Risks

- Documentation scope is much larger than implemented software.
- Several docs overlap or conflict, especially around architecture, AI timing, monetization, and MVP size.
- Market and competitor claims need current external evidence before investor use.
- Trust operations imply legal, privacy, fairness, and support obligations that are not staffed or tooled yet.
- Paid ranking and sponsored placement may damage trust if introduced too early.

## Current Priority

Move from broad strategy to evidence:

1. Clean repository source of truth.
2. Create GitHub issues for validation tasks.
3. Run customer and seller interviews.
4. Run a manual one-city pilot.
5. Use results to define the first buildable vertical slice.

## How To Use This File

Any human or AI assistant joining the project should read this file first, then inspect the linked source documents before making recommendations or code changes.
