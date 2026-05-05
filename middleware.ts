import { NextResponse, type NextRequest } from 'next/server';
import { LANGS, DEFAULT_LANG } from '@/lib/i18n';
import { isEnabledLocale } from '@/lib/features';

const KNOWN_LANGS = LANGS as readonly string[];

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];

  // Path starts with a known locale.
  if (first && KNOWN_LANGS.includes(first)) {
    if (isEnabledLocale(first)) return NextResponse.next();
    // Disabled locale (e.g. /pt/about) → redirect to /<DEFAULT_LANG>/about
    const rest = segments.slice(1).join('/');
    const target = rest ? `/${DEFAULT_LANG}/${rest}` : `/${DEFAULT_LANG}`;
    return NextResponse.redirect(new URL(target + search, request.url), 308);
  }

  // No locale prefix → prepend default. Includes "/" → "/en".
  const target = pathname === '/' ? `/${DEFAULT_LANG}` : `/${DEFAULT_LANG}${pathname}`;
  return NextResponse.redirect(new URL(target + search, request.url), 308);
}

// Skip Next internals, API, and any path with a file extension (assets).
export const config = {
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
};
