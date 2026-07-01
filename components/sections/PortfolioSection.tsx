"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Financier ERP Dashboard",
    category: "Enterprise System",
    desc: "Sistem manajemen sumber daya perusahaan terintegrasi untuk manufaktur skala besar dengan fitur reporting real-time.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    accentColor: "#f5ca03",
    mockupType: "dashboard",
  },
  {
    id: 2,
    title: "EcoShop E-Commerce",
    category: "E-Commerce",
    desc: "Platform toko online modern untuk produk ramah lingkungan dengan integrasi Midtrans, manajemen stok, dan laporan penjualan.",
    tech: ["React", "Node.js", "MongoDB"],
    accentColor: "#ceee93",
    mockupType: "ecommerce",
  },
  {
    id: 3,
    title: "Modern Arch Landing",
    category: "Landing Page",
    desc: "Landing page premium untuk firma arsitektur dengan desain minimalis, animasi scroll reveal, dan konversi rate tinggi.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    accentColor: "#b6c4ff",
    mockupType: "landing",
  },
  {
    id: 4,
    title: "Klinik Sehat Company Profile",
    category: "Company Profile",
    desc: "Website company profile klinik modern dengan fitur booking appointment online, profil dokter, dan informasi layanan kesehatan.",
    tech: ["Next.js", "Prisma", "MySQL"],
    accentColor: "#a7f3d0",
    mockupType: "profile",
  },
];

function BrowserMockup({ type, accent }: { type: string; accent: string }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm shadow-2xl">
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-black/30 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="ml-3 flex-1 h-4 rounded-full bg-white/10 flex items-center px-3">
          <span className="text-white/40 text-[10px]">denbiz.agency/{type}</span>
        </div>
      </div>
      {/* Content illustration */}
      {type === "dashboard" && (
        <div className="p-4 space-y-3 bg-[#1b2640]">
          <div className="grid grid-cols-4 gap-2">
            {[accent, "rgba(255,255,255,0.15)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.08)"].map((c, i) => (
              <div key={i} className="h-14 rounded-xl" style={{ background: c }} />
            ))}
          </div>
          <div className="h-28 bg-white/5 rounded-xl flex items-end p-3 gap-1.5">
            {[50, 75, 35, 90, 60, 80, 45, 95, 70].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i % 2 === 0 ? accent : "rgba(255,255,255,0.2)" }} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-8 bg-white/10 rounded-lg" />
            <div className="h-8 rounded-lg" style={{ background: accent + "60" }} />
          </div>
        </div>
      )}
      {type === "ecommerce" && (
        <div className="p-4 space-y-3 bg-[#1a1a2e]">
          <div className="h-16 rounded-xl flex items-center px-4 gap-3" style={{ background: accent + "30" }}>
            <div className="w-8 h-8 rounded-full" style={{ background: accent }} />
            <div className="space-y-1 flex-1">
              <div className="h-2 bg-white/30 rounded w-3/4" />
              <div className="h-2 bg-white/15 rounded w-1/2" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-20 rounded-xl bg-white/10" />
                <div className="h-2 bg-white/20 rounded" />
                <div className="h-4 rounded" style={{ background: accent + "80" }} />
              </div>
            ))}
          </div>
        </div>
      )}
      {type === "landing" && (
        <div className="p-4 space-y-3 bg-[#0f0f1a]">
          <div className="h-24 rounded-xl flex flex-col items-center justify-center gap-2" style={{ background: `linear-gradient(135deg, ${accent}30, transparent)` }}>
            <div className="h-3 bg-white/60 rounded w-2/3" />
            <div className="h-2 bg-white/30 rounded w-1/2" />
            <div className="h-6 rounded-full px-6 mt-1" style={{ background: accent }} />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-20 rounded-xl bg-white/5 border border-white/10" />
            ))}
          </div>
        </div>
      )}
      {type === "profile" && (
        <div className="p-4 space-y-3 bg-[#0d1f2d]">
          <div className="flex gap-3">
            <div className="w-16 h-16 rounded-xl" style={{ background: accent + "80" }} />
            <div className="flex-1 space-y-2 pt-1">
              <div className="h-3 bg-white/40 rounded w-3/4" />
              <div className="h-2 bg-white/20 rounded w-1/2" />
              <div className="h-5 rounded" style={{ background: accent + "60" }} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function PortfolioSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  const project = projects[current];

  return (
    <section id="portfolio" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">Portfolio</span>
            <h2 className="font-display font-bold text-4xl md:text-[40px] leading-tight tracking-tight text-on-surface mt-4">
              Proyek yang{" "}
              <span className="text-primary italic">Kami Kerjakan</span>
            </h2>
          </div>
          <Link href="#" className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-4 transition-all group">
            Lihat Semua Proyek
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Browser mockup */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl opacity-30 blur-2xl -z-10"
              style={{ background: `radial-gradient(ellipse, ${project.accentColor}, transparent 70%)` }}
            />
            <div className="rounded-3xl overflow-hidden p-1" style={{ background: `linear-gradient(135deg, ${project.accentColor}40, rgba(255,255,255,0.05))` }}>
              <div className="rounded-[22px] overflow-hidden bg-[#131929] p-2">
                <BrowserMockup type={project.mockupType} accent={project.accentColor} />
              </div>
            </div>
          </div>

          {/* Right: Project info */}
          <div>
            {/* Dot indicators */}
            <div className="flex items-center gap-2 mb-8">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-outline-variant hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>

            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 text-on-tertiary"
              style={{ background: project.accentColor }}
            >
              {project.category}
            </span>

            <h3 className="font-display font-bold text-3xl text-on-surface mb-4">
              {project.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              {project.desc}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Counter */}
            <p className="text-on-surface-variant text-sm mb-6">
              <span className="font-bold text-primary text-lg">{current + 1}</span>
              <span> / {projects.length} Proyek</span>
            </p>

            {/* Arrow controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:brightness-110 transition-all shadow-lg shadow-primary/30"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <a
                href="#"
                className="ml-2 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                View Case Study <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
