# برنامه اصلی وب‌سایت CakeBazar

**وضعیت:** پیشنهادی
**مالک:** بنیان‌گذار + راهبر استراتژی ChatGPT
**آخرین بازبینی:** 2026-08-12
**محرک بازبینی:** شواهد فاز صفر `CDX-003` را آزاد کند یا معماری وب‌سایت به‌طور اساسی تغییر کند
**نسخه انگلیسی:** [WEBSITE_MASTER_PLAN.md](WEBSITE_MASTER_PLAN.md)

## ۱. مرجعیت و محدوده

این سند معماری وب‌سایت را برنامه‌ریزی می‌کند و استراتژی شرکت، شواهد محصول یا اولویت‌های پیاده‌سازی را بازتعریف نمی‌کند.

Founder Reset پذیرفته‌شده از قبل در `main` وجود دارد و خط‌مبنای راهبردی حاکم است. این برنامه تابع اسناد زیر است:

- [`docs/strategy/FOUNDER_RESET.fa.md`](../strategy/FOUNDER_RESET.fa.md)
- [`docs/execution/PHASE_0_PLAN.fa.md`](../execution/PHASE_0_PLAN.fa.md)
- [`docs/execution/CODEX_TASKS.fa.md`](../execution/CODEX_TASKS.fa.md)
- [`docs/governance/DOCUMENTATION_POLICY.fa.md`](../governance/DOCUMENTATION_POLICY.fa.md)

اگر این برنامه با یک سند canonical پذیرفته‌شده تعارض داشته باشد، سند canonical حاکم است و این برنامه باید اصلاح شود.

## ۲. شواهد و زمینه مخزن

این برنامه با تاریخچه مخزن تا ادغام پذیرفته‌شده Founder Reset در commit `c64045f` روی `main` تطبیق داده شده است. پیش‌نویس قبلی PR بر پایه `4d90416` بود؛ آن تاریخچه قدیمی نباید استراتژی جاری تلقی شود.

زمینه بررسی‌شده شامل موارد زیر است:

- اسناد هماهنگی ریشه: `README.md`، `AGENTS.md`، `PROJECT_CONTEXT.md` و `AI_COLLABORATION.md`.
- اسناد پذیرفته‌شده strategy، execution و governance که بالاتر آمده‌اند.
- audit استارتاپ و نسخه فارسی آن در `docs/audit/`.
- اسناد product، research، operations، architecture، finance، investor، ideas، strategy و legacy.
- frontend در `apps/web` و templateهای issue/PR مخزن.

این PR هیچ یافته مصاحبه یا شواهد بازار واقعی اضافه نمی‌کند.

## ۳. وضعیت فعلی

### اکنون پیاده‌سازی شده

- frontend مبتنی بر Next.js در `apps/web`.
- homepage سینماتیک فارسی RTL با layout واکنش‌گرا، motion و تصویرهای کیک‌محور.
- مستندات گسترده دوزبانه و legacy.
- templateهای GitHub issue و pull request.

### اکنون پیاده‌سازی نشده

- flow عملی درخواست مشتری یا validation سمت سرور.
- persistence درخواست، backend API یا database.
- authentication، authorization یا مسیرهای محافظت‌شده operator.
- onboarding فروشنده، matching، quote، order، payment یا review.
- ابزار trust evidence، incident، recovery، analytics یا audit.
- routing چندزبانه انگلیسی و آلمانی.

homepage فعلی یک prototype بصری است. چند کنترل navigation، search و CTA عملیاتی نیستند و نباید به‌عنوان قابلیت کامل marketplace معرفی شوند.

## ۴. جهت محصول و طراحی که باید حفظ شود

