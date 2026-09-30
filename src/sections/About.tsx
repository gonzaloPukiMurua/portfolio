import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import { pageContainer, sectionSpacing } from '@/components/ui/styles';
import type { Dictionary } from '@/content/types';

export default function About({ dictionary }: { dictionary: Dictionary }) {
  const { about } = dictionary;

  return (
    <section id="about" aria-labelledby="about-title" className={`${pageContainer} ${sectionSpacing} reveal`}>
      <div className="grid items-center gap-10 md:grid-cols-12 lg:gap-16">
        <div className="md:col-span-5 lg:col-span-4">
          {/* The source photo is square; it is cropped to 4:5 here. */}
          <Image
            src="/profile.webp"
            width={960}
            height={960}
            alt={about.photoAlt}
            className="aspect-[4/5] w-full max-w-72 rounded-card border border-line object-cover md:max-w-none"
          />
        </div>
        <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
          <SectionHeader id="about" eyebrow={about.eyebrow} title={about.title} spacing="tight" />
          <div className="max-w-2xl space-y-4 text-lead text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 font-mono text-label text-muted">{about.meta}</p>
        </div>
      </div>
    </section>
  );
}
