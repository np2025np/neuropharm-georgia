'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const GeoWorldMapInner = dynamic(() => import('./GeoWorldMapInner'), {
  ssr: false,
  loading: () => <div className="np-geo-map-placeholder" aria-hidden="true" />,
});

type Props = {
  regionAName?: string;
  regionBName?: string;
};

/**
 * Lazy + client-only wrapper around the react-simple-maps world map.
 *
 * - SSR is skipped (the underlying d3-geo path math is heavy and the Geography
 *   component reads DOM measurements during layout effects).
 * - The dynamic chunk + topojson are not loaded until the section is within
 *   200px of the viewport (IntersectionObserver). Pages without the map (or
 *   above-the-fold paints) don't pay the cost.
 */
export function GeoWorldMap({ regionAName, regionBName }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="np-geo-map-frame">
      {shouldLoad ? (
        <GeoWorldMapInner regionAName={regionAName} regionBName={regionBName} />
      ) : (
        <div className="np-geo-map-placeholder" aria-hidden="true" />
      )}
    </div>
  );
}
