"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const serviceOptions = [
  "Landing Page",
  "Company Profile",
  "Web Application",
  "E-Commerce",
  "Maintenance & Support",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[40px] overflow-hidden border border-outline-variant/30 soft-shadow flex flex-col lg:flex-row">
          {/* Left panel */}
          <div className="lg:w-2/5 bg-primary p-12 lg:p-16 text-on-primary relative overflow-hidden">
            {/* Decorative rings */}
            <div className="absolute top-10 left-10 w-48 h-48 border-2 border-white/10 rounded-full pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-72 h-72 border-2 border-white/10 rounded-full pointer-events-none" />

            <div className="relative z-10">
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
                  },
                  {
                    icon: Phone,
                    label: "WhatsApp",
                    value: "+62 812-3456-7890",
                  },
                  {
                    icon: MapPin,
                    label: "Lokasi Kantor",
                    value: "SCBD District 8, Jakarta Selatan",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-on-primary/50">{label}</p>
                      <p className="font-medium text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-3/5 p-12 lg:p-16">
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
                <select className="w-full px-5 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm bg-white appearance-none">
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-semibold text-sm text-on-surface">Pesan Proyek</label>
                <textarea
                  rows={4}
                  placeholder="Ceritakan kebutuhan proyek Anda secara singkat..."
                  className="w-full px-5 py-3.5 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-tertiary text-on-tertiary font-semibold text-sm py-4 rounded-xl hover:brightness-105 transition-all shadow-lg shadow-tertiary/20 active:scale-[0.98]"
              >
                {submitted ? (
                  "Pesan Terkirim! ✓"
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
          </div>
        </div>
      </div>
    </section>
  );
}
