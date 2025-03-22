import React, { useEffect, useState } from 'react';
import './Footer.css';
import ProjectsIsland from './ProjectsIsland';
import linkedin from '/assets/linkedin-svgrepo-com.svg';
import github from '/assets/github-svgrepo-com.svg';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  // Optional: Get the ProjectsIsland height to align icons perfectly
  const [islandHeight, setIslandHeight] = useState<number | null>(null);
  
  useEffect(() => {
    // This runs after mount and will find the ProjectsIsland element
    const projectsIslandElement = document.querySelector('.projects-islands-wrapper > *');
    if (projectsIslandElement) {
      const height = projectsIslandElement.getBoundingClientRect().height;
      setIslandHeight(height);
    }
  }, []);

  // Calculate vertical alignment if we have the island height
  const iconStyle = islandHeight ? {
    bottom: `calc(30px + ${islandHeight / 2 - 18}px)` // 18px is half of icon height
  } : {};

  return (
    <footer className={`footer ${className}`}>
      <div className="footer-container">
        {/* Left icon */}
        <div className="footer-icon" style={iconStyle}>
          <a 
            href="https://linkedin.com/in/sparsh-bajaj" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-link"
          >
            <img src={linkedin} className="icon" alt="LinkedIn profile link" />
          </a>
        </div>

        {/* Middle component - hidden on mobile */}
        <div className="projects-islands-wrapper">
          <ProjectsIsland />
        </div>

        {/* Right icon */}
        <div className="footer-icon" style={iconStyle}>
          <a 
            href="https://github.com/sparshbajaj" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon-link"
          >
            <img src={github} className="icon" alt="GitHub profile link" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;