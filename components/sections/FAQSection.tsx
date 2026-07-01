"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan sebuah website?",
    answer: "Waktu pengerjaan sangat bergantung pada kompleksitas fitur dan skala proyek. Untuk website Company Profile atau Landing Page, biasanya memakan waktu 1-2 minggu. Sedangkan untuk aplikasi web kompleks atau E-Commerce bisa memakan waktu 4-8 minggu atau lebih.",
  },
  {
    question: "Apakah saya perlu menyediakan domain dan hosting sendiri?",
    answer: "Tidak wajib. Kami menyediakan paket all-in-one yang sudah termasuk pendaftaran domain (.com/.id, dll) dan cloud hosting. Namun, jika Anda sudah memiliki domain dan hosting sendiri, kami juga siap membantu melakukan setup di server Anda.",
  },
  {
    question: "Apakah website yang dibuat sudah responsif (mobile-friendly)?",
    answer: "Tentu saja. Semua website yang kami kembangkan menggunakan pendekatan mobile-first. Ini memastikan tampilan dan fungsionalitas website Anda akan bekerja optimal di berbagai perangkat, mulai dari smartphone, tablet, hingga desktop.",
  },
  {
    question: "Apakah ada biaya perawatan (maintenance) setelah website selesai?",
    answer: "Kami memberikan garansi bug-fixing gratis selama 1 bulan pertama setelah serah terima. Selanjutnya, kami menawarkan paket maintenance opsional untuk update sistem, keamanan, dan backup rutin agar website Anda selalu dalam performa terbaik.",
  },
  {
    question: "Apakah saya bisa mengubah konten website sendiri nantinya?",
    answer: "Ya, kami dapat mengintegrasikan website Anda dengan sistem manajemen konten (CMS) yang user-friendly seperti WordPress atau Headless CMS, beserta panduan penggunaannya sehingga Anda dapat mengelola teks dan gambar dengan mudah.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface-container-low relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-xs tracking-widest uppercase">FAQ</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight text-on-surface mt-4">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-white border-primary/20 shadow-md" : "bg-transparent border-gray-200 hover:border-primary/30"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className={`font-semibold text-lg pr-8 ${isOpen ? "text-primary" : "text-on-surface"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-primary/10 text-primary rotate-180" : "bg-gray-100 text-gray-500"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
