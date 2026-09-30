import { dictionaries } from '@/content';
import type { Locale } from '@/content/types';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Work from '@/sections/Work';

export default function HomePage({ locale }: { locale: Locale }) {
  const dictionary = dictionaries[locale];

  return (
    <>
      <Hero dictionary={dictionary} />
      <Services locale={locale} dictionary={dictionary} />
      <Work locale={locale} dictionary={dictionary} />
      <About dictionary={dictionary} />
      <Contact dictionary={dictionary} />
    </>
  );
}
