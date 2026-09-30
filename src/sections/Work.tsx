import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import { card, monoLabel, pageContainer, sectionSpacing, textLink } from '@/components/ui/styles';
import { projects, type Project } from '@/content/projects';
import type { Dictionary, Locale } from '@/content/types';

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Work({ locale, dictionary }: Props) {
  const { work } = dictionary;
  // With an odd count, the first card spans both columns so no card sits alone.
  const featureFirst = projects.length % 2 === 1;

  return (
    <section id="work" aria-labelledby="work-title" className={`${pageContainer} ${sectionSpacing} reveal`}>
      <SectionHeader id="work" eyebrow={work.eyebrow} title={work.title} lead={work.lead} />
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            copy={work}
            featured={featureFirst && index === 0}
          />
        ))}
      </ul>
    </section>
  );
}

type CardProps = {
  project: Project;
  locale: Locale;
  copy: Dictionary['work'];
  featured: boolean;
};

function ProjectCard({ project, locale, copy, featured }: CardProps) {
  return (
    <li
      className={`${card} overflow-hidden border-line transition-colors duration-150 hover:border-accent ${
        featured ? 'md:col-span-2 lg:grid lg:grid-cols-2' : 'flex flex-col'
      }`}
    >
      <div
        className={`border-line ${featured ? 'border-b lg:border-r lg:border-b-0' : 'border-b'}`}
      >
        <Image
          src={project.image.src}
          width={project.image.width}
          height={project.image.height}
          alt={copy.screenshotAlt.replace('{name}', project.name)}
          className={`aspect-[16/10] w-full object-cover object-top ${featured ? 'lg:h-full' : ''}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className={`${monoLabel} text-muted`}>
          <span className="text-accent">{copy.concept}</span> · {project.category[locale]}
        </p>
        <h3 className="mt-3 text-card font-semibold">{project.name}</h3>
        <p className="mt-3 text-muted">{project.description[locale]}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full bg-accent-tint px-2.5 py-1 font-mono text-label text-accent"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-6">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
            {copy.demoLink}
            <span className="sr-only">
              : {project.name} {copy.newTab}
            </span>{' '}
            <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </li>
  );
}
