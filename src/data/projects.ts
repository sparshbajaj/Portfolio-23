// src/data/projects.ts
export interface Project {
    title: string;
    type: string;
    thumb: string;
    link: string;
  }
  
  export const PROJECTS: Project[] = [
    {
      title: 'Fluence',
      type: 'WEB DESIGN',
      thumb: '/assets/thumb-1.png',
      link: 'https://loving-sweatshirt-6fa.notion.site/ebd/c367710cd28542cc8f122508f86b106e',
    },
    {
      title: 'MemoriaCall',
      type: 'UI/UX',
      thumb: '/assets/thumb-2.png',
      link: '#',
    },
    {
      title: 'SocialTalent',
      type: 'UI/UX',
      thumb: '/assets/thumb-1.png',
      link: '#',
    },
    {
      title: 'PRD Template',
      type: 'UX Design',
      thumb: '/assets/thumb-2.png',
      link: '#',
    },
  ];
