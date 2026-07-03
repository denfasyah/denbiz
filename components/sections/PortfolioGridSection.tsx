"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const categories = ["Semua", "Landing Page", "Sistem Informasi", "E-Commerce"];

const projects = [
  { id: 1, title: "Financier ERP", category: "Sistem Informasi", client: "PT Makmur Jaya", tech: ["Next.js", "PostgreSQL"], image: "#f5ca03" },
  { id: 2, title: "EcoShop", category: "E-Commerce", client: "EcoLife", tech: ["React", "Node.js"], image: "#ceee93" },
  { id: 3, title: "Modern Arch", category: "Landing Page", client: "Arch Studio", tech: ["Next.js", "Framer"], image: "#b6c4ff" },
  { id: 4, title: "Klinik Sehat", category: "Sistem Informasi", client: "RS Sehat", tech: ["Next.js", "Prisma"], image: "#a7f3d0" },
  { id: 5, title: "Gourmet Food", category: "E-Commerce", client: "Gourmet ID", tech: ["Vue", "Firebase"], image: "#ffb6b9" },
  { id: 6, title: "Tech Conf 2024", category: "Landing Page", client: "Tech ID", tech: ["React", "Tailwind"], image: "#b5ead7" },
  { id: 7, title: "HR Management", category: "Sistem Informasi", client: "PT Karya Abadi", tech: ["Next.js", "MongoDB"], image: "#e2f0cb" },
  { id: 8, title: "Fashion Store", category: "E-Commerce", client: "Style.co", tech: ["Shopify", "React"], image: "#ffdac1" },
  { id: 9, title: "Agency Web", category: "Landing Page", client: "Creative Studio", tech: ["Next.js", "GSAP"], image: "#ff9aa2" },
];

export function PortfolioGridSection() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = projects.filter(
    (p) => activeTab === "Semua" || p.category === activeTab
  );

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setVisibleCount(6);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === cat
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-surface-elevated text-on-surface-variant hover:bg-outline-variant hover:text-on-surface"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <div className="group rounded-3xl overflow-hidden bg-white border border-outline-variant/30 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div 
                  className="h-56 w-full relative overflow-hidden flex items-center justify-center p-6"
                  style={{ backgroundColor: project.image }}
                >
                  <div className="w-full h-full bg-black/10 rounded-xl border border-white/20 backdrop-blur-sm shadow-inner group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-on-surface">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-bold text-xl text-on-surface group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-4">Client: {project.client}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-surface-elevated text-[11px] font-medium text-on-surface-variant">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-md shadow-primary/10"
            >
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
