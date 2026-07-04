import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { AboutIntroSection } from "@/components/sections/Aboutintrosection";
import { AboutSection } from "@/components/sections/AboutSection";
import {CtaSection} from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Tentang Kami - DenBiz",
  description: "Pelajari sejarah, visi, dan tim profesional di balik layanan DenBiz.",
  openGraph: {
    title: "Tentang Kami - DenBiz",
    description: "Pelajari sejarah, visi, dan tim profesional di balik layanan DenBiz.",
    url: "https://denbiz.agency/tentang",
    siteName: "DenBiz",
    locale: "id_ID",
    type: "website",
  },
};

export default function TentangPage() {
  return (
    <>
      <PageHeader 
        title="Tentang DenBiz"
        subtitle="Profil Perusahaan"
        description="Penyedia jasa IT & solusi digital terkemuka. Kami hadir untuk membantu bisnis Anda bertransformasi dan bersaing di era digital."
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Tentang Kami" }
        ]}
      />
      <AboutIntroSection />
      <AboutSection />
      <CtaSection />
    </>
  );
}