import type { MouseEventHandler } from 'react';
import { content, contactLinks } from '@/content';

type Props = {
  /** "full": "Book a free 15-min call"; "short": "Book a call". */
  variant?: 'full' | 'short';
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

/**
 * The booking CTA. It opens the owner's Calendly page in a new tab; until that
 * URL is set (`contactLinks.calendly`), it honestly falls back to the contact form.
 */
export default function BookingLink({ variant = 'full', className, onClick }: Props) {
  const { cta } = content;

  if (!contactLinks.calendly) {
    return (
      <a href="#contact" onClick={onClick} className={className}>
        {cta.quote}
      </a>
    );
  }

  return (
    <a
      href={contactLinks.calendly}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {variant === 'full' ? cta.book : cta.bookShort}
      <span className="sr-only"> {cta.newTab}</span>
    </a>
  );
}
