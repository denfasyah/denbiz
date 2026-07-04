"use client";

import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

import { MockupType, Project, projectCategories as categories, projects } from "@/data/projects";

const PAGE_SIZE = 9;


function LaptopMockup({
  type,
  accent,
  title,
  subtitle,
}: {
  type: MockupType;
  accent: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="relative h-52 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(160deg, #101b34, #182a4d 60%, ${accent}25)`,
      }}
    >
      <div className="absolute top-5 left-0 right-0 text-center px-6 z-10">
        <h4 className="text-white font-display font-bold text-base leading-tight">
          {title}
        </h4>
        <p className="text-white/50 text-[11px] mt-0.5">{subtitle}</p>
      </div>

      <div
        className="absolute w-36 h-36 rounded-full blur-3xl opacity-40"
        style={{ background: accent }}
      />

      <div className="relative mt-9 w-[60%]">
        <div className="rounded-t-md border-[3px] border-b-0 border-slate-700 bg-[#0c1424] overflow-hidden shadow-2xl">
          <div className="flex items-center gap-1 px-2 py-1.5 bg-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
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
        <div className="h-2 bg-slate-700 rounded-b-lg mx-[-6%] shadow-lg" />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface soft-shadow hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full">
      <LaptopMockup
        type={project.mockupType}
        accent={project.accentColor}
        title={project.title}
        subtitle={project.subtitle}
      />

      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className="px-3 py-1 rounded-full text-[11px] font-bold text-on-tertiary"
            style={{ background: project.accentColor }}
          >
            {project.category}
          </span>
          <span className="text-[11px] text-on-surface-variant/70">
            {project.client}
          </span>
        </div>

        <h3 className="font-display font-bold text-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
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

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pt-4 border-t border-outline-variant/30 text-primary font-semibold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all"
        >
          Lihat Live
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export function PortfolioGridSection() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [page, setPage] = useState(1);

  const filteredProjects = projects.filter(
    (p) => activeTab === "Semua" || p.category === activeTab
  );

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleTabChange = (cat: string) => {
    setActiveTab(cat);
    setPage(1);
  };

  const goToPage = (p: number) => {
    setPage(p);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-surface-elevated text-on-surface-variant border border-outline-variant/40 hover:border-primary hover:text-on-surface"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Result count */}
        <p className="text-center text-sm text-on-surface-variant mb-8">
          Menampilkan {displayedProjects.length} dari {filteredProjects.length} proyek
        </p>

        {/* Grid */}
        {displayedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.08}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <p className="text-center text-on-surface-variant py-16">
            Belum ada proyek untuk kategori ini.
          </p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Halaman sebelumnya"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-on-surface-variant disabled:hover:border-outline-variant"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                  p === currentPage
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-on-surface-variant border border-outline-variant/40 hover:border-primary hover:text-on-surface"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Halaman berikutnya"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-on-surface-variant disabled:hover:border-outline-variant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}