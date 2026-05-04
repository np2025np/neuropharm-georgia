'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from './icons';

const STORAGE_KEY = 'np-theme';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem(STORAGE_KEY, 'dark'); } catch {}
    } else {
      document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem(STORAGE_KEY, 'light'); } catch {}
    }
  };

  return (
    <button className="np-mode-toggle" onClick={toggle} aria-label="Toggle theme" suppressHydrationWarning>
      {mounted && dark ? <Sun /> : <Moon />}
    </button>
  );
}
