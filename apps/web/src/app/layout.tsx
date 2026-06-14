import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CakeBazar | بازار کیک‌های خانگی ایران",
  description: "مارکت‌پلیس سفارش کیک خانگی از بهترین کیک‌پزهای ایران",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}