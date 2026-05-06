'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import worldAtlas from 'world-atlas/countries-110m.json';

type Props = {
  regionAName?: string;
  regionBName?: string;
};

const EUROPE: [number, number] = [10, 50];
const INDIA: [number, number] = [78, 22];

/**
 * Geographic world map (replaces the earlier polygonal placeholder).
 * - Equal-Earth projection — modern + roughly area-accurate.
 * - countries-110m topojson (~110KB raw, smaller after gzip + tree-shake).
 * - No internal borders, single light grey fill (matches B2B minimalist style).
 * - Two coral markers (Europe + India) with label and pulse animation.
 *
 * Loaded only on the client (next/dynamic ssr:false from the wrapper) so the
 * react-simple-maps + d3-geo + topojson chunks don't block initial paint.
 */
export default function GeoWorldMapInner({
  regionAName = 'Europe',
  regionBName = 'India',
}: Props) {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{ scale: 165, center: [25, 18] }}
      width={980}
      height={520}
      style={{ width: '100%', height: 'auto' }}
      role="img"
      aria-label="Map of supplier regions: Europe and India"
    >
      <Geographies geography={worldAtlas}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              className="np-geo-country"
              tabIndex={-1}
            />
          ))
        }
      </Geographies>

      <RegionMarker coordinates={EUROPE} label={regionAName} />
      <RegionMarker coordinates={INDIA} label={regionBName} />
    </ComposableMap>
  );
}

function RegionMarker({ coordinates, label }: { coordinates: [number, number]; label: string }) {
  return (
    <Marker coordinates={coordinates}>
      <line className="np-geo-marker-tether" x1={0} y1={-10} x2={0} y2={-26} />
      <circle className="np-geo-marker-pulse" r={18} />
      <circle className="np-geo-marker-dot" r={6} />
      <text className="np-geo-marker-label" textAnchor="middle" y={-32}>
        {label}
      </text>
    </Marker>
  );
}
