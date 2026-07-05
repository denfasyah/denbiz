"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/shared/ProjectCard";

import {
  projectCategories as categories,
  projects,
} from "@/data/projects";

const PAGE_SIZE = 9;

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
                <ProjectCard project={project} variant="grid" />
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