import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';

import { github, linkedin } from '../helpers/links';

const yearsOfExperience = new Date().getFullYear() - 2013;

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Gabriel Núñez',
  role: 'Senior Software Engineer',
  details: [
    { label: 'Phone', value: '+34 644-776-652', url: 'tel:+34 644776652' },
    { label: 'Email', value: 'gabrieluy@gmail.com', url: 'mailto:gabrieluy@gmail.com' },
    { label: 'From', value: 'Montevideo, Uruguay' },
    { label: 'Actually living in', value: 'Barcelona, Spain' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+34 644-776-652' },
    { label: 'Email', value: 'gabrieluy@gmail.com' },
    { label: 'LinkedIn', value: '/in/gabrieluy7', url: 'https://www.linkedin.com/in/gabrieluy7/' },
    { label: 'GitHub', value: '/gabrieluy', url: 'https://github.com/gabrieluy' },
    { label: 'Website', value: 'gabrieluy.com', url: 'https://gabrieluy.com', fullRow: true },
  ],
  description: `Hi! I'm Gabriel, a Senior Angular Developer with over ${yearsOfExperience} years of IT experience. For the past 8 years, I have thrived in agile team environments. My curiosity and passion for technology have driven me to explore various roles and technologies, ranging from backend to frontend development, with some exposure to infrastructure as code. I am dedicated to contributing positively to team dynamics by offering assistance and fostering a collaborative and enjoyable working atmosphere.`,
  tags: [{ name: 'Open for contractor' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Gabriel_Nunez.pdf',
  },
  links: [github({ url: 'https://github.com/gabrieluy' }), linkedin({ url: 'https://linkedin.com/in/gabrieluy7' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
