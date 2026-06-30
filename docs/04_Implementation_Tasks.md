# Panduan Implementasi (Task & Step-by-Step)

Dokumen ini berisi panduan tahap demi tahap untuk membangun website profil agensi DenBiz (Web Development Specialist) dari awal hingga deploy.

## Fase 1: Inisialisasi Proyek & Setup (Selesai)
* [x] **Task 1.1:** Inisialisasi Next.js app (`npx create-next-app@latest .`). Pilih TypeScript, Tailwind CSS, App Router.
* [x] **Task 1.2:** Konfigurasi Tailwind (`globals.css` untuk v4). Masukkan semua palet warna, font family, font size, spacing, dan shadow sesuai dokumen `03_Design_System.md`.
* [x] **Task 1.3:** Setup font global di `layout.tsx`. Load font `Manrope`, `Plus Jakarta Sans`, dan `Work Sans`.
* [x] **Task 1.4:** Setup library tambahan:
  * `framer-motion` (Animasi)
  * `lucide-react` (Ikon)
  * `clsx` & `tailwind-merge` (Utility class merging)
* [x] **Task 1.5:** Bersihkan boilerplate default Next.js di `page.tsx` dan `globals.css`.

## Fase 2: Pengembangan Komponen UI Reusable (Estimasi: 1-2 Hari)
* [ ] **Task 2.1:** Buat komponen `Button` (Variant: Primary, Outline, Text) di `src/components/ui/Button.tsx`.
* [ ] **Task 2.2:** Buat komponen `Input`, `Textarea`, dan `Select` untuk form (pilihan layanannya diubah menjadi khusus web).
* [ ] **Task 2.3:** Buat layout shell utama: `Navbar` (logo, link, tombol CTA) dan `Footer`.

## Fase 3: Pengembangan Halaman (Estimasi: 3-4 Hari)
Bagi pengerjaan ke dalam section komponen di `src/components/sections/`.

* [ ] **Task 3.1: Hero Section**
  * Teks judul disesuaikan ("Jasa Pembuatan Website Profesional").
  * CTA buttons & statistik performa web.
* [ ] **Task 3.2: Services Section (Khusus Web)**
  * Kartu 1: Landing Page & Company Profile
  * Kartu 2: Web Application & Sistem Informasi
  * Kartu 3: E-Commerce & Custom Integration
* [ ] **Task 3.3: Portfolio Section**
  * Bento grid layout menampilkan tangkapan layar website responsif (Desktop & Mobile view mockup).
* [ ] **Task 3.4: Testimonials Section**
  * Grid kartu testimoni klien pembuatan web.
* [ ] **Task 3.5: Pricing Section**
  * 3 Kolom kartu harga web (Starter, Business, Custom/Enterprise).
* [ ] **Task 3.6: Contact Section**
  * Form kontak dengan pilihan *Select Services*: (Landing Page, Company Profile, Web App, E-Commerce, Maintenance).

## Fase 4: Integrasi & Fungsionalitas Lanjutan (Estimasi: 2 Hari)
* [ ] **Task 4.1: Smooth Scrolling & Active State Nav**
  * Navbar mendeteksi posisi scroll section.
* [ ] **Task 4.2: Animasi Scroll Reveal**
  * Bungkus komponen section dengan tag Framer Motion (`<motion.div>`) (fade-in up).
* [ ] **Task 4.3: Floating WhatsApp Button**
  * FAB statis di pojok kanan bawah.
* [ ] **Task 4.4: Fungsionalitas Form Kontak**
  * Endpoint API di `src/app/api/contact/route.ts` menggunakan Resend API.

## Fase 5: QA & Optimasi Performa (Estimasi: 1-2 Hari)
* [ ] **Task 5.1:** Tes responsivitas menyeluruh (Chrome DevTools, HP fisik).
* [ ] **Task 5.2:** Audit Lighthouse. Targetkan metrik Performance, Accessibility, Best Practices, dan SEO harus 95+.
* [ ] **Task 5.3:** Meta Tags SEO di `layout.tsx` (Title: DenBiz - Web Development Specialist).
* [ ] **Task 5.4:** Optimasi Gambar (ubah semua image tag menggunakan `next/image` dengan format WebP/AVIF).

## Fase 6: Deployment (Estimasi: 1 Hari)
* [ ] **Task 6.1:** Push kode ke GitHub.
* [ ] **Task 6.2:** Import ke Vercel.
* [ ] **Task 6.3:** Set up Environment Variables di Vercel (Email API Key).
* [ ] **Task 6.4:** Deploy & konfigurasi Custom Domain.
