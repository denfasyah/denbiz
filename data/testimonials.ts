export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  quote: string;
  rating: number;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Budi Santoso",
    role: "CEO, TechForward Indonesia",
    initials: "BS",
    avatarColor: "bg-primary",
    quote:
      "DenBiz benar-benar memahami visi bisnis kami. Website yang mereka bangun tidak hanya cantik secara visual, tapi performanya juga sangat luar biasa dan cepat.",
    rating: 5,
    project: "Company Profile & E-Commerce",
  },
  {
    name: "Siti Aminah",
    role: "Founder, Bloom & Co",
    initials: "SA",
    avatarColor: "bg-[#4d661c]",
    quote:
      "Proses pengerjaannya sangat transparan dan cepat. Tim DenBiz sangat responsif terhadap masukan kami. Sangat direkomendasikan untuk startup yang ingin tampil profesional!",
    rating: 5,
    project: "Landing Page",
  },
  {
    name: "Andi Wijaya",
    role: "Product Manager, GoGlobal",
    initials: "AW",
    avatarColor: "bg-tertiary",
    quote:
      "Web app yang mereka kembangkan membantu meningkatkan efisiensi operasional kami hingga 60%. UI/UX-nya sangat intuitif, modern, dan mudah digunakan oleh seluruh tim.",
    rating: 5,
    project: "Web Application",
  },
  {
    name: "Rina Kusuma",
    role: "Marketing Director, Nusantara Brand",
    initials: "RK",
    avatarColor: "bg-[#1b5e20]",
    quote:
      "Landing page DenBiz berhasil meningkatkan conversion rate kami dari 2% menjadi 8% dalam satu bulan. Investasi terbaik untuk pertumbuhan bisnis digital kami.",
    rating: 5,
    project: "Landing Page Conversion",
  },
];
