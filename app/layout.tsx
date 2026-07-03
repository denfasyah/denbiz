import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { ProgressBarProvider } from "@/components/providers/ProgressBarProvider";

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
  title: "Denbiz",
  description: "Jasa pembuatan website profesional, performa tinggi, dan konversi maksimal.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${plusJakarta.variable} ${workSans.variable} antialiased selection:bg-[#f5ca03]/30 bg-background`}
      >
        <ProgressBarProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingButtons />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
