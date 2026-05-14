import Link from "next/link";
import { Monitor, UtensilsCrossed, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";

const demos = [
  {
    title: "Electronics Demo",
    url: "electro.shopxet.com",
    icon: <Monitor className="w-5 h-5 text-blue-600" />,
    gradient: "from-blue-600 to-blue-400",
    emoji: "🎧",
    tagline: "Mega Summer Sale 50% Off",
    themeColor: "text-blue-600",
  },
  {
    title: "Food Demo",
    url: "food.shopxet.com",
    icon: <UtensilsCrossed className="w-5 h-5 text-red-600" />,
    gradient: "from-red-600 to-red-400",
    emoji: "🍔",
    tagline: "Delicious Food Delivered Fast",
    themeColor: "text-red-600",
  },
  {
    title: "Cosmetics Demo",
    url: "cosmetics.shopxet.com",
    icon: <Sparkles className="w-5 h-5 text-pink-600" />,
    gradient: "from-pink-500 to-rose-400",
    emoji: "💄",
    tagline: "Beauty That Shines",
    themeColor: "text-pink-600",
  },
  {
    title: "Fashion Demo",
    url: "fashion.shopxet.com",
    icon: <ShoppingBag className="w-5 h-5 text-gray-700" />,
    gradient: "from-gray-600 to-gray-400",
    emoji: "👗",
    tagline: "Fashion Sale 30% Off",
    themeColor: "text-gray-700",
  },
];

export default function DemoSection() {
  return (
    <section id="demo" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-50/50 blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50/50 blur-[100px] -z-10" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 bg-[#6C5CE7]/5 text-[#6C5CE7] px-4 py-1.5 rounded-full text-sm font-bold border border-[#6C5CE7]/10">
            📽️ লাইভ ডেমো
          </div>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-black text-[#1a1a2e] leading-tight font-heading">
            আমাদের লাইভ ডেমো দেখুন
          </h2>
          <p className="text-[#555] text-lg lg:text-[20px] font-medium max-w-2xl mx-auto font-sans">
            বিভিন্ন ক্যাটাগরির প্রডাক্ট ডেমো দেখে নিন আমাদের সিস্টেমের ক্ষমতা
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {demos.map((demo, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] group hover:-translate-y-3 transition-all duration-700"
            >
              {/* Browser Mockup Thumbnail */}
              <div className="relative">
                <div className="bg-gray-50/50 backdrop-blur-sm border-b border-gray-100 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 bg-white/80 rounded-lg border border-gray-100 px-3 py-1 text-[10px] text-[#555]/60 font-english truncate font-medium">
                    {demo.url}
                  </div>
                </div>
                {/* Visual Preview */}
                <div className={`h-48 bg-gradient-to-br ${demo.gradient} p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
                  <div className="text-white z-10">
                    <p className="text-[10px] font-english uppercase tracking-widest font-bold opacity-80 mb-2">Live Store</p>
                    <h3 className="text-[17px] font-bold font-heading leading-snug max-w-[140px]">
                      {demo.tagline}
                    </h3>
                  </div>
                  <div className="text-6xl absolute right-[-5px] bottom-[-10px] group-hover:scale-125 transition-transform duration-700 opacity-20 group-hover:opacity-40 select-none">
                    {demo.emoji}
                  </div>
                  {/* Overlay glow */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>

              {/* Demo Footer Info */}
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shadow-inner group-hover:bg-white group-hover:shadow-lg group-hover:shadow-[#6C5CE7]/5 transition-all duration-500">
                    {demo.icon}
                  </div>
                  <h4 className="text-[18px] font-bold text-[#1a1a2e] font-heading">
                    {demo.title}
                  </h4>
                </div>
                <Link
                  href={`https://${demo.url}`}
                  target="_blank"
                  className={`inline-flex items-center gap-2 text-[14px] font-bold font-english ${demo.themeColor} group/link`}
                >
                  Visit Demo <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
