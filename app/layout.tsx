import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "DenBiz - Web Development Specialist",
  description: "Jasa pembuatan website profesional, performa tinggi, dan konversi maksimal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${plusJakarta.variable} ${workSans.variable} antialiased selection:bg-[#f5ca03]/30`}
      >
        {children}
      </body>
    </html>
  );
}
