"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { Layers, TreePine, Waves, ScanLine, Map as MapIcon, ClipboardList, Satellite } from 'lucide-react';
import { MAP_TILES, lulcLegendData } from '@/data/carbon_data';

const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const JAVA_BOUNDS = L.latLngBounds(
  L.latLng(-8.82, 105.05),
  L.latLng(-5.88, 114.60)
);

function BoundsLocker() {
  const map = useMap();
  useEffect(() => {
    map.setMaxBounds(JAVA_BOUNDS.pad(0.1));
    map.setMinZoom(7);
    map.setMaxZoom(14);
    map.fitBounds(JAVA_BOUNDS);
    map.on('drag', () => {
      map.panInsideBounds(JAVA_BOUNDS, { animate: false });
    });
  }, [map]);
  return null;
}

function CoordinateDisplay() {
  const map = useMap();
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  useEffect(() => {
    map.on('mousemove', (e) => {
      setCoords({ 
        lat: parseFloat(e.latlng.lat.toFixed(4)), 
        lng: parseFloat(e.latlng.lng.toFixed(4)) 
      });
    });
  }, [map]);
  return (
    <div className="absolute bottom-8 left-3 z-[1000] bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-text-secondary border border-border shadow-sm font-mono tracking-widest">
      {coords.lat}°S, {coords.lng}°E
    </div>
  );
}

const renderIcon = (name: string, color: string) => {
  const props = { className: "w-4 h-4", strokeWidth: 1.5, style: { color } };
  switch (name) {
    case 'Layers': return <Layers {...props} />;
    case 'TreePine': return <TreePine {...props} />;
    case 'Waves': return <Waves {...props} />;
    case 'ScanLine': return <ScanLine {...props} />;
    default: return <Layers {...props} />;
  }
};

