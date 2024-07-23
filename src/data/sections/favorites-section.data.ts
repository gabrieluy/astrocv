import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/fireship.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/angular-space.jpeg'),
        title: 'Angular Space',
        type: 'Angular Hub',
        url: 'https://www.angularspace.com/',
      },
      {
        image: import('@/assets/favorites/media/midudev.jpg'),
        title: 'midudev',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/midudev',
      },
      {
        image: import('@/assets/favorites/media/joshua.jpg'),
        title: 'Joshua Morony',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@JoshuaMorony',
      },
      {
        image: import('@/assets/favorites/media/frontend-cafe.jpg'),
        title: 'Frontend Cafe',
        type: 'Discord community',
        url: 'https://frontend.cafe/',
      },
      {
        image: import('@/assets/favorites/media/theprimetime.jpg'),
        title: 'ThePrimeTime',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@ThePrimeTimeagen',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
