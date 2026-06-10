// src/data/projects.ts
export interface Project {
    title: string;
    type: string;
    thumb: string;
    link: string;
  }
  
  // These are projects that are NOT on Ghost (e.g. Figma links, Internal links)
  export const STATIC_PROJECTS: Project[] = [
    {
      title: 'Unified Enterprise UI Delivery',
      type: 'FIGMA | HANDOFF',
      thumb: '/assets/thumb.png',
      link: 'https://www.figma.com/design/f3qnZOoZjfyvixRtZbOWDL/KC-OVERSEAS-UI-Delivery?node-id=20-2&t=nzLR1cs7evos39eX-1',
    },
    {
      title: 'Global Design System Infrastructure',
      type: 'SYSTEMS DESIGN',
      thumb: '/assets/thumb.png',
      link: 'https://www.figma.com/design/laAHOJcBjUl0F0fbJ50p6Q/Design-system-Desktop-app?node-id=0-1&t=rBjx3NaVrI4iPVW0-1',
    },
    {
      title: 'MemoriaCall: Brand & UI Evolution',
      type: 'VISUAL DESIGN',
      thumb: '/assets/Memoria.png',
      link: 'https://www.figma.slides/ke3SUlTo1peupP965Lt0LM/Memoria?node-id=8-129&t=zZtWuWsjStRDPJbP-1',
    }
  ];

  // For backward compatibility
  export const PROJECTS = STATIC_PROJECTS;
