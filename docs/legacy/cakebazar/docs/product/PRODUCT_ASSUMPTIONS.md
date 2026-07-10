# CakeBazar Product Assumptions

## Purpose

This document captures the assumptions behind the CakeBazar MVP. Each assumption
should eventually be validated or rejected through customer interviews, seller
interviews, prototype tests, marketplace data, or controlled experiments.

## Priority Levels

- P0: must be true for the MVP to work
- P1: important for growth or trust, but not required on day one
- P2: useful later

## Assumption Table

| ID | Priority | Assumption | Risk If False | Validation Method |
| --- | --- | --- | --- | --- |
| A001 | P0 | Customers struggle to find reliable custom cake sellers through current channels. | Marketplace demand is weak. | Customer interviews and landing page demand test |
| A002 | P0 | Trust signals increase customer willingness to send an order request. | Verification and score features may not matter. | A/B test seller cards with and without trust signals |
| A003 | P0 | Sellers are willing to create profiles and publish real portfolio photos. | Supply quality will be low. | Seller onboarding interviews and manual pilot |
| A004 | P0 | A structured order request reduces back-and-forth. | Customers and sellers keep moving to unstructured chat. | Compare request completeness before and after form changes |
| A005 | P0 | A focused city or region launch is better than broad launch. | Liquidity spreads too thin. | Launch city pilot and supply-demand density tracking |
| A006 | P1 | Reliability score can be understandable and trusted by customers. | Score may feel arbitrary. | Usability test score explanation and profile layout |
| A007 | P1 | Customers want occasion-specific categories. | Category pages may not improve discovery. | Category page click and conversion analysis |
| A008 | P1 | Sellers will accept verification if it creates better leads. | Verification becomes a supply barrier. | Seller interview and onboarding completion rate |
| A009 | P1 | Real photos outperform generic or generated cake images. | Visual redesign may not improve trust. | Visual preference test and conversion test |
| A010 | P1 | Fast seller response is a major conversion driver. | Response tracking may not be worth prioritizing. | Track request-to-response time versus conversion |
| A011 | P2 | Corporate buyers need a separate workflow. | Corporate feature work may be premature. | Add corporate inquiry CTA and measure demand |
| A012 | P2 | AI-assisted cake design briefs improve request quality. | AI may add noise before core workflow works. | Prototype test after request flow has baseline data |

## MVP-Breaking Assumptions

The MVP is in danger if these are false:

- Customers do not care about trust signals.
- Sellers are not willing to join a marketplace.
- Customers prefer direct social messaging even after seeing structured profiles.
- A focused launch region cannot produce enough seller supply.

## Validation Order

Validate in this order:

1. Customer pain around discovery and trust
2. Seller willingness to join and verify
3. Order request conversion
4. Trust signal impact
5. Review and reliability score usefulness
6. Payment, delivery, and advanced operations

## Decision Rule

Do not build expensive systems for unvalidated assumptions. Start manual,
measure behavior, then automate.

