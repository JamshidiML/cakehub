"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Play, Search, Sparkles } from "lucide-react";

const cards = [
  {
    title: "تولد کودک",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "سالگرد و ازدواج",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "جشن خانوادگی",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-[#120807] text-[#fff4df]"
      style={{ fontFamily: "Vazirmatn, sans-serif" }}
    >
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/hero-family-cake.png"
          alt="CakeBazar family celebration"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#120807]/95 via-[#120807]/45 to-[#120807]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120807]/30 via-transparent to-[#120807]" />

        <nav className="fixed left-1/2 top-6 z-50 w-[92%] max-w-7xl -translate-x-1/2 rounded-full border border-[#f6c778]/25 bg-[#120807]/55 px-7 py-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-black text-[#f6c778]">CakeBazar</div>

            <div className="hidden items-center gap-10 text-sm font-medium text-[#fff4df]/90 md:flex">
              <a className="text-[#f6c778]">خانه</a>
              <a>گالری کیک‌ها</a>
              <a>کیک‌پزها</a>
              <a>فروشنده شو</a>
            </div>

            <button className="rounded-full bg-[#f6c778] px-6 py-3 text-sm font-bold text-[#2a120c]">
              ورود / ثبت‌نام
            </button>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="relative z-10 flex min-h-screen items-center px-6 pt-28"
        >
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-7 text-lg font-bold text-[#f6c778]">
                قبل از انتخاب کیک...
              </p>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                بعضی لحظه‌ها فقط یک‌بار اتفاق می‌افتند
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-9 text-[#fff4df]/85">
                CakeBazar جایی است برای پیدا کردن کیکی که فقط خوشمزه نیست؛
                یک خاطره می‌سازد.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#f6c778] px-8 py-4 font-bold text-[#2a120c] shadow-xl transition hover:scale-105">
                  سفارش کیک
                </button>

                <button className="rounded-full border border-[#f6c778]/45 bg-[#120807]/35 px-8 py-4 font-bold text-[#fff4df] backdrop-blur transition hover:bg-[#f6c778]/10">
                  مشاهده گالری
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <button className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white shadow-2xl backdrop-blur-md transition hover:scale-110">
          <Play size={34} fill="white" />
        </button>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center text-sm text-[#fff4df]/80">
          <p>اسکرول کنید</p>
          <div className="mx-auto mt-3 h-8 w-5 rounded-full border border-[#f6c778]/60">
            <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-[#f6c778]" />
          </div>
        </div>
      </section>

      <section className="border-t border-[#f6c778]/15 bg-[#160a07] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.9fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="self-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f6c778]/10 px-5 py-2 text-[#f6c778]">
              <Sparkles size={18} />
              امروز چه چیزی را جشن می‌گیری؟
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              برای هر مناسبت، یک کیک مخصوص همان لحظه
            </h2>

            <p className="mt-6 leading-9 text-[#fff4df]/70">
              از تولد کودک تا سالگرد عشق، از جشن‌های خانوادگی تا سورپرایزهای
              کوچک؛ CakeBazar تو را به بهترین کیک‌پزهای خانگی وصل می‌کند.
            </p>

            <button className="mt-8 rounded-full border border-[#f6c778]/40 px-7 py-4 font-bold text-[#f6c778]">
              پیشنهاد ویژه امروز
            </button>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={`group overflow-hidden rounded-[2rem] border border-[#f6c778]/20 bg-[#24100b] shadow-2xl ${
                  index === 1 ? "md:translate-y-10" : ""
                }`}
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                </div>

                <div className="flex items-center justify-between p-5">
                  <h3 className="text-xl font-black">{card.title}</h3>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f6c778]/40 text-[#f6c778]">
                    <ArrowLeft size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#fff4df] px-6 py-28 text-[#3a241c]">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-black leading-tight">
            برای چه کسی می‌خواهی لبخند بسازی؟
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-[#7b6259]">
            شهر، مناسبت و بودجه را انتخاب کن؛ ما مناسب‌ترین کیک‌ها و کیک‌پزها
            را به تو نشان می‌دهیم.
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 rounded-[2rem] bg-white p-4 shadow-2xl md:grid-cols-4">
            <div className="rounded-2xl bg-[#fff7ee] px-5 py-5 text-right">
              شهر شما
            </div>
            <div className="rounded-2xl bg-[#fff7ee] px-5 py-5 text-right">
              مناسبت
            </div>
            <div className="rounded-2xl bg-[#fff7ee] px-5 py-5 text-right">
              بودجه
            </div>
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#c9687d] px-5 py-5 font-bold text-white">
              <Search size={20} />
              جستجو
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#090403] px-6 py-10 text-center text-[#fff4df]/55">
        CakeBazar.ir — جایی برای ساختن خاطره‌های شیرین
      </footer>
    </main>
  );
}