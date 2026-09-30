import type { ReactNode } from 'react';
import RootDocument, { localeMetadata } from '@/components/RootDocument';

export const metadata = localeMetadata('en');

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
