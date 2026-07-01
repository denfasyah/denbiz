"use client";

import Image from "next/image";
import { CheckCircle2, Target, Lightbulb, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="tentang" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] md:rounded-[3rem] -rotate-3 md:-rotate-6 scale-105 -z-10" />
            <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl relative bg-white p-5 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-primary/5 p-5 md:p-6 rounded-2xl md:rounded-3xl">
                    <Target className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                    <h3 className="font-display font-bold text-lg md:text-xl text-on-surface mb-2">Visi Kami</h3>
                    <p className="text-on-surface-variant text-xs md:text-sm">Menjadi mitra digital terbaik untuk pertumbuhan bisnis.</p>
                  </div>
                  <div className="bg-tertiary/10 p-5 md:p-6 rounded-2xl md:rounded-3xl">
                    <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-tertiary mb-3 md:mb-4" />
                    <h3 className="font-display font-bold text-lg md:text-xl text-on-surface mb-2">Inovasi</h3>
                    <p className="text-on-surface-variant text-xs md:text-sm">Teknologi modern untuk solusi yang relevan.</p>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6 sm:mt-8">
                  <div className="bg-green-50 p-5 md:p-6 rounded-2xl md:rounded-3xl">
                    <Users className="w-8 h-8 md:w-10 md:h-10 text-green-600 mb-3 md:mb-4" />
                    <h3 className="font-display font-bold text-lg md:text-xl text-on-surface mb-2">Kolaborasi</h3>
                    <p className="text-on-surface-variant text-xs md:text-sm">Bekerja bersama demi kesuksesan bersama.</p>
                  </div>
                  <div className="bg-orange-50 p-5 md:p-6 rounded-2xl md:rounded-3xl flex flex-col justify-center">
                    <div className="font-display font-black text-4xl md:text-5xl text-orange-500 mb-1 md:mb-2">300+</div>
                    <h3 className="font-display font-bold text-base md:text-lg text-on-surface mb-1 md:mb-2">Klien Puas</h3>
                    <p className="text-on-surface-variant text-xs md:text-sm">Telah mempercayakan digitalisasi mereka kepada kami.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">Tentang Kami</span>
            <h2 className="font-display font-bold text-4xl md:text-[40px] leading-tight tracking-tight text-on-surface mt-4 mb-6">
              Membangun Solusi Digital untuk Masa Depan Bisnis Anda
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              DenBiz hadir untuk menjembatani kesenjangan antara ide bisnis yang cemerlang dengan implementasi teknologi yang tepat. Kami lebih dari sekadar pembuat website; kami adalah mitra strategis Anda dalam era transformasi digital.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Berpengalaman menangani berbagai skala bisnis",
                "Fokus pada performa, keamanan, dan konversi",
                "Dukungan teknis yang responsif dan dapat diandalkan",
                "Desain antarmuka (UI/UX) yang ramah pengguna"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-tertiary shrink-0" />
                  <span className="text-on-surface font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#layanan" className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
              Pelajari Layanan Kami
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
