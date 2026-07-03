"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  desc: string;
  tech: string[];
  accentColor: string;
  mockupType: "dashboard" | "ecommerce" | "landing" | "profile";
  slug: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Financier ERP",
    subtitle: "Enterprise Dashboard System",
    category: "Sistem Informasi",
    desc: "Sistem manajemen sumber daya perusahaan terintegrasi untuk manufaktur skala besar dengan fitur reporting real-time.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    accentColor: "#f5ca03",
    mockupType: "dashboard",
    slug: "financier-erp",
  },
  {
    id: 2,
    title: "EcoShop",
    subtitle: "Website E-Commerce",
    category: "E-Commerce",
    desc: "Platform toko online modern untuk produk ramah lingkungan dengan integrasi Midtrans, manajemen stok, dan laporan penjualan.",
    tech: ["React", "Node.js", "MongoDB"],
    accentColor: "#ceee93",
    mockupType: "ecommerce",
    slug: "ecoshop",
  },
  {
    id: 3,
    title: "Modern Arch",
    subtitle: "Landing Page Firma Arsitektur",
    category: "Landing Page",
    desc: "Landing page premium untuk firma arsitektur dengan desain minimalis, animasi scroll reveal, dan konversi rate tinggi.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    accentColor: "#b6c4ff",
    mockupType: "landing",
    slug: "modern-arch",
  },
  {
    id: 4,
    title: "Klinik Sehat",
    subtitle: "Website Company Profile",
    category: "Company Profile",
    desc: "Website company profile klinik modern dengan fitur booking appointment online, profil dokter, dan informasi layanan kesehatan.",
    tech: ["Next.js", "Prisma", "MySQL"],
    accentColor: "#a7f3d0",
    mockupType: "profile",
    slug: "klinik-sehat",
  },
];

function LaptopMockup({
  type,
  accent,
  title,
  subtitle,
}: {
  type: Project["mockupType"];
  accent: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="relative h-56 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(160deg, #101b34, #182a4d 60%, ${accent}25)`,
      }}
    >
      {/* Title overlay */}
      <div className="absolute top-5 left-0 right-0 text-center px-6 z-10">
        <h4 className="text-white font-display font-bold text-lg leading-tight">
          {title}
        </h4>
        <p className="text-white/50 text-[11px] mt-0.5">{subtitle}</p>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute w-40 h-40 rounded-full blur-3xl opacity-40"
        style={{ background: accent }}
      />

      {/* Laptop screen */}
      <div className="relative mt-10 w-[62%]">
        <div className="rounded-t-md border-[3px] border-b-0 border-slate-700 bg-[#0c1424] overflow-hidden shadow-2xl">
          {/* browser bar */}
          <div className="flex items-center gap-1 px-2 py-1.5 bg-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
          {/* content */}
          <div className="aspect-[16/10] p-2">
            {type === "dashboard" && (
              <div className="h-full flex flex-col gap-1">
                <div className="grid grid-cols-4 gap-1">
                  {[accent, "rgba(255,255,255,0.15)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.08)"].map(
                    (c, i) => (
                      <div key={i} className="h-4 rounded" style={{ background: c }} />
                    )
                  )}
                </div>
                <div className="flex-1 bg-white/5 rounded flex items-end p-1 gap-0.5">
                  {[50, 75, 35, 90, 60, 80, 45, 95, 70, 55].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{ height: `${h}%`, background: i % 2 === 0 ? accent : "rgba(255,255,255,0.2)" }}
                    />
                  ))}
                </div>
              </div>
            )}
            {type === "ecommerce" && (
              <div className="h-full flex flex-col gap-1">
                <div className="h-6 rounded flex items-center px-1.5 gap-1" style={{ background: accent + "30" }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: accent }} />
                  <div className="h-1 flex-1 bg-white/30 rounded" />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex flex-col gap-0.5">
                      <div className="flex-1 rounded bg-white/10" />
                      <div className="h-1 rounded" style={{ background: accent + "80" }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {type === "landing" && (
              <div className="h-full flex flex-col gap-1">
                <div
                  className="flex-[1.2] rounded flex flex-col items-center justify-center gap-1"
                  style={{ background: `linear-gradient(135deg, ${accent}30, transparent)` }}
                >
                  <div className="h-1.5 bg-white/60 rounded w-2/3" />
                  <div className="h-1 bg-white/30 rounded w-1/2" />
                  <div className="h-2.5 rounded-full px-4 mt-0.5" style={{ background: accent }} />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded bg-white/5 border border-white/10" />
                  ))}
                </div>
              </div>
            )}
            {type === "profile" && (
              <div className="h-full flex flex-col gap-1">
                <div className="flex gap-1.5 flex-[0.8]">
                  <div className="w-1/3 rounded" style={{ background: accent + "80" }} />
                  <div className="flex-1 flex flex-col gap-1 justify-center">
                    <div className="h-1.5 bg-white/40 rounded w-3/4" />
                    <div className="h-1 bg-white/20 rounded w-1/2" />
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-4 gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="rounded bg-white/5 border border-white/10" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* laptop base */}
        <div className="h-2 bg-slate-700 rounded-b-lg mx-[-6%] shadow-lg" />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="min-w-[85%] md:min-w-0 md:w-full snap-center flex flex-col rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface soft-shadow h-full">
      <LaptopMockup
        type={project.mockupType}
        accent={project.accentColor}
        title={project.title}
        subtitle={project.subtitle}
      />

      <div className="flex flex-col flex-grow p-6">
        <span
          className="self-start px-3 py-1 rounded-full text-[11px] font-bold mb-3 text-on-tertiary"
          style={{ background: project.accentColor }}
        >
          {project.category}
        </span>

        <h3 className="font-display font-bold text-lg text-on-surface mb-2">
          {project.title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-5 flex-grow">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href={`/portofolio/${project.slug}`}
          className="pt-4 border-t border-outline-variant/30 text-primary font-semibold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all"
        >
          Lihat Detail
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = sliderRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEdges();
  }, []);

  const scrollSlider = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 32; // gap-8
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="font-display font-bold text-4xl md:text-[40px] leading-tight tracking-tight text-on-surface mt-4">
              Proyek yang{" "}
              <span className="text-primary italic">Kami Kerjakan</span>
            </h2>
            <p className="text-on-surface-variant mt-3 max-w-lg leading-relaxed">
              Setiap proyek adalah cerita sukses. Ini sebagian kecil dari apa
              yang telah kami bangun bersama klien kami.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollSlider("left")}
              disabled={atStart}
              aria-label="Proyek sebelumnya"
              className="w-11 h-11 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-on-surface-variant disabled:hover:border-outline-variant"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              disabled={atEnd}
              aria-label="Proyek berikutnya"
              className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:brightness-110 transition-all shadow-lg shadow-primary/30 disabled:opacity-40 disabled:shadow-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          onScroll={updateEdges}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              data-card
              className="w-[85%] sm:w-[60%] md:w-[calc((100%-4rem)/3)] shrink-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="flex justify-center mt-12">
          <Link
            href="/portofolio"
            className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-4 transition-all group"
          >
            Lihat Semua Proyek
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}