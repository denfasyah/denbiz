"use client";

import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

type MockupType = "dashboard" | "ecommerce" | "landing" | "profile";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  desc: string;
  tech: string[];
  accentColor: string;
  mockupType: MockupType;
  slug: string;
  liveUrl: string;
};

const categories = [
  "Semua",
  "Landing Page",
  "Company Profile",
  "E-Commerce",
  "Sistem Informasi",
  "Portofolio",
];

const PAGE_SIZE = 6;

const projects: Project[] = [
  {
    id: 1,
    title: "Financier ERP",
    subtitle: "Enterprise Dashboard System",
    category: "Sistem Informasi",
    client: "PT Makmur Jaya",
    desc: "Sistem manajemen sumber daya perusahaan terintegrasi dengan fitur reporting real-time.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    accentColor: "#f5ca03",
    mockupType: "dashboard",
    slug: "financier-erp",
    liveUrl: "https://financier-erp-demo.denbiz.id",
  },
  {
    id: 2,
    title: "EcoShop",
    subtitle: "Website E-Commerce",
    category: "E-Commerce",
    client: "EcoLife",
    desc: "Platform toko online produk ramah lingkungan dengan integrasi Midtrans dan manajemen stok.",
    tech: ["React", "Node.js", "MongoDB"],
    accentColor: "#ceee93",
    mockupType: "ecommerce",
    slug: "ecoshop",
    liveUrl: "https://ecoshop-demo.denbiz.id",
  },
  {
    id: 3,
    title: "Modern Arch",
    subtitle: "Landing Page Firma Arsitektur",
    category: "Landing Page",
    client: "Arch Studio",
    desc: "Landing page premium dengan desain minimalis dan animasi scroll reveal, konversi tinggi.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    accentColor: "#b6c4ff",
    mockupType: "landing",
    slug: "modern-arch",
    liveUrl: "https://modernarch-demo.denbiz.id",
  },
  {
    id: 4,
    title: "Klinik Sehat",
    subtitle: "Website Company Profile",
    category: "Company Profile",
    client: "RS Sehat",
    desc: "Company profile klinik modern dengan booking appointment online dan profil dokter.",
    tech: ["Next.js", "Prisma", "MySQL"],
    accentColor: "#a7f3d0",
    mockupType: "profile",
    slug: "klinik-sehat",
    liveUrl: "https://kliniksehat-demo.denbiz.id",
  },
  {
    id: 5,
    title: "Gourmet Food",
    subtitle: "Toko Online Kuliner",
    category: "E-Commerce",
    client: "Gourmet ID",
    desc: "E-commerce produk makanan premium dengan sistem pre-order dan pengiriman terjadwal.",
    tech: ["Vue", "Firebase"],
    accentColor: "#ffb6b9",
    mockupType: "ecommerce",
    slug: "gourmet-food",
    liveUrl: "https://gourmetfood-demo.denbiz.id",
  },
  {
    id: 6,
    title: "Tech Conf 2024",
    subtitle: "Landing Page Event",
    category: "Landing Page",
    client: "Tech ID",
    desc: "Landing page konferensi teknologi dengan pendaftaran online dan countdown timer.",
    tech: ["React", "Tailwind"],
    accentColor: "#b5ead7",
    mockupType: "landing",
    slug: "tech-conf-2024",
    liveUrl: "https://techconf2024-demo.denbiz.id",
  },
  {
    id: 7,
    title: "HR Management",
    subtitle: "Sistem Kepegawaian",
    category: "Sistem Informasi",
    client: "PT Karya Abadi",
    desc: "Sistem manajemen SDM dengan modul absensi, penggajian, dan cuti karyawan.",
    tech: ["Next.js", "MongoDB"],
    accentColor: "#e2f0cb",
    mockupType: "dashboard",
    slug: "hr-management",
    liveUrl: "https://hrmanagement-demo.denbiz.id",
  },
  {
    id: 8,
    title: "Fashion Store",
    subtitle: "Toko Online Fashion",
    category: "E-Commerce",
    client: "Style.co",
    desc: "Toko online fashion dengan katalog varian ukuran, warna, dan sistem diskon otomatis.",
    tech: ["Shopify", "React"],
    accentColor: "#ffdac1",
    mockupType: "ecommerce",
    slug: "fashion-store",
    liveUrl: "https://fashionstore-demo.denbiz.id",
  },
  {
    id: 9,
    title: "Agency Web",
    subtitle: "Landing Page Studio Kreatif",
    category: "Landing Page",
    client: "Creative Studio",
    desc: "Landing page studio kreatif dengan showcase karya dan animasi interaktif.",
    tech: ["Next.js", "GSAP"],
    accentColor: "#ff9aa2",
    mockupType: "landing",
    slug: "agency-web",
    liveUrl: "https://agencyweb-demo.denbiz.id",
  },
  {
    id: 10,
    title: "Toko Kopi Nusantara",
    subtitle: "Website Company Profile",
    category: "Company Profile",
    client: "Kopi Nusantara",
    desc: "Company profile UMKM kopi dengan galeri produk dan lokasi cabang.",
    tech: ["Next.js", "Tailwind"],
    accentColor: "#c7d2fe",
    mockupType: "profile",
    slug: "toko-kopi-nusantara",
    liveUrl: "https://tokokopinusantara-demo.denbiz.id",
  },
  {
    id: 11,
    title: "Warehouse System",
    subtitle: "Sistem Manajemen Gudang",
    category: "Sistem Informasi",
    client: "Logistik Prima",
    desc: "Sistem inventori gudang dengan pelacakan stok real-time dan laporan otomatis.",
    tech: ["Next.js", "PostgreSQL"],
    accentColor: "#fde68a",
    mockupType: "dashboard",
    slug: "warehouse-system",
    liveUrl: "https://warehousesystem-demo.denbiz.id",
  },
  {
    id: 12,
    title: "Boutique Store",
    subtitle: "Toko Online Butik",
    category: "E-Commerce",
    client: "Boutique Elle",
    desc: "Toko online butik dengan lookbook produk dan integrasi multi payment gateway.",
    tech: ["React", "Node.js"],
    accentColor: "#fbcfe8",
    mockupType: "ecommerce",
    slug: "boutique-store",
    liveUrl: "https://boutiquestore-demo.denbiz.id",
  },
  {
    id: 13,
    title: "Rangga Photography",
    subtitle: "Portofolio Fotografer",
    category: "Portofolio",
    client: "Freelance",
    desc: "Website portofolio fotografer dengan galeri karya berkategori dan form booking sesi foto.",
    tech: ["Next.js", "Tailwind"],
    accentColor: "#fcd34d",
    mockupType: "profile",
    slug: "rangga-photography",
    liveUrl: "https://ranggaphotography-demo.denbiz.id",
  },
  {
    id: 14,
    title: "Nadia UX Portfolio",
    subtitle: "Portofolio UX Designer",
    category: "Portofolio",
    client: "Freelance",
    desc: "Website portofolio UX designer dengan studi kasus proyek dan CV yang dapat diunduh.",
    tech: ["Next.js", "Framer Motion"],
    accentColor: "#a5b4fc",
    mockupType: "landing",
    slug: "nadia-ux-portfolio",
    liveUrl: "https://nadiaux-demo.denbiz.id",
  },
];

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