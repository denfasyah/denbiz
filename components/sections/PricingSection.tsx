import { Check, X, BadgeCheck } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    tier: "Startup",
    name: "Basic",
    price: "Rp 399",
    unit: "/ribu",
    featured: false,
    dark: false,
    features: [
      { text: "1 Halaman Responsif", included: true },
      { text: "Domain & Hosting 1 Thn", included: true },
      { text: "SEO Basic Meta Tags", included: true },
      { text: "Premium Support", included: false },
    ],
    cta: "Pilih Paket",
    ctaClass:
      "w-full py-4 border border-outline-variant text-on-surface font-semibold text-sm rounded-xl hover:bg-on-surface hover:text-white transition-all text-center block",
  },
  {
    tier: "Growth",
    name: "Medium",
    price: "Rp 599",
    unit: "/ribu",
    featured: true,
    dark: false,
    features: [
      { text: "Semua Benefit Basic", included: true },
      { text: "Hingga 3 Section Tambahan", included: true },
      { text: "Integrasi Social Media", included: true },
      { text: "Optimasi Kecepatan Pro", included: true },
    ],
    cta: "Pilih Paket Sekarang",
    ctaClass:
      "w-full py-4 bg-tertiary text-on-tertiary font-semibold text-sm rounded-xl hover:brightness-105 transition-all shadow-md text-center block",
  },
  {
    tier: "Scale",
    name: "Premium",
    price: "Rp 999",
    unit: "/ribu",
    featured: false,
    dark: true,
    features: [
      { text: "Benefit Medium + All", included: true },
      { text: "Custom Animasi & Interaktif", included: true },
      { text: "Integrasi Pixel & Ads", included: true },
      { text: "Support Maintenance 3 Bln", included: true },
    ],
    cta: "Pilih Paket",
    ctaClass:
      "w-full py-4 bg-tertiary text-on-tertiary font-semibold text-sm rounded-xl hover:brightness-110 transition-all text-center block",
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-[40px] leading-tight tracking-tight text-on-surface">
            Investasi Terbaik Untuk Bisnis Anda
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Pilih paket yang sesuai dengan skala dan kebutuhan operasional perusahaan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={[
                "flex flex-col rounded-2xl p-10 border relative overflow-hidden",
                plan.featured
                  ? "border-2 border-tertiary bg-white shadow-xl scale-105 z-10"
                  : plan.dark
                  ? "border border-primary bg-primary text-on-primary"
                  : "border border-outline-variant/30 bg-surface soft-shadow",
              ].join(" ")}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div className="absolute top-6 right-[-35px] bg-tertiary text-on-tertiary px-10 py-1 rotate-45 text-[10px] font-bold uppercase">
                  Popular
                </div>
              )}

              <span
                className={`font-semibold text-xs uppercase tracking-wider mb-2 ${
                  plan.dark
                    ? "text-[#b6c4ff]"
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
                  className={`text-sm ${
                    plan.dark ? "text-[#b6c4ff]" : "text-on-surface-variant"
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
                        ? "text-[#dce1ff]"
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
              <Link href={`/kontak?paket=${plan.name.toLowerCase()}`} className={plan.ctaClass}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
