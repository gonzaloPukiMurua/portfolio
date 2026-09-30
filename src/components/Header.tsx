'use client';

import { useEffect, useRef, useState } from 'react';
import LanguageToggle from '@/components/LanguageToggle';
import { buttonPrimary, pageContainer } from '@/components/ui/styles';
import { localePath, type Dictionary, type Locale, type SectionId } from '@/content/types';

const navSections: SectionId[] = ['services', 'work', 'about', 'contact'];

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Header({ locale, dictionary }: Props) {
  const { nav, language } = dictionary;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      menuButton.current?.focus();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-surface transition-colors duration-150 ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className={`${pageContainer} flex h-16 items-center justify-between gap-6`}>
        <a href={localePath[locale]} className="font-semibold tracking-tight whitespace-nowrap">
          Gelum Digital
        </a>

        <nav aria-label={nav.label} className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {navSections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-muted transition-colors duration-150 hover:text-ink"
                >
                  {nav.sections[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <LanguageToggle current={locale} label={language.label} />
          {/* max-md:hidden, not hidden: a variant beats the button's own inline-flex. */}
          <a href="#contact" className={`${buttonPrimary} max-md:hidden`}>
            {nav.cta}
          </a>
          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="font-mono text-label uppercase md:hidden"
          >
            {menuOpen ? nav.menuClose : nav.menuOpen}
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!menuOpen} className="border-t border-line md:hidden">
        <nav aria-label={nav.label} className={`${pageContainer} py-6`}>
          <ul className="flex flex-col gap-1 text-lead">
            {navSections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={closeMenu} className="block py-2">
                  {nav.sections[id]}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={closeMenu} className={`${buttonPrimary} mt-6 w-full`}>
            {nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
