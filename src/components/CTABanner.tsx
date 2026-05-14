"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="relative bg-[#6C5CE7] rounded-[40px] p-10 lg:p-20 overflow-hidden group shadow-[0_40px_100px_-20px_rgba(108,92,231,0.4)]">
          
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -mr-[250px] -mt-[250px] transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-[80px] -ml-[200px] -mb-[200px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Center: Text */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-black border border-white/20 backdrop-blur-md uppercase tracking-[1px]">
                Ready to Grow?
              </div>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[54px] font-black text-white leading-tight font-heading">
                আজই শুরু করুন আপনার <br className="hidden lg:block" /> ই-কমার্স যাত্রা!
              </h2>
              <p className="text-white/90 text-lg lg:text-[22px] font-bold font-sans max-w-xl">
                Ecomtara এর সাথে আপনার ব্যবসাকে দিন নতুন গতি ও উচ্চতা।
              </p>
            </div>

            {/* Right: Buttons & Illustration */}
            <div className="flex flex-col items-center lg:items-end gap-10 shrink-0">
               {/* Rocket Illustration with glow */}
               <div className="relative">
                  <div className="w-24 h-24 lg:w-36 lg:h-36 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] flex items-center justify-center shadow-2xl relative z-10 group-hover:-translate-y-4 transition-transform duration-700 ease-out">
                    <span className="text-5xl lg:text-7xl drop-shadow-2xl">🚀</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150 animate-pulse" />
               </div>

               <div className="flex flex-col sm:flex-row items-center gap-5">
                  <Link 
                    href="#demo" 
                    className="bg-white text-[#6C5CE7] font-black px-12 py-5 rounded-2xl shadow-2xl shadow-black/10 hover:scale-105 active:scale-95 transition-all text-[17px] font-sans"
                  >
                    ডেমো দেখুন
                  </Link>
                  <Link 
                    href="#contact" 
                    className="bg-[#1a1a2e] text-white font-black px-12 py-5 rounded-2xl shadow-2xl shadow-black/10 hover:scale-105 active:scale-95 transition-all text-[17px] flex items-center gap-2 font-sans"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
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
