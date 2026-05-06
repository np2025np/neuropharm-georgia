// Generate WebP variants of the hero background images.
// Run: node scripts/build-hero-webp.mjs
// Quality 85 keeps desktop ~95KB and mobile ~46KB while staying visually
// indistinguishable from the source JPEGs.

import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SOURCES = [
  { jpg: 'public/hero-bg.jpg', webp: 'public/hero-bg.webp' },
  { jpg: 'public/hero-bg-mobile.jpg', webp: 'public/hero-bg-mobile.webp' },
];

for (const { jpg, webp } of SOURCES) {
  const buf = await sharp(resolve(jpg))
    .webp({ quality: 85, effort: 6 })
    .toBuffer();
  writeFileSync(resolve(webp), buf);
  console.log(`${webp}: ${(buf.length / 1024).toFixed(1)} KB`);
}
