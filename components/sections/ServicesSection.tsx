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
import { FadeIn } from "@/components/ui/FadeIn";

import { Plan, services } from "@/data/services";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SectionHeader } from "@/components/ui/SectionHeader";


function PlanCard({
  plan,
  serviceTitle,
}: {
  plan: Plan;
  serviceTitle: string;
}) {
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
      <a
        href={buildWhatsAppLink(`Halo DenBizz, saya tertarik dengan layanan *${serviceTitle}* paket *${plan.name}* (${plan.tier}) seharga ${plan.price} ${plan.unit}. Bisa dibantu info lebih lanjut?`)}
        target="_blank"
        rel="noopener noreferrer"
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
      </a>
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
        <FadeIn>
          <SectionHeader
            eyebrow="Layanan & Harga"
            title="Pilih Layanan, Lihat Paketnya"
          />
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
            <PlanCard key={plan.name} plan={plan} serviceTitle={active.title} />
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
                <PlanCard plan={plan} serviceTitle={active.title} />
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