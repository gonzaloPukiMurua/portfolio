// Plain-language policy describing what the code actually does (checked on
// 2026-11-02: Formspree, Hostinger, a Calendly link, self-hosted fonts, no
// cookies, no analytics). It is a template, not legal advice: a professional
// review is recommended. If a provider changes in the code, update this too.
// OWNER-CONFIRM: how long project and payment records are kept (How long we
// keep it). To settle with an accountant once there is a first sale.

export const privacyUpdated = '2026-11-03';

type Link = { label: string; href: string };

export const privacy: {
  title: string;
  lead: string;
  updated: string;
  sections: { heading: string; paragraphs?: string[]; items?: string[]; links?: Link[] }[];
} = {
  title: 'Privacy Policy',
  lead: 'What happens to your details when you use this site or our demo sites.',
  updated: 'Last updated',
  sections: [
    {
      heading: 'Who we are',
      paragraphs: [
        'Gelum Digital is run by Gonzalo Murua and based in Argentina. This policy covers gelumdigital.online and our concept demo sites, sparkline.gelumdigital.online and voltline.gelumdigital.online. Questions go to hello@gelumdigital.online.',
      ],
    },
    {
      heading: 'What we collect',
      items: [
        'Contact form: your name, email, what you need, your budget range if you choose one, and your project details.',
        'Demo site forms: what you type in them. Sparkline asks for your name, phone, suburb and message. Voltline asks about the service, property, town and urgency, then a description of the job, your name, phone, email and, optionally, your business. These messages come to us, not to an electrician.',
        'Booking a call: Calendly collects the details you enter and sends them to us, under its own privacy policy.',
        'Emails you send us.',
        'Public business details: we sometimes contact businesses about their websites. For that we use contact details published on their own websites or in public directories, and what we noticed on their public pages.',
        'Technical data: our hosting provider processes data such as IP addresses and browser details to serve the site and keep it secure.',
      ],
    },
    {
      heading: 'Why we use it',
      paragraphs: [
        'To reply to you, prepare quotes and deliver the work you hire us for, and to contact businesses about their websites, which we stop as soon as you ask. We don’t sell your details, and we don’t add what you send through a form to marketing lists.',
      ],
    },
    {
      heading: 'Who we share it with',
      paragraphs: ['Only the providers that make this work. Some of them may process data outside Australia and Argentina.'],
      items: [
        'Formspree delivers form messages to our inbox.',
        'Hostinger hosts the sites and our email.',
        'Calendly handles call bookings.',
        'PayPal, Payoneer or Prex process your payment if you hire us.',
      ],
    },
    {
      heading: 'Cookies and analytics',
      paragraphs: [
        'This site and the demo sites don’t set cookies and don’t use analytics or advertising trackers. Calendly is a separate site and may use its own.',
      ],
    },
    {
      heading: 'How long we keep it',
      paragraphs: [
        'We keep enquiries while we need them to reply, and for up to 24 months after our last contact, unless you ask us to delete them sooner. If you hire us, we keep project and payment records for as long as tax and accounting rules require. If you ask us not to contact you again, we keep only what we need to respect that.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'You can ask us to show you, correct or delete your details, or to stop contacting you, by writing to hello@gelumdigital.online. We reply within 30 days. You can also complain to the data protection authority in your country:',
      ],
      links: [
        { label: 'OAIC (Australia)', href: 'https://www.oaic.gov.au/' },
        { label: 'Office of the Privacy Commissioner (New Zealand)', href: 'https://www.privacy.org.nz/' },
        { label: 'AAIP (Argentina)', href: 'https://www.argentina.gob.ar/aaip' },
      ],
    },
    {
      heading: 'Security',
      paragraphs: [
        'Our sites use HTTPS, and access to our inbox and accounts is limited to Gonzalo Murua. No system is perfectly secure, so please don’t send passwords or payment details through a form.',
      ],
    },
    {
      heading: 'Changes',
      paragraphs: ['If we change this policy, we update it here and change the date at the top of this page.'],
    },
  ],
};
