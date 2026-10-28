export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  demoUrl: string;
  /** Screenshot of the demo home page. Its alt text comes from the site copy. */
  image: { src: string; width: number; height: number };
  /** Lighthouse mobile scores as measured on `measured` (YYYY-MM-DD); null hides them. */
  lighthouse: { performance: number; accessibility: number; measured: string } | null;
};

// Concept projects: fictional Australian trades businesses, built as static demos.
// Descriptions are drafts pending owner approval.
export const projects: Project[] = [
  {
    slug: 'sparkline-electrical',
    name: 'Sparkline Electrical',
    category: 'Residential electrician',
    description:
      'Call-first site for a Brisbane northside electrician: one-tap call, a fixed call-out price, the suburbs covered and a four-field request form.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://sparkline.gelumdigital.online/',
    image: { src: '/work/sparkline-electrical.webp', width: 1280, height: 800 },
    lighthouse: { performance: 99, accessibility: 100, measured: '2026-10-27' },
  },
  {
    slug: 'voltline-electrical',
    name: 'Voltline Electrical & Refrigeration',
    category: 'Commercial and rural electrical',
    description:
      'Service site for homes, businesses and rural properties, organised around clear service lines.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://ballaratelectric.gelumdigital.online/',
    image: { src: '/work/voltline-electrical.webp', width: 1280, height: 800 },
    lighthouse: { performance: 90, accessibility: 90, measured: '2026-10-20' },
  },
];
