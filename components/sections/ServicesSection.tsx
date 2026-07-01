import { Layout, Code2, ShoppingCart, CheckCircle, Stars } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Page & Company Profile",
    desc: "Website profesional yang merepresentasikan merek Anda. Desain eksklusif, performa cepat, dan konversi tinggi untuk mendukung pertumbuhan bisnis.",
    features: ["Desain Responsif & Modern", "SEO Optimization", "Domain & Hosting Setup"],
    featured: false,
  },
  {
    icon: Code2,
    title: "Web Application & Sistem Informasi",
    desc: "Solusi web app kustom dari sistem manajemen, dashboard admin, hingga platform SaaS yang dibangun dengan teknologi terkini dan arsitektur yang skalabel.",
    features: ["Full-Stack Development", "Database Integration", "Admin Dashboard"],
    featured: true,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Custom Integration",
    desc: "Toko online berperforma tinggi dengan pengalaman belanja yang mulus, integrasi payment gateway, dan sistem manajemen produk yang lengkap.",
    features: ["Payment Gateway Integration", "Manajemen Produk & Stok", "Multi-Platform Sync"],
    featured: false,
  },
];

export function ServicesSection() {
  return (
    <section id="layanan" className="py-24 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-xs tracking-widest uppercase">Layanan Kami</span>
          <h2 className="font-display font-bold text-4xl md:text-[40px] leading-tight tracking-tight text-on-surface mt-4">
            Solusi Digital Bisnis Anda
          </h2>
          <div className="w-16 h-1.5 bg-tertiary mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return service.featured ? (
              /* Featured card */
              <div
                key={service.title}
                className="group bg-primary text-on-primary p-8 rounded-2xl soft-shadow border border-primary/50 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-tertiary/10 rounded-full -ml-12 -mb-12 pointer-events-none" />

                <div className="w-14 h-14 bg-tertiary rounded-xl flex items-center justify-center mb-6 shrink-0 shadow-lg">
                  <Icon className="w-7 h-7 text-on-tertiary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-4 relative z-10">{service.title}</h3>
                <p className="text-on-primary/75 text-sm leading-relaxed mb-6 flex-grow relative z-10">{service.desc}</p>
                <ul className="space-y-3 mb-8 relative z-10">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-on-primary/70">
                      <Stars className="w-4 h-4 text-tertiary fill-tertiary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-tertiary text-on-tertiary font-semibold text-sm rounded-xl hover:brightness-110 transition-all relative z-10">
                  Pelajari Selengkapnya
                </button>
              </div>
            ) : (
              /* Regular card */
              <div
                key={service.title}
                className="group bg-surface p-8 rounded-2xl border border-outline-variant/30 soft-shadow hover:border-primary hover:shadow-primary/10 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-on-surface mb-4">{service.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 border border-primary text-primary font-semibold text-sm rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  Pelajari Selengkapnya
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
