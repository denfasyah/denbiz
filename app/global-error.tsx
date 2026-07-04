"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error(error);
  }, [error]);

  return (
    <html lang="id">
      <body className="min-h-screen bg-primary flex items-center justify-center px-4 relative overflow-hidden font-sans">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-red-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/4" />

        <div className="relative z-10 text-center max-w-lg">
          <div className="w-20 h-20 rounded-3xl bg-red-500/20 border border-red-400/30 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-9 h-9 text-red-400" />
          </div>
          <h1 className="font-bold text-3xl md:text-4xl text-white mb-4">
            Terjadi Kesalahan
          </h1>
          <p className="text-white/60 mb-10 leading-relaxed">
            Sesuatu yang tidak terduga terjadi. Tim kami telah diberitahu. Silakan coba lagi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 bg-white text-on-surface font-bold px-7 py-3.5 rounded-xl hover:brightness-95 transition-all shadow-xl active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              Coba Lagi
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-white/30 text-white bg-white/10 backdrop-blur-sm px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all active:scale-95"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
