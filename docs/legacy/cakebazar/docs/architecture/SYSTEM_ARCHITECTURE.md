# CakeBazar System Architecture

## Purpose

This document defines the first technical direction for CakeBazar. It should stay
simple enough for an MVP while leaving room for a trusted marketplace, AI tools,
and future celebration-platform expansion.

## Architecture Recommendation

Use a modular monolith for the MVP.

Why:

- Faster to build
- Easier to debug
- Lower infrastructure complexity
- Strong enough for early marketplace validation
- Can be split into services later if demand proves it

Avoid microservices until there is real operational pressure.

## Proposed Stack

Frontend:

- Next.js
- Responsive mobile-first UI
- Server-rendered public marketplace pages for SEO

Backend:

- Next.js API routes or a small Node.js backend
- Modular domain boundaries
- Admin-only moderation endpoints

Database:

- PostgreSQL
- Relational model for users, sellers, listings, orders, reviews, and trust data

Storage:

- Object storage for seller portfolio images, listing photos, and uploaded order
  references

Search:

- Start with PostgreSQL search and filters
- Add a dedicated search engine only when taxonomy, traffic, and ranking needs
  justify it

Notifications:

- Email first
- WhatsApp or SMS later if customer behavior proves it is needed

AI:

- Keep AI as an optional service layer
- Start with internal tools for listing quality, order brief completion, and
  moderation support

## Core Domains

Customer:

- Account
- Favorites or saved sellers later
- Order requests
- Reviews

Seller:

- Registration
- Verification
- Profile
- Listings
- Availability
- Order responses

Marketplace:

- Categories
- City or region filters
- Search
- Seller ranking
- Trust signals

Orders:

- Custom request
- Quote
- Status
- Attachments
- Customer and seller communication handoff

Trust:

- Verification status
- Reliability score
- Review quality
- Response time
- Cancellation and completion history

Admin:

- Seller approval
- Listing moderation
- Review moderation
- Trust score review
- Dispute handling

## MVP Data Model

Initial entities:

- User
- SellerProfile
- SellerVerification
- CakeListing
- Category
- Location
- OrderRequest
- OrderAttachment
- Review
- ReliabilitySignal
- AdminAction

## Request Flow

1. Customer browses category or city.
2. Customer opens seller profile or listing.
3. Customer checks trust signals and portfolio.
4. Customer submits structured order request.
5. Seller receives request notification.
6. Seller responds with availability or quote.
7. Customer confirms externally or through later payment flow.
8. Customer leaves post-event feedback.
9. Trust data updates seller reliability.

## AI Placement

AI should not be the core architecture in the MVP. It should assist narrow tasks:

- Suggest missing fields in an order brief
- Improve seller listing descriptions
- Classify cake style and occasion
- Flag low-quality or suspicious listings
- Summarize customer feedback for admin review

AI must not replace human trust decisions until enough data exists.

## Scaling Path

Stage 1:

- Modular monolith
- PostgreSQL
- Manual admin moderation

Stage 2:

- Dedicated background jobs
- Search optimization
- Notification service
- Trust score pipeline

Stage 3:

- Split high-load domains if needed
- Dedicated AI service
- Event stream for marketplace and trust events
- Data warehouse for marketplace analytics

## Architecture Rule

Build only the technical complexity required to validate trust, supply, demand,
and completed celebrations. The system should serve the marketplace, not impress
the architecture diagram.

