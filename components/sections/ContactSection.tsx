"use client";

import { useState, Suspense } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WHATSAPP_NUMBER } from "@/data/constants";

const serviceOptions = [
  "Landing Page",
  "Company Profile",
  "Web Application",
  "E-Commerce",
  "Maintenance & Support",
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialPaket = searchParams?.get("paket") || serviceOptions[0];
  
  const [paket, setPaket] = useState(
    serviceOptions.find((opt) => opt.toLowerCase().includes(initialPaket.toLowerCase())) || serviceOptions[0]
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service: paket }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Berhasil!",
          text: "Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.",
          icon: "success",
          confirmButtonColor: "#f5ca03",
        });
      } else {
        throw new Error("Gagal mengirim pesan");
      }
    } catch (error) {
      Swal.fire({
        title: "Terjadi Kesalahan",
        text: "Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.",
        icon: "error",
        confirmButtonColor: "#1d1d1f",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-semibold text-sm text-on-surface">Nama Lengkap</label>
          <input
            type="text"
            placeholder="John Doe"
            required
            className="w-full px-5 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm bg-white"
          />
        </div>
        <div className="space-y-2">
          <label className="font-semibold text-sm text-on-surface">Alamat Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            required
            className="w-full px-5 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm bg-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-semibold text-sm text-on-surface">Pilih Layanan</label>
        <select 
          value={paket}
          onChange={(e) => setPaket(e.target.value)}
          className="w-full px-5 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm bg-white appearance-none"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-semibold text-sm text-on-surface">Pesan Proyek</label>
        <textarea
          rows={4}
          placeholder="Ceritakan kebutuhan proyek Anda secara singkat..."
          className="w-full px-5 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm bg-white resize-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-tertiary text-on-tertiary font-semibold text-sm py-4 rounded-xl hover:brightness-105 transition-all shadow-lg shadow-tertiary/20 active:scale-[0.98] disabled:opacity-70"
      >
        {isSubmitting ? (
          "Mengirim..."
        ) : (
          <>
            <Send className="w-4 h-4" />
            Kirim Permintaan Penawaran
          </>
        )}
      </button>
      <p className="text-center text-xs text-on-surface-variant">
        Tim kami akan membalas dalam kurang dari 24 jam kerja.
      </p>
    </form>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[40px] overflow-hidden border border-outline-variant/30 soft-shadow flex flex-col lg:flex-row">
          {/* Left panel */}
          <div className="lg:w-2/5 bg-primary p-12 lg:p-16 text-on-primary relative overflow-hidden flex flex-col justify-between">
            {/* Decorative rings */}
            <div className="absolute top-10 left-10 w-48 h-48 border-2 border-white/10 rounded-full pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-72 h-72 border-2 border-white/10 rounded-full pointer-events-none" />

            <div className="relative z-10 mb-8">
              <h2 className="font-display font-bold text-3xl leading-tight mb-8">
                Mari Mulai Sesuatu yang{" "}
                <span className="text-tertiary italic">Luar Biasa</span>
              </h2>
              <p className="text-on-primary/70 text-sm leading-relaxed mb-12">
                Kami siap membantu Anda merancang dan membangun produk digital
                yang mendukung pertumbuhan bisnis secara eksponensial.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: Mail,
                    label: "Email Kami",
                    value: "contact@denbiz.agency",
                    href: "mailto:contact@denbiz.agency"
                  },
                  {
                    icon: Phone,
                    label: "WhatsApp",
                    value: `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2, 5)}-${WHATSAPP_NUMBER.slice(5, 9)}-${WHATSAPP_NUMBER.slice(9)}`,
                    href: buildWhatsAppLink("Halo DenBizz, saya ingin bertanya.")
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-on-primary/50">{label}</p>
                      <p className="font-medium text-sm">{value}</p>
                    </div>
                  </a>
                ))}
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-on-primary/50">Lokasi Kantor</p>
                    <p className="font-medium text-sm mb-3">SCBD District 8, Jakarta Selatan</p>
                    <div className="w-full h-32 rounded-lg overflow-hidden relative">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2571216508933!2d106.80415307586523!3d-6.229801893758364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f143714b1c8f%3A0xc48c0dbb7eeb78a1!2sDistrict%208%2C%20SCBD!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                        className="w-full h-full border-0 absolute top-0 left-0" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-3/5 p-12 lg:p-16">
            <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-xl"></div>}>
              <ContactFormContent />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
