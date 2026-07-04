"use client";

import {
  MessageCircle,
  Compass,
  HandCoins,
  Rocket,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

import { steps } from "@/data/process-steps";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const WHATSAPP_MESSAGE = "Halo DenBizz, saya ingin diskusi kebutuhan proyek website/aplikasi saya.";
const WHATSAPP_LINK = buildWhatsAppLink(WHATSAPP_MESSAGE);

export function HowweworkSection() {
  return (
    <section id="cara-kerja" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <FadeIn>
          <SectionHeader
            eyebrow="Cara Kerja"
            title={
              <>
                Dari Ide Menjadi <span className="text-primary italic">Website Siap Pakai</span>
              </>
            }
            subtitle="Proses kerja yang transparan dan terstruktur, dari obrolan pertama sampai proyek Anda resmi live — cukup 4 langkah."
          />
        </FadeIn>

        {/* Desktop: zigzag stepper */}
        <div className="hidden md:flex items-start gap-4 mb-24">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            const offset = i % 2 === 1 ? "md:mt-12" : "";
            return (
              <FadeIn key={step.number} delay={i * 0.15} className="flex-1 flex items-start gap-4">
                <div
                  className={`relative flex-1 rounded-3xl border border-outline-variant/30 bg-surface-container-low p-7 overflow-hidden ${offset}`}
                >
                  <span className="absolute -top-4 -right-2 font-display font-bold text-7xl text-on-surface/[0.04] select-none">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-5 shadow-md shadow-primary/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-on-surface mb-2">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {!isLast && (
                  <ArrowRight
                    className={`w-6 h-6 text-outline-variant shrink-0 mt-16 ${offset}`}
                  />
                )}
              </FadeIn>
            );
          })}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden space-y-4 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="relative rounded-3xl border border-outline-variant/30 bg-surface-container-low p-6 overflow-hidden">
                  <span className="absolute -top-3 -right-1 font-display font-bold text-6xl text-on-surface/[0.04] select-none">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-md shadow-primary/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-on-surface mb-2">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {!isLast && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-5 h-5 text-outline-variant" />
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>

        {/* CTA banner */}
        {/* <div className="relative rounded-3xl bg-on-surface overflow-hidden px-8 py-10 md:px-12 md:py-12">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-tertiary/20 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-[28px] text-white leading-tight">
                Siap Mulai Proyek Anda?
              </h3>
              <p className="text-white/70 mt-2 max-w-md">
                Chat tim kami sekarang, konsultasi awal gratis tanpa komitmen apapun.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-on-surface font-semibold text-sm px-6 py-3.5 rounded-xl hover:brightness-95 transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              Chat via WhatsApp
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}