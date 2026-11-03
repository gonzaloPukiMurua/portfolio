import benchmark from '../../tools/benchmark/results.json';

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
  /** Median Largest Contentful Paint, in seconds, from tools/benchmark. */
  loadSeconds: number;
  credits: string;
  stack: string[];
  demoUrl: string;
  /**
   * Screenshot of the demo home page. Its alt text comes from the site copy.
   * The host caches images for 7 days, so a new screenshot gets a new file
   * name (-v2, -v3…) instead of overwriting the old one.
   */
  image: { src: string; width: number; height: number };
  /** Median Lighthouse mobile scores, measured on `measured` (YYYY-MM-DD); null hides them. */
  lighthouse: { performance: number; accessibility: number; measured: string } | null;
};

/** The published figures come from tools/benchmark/results.json; see METHOD.md there. */
function measuredDemo(name: string) {
  const demo = benchmark.demos.find((item) => item.name === name)!;
  return {
    loadSeconds: demo.lcpSeconds,
    lighthouse: { performance: demo.performance, accessibility: demo.accessibility, measured: benchmark.date },
  };
}

/** Aggregate and anonymous: the sites measured are never named. */
export const comparison = {
  sites: benchmark.comparison.sites,
  medianSeconds: benchmark.comparison.medianLcpSeconds,
  demoSeconds: benchmark.demos.map((demo) => demo.lcpSeconds),
  date: benchmark.date,
  version: benchmark.lighthouseVersion,
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
    problem: 'Of three Brisbane electrician sites we reviewed, two showed no prices.',
    decisions: [
      'Call button in the first screen and a sticky call bar on mobile',
      'A fixed call-out fee and three starting prices',
      'A four-field request form',
    ],
    credits,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://sparkline.gelumdigital.online/',
    image: { src: '/work/sparkline-electrical-v2.webp', width: 1280, height: 800 },
    ...measuredDemo('Sparkline Electrical'),
  },
  {
    slug: 'voltline-electrical',
    name: 'Voltline Electrical & Refrigeration',
    category: 'Commercial electrical and refrigeration',
    description:
      'Six-page site for a fictional Ballarat contractor serving farms and businesses: published travel costs, starting prices and a guided quote form.',
    problem: 'Of five Ballarat contractor sites we reviewed, none showed prices or travel costs.',
    decisions: [
      'Travel costs published by distance',
      'A guided quote form that asks what’s needed to price the job',
      'Six pages, matching our Small Business Website plan',
    ],
    credits,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://voltline.gelumdigital.online/',
    image: { src: '/work/voltline-electrical-v2.webp', width: 1280, height: 800 },
    ...measuredDemo('Voltline Electrical & Refrigeration'),
  },
];
