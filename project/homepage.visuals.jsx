// Icons + abstract scientific visuals for Neuropharm Georgia website.

const ContainerRoute = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="14" height="10" rx="1"/>
    <path d="M3 15h14"/>
    <path d="M7 11v10"/>
    <path d="M11 11v10"/>
    <path d="M19 16h6"/>
    <path d="M22 13l3 3-3 3"/>
    <circle cx="29" cy="16" r="1.4"/>
  </svg>
);

const Network = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="6" r="2.4"/>
    <circle cx="6" cy="16" r="2.4"/>
    <circle cx="26" cy="16" r="2.4"/>
    <circle cx="11" cy="26" r="2.4"/>
    <circle cx="21" cy="26" r="2.4"/>
    <path d="M16 8.4 L8 14"/>
    <path d="M16 8.4 L24 14"/>
    <path d="M8 18 L11 23.6"/>
    <path d="M24 18 L21 23.6"/>
    <path d="M13 26 L19 26"/>
  </svg>
);

const Beaker = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4h8"/>
    <path d="M13 4v8L7 25a2 2 0 0 0 1.8 3h14.4A2 2 0 0 0 25 25l-6-13V4"/>
    <path d="M10.5 18h11"/>
  </svg>
);

const ClipboardCheck = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="6" width="18" height="22" rx="2"/>
    <path d="M12 6V4h8v2"/>
    <path d="M12 16l3 3 5-6"/>
  </svg>
);

const Snowflake = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3v26"/>
    <path d="M3 16h26"/>
    <path d="M6 6l20 20"/>
    <path d="M26 6L6 26"/>
    <path d="M12 6l4 3 4-3"/>
    <path d="M12 26l4-3 4 3"/>
    <path d="M6 12l3 4-3 4"/>
    <path d="M26 12l-3 4 3 4"/>
  </svg>
);

// Stylized world map for sourcing section.
const WorldMap = ({ regionAName = 'Europe', regionBName = 'India' }) => (
  <svg viewBox="0 0 1000 500" className="np-sourcing-map" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g className="lat">
      <line x1="0" y1="125" x2="1000" y2="125"/>
      <line x1="0" y1="250" x2="1000" y2="250"/>
      <line x1="0" y1="375" x2="1000" y2="375"/>
    </g>
    <path className="land" d="M70 120 L160 80 L240 100 L290 145 L300 195 L260 235 L240 280 L195 290 L155 270 L120 250 L95 220 L65 180 Z"/>
    <path className="land" d="M345 70 L390 60 L405 105 L380 130 L355 120 Z"/>
    <path className="land" d="M260 295 L295 290 L320 320 L320 380 L300 430 L275 460 L255 440 L240 405 L245 360 Z"/>
    <path className="land" d="M480 200 L545 195 L580 230 L585 290 L555 345 L525 365 L500 350 L470 310 L460 260 Z"/>
    <path className="land-active" d="M455 130 L490 115 L530 120 L555 140 L555 175 L530 195 L490 195 L460 180 L445 155 Z"/>
    <path className="land" d="M555 175 L605 165 L640 185 L640 220 L600 240 L570 230 Z"/>
    <path className="land-active" d="M660 230 L700 225 L725 245 L735 285 L715 315 L685 325 L665 300 L655 265 Z"/>
    <path className="land" d="M735 285 L770 280 L800 305 L795 340 L770 350 L745 335 Z"/>
    <path className="land" d="M720 150 L780 140 L825 165 L835 200 L800 225 L755 220 L725 200 Z"/>
    <path className="land" d="M810 350 L870 345 L905 365 L900 395 L860 410 L825 395 Z"/>
    <path className="land" d="M770 350 L820 360 L800 380 L770 375 Z"/>
    <path className="land" d="M555 90 L640 80 L730 85 L820 95 L860 110 L830 130 L740 130 L640 130 L555 125 Z"/>
    <path className="land" d="M442 130 L455 125 L455 150 L443 155 Z"/>
    <path className="land" d="M870 165 L890 175 L880 200 L863 188 Z"/>
    <g>
      <line className="pin-tether" x1="505" y1="160" x2="505" y2="60"/>
      <circle className="pin-ring" cx="505" cy="160" r="14"/>
      <circle className="pin-dot"  cx="505" cy="160" r="5"/>
      <text className="pin-label" x="505" y="48" textAnchor="middle">{regionAName}</text>
    </g>
    <g>
      <line className="pin-tether" x1="700" y1="275" x2="780" y2="430"/>
      <circle className="pin-ring" cx="700" cy="275" r="14"/>
      <circle className="pin-dot"  cx="700" cy="275" r="5"/>
      <text className="pin-label" x="780" y="448" textAnchor="middle">{regionBName}</text>
    </g>
  </svg>
);

