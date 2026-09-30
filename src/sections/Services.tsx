import SectionHeader from '@/components/ui/SectionHeader';
import {
  buttonSecondary,
  card,
  monoLabel,
  pageContainer,
  sectionSpacing,
} from '@/components/ui/styles';
import { basePrices, formatPrice, popularTier, tiers } from '@/content';
import type { Dictionary, Locale } from '@/content/types';

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Services({ locale, dictionary }: Props) {
  const { services } = dictionary;

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className={`${pageContainer} ${sectionSpacing} reveal`}
    >
      <SectionHeader
        id="services"
        eyebrow={services.eyebrow}
        title={services.title}
        lead={services.lead}
      />
      {/* 3 columns only from lg: at tablet width the cards get too narrow. */}
      <ul className="grid gap-6 lg:grid-cols-3">
        {tiers.map((id) => {
          const tier = services.tiers[id];
          const popular = id === popularTier;
          return (
            <li
              key={id}
              className={`${card} flex flex-col p-6 md:p-8 ${popular ? 'border-accent' : 'border-line'}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-card font-semibold">{tier.name}</h3>
                {popular && <p className={`${monoLabel} text-accent`}>{services.popular}</p>}
              </div>
              {/* "from" on its own line: inline, it wraps differently per card and breaks alignment. */}
              <p className="mt-4 flex flex-col">
                <span className="text-muted">{services.from}</span>
                <span className="text-4xl font-semibold tracking-tight">
                  {formatPrice(basePrices[id], locale)}
                </span>
              </p>
              <p className={`${monoLabel} mt-2 text-muted`}>{tier.duration}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span aria-hidden="true" className="text-accent">
                      —
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`${buttonSecondary} mt-8`}>
                {services.cta}
                <span className="sr-only">: {tier.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