- first impression سینماتیک و copy احساسی فارسی.
- هویت بصری premium، گرم و food-first.
- تصویرهای قوی کیک و روایت celebration.
- تعامل mobile-first و کیفیت بالای فارسی RTL.
- localization آینده انگلیسی و آلمانی بدون فرض قوانین بازاری یکسان.
- معماری ماژولار در application موجود؛ بدون microservice زودهنگام.
- عملیات trust و بازیابی incident با حضور انسان.
- بدون فروشنده، rating، ادعای trust، فعالیت marketplace یا reliability score جعلی.
- بدون ادعای حقوقی ساختگی و بدون تصمیم AI درباره trust، safety، صلاحیت فروشنده یا قیمت نهایی.

تصویر stock راه دور فقط می‌تواند material توسعه‌ای و صریحاً غیرproduction باشد. warningهای فعلی تصویر و فونت باید در یک task متمرکز پیاده‌سازی رسیدگی شوند.

## ۵. معماری اطلاعات برنامه‌ریزی‌شده

وب‌سایت در آینده می‌تواند چهار سطح متمایز داشته باشد:

1. برند عمومی و آموزش محصول.
2. درخواست مشتری و تجربه‌های account در آینده.
3. مشارکت فروشنده و workspace آینده.
4. ابزار محافظت‌شده operator.

این سطح‌ها هدف معماری‌اند، نه ادعای قابلیت فعلی. فهرست جزئی routeها و gateها در [`WEBSITE_ROUTE_MAP.fa.md`](WEBSITE_ROUTE_MAP.fa.md) قرار دارد.

آماده‌سازی معماری می‌تواند مرز routeها، مالکیت componentها، نقاط localization و پرسش‌های طبقه‌بندی داده را مشخص کند. پیاده‌سازی محصول باید از gateهای شواهد در backlog canonical پیروی کند.

## ۶. معماری دامنه و داده

مفهوم‌های زیر فقط فرضیه برنامه‌ریزی هستند:

- Market و locale.
- درخواست مشتری و وضعیت درخواست.
- occasion، timing، service area، cake brief و dietary disclosure.
- contact consent و یادداشت operator.
- seller profile، match، quote، order، review، trust evidence، incident، recovery attempt و audit event.

این نام‌ها fieldهای production، قواعد required/optional، محدودیت validation، دوره retention یا مالکیت داده را تأیید نمی‌کنند. این تصمیم‌ها به یافته‌های هفته دوم و تأییدهای مربوط به `CDX-003`/`CDX-004` نیاز دارند.

وقتی persistence بررسی می‌شود، یک architecture decision record باید کوچک‌ترین گزینه‌های production-ready را از نظر privacy، access control، deletion، export، auditability، هزینه و سادگی عملیات مقایسه کند.

## ۷. معماری فنی

stack فعلی حفظ شود مگر یک task تأییدشده نیاز به تغییر را نشان دهد:

- Next.js 16.2.9 و React 19.2.4.
- TypeScript و Tailwind CSS v4.
- Framer Motion و `lucide-react`.
- یک frontend application ماژولار.

اصول پیاده‌سازی:

- فرضیه دامنه، validation، UI، persistence و دغدغه‌های operator جدا باشند.
- پس از ایجاد submission واقعی، input نامطمئن در server اعتبارسنجی شود.
- مرز داده public و private صریح بماند.
- پیش از ذخیره PII واقعی، مسیرهای operator محافظت شوند.
- browser storage به‌عنوان persistence درخواست production استفاده نشود.
- uploadها نامطمئن فرض شوند و تا تصمیم privacy، storage، moderation و cost عقب بمانند.

## ۸. معماری localization و بازار

localeهای برنامه‌ریزی‌شده فارسی (`fa`، RTL)، انگلیسی (`en`، LTR) و آلمانی (`de`، LTR) هستند. فارسی تجربه فعلی پیاده‌سازی‌شده باقی می‌ماند.

معماری باید locale، market، currency، service area، متن consent و محتوای compliance را قابل تنظیم نگه دارد. ایران و آلمان فرضیه‌های discovery جدا هستند؛ الزامات حقوقی یا عملیاتی هیچ‌یک نباید اختراع یا به دیگری کپی شود.

