# Rencana Peningkatan Komprehensif (Senior Tech Lead Review)

Sebagai *Technical Lead*, *Full Stack Developer*, dan *Designer*, saya telah melakukan audit menyeluruh terhadap arsitektur, UI/UX, dan flow bisnis pada sistem DenBiz. 

Berikut adalah **Master Plan Improvements** yang wajib diimplementasikan untuk menjadikan website ini 100% *Client-Ready*, berstandar industri tinggi (Enterprise-Grade), dan memiliki *Conversion Rate* yang maksimal.

---

## 1. Global Layout & UX (Pengalaman Pengguna)
Kekurangan saat ini: Tombol bantuan (WA) hanya ada di Beranda, tidak ada transisi *loading* visual saat pindah halaman, favicon default Vercel, dan belum ada interaksi mikro yang mewah.
**Tugas Peningkatan:**
- [x] **Global Floating Action Button (FAB)**: Pindahkan komponen tombol WhatsApp Melayang (Floating WA) ke `layout.tsx` agar selalu muncul menempel di pojok kanan bawah pada **seluruh halaman**, bukan hanya di Home.
- [x] **Top Progress Bar**: Tambahkan pustaka `next-nprogress-bar` untuk menampilkan garis *loading* di bagian atas layar saat pengguna berpindah halaman, menutupi jeda sebelum *Skeleton* muncul.
- [x] **Global Scroll Animation (Framer Motion)**: Implementasikan *HOC (Higher Order Component)* pembungkus seperti `<FadeIn>` agar setiap *section* yang muncul di layar otomatis masuk dengan efek *fade-in-up* yang elegan saat di-*scroll*.
- [x] **Favicon & Brand Identity**: Menghapus logo default *framework* dan mengintegrasikan ikon kustom DenBiz secara dinamis untuk UI *browser* dan perangkat *mobile*.

---

## 2. Halaman Kontak (`/kontak`)
Kekurangan saat ini: Halaman ini sekadar replika *Contact Section* di Beranda. Form belum interaktif, tidak ada *feedback* saat tombol kirim ditekan, dan kurangnya informasi kontak alternatif.
**Tugas Peningkatan:**
- [x] **SweetAlert2 (SWAL) Integration**: Pasang `sweetalert2` untuk memberikan animasi *pop-up* centang hijau (Success) atau silang merah (Error) setelah *user* melakukan klik tombol "Kirim Pesan" pada form.
- [x] **Active Form Handling**: Sambungkan komponen form (React Hook Form / State) dengan Endpoint API `/api/contact` yang sudah dibuat agar benar-benar memproses data.
- [x] **Opsi Kontak Langsung (Direct Channels)**: Tambahkan kartu (cards) elegan di sebelah form yang berisi tombol langsung menuju WhatsApp API (`wa.me/...`), Email langsung (`mailto:...`), dan integrasi Google Maps interaktif (Iframe) untuk menunjukkan lokasi fisik *agency*.

---

## 3. Halaman Portofolio (`/portofolio`)
Kekurangan saat ini: Tampilan hanya terbatas pada 1 atau 2 contoh, susunan tidak rapi untuk banyak data, dan ada tombol "Lihat Semua" yang tidak logis karena sudah berada di halaman Portofolio.
**Tugas Peningkatan:**
- [x] **Bento/Masonry Grid Layout**: Rombak tampilan menjadi sistem Grid 3 kolom (Desktop) yang rapi.
- [x] **Rich Mock Data**: Suntikkan struktur data (JSON statis) berisi 8-9 proyek *dummy* lengkap dengan Kategori, Nama Klien, Teknologi yang dipakai, dan Cuplikan gambar.
- [x] **Filter Kategori (Tabs)**: Tambahkan *Interactive Tabs* di atas grid (Contoh: "Semua", "Landing Page", "Sistem Informasi", "E-Commerce"). Saat diklik, grid proyek akan memfilter dengan animasi halus.
- [x] **Pagination / Load More**: Tambahkan tombol "Muat Lebih Banyak" (Load More) di bawah grid untuk membatasi tampilan awal agar halaman tidak terlalu berat (*Performance Optimization*).

---

## 4. Halaman Layanan (`/layanan`)
Kekurangan saat ini: Tombol "Pelajari Selengkapnya" belum responsif/fungsional. Paket harga statis, dan juga masih kurang bagus.
**Tugas Peningkatan:**
- [x] **Interactive Service Detail**: Saat tombol "Pelajari Selengkapnya" diklik, halaman tidak boleh diam. Ia harus membuka sebuah **Modal (Pop-up lebar)** atau menampilkan *Accordion* rincian proses (*Discovery - UI/UX - Dev - QA - Deploy*).
- [x] **Smart Pricing CTA**: Ubah *link* pada tabel Harga. Ketika klien mengklik "Pilih Paket Business", *website* akan mengarahkan mereka ke `/kontak?paket=business` dan **Otomatis memilih opsi Dropdown** di form kontak sesuai paket tersebut, menghilangkan kerepotan *user* mengetik ulang.

---

## 5. Halaman Tentang Kami (`/tentang`)
Kekurangan saat ini: Konten terlalu tipis (copy-paste dari Home). Agensi perlu profil mendalam untuk membangun kepercayaan (*Trust/Credibility*).
**Tugas Peningkatan:**
- [x] **Sejarah & Visi (Visual Storytelling)**: Rombak menjadi layout asimetris dengan gambar tim/kantor (menggunakan placeholder profesional).
- [x] **Nilai Perusahaan (Core Values)**: Buat kartu-kartu interaktif bergaya 3D *hover* (Inovasi, Transparansi, Kualitas).
- [x] **Bagian Tim (Meet The Team)**: Tambahkan grid sederhana berisi profil 3-4 figur penting (Founder, Tech Lead, UI Designer) untuk memberikan sentuhan "manusia" pada bisnis.

---

## 6. SEO Dinamis & Meta Tags (Dynamic Metadata)
Kekurangan saat ini: Ketika URL di-share ke WhatsApp, judulnya selalu sama "DenBiz - Web Development".
**Tugas Peningkatan:**
- [x] **Page-Specific Metadata**: Sisipkan kode `export const generateMetadata()` di setiap *route* halaman agar *Title* browser berubah sesuai halamannya (Contoh: "Portofolio Proyek - DenBiz" atau "Hubungi Kami - DenBiz").
