import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PortfolioGridSection } from "@/components/sections/PortfolioGridSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import {CtaSection} from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Portofolio Proyek - DenBiz",
  description: "Lihat portofolio dan hasil karya terbaik DenBiz dalam pengembangan website.",
  openGraph: {
    title: "Portofolio Proyek - DenBiz",
    description: "Lihat portofolio dan hasil karya terbaik DenBiz dalam pengembangan website.",
    url: "https://denbiz.agency/portofolio",
    siteName: "DenBiz",
    locale: "id_ID",
    type: "website",
  },
};

export default function PortofolioPage() {
  return (
    <>
      <PageHeader 
        title="Karya & Studi Kasus"
        subtitle="Portofolio Kami"
        description="Jelajahi hasil kerja terbaik kami dan lihat bagaimana kami membantu berbagai perusahaan menyelesaikan masalah digital mereka."
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Portofolio" }
        ]}
      />
      <PortfolioGridSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
