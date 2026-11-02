export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  /**
   * Case-study fields (audit Part C, step 7). The problem comes from our own
   * measurements of real local sites, which are never named.
   */
  problem: string;
  decisions: string[];
  /** What the visitor gets; the measured scores follow it on the card. */
  result: string;
  credits: string;
  stack: string[];
  demoUrl: string;
  /**
   * Screenshot of the demo home page. Its alt text comes from the site copy.
   * The host caches images for 7 days, so a new screenshot gets a new file
   * name (-v2, -v3…) instead of overwriting the old one.
   */
  image: { src: string; width: number; height: number };
  /** Lighthouse mobile scores as measured on `measured` (YYYY-MM-DD); null hides them. */
  lighthouse: { performance: number; accessibility: number; measured: string } | null;
};

const credits = 'Development: Gonzalo Murua · Design review and QA: Luisa Ferrari Romero';

// Concept projects: fictional Australian trades businesses, built as static demos.
// Copy approved by the owner on 2026-11-01.
export const projects: Project[] = [
  {
    slug: 'sparkline-electrical',
    name: 'Sparkline Electrical',
    category: 'Residential electrician',
    description:
      'Call-first site for a Brisbane northside electrician: one-tap call, a fixed call-out price, the suburbs covered and a four-field request form.',
    problem: 'Three local electrician sites we measured took 8–18 s to load on a phone; two showed no prices.',
    decisions: [
      'Call button in the first screen and a sticky call bar on mobile',
      'A fixed call-out fee and three starting prices',
      'A four-field request form',
    ],
    result: 'Loads in about 2 s on mobile.',
    credits,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://sparkline.gelumdigital.online/',
    image: { src: '/work/sparkline-electrical-v2.webp', width: 1280, height: 800 },
    lighthouse: { performance: 99, accessibility: 100, measured: '2026-10-27' },
  },
  {
    slug: 'voltline-electrical',
    name: 'Voltline Electrical & Refrigeration',
    category: 'Commercial electrical and refrigeration',
    description:
      'Six-page site for a fictional Ballarat contractor serving farms and businesses: published travel costs, starting prices and a guided quote form.',
    problem:
      'Of five Ballarat contractor sites we measured, none showed prices or travel costs, and four took 8–34 s to load on a phone.',
    decisions: [
      'Travel costs published by distance',
      'A guided quote form that asks what’s needed to price the job',
      'Six pages, matching our Small Business Website plan',
    ],
    result: 'Loads in about 2 s on mobile.',
    credits,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://voltline.gelumdigital.online/',
    image: { src: '/work/voltline-electrical-v2.webp', width: 1280, height: 800 },
    lighthouse: { performance: 98, accessibility: 100, measured: '2026-11-01' },
  },
];
