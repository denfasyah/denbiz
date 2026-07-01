"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO, TechForward Indonesia",
    initials: "BS",
    avatarColor: "bg-primary",
    quote:
      "DenBiz benar-benar memahami visi bisnis kami. Website yang mereka bangun tidak hanya cantik secara visual, tapi performanya juga sangat luar biasa dan cepat.",
    rating: 5,
    project: "Company Profile & E-Commerce",
  },
  {
    name: "Siti Aminah",
    role: "Founder, Bloom & Co",
    initials: "SA",
    avatarColor: "bg-[#4d661c]",
    quote:
      "Proses pengerjaannya sangat transparan dan cepat. Tim DenBiz sangat responsif terhadap masukan kami. Sangat direkomendasikan untuk startup yang ingin tampil profesional!",
    rating: 5,
    project: "Landing Page",
  },
  {
    name: "Andi Wijaya",
    role: "Product Manager, GoGlobal",
    initials: "AW",
    avatarColor: "bg-tertiary",
    quote:
      "Web app yang mereka kembangkan membantu meningkatkan efisiensi operasional kami hingga 60%. UI/UX-nya sangat intuitif, modern, dan mudah digunakan oleh seluruh tim.",
    rating: 5,
    project: "Web Application",
  },
  {
    name: "Rina Kusuma",
    role: "Marketing Director, Nusantara Brand",
    initials: "RK",
    avatarColor: "bg-[#1b5e20]",
    quote:
      "Landing page DenBiz berhasil meningkatkan conversion rate kami dari 2% menjadi 8% dalam satu bulan. Investasi terbaik untuk pertumbuhan bisnis digital kami.",
    rating: 5,
    project: "Landing Page Conversion",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative left backdrop */}
      <div className="absolute left-0 top-0 bottom-0 w-64 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        {/* Decorative quote marks */}
        <div className="absolute top-1/4 left-8 text-white/5 font-display font-bold text-[200px] leading-none select-none">
          &ldquo;
        </div>
      </div>
      {/* Decorative right backdrop */}
      <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
        <div className="absolute bottom-1/4 right-8 text-white/5 font-display font-bold text-[200px] leading-none select-none">
          &rdquo;
        </div>
      </div>
      {/* Grid dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-tertiary font-semibold text-xs tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display font-bold text-4xl md:text-[40px] leading-tight tracking-tight text-white mt-4">
            Apa Kata Mereka
          </h2>
          <div className="w-16 h-1.5 bg-tertiary mx-auto mt-6 rounded-full" />
        </div>

        {/* Testimonial Card */}
        <div
          className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 mb-10 shadow-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote icon */}
          <div className="absolute -top-5 left-10 w-10 h-10 bg-tertiary rounded-full flex items-center justify-center shadow-lg">
            <Quote className="w-5 h-5 text-on-tertiary fill-on-tertiary" />
          </div>

          {/* Decorative accent corner */}
          <div className="absolute top-0 right-8 w-24 h-1 bg-tertiary rounded-b-full" />

          {/* Stars */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-tertiary fill-tertiary" />
            ))}
          </div>

          {/* Project tag */}
          <span className="inline-block px-3 py-1 rounded-full bg-tertiary/20 border border-tertiary/30 text-tertiary text-xs font-semibold mb-6">
            {t.project}
          </span>

          {/* Quote text */}
          <p className="text-white text-lg md:text-xl leading-relaxed italic font-light mb-8">
            &ldquo;{t.quote}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-full ${t.avatarColor} flex items-center justify-center text-white font-bold text-base shrink-0 ring-2 ring-white/20`}
            >
              {t.initials}
            </div>
            <div>
              <p className="font-bold text-white">{t.name}</p>
              <p className="text-white/60 text-sm">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2.5 bg-tertiary"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => { prev(); setIsAutoPlaying(false); }}
              className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => { next(); setIsAutoPlaying(false); }}
              className="w-11 h-11 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center hover:brightness-110 transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
