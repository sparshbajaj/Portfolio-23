import React from 'react';
import './Footer.css';
import ProjectsIsland from './ProjectsIsland';
import linkedin from '/assets/linkedin-svgrepo-com.svg';
import github from '/assets/github-svgrepo-com.svg';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-container">
        {/* Left icon */}
        <div className="footer-icon">
          <a 
            href="https://linkedin.com/in/sparsh-bajaj" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-link"
          >
            <img src={linkedin} className="icon" alt="LinkedIn profile link" loading="lazy" />
          </a>
        </div>

        {/* Middle component - hidden on mobile */}
        <div className="projects-islands-wrapper">
          <ProjectsIsland />
        </div>

        {/* Right icon */}
        <div className="footer-icon">
          <a 
            href="https://github.com/sparshbajaj" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon-link"
          >
            <img src={github} className="icon" alt="GitHub profile link" loading="lazy" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;