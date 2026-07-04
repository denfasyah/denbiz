export type NavLink = {
  name: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Layanan", href: "/layanan" },
  { name: "Portofolio", href: "/portofolio" },
  { name: "Kontak", href: "/kontak" },
];
