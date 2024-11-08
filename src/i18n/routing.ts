import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en-US', 'pt-BR'],
  defaultLocale: 'pt-BR',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'en-US': '/us',
      'pt-BR': '/br',
    },
  },
  pathnames: {
    '/': '/dashboard',
    '/dashboard': {
      'pt-BR': '/dashboard',
      'en-US': '/dashboard',
    },
    '/orders': {
      'pt-BR': '/pedidos',
      'en-US': '/orders',
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
