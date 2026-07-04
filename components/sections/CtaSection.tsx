"use client";

import {
  MessageCircle,
} from "lucide-react";

// Ganti dengan nomor WhatsApp bisnis kamu (format: kode negara tanpa "+" atau "0")
const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_MESSAGE =
  "Halo DenBizz, saya ingin diskusi kebutuhan proyek website/aplikasi saya.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;



export function CtaSection() {
  return (
    <section id="cta" className="py-24 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">

        {/* CTA banner */}
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-12 md:px-14 md:py-16"
          style={{
            background: "linear-gradient(135deg, #0f2f6b 0%, #16409e 55%, #1c4fc2 100%)",
          }}
        >
          {/* decorative glows */}
          <div className="absolute -top-20 -right-10 w-72 h-72 rounded-full bg-tertiary/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          {/* dot grid texture */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-lg">
              <span className="inline-flex items-center gap-1.5 bg-tertiary text-on-tertiary text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                Respon Cepat &lt; 1 Jam
              </span>
              <h3 className="font-display font-bold text-2xl md:text-[32px] text-white leading-tight">
                Siap Mulai Proyek Anda?
              </h3>
              <p className="text-white/70 mt-3">
                Chat tim kami sekarang, konsultasi awal gratis tanpa komitmen apapun.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary font-bold text-sm px-7 py-4 rounded-xl hover:brightness-105 shadow-xl shadow-black/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Chat via WhatsApp
              </a>
              <span className="text-white/50 text-xs">
                Tanpa biaya konsultasi awal
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}