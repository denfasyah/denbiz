import { PageHeader } from "@/components/sections/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function KontakPage() {
  return (
    <>
      <PageHeader 
        title="Hubungi Kami"
        subtitle="Kontak & Dukungan"
        description="Punya pertanyaan atau siap memulai proyek digital Anda? Jangan ragu untuk menghubungi tim kami hari ini juga."
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Kontak" }
        ]}
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}
