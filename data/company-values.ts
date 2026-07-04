import { MessagesSquare, Clock, Gauge, ShieldCheck } from "lucide-react";

export type CompanyValue = {
  icon: any; // using any to bypass strict lucide typing
  title: string;
  desc: string;
};

export const reasons: CompanyValue[] = [
  {
    icon: MessagesSquare,
    title: "Komunikasi yang Jelas",
    desc: "Setiap kebutuhan teknis dijelaskan dengan bahasa yang mudah dipahami, tanpa istilah yang membingungkan.",
  },
  {
    icon: Clock,
    title: "Estimasi Waktu Realistis",
    desc: "Linimasa pengerjaan disampaikan di awal dan dipegang teguh, bukan sekadar angka perkiraan.",
  },
  {
    icon: Gauge,
    title: "Standar SEO & Kecepatan",
    desc: "Website dibangun ringan dan cepat, dengan struktur teknis yang ramah mesin pencari sejak awal pengembangan.",
  },
  {
    icon: ShieldCheck,
    title: "Skalabilitas & Keamanan",
    desc: "Dibangun di atas fondasi teknologi modern yang aman dan siap menyesuaikan seiring pertumbuhan bisnis Anda.",
  },
];
