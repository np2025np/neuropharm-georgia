import type { ReactNode } from 'react';
import { BracketedEyebrow } from './Primitives';

type Props = { eyebrow: string; headline: string; sub?: ReactNode | string[] };

export function PageHero({ eyebrow, headline, sub }: Props) {
  const paragraphs = Array.isArray(sub) ? sub : sub ? [sub] : [];
  return (
    <section className="np-page-hero">
      <div className="np-page-hero-inner">
        <BracketedEyebrow color="var(--accent)">{eyebrow}</BracketedEyebrow>
        <h1>{headline}</h1>
        {paragraphs.map((p, i) => (
          <p key={i} className="lead">{p}</p>
        ))}
      </div>
    </section>
  );
}
