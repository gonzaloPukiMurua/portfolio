'use client';

import type { MouseEvent } from 'react';
import { localePath, locales, type Locale } from '@/content/types';

type Props = {
  current: Locale;
  label: string;
};

// Plain links (not next/link): each language has its own root layout,
// so switching is always a full page load anyway.
export default function LanguageToggle({ current, label }: Props) {
  // Keep the visitor on the same section when switching language.
  const keepSection = (event: MouseEvent<HTMLAnchorElement>) => {
    const { hash } = window.location;
    if (!hash) return;
    event.preventDefault();
    window.location.assign(`${event.currentTarget.getAttribute('href')}${hash}`);
  };

  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-2 font-mono text-label">
        {locales.map((locale, index) => (
          <li key={locale} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-line">
                |
              </span>
            )}
            <a
              href={localePath[locale]}
              hrefLang={locale}
              lang={locale}
              aria-current={locale === current ? 'page' : undefined}
              onClick={keepSection}
              className={
                locale === current
                  ? 'text-ink'
                  : 'text-muted transition-colors duration-150 hover:text-ink'
              }
            >
              {locale.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
