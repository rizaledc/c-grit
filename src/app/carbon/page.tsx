"use client";

import { BarChart3, TreePine, Waves, TrendingDown, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const barData = [
  { name: 'Hutan Alam',    s2020: 207.78, s2025: 293.17 },
  { name: 'Hutan Tanaman', s2020: 399.51, s2025: 367.05 },
  { name: 'Agroforestri',  s2020: 182.29, s2025: 180.94 },
  { name: 'Mangrove',      s2020: 14.90,  s2025: 14.90  },
  { name: 'Lamun',         s2020: 6.63,   s2025: 3.80   },
];

const pieData = [
  { name: 'Green Carbon', value: 789.59, color: '#1b4332' },
  { name: 'Blue Carbon',  value: 21.53,  color: '#0077b6' },
];

export default function CarbonPage() {
  return (
    <main className="bg-[#F8FAF9] min-h-screen">
      
      {/* Hero kecil halaman */}
      <div className="bg-white border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-primary" strokeWidth={1.5} />
            <span className="text-sm text-text-muted font-medium">Data Karbon</span>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">
            Estimasi Stok Karbon Pulau Jawa
          </h1>
          <p className="text-text-secondary max-w-2xl leading-relaxed">
            Hasil estimasi stok blue carbon dan green carbon berbasis klasifikasi citra Sentinel-2 dengan pendekatan IPCC Tier 2. Periode analisis: 2020 (baseline) vs 2025 (evaluasi).
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 space-y-8">
        
        {/* ROW 1: 3 summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="relative rounded-2xl p-6 shadow-lg border border-border bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] overflow-hidden text-white group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500"></div>
            
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-sm">
                <BarChart3 className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-pale bg-black/20 px-3 py-1 rounded-full border border-white/10 shadow-sm">Baseline 2020</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <p className="text-sm font-medium text-white/80 mb-1 uppercase tracking-wider">Total Stok Karbon Pulau Jawa</p>
              <div className="flex items-end gap-2 mb-3">
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">811,12</h3>
                <span className="text-base text-white/80 mb-1.5 font-medium">Mjt ton C</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-primary-pale bg-white/5 w-fit px-3 py-1.5 rounded-lg border border-white/5">
                <span className="block w-2 h-2 rounded-full bg-success animate-pulse"></span>
                Kombinasi Green & Blue Carbon
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-border relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2d6a4f]/10 to-transparent rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div className="bg-white p-3 rounded-xl border border-border shadow-sm group-hover:shadow-md transition-shadow group-hover:border-[#2d6a4f]/30">
                <TreePine className="w-6 h-6 text-[#2d6a4f]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#2d6a4f] bg-[#2d6a4f]/10 px-3 py-1 rounded-full border border-[#2d6a4f]/20">Pilar Daratan</span>
            </div>
            
            <div className="relative z-10">
              <p className="text-sm font-semibold text-text-secondary mb-1">Stok Green Carbon</p>
              <div className="flex items-end gap-2 mb-6">
                <h3 className="text-4xl md:text-4xl font-bold text-text-primary tracking-tight group-hover:text-[#2d6a4f] transition-colors">789,59</h3>
                <span className="text-sm text-text-muted mb-1 font-medium">Mjt ton C</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-text-secondary">
                  <span>Proporsi Stok</span>
                  <span className="text-[#2d6a4f]">97,3%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2 shadow-inner">
                  <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] h-2 rounded-full shadow-sm" style={{ width: '97.3%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-border relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0077b6]/10 to-transparent rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div className="bg-white p-3 rounded-xl border border-border shadow-sm group-hover:shadow-md transition-shadow group-hover:border-[#0077b6]/30">
                <Waves className="w-6 h-6 text-[#0077b6]" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0077b6] bg-[#0077b6]/10 px-3 py-1 rounded-full border border-[#0077b6]/20">Pilar Pesisir</span>
            </div>
            
            <div className="relative z-10">
              <p className="text-sm font-semibold text-text-secondary mb-1">Stok Blue Carbon</p>
              <div className="flex items-end gap-2 mb-6">
                <h3 className="text-4xl md:text-4xl font-bold text-text-primary tracking-tight group-hover:text-[#0077b6] transition-colors">21,53</h3>
                <span className="text-sm text-text-muted mb-1 font-medium">Mjt ton C</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-text-secondary">
                  <span>Proporsi Stok</span>
                  <span className="text-[#0077b6]">2,7%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2 shadow-inner">
                  <div className="bg-gradient-to-r from-[#0077b6] to-[#48cae4] h-2 rounded-full" style={{ width: '2.7%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: Bar chart besar (2 kolom) + Pie chart (1 kolom) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col items-center">
            <div className="w-full text-left mb-6">
              <h3 className="text-lg font-bold text-text-primary">Stok Karbon per Ekosistem: 2020 vs 2025</h3>
              <p className="text-sm text-text-secondary">dalam juta ton C</p>
            </div>
            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5EDE9" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#4B5563', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#4B5563', fontSize: 12 }} />
                  <Tooltip 
                    cursor={{ fill: '#F8FAF9' }} 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E5EDE9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="s2020" name="2020" fill="#1b4332" radius={[4,4,0,0]} isAnimationActive={true} />
                  <Bar dataKey="s2025" name="2025" fill="#52b788" radius={[4,4,0,0]} isAnimationActive={true} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-1 bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col items-center">
            <div className="w-full text-left mb-2">
              <h3 className="text-lg font-bold text-text-primary">Komposisi Karbon 2020</h3>
            </div>
            <div className="relative w-full h-[280px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    isAnimationActive={true}
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E5EDE9' }}
                    itemStyle={{ color: '#111827' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-text-primary">811,12</span>
                <span className="text-xs text-text-muted">juta ton C</span>
              </div>
            </div>
            <div className="w-full mt-4 space-y-2">
              {pieData.map((d, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center text-sm font-medium text-text-primary">
                    <span className="w-3 h-3 rounded-full mr-2 shrink-0" style={{ backgroundColor: d.color }}></span>
                    {d.name}
                  </div>
                  <div className="pl-5 text-xs text-text-secondary">
                    {d.value} Mjt ton C ({d.name === 'Green Carbon' ? '97,3%' : '2,7%'})
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ROW 3: Tabel perubahan full width */}
        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border bg-white">
            <h3 className="text-lg font-bold text-text-primary">Dinamika Perubahan Tutupan Lahan 2020–2025</h3>
            <p className="text-sm text-text-secondary">Perbandingan luas ekosistem dan dampaknya terhadap stok karbon</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Ekosistem</th>
                  <th className="px-6 py-4 font-semibold">Tipe Karbon</th>
                  <th className="px-6 py-4 font-semibold text-right">Luas 2020 (ha)</th>
                  <th className="px-6 py-4 font-semibold text-right">Luas 2025 (ha)</th>
                  <th className="px-6 py-4 font-semibold text-right">Delta Luas (ha)</th>
                  <th className="px-6 py-4 font-semibold text-right">Net Change (Mjt ton C)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                
                <tr className="bg-white hover:bg-surface transition-colors">
                  <td className="px-6 py-4 font-medium text-text-primary">Hutan Alam</td>
                  <td className="px-6 py-4 text-text-secondary">Green Carbon</td>
                  <td className="px-6 py-4 text-right">1.385.226</td>
                  <td className="px-6 py-4 text-right">1.954.491</td>
                  <td className="px-6 py-4 text-right font-medium text-success">+569.265</td>
                  <td className="px-6 py-4 text-right font-bold text-success inline-flex items-center justify-end w-full space-x-1">
                    <span>+85,39</span>
                    <span className="text-warning text-xs" title="Artefak kondisi atmosfer">⚠</span>
                  </td>
                </tr>

                <tr className="bg-[#F8FAF9] hover:bg-surface transition-colors">
                  <td className="px-6 py-4 font-medium text-text-primary">Hutan Tanaman</td>
                  <td className="px-6 py-4 text-text-secondary">Green Carbon</td>
                  <td className="px-6 py-4 text-right">3.995.064</td>
                  <td className="px-6 py-4 text-right">3.670.491</td>
                  <td className="px-6 py-4 text-right font-medium text-danger">-324.573</td>
                  <td className="px-6 py-4 text-right font-bold text-danger">-32,46</td>
                </tr>

                <tr className="bg-white hover:bg-surface transition-colors">
                  <td className="px-6 py-4 font-medium text-text-primary">Agroforestri</td>
                  <td className="px-6 py-4 text-text-secondary">Green Carbon</td>
                  <td className="px-6 py-4 text-right">3.038.214</td>
                  <td className="px-6 py-4 text-right">3.015.669</td>
                  <td className="px-6 py-4 text-right font-medium text-danger">-22.545</td>
                  <td className="px-6 py-4 text-right font-bold text-danger">-1,35</td>
                </tr>

                <tr className="bg-[#F8FAF9] hover:bg-surface transition-colors">
                  <td className="px-6 py-4 font-medium text-text-primary">Mangrove</td>
                  <td className="px-6 py-4 text-text-secondary">Blue Carbon</td>
                  <td className="px-6 py-4 text-right">26.434</td>
                  <td className="px-6 py-4 text-right">26.434</td>
                  <td className="px-6 py-4 text-right font-medium text-text-muted">0</td>
                  <td className="px-6 py-4 text-right font-bold text-text-muted">0</td>
                </tr>

                <tr className="bg-white hover:bg-surface transition-colors">
                  <td className="px-6 py-4 font-medium text-text-primary">Lamun</td>
                  <td className="px-6 py-4 text-text-secondary">Blue Carbon</td>
                  <td className="px-6 py-4 text-right">73.674</td>
                  <td className="px-6 py-4 text-right">42.259</td>
                  <td className="px-6 py-4 text-right font-medium text-danger">-31.415</td>
                  <td className="px-6 py-4 text-right font-bold text-danger">-2,83</td>
                </tr>

                <tr className="bg-primary-pale text-primary border-t-2 border-primary">
                  <td className="px-6 py-4 font-bold">TOTAL</td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 text-right text-text-muted">—</td>
                  <td className="px-6 py-4 text-right text-text-muted">—</td>
                  <td className="px-6 py-4 text-right text-text-muted">—</td>
                  <td className="px-6 py-4 text-right font-bold inline-flex items-center justify-end w-full space-x-1">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-success">+48,75</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-white border-t border-border">
            <p className="text-xs text-text-muted italic">
              <span className="text-warning not-italic">⚠</span> Peningkatan luas Hutan Alam merupakan artefak kondisi atmosfer komposit 2020 vs 2025 (1.116 vs 1.009 scene), bukan reforestasi aktual.
            </p>
          </div>
        </div>

        {/* ROW 4: Highlight insight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 bg-accent-light text-accent rounded-full flex items-center justify-center mb-4">
                <Waves className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Mangrove: Pahlawan Tersembunyi</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Dengan hanya 26.434 ha (0,21% daratan Jawa), mangrove menyimpan 14,90 juta ton C — koefisien 563,6 ton C/ha, tertinggi dari semua ekosistem yang dipetakan.
              </p>
            </div>
            <div className="mt-auto">
              <span className="inline-block px-3 py-1 bg-surface text-accent text-xs font-semibold rounded-full border border-border">Blue Carbon</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 bg-orange-100 text-warning rounded-full flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Padang Lamun Terancam</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Luas padang lamun menyusut 31.415 hektar antara 2020 dan 2025, setara kehilangan 2,83 juta ton C — sinyal degradasi ekosistem pesisir yang perlu segera ditangani.
              </p>
            </div>
            <div className="mt-auto">
              <span className="inline-block px-3 py-1 bg-surface text-warning text-xs font-semibold rounded-full border border-border">Degradasi</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 bg-[#2d6a4f]/10 text-[#2d6a4f] rounded-full flex items-center justify-center mb-4">
                <TreePine className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Green Carbon Mendominasi</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                97,3% stok karbon Jawa tersimpan di ekosistem darat. Hutan tanaman Perhutani menjadi kontributor terbesar dengan 399,51 juta ton C — hampir separuh total stok.
              </p>
            </div>
            <div className="mt-auto">
              <span className="inline-block px-3 py-1 bg-surface text-[#2d6a4f] text-xs font-semibold rounded-full border border-border">Green Carbon</span>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
