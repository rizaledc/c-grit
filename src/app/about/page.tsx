"use client";

import { FlaskConical, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#F8FAF9] min-h-[calc(100vh-8rem)] py-16 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center w-full animate-in fade-in zoom-in-95 duration-500">
        <div className="bg-white rounded-3xl shadow-lg border border-border overflow-hidden">
          {/* Top accent */}
          <div className="h-3 w-full bg-gradient-to-r from-[#1b4332] to-[#52b788]"></div>
          
          <div className="p-10 md:p-14 flex flex-col items-center">
            {/* Icon */}
            <div className="mb-8 bg-surface p-5 rounded-full border border-border shadow-sm">
              <FlaskConical className="w-16 h-16 text-primary" strokeWidth={1.5} />
            </div>
            
            {/* Headers */}
            <h1 className="text-4xl font-bold text-text-primary mb-3">Tentang C-GRIT v3.2</h1>
            <h2 className="text-lg md:text-xl text-primary font-medium mb-8">Carbon-stock Geospatial Remote Sensing Integrated Tool</h2>
            
            <div className="w-16 h-px bg-border mb-8"></div>
            
            {/* Description */}
            <p className="text-lg text-text-secondary leading-relaxed md:leading-loose mb-12">
              C-GRIT adalah kerangka kerja estimasi stok karbon berbasis penginderaan jarak jauh yang dikembangkan untuk memetakan distribusi blue carbon dan green carbon Pulau Jawa secara multi-temporal. Penelitian ini dibangun untuk kompetisi Satria Data Nasional 2026.
            </p>
            
            {/* Developers Team */}
            <div className="bg-surface rounded-2xl w-full p-6 md:p-8 border border-border relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d6a4f]/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-5 text-[#2d6a4f]">
                  <Users className="w-5 h-5" strokeWidth={1.5} />
                  <span className="font-bold text-xs tracking-widest uppercase bg-[#2d6a4f]/10 px-3 py-1 rounded-full border border-[#2d6a4f]/20">Tim Pengembang</span>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 text-text-primary font-bold text-lg">
                  <span className="hover:text-primary transition-colors">Rizal Wahyu Pratama</span>
                  <span className="hidden md:block text-border">•</span>
                  <span className="hover:text-primary transition-colors">Khulika Malkan</span>
                  <span className="hidden md:block text-border">•</span>
                  <span className="hover:text-primary transition-colors">Mikhael Setia Budi</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
