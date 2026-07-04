import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import {CtaSection} from "@/components/sections/CtaSection";
// import { ContactSection } from "@/components/sections/ContactSection";
import { HowweworkSection } from "@/components/sections/HowweworkSection";

export const metadata: Metadata = {
  title: "DenBiz - Jasa Pembuatan Website & Aplikasi",
  description: "DenBiz adalah penyedia jasa pembuatan website, aplikasi sistem informasi, dan e-commerce terbaik untuk mengembangkan bisnis Anda.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowweworkSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <CtaSection />
      {/* <ContactSection /> */}
    </>
  );
}
