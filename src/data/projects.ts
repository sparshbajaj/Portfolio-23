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
      link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
    },
    {
      title: 'Speakeasy',
      type: 'UI/UX',
      thumb: '/assets/thumb-2.png',
      link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
    },
    {
      title: 'Codepen',
      type: 'IDENTITY',
      thumb: '/assets/thumb-1.png',
      link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
    },
    {
      title: 'Velare',
      type: 'WEB DESIGN',
      thumb: '/assets/thumb-2.png',
      link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
    },
  ];