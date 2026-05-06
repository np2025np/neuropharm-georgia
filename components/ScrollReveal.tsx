'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Wraps content in a one-shot fade-up reveal.
 *
 * - Initially hidden via the .np-reveal class in globals.css (opacity:0 +
 *   translateY(20px)).
 * - Adds .is-visible the first time the wrapper is at least `threshold`
 *   (default 15%) inside the viewport, then disconnects the observer so
 *   scrolling back up doesn't replay.
 * - Honors prefers-reduced-motion: reveals immediately with no observer.
 *
 * Children stay server-rendered — Next 16 streams server-component
 * children inside client boundaries, so SSR is preserved.
 */
export function ScrollReveal({
  children,
  threshold = 0.15,
}: {
  children: ReactNode;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className="np-reveal">
      {children}
    </div>
  );
}
