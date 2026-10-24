import type { Metadata } from 'next';
import Link from 'next/link';
import { buttonPrimary, monoLabel, pageContainer } from '@/components/ui/styles';

export const metadata: Metadata = {
  title: 'Page not found | Gelum Digital',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className={`${pageContainer} flex min-h-[60vh] flex-col justify-center gap-6 py-16`}>
      <p className={`${monoLabel} text-muted`}>404</p>
      <h1 className="text-title font-semibold">This page doesn’t exist.</h1>
      <p>
        <Link href="/" className={buttonPrimary}>
          Back to home
        </Link>
      </p>
    </section>
  );
}
