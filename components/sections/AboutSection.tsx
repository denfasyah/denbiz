"use client";

import { MessagesSquare, Clock, Gauge, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const reasons = [
  {
    icon: MessagesSquare,
    title: "Komunikasi yang Jelas",
    desc: "Setiap kebutuhan teknis dijelaskan dengan bahasa yang mudah dipahami, tanpa istilah yang membingungkan.",
  },
  {
    icon: Clock,
    title: "Estimasi Waktu Realistis",
    desc: "Linimasa pengerjaan disampaikan di awal dan dipegang teguh, bukan sekadar angka perkiraan.",
  },
  {
    icon: Gauge,
    title: "Standar SEO & Kecepatan",
    desc: "Website dibangun ringan dan cepat, dengan struktur teknis yang ramah mesin pencari sejak awal pengembangan.",
  },
  {
    icon: ShieldCheck,
    title: "Skalabilitas & Keamanan",
    desc: "Dibangun di atas fondasi teknologi modern yang aman dan siap menyesuaikan seiring pertumbuhan bisnis Anda.",
  },
];

export function AboutSection() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <FadeIn className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-xs tracking-widest uppercase">
            Keunggulan
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight text-on-surface mt-4 mb-5">
            Mengapa Memilih{" "}
            <span className="text-tertiary italic">Kami </span>?
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            DenBiz menangani pembuatan website dan aplikasi web dari awal
            hingga rilis, dengan proses yang jelas dan hasil yang dapat
            diukur.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={reason.title} delay={i * 0.1}>
                <div className="group relative h-full bg-white rounded-3xl border border-outline-variant/40 p-7 overflow-hidden transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 hover:border-primary/60">
                  {/* top accent bar */}
                  <div className="absolute top-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />

                  {/* corner glow */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-2xl transition-all duration-500" />

                  <div className="relative w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="relative font-display font-bold text-lg text-on-surface mb-3">
                    {reason.title}
                  </h3>
                  <p className="relative text-on-surface-variant text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}