import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';

import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Software Engineering',
      institution: 'ORT University of Uruguay',
      image: import('@/assets/logos/ort-logo.jpg'),
      dates: [new Date('2010.03'), new Date('2020.07')],
      description: '',
      links: [website({ url: 'https://www.ort.edu.uy/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
