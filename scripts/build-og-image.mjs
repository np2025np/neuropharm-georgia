// One-shot generator for /public/og-image.png (1200x630).
// Run with `node scripts/build-og-image.mjs`. Result is committed.
// Re-run only if the OG visual needs to change.

import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const W = 1200;
const H = 630;

// Brand palette (mirrors styles/globals.css token values).
const BG = '#0B1F1D';        // np-teal-900
const BG_DARK = '#071614';   // deeper inner gradient
const TEAL = '#0F6E66';      // np-teal-500
const TEAL_BRIGHT = '#1FA89A';
const PAPER = '#FAFAF7';
const CORAL = '#E0533F';     // np-coral-500
const MUTED = 'rgba(250, 250, 247, 0.62)';

// BrainMark SVG — same paths as components/icons.tsx, scaled up. Coords are 240x180.
const brain = `
<g transform="translate(80 180) scale(1.6)" stroke="${PAPER}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
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
  <g fill="${PAPER}" stroke="none">
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
</g>`;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BG}"/>
      <stop offset="100%" stop-color="${BG_DARK}"/>
    </linearGradient>
    <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="${TEAL_BRIGHT}" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>

  <!-- subtle top eyebrow rule -->
  <line x1="80" y1="100" x2="180" y2="100" stroke="${TEAL_BRIGHT}" stroke-width="1.2" opacity="0.55"/>
  <text x="200" y="106" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="600" letter-spacing="3" fill="${TEAL_BRIGHT}" opacity="0.85">GEORGIA · FOUNDED 2025</text>

  ${brain}

  <!-- Wordmark + headline -->
  <g transform="translate(420 250)">
    <text font-family="Georgia, 'Times New Roman', serif" font-size="84" font-weight="600" fill="${PAPER}" letter-spacing="-1">Neuropharm</text>
    <text y="92" font-family="Georgia, 'Times New Roman', serif" font-size="84" font-weight="400" fill="${PAPER}" letter-spacing="-1" opacity="0.78">Georgia</text>
  </g>

  <!-- Coral accent rule -->
  <line x1="420" y1="450" x2="540" y2="450" stroke="${CORAL}" stroke-width="3"/>

  <!-- Tagline -->
  <text x="420" y="498" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="500" fill="${PAPER}">Pharmaceutical import &amp; distribution</text>
  <text x="420" y="534" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="400" fill="${MUTED}">European and Indian sourcing — Tbilisi, Georgia</text>

  <!-- License pill -->
  <g transform="translate(420 568)">
    <rect width="218" height="34" rx="17" fill="none" stroke="${TEAL_BRIGHT}" stroke-width="1" opacity="0.5"/>
    <text x="20" y="22" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" letter-spacing="1.5" fill="${TEAL_BRIGHT}">LICENCE №438739260</text>
  </g>

  <!-- Right-side corner mark (matches the design corner-marks) -->
  <g transform="translate(${W - 100} 80)">
    <text font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" letter-spacing="2" fill="${TEAL_BRIGHT}" opacity="0.6" text-anchor="end">NP · 01</text>
  </g>
</svg>`;

const out = resolve(process.cwd(), 'public/og-image.png');

const png = await sharp(Buffer.from(svg))
  .resize(W, H)
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(out, png);

console.log(`Wrote ${out} (${png.byteLength} bytes)`);
