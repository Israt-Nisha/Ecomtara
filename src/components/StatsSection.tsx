import { ArrowRight, Settings, Code, Headphones, RefreshCw, Zap, ShieldCheck } from "lucide-react";
export default function StatsSection() {
  const stats = [
    { icon: <Settings />, value: "50+", label: "সফল স্টোর" },
    { icon: <Zap />, value: "10+", label: "প্রডাক্ট ডেমো" },
    { icon: <ShieldCheck />, value: "100%", label: "সিকিউর সিস্টেম" },
    { icon: <Headphones />, value: "24/7", label: "এক্সপার্ট সাপোর্ট" },
  ];

  return (
    <section className="bg-white">
      <div className="container-custom">
        <div className="bg-white rounded-xl p-4 lg:p-8 border border-gray-200  grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/30 blur-[100px] -z-10" />

          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-row items-center justify-center text-center gap-4 px-2 group"
            >
              <div className="text-4xl mb-2 text-[#6C5CE7] bg-indigo-100 p-2 rounded-full transition-transform duration-500 group-hover:scale-120">
                {stat.icon}
              </div>
              <div className="flex flex-col items-center justify-center text-center space-x-2">
                <div className="text-xl lg:text-2xl font-black text-[#6C5CE7] font-heading leading-none">
                  {stat.value}
                </div>
                <div className="text-[15px] lg:text-[17px] font-semibold text-[#555] font-sans tracking-tight">
                  {stat.label}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
