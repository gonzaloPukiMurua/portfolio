// Site copy. English only since v2 (Australian trades; New Zealand added in v2.8). Copy approved by the
// owner on 2026-10-20 (adjustable); every promise here must stay true.

// OWNER-CONFIRM: the wording about GST is for the owner and their accountant to decide;
// until then this makes no claim about tax.
export const priceNote = 'Prices in AUD.';

export type SectionId = 'services' | 'process' | 'work' | 'about' | 'contact';

export type TeamMember = {
  name: string;
  role: string;
  /** null until the person provides it; the two-person About waits for it. */
  bio: string | null;
  details: string;
  photo: { src: string; width: number; height: number } | null;
  links: { label: string; href: string }[];
};

export type TierId = 'landing' | 'website' | 'redesign';

export const content = {
  meta: {
    title: 'Gelum Digital | Websites for trades in Australia and New Zealand',
    description:
      'Fast websites for electricians, plumbers and other trades in Australia and New Zealand: landing pages, small business websites and redesigns, priced in AUD.',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main',
    sections: {
      services: 'Services',
      process: 'How we work',
      work: 'Work',
      about: 'About',
      contact: 'Contact',
    } satisfies Record<SectionId, string>,
    menuOpen: 'Menu',
    menuClose: 'Close',
  },
  cta: {
    book: 'Book a free 15-min call',
    bookShort: 'Book a call',
    quote: 'Get a quote',
    newTab: '(opens in a new tab)',
  },
  hero: {
    // Kept short: the badge must stay on one line at 360px.
    availability: 'New projects from November',
    title: 'Websites for trades that turn visitors into booked jobs.',
    lead: 'We design and build fast websites for electricians, plumbers and other trades in Australia and New Zealand. You own the code, the domain and the content.',
    secondaryCta: 'See our work',
    trust: 'Based in Argentina · Calls 9am–12pm Sydney time (11am–2pm NZ)',
  },
  services: {
    eyebrow: 'Services',
    title: 'Three ways to start.',
    lead: 'Every project starts with a free 15-minute call and a fixed quote within 48 hours.',
    from: 'from',
    note: 'Build times start once we have your content. Final quote depends on scope. Hosting has no ongoing cost, and the first year of your domain is included.',
    // Care plan terms: freelance-web-os, clients/personal-site/v2/care-plan.md (approved 2026-11-15).
    carePlan: {
      title: 'Care plan · AUD 99 a month, optional.',
      body: 'Up to 45 minutes of changes a month (prices, suburbs, photos), form and uptime checks, and a speed check every 3 months. Cancel with 30 days’ notice; your site stays online either way.',
    },
    // {discount}, {ends}, {open} and {places} come from `foundingOffer` (content/index.ts).
    founding: {
      title: 'Founding clients.',
      body: 'Our first three projects get {discount}% off any plan, in exchange for a testimonial and permission to publish the work as a case study.',
      status: 'Until {ends} · {open} of {places} places open.',
    },
    tiers: {
      landing: {
        name: 'Landing Page',
        duration: '1–2 weeks',
        features: [
          'One page built around a single action: a call or a quote request',
          'Mobile-first design',
          'Contact form and SEO basics',
          'Launch on your domain',
        ],
      },
      website: {
        name: 'Small Business Website',
        duration: '3–5 weeks',
        features: [
          '5–6 pages: home, services, service areas, about, contact',
          'A page for the suburbs you cover',
          'Quote request form',
          'SEO basics and fast loading on mobile',
        ],
      },
      redesign: {
        name: 'Website Redesign',
        duration: '4–6 weeks',
        features: [
          'New design and structure for your current site',
          'Content moved over from the old site',
          'Redirects to keep your Google rankings',
          'Faster loading on mobile',
        ],
      },
    } satisfies Record<TierId, { name: string; duration: string; features: string[] }>,
  },
  process: {
    eyebrow: 'How we work',
    title: 'From first call to launch in five steps.',
    steps: [
      {
        title: 'Free 15-minute call',
        body: 'We talk about your business, the jobs you want more of and what your current site is missing.',
      },
      { title: 'Fixed quote within 48 hours', body: 'A written quote with the scope, timeline and price.' },
      { title: '50% deposit to start', body: 'The other 50% is due at launch.' },
      {
        title: 'Design and build',
        body: 'We show you the design first, then build it. You get written updates along the way.',
      },
      {
        title: 'Launch',
        body: 'Your site goes live on your domain. The code, the domain and the content are yours.',
      },
    ],
    faqTitle: 'Questions',
    faq: [
      {
        question: 'How many rounds of changes are included?',
        answer:
          'Two rounds of changes. Extra changes, new pages or anything outside the agreed scope are quoted before we start them.',
      },
      {
        question: 'Is hosting included?',
        answer:
          'Yes. Your site is hosted in an account in your name at no ongoing cost, and the first year of your domain is included. From the second year you only pay the domain renewal, about AUD 25 a year.',
      },
      {
        question: 'What support do I get after launch?',
        answer:
          'One month of bug fixes after launch. After that, the optional care plan covers changes and checks for AUD 99 a month. Anything else is quoted before we start: AUD 30 an hour on the care plan, AUD 60 an hour without it.',
      },
      {
        question: 'What if I don’t like the design?',
        answer:
          'You see the design before we build anything, and your two rounds of changes start there. The site is built on a design you have approved.',
      },
      {
        question: 'How do I pay?',
        answer: `50% deposit to start and 50% at launch, by bank transfer, PayPal or Payoneer. ${priceNote}`,
      },
      {
        question: 'Where are you based?',
        answer:
          'In Argentina. We book calls between 9am and 12pm Sydney time (11am to 2pm in New Zealand) and reply to emails within one business day, so everything happens during your working week.',
      },
    ],
    // Shown first in the FAQ only while the founding-client offer is open.
    foundingFaq: {
      question: 'Have you built sites for real clients?',
      answer:
        'Not under the Gelum name yet: the projects on this page are concept sites, built to show how we work. That’s why, until {ends}, our first three clients get {discount}% off any plan, in exchange for a testimonial and permission to publish their site as a case study.',
    },
  },
  work: {
    eyebrow: 'Work',
    title: 'Concept projects',
    lead: 'Sample sites for fictional Australian trades businesses, built to show how we approach a project. The businesses are made up; you can open each site and try it.',
    concept: 'Concept project for a fictional business',
    demoLink: 'View demo',
    screenshotAlt: 'Home page of the {name} concept site',
    caseStudy: { problem: 'Problem', decisions: 'Decisions', result: 'Result' },
    load: 'Main content loads in {seconds} s on mobile.',
    comparison:
      'In our test of {sites} Australian trade websites on {date}, the median mobile load time was {median} s (from {min} s to {max} s), against {demos} s for our two demos. A small sample, not representative of all trade websites, measured the same way: Lighthouse {version}, mobile, median of 3 runs per site, Largest Contentful Paint.',
    score: 'Lighthouse mobile, median of 3 runs',
    performance: 'performance',
    accessibility: 'accessibility',
    measured: 'measured',
  },
  // Two-person About (v2 wireframes, approved on 2026-10-20). It is shown only
  // when every member has a bio and a photo; until then `about` (below) is used.
  team: {
    eyebrow: 'About',
    title: 'Who you’ll work with.',
    lead: 'You work directly with the two people who design and build your site.',
    members: [
      {
        name: 'Luisa Ferrari Romero',
        role: 'UX/UI design · QA',
        // Edited from Luisa's draft (2026-10-21); pending her and the owner's approval.
        bio: 'Designs every site, from page structure to interface and copy, and tests it before launch. Background in UX/UI design, UX writing and QA testing.',
        details: 'English C2',
        photo: { src: '/team/luisa-v2.webp', width: 400, height: 500 },
        links: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luisa-maria-ferrari-romero-7950b2271/' },
        ],
      },
      {
        name: 'Gonzalo Murua',
        role: 'Development',
        bio: 'Full-stack developer. Builds every site and handles hosting, launch and support.',
        details: 'Next.js · TypeScript · Tailwind',
        photo: { src: '/profile.webp', width: 960, height: 960 },
        links: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gonzalo-enzo-murua-34a363228/' },
          { label: 'GitHub', href: 'https://github.com/gonzaloPukiMurua' },
        ],
      },
    ] satisfies TeamMember[],
    meta: 'Based in Argentina · Calls 9am–12pm Sydney time (11am–2pm NZ)',
  },
  // Single-person fallback (v1 layout) while the team is incomplete.
  about: {
    eyebrow: 'About',
    title: 'Hi, I’m Gonzalo.',
    paragraphs: [
      'I’m a full-stack developer who designs and builds custom websites for small businesses.',
      'I keep you updated in writing, so the project moves without daily meetings.',
    ],
    meta: 'Based in Argentina · Calls 9am–12pm Sydney time (11am–2pm NZ)',
    photoAlt: 'Portrait of Gonzalo Murua',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Tell us about your business.',
    lead: 'We reply within one business day (Australian and New Zealand time). No obligation.',
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
        other: 'Not sure yet',
        error: 'Please choose an option.',
      },
      budget: {
        label: 'Budget (optional)',
        placeholder: 'Choose a range',
        options: [
          'Under AUD 2,000',
          'AUD 2,000–3,500',
          'AUD 3,500–5,000',
          'AUD 5,000+',
          'Not sure yet',
        ],
      },
      message: { label: 'Project details', error: 'Please tell us a bit about your project.' },
    },
    submit: 'Send message',
    privacyNotice: 'We’ll only use your details to reply to your enquiry. See our',
    privacyLink: 'Privacy Policy',
    submitting: 'Sending…',
    success: {
      title: 'Thanks, your message is in.',
      body: 'We’ll reply by email within one business day (Australian and New Zealand time).',
      book: 'Want to talk sooner?',
    },
    error: 'Your message could not be sent. Please try again, or email us directly at',
    direct: 'Prefer email?',
  },
  footer: {
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
  },
};
