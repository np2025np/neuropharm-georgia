'use client';

import { useEffect, useState } from 'react';

/**
 * Scrollspy hook. Observes the elements with the given IDs and returns the
 * topmost ID currently visible inside the upper-middle band of the viewport.
 *
 * - When `enabled` is false (e.g. on subpages), returns null and does no work.
 * - rootMargin biases toward the upper-middle of the viewport so the active
 *   state changes as a section enters, not as it leaves the bottom.
 * - When no observed section is in the band (e.g. user is in PartnersCTA, the
 *   footer, or between sections that aren't observed), returns null so the
 *   caller can suppress nav highlighting.
 */
export function useScrollspy(ids: readonly string[], enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }

    const elements: Element[] = [];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) elements.push(el);
    }
    if (elements.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const top = ids.find((id) => visible.has(id));
        setActive(top ?? null);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [enabled, ids]);

  return active;
}
