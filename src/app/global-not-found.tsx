import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from './fonts';
import { buttonPrimary, monoLabel, pageContainer } from '@/components/ui/styles';
import { localePath } from '@/content/types';

export const metadata: Metadata = {
  title: 'Page not found | Gelum Digital',
  robots: { index: false },
};

// One 404 for both languages (there is no shared root layout to build it from).
export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <main className={`${pageContainer} flex min-h-screen flex-col justify-center gap-6 py-16`}>
          <p className={`${monoLabel} text-muted`}>404</p>
          <h1 className="text-title font-semibold">This page doesn’t exist.</h1>
          <p lang="es" className="text-lead text-muted">
            Esta página no existe.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href={localePath.en} className={buttonPrimary}>
              Back to home
            </a>
            <a href={localePath.es} lang="es" className="text-accent underline underline-offset-4">
              Volver al inicio
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
