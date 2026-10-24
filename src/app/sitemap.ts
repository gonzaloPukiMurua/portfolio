import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content';

export const dynamic = 'force-static';

// Real routes only: `#section` URLs are not separate pages for search engines.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/`, changeFrequency: 'monthly', priority: 1 }];
}
