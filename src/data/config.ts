import type { ReadonlyDeep } from 'type-fest';
import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Gabriel Núñez',
    description: 'Gabriel Núñez cv.',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer: '',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
