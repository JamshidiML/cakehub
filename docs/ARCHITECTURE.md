# CakeBazar Architecture v1.0

## هدف سند

این سند معماری فنی پروژه `CakeBazar` را توضیح می‌دهد.

هدف این است که پروژه از ابتدا به‌صورت قابل توسعه، امن و مناسب برای رشد استارتاپی طراحی شود.

---

# System Overview

`CakeBazar` یک پلتفرم مارکت‌پلیس هوشمند برای سفارش کیک خانگی است.

سیستم شامل بخش‌های زیر است:

* `Web Application`
* `Backend API`
* `Database`
* `AI Service`
* `Telegram Bot`
* `Storage`
* `Admin Panel`
* `Payment Gateway`

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
│   ├── PRODUCT_STRATEGY.md
│   ├── BUSINESS_MODEL.md
│   ├── MVP_ROADMAP.md
│   └── ARCHITECTURE.md
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# Frontend Architecture

## App

`apps/web`

## Technology

* `Next.js`
* `TypeScript`
* `Tailwind CSS`
* `Framer Motion`

## Responsibilities

* نمایش صفحه اصلی
* نمایش گالری کیک‌ها
* نمایش صفحه محصول
* نمایش صفحه فروشنده
* ثبت سفارش
* داشبورد مشتری
* داشبورد فروشنده

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
/orders
```

```text
/dashboard
```

---

# Backend Architecture

## App

`apps/api`

## Technology

* `FastAPI`
* `Python`
* `SQLAlchemy`
* `Pydantic`

## Responsibilities

* احراز هویت کاربران
* مدیریت فروشندگان
* مدیریت محصولات
* مدیریت سفارش‌ها
* مدیریت پرداخت‌ها
* مدیریت امتیازدهی
* ارسال نوتیفیکیشن
* اتصال به سرویس هوش مصنوعی

## API Modules

```text
/api/auth
```

```text
/api/users
```

```text
/api/sellers
```

```text
/api/products
```

```text
/api/orders
```

```text
/api/reviews
```

```text
/api/payments
```

```text
/api/custom-requests
```

```text
/api/recommendations
```

---

# Database Architecture

## Database

`PostgreSQL`

## Main Tables

* `users`
* `sellers`
* `products`
* `categories`
* `orders`
* `order_items`
* `reviews`
* `payments`
* `commissions`
* `custom_cake_requests`
* `seller_scores`
* `nutrition_profiles`
* `food_safety_documents`

## Design Principle

تمام جدول‌ها باید انگلیسی باشند.

تمام شناسه‌ها باید قابل ردیابی باشند.

هر سفارش باید تاریخچه کامل داشته باشد.

---

# AI Service Architecture

## App

`apps/ai`

## Technology

* `Python`
* `FastAPI`
* `scikit-learn`
* `PyTorch`

## AI Features

### `AI Cake Advisor`

پیشنهاد کیک بر اساس:

* بودجه
* تعداد مهمان
* مناسبت
* شهر

### `Smart Matching`

انتخاب بهترین فروشنده بر اساس:

* موقعیت
* ظرفیت تولید
* امتیاز فروشنده
* قیمت
* زمان تحویل

### `Smart Recovery System`

اگر فروشنده سفارش را لغو کند:

* فروشندگان جایگزین پیدا می‌شوند.
* سفارش فوری بازتخصیص داده می‌شود.
* امتیاز فروشنده قبلی کاهش پیدا می‌کند.

### `Nutrition Engine`

تحلیل:

* کالری
* قند
* پروتئین
* چربی
* مواد آلرژی‌زا

---

# Telegram Bot Architecture

## Purpose

ربات تلگرام برای ثبت سریع سفارش و دریافت درخواست‌های سفارشی استفاده می‌شود.

## Flow

```text
/start
```

```text
Select city
```

```text
Select occasion
```

```text
Upload cake image
```

```text
Select budget
```

```text
Select delivery date
```

```text
Submit order request
```

## Integration

ربات باید به `Backend API` متصل شود و مستقیم با دیتابیس کار نکند.

---

# Storage Architecture

## Purpose

ذخیره تصاویر:

* عکس کیک‌ها
* عکس فروشنده‌ها
* تصاویر سفارش سفارشی
* مدارک بهداشتی
* عکس نهایی سفارش

## Options

* `S3`
* `ArvanCloud Object Storage`
* `Liara Object Storage`
* `MinIO` برای توسعه محلی

---

# Payment Architecture

## Gateways

* `Zarinpal`
* `Zibal`

## Payment Flow

```text
Create order
↓
Create payment request
↓
Redirect customer to gateway
↓
Verify payment
↓
Confirm order
↓
Notify seller
```

---

# Security Architecture

## Principles

* توکن‌ها نباید داخل Git ذخیره شوند.
* فایل‌های `.env` باید در `.gitignore` باشند.
* هر فروشنده باید احراز هویت شود.
* اطلاعات پرداخت نباید در سیستم ذخیره شود.
* فایل‌های آپلودی باید بررسی شوند.

## Sensitive Files

```text
.env
```

```text
.env.local
```

```text
.env.production
```

---

# Food Safety Architecture

## Purpose

ایجاد قابلیت پیگیری و مسئولیت‌پذیری برای هر سفارش.

## Records

برای هر سفارش باید ذخیره شود:

* فروشنده
* تاریخ تولید
* مواد اولیه
* تصاویر نهایی
* زمان تحویل
* شکایات احتمالی
* مدارک فروشنده

---

# Deployment Architecture

## Development

* Local machine
* Docker Compose
* PostgreSQL local
* MinIO local

## Production

* VPS
* Docker
* Nginx
* PostgreSQL
* Object Storage
* SSL Certificate

---

# Architecture Rule

هر قابلیت جدید باید با این سؤال بررسی شود:

آیا این قابلیت به یکی از این اهداف کمک می‌کند؟

* افزایش اعتماد مشتری
* افزایش سفارش
* افزایش کیفیت فروشندگان
* کاهش ریسک
* افزایش درآمد
