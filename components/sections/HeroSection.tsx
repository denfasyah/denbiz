"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Star, Zap, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-primary flex items-center pt-10">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -z-0 pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/15 rounded-full blur-3xl -z-0 pointer-events-none -translate-x-1/4 translate-y-1/4" />
      {/* Grid dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center py-6 lg:py-16">
        {/* ── Left: Copy ── */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          {/* Trust badge */}
          <div className="w-fit inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold md:mt-15 mb-2 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-tertiary" />
            {/* DIPERCAYA 100+ KLIEN SELURUH INDONESIA */} KOMITMEN KUALITAS & KEPUASAN KLIEN
          </div>

          <h1 className="font-display font-extrabold text-[2rem] sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-white mb-4 lg:mb-6">
            Jasa Pembuatan{" "}
            <span className="text-tertiary italic">Website</span>{" "}
            &amp;{" "}
            <span className="relative inline-block">
              Aplikasi
              <span className="absolute bottom-0.5 left-0 w-full h-3 bg-tertiary/30 -z-10 rounded-sm" />
            </span>{" "}
            Professional
          </h1>

          <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-10 max-w-xl">
            Kembangkan bisnis Anda di era digital bersama DenBiz. Dari landing
            page, company profile, toko online, hingga sistem informasi kustom
            — kami hadir dengan teknologi terbaru.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-7 py-3.5 rounded-xl font-bold text-sm hover:brightness-105 transition-all shadow-xl shadow-black/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Konsultasi via WhatsApp
            </a>
            <Link 
              href="/portofolio"
              className="inline-flex items-center gap-2 border border-white/30 text-white bg-white/10 backdrop-blur-sm px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/20 transition-all active:scale-95"
            >
              Lihat Portofolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-6 lg:mt-12 flex items-center gap-0 divide-x divide-white/20">
            {[
              { value: "100%", label: "Kepuasan Klien" },
              { value: "Detail", label: "Fokus pada Detail & Strategi" },
              { value: "24/7", label: "Support Readiness" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`${i === 0 ? "pr-8" : i === 1 ? "px-8" : "pl-8"}`}
              >
                <span className="block font-display font-bold text-2xl text-tertiary">
                  {stat.value}
                </span>
                <span className="text-white/50 text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Floating illustration ── */}
        <div className="order-1 lg:order-2 relative flex justify-center w-full max-w-[200px] sm:max-w-[240px] md:max-w-sm lg:max-w-none mx-auto lg:block mt-10 md:mt-0">
          <div className="relative z-10 animate-floating w-full">
            {/* Main illustration */}
            <div className="rounded-3xl overflow-hidden  p-2 flex items-center justify-center">
              <Image 
                src="/ilustraation.png" 
                alt="Illustration" 
                width={600} 
                height={500} 
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>

            {/* Floating badges */}
            <div
              className="absolute top-10 -right-4 md:top-10 md:-right-6 scale-[0.65] md:scale-100 origin-top-right bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 animate-bounce"
              style={{ animationDuration: "4s" }}
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="w-3.5 h-3.5 text-primary fill-primary" />
              </div>
              <span className="font-semibold text-xs text-on-surface whitespace-nowrap">Desain Eksklusif</span>
            </div>

            <div
              className="absolute top-1/2 -left-8 md:-left-10 scale-[0.65] md:scale-100 origin-left bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 animate-floating"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-7 h-7 rounded-full bg-tertiary/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-tertiary fill-tertiary" />
              </div>
              <span className="font-semibold text-xs text-on-surface whitespace-nowrap">Pengerjaan Cepat</span>
            </div>

            <div className="absolute -bottom-4 right-0 md:bottom-6 md:right-12 scale-[0.65] md:scale-100 origin-bottom-right bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 animate-pulse">
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
              </div>
              <span className="font-semibold text-xs text-on-surface whitespace-nowrap">Terpercaya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 900 0 720 20C540 40 240 0 0 20L0 60Z" fill="#f9f9ff" />
        </svg>
      </div>
    </section>
  );
}
