export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

/** Path of each locale's home page. */
export const localePath: Record<Locale, string> = {
  en: '/',
  es: '/es',
};

export type SectionId = 'services' | 'work' | 'about' | 'contact';

export type TierId = 'starter' | 'growth' | 'premium';

type SectionIntro = {
  eyebrow: string;
  title: string;
  lead?: string;
};

type FieldCopy = {
  label: string;
  error: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  skipLink: string;
  nav: {
    label: string;
    sections: Record<SectionId, string>;
    cta: string;
    menuOpen: string;
    menuClose: string;
  };
  language: {
    label: string;
  };
  hero: {
    availability: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string;
  };
  services: SectionIntro & {
    from: string;
    popular: string;
    cta: string;
    tiers: Record<TierId, { name: string; duration: string; features: string[] }>;
  };
  work: SectionIntro & {
    concept: string;
    demoLink: string;
    newTab: string;
    screenshotAlt: string;
  };
  about: SectionIntro & {
    paragraphs: string[];
    meta: string;
    photoAlt: string;
  };
  contact: SectionIntro & {
    fields: {
      name: FieldCopy;
      email: FieldCopy & { invalid: string };
      service: FieldCopy & { placeholder: string; other: string };
      message: FieldCopy;
    };
    submit: string;
    submitting: string;
    success: { title: string; body: string };
    error: string;
    direct: string;
    replyTime: string;
  };
  footer: {
    rights: string;
  };
};
