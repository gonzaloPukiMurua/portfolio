import type { Dictionary } from './types';

// Draft copy: rewritten by the owner in sprint 03.
// Services, prices and durations are carried over from the previous site.
export const en = {
  meta: {
    title: 'Gelum Digital | Custom websites for small businesses',
    description:
      'Custom-coded websites for small and medium businesses in the US, Australia and New Zealand. Built by hand, fully yours, fast.',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main',
    sections: {
      services: 'Services',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
    },
    cta: 'Get in touch',
    menuOpen: 'Menu',
    menuClose: 'Close',
  },
  language: {
    label: 'Language',
  },
  hero: {
    availability: 'Open for projects · Oct 2026',
    title: 'Custom-coded websites that outperform AI builders.',
    lead: 'I design and build fast, custom websites for small and medium businesses. You work directly with me, and you own everything at the end.',
    primaryCta: 'Start a project',
    secondaryCta: 'See my work',
    trust: 'Next.js · TypeScript · Tailwind — based in Argentina, working with US, AU and NZ',
  },
  services: {
    eyebrow: 'Services',
    title: 'Clear packages, clear starting prices.',
    lead: 'Every project starts with a short discovery call and a fixed scope. Prices are starting points; the final quote depends on your scope.',
    from: 'from',
    popular: 'Most popular',
    cta: 'Get a quote',
    // Package contents and durations: drafts pending owner approval (prices are final).
    tiers: {
      website: {
        name: 'Website',
        duration: '1–2 weeks',
        features: [
          'Landing page or site of up to 5 pages',
          'Custom design, mobile first',
          'Contact form and SEO basics',
          'Launch on your domain',
        ],
      },
      redesign: {
        name: 'Redesign',
        duration: '2–4 weeks',
        features: [
          'New design and structure for your current site',
          'Rebuilt on fast, modern code',
          'Content moved over from the old site',
          'Redirects to keep your search rankings',
        ],
      },
      cms: {
        name: 'CMS website',
        duration: '3–5 weeks',
        features: [
          'A site you can update yourself',
          'Content management system set up',
          'Blog or news section',
          'Training to manage your content',
        ],
      },
      custom: {
        name: 'Custom software',
        duration: '6–8 weeks',
        features: [
          'Web app or internal tool built for your process',
          'Database, user accounts and admin panel',
          'Integrations with your tools (payments, email)',
        ],
      },
    },
  },
  work: {
    eyebrow: 'Work',
    title: 'Selected work',
    lead: 'Concept projects built to show range and craft. The businesses are fictional; the sites are real and live.',
    concept: 'Concept',
    demoLink: 'View live demo',
    newTab: '(opens in a new tab)',
    screenshotAlt: 'Home page of the {name} concept site',
  },
  about: {
    eyebrow: 'About',
    title: 'Hi, I’m Gonzalo.',
    paragraphs: [
      'I’m a full-stack developer who designs and builds custom websites and web apps for small and medium businesses.',
      'You work with me directly, from the first call to launch: no hand-offs and no account managers. I keep you updated in writing, so you get steady progress without daily meetings.',
    ],
    meta: 'Based in Argentina (UTC−3) · Working in English and Spanish',
    photoAlt: 'Portrait of Gonzalo Murua',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Tell me about your project.',
    lead: 'A few lines are enough. I’ll reply with next steps and a time for a short call.',
    fields: {
      name: { label: 'Name', error: 'Please enter your name.' },
      email: {
        label: 'Email',
        error: 'Please enter your email.',
        invalid: 'Please enter a valid email address.',
      },
      service: {
        label: 'What do you need?',
        placeholder: 'Choose an option',
        other: 'Something else',
        error: 'Please choose an option.',
      },
      message: { label: 'Project details', error: 'Please tell me a bit about your project.' },
    },
    submit: 'Send message',
    submitting: 'Sending…',
    success: {
      title: 'Thanks, your message is in.',
      body: 'I’ll get back to you by email within one business day.',
    },
    error: 'Your message could not be sent. Please try again, or email me directly at',
    direct: 'Prefer email?',
    replyTime: 'I reply within one business day.',
  },
  footer: {
    rights: 'All rights reserved.',
  },
} satisfies Dictionary;
