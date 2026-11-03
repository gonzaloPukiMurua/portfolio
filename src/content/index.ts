import type { TierId } from './site';

export { content, type SectionId, type TeamMember, type TierId } from './site';

export const siteUrl = 'https://www.gelumdigital.online';

export const contactLinks = {
  email: 'hello@gelumdigital.online',
  linkedin: 'https://www.linkedin.com/in/gonzalo-enzo-murua-34a363228/',
  github: 'https://github.com/gonzaloPukiMurua',
  /** The owner's 15-minute booking page. While null, booking CTAs fall back to the contact form. */
  calendly: 'https://calendly.com/hello-gelumdigital/15-minutes-meeting' as string | null,
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

/**
 * Founding-client offer (owner decision, 2026-11-01): 30% off any plan for
 * the first three projects, in exchange for a testimonial and permission to
 * publish the work as a case study. A place counts as taken when the 50%
 * deposit is paid: update `taken` and redeploy. When all places are taken,
 * the offer disappears from the build; after `endsAt`, an inline script in
 * the layout hides it until the next deploy removes it.
 */
export const foundingOffer = {
  discount: 30,
  places: 3,
  taken: 0,
  endsAt: '2026-12-31T23:59:59+11:00', // end of 31 December, Sydney time (AEDT)
  endsLabel: '31 December 2026',
};

export const foundingOfferOpen = foundingOffer.taken < foundingOffer.places;

/** Fills {discount}, {ends}, {open} and {places} in the founding-offer copy. */
export function foundingText(template: string) {
  return template
    .replace('{discount}', String(foundingOffer.discount))
    .replace('{ends}', foundingOffer.endsLabel)
    .replace('{open}', String(foundingOffer.places - foundingOffer.taken))
    .replace('{places}', String(foundingOffer.places));
}

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
