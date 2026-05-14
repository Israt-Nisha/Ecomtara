"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "হোম", href: "#home", active: true },
  { label: "ডেমো", href: "#demo" },
  { label: "ফিচারসমূহ", href: "#features" },
  { label: "মূল্য পরিকল্পনা", href: "#pricing" },
  { label: "লাইফটাইম প্ল্যান", href: "#lifetime" },
  { label: "ব্লগ", href: "#blog" },
  { label: "যোগাযোগ", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl py-2 shadow-sm border-b border-gray-100/50" : "bg-transparent py-5"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-14 h-14 relative">
              <Image
                src="/logo.png"
                alt="Ecomtara Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-3xl font-lexend font-black tracking-tight text-[#1A1A1A]">
              Ecomtara
            </span>
          </Link>

          {/* Desktop Nav - Centered Clustering */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-bold transition-all relative font-sans ${link.active ? "text-[#6C5CE7]" : "text-[#1a1a2e]/80 hover:text-[#6C5CE7]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#demo"
              className="bg-[#6C5CE7] text-white px-7 py-2.5 rounded-[10px] font-bold text-[15px] hover:bg-[#5A4ED3] transition-all shadow-lg shadow-[#6C5CE7]/25 active:scale-95 inline-block font-sans"
            >
              ডেমো দেখুন
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#1a1a2e] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[600px] opacity-100 border-t border-gray-100 mt-3" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-10 space-y-6 font-sans">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-xl font-bold transition-all ${link.active ? "text-[#6C5CE7] translate-x-2" : "text-[#1a1a2e]/70 hover:translate-x-2"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6">
            <Link
              href="#demo"
              onClick={() => setIsOpen(false)}
              className="bg-[#6C5CE7] text-white px-6 py-4.5 rounded-[16px] font-bold text-xl flex items-center justify-center shadow-2xl shadow-[#6C5CE7]/30"
            >
              ডেমো দেখুন
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
