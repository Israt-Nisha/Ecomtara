import {
  ShoppingCart,
  Package,
  Users,
  Truck,
  ShieldAlert,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "ই-কমার্স ওয়েবসাইট",
    desc: "প্রফেশনাল ও মডার্ন ডিজাইনের ই-কমার্স ওয়েবসাইট",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "ইনভেন্টরি ম্যানেজমেন্ট",
    desc: "স্টক, প্রোডাক্ট, ক্যাটাগরি সহজে পরিচালনা করুন",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "CRM সিস্টেম",
    desc: "কাস্টমার, অর্ডার ও ডেলিভারি ব্যবস্থাপনা",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "কুরিয়ার অটোমেশন",
    desc: "অটোমেটিক শিপিং ও ট্র্যাকিং ব্যবস্থা",
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "ফ্রড চেকিং",
    desc: "অর্ডার ফ্রড প্রিভেনশন ও রিস্ক সিস্টেম",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "ল্যান্ডিং পেজ",
    desc: "প্রচারণার জন্য আকর্ষণীয় ল্যান্ডিং পেজ",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 space-y-2">

          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-black text-[#1a1a2e] leading-tight font-heading">
            সবকিছু এক প্ল্যাটফর্মে
          </h2>
          <p className="text-[#555] text-lg lg:text-[20px] font-medium max-w-2xl mx-auto font-sans">
            আপনার ই-commerce ব্যবসা পরিচালনার জন্য প্রয়োজনীয় সকল ফিচার
          </p>
        </div>

        {/* 6-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] p-2 border border-gray-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6C5CE7]/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F8F7FF] flex items-center justify-center text-[#6C5CE7] mb-7 group-hover:bg-[#6C5CE7] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                {feature.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-[17px] font-bold text-[#1a1a2e] leading-tight font-heading">
                  {feature.title}
                </h3>
                <p className="text-[14px] font-medium text-gray-600 leading-relaxed font-sans">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
