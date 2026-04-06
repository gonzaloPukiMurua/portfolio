import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gelum Digital | Custom Code Architects – Websites & Web Apps',
  description: 'Premium custom websites, e-commerce stores, and web applications for SMBs in the US, Australia & New Zealand. Next.js • Nest.js • Superior to AI builders.',
  keywords: ['custom web development', 'Next.js agency', 'Shopify headless', 'web design US', 'ecommerce development Australia', 'custom code architects'],
  authors: [{ name: 'Gonzalo Enzo - Gelum Digital' }],
  openGraph: {
    title: 'Gelum Digital | Custom Websites That Actually Convert',
    description: 'We build high-performance digital solutions that outperform AI builders and drag-and-drop platforms.',
    images: [{ url: 'https://gelumdigital.online/og-image.jpg' }], // Add later
    siteName: 'Gelum Digital',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A1428] text-white antialiased">
        {children}
      </body>
    </html>
  );
}