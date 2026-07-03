import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PortfolioGridSection } from "@/components/sections/PortfolioGridSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Portofolio Proyek - DenBiz",
  description: "Lihat portofolio dan hasil karya terbaik DenBiz dalam pengembangan website.",
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
    </>
  );
}
