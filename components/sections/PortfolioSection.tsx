"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Project, projects as allProjects } from "@/data/projects";

const projects = allProjects.slice(0, 4);


import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
          <SectionHeader
            eyebrow="Portfolio"
            align="left"
            className="mb-0"
            title={
              <>
                Proyek yang <span className="text-primary italic">Kami Kerjakan</span>
              </>
            }
            subtitle="Setiap proyek adalah cerita sukses. Ini sebagian kecil dari apa yang telah kami bangun bersama klien kami."
          />

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
              <ProjectCard project={project} variant="slider" />
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