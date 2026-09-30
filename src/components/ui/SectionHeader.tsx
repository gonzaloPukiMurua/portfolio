import { monoLabel } from '@/components/ui/styles';

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  /** Space below the header; sections with a side-by-side layout use less. */
  spacing?: 'default' | 'tight';
};

/** Mono eyebrow, h2 (labelled by `${id}-title`) and optional lead. */
export default function SectionHeader({ id, eyebrow, title, lead, spacing = 'default' }: Props) {
  return (
    <header className={`max-w-2xl ${spacing === 'tight' ? 'mb-6' : 'mb-12'}`}>
      <p className={`${monoLabel} mb-3 text-accent`}>{eyebrow}</p>
      <h2 id={`${id}-title`} className="text-title font-semibold">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lead text-muted">{lead}</p>}
    </header>
  );
}