// Hero visual: two source clusters (EU + India) flowing into a single Georgia node.
const HeroVisualSupplyChain = () => (
  <svg viewBox="0 0 480 580" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <pattern id="dots-b" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="11" cy="11" r="1" fill="var(--brand)" opacity="0.10"/>
      </pattern>
      <marker id="arrow-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 Z" fill="var(--accent)"/>
      </marker>
    </defs>
    <rect width="480" height="580" fill="url(#dots-b)"/>
    <g stroke="var(--brand)" strokeWidth="0.6" opacity="0.18">
      <line x1="0" y1="160" x2="480" y2="160" strokeDasharray="2 6"/>
      <line x1="0" y1="420" x2="480" y2="420" strokeDasharray="2 6"/>
    </g>
    <g>
      <text x="60" y="92" fontFamily="var(--font-sans)" fontSize="11" letterSpacing="2" fill="var(--brand)" opacity="0.7">EUROPE</text>
      <g stroke="var(--brand)" strokeWidth="1" fill="none" opacity="0.5">
        <line x1="80" y1="120" x2="130" y2="155"/>
        <line x1="130" y1="155" x2="80" y2="190"/>
        <line x1="80" y1="190" x2="40" y2="160"/>
        <line x1="40" y1="160" x2="80" y2="120"/>
        <line x1="80" y1="120" x2="80" y2="190"/>
        <line x1="40" y1="160" x2="130" y2="155"/>
      </g>
      <g fill="var(--brand)">
        <circle cx="80" cy="120" r="4"/>
        <circle cx="130" cy="155" r="4"/>
        <circle cx="80" cy="190" r="4"/>
        <circle cx="40" cy="160" r="4"/>
      </g>
    </g>
    <g>
      <text x="60" y="368" fontFamily="var(--font-sans)" fontSize="11" letterSpacing="2" fill="var(--brand)" opacity="0.7">INDIA</text>
      <g stroke="var(--brand)" strokeWidth="1" fill="none" opacity="0.5">
        <line x1="80" y1="395" x2="135" y2="430"/>
        <line x1="135" y1="430" x2="80" y2="465"/>
        <line x1="80" y1="465" x2="40" y2="430"/>
        <line x1="40" y1="430" x2="80" y2="395"/>
        <line x1="80" y1="395" x2="80" y2="465"/>
      </g>
      <g fill="var(--brand)">
        <circle cx="80" cy="395" r="4"/>
        <circle cx="135" cy="430" r="4"/>
        <circle cx="80" cy="465" r="4"/>
        <circle cx="40" cy="430" r="4"/>
      </g>
    </g>
    <g fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 5">
      <path d="M150 160 C 240 180, 280 230, 340 290" markerEnd="url(#arrow-b)"/>
      <path d="M150 420 C 240 400, 280 350, 340 290" markerEnd="url(#arrow-b)"/>
    </g>
    <g>
      <circle cx="360" cy="290" r="56" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.25"/>
      <circle cx="360" cy="290" r="38" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.45"/>
      <circle cx="360" cy="290" r="22" fill="var(--accent)" opacity="0.15"/>
      <circle cx="360" cy="290" r="9" fill="var(--accent)"/>
      <text x="360" y="370" fontFamily="var(--font-sans)" fontSize="11" letterSpacing="2" textAnchor="middle" fill="var(--accent)">GEORGIA</text>
    </g>
    <g fill="var(--brand)" opacity="0.6">
      <rect x="225" y="206" width="6" height="6" transform="rotate(45 228 209)"/>
      <rect x="225" y="368" width="6" height="6" transform="rotate(45 228 371)"/>
    </g>
    <g fontFamily="var(--font-sans)" fontSize="9" fill="var(--brand)" opacity="0.55" letterSpacing="1">
      <text x="240" y="210">EU-GMP</text>
      <text x="240" y="372">EU-GMP</text>
    </g>
  </svg>
);

const HeroVisualRouter = () => <HeroVisualSupplyChain />;

Object.assign(window, { ContainerRoute, Network, Beaker, ClipboardCheck, Snowflake, HeroVisualSupplyChain, HeroVisualRouter, WorldMap });
