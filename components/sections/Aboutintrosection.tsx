export function AboutIntroSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Judul Baru - Lebih Otoritatif */}
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-8">
          Visi Kami: Akselerator Pertumbuhan Bisnis Anda
        </h2>
        
        <div className="space-y-6 text-on-surface-variant leading-relaxed text-[15px] md:text-base">
          <p>
            DenBiz didirikan oleh Adent Fallah Amorisyah dengan keyakinan bahwa teknologi 
            adalah kunci untuk skala bisnis. Kami hadir untuk memastikan setiap pelaku 
            usaha, dari UMKM hingga perusahaan berkembang, memiliki identitas digital 
            yang kredibel—tanpa kerumitan teknis dan tanpa hasil yang sekadar 'asal jadi'.
          </p>
          <p>
            Sebagai mitra strategis Anda, kami tidak hanya menulis kode. Kami memetakan 
            kebutuhan bisnis Anda ke dalam solusi digital yang tepat guna. Layanan kami 
            mencakup <em>Landing Page</em>, <em>Company Profile</em>, hingga sistem 
            informasi kustom, semuanya dibangun dengan komitmen transparansi total 
            di setiap tahap pengembangan.
          </p>
          <p>
            Kami percaya bahwa website yang baik harus menjadi mesin pertumbuhan. 
            Oleh karena itu, setiap sistem yang kami bangun mengutamakan performa secepat 
            kilat, kemudahan penggunaan, dan responsivitas penuh. Bersama DenBiz, mari 
            kita ubah hambatan digital menjadi keunggulan kompetitif yang nyata bagi 
            bisnis Anda.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="/kontak"
            className="text-primary font-bold text-lg hover:underline flex items-center"
          >
            Siap untuk berdiskusi? Mari hubungi kami →
          </a>
        </div>
      </div>
    </section>
  );
}