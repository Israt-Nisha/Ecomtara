import Link from "next/link";
import { UtensilsCrossed, Sparkles, ShoppingBag, ShoppingCart, ExternalLink, Gift } from "lucide-react";
import Image from "next/image";

interface DemoItem {
  title: string;
  url: string;
  image: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  dotColor: string;
}

const demoList: DemoItem[] = [
  {
    title: "Electronics Demo",
    url: "electro.shopxet.com",
    image: "/desktop1.png",
    icon: ShoppingCart,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "bg-blue-600",
    dotColor: "bg-blue-400/50",
  },
  {
    title: "Food Demo",
    url: "food.shopxet.com",
    image: "/desktop2.png",
    icon: Gift,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "bg-red-600",
    dotColor: "bg-red-400/50",
  },
  {
    title: "Cosmetics Demo",
    url: "cosmetics.shopxet.com",
    image: "/desktop3.png",
    icon: Sparkles,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "bg-pink-600",
    dotColor: "bg-pink-400/50",
  },
  {
    title: "Fashion Demo",
    url: "fashion.shopxet.com",
    image: "/desktop4.png",
    icon: ShoppingBag,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "bg-purple-600",
    dotColor: "bg-purple-400/50",
  },
];

export default function DemoSection() {
  return (
    <section id="demo" className="bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6C5CE7]/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50 blur-[120px] -z-10" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-[900] text-[#1a1a2e] leading-tight font-heading tracking-tight">
            আমাদের লাইভ ডেমো
          </h2>
          <p className="text-[#555] text-lg lg:text-[20px] font-medium max-w-2xl mx-auto font-sans">
            বিভিন্ন ক্যাটাগরির প্রস্তুত ডেমো দেখুন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {demoList.map((demo, index) => (
            <div key={index} className="group border border-gray-200 rounded-xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex flex-col">

                {/* Browser Mockup */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden">


                  {/* Image Container */}
                  <div className="relative h-[calc(100%-1.75rem)] w-full overflow-hidden">
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#1a1a2e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <Link
                        href={`https://${demo.url}`}
                        target="_blank"
                        className="bg-white text-[#1a1a2e] px-8 py-3 rounded-full font-bold text-[15px] flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
                      >
                        ভিজিট করুন <ExternalLink size={18} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center gap-4 px-1 my-2 mt-auto">
                  <div className={`w-14 h-14 rounded-full ${demo.bgColor} ${demo.color} flex items-center justify-center shrink-0 shadow-sm border border-white`}>
                    <demo.icon size={26} strokeWidth={2.5} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[19px] font-bold text-[#1a1a2e] truncate leading-tight mb-1 font-noto">
                      {demo.title}
                    </h3>
                    <p className="text-[15px] font-semibold text-blue-600 truncate font-lexend tracking-tight">
                      {demo.url}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
