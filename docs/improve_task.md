# Rencana Peningkatan Komprehensif (Senior Tech Lead Review)

Sebagai *Technical Lead*, *Full Stack Developer*, dan *Designer*, saya telah melakukan audit menyeluruh terhadap arsitektur, UI/UX, dan flow bisnis pada sistem DenBiz. 

Berdasarkan analisa, tujuan utama website ini bukan sekadar portofolio biasa, melainkan **Mesin Pencari Klien (Lead Generator)**. Klien tidak terlalu peduli dengan sejarah kita, mereka peduli pada *bagaimana bisnis mereka bisa berkembang, menghasilkan lebih banyak uang, dan terlihat lebih kredibel* berkat jasa kita.

Berikut adalah **Master Plan Improvements** dari awal hingga akhir untuk menjadikan website ini berstandar industri tinggi dan memiliki *Conversion Rate* yang maksimal.

---

## FASE 1: Re-Strategi Konten & UX (Fokus Konversi)

Kekurangan saat ini: Konten terlalu fokus pada "siapa kita" daripada "apa keuntungan untuk klien".
**Tugas Peningkatan:**
- [ ] **Home Page - USP (Mengapa Memilih Kami)**: 
    - Hapus bagian "Sejarah/Tentang Kami".
    - Buat *section* baru berjudul **"Mengapa memilih DenBiz sebagai partner digital?"**.
    - Gunakan layout *Grid 2x2 Card* elegan (seperti referensi desain). Contoh isi kartu:
      1. **Diskusi Tanpa Jargon**: Komunikasi teknis dengan bahasa manusia.
      2. **Komitmen Lini Masa**: On-time delivery.
      3. **Standar SEO & Kecepatan**: Kode dioptimasi untuk ranking Google.
      4. **Skalabilitas & Keamanan**: Sistem siap berkembang.
- [ ] **Paket Investasi Digital (Penggabungan Layanan & Harga)**:
    - Hapus halaman terpisah untuk Layanan dan Harga. Satukan menjadi satu *section* kuat.
    - Pada halaman Home (Beranda), tampilkan **hanya beberapa paket unggulan** (misal 3 paket utama).
    - Di bawah daftar paket di Home, berikan link **"Lihat semua paket harga ->"** yang mengarah ke halaman lengkap `/layanan`.
    - **Struktur Kartu Paket**:
        - Nama Paket (Contoh: *Landing Page UMKM Executive - 1 Halaman*)
        - Harga Jelas (Contoh: *Rp 1.800.000*)
        - Inklusi Dasar (Contoh: *Termasuk Domain .com & Server Hosting Cloud*)
        - Daftar Benefit (Contoh: *Copywriting persuasif, Optimasi SEO, Integrasi Google Maps*)
        - **Tombol CTA Spesifik**: Contoh `[Pesan Landing Page]` atau `[Konsultasi Web Korporat]`.

---

## FASE 2: Clean Code & Arsitektur Data (Mudah Dimaintenance)

Kekurangan saat ini: Data portofolio, harga, dan layanan tersebar di berbagai file komponen (TSX) sehingga sulit diperbarui.
**Tugas Peningkatan:**
- [ ] **Pemisahan Data Layer (`lib/data.ts`)**: Buat file khusus (contoh: `lib/data.ts`) untuk menampung semua teks, daftar paket investasi (Lengkap dengan harga & benefit), FAQ, testimonial, dan portofolio dalam bentuk Object/JSON statis.
- [ ] **Dynamic Component Mapping**: Ubah komponen UI (seperti kartu harga di Home dan `/layanan`) agar me-*looping* (map) data dari file `data.ts`. Jika ke depan ada perubahan harga atau tambah paket (misal paket 3 halaman, 5 halaman), Anda cukup edit `data.ts` tanpa mengotak-atik tampilan/TSX.

---

## FASE 3: UI/UX & Global Layout (Desain Mewah & Cepat)

**Status Progress Saat Ini:**
- [x] **Global Floating Action Button (FAB)**: WhatsApp Melayang aktif di seluruh halaman.
- [x] **Top Progress Bar**: Garis *loading* saat berpindah halaman sudah diimplementasikan (next-nprogress-bar).
- [x] **Global Scroll Animation (Framer Motion)**: Elemen masuk dengan elegan (fade-in) saat halaman di-scroll.
**Tugas Peningkatan Lanjutan:**
- [ ] **Micro-Interactions & Hover Effects**: Tambahkan efek *glow*, transisi warna, atau elevasi kartu (3D hover effect) pada kartu Paket Investasi dan USP agar terasa sangat premium.

---

## FASE 4: Fungsionalitas Halaman Pendukung

**Halaman Kontak (`/kontak`)**
- [x] **SweetAlert2 (SWAL)**: Pop-up notifikasi berhasil/gagal setelah mengirim pesan.
- [x] **Opsi Kontak Langsung**: Tombol WA, Email, dan Integrasi Peta.
- [ ] **Smart Form Routing**: Jika klien mengklik CTA "Pesan Landing Page" pada paket Rp 1.800.000, URL akan memuat `/kontak?paket=landing-page` dan *dropdown* form kontak otomatis memilih opsi tersebut.

**Halaman Portofolio (`/portofolio`)**
- [x] **Bento/Masonry Grid Layout**: Tampilan Grid profesional.
- [x] **Filter Kategori (Tabs)**: Interaksi tab "Semua", "Web App", "Landing Page".

---

## Saran Eksekutif Tambahan (Tech Lead Suggestions):
1. **Kecepatan Adalah Segalanya (Performance)**: Gunakan format `.webp` untuk semua gambar portofolio. Website agensi pembuat website harus memiliki skor *Lighthouse* 90+.
2. **Kesan Eksklusif (Scarcity & Urgency)**: Tambahkan elemen *copywriting* seperti *"Slot pengerjaan untuk bulan ini tersisa 2 klien lagi"* di atas *section* harga untuk memancing konversi cepat.
3. **FAQ yang Menghapus Keraguan**: Pada halaman paket/layanan lengkap, tambahkan FAQ singkat (Misal: "Apakah ada biaya tahunan?", "Berapa lama proses pembuatan?"). Ini sangat ampuh menepis keraguan klien sebelum mereka menghubungi Anda.
