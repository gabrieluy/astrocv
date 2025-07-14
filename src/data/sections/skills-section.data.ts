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
        angular(),
        typescript(),
        firebase(),
        lit(),
        react(),
        dotnet(),
        nestJs(),
        nx(),
        redis(),
        postgreSql(),
        docker(),
        terraform(),
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
