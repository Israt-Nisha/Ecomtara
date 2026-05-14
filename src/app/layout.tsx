import type { Metadata } from "next";
import { Hind_Siliguri, Noto_Sans_Bengali, Lexend } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['bengali'],
  variable: '--font-hind',
});
const notoBengali = Noto_Sans_Bengali({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['bengali'],
  variable: '--font-noto',
});
const lexend = Lexend({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: "Ecomtara - আপনার ই-কমার্স ব্যবসার জন্য সম্পূর্ণ SaaS সমাধান",
  description:
    "Ecomtara একটি শক্তিশালী ও সহজে ব্যবহারযোগ্য ই-কমার্স SaaS প্ল্যাটফর্ম। ওয়েবসাইট, ইনভেন্টরি, CRM, কুরিয়ার অটোমেশনসহ সবকিছু এক জায়গায় — আপনার ব্যবসাকে দিন নতুন উচ্চতা।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${notoBengali.variable} ${lexend.variable} font-sans`}>
      <body className="min-h-full antialiased text-[#555] bg-white">{children}</body>
    </html>
  );
}
