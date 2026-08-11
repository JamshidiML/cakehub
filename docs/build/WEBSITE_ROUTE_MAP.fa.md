# نقشه مسیرهای وب‌سایت CakeBazar

**وضعیت:** پیشنهادی
**مالک:** بنیان‌گذار + راهبر استراتژی ChatGPT
**آخرین بازبینی:** 2026-08-12
**محرک بازبینی:** شواهد فاز صفر `CDX-003` را آزاد کند یا معماری وب‌سایت به‌طور اساسی تغییر کند
**نسخه انگلیسی:** [WEBSITE_ROUTE_MAP.md](WEBSITE_ROUTE_MAP.md)

## مرجعیت

این route map تابع Founder Reset پذیرفته‌شده و backlog اجرایی canonical است. وجود یک route در فهرست، evidence برای پیاده‌سازی فوری آن نیست.

## اصول routing

- سطح‌های public، customer، seller و operations جدا بمانند.
- یک vertical slice مبتنی بر evidence بر تعداد زیادی صفحه خالی اولویت دارد.
- کنترل‌های dead به‌عنوان قابلیت عملی marketplace نمایش داده نشوند.
- معماری برای فارسی (`fa`)، انگلیسی (`en`) و آلمانی (`de`) آماده شود، بدون اختراع قواعد بازار.
- پیش از ذخیره داده شخصی واقعی، مسیرهای operations محافظت شوند.
- برای کار request و persistence از gateهای canonical یعنی `CDX-003` و `CDX-004` استفاده شود.

## زبان وضعیت‌ها

- **Implemented now:** در مخزن فعلی موجود و functional است.
- **Architecture preparation:** مرزها و dependencyها قابل برنامه‌ریزی‌اند؛ رفتار محصول تأیید نشده است.
- **Build next:** فقط پس از عبور gate نام‌برده مجاز است.
- **Manual in pilot:** پیش از automation عمداً توسط انسان اجرا می‌شود.
- **Blocked by evidence:** پیاده‌سازی باید منتظر evidence تحقیق یا outcome بماند.
- **Blocked by legal/compliance:** پیاده‌سازی به review حرفه‌ای مخصوص بازار نیاز دارد.
- **Future:** عمداً به آینده موکول شده است.

## مسیرهای عمومی

| Route | وضعیت | هدف و gate |
| --- | --- | --- |
| `/` | Implemented now | homepage سینماتیک فارسی؛ کنترل‌های غیرfunctional یک محدودیت شناخته‌شده‌اند. |
| `/request` | Blocked by evidence | `CDX-003`: یافته‌های هفته دوم باید fieldهای مشتری را پیش از پیاده‌سازی تأیید کند. |
| `/request/confirmation` | Build next | همراه prototype تأییدشده `CDX-003` ساخته شود و follow-up دستی را صادقانه توضیح دهد. |
| `/discover` | Future | به داده صادقانه seller/category و discovery model تأییدشده نیاز دارد. |
| `/cakes` | Future | catalog فقط پس از پذیرش قواعد داده واقعی یا صریحاً synthetic. |
| `/creators` | Blocked by evidence | به seller model معتبر پایلوت و policy داده عمومی نیاز دارد. |
| `/creators/[slug]` | Future | profile فروشنده پس از وجود داده تأییدشده و مرز verification. |
| `/how-it-works` | Build next | وقتی workflow واقعی پایلوت و ادعاهای عمومی تأیید شدند، مجاز است. |
| `/trust` | Blocked by evidence | به trust evidence factual نیاز دارد؛ بدون score یا guarantee جعلی. |
| `/about` | Future | داستان برند/شرکت پس از برآورده شدن نیازهای اصلی validation. |
| `/help` | Future | محتوای support بر پایه پرسش‌ها و incidentهای مشاهده‌شده. |
| `/sell` | Build next | پس از تأیید بازار منتخب و فرایند جذب seller مجاز است. |
| `/legal/...` | Blocked by legal/compliance | privacy، terms، food و platform notice مخصوص بازار به review نیاز دارد. |

## مسیرهای مشتری