## ۹. طراحی، accessibility و کیفیت تعامل

پیش از پیاده‌سازی routeهای متعدد، foundation قابل استفاده مجدد برای موارد زیر ایجاد شود:

- tokenهای typography، color، spacing و motion.
- button، form control، feedback state، dialog و sheet.
- primitiveهای layout برای RTL/LTR.
- navigation با keyboard، focus قابل مشاهده، reduced motion و label دسترس‌پذیر.
- stateهای پایدار loading، error، empty، success و در صورت لزوم offline/retry.

این آماده‌سازی باید هویت احساسی food-first را حفظ کند و محصول را به dashboard عمومی تبدیل نکند.

## ۱۰. Trust، privacy و security

trust باید با evidence محدود و factual مانند order پایلوت تکمیل‌شده یا response time مشاهده‌شده آغاز شود و در صورت نیاز basis، sample size و بازه زمانی را نشان دهد. reliability score ترکیبی تا وجود داده واقعی، explainability، governance و قواعد appeal مسدود است.

پیش از پذیرش PII واقعی مشتری:

- فقط داده لازم برای workflow تأییدشده پایلوت جمع شود.
- برای contact و follow-up رضایت صریح گرفته شود.
- قواعد retention، deletion، export و access تعریف شوند.
- داده حساس contact، dietary یا image وارد log یا analytics نشود.
- دسترسی operator با authentication و authorization تأییدشده محافظت شود.
- بازبینی متمرکز dependency/security تکمیل شود.

CakeBazar هرگز نباید داده کارت پرداخت را مستقیم ذخیره کند.

## ۱۱. Analytics و AI

معماری analytics می‌تواند به‌صورت contract مستقل از vendor آماده شود، اما پیاده‌سازی eventها پس از flow واقعی و تأییدشده انجام می‌شود. payloadها باید PII غیرضروری را حذف کنند.

AI از تصمیم‌های پرریسک کنار گذاشته شده است. کاربردهای کم‌ریسک آینده می‌توانند با review انسانی و evaluation در تشخیص اطلاعات ناقص، tagging، normalization یا summary به operator کمک کنند. AI نباید فروشنده را تأیید کند، trust score منتشر کند، قیمت نهایی بدهد یا نتیجه را تضمین کند.

## ۱۲. Gateهای شواهد و dependencyها

### CDX-003: prototype عملی mobile-first درخواست

**وضعیت فعلی:** تا زمانی که یافته‌های مصاحبه هفته دوم fieldها را تأیید نکند، مسدود است.

آماده‌سازی معماری مجاز است. fieldهای production، منطق validation و پیاده‌سازی user-facing با این برنامه آزاد نمی‌شوند.

### CDX-004: persistence حداقلی و صف admin

**وضعیت فعلی:** تا `CDX-003` و تصمیم‌های داده/بازار مسدود است.

صف operator به contract تأییدشده درخواست، تصمیم persistence، مدل privacy و دسترسی محافظت‌شده وابسته است. صف static یا browser-local نباید به‌عنوان قابلیت production عملیات معرفی شود.

### dependencyهای بعدی

- matching فروشنده در پایلوت دستی می‌ماند.
- discovery عمومی فروشنده به seller model معتبر و rules صادقانه داده نیاز دارد.
- indicatorهای trust به outcome تأییدشده و evidence قابل audit نیاز دارند.
- AI assistance به داده ساختاریافته، قواعد safety، review انسانی و dataset ارزیابی نیاز دارد.

## ۱۳. Stageهای ساخت وب‌سایت

این‌ها stageهای وب‌سایت هستند و جایگزین فاز صفر canonical شرکت نیستند.

