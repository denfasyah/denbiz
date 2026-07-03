"use client";

import Image from "next/image";
import { CheckCircle2, Target, Lightbulb, Users, ShieldCheck, Heart, Sparkles, Globe, Mail, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Inovasi Berkelanjutan",
    desc: "Kami terus bereksplorasi dengan teknologi terbaru untuk memberikan solusi digital yang relevan dan future-proof.",
    color: "bg-amber-100 text-amber-600 border-amber-200"
  },
  {
    icon: ShieldCheck,
    title: "Transparansi & Etika",
    desc: "Komunikasi terbuka dan proses yang jelas. Tidak ada biaya tersembunyi atau janji yang tidak realistis.",
    color: "bg-blue-100 text-blue-600 border-blue-200"
  },
  {
    icon: Heart,
    title: "Fokus pada Kualitas",
    desc: "Kami membangun produk dengan cinta dan kebanggaan. Setiap baris kode dan piksel desain dibuat dengan standar tinggi.",
    color: "bg-rose-100 text-rose-600 border-rose-200"
  }
];

const team = [
  {
    name: "Alex Danvers",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    name: "Sarah Jenkins",
    role: "Tech Lead",
    image: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Michael Chen",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    name: "Diana Prince",
    role: "Project Manager",
    image: "https://i.pravatar.cc/300?img=5",
  }
];

export function AboutSection() {
  return (
    <div className="bg-surface pb-24">
      {/* 1. Visual Storytelling (History & Vision) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Asymmetric Image Layout */}
            <div className="relative h-[600px] w-full">
              <FadeIn delay={0.1} className="absolute top-0 left-0 w-2/3 h-[70%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <div className="w-full h-full bg-gray-200 relative">
                  <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tim DenBiz berkolaborasi" fill className="object-cover" />
                </div>
              </FadeIn>
              <FadeIn delay={0.3} className="absolute bottom-0 right-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <div className="w-full h-full bg-gray-200 relative">
                  <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Diskusi strategi" fill className="object-cover" />
                </div>
              </FadeIn>
              <FadeIn delay={0.5} className="absolute top-[20%] right-[10%] bg-white p-6 rounded-2xl shadow-xl z-30 animate-bounce">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-on-surface">5+ Tahun</p>
                    <p className="text-xs text-on-surface-variant font-medium">Pengalaman Industri</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Story Copy */}
            <div>
              <FadeIn>
                <span className="text-primary font-semibold text-xs tracking-widest uppercase">Kisah Kami</span>
                <h2 className="font-display font-bold text-4xl md:text-[40px] leading-tight tracking-tight text-on-surface mt-4 mb-6">
                  Berawal dari <span className="text-tertiary italic">Mimpi Sederhana</span>
                </h2>
                <div className="space-y-6 text-on-surface-variant leading-relaxed">
                  <p>
                    Didirikan pada tahun 2019, DenBiz dimulai dari sebuah ruangan kecil dengan 2 orang developer yang memiliki visi yang sama: Membuat teknologi yang dapat diakses dan berdampak nyata bagi pertumbuhan UMKM dan perusahaan skala menengah.
                  </p>
                  <p>
                    Kami menyadari bahwa banyak bisnis berjuang untuk bertransisi ke ranah digital karena kerumitan teknis dan biaya yang tidak pasti. Oleh karena itu, kami merancang model kerja yang transparan, terstruktur, dan berorientasi pada hasil (ROI).
                  </p>
                  <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
                    <p className="text-on-surface font-semibold italic text-lg">
                      "Misi kami bukan sekadar membangun website, tetapi menciptakan aset digital yang bekerja 24/7 untuk mengembangkan bisnis Anda."
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Core Values (3D Hover Cards) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">Nilai Perusahaan</span>
            <h2 className="font-display font-bold text-4xl leading-tight text-on-surface mt-4">
              Prinsip yang Kami Pegang Teguh
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title} delay={i * 0.1}>
                  <div className="group perspective-1000 h-full">
                    <div className="relative bg-white p-8 rounded-3xl border border-outline-variant/30 soft-shadow transition-transform duration-500 transform-style-3d group-hover:rotate-y-12 group-hover:rotate-x-12 group-hover:shadow-2xl h-full flex flex-col">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${value.color}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-on-surface mb-4 transform-translate-z-50">{value.title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed transform-translate-z-30 flex-grow">{value.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Meet The Team */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeIn>
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">Orang-Orang di Balik Layar</span>
              <h2 className="font-display font-bold text-4xl leading-tight text-on-surface mt-4">
                Tim Eksekutif DenBiz
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} className="md:max-w-xs text-on-surface-variant text-sm">
              Kami terdiri dari desainer inovatif, engineer berbakat, dan ahli strategi yang bersemangat untuk memecahkan masalah Anda.
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group">
                  <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-gray-200">
                    <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                      <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"><Globe className="w-4 h-4" /></button>
                      <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"><Mail className="w-4 h-4" /></button>
                      <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"><MessageCircle className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-on-surface text-center mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-semibold text-center">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
