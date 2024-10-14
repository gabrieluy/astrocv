import type { ReadonlyDeep } from 'type-fest';
import type { Sections } from '@/types/data';

import testimonialsData from './testimonials-section.data';
import experienceData from './experience-section.data';
import educationData from './education-section.data';
import favoritesData from './favorites-section.data';
import portfolioData from './portfolio-section.data';
import articlesData from './articles-section.data';
import skillsData from './skills-section.data';
import mainData from './main-section.data';

export const sections = {
  main: mainData,
  skills: skillsData,
  education: educationData,
  experience: experienceData,
  portfolio: portfolioData,
  articles: articlesData,
  testimonials: testimonialsData,
  favorites: favoritesData,
} as const satisfies ReadonlyDeep<Sections>;

export default sections;
