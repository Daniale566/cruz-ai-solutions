
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white dark overflow-x-hidden">
      <div className="bg-dots absolute inset-0 opacity-30"></div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
