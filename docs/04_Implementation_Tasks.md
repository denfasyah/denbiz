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
* [x] **Task 2.1:** Buat komponen `Button` (Variant: Primary, Outline, Text) di `src/components/ui/Button.tsx`.
* [x] **Task 2.2:** Buat komponen `Input`, `Textarea`, dan `Select` untuk form (pilihan layanannya diubah menjadi khusus web).
* [x] **Task 2.3:** Buat layout shell utama: `Navbar` (logo, link, tombol CTA) dan `Footer`.

## Fase 3: Pengembangan Halaman Utama (Selesai)
* [x] **Task 3.1: Hero Section** - Selesai.
* [x] **Task 3.2: About Section** - Selesai (Responsive grid).
* [x] **Task 3.3: Services Section** - Selesai.
* [x] **Task 3.4: Portfolio Section** - Selesai.
* [x] **Task 3.5: Testimonials Section** - Selesai.
* [x] **Task 3.6: Pricing/Investasi Section** - Selesai.
* [x] **Task 3.7: FAQ Section** - Selesai (Accordion style).
* [x] **Task 3.8: Contact Section** - Selesai.

## Fase 4: Migrasi Multi-Page & Skeleton Loaders (Baru)
Karena website akan dikembangkan menjadi multi-page (beberapa halaman), kita perlu memisahkan beberapa konten dari satu halaman panjang (Single Page) menjadi arsitektur halaman Next.js:
* [x] **Task 4.1:** Buat struktur routing App Router: `/tentang`, `/layanan`, `/portofolio`, `/kontak`.
* [x] **Task 4.2:** Pindahkan komponen section yang sesuai ke halamannya masing-masing. (Contoh: `app/portofolio/page.tsx`).
* [x] **Task 4.3:** Buat `loading.tsx` dengan kerangka UI (Skeleton Loaders) untuk tiap rute halaman agar transisi terasa cepat.
* [x] **Task 4.4:** Sesuaikan navigasi `Navbar` agar menggunakan `<Link href="/halaman">` bukan ID anchor (`#halaman`).

## Fase 5: Integrasi & Fungsionalitas Lanjutan (Estimasi: 1-2 Hari)
* [x] **Task 5.1: Smooth Scrolling & Active State Nav** - Selesai. Active state navigasi berdasarkan *pathname* telah ditambahkan di Navbar.
* [ ] **Task 5.2: Animasi Scroll Reveal** - Bungkus komponen dengan Framer Motion.
* [x] **Task 5.3: Floating WhatsApp Button** - Selesai.
* [x] **Task 5.4: Fungsionalitas Form Kontak** - Selesai. Endpoint API kontak dibuat di `app/api/contact/route.ts`.

## Fase 6: QA & Optimasi Performa (Estimasi: 1-2 Hari)
* [ ] **Task 6.1:** Tes responsivitas menyeluruh.
* [ ] **Task 6.2:** Audit Lighthouse (Target 95+).
* [ ] **Task 6.3:** Meta Tags SEO per halaman (Dynamic Metadata).

## Fase 7: Deployment (Estimasi: 1 Hari)
* [ ] **Task 7.1:** Push kode ke GitHub.
* [ ] **Task 7.2:** Import ke Vercel.
* [ ] **Task 7.3:** Konfigurasi Environment Variables.
* [ ] **Task 7.4:** Deploy & konfigurasi Domain (misal: denbiz.com).
