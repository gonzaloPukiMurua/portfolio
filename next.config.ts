import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to `out/`.
  output: 'export',
  // Emits `es/index.html` instead of `es.html`, so a plain Apache/LiteSpeed host
  // (Hostinger) serves `/es/` with no rewrite rules.
  trailingSlash: true,
  // The default image loader needs a server; images are shipped pre-sized instead.
  images: {
    unoptimized: true,
  },
  experimental: {
    // Needed for a 404 page when the app has one root layout per language.
    globalNotFound: true,
  },
};

export default nextConfig;
