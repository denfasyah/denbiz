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
  title: "DenBiz - Jasa Pembuatan Website & Aplikasi Professional",
  description: "DenBiz adalah penyedia jasa pembuatan website, aplikasi sistem informasi, dan e-commerce profesional untuk mengembangkan bisnis Anda di era digital.",
  openGraph: {
    title: "DenBiz - Jasa Pembuatan Website & Aplikasi Professional",
    description: "Penyedia jasa pembuatan website, aplikasi sistem informasi, dan e-commerce profesional untuk mengembangkan bisnis Anda.",
    url: "https://denbiz.agency",
    siteName: "DenBiz",
    locale: "id_ID",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DenBiz",
    description: "DenBiz menangani pembuatan website dan aplikasi web dari awal hingga rilis.",
    url: "https://denbiz.agency",
    telephone: "+6281234567890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SCBD District 8",
      addressLocality: "Jakarta Selatan",
      addressCountry: "ID",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
