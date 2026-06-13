import React from 'react';
import './Footer.css';
import ProjectsIsland from './ProjectsIsland';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';

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
            <div className="icon">
              <UseAnimations animation={linkedin} size={22} strokeColor="#000000" fillColor="#000000" />
            </div>
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
            <div className="icon">
              <UseAnimations animation={github} size={22} strokeColor="#000000" fillColor="#000000" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;