| Route | وضعیت | هدف و gate |
| --- | --- | --- |
| `/account` | Future | به authentication و scope تأییدشده account نیاز دارد. |
| `/account/requests` | Future | به persistence امن request و authorization نیاز دارد. |
| `/account/requests/[id]` | Future | به ownership check، status rules و داده محافظت‌شده نیاز دارد. |
| `/account/orders` | Future | به order model تأییدشده نیاز دارد. |
| `/account/orders/[id]` | Future | به rules مربوط به order، support و incident نیاز دارد. |
| `/account/favorites` | Future | به discovery واقعی و identity نیاز دارد. |
| `/account/messages` | Future | به تصمیم communication، moderation، retention و privacy نیاز دارد. |
| `/account/profile` | Future | به تصمیم identity و consent preference نیاز دارد. |

## مسیرهای فروشنده

| Route | وضعیت | هدف و gate |
| --- | --- | --- |
| `/seller` | Future | workspace پس از تأیید scope فروشنده و authentication. |
| `/seller/requests` | Manual in pilot | تماس با واسطه operator پیش از self-service فروشنده انجام می‌شود. |
| `/seller/quotes` | Future | به contractهای request، seller و quote نیاز دارد. |
| `/seller/orders` | Future | به order model و operating rule تأییدشده نیاز دارد. |
| `/seller/calendar` | Future | به نیاز معتبر capacity و availability وابسته است. |
| `/seller/portfolio` | Future | به rules مالکیت، moderation، storage و داده عمومی نیاز دارد. |
| `/seller/profile` | Future | به identity فروشنده و fieldهای بازار تأییدشده نیاز دارد. |
| `/seller/performance` | Blocked by evidence | به رفتار verified کافی، explainability و قواعد appeal نیاز دارد. |
| `/seller/messages` | Future | به معماری communication و privacy نیاز دارد. |

## مسیرهای عملیات

| Route | وضعیت | هدف و gate |
| --- | --- | --- |
| `/ops` | Build next | shell فقط با scope تأییدشده عملیات و دسترسی محافظت‌شده مجاز است. |
| `/ops/requests` | Build next | `CDX-004`: به `CDX-003` آزادشده و تصمیم تأییدشده persistence، privacy و بازار نیاز دارد. |
| `/ops/requests/[id]` | Build next | همان gate مربوط به `CDX-004`؛ شامل detail خصوصی، notes و history وضعیت. |
| `/ops/sellers` | Build next | به بازار منتخب و حداقل ۱۰ seller مایل به پایلوت نیاز دارد. |
| `/ops/orders` | Future | به quote/order model پذیرفته‌شده نیاز دارد. |
| `/ops/incidents` | Future | بازیابی انسان‌محور پس از وجود عملیات fulfillment واقعی. |
| `/ops/verification` | Manual in pilot | پیش از automation از checklist دستی تأییدشده استفاده شود. |
| `/ops/reviews` | Future | به order تکمیل‌شده verified و moderation rules نیاز دارد. |
| `/ops/content` | Future | به نیاز اثبات‌شده مدیریت content وابسته است. |
| `/ops/analytics` | Build next | به flow واقعی، event contract تأییدشده و instrumentation امن از نظر PII نیاز دارد. |

## استراتژی route برای localization

routeهای احتمالی آینده `/fa/...`، `/en/...` و `/de/...` هستند. `/` فعلی Persian-first می‌ماند. convention نهایی routing یک تصمیم معماری است و باید پیش از پیاده‌سازی چند route عمومی گرفته شود، بدون این فرض که locale همان market است.

## اولین route slice برنامه‌ریزی‌شده

توالی route موردنظر چنین است:

1. `/` فقط پس از آزاد شدن `CDX-003` و وجود مقصد functional به `/request` وصل شود.
2. `/request` فقط field و validation تأییدشده با evidence را پیاده‌سازی کند.
3. `/request/confirmation` فرایند واقعی follow-up دستی را بیان کند.
4. `/ops/requests` فقط پس از تصمیم persistence و access در `CDX-004` پیاده‌سازی شود.

آماده‌سازی معماری این مرزها اکنون مجاز است؛ پیاده‌سازی محصول مجاز نیست.

## routeهایی که اکنون باید اجتناب شوند

- صفحات SEO شهری/دسته‌ای بدون evidence.
- صفحه عمومی trust score یا performance فروشنده.
- dashboard شرکتی، supplier marketplace، academy یا logistics network.
- صفحات AI-branded که automation پشتیبانی‌نشده را القا می‌کنند.
- صفحات static operator که به‌عنوان صف امن و عملیاتی معرفی شوند.
