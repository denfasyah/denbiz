# Design System - DenBiz

Berdasarkan draf desain (mockup HTML) yang telah dibuat, berikut adalah panduan sistem desain yang harus diimplementasikan ke dalam konfigurasi framework (Tailwind CSS) agar hasil akhir konsisten.

## 1. Palet Warna (Color Palette)
Warna dirancang dengan pendekatan yang elegan, profesional, dan dapat menarik perhatian.

**Primary (Warna Utama - Trust & Professionalism)**
* `primary`: `#1b358a` (Deep Blue)
* `primary-container`: `#dce1ff` / `#1b358a` (bg)
* `on-primary`: `#ffffff`

**Tertiary (Warna Aksen - Energy & Call to Action)**
* `tertiary`: `#f5ca03` (Vibrant Yellow)
* `on-tertiary`: `#141b2b` (Dark Text)

**Background & Surface (Latar Belakang & Kartu)**
* `background`: `#f9f9ff` (Soft Off-White)
* `surface`: `#ffffff` atau `#f9f9ff`
* `surface-container-low`: `#f1f3ff`
* `surface-container`: `#e9edff`
* `inverse-surface`: `#293040` (Dark Mode / Footer)

**Text Colors**
* `on-surface`: `#141b2b` (Very Dark Blue/Black - untuk teks utama)
* `on-surface-variant`: `#444651` (Medium Gray/Blue - untuk paragraf/deskripsi)
* `outline-variant`: `#c5c5d3` (Borders)

## 2. Tipografi
Kombinasi font modern yang sangat bersih (sans-serif).

* **Heading / Display:** `Manrope` (Weights: 400, 600, 700, 800)
  * Sifat: Geometris, tegas, memberikan kesan kokoh.
* **Body / Paragraf:** `Plus Jakarta Sans` (Weights: 400, 500, 600)
  * Sifat: Sangat mudah dibaca, bersih, modern.
* **Labels / Buttons:** `Work Sans` (Weights: 600)
  * Sifat: Fungsional, jelas di ukuran kecil.

**Skala Ukuran (Tailwind Configuration):**
* `display-lg`: `64px`, Line Height `72px`, Weight `800` (Hero title desktop)
* `headline-lg`: `40px`, Line Height `48px`, Weight `700` (Section title desktop)
* `headline-md`: `24px`, Line Height `32px`, Weight `700` (Card title)
* `body-lg`: `18px`, Line Height `28px` (Lead paragraph)
* `body-md`: `16px`, Line Height `24px` (Standar text)
* `label-bold`: `14px`, Line Height `20px`, Weight `600` (Buttons, navigation)

## 3. Spacing & Breakpoints
* **Mobile Margin:** `1rem` (16px)
* **Desktop Gutter:** `1.5rem` (24px)
* **Section Gap:** `5rem` (80px) - Jarak vertikal antar seksi (Hero ke Services, dll)
* **Container Max Width:** `1280px`

## 4. UI Elements & Komponen
### Buttons
* **Primary Button:** Latar `tertiary` (#f5ca03), Teks `on-tertiary`, Rounded `lg` (8px). Hover state: `brightness-105` atau efek transform `active:scale-95`.
* **Secondary / Outline Button:** Border `primary`, Teks `primary`, Latar transparan. Hover: Latar `primary`, teks `white`.

### Cards & Shadows
* **Soft Shadow:** `box-shadow: 0 20px 40px -15px rgba(27, 53, 138, 0.08);` (Sangat halus, memberikan kesan melayang yang elegan).
* **Border Radius:**
  * Komponen kecil (Tombol, Input): `0.5rem` (8px)
  * Kartu (Services, Testimonials): `1.5rem` (24px) atau `2rem` (32px) untuk kesan modern dan ramah (mirip Apple UI).

### Efek Khusus
* **Accent Underline:** Garis bawah tebal di bawah kata kunci dengan warna aksen (kuning) dan opacity 60% yang terletak agak ke bawah teks (z-index negatif).
* **Floating Animation:** Animasi CSS lambat naik turun (`translateY`) pada gambar ilustrasi Hero untuk kesan dinamis.
* **Glassmorphism:** Digunakan pada Navigation bar (`backdrop-blur-md` dengan background warna terang ber-opacity 80%).
