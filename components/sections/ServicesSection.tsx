"use client";

import { useRef, useState } from "react";
import {
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
  serviceColor,
}: {
  plan: Plan;
  serviceTitle: string;
  serviceColor: string;
}) {
  return (
    <div
      className={[
        "flex flex-col rounded-2xl p-8 md:p-10 border relative overflow-hidden h-full",
        plan.featured
          ? "border-2 bg-white shadow-xl md:scale-105 z-10"
          : plan.dark
          ? "border text-white"
          : "border border-outline-variant/30 bg-surface soft-shadow",
      ].join(" ")}
      style={
        plan.featured
          ? { borderColor: serviceColor }
          : plan.dark
          ? { background: serviceColor, borderColor: serviceColor }
          : undefined
      }
    >
      {plan.featured && (
        <span
          className="absolute top-5 right-5 text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full"
          style={{ background: serviceColor }}
        >
          Best Value
        </span>
      )}

      <span
        className={`font-semibold text-xs uppercase tracking-wider mb-2 ${
          plan.dark
            ? "text-white/70"
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
            plan.dark ? "text-white" : ""
          }`}
          style={plan.dark ? undefined : { color: serviceColor }}
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
              <BadgeCheck className="w-4 h-4 shrink-0" style={{ color: "rgba(255,255,255,0.8)" }} />
            ) : f.included ? (
              <Check className="w-4 h-4 shrink-0" style={{ color: serviceColor }} />
            ) : (
              <X className="w-4 h-4 shrink-0" />
            )}
            {f.text}
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsAppLink(
          `Halo DenBizz, saya tertarik dengan layanan *${serviceTitle}* paket *${plan.name}* (${plan.tier}) seharga ${plan.price} ${plan.unit}. Bisa dibantu info lebih lanjut?`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "w-full py-3.5 font-semibold text-sm rounded-xl text-center block transition-all",
          plan.featured
            ? "text-white hover:brightness-105 shadow-md"
            : plan.dark
            ? "bg-white hover:brightness-95"
            : "border border-outline-variant text-on-surface hover:text-white transition-colors",
        ].join(" ")}
        style={
          plan.featured
            ? { background: serviceColor }
            : plan.dark
            ? { color: serviceColor }
            : undefined
        }
        onMouseEnter={(e) => {
          if (!plan.featured && !plan.dark) {
            (e.currentTarget as HTMLAnchorElement).style.background = serviceColor;
            (e.currentTarget as HTMLAnchorElement).style.borderColor = serviceColor;
          }
        }}
        onMouseLeave={(e) => {
          if (!plan.featured && !plan.dark) {
            (e.currentTarget as HTMLAnchorElement).style.background = "";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "";
          }
        }}
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

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="relative mb-10">
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
                        ? "text-white border-transparent shadow-md"
                        : "bg-white text-on-surface-variant border-outline-variant/40 hover:text-on-surface",
                    ].join(" ")}
                    style={
                      isActive
                        ? { background: service.color, borderColor: service.color }
                        : { borderColor: undefined }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = service.color;
                        e.currentTarget.style.color = service.color;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = "";
                        e.currentTarget.style.color = "";
                      }
                    }}
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
            <PlanCard
              key={plan.name}
              plan={plan}
              serviceTitle={active.title}
              serviceColor={active.color}
            />
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
                <PlanCard
                  plan={plan}
                  serviceTitle={active.title}
                  serviceColor={active.color}
                />
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