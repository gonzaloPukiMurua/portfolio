import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to `out/`.
  output: 'export',
  // Emits folders with index.html, which a plain Apache/LiteSpeed host
  // (Hostinger) serves with no rewrite rules.
  trailingSlash: true,
  // The default image loader needs a server; images are shipped pre-sized instead.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
