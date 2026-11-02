import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import { card, monoLabel, pageContainer, sectionSpacing, textLink } from '@/components/ui/styles';
import { content } from '@/content';
import { projects, type Project } from '@/content/projects';

const measuredDate = new Intl.DateTimeFormat('en-AU', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export default function Work() {
  const { work } = content;
  // With an odd count, the first card spans both columns so no card sits alone.
  const featureFirst = projects.length % 2 === 1;

  return (
    <section suppressHydrationWarning id="work" aria-labelledby="work-title" className={`${pageContainer} ${sectionSpacing} reveal`}>
      <SectionHeader id="work" eyebrow={work.eyebrow} title={work.title} lead={work.lead} />
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} featured={featureFirst && index === 0} />
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const { work, cta } = content;
  const { lighthouse } = project;

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
          alt={work.screenshotAlt.replace('{name}', project.name)}
          className={`aspect-[16/10] w-full object-cover object-top ${featured ? 'lg:h-full' : ''}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className={`${monoLabel} text-muted`}>
          <span className="text-accent">{work.concept}</span> · {project.category}
        </p>
        <h3 className="mt-3 text-card font-semibold">{project.name}</h3>
        <p className="mt-3 text-muted">{project.description}</p>
        {/* Case study: the problem we measured, what we decided, what it achieved. */}
        <dl className="mt-6 space-y-4 border-t border-line pt-5 text-sm">
          <div>
            <dt className={`${monoLabel} text-muted`}>{work.caseStudy.problem}</dt>
            <dd className="mt-1">{project.problem}</dd>
          </div>
          <div>
            <dt className={`${monoLabel} text-muted`}>{work.caseStudy.decisions}</dt>
            <dd className="mt-1">
              <ul className="list-disc space-y-1 pl-5 marker:text-accent">
                {project.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className={`${monoLabel} text-muted`}>{work.caseStudy.result}</dt>
            <dd className="mt-1">{project.result}</dd>
            {lighthouse && (
              <dd className="mt-1 font-mono text-label text-muted">
                {work.score}: {lighthouse.performance} {work.performance} · {lighthouse.accessibility}{' '}
                {work.accessibility} · {work.measured}{' '}
                <time dateTime={lighthouse.measured}>
                  {measuredDate.format(new Date(lighthouse.measured))}
                </time>
              </dd>
            )}
          </div>
        </dl>
        <p className="mt-5 text-sm text-muted">{project.credits}</p>
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
            {work.demoLink}
            <span className="sr-only">
              : {project.name} {cta.newTab}
            </span>{' '}
            <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </li>
  );
}
