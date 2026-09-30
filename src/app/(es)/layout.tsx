import type { ReactNode } from 'react';
import RootDocument, { localeMetadata } from '@/components/RootDocument';

export const metadata = localeMetadata('es');

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
