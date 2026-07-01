import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-inverse-surface text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center mb-6 shrink-0">
            <Image
              src="/logo.png"
              alt="DenBiz Logo"
              width={80}
              height={80}
              className="object-contain shrink-0 -mr-2"
            />
            <span className="font-display font-bold text-[22px] text-white tracking-tight leading-none">DenBizz</span>
          </Link>
          <p className="text-gray-400 mt-4 max-w-sm">
            DenBiz adalah partner digital Anda dalam mengembangkan website berkinerja tinggi yang dirancang untuk konversi dan pertumbuhan bisnis.
          </p>
        </div>
        
        <div>
          <h4 className="font-work-sans font-semibold text-lg mb-4 text-white">Layanan</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/layanan" className="hover:text-tertiary transition-colors">Landing Page</Link></li>
            <li><Link href="/layanan" className="hover:text-tertiary transition-colors">Company Profile</Link></li>
            <li><Link href="/layanan" className="hover:text-tertiary transition-colors">Web Application</Link></li>
            <li><Link href="/layanan" className="hover:text-tertiary transition-colors">E-Commerce</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-work-sans font-semibold text-lg mb-4 text-white">Perusahaan</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/tentang" className="hover:text-tertiary transition-colors">Tentang Kami</Link></li>
            <li><Link href="/portofolio" className="hover:text-tertiary transition-colors">Portofolio</Link></li>
            <li><Link href="/kontak" className="hover:text-tertiary transition-colors">Kontak</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} DenBiz. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/tentang" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/tentang" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
