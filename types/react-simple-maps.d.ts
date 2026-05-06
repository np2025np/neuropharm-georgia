// Minimal type declarations for react-simple-maps v3 — the package does not
// ship .d.ts files. Only the surface we use here is declared. Expand if more
// of the API gets used.

declare module 'react-simple-maps' {
  import type { ComponentType, ReactNode, SVGProps } from 'react';

  export interface ComposableMapProps extends SVGProps<SVGSVGElement> {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      rotate?: [number, number, number?];
    };
  }
  export const ComposableMap: ComponentType<ComposableMapProps & { children?: ReactNode }>;

  export interface GeographyDatum {
    rsmKey: string;
    properties: Record<string, unknown>;
    geometry: unknown;
  }

  export interface GeographiesProps {
    geography: unknown;
    children: (args: { geographies: GeographyDatum[] }) => ReactNode;
  }
  export const Geographies: ComponentType<GeographiesProps>;

  export interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: GeographyDatum;
  }
  export const Geography: ComponentType<GeographyProps>;

  export interface MarkerProps extends SVGProps<SVGGElement> {
    coordinates: [number, number];
    children?: ReactNode;
  }
  export const Marker: ComponentType<MarkerProps>;
}

declare module 'world-atlas/countries-110m.json' {
  const data: {
    type: 'Topology';
    objects: Record<string, unknown>;
    arcs: number[][][];
    bbox?: number[];
    transform?: { scale: number[]; translate: number[] };
  };
  export default data;
}
