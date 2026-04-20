export const carbonStats = {
  total2020: 811.12,
  accuracy: 87.08,
  kappa: 0.8523,
  luasMangrove: 26434,
  luasLamun: 73674,
};

export const carbonComparisonData = [
  { name: 'Hutan Alam', "2020": 207.78, "2025": 293.17 },
  { name: 'Hutan Tanaman', "2020": 399.51, "2025": 367.05 },
  { name: 'Agroforestri', "2020": 182.29, "2025": 180.94 },
  { name: 'Mangrove', "2020": 14.90, "2025": 14.90 },
  { name: 'Lamun', "2020": 6.63, "2025": 3.80 },
];

export const carbonCompositionData = [
  { name: 'Green Carbon', value: 789.59, fill: '#1b4332' },
  { name: 'Blue Carbon', value: 21.53, fill: '#0077b6' },
];

export const carbonTableData = [
  { ekosistem: 'Hutan Alam', luas2020: '1.385.226', luas2025: '1.954.491', delta: '+569.265', netChange: '+85,39' },
  { ekosistem: 'Hutan Tanaman', luas2020: '3.995.064', luas2025: '3.670.491', delta: '-324.573', netChange: '-32,46' },
  { ekosistem: 'Agroforestri', luas2020: '3.038.214', luas2025: '3.015.669', delta: '-22.545', netChange: '-1,35' },
  { ekosistem: 'Mangrove', luas2020: '26.434', luas2025: '26.434', delta: '0', netChange: '0' },
  { ekosistem: 'Lamun', luas2020: '73.674', luas2025: '42.259', delta: '-31.415', netChange: '-2,83' },
  { ekosistem: 'TOTAL', luas2020: '—', luas2025: '—', delta: '—', netChange: '+48,75' },
];

export const modelAccuracyData = [
  { kelas: 'Hutan Alam', tipe: 'Green Carbon', pa: '85.00', ua: '89.47' },
  { kelas: 'Hutan Tanaman', tipe: 'Green Carbon', pa: '89.06', ua: '83.82' },
  { kelas: 'Agroforestri', tipe: 'Green Carbon', pa: '82.61', ua: '83.82' },
  { kelas: 'Mangrove', tipe: 'Blue Carbon', pa: '75.76', ua: '87.72' },
  { kelas: 'Pertanian', tipe: 'Non-Karbon', pa: '74.07', ua: '67.80' },
  { kelas: 'Badan Air', tipe: 'Non-Karbon', pa: '93.15', ua: '91.89' },
  { kelas: 'Urban', tipe: 'Non-Karbon', pa: '95.31', ua: '95.31' },
  { kelas: 'Lahan Terbuka', tipe: 'Non-Karbon', pa: '100.00', ua: '95.31' },
  { kelas: 'OVERALL', tipe: '—', pa: '87.08', ua: 'Kappa=0.8523' },
];

export const lulcLegendData = [
  { label: 'Hutan Alam', color: '#1b4332' },
  { label: 'Hutan Tanaman', color: '#2d6a4f' },
  { label: 'Agroforestri', color: '#52b788' },
  { label: 'Mangrove', color: '#006400' },
  { label: 'Lamun', color: '#40916c' },
  { label: 'Pertanian', color: '#f4a261' },
  { label: 'Badan Air', color: '#48cae4' },
  { label: 'Urban/Terbangun', color: '#e63946' },
  { label: 'Lahan Terbuka', color: '#adb5bd' },
];

export const MAP_TILES = {
  basemap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

  // LULC dari Maptiler — dibaca dari environment variable
  lulc2020: `https://api.maptiler.com/tiles/${process.env.NEXT_PUBLIC_MAPTILER_TILESET_2020}/{z}/{x}/{y}.webp?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY_2020}`,
  lulc2025: `https://api.maptiler.com/tiles/${process.env.NEXT_PUBLIC_MAPTILER_TILESET_2025}/{z}/{x}/{y}.webp?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY_2025}`,

  // Layer tambahan dari GEE — dibaca dari environment variable
  mangrove: process.env.NEXT_PUBLIC_GEE_TILE_MANGROVE || '',
  lamun:    process.env.NEXT_PUBLIC_GEE_TILE_LAMUN    || '',
  ndvi:     process.env.NEXT_PUBLIC_GEE_TILE_NDVI     || '',
};
