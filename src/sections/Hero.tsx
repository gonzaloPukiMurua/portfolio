import { buttonPrimary, monoLabel, pageContainer, textLink } from '@/components/ui/styles';
import type { Dictionary } from '@/content/types';

export default function Hero({ dictionary }: { dictionary: Dictionary }) {
  const { hero } = dictionary;

  return (
    <section aria-labelledby="hero-title" className={`${pageContainer} pt-10 pb-16 md:pt-24 md:pb-24`}>
      <div className="max-w-3xl">
        <p
          className={`${monoLabel} inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-muted`}
        >
          <span aria-hidden="true" className="size-2 rounded-full bg-ok" />
          {hero.availability}
        </p>
        <h1 id="hero-title" className="mt-6 text-display font-semibold">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lead text-muted">{hero.lead}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href="#contact" className={buttonPrimary}>
            {hero.primaryCta}
          </a>
          <a href="#work" className={textLink}>
            {hero.secondaryCta} <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="mt-10 font-mono text-label text-muted">{hero.trust}</p>
      </div>
    </section>
  );
}
