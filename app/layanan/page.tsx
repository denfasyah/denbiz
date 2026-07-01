import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PricingSection } from "@/components/sections/PricingSection";

export default function LayananPage() {
  return (
    <>
      <PageHeader 
        title="Layanan & Solusi"
        subtitle="Layanan Kami"
        description="Dari website responsif, aplikasi sistem informasi, hingga e-commerce berkinerja tinggi. Kami membangun teknologi yang mendorong pertumbuhan bisnis."
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Layanan" }
        ]}
      />
      <ServicesSection />
      <PricingSection />
    </>
  );
}
