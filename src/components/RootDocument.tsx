import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { fontVariables } from '@/app/fonts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { dictionaries, siteUrl } from '@/content';
import { localePath, type Locale } from '@/content/types';

export function localeMetadata(locale: Locale): Metadata {
  const { meta } = dictionaries[locale];
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath[locale],
      languages: {
        en: localePath.en,
        es: localePath.es,
        'x-default': localePath.en,
      },
    },
  };
}

type Props = {
  locale: Locale;
  children: ReactNode;
};

/** The <html> document shared by each language's root layout. */
export default function RootDocument({ locale, children }: Props) {
  const dictionary = dictionaries[locale];

  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <a
          href="#main"
          className="sr-only rounded-control bg-ink px-4 py-2 text-sm text-surface focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          {dictionary.skipLink}
        </a>
        <Header locale={locale} dictionary={dictionary} />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
