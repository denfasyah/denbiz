# Arsitektur Sistem - DenBiz Digital Agency

## 1. Teknologi (Tech Stack)
Mengingat ini adalah website company profile yang mengutamakan performa, SEO, dan desain UI yang modern, berikut adalah stack teknologi yang direkomendasikan:

* **Framework:** **Next.js (App Router)**
  * *Alasan:* Next.js menawarkan Server-Side Rendering (SSR) dan Static Site Generation (SSG) yang sangat baik untuk SEO dan kecepatan muat (Core Web Vitals).
* **Bahasa:** **TypeScript**
  * *Alasan:* Type safety meminimalisir bug selama pengembangan dan memudahkan maintenance tim.
* **Styling:** **Tailwind CSS**
  * *Alasan:* Utility-first CSS untuk styling komponen secara cepat dan konsisten dengan desain sistem.
* **Animasi:** **Framer Motion**
  * *Alasan:* Library animasi standar industri untuk React, memudahkan pembuatan scroll reveal, hover effect kompleks, dan page transitions yang mulus.
* **Form Handling:** **React Hook Form + Zod**
  * *Alasan:* Untuk validasi form kontak yang ringan dan robust di sisi klien.
* **Ikon:** **Material Symbols / Lucide React**
  * *Alasan:* Koleksi ikon modern dan konsisten.
* **Pengiriman Email:** **Resend / SendGrid**
  * *Alasan:* API pengiriman email untuk menangani submission dari form kontak (via Next.js Route Handlers).

## 2. Struktur Direktori Proyek
Menggunakan standar Next.js App Router:

```text
denbiz/
├── public/                 # Aset statis (gambar, font, favicon)
│   ├── images/
│   └── icons/
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/            # API Routes (contoh: /api/contact)
│   │   ├── layout.tsx      # Root layout (Navbar & Footer global)
│   │   ├── page.tsx        # Halaman Landing utama
│   │   └── globals.css     # CSS Global & Tailwind directive
│   ├── components/         # Reusable UI Components
│   │   ├── ui/             # Komponen dasar (Button, Input, Card)
│   │   └── sections/       # Komponen bagian halaman (Hero, Services, Portfolio)
│   ├── config/             # Konfigurasi aplikasi (konstanta, link navigasi)
│   ├── lib/                # Utility functions (cn untuk Tailwind class merge, dll)
│   └── types/              # Deklarasi TypeScript interfaces
├── docs/                   # Dokumentasi Proyek (PRD, Arsitektur, dll)
├── tailwind.config.ts      # Konfigurasi tema Tailwind (Warna, Tipografi)
└── package.json            # Dependensi
```

## 3. Integrasi & Pihak Ketiga
* **WhatsApp API:** Link langsung ke `wa.me` dengan parameter teks untuk konsultasi.
* **Analytics:** Google Analytics 4 (GA4) atau Vercel Analytics untuk melacak traffic pengunjung dan tingkat konversi form.
* **Mailing Service:** Endpoint API Route Next.js akan memanggil API Resend untuk mengirimkan notifikasi ke email admin (`contact@denbiz.agency`) saat ada prospek baru.

## 4. Infrastruktur & Deployment
* **Hosting:** **Vercel**
  * Next.js dioptimalkan dengan sangat baik untuk Vercel. CI/CD terintegrasi langsung dengan repository GitHub.
  * Mendukung preview deployments untuk setiap Pull Request.
* **Domain Management:** Pengaturan custom domain (denbiz.agency) melalui Vercel dashboard.
* **Version Control:** GitHub (branching model: `main`, `develop`, `feature/*`).
