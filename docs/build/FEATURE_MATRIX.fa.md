# ماتریس قابلیت‌های وب‌سایت CakeBazar

**وضعیت:** پیشنهادی
**مالک:** بنیان‌گذار + راهبر استراتژی ChatGPT
**آخرین بازبینی:** 2026-08-12
**محرک بازبینی:** شواهد فاز صفر `CDX-003` را آزاد کند یا معماری وب‌سایت به‌طور اساسی تغییر کند
**نسخه انگلیسی:** [FEATURE_MATRIX.md](FEATURE_MATRIX.md)

## مرجعیت و طبقه‌بندی

این matrix محدوده وب‌سایت را کنترل می‌کند و تابع Founder Reset پذیرفته‌شده، برنامه فاز صفر و backlog canonical Codex است.

- **Implemented now:** در مخزن موجود و functional است.
- **Architecture preparation:** interface، boundary یا پرسش تصمیم قابل آماده‌سازی است، بدون freeze کردن رفتار محصول.
- **Build next:** فقط پس از عبور gate نام‌برده مجاز است.
- **Manual in pilot:** عمداً پیش از automation توسط انسان اجرا می‌شود.
- **Blocked by evidence:** پیاده‌سازی منتظر discovery یا outcome verified می‌ماند.
- **Blocked by legal/compliance:** پیاده‌سازی منتظر review حرفه‌ای مخصوص بازار می‌ماند.
- **Future:** عمداً به آینده موکول شده است.
- **Rejected:** خارج از جهت تأییدشده است.

## ماتریس

| قابلیت | وضعیت | دلیل / gate |
| --- | --- | --- |
| homepage سینماتیک فارسی | Implemented now | هویت premium، emotional و food-first آن حفظ شود. |
| پاک‌سازی navigation homepage | Architecture preparation | کنترل‌های dead اکنون inventory شوند؛ link فقط وقتی فعال شود که مقصد صادقانه وجود دارد. |
| CTA درخواست در homepage | Build next | فقط همراه مقصد functional در `CDX-003` فعال شود. |
| سند فرضیه دامنه درخواست | Architecture preparation | می‌تواند پرسش‌ها و مفهوم‌های candidate را فهرست کند؛ نباید fieldهای production را freeze کند. |
| flow ساختاریافته درخواست کیک | Blocked by evidence | `CDX-003`: یافته‌های هفته دوم مشتری/فروشنده باید fieldها را تأیید کند. |
| schema درخواست production | Blocked by evidence | به field تأییدشده، data classification و تصمیم ownership نیاز دارد. |
| پیاده‌سازی validation درخواست | Blocked by evidence | به schema تأییدشده نیاز دارد؛ برای submission واقعی validation سمت server اجباری است. |
| UI تأیید درخواست | Build next | همراه `CDX-003` آزادشده ساخته شود و فرایند واقعی follow-up دستی را بیان کند. |
| persistence درخواست | Build next | `CDX-004`: به `CDX-003` آزادشده و تصمیم تأییدشده داده/بازار نیاز دارد. |
| صف داخلی عملیات | Build next | `CDX-004`: به persistence، privacy، retention، export و access control تأییدشده نیاز دارد. |
| script typecheck | Implemented now | در این PR برنامه‌ریزی به‌عنوان quality gate اضافه شده است. |
| design system کامل | Architecture preparation | پیش از افزایش routeها، token و primitive حداقلی تعریف شود. |
| کیفیت فارسی RTL | Architecture preparation | قوت فعلی حفظ و review سیستماتیک RTL/accessibility برنامه‌ریزی شود. |
| locale انگلیسی | Future | در جهت بلندمدت لازم است، اما gate validation فعلی نیست. |
| locale آلمانی | Future | به localization و review حقوقی/عملیاتی مخصوص بازار نیاز دارد. |
| مرز locale/market | Architecture preparation | language با market یکی فرض نشود و rules ایران/آلمان hard-code نشود. |
| دستیار portion/size | Blocked by evidence | به نیاز مشاهده‌شده مشتری و روش صریح estimate نیاز دارد. |
| fieldهای dietary/allergen | Blocked by evidence | field و disclaimer به discovery و review مخصوص بازار نیاز دارد؛ medical inference ممنوع است. |
| محاسبات nutrition | Blocked by evidence | nutrition data اختراع نشود؛ داده seller-confirmed از estimate جدا باشد. |
| جذب seller | Manual in pilot | founder/operator در validation با sellerها تماس می‌گیرد. |
| discovery فروشنده | Blocked by evidence | به seller supply معتبر، rules داده عمومی و availability صادقانه نیاز دارد. |
| card و profile فروشنده | Future | بدون seller، rating، availability یا verification claim جعلی. |
| workspace فروشنده | Future | پس از اعتبارسنجی scope فروشنده، auth و نیاز عملیاتی ساخته شود. |
| account/dashboard مشتری | Future | به تصمیم identity، persistence، privacy و support نیاز دارد. |
| managed matching | Manual in pilot | matching با واسطه operator پیش از automation انجام می‌شود. |
| invitation فروشنده | Manual in pilot | تماس operator برای learning اولیه کافی است. |
| جمع‌آوری و normalization quote | Manual in pilot | field و effort واقعی پیش از self-service یاد گرفته شود. |
| UI ثبت/مقایسه quote | Future | به model تأییدشده request، seller و quote نیاز دارد. |
| پردازش payment | Blocked by legal/compliance | به بازار منتخب و تصمیم provider، contract، refund، tax و privacy نیاز دارد. |
| deposit/refund/payout | Blocked by legal/compliance | به معماری حقوقی و payment مخصوص بازار نیاز دارد. |
| مدل trust evidence | Architecture preparation | پرسش‌های evidence factual تعریف شود؛ پیاده‌سازی به outcome verified نیاز دارد. |
| reliability score عمومی | Blocked by evidence | به sample size، explainability، governance و appeal نیاز دارد؛ score مبهم ممنوع است. |
| verification فروشنده | Manual in pilot | checklist reviewشده مخصوص بازار و رکورد operator استفاده شود. |
| reviewها | Future | باید به transaction تکمیل‌شده verified و moderation rules متصل باشد. |
| رسیدگی به incident و recovery | Manual in pilot | ابتدا workflow انسان‌محور؛ failure mode واقعی پیش از tooling ثبت شود. |
| تلاش برای seller جایگزین اضطراری | Manual in pilot | می‌تواند عملیاتی امتحان شود اما نباید guarantee وعده داده شود. |
| celebration guarantee | Blocked by legal/compliance | بدون proof حقوقی، مالی، seller density و operations وعده گسترده ممنوع است. |
| پرسش‌های privacy/data classification | Architecture preparation | تصمیم‌ها پیش از جمع‌آوری PII واقعی آماده شوند. |
| کنترل‌های privacy در production | Build next | همراه `CDX-003`/`CDX-004`، بازار منتخب، consent و retention پیاده‌سازی شود. |
| threat model امنیتی | Architecture preparation | باید پیش از tooling محافظت‌شده operator و PII واقعی انجام شود. |
| authentication/authorization | Build next | در `CDX-004` و پیش از صف واقعی عملیات لازم است. |
| contract eventهای analytics | Architecture preparation | مستقل از vendor و امن از نظر PII؛ پیاده‌سازی پس از flow واقعی تأییدشده. |
| پیاده‌سازی analytics/observability | Build next | به flow functional و policy تأییدشده event/data نیاز دارد. |
| ساختاربندی request با AI | Future | به داده ساختاریافته واقعی، evaluation و review انسانی نیاز دارد. |
| matching seller با AI | Blocked by evidence | به supply، request، outcome واقعی و safety evaluation نیاز دارد. |
| تصمیم trust/safety با AI | Rejected | AI نباید تصمیم نهایی trust، legal، safety، seller eligibility یا pricing بگیرد. |
| discovery مبتنی بر image | Future | به‌عنوان ایده حفظ شود؛ accuracy overclaim نشود. |
| voice input | Future | به transcription، confirmation، accessibility و privacy design نیاز دارد. |
| supplier marketplace | Future | به‌عنوان module مستقل آینده حفظ شود. |
| academy/certification | Future | بدون authority و evidence، ادعای certification رسمی ممنوع است. |
| Corporate/B2B | Future | خارج از scope validation اولیه است. |
| logistics network | Future | delivery/pickup فروشنده و عملیات دستی مقدم است. |
| صفحات legal | Blocked by legal/compliance | به review حرفه‌ای مخصوص بازار نیاز دارد. |
| quality gateهای CI | Build next | CI متمرکز برای install، lint، typecheck، build و tests اضافه شود. |
| remediation وابستگی/security | Build next | پیش از پذیرش PII واقعی مشتری یک PR متمرکز جدا لازم است. |
| test خودکار رفتار | Build next | با هر رفتار functional آزادشده اضافه شود؛ این PR رفتار اضافه نمی‌کند. |
| گسترش routeهای SEO | Future | پیش از content و داده معتبر از routeهای generated کم‌کیفیت اجتناب شود. |

