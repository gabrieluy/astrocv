import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';

import { firebase, rabbitmq, angular, nestJs, redis, postgreSql } from '../helpers/skills';
import { demo, github } from '../helpers/links';

const portfolioSectionData = {
  config: {
    title: 'Other Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Web ASH',
      image: import('@/assets/portfolio/project-ash.jpg'),
      dates: [new Date('2024-03'), null],
      details: [
        { label: 'Team size', value: 'Only me' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'Animales sin hogar' },
        { label: 'Category', value: ['Web app', 'Non-profit'] },
      ],
      pdfDetails: [{ label: 'Demo', value: 'https://ash.uy/', url: '#' }],
      description:
        'Web Ash is a non-profit project created for an NGO that rescues abandoned animals in Uruguay. Besides providing all the information about the NGO, the website allows administrators to create adoption listings and registered users to post announcements about lost animals. It was developed using Angular and Firebase. The site is still pending full production release, so the URL is currently a preview link.',
      tagsList: {
        title: 'Technologies',
        tags: [angular(), firebase()],
      },
      links: [demo({ url: 'https://ash.uy/' })],
    },
    {
      name: 'Flags Mastery!',
      image: import('@/assets/portfolio/project-flags.jpg'),
      dates: [new Date('2022-12'), new Date('2023-06')],
      details: [
        { label: 'Team size', value: 'Only me' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Mobile app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://flags.gabrieluy.com', url: '#' },
        { label: 'Repository', value: 'https://github.com/gabrieluy/flags-quiz', url: '#' },
      ],
      description:
        "Flags Mastery! is an educational game designed to help people learn the flags of the world. Developed using Angular and recently updated to utilize NgRx Signals Store, it's a PWA, allowing it to be played on mobile and offline. The game is available in multiple languages and features configurable difficulty levels.",
      tagsList: {
        title: 'Technologies',
        tags: [angular()],
      },
      links: [
        github({ url: 'https://github.com/gabrieluy/flags-quiz/' }),
        demo({ url: 'https://flags.gabrieluy.com' }),
      ],
    },
    {
      name: 'Chaski Iot',
      image: import('@/assets/portfolio/project-chaski.jpg'),
      dates: [new Date('2020-05'), new Date('2021-05')],
      details: [
        { label: 'Team size', value: '4 people' },
        { label: 'My role', value: ['Full-stack developer'] },
        { label: 'Company', value: 'Sonda' },
        { label: 'Category', value: ['Web app', 'IoT'] },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/screenshots/screenshot-chaski-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/screenshots/screenshot-chaski-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/screenshots/screenshot-chaski-3.jpg'), alt: 'Third screenshot' },
        { src: import('@/assets/portfolio/screenshots/screenshot-chaski-4.jpg'), alt: 'Fourth screenshot' },
        { src: import('@/assets/portfolio/screenshots/screenshot-chaski-5.jpg'), alt: 'Fifth screenshot' },
      ],
      description:
        'Chaski IoT was my final degree project. It was a platform that enables third-party applications to communicate and interoperate with devices using Internet of Things (IoT) protocols (Like MQTT and COAP) through a well-defined API. The backend was developed with NestJS, utilizing RabbitMQ, Redis, and PostgreSQL for message queue management, caching, and data storage respectably. The admin interface was built using Angular.',
      tagsList: {
        title: 'Technologies',
        tags: [nestJs(), redis(), rabbitmq(), postgreSql(), angular()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
