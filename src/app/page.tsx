"use client";

import Link from "next/link";
import { TreePine, Waves, Leaf, BarChart3, TrendingDown, Map as MapIcon, Activity } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full animate-in fade-in duration-500 overflow-x-hidden">
      
      {/* SECTION 1 — HERO */}
      <section className="max-w-[900px] mx-auto w-full px-4 md:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary leading-tight mb-6">
          Peta Karbon Pulau Jawa<br />
          Berbasis Data Satelit
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-3xl">
          C-GRIT v3.2 memetakan stok Blue Carbon dan Green Carbon seluruh Pulau Jawa secara multi-temporal 2020–2025 menggunakan citra Sentinel-2 dan teknologi penginderaan jarak jauh.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/map" className="inline-flex items-center justify-center bg-primary text-white rounded-lg px-8 py-3.5 font-bold hover:bg-primary-light transition-colors shadow-md hover:shadow-lg">
            Jelajahi Peta
          </Link>
          <Link href="/carbon" className="inline-flex items-center justify-center border-2 border-primary text-primary bg-white rounded-lg px-8 py-3.5 font-bold hover:bg-surface transition-colors shadow-sm hover:shadow-md">
            Lihat Data Karbon
          </Link>
        </div>
      </section>

      {/* SECTION 2 — STATS BAR */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full bg-primary py-12"
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-primary-light/50 text-center">
           <div className="pt-4 md:pt-0">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CountUp end={811.12} decimals={2} duration={2.5} separator="." decimal="," /> 
                <span className="text-lg md:text-xl font-normal text-primary-pale ml-1">Mjt ton C</span>
              </p>
              <p className="text-sm font-medium text-primary-pale">Total Karbon 2020</p>
           </div>
           <div className="pt-8 md:pt-0">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CountUp end={26434} duration={2.5} separator="." /> 
                <span className="text-lg md:text-xl font-normal text-primary-pale ml-1">ha</span>
              </p>
              <p className="text-sm font-medium text-primary-pale">Luas Mangrove</p>
           </div>
           <div className="pt-8 md:pt-0">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CountUp end={73674} duration={2.5} separator="." /> 
                <span className="text-lg md:text-xl font-normal text-primary-pale ml-1">ha</span>
              </p>
              <p className="text-sm font-medium text-primary-pale">Luas Padang Lamun</p>
           </div>
        </div>
      </motion.section>

      {/* SECTION 3 — APA ITU BLUE & GREEN CARBON? */}
      <section className="bg-surface py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">Dua Pilar Simpanan Karbon</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Memahami segmentasi ekosistem karbon adalah pijakan awal merancang kebijakan mitigasi dan restorasi berkelanjutan.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Green Carbon */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-border flex flex-col group hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#2d6a4f]/5 rounded-bl-full -z-0 transition-transform duration-700 group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-[#2d6a4f]/10 p-4 rounded-2xl">
                    <TreePine className="w-8 h-8 text-[#2d6a4f]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2d6a4f] bg-[#2d6a4f]/10 px-4 py-2 rounded-full border border-[#2d6a4f]/20">Green Carbon</span>
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-3">Hutan Daratan</h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Tersimpan secara masif dalam biomassa pohon, serasah, dan tanah hutan. Spektrum tutupan mencakup jaringan hutan alam, hutan tanaman industri, serta lanskap agroforestri.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="bg-surface p-4 rounded-2xl border border-border group-hover:border-[#2d6a4f]/30 transition-colors">
                    <p className="text-xs text-text-muted mb-1 font-medium">Koefisien Karbon</p>
                    <p className="font-bold text-text-primary text-lg">60–150 <span className="text-xs font-normal text-text-secondary">ton C/ha</span></p>
                  </div>
                  <div className="bg-surface p-4 rounded-2xl border border-border group-hover:border-[#2d6a4f]/30 transition-colors">
                    <p className="text-xs text-text-muted mb-1 font-medium">Stok Jawa 2020</p>
                    <p className="font-bold text-text-primary text-lg">789,59 <span className="text-xs font-normal text-text-secondary">Mjt ton C</span></p>
                  </div>
                  <div className="col-span-2 bg-gradient-to-r from-[#2d6a4f]/10 to-transparent p-4 rounded-2xl border border-[#2d6a4f]/20 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#2d6a4f]">Proporsi Nasional</span>
                    <span className="font-bold text-[#2d6a4f] text-xl">97,3%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Blue Carbon */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-border flex flex-col group hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0077b6]/5 rounded-bl-full -z-0 transition-transform duration-700 group-hover:scale-110"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-[#0077b6]/10 p-4 rounded-2xl">
                    <Waves className="w-8 h-8 text-[#0077b6]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0077b6] bg-[#0077b6]/10 px-4 py-2 rounded-full border border-[#0077b6]/20">Blue Carbon</span>
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-3">Ekosistem Pesisir</h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Mangrove dan padang lamun menyimpan karbon jauh lebih efisien per hektar dibanding hutan daratan manapun dalam sistem redoks pesisir basah.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="bg-surface p-4 rounded-2xl border border-border group-hover:border-[#0077b6]/30 transition-colors">
                    <p className="text-xs text-text-muted mb-1 font-medium">Koefisien Karbon</p>
                    <p className="font-bold text-text-primary text-lg">90–563 <span className="text-xs font-normal text-text-secondary">ton C/ha</span></p>
                  </div>
                  <div className="bg-surface p-4 rounded-2xl border border-border group-hover:border-[#0077b6]/30 transition-colors">
                    <p className="text-xs text-text-muted mb-1 font-medium">Stok Jawa 2020</p>
                    <p className="font-bold text-text-primary text-lg">21,53 <span className="text-xs font-normal text-text-secondary">Mjt ton C</span></p>
                  </div>
                </div>
                
                <div className="mt-4 bg-[#0077b6] text-white p-4 rounded-2xl shadow-sm text-sm font-medium leading-relaxed italic border border-[#0077b6] relative overflow-hidden group-hover:shadow-md transition-shadow">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -z-0"></div>
                   <span className="relative z-10">&quot;Mangrove menahan hingga 563,6 ton C/ha — 3,7× beralih lebih efisien berbanding rasio hutan alam konvensional.&quot;</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HIGHLIGHT TEMUAN */}
      <section className="bg-[#F8FAF9] py-24 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center md:text-left flex flex-col md:flex-row justify-between items-center"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-2 tracking-tight">Highlight Temuan</h2>
              <p className="text-text-secondary text-lg">Ringkasan dinamika dan stabilitas ekosistem.</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border mx-8"></div>
            <div className="hidden md:block max-w-sm">
              <p className="text-sm text-text-muted italic leading-relaxed">Ekstraksi fitur Sentinel-2 mengidentifikasi relasi karbon yang tidak proporsional antar zona spasial.</p>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-border flex flex-col hover:border-[#1b4332]/40 transition-colors"
            >
              <div className="mb-8 bg-[#1b4332]/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-[#1b4332]/10">
                <TreePine className="w-8 h-8 text-[#1b4332]" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-extrabold text-text-primary mb-3">97,3<span className="text-2xl text-text-muted">%</span></h3>
              <p className="text-sm font-bold text-text-secondary mb-3 uppercase tracking-wider">Dominasi Green Carbon</p>
              <p className="text-text-muted text-sm leading-relaxed mt-auto">
                Proporsi penguasaan green carbon atas total valuasi 811,12 juta ton C di jaringan ekosistem Pulau Jawa tahun 2020.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-border flex flex-col hover:border-[#0077b6]/40 transition-colors"
            >
              <div className="mb-8 bg-[#0077b6]/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-[#0077b6]/10">
                <Waves className="w-8 h-8 text-[#0077b6]" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-extrabold text-text-primary mb-3">563<span className="text-2xl text-text-muted">,6 c/ha</span></h3>
              <p className="text-sm font-bold text-text-secondary mb-3 uppercase tracking-wider">Efisiensi Mangrove</p>
              <p className="text-text-muted text-sm leading-relaxed mt-auto">
                Konstanta koefisien serapan karbon mangrove merepresentasikan efisiensi tertinggi yang absolut di antara seluruh tutupan lahan.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-border flex flex-col hover:border-[#d97706]/40 transition-colors"
            >
              <div className="mb-8 bg-[#d97706]/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-[#d97706]/10">
                <TrendingDown className="w-8 h-8 text-[#d97706]" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-extrabold text-text-primary mb-3">-31k<span className="text-2xl text-text-muted"> ha</span></h3>
              <p className="text-sm font-bold text-text-secondary mb-3 uppercase tracking-wider">Degradasi Padang Lamun</p>
              <p className="text-text-muted text-sm leading-relaxed mt-auto">
                Penyusutan dramatis padang lamun seluas 31.415 hektar pada periode 2020–2025. Sinyal klinis degradasi laut dangkal yang kritis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA DASHBOARD */}
      <section className="bg-gradient-to-r from-[#1b4332] to-[#0077b6] py-24 text-center px-4">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Eksplorasi Data Karbon Secara Interaktif</h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
            Dashboard C-GRIT menyajikan peta tutupan lahan dan estimasi stok karbon secara visual dan mudah dipahami.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/map" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-primary font-bold rounded-lg px-8 py-3 hover:bg-gray-100 transition-colors shadow-lg">
              <MapIcon className="w-5 h-5 mr-2" strokeWidth={1.5} /> Buka Peta Interaktif
            </Link>
            <Link href="/carbon" className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/60 text-white font-medium rounded-lg px-8 py-3 hover:bg-white/10 transition-colors">
              <BarChart3 className="w-5 h-5 mr-2" strokeWidth={1.5} /> Lihat Grafik Karbon
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
