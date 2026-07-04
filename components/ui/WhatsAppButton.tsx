import { MessageCircle } from "lucide-react";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink("Halo DenBizz, saya ingin bertanya tentang layanan Anda.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Hubungi via WhatsApp"
      className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 active:scale-95 transition-all"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
