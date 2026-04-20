"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import ModelEvaluation from "@/components/ModelEvaluation";
import Image from "next/image";
import { GitBranch, TrendingUp, ClipboardList } from "lucide-react";

export default function ModelPage() {
  return (
    <div className="flex flex-col space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold tracking-tight">Evaluasi Model Random Forest</h1>
        <div className="ml-4 h-[1px] flex-1 bg-border"></div>
      </div>
      <p className="text-muted-foreground text-lg mb-4">
        Analisis kinerja model machine learning Random Forest dalam memprediksi kelas tutupan lahan dan mengestimasi stok karbon di Pulau Jawa berdasarkan citra Sentinel-2.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Feature Importance Image */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-primary" strokeWidth={1.5} />
              Feature Importance
            </CardTitle>
            <CardDescription>
              Tingkat kepentingan fitur spectral dan indeks vegetasi (termasuk SSII) dalam model Random Forest yang digunakan untuk klasifikasi kelas karbon.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-muted/30 flex justify-center items-center">
              {/* Fallback image text if image is not placed by user yet */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-muted-foreground">
                <span className="text-sm">Menunggu gambar dari pengguna</span>
                <span className="text-xs font-mono mt-1">public/images/gambar3_feature_importance.png</span>
              </div>
              <Image 
                src="/images/gambar3_feature_importance.png" 
                alt="Feature Importance Chart" 
                fill 
                className="object-contain relative z-10 opacity-0 transition-opacity duration-300 bg-card"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
              />
            </div>
          </CardContent>
        </Card>

        {/* OOB Curve Image */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" strokeWidth={1.5} />
              Out-Of-Bag (OOB) Curve
            </CardTitle>
            <CardDescription>
              Menunjukkan konvergensi error pada model Random Forest seiring dengan bertambahnya jumlah tree (N-estimators). Error menurun stabil menandakan model andal.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-muted/30 flex justify-center items-center">
              <div className="absolute inset-0 flex flex-col justify-center items-center text-muted-foreground">
                <span className="text-sm">Menunggu gambar dari pengguna</span>
                <span className="text-xs font-mono mt-1">public/images/gambar4_oob_curve.png</span>
              </div>
              <Image 
                src="/images/gambar4_oob_curve.png" 
                alt="OOB Curve Diagram" 
                fill 
                className="object-contain relative z-10 opacity-0 transition-opacity duration-300 bg-card"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            Tabel Akurasi Model
          </CardTitle>
          <CardDescription>Detail metrics Producer Accuracy (PA) dan User Accuracy (UA) untuk setiap kelas tutupan lahan dan tipe perhitungan karbon.</CardDescription>
        </CardHeader>
        <CardContent>
          <ModelEvaluation />
        </CardContent>
      </Card>
    </div>
  );
}
