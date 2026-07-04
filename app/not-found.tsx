import Link from "next/link";
import type { Metadata } from "next";
import { Home, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 – Halaman Tidak Ditemukan | DenBiz",
  description: "Halaman yang Anda cari tidak ditemukan.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-tertiary/15 rounded-full blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative z-10 text-center max-w-lg">
        <p className="text-tertiary font-display font-bold text-8xl md:text-9xl leading-none mb-6">404</p>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-white/60 mb-10 leading-relaxed">
          Halaman yang Anda cari tidak ada atau telah dipindahkan. Silakan kembali ke beranda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary font-bold px-7 py-3.5 rounded-xl hover:brightness-105 transition-all shadow-xl shadow-black/20 active:scale-95"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 border border-white/30 text-white bg-white/10 backdrop-blur-sm px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            Hubungi Kami
          </Link>
        </div>
      </div>
    </main>
  );
}
