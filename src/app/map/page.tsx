import dynamic from 'next/dynamic';

const MapPanel = dynamic(() => import('@/components/MapPanel'), { 
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#F8FAF9] py-8 flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-text-secondary font-medium">Memuat Antarmuka Peta...</p>
    </div>
  )
});

export default function MapPage() {
  return <MapPanel />;
}
