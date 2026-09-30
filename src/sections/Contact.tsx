import ContactForm from '@/components/ContactForm';
import SectionHeader from '@/components/ui/SectionHeader';
import { card, pageContainer, sectionSpacing, textLink } from '@/components/ui/styles';
import { contactLinks, tiers } from '@/content';
import type { Dictionary } from '@/content/types';

export default function Contact({ dictionary }: { dictionary: Dictionary }) {
  const { contact, services } = dictionary;
  const serviceOptions = [
    ...tiers.map((id) => services.tiers[id].name),
    contact.fields.service.other,
  ];

  return (
    <section suppressHydrationWarning id="contact" aria-labelledby="contact-title" className={`${pageContainer} ${sectionSpacing} reveal`}>
      <SectionHeader id="contact" eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className={`${card} border-line p-6 md:p-8 lg:col-span-8`}>
          <ContactForm copy={contact} serviceOptions={serviceOptions} email={contactLinks.email} />
        </div>
        <div className="space-y-6 lg:col-span-4">
          <div>
            <p className="font-medium">{contact.direct}</p>
            <p className="mt-1">
              <a href={`mailto:${contactLinks.email}`} className={`${textLink} break-all`}>
                {contactLinks.email}
              </a>
            </p>
            <p className="mt-2 text-muted">{contact.replyTime}</p>
          </div>
          <p>
            <a href={contactLinks.linkedin} className={textLink}>
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
