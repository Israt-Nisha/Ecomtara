import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Settings, Code, Headphones, RefreshCw } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 lg:pt-36 pb-20 bg-[#FCFCFE] overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Side: Content */}
          <div className="flex-1 w-full  space-y-7 z-10">
            <div className="inline-flex items-center gap-2 bg-[#F3F1FF] text-[#6C5CE7] px-5 py-2.5 rounded-xl text-[14px] font-bold border border-[#E9E5FF] w-fit">
              <span className="text-lg">🚀</span> আপনার নিজের ব্র্যান্ড, আপনার নিজের ই-কমার্স
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[900] text-[#1a1a2e] leading-[1.1] tracking-tight font-heading">
              আপনার ই-কমার্স ব্যবসার <br />
              জন্য সম্পূর্ণ <span className="text-[#6C5CE7] font-noto">SaaS সমাধান</span>
            </h1>

            <p className="text-[#555] text-lg sm:text-[18px] leading-[1.65] font-medium font-sans max-w-[580px]">
              Ecomtara একটি শক্তিশালী ও সহজেই ব্যবহারযোগ্য ই-কমার্স SaaS প্ল্যাটফর্ম।
              ওয়েবসাইট, ইনভেন্টরি, CRM, কুরিয়ার অটোমেশনসহ সবকিছু এক জায়গায় — আপনার ব্যবসাকে দিন নতুন উচ্চতা।
            </p>

            <div className="flex flex-wrap gap-5 pt-4 font-sans">
              <Link
                href="#demo"
                className="bg-[#6C5CE7] text-white px-9 py-4 rounded-xl font-bold text-[17px] hover:bg-[#5A4ED3] transition-all shadow-xl shadow-[#6C5CE7]/30 active:scale-95 flex items-center gap-3 group"
              >
                ডেমো দেখুন
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="#pricing"
                className="border-2 border-[#6C5CE7]/20 text-[#6C5CE7] bg-white px-9 py-4 rounded-xl font-bold text-[17px] hover:border-[#6C5CE7] hover:bg-[#6C5CE7]/5 transition-all active:scale-95 shadow-sm"
              >
                মূল্য পরিকল্পনা দেখুন
              </Link>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-2 gap-y-6 pt-4 font-sans">
              {[
                { icon: <Settings className="w-5 h-5" />, text: "সহজ সেটআপ" },
                { icon: <Code className="w-5 h-5" />, text: "কোন কোডিং নয়" },
                { icon: <Headphones className="w-5 h-5" />, text: "২৪/৭ সাপোর্ট" },
                { icon: <RefreshCw className="w-5 h-5" />, text: "নিয়মিত আপডেট" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[15px] font-bold text-[#1a1a2e] group cursor-default p-2 rounded-full border border-[#F1F1F1]">
                  <div className=" flex items-center justify-center text-[#6C5CE7]">
                    {item.icon}
                  </div>
                  <span className="text-[#555]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Mockups */}
          <div className="flex-1 w-full relative mt-12 lg:mt-0 h-[320px] sm:h-[400px] md:h-[450px] lg:h-[550px]">
            {/* Desktop Mockup (Background) */}
            <div className="absolute right-0 top-0 w-[90%] sm:w-[85%] lg:w-[95%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)] z-0 translate-x-4 sm:translate-x-8 lg:translate-x-12 transition-all duration-700">
              <Image
                src="/hero_desktop.png"
                alt="Desktop App Mockup"
                width={1000}
                height={600}
                className="rounded-xl sm:rounded-2xl border border-gray-100"
                priority
              />
            </div>

            {/* Mobile Mockup (Foreground) */}
            <div className="absolute top-[15%] -left-2 sm:-left-6 lg:-left-10 z-20 w-[50%] sm:w-[40%] lg:w-[38%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)] transform hover:scale-105 hover:rotate-2 transition-all duration-700">
              <Image
                src="/mobile.png"
                alt="Mobile App Mockup"
                width={400}
                height={800}
                className="object-contain"
              />
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-indigo-50/30 blur-[80px] sm:blur-[120px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
