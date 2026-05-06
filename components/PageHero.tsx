import type { ReactNode } from 'react';
import { BracketedEyebrow } from './Primitives';

type Props = {
  eyebrow: string;
  headline: string;
  sub?: ReactNode | string[];
  /** Heading tag for the headline. Default 'h1' for routes without a PageBanner.
   *  Routes that already render a PageBanner (which owns the page h1) pass 'h2'
   *  to keep the heading order sequential. */
  as?: 'h1' | 'h2';
};

export function PageHero({ eyebrow, headline, sub, as = 'h1' }: Props) {
  const paragraphs = Array.isArray(sub) ? sub : sub ? [sub] : [];
  const Heading = as;
  return (
    <section className="np-page-hero">
      <div className="np-page-hero-inner">
        <BracketedEyebrow color="var(--accent-text)">{eyebrow}</BracketedEyebrow>
        <Heading>{headline}</Heading>
        {paragraphs.map((p, i) => (
          <p key={i} className="lead">{p}</p>
        ))}
      </div>
    </section>
  );
}
