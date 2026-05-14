"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="py-8 bg-white">
      <div className="container-custom">
        <div className="relative bg-[#6C5CE7] rounded-xl p-4 lg:p-8 overflow-hidden group shadow-[0_40px_100px_-20px_rgba(108,92,231,0.4)]">

          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -mr-[250px] -mt-[250px] transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-[80px] -ml-[200px] -mb-[200px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="mt-2">
              <span className="text-3xl bg-white p-3 rounded-full">🚀</span>
            </div>

            {/* Center: Text */}
            <div className="flex-1 text-center lg:text-left space-y-2">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight font-heading">
                আজই শুরু করুন আপনার ই-কমার্স যাত্রা!
              </h2>
              <p className="text-white/90 text-lg lg:text- font-bold font-sans max-w-xl">
                Ecomtara এর সাথে আপনার ব্যবসাকে দিন নতুন গতি ও উচ্চতা।
              </p>
            </div>

            {/* Right: Buttons & Illustration */}
            <div className="flex flex-col items-center lg:items-end gap-10 shrink-0">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <Link
                  href="#demo"
                  className="bg-white text-[#6C5CE7] font-black px-12 py-4 rounded-xl shadow-xl shadow-black/10 hover:scale-105 active:scale-95 transition-all text-[17px] font-sans"
                >
                  ডেমো দেখুন
                </Link>
                <Link
                  href="#contact"
                  className="bg-[#6C5CE7] text-white font-white border border-2-white px-12 py-4 rounded-xl shadow-xl shadow-black/10 hover:scale-105 active:scale-95 transition-all text-[17px] flex items-center gap-2 font-sans"
                >

                  যোগাযোগ করুন
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
