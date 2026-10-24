import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import { card, monoLabel, pageContainer, sectionSpacing, textLink } from '@/components/ui/styles';
import { content, type TeamMember } from '@/content';

type CompleteMember = TeamMember & { bio: string; photo: NonNullable<TeamMember['photo']> };

const isComplete = (member: TeamMember): member is CompleteMember =>
  member.bio !== null && member.photo !== null;

export default function About() {
  const members: TeamMember[] = content.team.members;
  // The two-person layout ships only with real bios and photos: no placeholders.
  const team = members.every(isComplete) ? (members as CompleteMember[]) : null;

  return (
    <section
      suppressHydrationWarning
      id="about"
      aria-labelledby="about-title"
      className={`${pageContainer} ${sectionSpacing} reveal`}
    >
      {team ? <Team members={team} /> : <Solo />}
    </section>
  );
}

function Team({ members }: { members: CompleteMember[] }) {
  const { team } = content;

  return (
    <>
      <SectionHeader id="about" eyebrow={team.eyebrow} title={team.title} lead={team.lead} />
      <ul className="grid gap-6 md:grid-cols-2">
        {members.map((member) => (
          <li key={member.name} className={`${card} border-line p-6 md:p-8`}>
            {/* Source photos may be square; they are cropped to 4:5 here. */}
            <Image
              src={member.photo.src}
              width={member.photo.width}
              height={member.photo.height}
              alt={`Portrait of ${member.name}`}
              className="aspect-[4/5] w-2/3 rounded-card border border-line object-cover md:w-1/2"
            />
            <h3 className="mt-6 text-card font-semibold">{member.name}</h3>
            <p className={`${monoLabel} mt-1 text-accent`}>{member.role}</p>
            <p className="mt-4 text-muted">{member.bio}</p>
            <p className="mt-4 font-mono text-label text-muted">{member.details}</p>
            {member.links.length > 0 && (
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {member.links.map((link) => (
                  <a key={link.href} href={link.href} className={textLink}>
                    {link.label}
                    <span className="sr-only">: {member.name}</span>
                  </a>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-8 font-mono text-label text-muted">{team.meta}</p>
    </>
  );
}

// v1 single-person layout: the fallback while the team is incomplete.
function Solo() {
  const { about } = content;

  return (
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
  );
}
