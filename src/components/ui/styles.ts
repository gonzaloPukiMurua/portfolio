// Shared class lists for elements that are not worth a component yet.
// Border colors are left out of `card` on purpose: set exactly one per use,
// because two border-color utilities on one element resolve unpredictably.

export const pageContainer = 'mx-auto w-full max-w-page px-5 md:px-8';

export const sectionSpacing = 'py-16 md:py-24';

const buttonBase =
  'inline-flex items-center justify-center rounded-control px-4 py-2.5 text-sm font-medium transition-colors duration-150';

export const buttonPrimary = `${buttonBase} bg-accent text-on-accent hover:bg-accent-strong`;

export const buttonSecondary = `${buttonBase} border border-ink text-ink hover:bg-ink hover:text-surface`;

export const textLink =
  'font-medium text-accent underline decoration-1 underline-offset-4 transition-colors duration-150 hover:text-accent-strong';

export const monoLabel = 'font-mono text-label uppercase';

export const card = 'rounded-card border bg-surface';
