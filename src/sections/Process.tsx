import SectionHeader from '@/components/ui/SectionHeader';
import { card, monoLabel, pageContainer, sectionSpacing } from '@/components/ui/styles';
import { content } from '@/content';

export default function Process() {
  const { process } = content;

  return (
    <section
      suppressHydrationWarning
      id="process"
      aria-labelledby="process-title"
      className={`${pageContainer} ${sectionSpacing} reveal`}
    >
      <SectionHeader id="process" eyebrow={process.eyebrow} title={process.title} />

      {/* Vertical list on mobile, one row of five from lg. */}
      <ol className="grid gap-6 border-b border-line pb-12 lg:grid-cols-5 lg:gap-8">
        {process.steps.map((step, index) => (
          <li key={step.title} className="flex gap-4 lg:flex-col lg:gap-3">
            <span aria-hidden="true" className={`${monoLabel} pt-0.5 text-accent`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="mt-1 text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-12 text-card font-semibold">{process.faqTitle}</h3>
      {/* Native <details>: works without JavaScript and with the keyboard. */}
      <div className={`${card} mt-6 divide-y divide-line border-line`}>
        {process.faq.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-4 font-medium [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="font-mono text-lead text-accent transition-transform duration-150 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-3xl px-6 pb-5 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
