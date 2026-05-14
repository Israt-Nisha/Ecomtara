import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import TrustedSection from "@/components/TrustedSection";
import CTABanner from "@/components/CTABanner";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <DemoSection />
      <PricingSection />
      <TrustedSection />
      <CTABanner />
    </main>
  );
}
