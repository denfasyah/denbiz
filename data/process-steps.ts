import {
  MessageCircle,
  Compass,
  HandCoins,
  Rocket,
} from "lucide-react";

export type ProcessStep = {
  number: string;
  icon: any; // using any here to avoid strict lucide-react typing issues
  title: string;
  desc: string;
};

export const steps: ProcessStep[] = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Diskusi Kebutuhan",
    desc: "Ceritakan project impian Anda — jenis platform, fitur wajib, sampai target pengguna. Kami dengarkan dulu sebelum bicara solusi.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Rancang Solusi & Estimasi",
    desc: "Tim kami menyusun rekomendasi paket, teknologi, dan estimasi biaya yang paling pas dengan kebutuhan serta budget Anda.",
  },
  {
    number: "03",
    icon: HandCoins,
    title: "Kesepakatan & Persiapan",
    desc: "Setelah sepakat, DP 50% dan lengkapi aset (logo, teks, gambar) — proyek Anda resmi mulai dikerjakan.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Eksekusi & Serah Terima",
    desc: "Kami kerjakan dengan update rutin, lalu serah terima penuh setelah Anda benar-benar puas dengan hasilnya.",
  },
];
