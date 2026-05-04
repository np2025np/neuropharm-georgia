type IconProps = { size?: number };

export const BrainMark = ({ size = 36, stroke = 3.6, color = 'currentColor' }: { size?: number; stroke?: number; color?: string }) => (
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
    <path d="M118 30 C 90 22, 60 30, 46 50 C 32 64, 28 82, 36 96 C 28 108, 36 124, 52 130 C 60 142, 78 148, 96 142 C 104 150, 116 150, 118 142 Z" />
    <path d="M122 30 C 150 22, 180 30, 194 50 C 208 64, 212 82, 204 96 C 212 108, 204 124, 188 130 C 180 142, 162 148, 144 142 C 136 150, 124 150, 122 142 Z" />
    <path d="M120 30 L120 150" />
    <path d="M108 150 C 112 158, 128 158, 132 150" />
    <path d="M58 60 C 70 56, 80 64, 86 76" />
    <path d="M52 84 C 66 80, 78 86, 90 96" />
    <path d="M50 110 C 64 108, 78 116, 92 116" />
    <path d="M70 124 C 84 124, 96 130, 102 138" />
    <path d="M134 50 L 150 50 L 150 64 L 168 64" />
    <path d="M134 76 L 156 76 L 156 88 L 178 88" />
    <path d="M134 96 L 146 96 L 146 108 L 168 108 L 168 96 L 184 96" />
    <path d="M134 116 L 152 116 L 152 128 L 174 128" />
    <path d="M180 60 L 196 60" />
    <g fill={color} stroke="none">
      <circle cx="58" cy="60" r="3.4" />
      <circle cx="86" cy="76" r="3.4" />
      <circle cx="52" cy="84" r="3.4" />
      <circle cx="90" cy="96" r="3.4" />
      <circle cx="50" cy="110" r="3.4" />
      <circle cx="92" cy="116" r="3.4" />
      <circle cx="70" cy="124" r="3.4" />
      <circle cx="80" cy="50" r="3.4" />
      <circle cx="134" cy="50" r="3.4" />
      <circle cx="168" cy="64" r="3.4" />
      <circle cx="178" cy="88" r="3.4" />
      <circle cx="184" cy="96" r="3.4" />
      <circle cx="174" cy="128" r="3.4" />
      <circle cx="196" cy="60" r="3.4" />
    </g>
  </svg>
);

export const ArrowRight = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const Check = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const Sun = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
  </svg>
);

export const Moon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const ContainerRoute = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="14" height="10" rx="1" />
    <path d="M3 15h14" />
    <path d="M7 11v10" />
    <path d="M11 11v10" />
    <path d="M19 16h6" />
    <path d="M22 13l3 3-3 3" />
    <circle cx="29" cy="16" r="1.4" />
  </svg>
);

export const Network = ({ size = 32 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="6" r="2.4" />
    <circle cx="6" cy="16" r="2.4" />
    <circle cx="26" cy="16" r="2.4" />
    <circle cx="11" cy="26" r="2.4" />
    <circle cx="21" cy="26" r="2.4" />
    <path d="M16 8.4 L8 14" />
    <path d="M16 8.4 L24 14" />
    <path d="M8 18 L11 23.6" />
    <path d="M24 18 L21 23.6" />
    <path d="M13 26 L19 26" />
  </svg>
);

export const Beaker = ({ size = 28 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4h8" />
    <path d="M13 4v8L7 25a2 2 0 0 0 1.8 3h14.4A2 2 0 0 0 25 25l-6-13V4" />
    <path d="M10.5 18h11" />
  </svg>
);

export const ClipboardCheck = ({ size = 28 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="6" width="18" height="22" rx="2" />
    <path d="M12 6V4h8v2" />
    <path d="M12 16l3 3 5-6" />
  </svg>
);

export const Snowflake = ({ size = 28 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3v26" />
    <path d="M3 16h26" />
    <path d="M6 6l20 20" />
    <path d="M26 6L6 26" />
    <path d="M12 6l4 3 4-3" />
    <path d="M12 26l4-3 4 3" />
    <path d="M6 12l3 4-3 4" />
    <path d="M26 12l-3 4 3 4" />
  </svg>
);