| stage وب‌سایت | هدف | gate |
| --- | --- | --- |
| Website Build Stage A — Foundation Planning | master plan، route map و feature matrix تطبیق‌یافته | همین PR؛ بدون پیاده‌سازی محصول |
| Website Build Stage B — Request Prototype | تجربه mobile-first درخواست و confirmation | آزاد شدن `CDX-003` با شواهد هفته دوم |
| Website Build Stage C — Persistence and Operations | persistence امن و صف محافظت‌شده operator | `CDX-004` و تصمیم تأییدشده داده/بازار |
| Website Build Stage D — Seller Pilot Support | رکورد دستی فروشنده و پشتیبانی matching | بازار منتخب و supply مایل به پایلوت |
| Website Build Stage E — Quote and Outcome Learning | comparison با حمایت operator و رکورد outcome | evidence واقعی request و response فروشنده |
| Website Build Stage F — Trust and Expansion | indicator factual و locale/market اضافی | outcome تأییدشده و review مخصوص بازار |
| Website Build Stage G — AI Assistance | utility داخلی با review انسانی | داده کافی، safety rules و evaluation |

## ۱۴. وضعیت کیفیت و dependency

branch، `npm run typecheck` را به‌عنوان quality gate اضافه می‌کند. هیچ رفتار محصول یا نسخه dependency تغییر نمی‌کند.

آخرین audit شناخته‌شده install هفت vulnerability گزارش کرد: یک moderate و شش high. remediation گسترده dependency خارج از این PR برنامه‌ریزی است. پیش از پذیرش PII واقعی مشتری در live pilot، یک PR متمرکز dependency/security لازم است.

نتایج quality check برای branch تعمیرشده باید در review PR گزارش شود؛ warning با failure متفاوت است و یافته‌های audit نباید pass توصیف شوند.

## ۱۵. Gateهای پذیرش این PR برنامه‌ریزی

- branch بر latest `main` پذیرفته‌شده پایه‌گذاری شده باشد.
- اسناد canonical Founder Reset بدون تغییر بمانند.
- این plan، route map و feature matrix در pair انگلیسی/فارسی هم‌راستا و با metadata لازم وجود داشته باشند.
- فاز صفر شرکت بازتعریف نشده باشد.
- `CDX-003` و `CDX-004` evidence-gated بمانند.
- قابلیت‌های current، manual، blocked و future از هم جدا باشند.
- evidence، seller، rating، trust claim یا functionality جعلی اضافه نشده باشد.
- install، lint، typecheck، build و diff check صادقانه گزارش شوند.

## ۱۶. اولین vertical slice برنامه‌ریزی‌شده

اولین slice موردنظر همچنان این است:

`Homepage CTA -> structured request -> validation -> confirmation -> protected operator queue`

این یک dependency chain است، نه دستور پیاده‌سازی اکنون:

1. شواهد هفته دوم fieldهای مشتری را تأیید و `CDX-003` را آزاد کند.
2. فرضیه تأییدشده درخواست به prototype آزمایش‌شده با test مناسب تبدیل شود.
3. تصمیم داده/بازار و privacy review، `CDX-004` را آزاد کند.
4. persistence تأییدشده و دسترسی محافظت‌شده operator، صف را واقعی کند.

تا عبور از این gateها فقط آماده‌سازی معماری مجاز است. `CBZ-P1-001` نباید schema production را freeze کند.

## ۱۷. توالی پیشنهادی تحویل پس از شواهد

1. این PR متمرکز foundation planning پس از review هم‌بنیان‌گذار/QC merge شود.
2. کار evidence در فاز صفر canonical ادامه یابد.
3. پس از آزاد شدن `CDX-003`، فرضیه fieldهای درخواست و task prototype تأیید شود.
4. UI درخواست و رفتار confirmation همراه test اضافه شود.
5. پس از آزاد شدن `CDX-004`، persistence، عملیات محافظت‌شده، retention و export تأیید شود.
6. analytics و پشتیبانی seller pilot فقط پس از عبور gateهای canonical اضافه شوند.
