import { PageHeader } from "@/components/sections/PageHeader";
import { AboutSection } from "@/components/sections/AboutSection";

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
      <AboutSection />
    </>
  );
}
