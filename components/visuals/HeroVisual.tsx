export function HeroVisualSupplyChain() {
  return (
    <svg viewBox="0 0 480 580" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="dots-b" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="11" cy="11" r="1" fill="var(--brand)" opacity="0.10" />
        </pattern>
        <marker id="arrow-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--accent)" />
        </marker>
      </defs>
      <rect width="480" height="580" fill="url(#dots-b)" />
      <g stroke="var(--brand)" strokeWidth="0.6" opacity="0.18">
        <line x1="0" y1="160" x2="480" y2="160" strokeDasharray="2 6" />
        <line x1="0" y1="420" x2="480" y2="420" strokeDasharray="2 6" />
      </g>
      <g>
        <text x="60" y="92" fontFamily="var(--font-sans)" fontSize="11" letterSpacing="2" fill="var(--brand)" opacity="0.7">EUROPE</text>
        <g stroke="var(--brand)" strokeWidth="1" fill="none" opacity="0.5">
          <line x1="80" y1="120" x2="130" y2="155" />
          <line x1="130" y1="155" x2="80" y2="190" />
          <line x1="80" y1="190" x2="40" y2="160" />
          <line x1="40" y1="160" x2="80" y2="120" />
          <line x1="80" y1="120" x2="80" y2="190" />
          <line x1="40" y1="160" x2="130" y2="155" />
        </g>
        <g fill="var(--brand)">
          <circle cx="80" cy="120" r="4" />
          <circle cx="130" cy="155" r="4" />
          <circle cx="80" cy="190" r="4" />
          <circle cx="40" cy="160" r="4" />
        </g>
      </g>
      <g>
        <text x="60" y="368" fontFamily="var(--font-sans)" fontSize="11" letterSpacing="2" fill="var(--brand)" opacity="0.7">INDIA</text>
        <g stroke="var(--brand)" strokeWidth="1" fill="none" opacity="0.5">
          <line x1="80" y1="395" x2="135" y2="430" />
          <line x1="135" y1="430" x2="80" y2="465" />
          <line x1="80" y1="465" x2="40" y2="430" />
          <line x1="40" y1="430" x2="80" y2="395" />
          <line x1="80" y1="395" x2="80" y2="465" />
        </g>
        <g fill="var(--brand)">
          <circle cx="80" cy="395" r="4" />
          <circle cx="135" cy="430" r="4" />
          <circle cx="80" cy="465" r="4" />
          <circle cx="40" cy="430" r="4" />
        </g>
      </g>
      <g fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 5">
        <path d="M150 160 C 240 180, 280 230, 340 290" markerEnd="url(#arrow-b)" />
        <path d="M150 420 C 240 400, 280 350, 340 290" markerEnd="url(#arrow-b)" />
      </g>
      <g>
        <circle cx="360" cy="290" r="56" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.25" />
        <circle cx="360" cy="290" r="38" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.45" />
        <circle cx="360" cy="290" r="22" fill="var(--accent)" opacity="0.15" />
        <circle cx="360" cy="290" r="9" fill="var(--accent)" />
        <text x="360" y="370" fontFamily="var(--font-sans)" fontSize="11" letterSpacing="2" textAnchor="middle" fill="var(--accent)">GEORGIA</text>
      </g>
      <g fill="var(--brand)" opacity="0.6">
        <rect x="225" y="206" width="6" height="6" transform="rotate(45 228 209)" />
        <rect x="225" y="368" width="6" height="6" transform="rotate(45 228 371)" />
      </g>
      <g fontFamily="var(--font-sans)" fontSize="9" fill="var(--brand)" opacity="0.55" letterSpacing="1">
        <text x="240" y="210">EU-GMP</text>
        <text x="240" y="372">EU-GMP</text>
      </g>
    </svg>
  );
}
