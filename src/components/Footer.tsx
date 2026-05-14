import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-400 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="#home" className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-lexend font-black text-white tracking-tighter">Ecomtara</span>
            </Link>
            <p className="max-w-md text-gray-400 font-bold leading-relaxed font-sans text-[15px]">
              Ecomtara একটি শক্তিশালী ও সহজে ব্যবহারযোগ্য ই-কমার্স SaaS প্ল্যাটফর্ম। 
              ওয়েবসাইট, ইনভেন্টরি, CRM, কুরিয়ার অটোমেশনসহ সবকিছু এক জায়গায়।
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <Link key={social} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#6C5CE7] hover:text-white transition-all duration-300">
                  <span className="capitalize text-[10px] font-black">{social[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-[12px] uppercase tracking-[2px]">কোম্পানি</h4>
            <div className="flex flex-col gap-4">
              {["হোম", "ফিচারসমূহ", "মূল্য পরিকল্পনা", "লাইফটাইম প্ল্যান"].map((l) => (
                <Link key={l} href="#" className="hover:text-[#6C5CE7] transition-colors font-bold font-sans text-[15px]">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-[12px] uppercase tracking-[2px]">সাপোর্ট</h4>
            <div className="flex flex-col gap-4">
              {["যোগাযোগ", "ব্লগ", "প্রাইভেসি পলিসি", "টার্মস"].map((l) => (
                <Link key={l} href="#" className="hover:text-[#6C5CE7] transition-colors font-bold font-sans text-[15px]">
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[13px] font-bold font-english text-gray-500">
            © {new Date().getFullYear()} <span className="text-white">Ecomtara</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[13px] font-black uppercase tracking-[1px] text-gray-500">
             <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms</Link>
             <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
