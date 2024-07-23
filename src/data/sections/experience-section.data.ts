import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';

import {
  typescript,
  kubernetes,
  terraform,
  angular,
  cypress,
  android,
  scratch,
  docker,
  dotnet,
  webRTC,
  twilio,
  react,
  azure,
  lit,
  aws,
  nx,
} from '../helpers/skills';
import { website } from '../helpers/links';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior frontend developer',
      company: 'Wefox',
      image: import('@/assets/logos/wefox-logo.jpg'),
      dates: [new Date('2021-07'), null],
      description: `
        In my current position, I built a modern and responsive platform to enable Wefox brokers to provide a better experience for their customers. This role involved several challenges, including leading the creation of  dynamic journeys to achieve flexibility in the product creation process and integrating web components to maintain a consistent style across all company applications. I work primarily with Angular as the main framework and Lit for web components.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [angular(), nx(), lit(), typescript(), cypress()],
      },
      links: [website({ url: 'https://wefox.com' })],
    },
    {
      role: 'Fullstack developer',
      company: 'UruIT',
      image: import('@/assets/logos/uruit-logo.jpg'),
      dates: [new Date('2018-06'), new Date('2020-02')],
      description: `
        At UruIT, I gained valuable experience working on projects for high-profile clients such as Telefónica and Bloomberg Tax. I utilized my expertise in React, Angular, .NET and.NET Core to contribute effectively to these projects. Additionally, I expanded my skillset by working with cloud technologies like Kubernetes, Helm, and Terraform, further enhancing my ability to deliver robust and scalable solutions.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [dotnet(), react(), angular(), docker(), kubernetes(), terraform(), aws()],
      },
      links: [website({ url: 'https://uruit.com/' })],
    },
    {
      role: 'Full-stack developer',
      company: 'PhoneIQ',
      image: import('@/assets/logos/phoneiq-logo.jpg'),
      dates: [new Date('2017-03'), new Date('2018-06')],
      description: `
        At PhoneIQ, a unified communications startup, I leveraged my expertise in .Net,
        MSSQL, and Knockout to develop and integrate features for their platform. I also
        skillfully integrated the platform with external services like PubNub, Twilio,
        Salesforce, and Kazoo.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [dotnet(), webRTC(), twilio(), azure()],
      },
      links: [website({ url: 'https://www.phoneiq.co/' })],
    },
    {
      role: '.NET developer',
      company: 'HRU',
      image: import('@/assets/logos/hru-logo.jpg'),
      dates: [new Date('2013-07'), new Date('2017-03')],
      description: `
        In my first role as a developer, I worked on developing and maintaining applications for the Maroñas Racecourse and casino rooms in Uruguay. This role provided a great learning experience as we handled the entire development cycle, from design to deployment. I primarily worked with .NET MVC, but I also developed a native Android application using Java.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [dotnet(), android()],
      },
      links: [website({ url: 'https://www.hru.com.uy/' })],
    },
    {
      role: 'Teaching Assistant Professor',
      company: 'ORT',
      image: import('@/assets/logos/ort-logo.jpg'),
      dates: [new Date('2011-04'), new Date('2012-12')],
      description: `
       In my first professional role, I served as an assistant instructor of programming and robotics for teachers across Uruguay under the Ceibal Program. We used Scratch for programming and Lego NXT as the programmable device. It was a very enjoyable and rewarding experience.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [scratch()],
      },
      links: [website({ url: 'https://www.ort.edu.uy/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
