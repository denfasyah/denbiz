"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Beranda", href: "#" },
  { name: "Layanan", href: "#services" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Kontak", href: "#contact" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  const [active, setActive] = useState("Beranda");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={cn(
          "flex items-center justify-between w-full max-w-5xl rounded-full p-2 pl-6 transition-all duration-300",
          "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="DenBiz Logo"
            width={40}
            height={40}
            className="shrink-0"
            priority
          />
          <span className="font-display font-bold text-[22px] text-primary tracking-tight ml-3 leading-none">DenBizz</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                active === link.name
                  ? "bg-primary text-white shadow-sm"
                  : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button
            className="rounded-full bg-tertiary text-on-tertiary hover:brightness-105 hover:bg-tertiary px-5 shadow-sm border border-tertiary/20 font-semibold text-sm"
            variant="default"
          >
            Mulai Konsultasi
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-on-surface"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex flex-col gap-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.name);
                setMobileMenuOpen(false);
              }}
              className={cn(
                "px-4 py-3 rounded-xl text-sm font-medium",
                active === link.name
                  ? "bg-primary text-white shadow-sm"
                  : "text-on-surface-variant hover:bg-primary/5 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            className="mt-2 rounded-xl bg-tertiary text-on-tertiary hover:brightness-105 w-full justify-center font-semibold"
          >
            Mulai Konsultasi
          </Button>
        </div>
      )}
    </header>
  );
}