export default function MapPanel() {
  const [activeLayers, setActiveLayers] = useState<Record<string, boolean>>({
    'lulc2020': true,
    'lulc2025': false,
    'mangrove': false,
    'lamun': false,
    'ndvi': false,
  });

  const toggleLayer = (id: string) => {
    setActiveLayers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({ iconUrl, iconRetinaUrl, shadowUrl });
  }, []);

  const LAYERS = [
    {
      id: 'lulc2020',
      name: 'LULC 2020',
      icon: 'Layers',
      url: MAP_TILES.lulc2020,
      color: '#1b4332',
      opacity: 0.85,
      permanent: true,
      badge: '2020',
    },
    {
      id: 'lulc2025',
      name: 'LULC 2025',
      icon: 'Layers',
      url: MAP_TILES.lulc2025,
      color: '#2d6a4f',
      opacity: 0.85,
      permanent: true,
      badge: '2025',
    },
    {
      id: 'mangrove',
      name: 'Mangrove',
      icon: 'TreePine',
      url: MAP_TILES.mangrove,
      color: '#006400',
      opacity: 0.9,
      permanent: false,
    },
    {
      id: 'lamun',
      name: 'Padang Lamun',
      icon: 'Waves',
      url: MAP_TILES.lamun,
      color: '#40916c',
      opacity: 0.9,
      permanent: false,
    },
    {
      id: 'ndvi',
      name: 'Indeks NDVI',
      icon: 'ScanLine',
      url: MAP_TILES.ndvi,
      color: '#52b788',
      opacity: 0.7,
      permanent: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FAF9] py-8 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <MapIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            <span className="text-sm text-text-muted font-medium">Peta Interaktif</span>
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">
            Peta Tutupan Lahan Pulau Jawa
          </h1>
          <p className="text-text-secondary text-base max-w-3xl">
            Visualisasi spasial tutupan lahan dan sebaran ekosistem karbon berdasarkan klasifikasi citra Sentinel-2 periode 2020 dan 2025.
          </p>
        </div>

        {/* Layout 2 kolom: sidebar kiri + peta kanan */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar kiri */}
          <div className="w-full lg:w-72 flex-shrink-0 space-y-4">

            {/* Panel Layer */}
            <div className="bg-white rounded-xl border border-border shadow-sm p-4">
              <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" strokeWidth={1.5} />
                Tampilkan Layer
              </h3>
              
              <div className="space-y-1">
                {LAYERS.map(layer => {
                  const active = activeLayers[layer.id];
                  return (
                    <div key={layer.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="relative group cursor-help">
                           {layer.permanent ? (
                              <div className="w-2.5 h-2.5 rounded-full bg-success" title="Layer Permanen (Maptiler)" />
                           ) : (
                              <div className="w-2.5 h-2.5 rounded-full bg-warning" title="Layer sementara (GEE) - Akan ditinjau ulang dan diperbarui berkala" />
                           )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                           {renderIcon(layer.icon, layer.color)}
                           <span className="text-sm font-medium text-text-primary">{layer.name}</span>
                        </div>
                      </div>
                      
                      {/* Toggle switch */}
                      <button 
                        onClick={() => toggleLayer(layer.id)}
                        className={`relative w-10 h-5 rounded-full transition-colors focus:outline-none ${active ? 'bg-primary' : 'bg-gray-200'}`}
                        aria-label={`Toggle ${layer.name}`}
                      >
                        <div className={`absolute top-[2px] left-[2px] w-4 h-4 rounded-full bg-white shadow transition-transform ${active ? 'translate-x-[20px]' : 'translate-x-0'}`} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Panel Legenda */}
            <div className="bg-white rounded-xl border border-border shadow-sm p-4">
              <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <ClipboardList className="w-4 h-4" strokeWidth={1.5} />
                Legenda Kelas
              </h3>
              <div className="space-y-2">
                {lulcLegendData.map((kelas, idx) => {
                   let type = 'Non-Karbon';
                   if(['Hutan Alam', 'Hutan Tanaman', 'Agroforestri'].includes(kelas.label)) type = 'Green Carbon';
                   else if(['Mangrove', 'Lamun'].includes(kelas.label)) type = 'Blue Carbon';

                   return (
                    <div key={idx} className="flex items-center gap-2 py-1">
                      <div className="w-3 h-3 rounded-full flex-shrink-0 shadow-sm" style={{ backgroundColor: kelas.color }} />
                      <span className="text-xs font-medium text-text-primary flex-1">{kelas.label}</span>
                      <span className="text-[10px] uppercase tracking-wider text-text-muted">{type}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Peta */}
          <div className="flex-1 relative rounded-2xl overflow-hidden border border-border bg-white shadow-md" style={{ height: '600px' }}>
            <MapContainer
              center={[-7.35, 109.82]}
              zoom={8}
              minZoom={7}
              maxZoom={14}
              maxBounds={JAVA_BOUNDS}
              maxBoundsViscosity={1.0}
              style={{ height: '100%', width: '100%', zIndex: 10 }}
              zoomControl={false}
            >
              <BoundsLocker />
              <TileLayer
                url={MAP_TILES.basemap}
                attribution='&copy; <a href="https://www.openstreetmap.org()">OpenStreetMap</a>'
              />
              <ZoomControl position="bottomright" />
              <CoordinateDisplay />

              {/* Render TileLayer untuk semua layer aktif */}
              {LAYERS.filter(l => activeLayers[l.id]).map(layer => (
                <TileLayer
                  key={layer.id}
                  url={layer.url}
                  opacity={layer.opacity}
                  tms={false}
                  attribution="© C-GRIT v3.2 | Maptiler | Google Earth Engine"
                />
              ))}
            </MapContainer>
          </div>

        </div>

        {/* Info bar bawah peta */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between bg-white rounded-xl border border-border shadow-sm px-4 py-3 gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-text-muted">
            <span className="flex items-center gap-1.5">
              <Satellite className="w-4 h-4" strokeWidth={1.5} />
              Sentinel-2 Harmonized (ESA)
            </span>
            <span className="hidden md:inline text-border">|</span>
            <span className="flex items-center gap-1.5">
              <ScanLine className="w-4 h-4" strokeWidth={1.5} />
              Resolusi 10–100m
            </span>
            <span className="hidden md:inline text-border">|</span>
            <span className="flex items-center gap-1.5">
              <MapIcon className="w-4 h-4" strokeWidth={1.5} />
              AOI: 6 Provinsi Pulau Jawa
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary bg-surface px-3 py-1.5 rounded-full border border-border">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Data Maptiler & GEE Live
          </div>
        </div>

      </div>
    </main>
  );
}
