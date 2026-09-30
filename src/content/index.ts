import { en } from './en';
import { es } from './es';
import type { Dictionary, Locale, TierId } from './types';

export const siteUrl = 'https://www.gelumdigital.online';

export const dictionaries: Record<Locale, Dictionary> = { en, es };

export const contactLinks = {
  email: 'gonzaloemurua96@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gonzalo-enzo-murua-34a363228/',
  github: 'https://github.com/gonzaloPukiMurua',
};

export const formspreeEndpoint = 'https://formspree.io/f/xeepveea';

// Ordered by price.
export const tiers: TierId[] = ['website', 'redesign', 'cms', 'custom'];

/** Highlighted as "most popular"; null until the owner picks one. */
export const popularTier: TierId | null = null;

/** Base prices in USD, set by the owner on 2026-09-29. */
export const basePrices: Record<TierId, number> = {
  website: 800,
  redesign: 2000,
  cms: 2500,
  custom: 4000,
};

const priceFormats: Record<Locale, Intl.NumberFormat> = {
  en: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
  es: new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
};

export function formatPrice(amount: number, locale: Locale) {
  return priceFormats[locale].format(amount);
}
