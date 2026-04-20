"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, Home, Map as MapIcon, BarChart3, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();

  const isMapActive = pathname === "/map";
  // For the map, we might want to keep the navbar slightly transparent or keep it purely white. 
  // User requested: "Navbar: background putih dengan border-bottom tipis #E5EDE9 bukan dark/transparan"
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="flex h-16 items-center px-4 md:px-8 max-w-[1600px] mx-auto w-full">
        <Link href="/" className="flex items-center space-x-2 mr-6 h-full group">
          <Layers className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block text-primary">C-GRIT</span>
        </Link>
        
        <div className="flex flex-1 items-center justify-end md:justify-start space-x-2 md:space-x-6 ml-auto md:ml-0 overflow-x-auto no-scrollbar">
          <Link href="/" className={cn(
            "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
            pathname === "/" ? "bg-surface text-primary" : "text-text-secondary"
          )}>
            <Home className="h-5 w-5" strokeWidth={1.5} />
            <span className="hidden md:inline-block">Beranda</span>
          </Link>
          <Link href="/map" className={cn(
            "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
            pathname === "/map" ? "bg-surface text-primary" : "text-text-secondary"
          )}>
            <MapIcon className="h-5 w-5" strokeWidth={1.5} />
            <span className="hidden md:inline-block">Peta</span>
          </Link>
          <Link href="/carbon" className={cn(
            "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
            pathname === "/carbon" ? "bg-surface text-primary" : "text-text-secondary"
          )}>
            <BarChart3 className="h-5 w-5" strokeWidth={1.5} />
            <span className="hidden md:inline-block">Karbon</span>
          </Link>

          <Link href="/about" className={cn(
            "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
            pathname === "/about" ? "bg-surface text-primary" : "text-text-secondary"
          )}>
            <BookOpen className="h-5 w-5" strokeWidth={1.5} />
            <span className="hidden md:inline-block">Tentang</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
