"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function FloatingButtons() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        className={cn(
          "w-12 h-12 bg-surface text-on-surface border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-surface-elevated hover:scale-110 active:scale-95 transition-all duration-300",
          showTopButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* WhatsApp Button */}
      <a
        href={buildWhatsAppLink("Halo DenBizz, saya butuh bantuan.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Hubungi via WhatsApp"
        className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
