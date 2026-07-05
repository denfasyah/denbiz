export type MockupType = "dashboard" | "ecommerce" | "landing" | "profile";

export type CaseStudy = {
  challenge: string;
  solution: string;
  impact?: string[];
};

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  type: "client" | "demo";
  desc: string;
  features: string[];
  accentColor: string;
  mockupType: MockupType;
  slug: string;
  liveUrl: string;
  screenshot?: string;
  caseStudyUrl?: string;
  caseStudy?: CaseStudy;
};

export const projectCategories = [
  "Semua",
  "Landing Page",
  "Company Profile",
  "E-Commerce",
  "Sistem Informasi",
  "Portofolio",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Financier ERP",
    subtitle: "Enterprise Dashboard System",
    category: "Sistem Informasi",
    client: "PT Makmur Jaya",
    type: "client",
    desc: "Sistem manajemen sumber daya perusahaan terintegrasi dengan fitur reporting real-time.",
    features: [
      "✅ Dashboard Real-Time",
      "✅ Laporan Otomatis",
      "✅ Multi-User & Role",
      "✅ Export Excel/PDF",
    ],
    accentColor: "#f5ca03",
    mockupType: "dashboard",
    slug: "financier-erp",
    liveUrl: "https://financier-erp-demo.denbiz.id",
    screenshot: undefined, // ganti dengan: "/screenshots/financier-erp.png"
    caseStudyUrl: "/portofolio/financier-erp",
    caseStudy: {
      challenge:
        "PT Makmur Jaya mengelola ratusan karyawan dan aset dengan spreadsheet manual yang rawan error dan memakan waktu hingga berjam-jam setiap harinya untuk membuat laporan.",
      solution:
        "Kami membangun sistem ERP berbasis web dengan dashboard real-time, modul penggajian otomatis, dan laporan yang bisa diekspor satu klik — menggantikan seluruh proses manual.",
      impact: [
        "80% lebih cepat dalam pembuatan laporan bulanan",
        "0 error penghitungan gaji sejak sistem berjalan",
        "Hemat 40 jam kerja admin per bulan",
      ],
    },
  },
  {
    id: 2,
    title: "EcoShop",
    subtitle: "Website E-Commerce",
    category: "E-Commerce",
    client: "EcoLife",
    type: "client",
    desc: "Platform toko online produk ramah lingkungan dengan integrasi Midtrans dan manajemen stok.",
    features: [
      "✅ Payment Gateway",
      "✅ Manajemen Stok",
      "✅ WhatsApp Order",
      "✅ Responsive Design",
    ],
    accentColor: "#ceee93",
    mockupType: "ecommerce",
    slug: "ecoshop",
    liveUrl: "https://ecoshop-demo.denbiz.id",
    screenshot: undefined, // ganti dengan: "/screenshots/ecoshop.png"
    caseStudyUrl: "/portofolio/ecoshop",
    caseStudy: {
      challenge:
        "EcoLife menjual produk ramah lingkungan hanya lewat Instagram DM dan WhatsApp. Proses order manual tidak efisien dan sering terjadi double-order karena stok tidak terpantau.",
      solution:
        "Kami membangun toko online lengkap dengan integrasi Midtrans untuk pembayaran otomatis, manajemen stok real-time, dan notifikasi WhatsApp otomatis ke pembeli.",
      impact: [
        "3x peningkatan jumlah transaksi dalam 2 bulan pertama",
        "Stok habis tidak pernah terjadi lagi sejak launch",
        "Customer bisa checkout 24 jam tanpa perlu chat admin",
      ],
    },
  },
  {
    id: 3,
    title: "Modern Arch",
    subtitle: "Landing Page Firma Arsitektur",
    category: "Landing Page",
    client: "Arch Studio",
    type: "client",
    desc: "Landing page premium dengan desain minimalis dan animasi scroll reveal, konversi tinggi.",
    features: [
      "✅ Animasi Premium",
      "✅ SEO Ready",
      "✅ Formulir Kontak",
      "✅ Responsive Design",
    ],
    accentColor: "#b6c4ff",
    mockupType: "landing",
    slug: "modern-arch",
    liveUrl: "https://modernarch-demo.denbiz.id",
    screenshot: undefined, // ganti dengan: "/screenshots/modern-arch.png"
    caseStudyUrl: "/portofolio/modern-arch",
    caseStudy: {
      challenge:
        "Arch Studio tidak memiliki kehadiran digital yang kuat. Calon klien potensial sulit menemukan portofolio mereka, dan leads yang masuk sangat sedikit dari channel digital.",
      solution:
        "Kami merancang landing page premium dengan animasi scroll reveal yang memukau, showcase proyek arsitektur bergaya editorial, dan formulir kontak yang terintegrasi langsung ke WhatsApp.",
      impact: [
        "Naik ke halaman 1 Google dalam 3 minggu untuk kata kunci target",
        "15 leads baru per bulan dari website (sebelumnya 0)",
        "Durasi kunjungan rata-rata 3 menit lebih",
      ],
    },
  },
  {
    id: 4,
    title: "Klinik Sehat",
    subtitle: "Website Company Profile",
    category: "Company Profile",
    client: "RS Sehat",
    type: "client",
    desc: "Company profile klinik modern dengan booking appointment online dan profil dokter.",
    features: [
      "✅ Booking Online",
      "✅ Profil Dokter",
      "✅ WhatsApp Integration",
      "✅ SEO Ready",
    ],
    accentColor: "#a7f3d0",
    mockupType: "profile",
    slug: "klinik-sehat",
    liveUrl: "https://kliniksehat-demo.denbiz.id",
    screenshot: undefined, // ganti dengan: "/screenshots/klinik-sehat.png"
    caseStudyUrl: "/portofolio/klinik-sehat",
    caseStudy: {
      challenge:
        "RS Sehat mengandalkan telepon untuk booking, namun antrean panjang dan sering terjadi double-booking. Pasien juga kesulitan mencari informasi dokter dan jadwal praktik.",
      solution:
        "Kami membangun website company profile dengan sistem booking online terintegrasi, halaman profil setiap dokter lengkap dengan spesialisasi dan jadwal, serta notifikasi konfirmasi otomatis via WhatsApp.",
      impact: [
        "60% pasien baru pertama kali mengenal klinik melalui website",
        "Telepon masuk untuk booking turun 70%",
        "0 kasus double-booking sejak sistem berjalan",
      ],
    },
  },
  {
    id: 5,
    title: "Gourmet Food",
    subtitle: "Toko Online Kuliner",
    category: "E-Commerce",
    client: "Gourmet ID",
    type: "demo",
    desc: "E-commerce produk makanan premium dengan sistem pre-order dan pengiriman terjadwal.",
    features: [
      "✅ Pre-Order System",
      "✅ Jadwal Pengiriman",
      "✅ Responsive Design",
      "✅ Payment Gateway",
    ],
    accentColor: "#ffb6b9",
    mockupType: "ecommerce",
    slug: "gourmet-food",
    liveUrl: "https://gourmetfood-demo.denbiz.id",
    screenshot: undefined,
  },
  {
    id: 6,
    title: "Tech Conf 2024",
    subtitle: "Landing Page Event",
    category: "Landing Page",
    client: "Tech ID",
    type: "demo",
    desc: "Landing page konferensi teknologi dengan pendaftaran online dan countdown timer.",
    features: [
      "✅ Countdown Timer",
      "✅ Pendaftaran Online",
      "✅ SEO Ready",
      "✅ Responsive Design",
    ],
    accentColor: "#b5ead7",
    mockupType: "landing",
    slug: "tech-conf-2024",
    liveUrl: "https://techconf2024-demo.denbiz.id",
    screenshot: undefined,
  },
  {
    id: 7,
    title: "HR Management",
    subtitle: "Sistem Kepegawaian",
    category: "Sistem Informasi",
    client: "PT Karya Abadi",
    type: "client",
    desc: "Sistem manajemen SDM dengan modul absensi, penggajian, dan cuti karyawan.",
    features: [
      "✅ Absensi Digital",
      "✅ Slip Gaji Otomatis",
      "✅ Manajemen Cuti",
      "✅ Multi-User & Role",
    ],
    accentColor: "#e2f0cb",
    mockupType: "dashboard",
    slug: "hr-management",
    liveUrl: "https://hrmanagement-demo.denbiz.id",
    screenshot: undefined, // ganti dengan: "/screenshots/hr-management.png"
    caseStudyUrl: "/portofolio/hr-management",
    caseStudy: {
      challenge:
        "PT Karya Abadi dengan 200+ karyawan masih menggunakan absensi kertas dan penghitungan gaji manual di Excel. Proses ini memakan waktu 3 hari setiap akhir bulan dan sering ada selisih.",
      solution:
        "Sistem HR digital dengan absensi QR code, kalkulasi gaji otomatis berdasarkan kehadiran dan lembur, manajemen cuti online, dan slip gaji yang langsung dikirim ke email karyawan.",
      impact: [
        "Proses penggajian dari 3 hari menjadi 2 jam",
        "Tidak ada lagi selisih hitung gaji",
        "Karyawan bisa cek slip gaji & ajukan cuti lewat HP",
      ],
    },
  },
  {
    id: 8,
    title: "Fashion Store",
    subtitle: "Toko Online Fashion",
    category: "E-Commerce",
    client: "Style.co",
    type: "demo",
    desc: "Toko online fashion dengan katalog varian ukuran, warna, dan sistem diskon otomatis.",
    features: [
      "✅ Katalog Produk",
      "✅ Diskon Otomatis",
      "✅ Responsive Design",
      "✅ Payment Gateway",
    ],
    accentColor: "#ffdac1",
    mockupType: "ecommerce",
    slug: "fashion-store",
    liveUrl: "https://fashionstore-demo.denbiz.id",
    screenshot: undefined,
  },
  {
    id: 9,
    title: "Agency Web",
    subtitle: "Landing Page Studio Kreatif",
    category: "Landing Page",
    client: "Creative Studio",
    type: "demo",
    desc: "Landing page studio kreatif dengan showcase karya dan animasi interaktif.",
    features: [
      "✅ Animasi Premium",
      "✅ Showcase Portfolio",
      "✅ Formulir Kontak",
      "✅ SEO Ready",
    ],
    accentColor: "#ff9aa2",
    mockupType: "landing",
    slug: "agency-web",
    liveUrl: "https://agencyweb-demo.denbiz.id",
    screenshot: undefined,
  },
  {
    id: 10,
    title: "Toko Kopi Nusantara",
    subtitle: "Website Company Profile",
    category: "Company Profile",
    client: "Kopi Nusantara",
    type: "client",
    desc: "Company profile UMKM kopi dengan galeri produk dan lokasi cabang.",
    features: [
      "✅ Galeri Produk",
      "✅ Peta Lokasi Cabang",
      "✅ WhatsApp Integration",
      "✅ SEO Ready",
    ],
    accentColor: "#c7d2fe",
    mockupType: "profile",
    slug: "toko-kopi-nusantara",
    liveUrl: "https://tokokopinusantara-demo.denbiz.id",
    screenshot: undefined, // ganti dengan: "/screenshots/toko-kopi-nusantara.png"
    caseStudyUrl: "/portofolio/toko-kopi-nusantara",
    caseStudy: {
      challenge:
        "Kopi Nusantara memiliki 5 cabang tetapi tidak ada satu pun kehadiran digital. Pelanggan baru sering kesulitan menemukan lokasi cabang terdekat dan tidak tahu menu apa yang tersedia.",
      solution:
        "Website company profile dengan galeri produk yang menarik, peta interaktif lokasi semua cabang, integrasi WhatsApp untuk order & tanya-jawab, serta optimasi SEO lokal per kota.",
      impact: [
        "Muncul di Google Maps & pencarian lokal dalam 2 minggu",
        "Order via WhatsApp dari website meningkat 200%",
        "Jangkauan ke pelanggan baru di kota lain terbuka",
      ],
    },
  },
  {
    id: 11,
    title: "Warehouse System",
    subtitle: "Sistem Manajemen Gudang",
    category: "Sistem Informasi",
    client: "Logistik Prima",
    type: "client",
    desc: "Sistem inventori gudang dengan pelacakan stok real-time dan laporan otomatis.",
    features: [
      "✅ Stok Real-Time",
      "✅ Laporan Otomatis",
      "✅ Export Excel/PDF",
      "✅ Multi-User & Role",
    ],
    accentColor: "#fde68a",
    mockupType: "dashboard",
    slug: "warehouse-system",
    liveUrl: "https://warehousesystem-demo.denbiz.id",
    screenshot: undefined, // ganti dengan: "/screenshots/warehouse-system.png"
    caseStudyUrl: "/portofolio/warehouse-system",
    caseStudy: {
      challenge:
        "Logistik Prima mengelola gudang dengan ribuan SKU menggunakan catatan fisik dan Excel. Sering terjadi salah hitung stok yang menyebabkan kerugian dan keterlambatan pengiriman.",
      solution:
        "Sistem manajemen gudang digital dengan barcode scanning, pelacakan stok masuk/keluar real-time, alert otomatis saat stok hampir habis, dan laporan inventori harian yang terkirim otomatis.",
      impact: [
        "Akurasi stok dari 70% menjadi 99.8%",
        "Tidak ada lagi kasus stok minus",
        "Proses audit gudang bulanan 5x lebih cepat",
      ],
    },
  },
  {
    id: 12,
    title: "Boutique Store",
    subtitle: "Toko Online Butik",
    category: "E-Commerce",
    client: "Boutique Elle",
    type: "demo",
    desc: "Toko online butik dengan lookbook produk dan integrasi multi payment gateway.",
    features: [
      "✅ Lookbook Produk",
      "✅ Multi Payment",
      "✅ Responsive Design",
      "✅ Manajemen Stok",
    ],
    accentColor: "#fbcfe8",
    mockupType: "ecommerce",
    slug: "boutique-store",
    liveUrl: "https://boutiquestore-demo.denbiz.id",
    screenshot: undefined,
  },
  {
    id: 13,
    title: "Rangga Photography",
    subtitle: "Portofolio Fotografer",
    category: "Portofolio",
    client: "Rangga Pratama",
    type: "demo",
    desc: "Website portofolio fotografer dengan galeri karya berkategori dan form booking sesi foto.",
    features: [
      "✅ Galeri Foto",
      "✅ Form Booking",
      "✅ WhatsApp Integration",
      "✅ Responsive Design",
    ],
    accentColor: "#fcd34d",
    mockupType: "profile",
    slug: "rangga-photography",
    liveUrl: "https://ranggaphotography-demo.denbiz.id",
    screenshot: undefined,
  },
  {
    id: 14,
    title: "Nadia UX Portfolio",
    subtitle: "Portofolio UX Designer",
    category: "Portofolio",
    client: "Nadia Putri",
    type: "demo",
    desc: "Website portofolio UX designer dengan studi kasus proyek dan CV yang dapat diunduh.",
    features: [
      "✅ Studi Kasus",
      "✅ Unduh CV",
      "✅ Animasi Premium",
      "✅ Responsive Design",
    ],
    accentColor: "#a5b4fc",
    mockupType: "landing",
    slug: "nadia-ux-portfolio",
    liveUrl: "https://nadiaux-demo.denbiz.id",
    screenshot: undefined,
  },
];
