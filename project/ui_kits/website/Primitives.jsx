// Shared building blocks for Neuropharm Georgia website UI kit.
// Exposes: BrainMark, BracketedEyebrow, Eyebrow, Button, Card, Icon
// All read from CSS variables — dark mode "just works".

const BrainMark = ({ size = 36, stroke = 3.6, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size * 0.75}
    viewBox="0 0 240 180"
    fill="none"
    stroke={color}
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M118 30 C 90 22, 60 30, 46 50 C 32 64, 28 82, 36 96 C 28 108, 36 124, 52 130 C 60 142, 78 148, 96 142 C 104 150, 116 150, 118 142 Z"/>
    <path d="M122 30 C 150 22, 180 30, 194 50 C 208 64, 212 82, 204 96 C 212 108, 204 124, 188 130 C 180 142, 162 148, 144 142 C 136 150, 124 150, 122 142 Z"/>
    <path d="M120 30 L120 150"/>
    <path d="M108 150 C 112 158, 128 158, 132 150"/>
    <path d="M58 60 C 70 56, 80 64, 86 76"/>
    <path d="M52 84 C 66 80, 78 86, 90 96"/>
    <path d="M50 110 C 64 108, 78 116, 92 116"/>
    <path d="M70 124 C 84 124, 96 130, 102 138"/>
    <path d="M134 50 L 150 50 L 150 64 L 168 64"/>
    <path d="M134 76 L 156 76 L 156 88 L 178 88"/>
    <path d="M134 96 L 146 96 L 146 108 L 168 108 L 168 96 L 184 96"/>
    <path d="M134 116 L 152 116 L 152 128 L 174 128"/>
    <path d="M180 60 L 196 60"/>
    <g fill={color} stroke="none">
      <circle cx="58"  cy="60"  r="3.4"/>
      <circle cx="86"  cy="76"  r="3.4"/>
      <circle cx="52"  cy="84"  r="3.4"/>
      <circle cx="90"  cy="96"  r="3.4"/>
      <circle cx="50"  cy="110" r="3.4"/>
      <circle cx="92"  cy="116" r="3.4"/>
      <circle cx="70"  cy="124" r="3.4"/>
      <circle cx="80"  cy="50"  r="3.4"/>
      <circle cx="134" cy="50"  r="3.4"/>
      <circle cx="168" cy="64"  r="3.4"/>
      <circle cx="178" cy="88"  r="3.4"/>
      <circle cx="184" cy="96"  r="3.4"/>
      <circle cx="174" cy="128" r="3.4"/>
      <circle cx="196" cy="60"  r="3.4"/>
    </g>
  </svg>
);

const BracketedEyebrow = ({ children, color = 'var(--brand)' }) => (
  <span className="np-bracketed" style={{ color }}>
    <span className="np-bracketed-rule" />
    {children}
    <span className="np-bracketed-rule" />
  </span>
);

const Eyebrow = ({ children, color = 'var(--accent)' }) => (
  <span className="np-eyebrow" style={{ color }}>{children}</span>
);

const Button = ({ variant = 'primary', size = 'md', children, onClick, icon }) => (
  <button className={`np-btn np-btn-${variant} np-btn-${size}`} onClick={onClick}>
    {children}
    {icon && <span className="np-btn-icon">{icon}</span>}
  </button>
);

const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7"/>
  </svg>
);

const Check = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const Globe = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const Sun = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>
  </svg>
);

const Moon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Shield = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const Activity = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const Layers = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

Object.assign(window, { BrainMark, BracketedEyebrow, Eyebrow, Button, ArrowRight, Check, Globe, Sun, Moon, Shield, Activity, Layers });
