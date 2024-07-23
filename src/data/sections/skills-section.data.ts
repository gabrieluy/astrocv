import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';

import {
  postgreSql,
  typescript,
  terraform,
  firebase,
  angular,
  nestJs,
  dotnet,
  docker,
  sqlite,
  astro,
  react,
  redis,
  lit,
  nx,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        angular({
          level: 5,
        }),
        typescript({
          level: 4,
        }),
        firebase({ level: 3 }),
        lit({
          level: 3,
        }),
        react({
          level: 3,
        }),
        dotnet({
          level: 3,
        }),
        nestJs({
          level: 3,
        }),
        nx({ level: 2 }),
        redis({ level: 2 }),
        postgreSql({ level: 2 }),
        docker({ level: 2 }),
        terraform({ level: 1 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [astro(), sqlite()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:es', name: 'Spanish - native' },
        { icon: 'circle-flags:us', name: 'English - B2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
