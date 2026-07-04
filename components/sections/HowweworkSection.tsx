"use client";

import {
  MessageCircle,
  Compass,
  HandCoins,
  Rocket,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

// Ganti dengan nomor WhatsApp bisnis kamu (format: kode negara tanpa "+" atau "0")
const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_MESSAGE =
  "Halo DenBizz, saya ingin diskusi kebutuhan proyek website/aplikasi saya.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Diskusi Kebutuhan",
    desc: "Ceritakan project impian Anda — jenis platform, fitur wajib, sampai target pengguna. Kami dengarkan dulu sebelum bicara solusi.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Rancang Solusi & Estimasi",
    desc: "Tim kami menyusun rekomendasi paket, teknologi, dan estimasi biaya yang paling pas dengan kebutuhan serta budget Anda.",
  },
  {
    number: "03",
    icon: HandCoins,
    title: "Kesepakatan & Persiapan",
    desc: "Setelah sepakat, DP 50% dan lengkapi aset (logo, teks, gambar) — proyek Anda resmi mulai dikerjakan.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Eksekusi & Serah Terima",
    desc: "Kami kerjakan dengan update rutin, lalu serah terima penuh setelah Anda benar-benar puas dengan hasilnya.",
  },
];

export function HowweworkSection() {
  return (
    <section id="cara-kerja" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-semibold text-xs tracking-widest uppercase">
            Cara Kerja
          </span>
          <h2 className="font-display font-bold text-4xl md:text-[40px] leading-tight tracking-tight text-on-surface mt-4">
            Dari Ide Menjadi{" "}
            <span className="text-primary italic">Website Siap Pakai</span>
          </h2>
          <p className="text-on-surface-variant mt-5 leading-relaxed">
            Proses kerja yang transparan dan terstruktur, dari obrolan
            pertama sampai proyek Anda resmi live — cukup 4 langkah.
          </p>
        </div>

        {/* Desktop: zigzag stepper */}
        <div className="hidden md:flex items-start gap-4 mb-24">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            const offset = i % 2 === 1 ? "md:mt-12" : "";
            return (
              <div key={step.number} className="flex-1 flex items-start gap-4">
                <div
                  className={`relative flex-1 rounded-3xl border border-outline-variant/30 bg-surface-container-low p-7 overflow-hidden ${offset}`}
                >
                  <span className="absolute -top-4 -right-2 font-display font-bold text-7xl text-on-surface/[0.04] select-none">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-5 shadow-md shadow-primary/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-on-surface mb-2">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {!isLast && (
                  <ArrowRight
                    className={`w-6 h-6 text-outline-variant shrink-0 mt-16 ${offset}`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden space-y-4 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <div key={step.number}>
                <div className="relative rounded-3xl border border-outline-variant/30 bg-surface-container-low p-6 overflow-hidden">
                  <span className="absolute -top-3 -right-1 font-display font-bold text-6xl text-on-surface/[0.04] select-none">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-md shadow-primary/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-on-surface mb-2">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {!isLast && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-5 h-5 text-outline-variant" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        {/* <div className="relative rounded-3xl bg-on-surface overflow-hidden px-8 py-10 md:px-12 md:py-12">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-tertiary/20 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-[28px] text-white leading-tight">
                Siap Mulai Proyek Anda?
              </h3>
              <p className="text-white/70 mt-2 max-w-md">
                Chat tim kami sekarang, konsultasi awal gratis tanpa komitmen apapun.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-on-surface font-semibold text-sm px-6 py-3.5 rounded-xl hover:brightness-95 transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              Chat via WhatsApp
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}