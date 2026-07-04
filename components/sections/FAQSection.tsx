"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";



export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface-container-low relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Diajukan"
          />
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={index} delay={index * 0.05}>
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
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
