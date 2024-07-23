import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';

import { linkedin } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Testimonials',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/santiago-bermudez.jpg'),
      author: 'Santiago Bermudez',
      relation: 'We work together at wefox',
      content:
        'Gabriel is a very capable professional, eager to work and always ready to learn. He is an excellent person and professional which makes it very easy to work with him.',
      links: [linkedin({ url: 'https://www.linkedin.com/in/santiago-bermudez-83a89532/' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