## آماده‌سازی معماری مجاز اکنون

- مرز route و component مستند شود.
- مفهوم‌های candidate دامنه به‌عنوان hypothesis و open question ثبت شوند.
- مرز locale و market تعریف شود.
- پرسش‌های privacy، threat model، analytics contract و persistence ADR آماده شوند.
- ایده‌های آینده founder در این matrix حفظ شوند، بدون معرفی آن‌ها به‌عنوان قابلیت فعلی.

## اولین implementation slice برنامه‌ریزی‌شده

توالی موردنظر چنین است:

`Homepage CTA -> structured request -> validation -> confirmation -> protected operator queue`

این توالی به‌صورت یک block آزاد نشده است:

- fieldها و validation درخواست تا زمانی که یافته‌های هفته دوم `CDX-003` را آزاد نکند، **Blocked by evidence** هستند.
- UI confirmation فقط همراه prototype تأییدشده `CDX-003`، **Build next** است.
- persistence و صف داخلی فقط پس از آزاد شدن `CDX-004` و تأیید تصمیم داده/بازار، **Build next** هستند.
- matching فروشنده **Manual in pilot** باقی می‌ماند.

`CBZ-P1-001` نباید به‌عنوان task schema production شروع شود. پیش از evidence، حداکثر آماده‌سازی مجاز یک سند hypothesis با label روشن است.

## صریحاً خارج از اولین slice

- accountها و marketplace عمومی فروشنده.
- payment، payout، refund و ذخیره داده کارت.
- rating عمومی، reliability score یا ادعای guarantee.
- matching خودکار یا تصمیم پرریسک AI.
- Corporate/B2B، supplier marketplace، academy و logistics ملی.

## ریسک ثبت‌شده

آخرین dependency audit شناخته‌شده یک vulnerability متوسط و شش مورد high گزارش کرد. remediation عمداً از این PR برنامه‌ریزی جدا است، اما پیش از پذیرش PII واقعی مشتری در live pilot باید در یک PR امنیتی متمرکز انجام شود.
