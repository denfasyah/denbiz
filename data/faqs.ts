export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Berapa lama waktu pengerjaan sebuah website?",
    answer:
      "Waktu pengerjaan sangat bergantung pada kompleksitas fitur dan skala proyek. Untuk website Company Profile atau Landing Page, biasanya memakan waktu 1-2 minggu. Sedangkan untuk aplikasi web kompleks atau E-Commerce bisa memakan waktu 4-8 minggu atau lebih.",
  },
  {
    question: "Apakah saya perlu menyediakan domain dan hosting sendiri?",
    answer:
      "Tidak wajib. Kami menyediakan paket all-in-one yang sudah termasuk pendaftaran domain (.com/.id, dll) dan cloud hosting. Namun, jika Anda sudah memiliki domain dan hosting sendiri, kami juga siap membantu melakukan setup di server Anda.",
  },
  {
    question: "Apakah website yang dibuat sudah responsif (mobile-friendly)?",
    answer:
      "Tentu saja. Semua website yang kami kembangkan menggunakan pendekatan mobile-first. Ini memastikan tampilan dan fungsionalitas website Anda akan bekerja optimal di berbagai perangkat, mulai dari smartphone, tablet, hingga desktop.",
  },
  {
    question: "Apakah ada biaya perawatan (maintenance) setelah website selesai?",
    answer:
      "Kami memberikan garansi bug-fixing gratis selama 1 bulan pertama setelah serah terima. Selanjutnya, kami menawarkan paket maintenance opsional untuk update sistem, keamanan, dan backup rutin agar website Anda selalu dalam performa terbaik.",
  },
  {
    question: "Apakah saya bisa mengubah konten website sendiri nantinya?",
    answer:
      "Ya, kami dapat mengintegrasikan website Anda dengan sistem manajemen konten (CMS) yang user-friendly seperti WordPress atau Headless CMS, beserta panduan penggunaannya sehingga Anda dapat mengelola teks dan gambar dengan mudah.",
  },
];
