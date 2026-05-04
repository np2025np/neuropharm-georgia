import type { ReactNode } from 'react';
import { BracketedEyebrow } from './Primitives';

type Props = { eyebrow: string; headline: string; sub?: ReactNode };

export function PageHero({ eyebrow, headline, sub }: Props) {
  return (
    <section className="np-page-hero">
      <div className="np-page-hero-inner">
        <BracketedEyebrow color="var(--accent)">{eyebrow}</BracketedEyebrow>
        <h1>{headline}</h1>
        {sub && <p className="lead">{sub}</p>}
      </div>
    </section>
  );
}
