import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content';
import { localePath } from '@/content/types';

export const dynamic = 'force-static';

// Real routes only: `#section` URLs are not separate pages for search engines.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: `${siteUrl}${localePath.en}`,
    es: `${siteUrl}${localePath.es}`,
  };

  return [
    { url: languages.en, changeFrequency: 'monthly', priority: 1, alternates: { languages } },
    { url: languages.es, changeFrequency: 'monthly', priority: 0.9, alternates: { languages } },
  ];
}
