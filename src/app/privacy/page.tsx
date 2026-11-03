import type { Metadata } from 'next';
import { pageContainer, textLink } from '@/components/ui/styles';
import { privacy, privacyUpdated } from '@/content/privacy';

const description = 'How Gelum Digital handles your details: what we collect, why, who we share it with and your rights.';

export const metadata: Metadata = {
  title: `${privacy.title} | Gelum Digital`,
  description,
  alternates: { canonical: '/privacy/' },
  openGraph: { title: `${privacy.title} | Gelum Digital`, description, url: '/privacy/' },
};

const updatedDate = new Intl.DateTimeFormat('en-AU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
}).format(new Date(privacyUpdated));

export default function PrivacyPage() {
  return (
    <div className={pageContainer}>
      <article className="max-w-3xl py-16 md:py-24">
        <h1 className="text-title font-semibold">{privacy.title}</h1>
        <p className="mt-4 text-lead text-muted">{privacy.lead}</p>
        <p className="mt-4 text-sm text-muted">
          {privacy.updated}: <time dateTime={privacyUpdated}>{updatedDate}</time>
        </p>

        {privacy.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-card font-semibold">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-3">
                {paragraph}
              </p>
            ))}
            {section.items && (
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.links && (
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={textLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>
    </div>
  );
}
