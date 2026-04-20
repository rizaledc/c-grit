import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Satellite, ScanLine, TreePine, BookOpen, Layers } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C-GRIT Dashboard v3.2",
  description: "Estimasi Stok Blue Carbon dan Green Carbon Pulau Jawa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossOrigin="" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-text-primary`}>
        <Navbar />
        
        <main className="flex-1 w-full mx-auto">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="w-full bg-[#111827] text-gray-300 mt-12 py-12">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Kolom 1 - Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-white">
                <Layers className="h-6 w-6 text-emerald-400" strokeWidth={1.5} />
                <span className="font-bold text-xl tracking-tight">C-GRIT</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed pr-4">
                Estimasi stok blue carbon dan green carbon Pulau Jawa berbasis penginderaan jarak jauh multi-temporal 2020–2025.
              </p>
              <div className="inline-block px-3 py-1 bg-gray-800 text-xs rounded-full border border-gray-700 text-gray-300">
                C-GRIT Framework v3.2
              </div>
            </div>

            {/* Kolom 2 - Navigasi */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white tracking-wide">Navigasi</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/map" className="hover:text-white transition-colors">Peta Interaktif</Link></li>
                <li><Link href="/carbon" className="hover:text-white transition-colors">Data Karbon</Link></li>

                <li><Link href="/about" className="hover:text-white transition-colors">Tentang</Link></li>
              </ul>
            </div>

            {/* Kolom 3 - Data & Sumber */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white tracking-wide">Data & Sumber</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-3">
                  <Satellite className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                  <span>Google Earth Engine</span>
                </li>
                <li className="flex items-center gap-3">
                  <ScanLine className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                  <span>Sentinel-2 Harmonized (ESA)</span>
                </li>
                <li className="flex items-center gap-3">
                  <TreePine className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                  <span>Koefisien IPCC Tier 2</span>
                </li>
                <li className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                  <span>Satria Data 2026</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="max-w-[1200px] mx-auto px-6 mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} C-GRIT v3.2 &middot; Dibangun untuk Satria Data Nasional 2026
          </div>
        </footer>
      </body>
    </html>
  );
}
