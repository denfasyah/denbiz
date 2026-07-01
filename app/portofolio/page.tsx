import { PageHeader } from "@/components/sections/PageHeader";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

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
      <PortfolioSection />
      <TestimonialsSection />
    </>
  );
}
