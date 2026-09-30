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

export const tiers: TierId[] = ['starter', 'growth', 'premium'];

export const popularTier: TierId = 'growth';

/** Base prices in USD. Owner decision; placeholders until final amounts are set. */
export const basePrices: Record<TierId, number> = {
  starter: 4500,
  growth: 10500,
  premium: 19000,
};

const priceFormats: Record<Locale, Intl.NumberFormat> = {
  en: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
  es: new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }),
};

export function formatPrice(amount: number, locale: Locale) {
  return priceFormats[locale].format(amount);
}
