"use client";

import { useRef, useState } from "react";
import {
  Layout,
  Building2,
  ShoppingCart,
  Code2,
  Briefcase,
  Check,
  X,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

type PlanFeature = { text: string; included: boolean };

type Plan = {
  tier: string;
  name: string;
  price: string;
  unit: string;
  featured: boolean;
  dark: boolean;
  features: PlanFeature[];
  cta: string;
};

type ServiceCategory = {
  slug: string;
  icon: typeof Layout;
  shortLabel: string;
  title: string;
  desc: string;
  plans: Plan[];
};

const services: ServiceCategory[] = [
  {
    slug: "landing-page",
    icon: Layout,
    shortLabel: "Landing Page",
    title: "Landing Page",
    desc: "Satu halaman fokus konversi untuk promosi produk, event, atau penawaran spesifik — cepat, ringkas, dan langsung ke inti.",
    plans: [
      {
        tier: "Starter",
        name: "Basic",
        price: "Rp 399",
        unit: "ribu",
        featured: false,
        dark: false,
        features: [
          { text: "1 Halaman Responsif", included: true },
          { text: "Domain & Hosting 1 Tahun", included: true },
          { text: "SEO Basic (Meta Tags)", included: true },
          { text: "Desain Mobile Friendly", included: true },
          { text: "Integrasi Google Maps", included: true },
          { text: "Revisi 2x", included: true },
          { text: "Support Maintenance", included: false },
        ],
        cta: "Pilih Paket",
      },
      {
        tier: "Growth",
        name: "Medium",
        price: "Rp 799",
        unit: "ribu",
        featured: true,
        dark: false,
        features: [
          { text: "Semua Benefit Basic", included: true },
          { text: "Hingga 3 Section Tambahan", included: true },
          { text: "Integrasi WhatsApp CTA", included: true },
          { text: "Optimasi Kecepatan", included: true },
          { text: "Copywriting Persuasif", included: true },
          { text: "Integrasi Form Leads", included: true },
          { text: "Revisi 4x", included: true },
        ],
        cta: "Pilih Paket Sekarang",
      },
      {
        tier: "Scale",
        name: "Premium",
        price: "Rp 1.5",
        unit: "juta",
        featured: false,
        dark: true,
        features: [
          { text: "Semua Benefit Medium", included: true },
          { text: "Hingga 5 Section", included: true },
          { text: "Custom Animasi & Interaktif", included: true },
          { text: "Google Analytics & Search Console", included: true },
          { text: "A/B Testing Landing Page", included: true },
          { text: "Sertifikat SSL Premium", included: true },
          { text: "Support Maintenance 1 Bulan", included: true },
        ],
        cta: "Pilih Paket",
      },
    ],
  },
  {
    slug: "company-profile",
    icon: Building2,
    shortLabel: "Company Profile",
    title: "Company Profile",
    desc: "Website multi-halaman yang merepresentasikan identitas perusahaan secara menyeluruh, dari profil, layanan, hingga kontak.",
    plans: [
      {
        tier: "Starter",
        name: "Basic",
        price: "Rp 599",
        unit: "ribu",
        featured: false,
        dark: false,
        features: [
          { text: "3-5 Halaman (Beranda, Tentang, dll)", included: true },
          { text: "Domain & Hosting 1 Tahun", included: true },
          { text: "SEO Basic (Meta Tags)", included: true },
          { text: "Desain Responsif Mobile", included: true },
          { text: "Galeri Foto Produk/Layanan", included: true },
          { text: "Revisi 2x", included: true },
          { text: "Support Maintenance", included: false },
        ],
        cta: "Pilih Paket",
      },
      {
        tier: "Growth",
        name: "Medium",
        price: "Rp 1.2",
        unit: "juta",
        featured: true,
        dark: false,
        features: [
          { text: "Semua Benefit Basic", included: true },
          { text: "Hingga 8 Halaman", included: true },
          { text: "Formulir Kontak & Peta Lokasi", included: true },
          { text: "Integrasi Google Analytics", included: true },
          { text: "Halaman Testimoni Klien", included: true },
          { text: "Integrasi Media Sosial", included: true },
          { text: "Revisi 4x", included: true },
        ],
        cta: "Pilih Paket Sekarang",
      },
      {
        tier: "Scale",
        name: "Premium",
        price: "Rp 2.2",
        unit: "juta",
        featured: false,
        dark: true,
        features: [
          { text: "Semua Benefit Medium", included: true },
          { text: "Halaman Karier & Blog", included: true },
          { text: "Custom Animasi & Interaktif", included: true },
          { text: "Dwibahasa (Indonesia/Inggris)", included: true },
          { text: "Optimasi SEO Lanjutan", included: true },
          { text: "Chat Widget Terintegrasi", included: true },
          { text: "Support Maintenance 1 Bulan", included: true },
        ],
        cta: "Pilih Paket",
      },
    ],
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    shortLabel: "E-Commerce",
    title: "E-Commerce",
    desc: "Toko online berperforma tinggi dengan integrasi payment gateway dan sistem manajemen produk yang lengkap.",
    plans: [
      {
        tier: "Starter",
        name: "Basic",
        price: "Rp 2.8",
        unit: "juta",
        featured: false,
        dark: false,
        features: [
          { text: "Katalog Produk", included: true },
          { text: "Keranjang & Checkout", included: true },
          { text: "1 Payment Gateway", included: true },
          { text: "Manajemen Produk Dasar", included: true },
          { text: "Halaman Detail Produk", included: true },
          { text: "Revisi 2x", included: true },
          { text: "Support Maintenance", included: false },
        ],
        cta: "Pilih Paket",
      },
      {
        tier: "Growth",
        name: "Medium",
        price: "Rp 5.5",
        unit: "juta",
        featured: true,
        dark: false,
        features: [
          { text: "Semua Benefit Basic", included: true },
          { text: "Multi Payment Gateway", included: true },
          { text: "Manajemen Stok Otomatis", included: true },
          { text: "Integrasi Ongkir", included: true },
          { text: "Sistem Diskon & Voucher", included: true },
          { text: "Notifikasi Pesanan Otomatis", included: true },
          { text: "Revisi 4x", included: true },
        ],
        cta: "Pilih Paket Sekarang",
      },
      {
        tier: "Scale",
        name: "Premium",
        price: "Rp 9.5",
        unit: "juta",
        featured: false,
        dark: true,
        features: [
          { text: "Semua Benefit Medium", included: true },
          { text: "Sinkronisasi Multi-Platform", included: true },
          { text: "Custom Promo & Diskon", included: true },
          { text: "Integrasi Pixel & Ads", included: true },
          { text: "Dashboard Laporan Penjualan", included: true },
          { text: "Fitur Multi-Bahasa & Mata Uang", included: true },
          { text: "Support Maintenance 3 Bulan", included: true },
        ],
        cta: "Pilih Paket",
      },
    ],
  },
  {
    slug: "sistem-informasi",
    icon: Code2,
    shortLabel: "Sistem Informasi",
    title: "Sistem Informasi",
    desc: "Aplikasi web kustom untuk kebutuhan operasional bisnis, dari manajemen data hingga dashboard admin, dibangun dengan arsitektur yang skalabel.",
    plans: [
      {
        tier: "Starter",
        name: "Basic",
        price: "Rp 3.5",
        unit: "juta",
        featured: false,
        dark: false,
        features: [
          { text: "Modul Dasar (CRUD)", included: true },
          { text: "Admin Dashboard", included: true },
          { text: "Setup Database", included: true },
          { text: "Autentikasi Pengguna", included: true },
          { text: "Dokumentasi Sistem", included: true },
          { text: "Revisi 2x", included: true },
          { text: "Support Maintenance", included: false },
        ],
        cta: "Pilih Paket",
      },
      {
        tier: "Growth",
        name: "Medium",
        price: "Rp 6.5",
        unit: "juta",
        featured: true,
        dark: false,
        features: [
          { text: "Semua Benefit Basic", included: true },
          { text: "Multi-User Role & Permission", included: true },
          { text: "Integrasi API Pihak Ketiga", included: true },
          { text: "Laporan / Report Generator", included: true },
          { text: "Notifikasi Real-time", included: true },
          { text: "Export Data (Excel/PDF)", included: true },
          { text: "Revisi 4x", included: true },
        ],
        cta: "Pilih Paket Sekarang",
      },
      {
        tier: "Scale",
        name: "Premium",
        price: "Rp 12",
        unit: "juta",
        featured: false,
        dark: true,
        features: [
          { text: "Semua Benefit Medium", included: true },
          { text: "Arsitektur Skalabel", included: true },
          { text: "Custom Workflow Bisnis", included: true },
          { text: "Integrasi Sistem Eksternal", included: true },
          { text: "Backup & Recovery Otomatis", included: true },
          { text: "Monitoring & Logging Sistem", included: true },
          { text: "Support Maintenance 2 Bulan", included: true },
        ],
        cta: "Pilih Paket",
      },
    ],
  },
  {
    slug: "portofolio",
    icon: Briefcase,
    shortLabel: "Portofolio",
    title: "Portofolio",
    desc: "Website personal untuk menampilkan karya dan pengalaman profesional Anda — cocok untuk freelancer, kreator, atau job seeker.",
    plans: [
      {
        tier: "Starter",
        name: "Basic",
        price: "Rp 299",
        unit: "ribu",
        featured: false,
        dark: false,
        features: [
          { text: "1 Halaman Portofolio", included: true },
          { text: "Showcase hingga 6 Proyek", included: true },
          { text: "Domain & Hosting 1 Tahun", included: true },
          { text: "Desain Modern & Responsif", included: true },
          { text: "Integrasi Kontak Dasar", included: true },
          { text: "Revisi 2x", included: true },
          { text: "Support Maintenance", included: false },
        ],
        cta: "Pilih Paket",
      },
      {
        tier: "Growth",
        name: "Medium",
        price: "Rp 599",
        unit: "ribu",
        featured: true,
        dark: false,
        features: [
          { text: "Semua Benefit Basic", included: true },
          { text: "Showcase hingga 15 Proyek", included: true },
          { text: "CV/Resume Dapat Diunduh", included: true },
          { text: "Integrasi Kontak & Media Sosial", included: true },
          { text: "Testimoni & Rekomendasi", included: true },
          { text: "Optimasi SEO Personal Branding", included: true },
          { text: "Revisi 4x", included: true },
        ],
        cta: "Pilih Paket Sekarang",
      },
      {
        tier: "Scale",
        name: "Premium",
        price: "Rp 999",
        unit: "ribu",
        featured: false,
        dark: true,
        features: [
          { text: "Semua Benefit Medium", included: true },
          { text: "Custom Animasi & Micro-interaction", included: true },
          { text: "Blog / Studi Kasus Proyek", included: true },
          { text: "Custom Domain Branding", included: true },
          { text: "Analitik Pengunjung", included: true },
          { text: "Integrasi Video Showcase", included: true },
          { text: "Support Maintenance 1 Bulan", included: true },
        ],
        cta: "Pilih Paket",
      },
    ],
  },
];

function PlanCard({ plan, serviceSlug }: { plan: Plan; serviceSlug: string }) {
  return (
    <div
      className={[
        "flex flex-col rounded-2xl p-8 md:p-10 border relative overflow-hidden h-full",
        plan.featured
          ? "border-2 border-tertiary bg-white shadow-xl md:scale-105 z-10"
          : plan.dark
          ? "border border-primary bg-primary text-on-primary"
          : "border border-outline-variant/30 bg-surface soft-shadow",
      ].join(" ")}
    >
      {plan.featured && (
        <span className="absolute top-5 right-5 bg-tertiary text-on-tertiary text-[10px] font-bold uppercase px-3 py-1.5 rounded-full">
          Best Value
        </span>
      )}

      <span
        className={`font-semibold text-xs uppercase tracking-wider mb-2 ${
          plan.dark
            ? "text-white/70"
            : plan.featured
            ? "text-primary"
            : "text-on-surface-variant"
        }`}
      >
        {plan.tier}
      </span>
      <h3
        className={`font-display font-bold text-xl mb-6 ${
          plan.dark ? "text-white" : "text-on-surface"
        }`}
      >
        {plan.name}
      </h3>
      <div className="mb-8">
        <span
          className={`text-3xl font-bold font-display ${
            plan.dark ? "text-white" : "text-primary"
          }`}
        >
          {plan.price}
        </span>
        <span
          className={`text-sm ml-1 ${
            plan.dark ? "text-white/70" : "text-on-surface-variant"
          }`}
        >
          {plan.unit}
        </span>
      </div>
      <ul className="space-y-4 mb-10 flex-grow">
        {plan.features.map((f) => (
          <li
            key={f.text}
            className={`flex items-center gap-3 text-sm ${
              plan.dark
                ? "text-white/85"
                : f.included
                ? "text-on-surface-variant"
                : "text-on-surface-variant/40"
            }`}
          >
            {plan.dark ? (
              <BadgeCheck className="w-4 h-4 text-tertiary shrink-0" />
            ) : f.included ? (
              <Check className="w-4 h-4 text-primary shrink-0" />
            ) : (
              <X className="w-4 h-4 shrink-0" />
            )}
            {f.text}
          </li>
        ))}
      </ul>
      <Link
        href={`/kontak?layanan=${serviceSlug}&paket=${plan.name.toLowerCase()}`}
        className={[
          "w-full py-3.5 font-semibold text-sm rounded-xl text-center block transition-all",
          plan.featured
            ? "bg-tertiary text-on-tertiary hover:brightness-105 shadow-md"
            : plan.dark
            ? "bg-white text-primary hover:brightness-95"
            : "border border-outline-variant text-on-surface hover:bg-on-surface hover:text-white",
        ].join(" ")}
      >
        {plan.cta}
      </Link>
    </div>
  );
}

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const active = services[activeTab];

  const scrollSlider = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const handleTabChange = (index: number, el: HTMLButtonElement) => {
    setActiveTab(index);
    sliderRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section id="layanan" className="py-24 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-xs tracking-widest uppercase">
            Layanan & Harga
          </span>
          <h2 className="font-display font-bold text-4xl md:text-[40px] leading-tight tracking-tight text-on-surface mt-4">
            Pilih Layanan, Lihat Paketnya
          </h2>
          <div className="w-16 h-1.5 bg-tertiary mx-auto mt-6 rounded-full" />
        </FadeIn>

        {/* Tabs — horizontally scrollable on mobile, centered on desktop */}
        <FadeIn delay={0.1}>
          <div className="relative mb-10">
            {/* edge fade hints (only relevant while scrollable, i.e. mobile) */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface-container-low to-transparent z-10 md:hidden" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface-container-low to-transparent z-10 md:hidden" />

            <div
              ref={tabsRef}
              className="flex gap-3 overflow-x-auto snap-x snap-proximity px-1 py-1 [&::-webkit-scrollbar]:hidden md:flex-wrap md:justify-center md:overflow-visible"
              style={{ scrollbarWidth: "none" }}
            >
              {services.map((service, i) => {
                const Icon = service.icon;
                const isActive = i === activeTab;
                return (
                  <button
                    key={service.slug}
                    onClick={(e) => handleTabChange(i, e.currentTarget)}
                    className={[
                      "flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all border whitespace-nowrap snap-center shrink-0",
                      isActive
                        ? "bg-on-surface text-white border-on-surface shadow-md"
                        : "bg-white text-on-surface-variant border-outline-variant/40 hover:border-primary hover:text-on-surface",
                    ].join(" ")}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {service.shortLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Selected service description */}
        <FadeIn delay={0.15} key={active.slug}>
          <p className="text-center text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed">
            {active.desc}
          </p>
        </FadeIn>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-center">
          {active.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} serviceSlug={active.slug} />
          ))}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {active.plans.map((plan) => (
              <div key={plan.name} className="min-w-[85%] snap-center">
                <PlanCard plan={plan} serviceSlug={active.slug} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => scrollSlider("left")}
              aria-label="Paket sebelumnya"
              className="w-11 h-11 rounded-full border border-outline-variant/40 bg-white flex items-center justify-center text-on-surface active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              aria-label="Paket berikutnya"
              className="w-11 h-11 rounded-full border border-outline-variant/40 bg-white flex items-center justify-center text-on-surface active:scale-95 transition-transform"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}