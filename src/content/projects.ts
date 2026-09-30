import type { Locale } from './types';

type Localized = Record<Locale, string>;

export type Project = {
  slug: string;
  name: string;
  category: Localized;
  description: Localized;
  stack: string[];
  demoUrl: string;
  /** Screenshot of the demo home page. Its alt text comes from the dictionary. */
  image: { src: string; width: number; height: number };
};

// Concept projects: fictional businesses, built as static demos.
// Descriptions are drafts, rewritten in sprint 03.
export const projects: Project[] = [
  {
    slug: 'sparkline-electrical',
    name: 'Sparkline Electrical',
    category: { en: 'Electrical services', es: 'Servicios eléctricos' },
    description: {
      en: 'Lead-focused site for a local electrician: upfront pricing, service areas and a fast quote request.',
      es: 'Sitio orientado a consultas para un electricista local: precios claros, zonas de servicio y pedido de presupuesto rápido.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://tjelectrical.gelumdigital.online/',
    image: { src: '/work/sparkline-electrical.webp', width: 1280, height: 800 },
  },
  {
    slug: 'voltline-electrical',
    name: 'Voltline Electrical & Refrigeration',
    category: { en: 'Electrical & refrigeration', es: 'Electricidad y refrigeración' },
    description: {
      en: 'Service site for homes, businesses and rural properties, organised around clear service lines.',
      es: 'Sitio de servicios para hogares, comercios y campos, organizado por líneas de servicio claras.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://ballaratelectric.gelumdigital.online/',
    image: { src: '/work/voltline-electrical.webp', width: 1280, height: 800 },
  },
  {
    slug: 'estudio-faro-contable',
    name: 'Estudio Faro Contable',
    category: { en: 'Accounting firm', es: 'Estudio contable' },
    description: {
      en: 'Spanish-language site for an accounting firm serving SMBs and freelancers, built around direct contact.',
      es: 'Sitio para un estudio contable que atiende pymes y autónomos, pensado para el contacto directo.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://estudiopr.gelumdigital.online/',
    image: { src: '/work/estudio-faro-contable.webp', width: 1280, height: 800 },
  },
];
