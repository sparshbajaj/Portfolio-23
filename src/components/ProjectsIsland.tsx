import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './ProjectsIsland.module.css';
import GridIcon from './icons/GridIcon';

interface Project {
  title: string;
  type: string;
  thumb: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Fluence',
    type: 'WEB DESIGN',
    thumb: 'thumb-1.png',
    link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
  },
  {
    title: 'Speakeasy',
    type: 'UI/UX',
    thumb: 'logo_dark.png',
    link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
  },
  {
    title: 'Codepen',
    type: 'IDENTITY',
    thumb: 'thumb-1.png',
    link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
  },
  {
    title: 'Velare',
    type: 'WEB DESIGN',
    thumb: 'thumb-2.png',
    link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
  },
];

const ProjectsIsland = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const expandTimeoutRef = useRef<number | null>(null);
  const collapseTimeoutRef = useRef<number | null>(null);
  const islandRef = useRef<HTMLDivElement>(null);

  // Handle expansion with debounce
  const handleExpand = useCallback(() => {
    if (collapseTimeoutRef.current) {
      clearTimeout(collapseTimeoutRef.current);
      collapseTimeoutRef.current = null;
    }
    
    setIsHovering(true);
    
    if (!isExpanded && !expandTimeoutRef.current) {
      expandTimeoutRef.current = window.setTimeout(() => {
        setIsExpanded(true);
        expandTimeoutRef.current = null;
      }, 100); // Short delay for better UX
    }
  }, [isExpanded]);

  // Handle collapse with debounce
  const handleCollapse = useCallback(() => {
    if (expandTimeoutRef.current) {
      clearTimeout(expandTimeoutRef.current);
      expandTimeoutRef.current = null;
    }
    
    setIsHovering(false);
    
    if (isExpanded && !collapseTimeoutRef.current) {
      collapseTimeoutRef.current = window.setTimeout(() => {
        setIsExpanded(false);
        collapseTimeoutRef.current = null;
      }, 300); // Longer delay for collapse to prevent accidental collapses
    }
  }, [isExpanded]);

  // Handle click toggle
  const handleToggle = useCallback(() => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  }, [isExpanded]);

  // Handle click outside to collapse
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (islandRef.current && !islandRef.current.contains(event.target as Node) && isExpanded) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (expandTimeoutRef.current) clearTimeout(expandTimeoutRef.current);
      if (collapseTimeoutRef.current) clearTimeout(collapseTimeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={islandRef}
      className={`${styles.island} ${isExpanded ? styles.island_expanded : ''} ${isHovering ? styles.island_hovering : ''}`}
      onMouseEnter={handleExpand}
      onMouseLeave={handleCollapse}
      onClick={handleToggle}
      aria-expanded={isExpanded}
      role="region"
      aria-label="Projects showcase"
    >
      {/* Label */}
      <div className={styles.label_container}>
        <GridIcon className={styles.label_icon} />
        <span className={styles.label_text}>Projects</span>
      </div>

      {/* Projects Grid */}
      <div className={styles.projects_grid}>
        <ul className={styles.projects_list}>
          {PROJECTS.map((project, index) => (
            <li 
              key={project.title} 
              className={styles.project_item}
              style={{ 
                '--animation-order': index
              } as React.CSSProperties}
            >
              <a
                href={project.link}
                className={styles.project_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} project`}
              >
                <div className={styles.project_content}>
                  <h2 className={styles.project_title}>{project.title}</h2>
                  <div className={styles.project_type}>{project.type}</div>
                </div>
                <div 
                  className={styles.project_thumbnail}
                  style={{ backgroundImage: `url(/assets/${project.thumb})` }}
                >
                  {/* No need for hidden img tag since we're using background-image */}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsIsland;