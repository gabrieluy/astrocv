import { ArticlesSection } from '@/types/sections/articles-section.types';
import type { ReadonlyDeep } from 'type-fest';

const articlesSectionData = {
  config: {
    title: 'Articles I wrote',
    slug: 'articles',
    icon: 'fa6-solid:newspaper',
    visible: true,
  },
  articles: [
    {
      image: import('@/assets/articles/article-1.jpg'),
      title: 'Pagination Using Firebase and NgRx SignalStore',
      url: 'https://www.angularspace.com/create-pagination-using-firebase-and-ngrx-signalstore/',
    },
  ],
} as const satisfies ReadonlyDeep<ArticlesSection>;

export default articlesSectionData;
