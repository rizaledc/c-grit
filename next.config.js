/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'api.maptiler.com',
      'earthengine.googleapis.com',
      'tile.openstreetmap.org',
    ],
  },
  env: {
    NEXT_PUBLIC_MAPTILER_KEY_2020: process.env.NEXT_PUBLIC_MAPTILER_KEY_2020,
    NEXT_PUBLIC_MAPTILER_KEY_2025: process.env.NEXT_PUBLIC_MAPTILER_KEY_2025,
    NEXT_PUBLIC_MAPTILER_TILESET_2020: process.env.NEXT_PUBLIC_MAPTILER_TILESET_2020,
    NEXT_PUBLIC_MAPTILER_TILESET_2025: process.env.NEXT_PUBLIC_MAPTILER_TILESET_2025,
  },
}

module.exports = nextConfig
