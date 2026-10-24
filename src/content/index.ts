import type { TierId } from './site';

export { content, type SectionId, type TeamMember, type TierId } from './site';

export const siteUrl = 'https://www.gelumdigital.online';

export const contactLinks = {
  email: 'hello@gelumdigital.online',
  linkedin: 'https://www.linkedin.com/in/gonzalo-enzo-murua-34a363228/',
  github: 'https://github.com/gonzaloPukiMurua',
  /** The owner's 15-minute booking page. While null, booking CTAs fall back to the contact form. */
  calendly: 'https://calendly.com/hello-gelumdigital/30min' as string | null,
};

export const formspreeEndpoint = 'https://formspree.io/f/xeepveea';

// Ordered by price.
export const tiers: TierId[] = ['landing', 'website', 'redesign'];

/** Base prices in AUD (audit, adopted by the owner on 2026-10-20). Hypotheses until the commercial strategy is closed. */
export const basePrices: Record<TierId, number> = {
  landing: 1800,
  website: 3500,
  redesign: 3500,
};

const priceFormat = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  currencyDisplay: 'code',
  maximumFractionDigits: 0,
});

/** "AUD 1,800" */
export function formatPrice(amount: number) {
  return priceFormat.format(amount).replace(/\s/g, ' ');
}
