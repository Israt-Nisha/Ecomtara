import { Check, Zap } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    name: "মাসিক প্ল্যান",
    price: "৳2,999",
    period: "/মাস",
    features: ["৯,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "২৪/৭ সাপোর্ট"],
    btnClass: "bg-[#6C5CE7] hover:bg-[#5A4AD1]",
    borderTop: "border-t-[#6C5CE7]",
    badge: null,
  },
  {
    name: "৬ মাসের প্ল্যান",
    price: "৳14,999",
    period: "/৬ মাস",
    features: ["৫,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রাধান্য সাপোর্ট"],
    btnClass: "bg-[#FF6B35] hover:bg-[#E85A24]",
    borderTop: "border-t-[#FF6B35]",
    badge: "জনপ্রিয়",
    badgeBg: "bg-[#FF6B35]",
  },
  {
    name: "বার্ষিক প্ল্যান",
    price: "৳26,999",
    period: "/বছর",
    features: ["১৫,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রাধান্য সাপোর্ট", "বছরে ২ মাস ফ্রি"],
    btnClass: "bg-[#00B894] hover:bg-[#00A383]",
    borderTop: "border-t-[#00B894]",
    badge: "সাশ্রয়ী",
    badgeBg: "bg-[#00B894]",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-[#FCFCFE]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#6C5CE7]/5 text-[#6C5CE7] px-4 py-1.5 rounded-full text-sm font-bold border border-[#6C5CE7]/10">
            💎 মূল্য পরিকল্পনা
          </div>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-black text-[#1a1a2e] leading-tight font-heading">
            আপনার ব্যবসার জন্য সেরা প্ল্যান
          </h2>
          <p className="text-[#555] text-lg lg:text-[20px] font-medium max-w-2xl mx-auto font-sans">
            আপনার ব্যবসার আকার অনুযায়ী সাশ্রয়ী মূল্যে সেরা সেবাটি বেছে নিন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
          {/* Subscription Cards */}
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] p-8 xl:p-10 border border-gray-100 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] flex flex-col relative group hover:-translate-y-3 transition-all duration-700"
            >
              {plan.badge && (
                <span className={`absolute top-6 right-6 ${plan.badgeBg} text-white text-[11px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-black/5`}>
                  {plan.badge}
                </span>
              )}
              
              <div className="mb-10">
                <h3 className="text-[20px] font-black text-[#1a1a2e] mb-4 font-heading">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-[32px] xl:text-[40px] font-black text-[#1a1a2e] font-english leading-none">{plan.price}</span>
                  <span className="text-[15px] font-bold text-gray-400 font-english ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-[14px] xl:text-[15px] font-bold text-[#555]/80 font-sans leading-snug">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-500 stroke-[3px]" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full ${plan.btnClass} text-white font-black py-4 rounded-[18px] transition-all active:scale-95 text-[15px] shadow-xl shadow-black/5 group-hover:scale-[1.02]`}>
                এখনই শুরু করুন
              </button>
            </div>
          ))}

          {/* Lifetime Card */}
          <div className="bg-[#1a1a2e] rounded-[32px] p-8 xl:p-10 border border-gray-800 shadow-[0_30px_60px_-15px_rgba(26,26,46,0.2)] flex flex-col relative overflow-hidden group hover:-translate-y-3 transition-all duration-700">
            {/* Glossy overlay effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C5CE7]/10 blur-[80px] -z-0" />
            
            <div className="flex-1 flex flex-col z-10">
              <div className="mb-10">
                <div className="flex items-center gap-2 text-[#6C5CE7] mb-2">
                  <Zap className="w-5 h-5 fill-[#6C5CE7]" />
                  <span className="text-[12px] font-black uppercase tracking-[2px]">Special Offer</span>
                </div>
                <h3 className="text-[24px] font-black text-white mb-2 font-heading">লাইফটাইম প্ল্যান</h3>
                <p className="text-[14px] font-bold text-gray-400 font-sans">আপনার নিজের সার্ভারে হোস্টিং</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "কোন অর্ডার লিমিট নেই",
                  "আপনার নিজের ডোমেইন",
                  "আপনার নিজের সার্ভার",
                  "সম্পূর্ণ সোর্স কোড",
                  "এককালীন পেমেন্ট",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] xl:text-[15px] font-bold text-gray-300 font-sans leading-snug">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                      <Check className="w-3 h-3 text-[#6C5CE7] stroke-[3px]" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="bg-white text-[#1a1a2e] font-black py-4 rounded-[18px] transition-all active:scale-95 text-[15px] w-full shadow-2xl shadow-white/5 hover:bg-[#F8F7FF]">
                বিস্তারিত জানুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
