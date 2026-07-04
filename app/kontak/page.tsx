import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Hubungi Kami - DenBiz",
  description: "Hubungi DenBiz untuk berkonsultasi mengenai proyek digital Anda.",
  openGraph: {
    title: "Hubungi Kami - DenBiz",
    description: "Hubungi DenBiz untuk berkonsultasi mengenai proyek digital Anda.",
    url: "https://denbiz.agency/kontak",
    siteName: "DenBiz",
    locale: "id_ID",
    type: "website",
  },
};

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
