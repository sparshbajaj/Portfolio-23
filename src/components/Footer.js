import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import './Footer.css';
import ProjectsIsland from './ProjectsIsland';
import linkedin from '/assets/linkedin-svgrepo-com.svg';
import github from '/assets/github-svgrepo-com.svg';
const Footer = ({ className = '' }) => {
    // Optional: Get the ProjectsIsland height to align icons perfectly
    const [islandHeight, setIslandHeight] = useState(null);
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
    return (_jsx("footer", { className: `footer ${className}`, children: _jsxs("div", { className: "footer-container", children: [_jsx("div", { className: "footer-icon", style: iconStyle, children: _jsx("a", { href: "https://linkedin.com/in/sparsh-bajaj", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "icon-link", children: _jsx("img", { src: linkedin, className: "icon", alt: "LinkedIn profile link" }) }) }), _jsx("div", { className: "projects-islands-wrapper", children: _jsx(ProjectsIsland, {}) }), _jsx("div", { className: "footer-icon", style: iconStyle, children: _jsx("a", { href: "https://github.com/sparshbajaj", target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub", className: "icon-link", children: _jsx("img", { src: github, className: "icon", alt: "GitHub profile link" }) }) })] }) }));
};
export default Footer;
