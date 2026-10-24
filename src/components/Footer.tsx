import { pageContainer } from '@/components/ui/styles';
import { content, contactLinks } from '@/content';

const footerLink = 'transition-colors duration-150 hover:text-ink';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div
        className={`${pageContainer} flex flex-col gap-4 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between`}
      >
        <p>
          © {new Date().getFullYear()} Gelum Digital. {content.footer.rights}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={`mailto:${contactLinks.email}`} className={footerLink}>
            Email
          </a>
          <a href={contactLinks.linkedin} className={footerLink}>
            LinkedIn
          </a>
          <a href={contactLinks.github} className={footerLink}>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
