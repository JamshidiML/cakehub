# ARCHITECTURE.md

# CakeBazar System Architecture

# معماری سیستم CakeBazar

---

# Purpose

# هدف

This document defines the technical architecture of CakeBazar.

The goal is to build a scalable, modular, secure, and AI-ready platform.

---

هدف این سند تعریف معماری فنی CakeBazar است.

هدف، ساخت پلتفرمی مقیاس‌پذیر، ماژولار، امن و آماده برای توسعه هوش مصنوعی است.

---

# Architecture Philosophy

# فلسفه معماری

## English

CakeBazar should be built as a modular platform, not as a simple website.

Each part of the system should be independent enough to evolve over time.

---

## فارسی

CakeBazar نباید فقط به شکل یک سایت ساده ساخته شود.

این پروژه باید به‌صورت یک پلتفرم ماژولار طراحی شود تا هر بخش بتواند در آینده مستقل رشد کند.

---

# High-Level System

CakeBazar consists of:

* Web Application
* Backend API
* Database
* AI Service
* Telegram Bot
* Admin Panel
* Storage Service
* Payment Gateway
* Notification System

---

# Monorepo Structure

```text
cakehub
├── apps
│   ├── web
│   ├── api
│   └── ai
├── packages
│   ├── shared
│   └── ui
├── infra
│   ├── docker
│   ├── nginx
│   └── postgres
├── docs
│   ├── vision
│   ├── strategy
│   ├── business
│   ├── product
│   ├── architecture
│   ├── ideas
│   ├── decisions
│   └── research
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# Frontend Architecture

## App

`apps/web`

## Technology

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion

## Responsibilities

* Homepage
* Cake gallery
* Product pages
* Seller profiles
* Customer registration
* Seller registration
* Order request flow
* Dashboard pages

## Main Routes

```text
/
```

```text
/cakes
```

```text
/cakes/[slug]
```

```text
/sellers
```

```text
/sellers/[slug]
```

```text
/auth/login
```

```text
/dashboard
```

---

# Backend Architecture

## App

`apps/api`

## Technology

* FastAPI
* Python
* SQLAlchemy
* Pydantic
* Alembic

## Responsibilities

* Authentication
* User management
* Seller management
* Product management
* Order management
* Reviews
* Payments
* Notifications
* Admin operations
* AI service integration

## API Modules

```text
/api/auth
/api/users
/api/sellers
/api/products
/api/orders
/api/reviews
/api/payments
/api/notifications
/api/custom-requests
/api/recommendations
```

---

# Database Architecture

## Database

PostgreSQL

## Core Tables

```text
users
sellers
products
categories
product_images
product_variants
orders
order_items
reviews
payments
commissions
custom_cake_requests
seller_scores
customer_profiles
celebration_events
notifications
```

## Future Tables

```text
nutrition_profiles
food_safety_documents
supplier_products
academy_courses
corporate_accounts
agent_tasks
```

---

# AI Service Architecture

## App

`apps/ai`

## Technology

* Python
* FastAPI
* scikit-learn
* PyTorch
* LangChain or custom agent framework in future

## Initial AI Scope

AI is not required for MVP 1.

The system should be AI-ready, but not AI-dependent.

## Future AI Features

* AI Cake Advisor
* AI Seller Matching
* AI Price Estimator
* AI Demand Forecasting
* AI Delivery Risk Prediction
* AI Marketing Assistant
* AI Celebration Assistant

---

# Telegram Bot Architecture

## Purpose

Telegram Bot is used for lightweight ordering, seller communication, and future notifications.

## Rule

The bot must not connect directly to the database.

It must communicate only with the Backend API.

## Flow

```text
Telegram User
↓
Telegram Bot
↓
Backend API
↓
Database
```

---

# Payment Architecture

## Gateways

* Zarinpal
* Zibal
* Future bank partnerships

## Flow

```text
Create Order
↓
Create Payment Request
↓
Redirect Customer
↓
Verify Payment
↓
Confirm Order
↓
Notify Seller
```

---

# Storage Architecture

## Purpose

Store:

* Product images
* Seller images
* Custom cake request images
* Final order photos
* Food safety documents

## Options

Development:

* Local storage
* MinIO

Production:

* S3-compatible storage
* ArvanCloud Object Storage
* Liara Object Storage

---

# Notification Architecture

## Channels

* SMS
* Telegram
* WhatsApp
* Email
* In-app notifications

## Events

* Order created
* Order accepted
* Order rejected
* Delivery reminder
* Payment success
* Seller verification
* Celebration reminder

---

# Security Architecture

## Rules

* Never commit `.env` files
* Never store payment card data
* Validate all uploaded files
* Use role-based access control
* Separate admin access from customer access
* Log important actions
* Protect seller and customer data

## Roles

```text
customer
seller
admin
support
corporate_admin
```

---

# Admin Architecture

## Purpose

Admin panel controls:

* Sellers
* Products
* Orders
* Reviews
* Payments
* Complaints
* Commissions
* Verification

## Initial Option

Use a simple internal dashboard.

## Future Option

Dedicated admin web application.

---

# Deployment Architecture

## Development

* Local machine
* Docker Compose
* PostgreSQL local

## Production

* VPS
* Docker
* Nginx
* PostgreSQL
* Object Storage
* SSL Certificate

---

# Scalability Principles

* Start simple
* Separate concerns
* Avoid premature microservices
* Keep API modular
* Design database carefully
* Add AI and agents only after real data exists

---

# Architecture Roadmap

## Phase 1

Monorepo + Frontend MVP

## Phase 2

Backend API + PostgreSQL

## Phase 3

Authentication + Seller/Product/Order modules

## Phase 4

Payment + Notifications

## Phase 5

AI Service

## Phase 6

Agent Architecture

---

# Final Rule

CakeBazar architecture should support the long-term vision, but should not overcomplicate the MVP.

Build for learning first.

Scale after validation.
