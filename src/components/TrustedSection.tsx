import { ShoppingBag, Utensils, Sparkles, Shirt, Store, Laptop } from "lucide-react";

const brands = [
  { name: "TechMart", icon: <Laptop className="w-5 h-5" /> },
  { name: "DailyFood", icon: <Utensils className="w-5 h-5" /> },
  { name: "BeautyCare", icon: <Sparkles className="w-5 h-5" /> },
  { name: "FashionHub", icon: <Shirt className="w-5 h-5" /> },
  { name: "MegaStore", icon: <Store className="w-5 h-5" /> },
  { name: "DigitalShop", icon: <ShoppingBag className="w-5 h-5" /> },
];

export default function TrustedSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#6C5CE7] font-black text-[12px] uppercase tracking-[3px] mb-2">
            Trusted By 50+ Businesses
          </div>
          <h2 className="text-[28px] lg:text-[36px] font-black text-[#1a1a2e] font-heading leading-tight">
            যারা আমাদের উপর বিশ্বাস রেখেছেন
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-8 max-w-5xl mx-auto">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 py-4 rounded-[20px] bg-[#F8F7FF] border border-gray-100/50 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(108,92,231,0.1)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer"
            >
              <div className="text-gray-400 group-hover:text-[#6C5CE7] transition-all duration-500 group-hover:scale-110">
                {brand.icon}
              </div>
              <span className="text-[16px] font-bold text-[#1a1a2e]/60 group-hover:text-[#1a1a2e] transition-colors font-english tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
