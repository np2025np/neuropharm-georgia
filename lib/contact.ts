import type { Lang } from './i18n';

/**
 * Single source of truth for company contact information.
 * Anywhere on the site that displays phone, email, address, or hours
 * should read from this module — keep one canonical copy.
 */
export const contact = {
  phone: {
    display: '+995 571 15 33 14',
    href: 'tel:+995571153314',
  },
  email: {
    display: 'info@neuropharmgeorgia.com',
    href: 'mailto:info@neuropharmgeorgia.com',
  },
  address: {
    ka: 'თბილისი, ვაკე; ყიფშიძის ქ. N5ა',
    en: 'Tbilisi, Vake; Kipshidze St. 5A',
    ru: 'Тбилиси, Ваке; ул. Кипшидзе 5А',
    pt: 'Tbilisi, Vake; Rua Kipshidze 5A',
  } as Record<Lang, string>,
  hours: {
    ka: 'ორშ. – პარ.',
    en: 'Mon. – Fri.',
    ru: 'Пн. – Пт.',
    pt: 'Seg. – Sex.',
    time: '09:00 – 18:00 (GMT+4)',
  } as Record<Lang, string> & { time: string },
  license: '№438739260',
} as const;
