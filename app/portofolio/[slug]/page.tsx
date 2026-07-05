import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ExternalLink, ArrowLeft, CheckCircle2, TrendingUp } from "lucide-react";

import { projects } from "@/data/projects";
import { LaptopMockup } from "@/components/shared/ProjectCard";
import { CtaSection } from "@/components/sections/CtaSection";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects
    .filter((p) => p.type === "client")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study | DenBiz`,
    description: project.caseStudy?.challenge ?? project.desc,
    openGraph: {
      title: `${project.title} — Case Study | DenBiz`,
      description: project.caseStudy?.challenge ?? project.desc,
      url: `https://denbiz.agency/portofolio/${slug}`,
      siteName: "DenBiz",
      locale: "id_ID",
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();
  if (project.type !== "client") redirect("/portofolio");

  const cs = project.caseStudy;

  return (
    <>
      <main>
        {/* ── Hero ── */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{
            background: `linear-gradient(160deg, #0b1223 0%, #101b34 50%, ${project.accentColor}18 100%)`,
          }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
            style={{ background: project.accentColor }}
          />

          <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
            {/* Breadcrumb */}
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Portofolio
            </Link>

            {/* Category + Client */}
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span
                className="px-3 py-1 rounded-full text-[11px] font-bold text-on-tertiary"
                style={{ background: project.accentColor }}
              >
                {project.category}
              </span>
              <span className="text-white/40 text-sm">·</span>
              <span className="text-white/60 text-sm font-medium">
                {project.client}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-5">
              {project.title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-8">
              {project.desc}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-on-tertiary hover:brightness-105 transition-all shadow-lg"
                style={{ background: project.accentColor }}
              >
                Lihat Live
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/portofolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white border border-white/20 hover:bg-white/10 transition-all"
              >
                Semua Proyek
              </Link>
            </div>
          </div>
        </section>

        {/* ── Laptop Mockup besar ── */}
        <section className="bg-surface-container-low py-0">
          <div className="max-w-3xl mx-auto px-4 md:px-8 -mt-10">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{ boxShadow: `0 40px 80px ${project.accentColor}30` }}
            >
              <LaptopMockup
                type={project.mockupType}
                accent={project.accentColor}
                title={project.title}
                subtitle={project.subtitle}
                screenshot={project.screenshot}
              />
            </div>
          </div>
        </section>

        {/* ── Features Overview ── */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: project.accentColor }}>
                Fitur Unggulan
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-on-surface">
                Apa yang Dibangun
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 px-4 py-4 rounded-xl border border-outline-variant/30 bg-surface soft-shadow"
                >
                  <span className="text-sm font-medium text-on-surface">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Challenge & Solution ── */}
        {cs && (
          <section className="py-20 bg-surface">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                {/* Challenge */}
                <div
                  className="rounded-2xl p-8 border border-outline-variant/30 soft-shadow"
                  style={{ background: `${project.accentColor}08` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-xl"
                    style={{ background: `${project.accentColor}25` }}
                  >
                    🎯
                  </div>
                  <h3 className="font-display font-bold text-xl text-on-surface mb-4">
                    Tantangan Client
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">
                    {cs.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div
                  className="rounded-2xl p-8 border"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}15, ${project.accentColor}05)`,
                    borderColor: `${project.accentColor}40`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-xl"
                    style={{ background: `${project.accentColor}30` }}
                  >
                    💡
                  </div>
                  <h3 className="font-display font-bold text-xl text-on-surface mb-4">
                    Solusi yang Kami Bangun
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">
                    {cs.solution}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Impact / Hasil ── */}
        {cs?.impact && cs.impact.length > 0 && (
          <section className="py-20 bg-surface-container-low">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
              <div className="text-center mb-12">
                <p
                  className="text-sm font-semibold uppercase tracking-wider mb-2"
                  style={{ color: project.accentColor }}
                >
                  Hasil & Dampak
                </p>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-on-surface">
                  Apa yang Berubah
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {cs.impact.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 bg-surface border border-outline-variant/30 soft-shadow flex items-start gap-4"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${project.accentColor}20` }}
                    >
                      <TrendingUp
                        className="w-4 h-4"
                        style={{ color: project.accentColor }}
                      />
                    </div>
                    <p className="text-on-surface font-semibold text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Related CTA ── */}
        <section className="py-20 bg-surface">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div
              className="rounded-3xl p-10 md:p-14 text-center"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}20, ${project.accentColor}08)`,
                border: `1px solid ${project.accentColor}30`,
              }}
            >
              <CheckCircle2
                className="w-12 h-12 mx-auto mb-5"
                style={{ color: project.accentColor }}
              />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-on-surface mb-4">
                Ingin Hasil Serupa untuk Bisnis Anda?
              </h2>
              <p className="text-on-surface-variant mb-8 max-w-lg mx-auto leading-relaxed">
                Kami siap membantu mendigitalisasi bisnis Anda dengan solusi yang tepat sasaran. Konsultasi gratis, tanpa komitmen.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-on-tertiary hover:brightness-105 transition-all shadow-lg"
                  style={{ background: project.accentColor }}
                >
                  Mulai Konsultasi Gratis
                </a>
                <Link
                  href="/portofolio"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-on-surface border border-outline-variant/40 hover:bg-surface-elevated transition-all"
                >
                  Lihat Proyek Lainnya
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
