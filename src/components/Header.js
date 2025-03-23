import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useMemo } from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import HamburgerIcon from './icons/HamburgerIcon';
import CloseIcon from './icons/CloseIcon';
import logo from '/assets/sparsh-logo-dark.svg';
import { PROJECTS } from '../data/projects';
// Create reusable SVG components to improve readability
const AboutMeIcon = () => (_jsxs("svg", { width: "24", height: "24", viewBox: "0 0 277 277", fill: "none", "aria-hidden": "true", children: [_jsx("circle", { cx: "138.5", cy: "138.5", r: "127.5", stroke: "currentColor", strokeWidth: "22" }), _jsx("circle", { cx: "100", cy: "116", r: "19", fill: "currentColor" }), _jsx("circle", { cx: "175", cy: "116", r: "19", fill: "currentColor" }), _jsx("path", { d: "M188.341 181C176.327 195.076 158.456 204 138.5 204C118.544 204 100.672 195.076 88.6582 181", stroke: "currentColor", strokeWidth: "21", strokeLinecap: "round" })] }));
const LetsTalkIcon = () => (_jsx("svg", { width: "24", height: "24", viewBox: "0 0 263 263", fill: "none", "aria-hidden": "true", children: _jsx("path", { d: "M191.459 131.524C191.459 164.654 164.599 191.514 131.469 191.514C98.3394 191.514 71.4794 164.654 71.4794 131.524C71.4794 98.3943 98.3394 71.5343 131.469 71.5343C164.599 71.5343 191.459 98.3943 191.459 131.524ZM191.459 131.524V161.324C191.459 177.994 204.969 191.514 221.649 191.514C238.329 191.514 251.839 178.004 251.839 161.324V131.524C251.839 65.0543 197.949 11.1643 131.479 11.1643C65.0094 11.1643 11.1094 65.0543 11.1094 131.524C11.1094 197.994 64.9994 251.884 131.469 251.884C153.449 251.884 174.059 245.994 191.799 235.694", stroke: "currentColor", strokeWidth: "22", strokeMiterlimit: "10", strokeLinecap: "round" }) }));
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Handle escape key to close the menu
    const handleEscKey = useCallback((e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [isMenuOpen]);
    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleEscKey);
        }
        else {
            document.body.style.overflow = 'auto';
        }
        // Simplified cleanup function
        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isMenuOpen, handleEscKey]);
    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
    // Memoize projects to prevent unnecessary re-renders
    const memoizedProjects = useMemo(() => (PROJECTS.map((project) => (_jsxs("a", { href: project.link, className: styles.mobileProjectCard, target: "_blank", rel: "noopener noreferrer", children: [_jsx("div", { className: styles.projectThumb, style: { backgroundImage: `url(${project.thumb})` }, "aria-hidden": "true" }), _jsxs("div", { className: styles.projectInfo, children: [_jsx("h3", { children: project.title }), _jsx("p", { children: project.type })] })] }, project.title)))), []);
    return (_jsxs("header", { className: styles.header, children: [_jsx(Link, { to: "/", className: styles.logo, "aria-label": "Home", children: _jsx("img", { src: logo, alt: "Website logo", className: styles.logoImage }) }), _jsx("nav", { className: styles.nav, "aria-label": "Desktop Navigation", children: _jsxs("div", { className: styles.nav_links_wrapper, children: [_jsxs(NavLink, { to: "/about-me", className: ({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''} ${styles.aboutButton}`, children: [_jsx("div", { className: styles.nav_icon, children: _jsx(AboutMeIcon, {}) }), _jsx("div", { className: styles.nav_text, children: "About Me" })] }), _jsxs("a", { href: "mailto:sparshbajaj97@gmail.com?subject=Let's Talk", className: `${styles.lets_talk_link} ${styles.talkButton}`, children: [_jsx("span", { className: styles.button_background }), _jsx("div", { className: styles.nav_icon, children: _jsx(LetsTalkIcon, {}) }), _jsx("div", { className: styles.nav_text, children: "Let's Talk" })] })] }) }), _jsx("button", { className: `${styles.mobileMenuButton} ${isMenuOpen ? styles.active : ''}`, onClick: toggleMenu, "aria-label": isMenuOpen ? "Close menu" : "Open menu", "aria-expanded": isMenuOpen, "aria-controls": "mobile-menu", children: isMenuOpen ? _jsx(CloseIcon, {}) : _jsx(HamburgerIcon, {}) }), isMenuOpen && (_jsx("div", { id: "mobile-menu", className: `${styles.mobileMenuOverlay} ${styles.active}`, role: "dialog", "aria-modal": "true", "aria-label": "Mobile navigation menu", children: _jsxs("div", { className: styles.mobileMenuContent, children: [_jsx("div", { className: styles.mobileProjectsGrid, children: memoizedProjects }), _jsxs("nav", { className: styles.mobileMenuLinks, "aria-label": "Mobile Navigation", children: [_jsxs("div", { className: styles.buttonRow, children: [_jsxs(NavLink, { to: "/about-me", className: styles.mobileNavLink, onClick: toggleMenu, children: [_jsx(AboutMeIcon, {}), "About Me"] }), _jsxs("a", { href: "mailto:sparshbajaj97@gmail.com?subject=Let's Talk", className: styles.mobileNavLink, children: [_jsx(LetsTalkIcon, {}), "Let's Talk"] })] }), _jsxs("div", { className: styles.buttonRow, children: [_jsxs("a", { href: "https://linkedin.com/in/sparsh-bajaj", className: styles.socialLink, target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn Profile", children: [_jsx("img", { src: "/assets/linkedin-svgrepo-com.svg", className: styles.socialIcon, alt: "", "aria-hidden": "true" }), _jsx("span", { className: styles.socialLabel, children: "LinkedIn" })] }), _jsxs("a", { href: "https://github.com/sparshbajaj", className: styles.socialLink, target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub Profile", children: [_jsx("img", { src: "/assets/github-svgrepo-com.svg", className: styles.socialIcon, alt: "", "aria-hidden": "true" }), _jsx("span", { className: styles.socialLabel, children: "GitHub" })] })] })] })] }) }))] }));
};
export default Header;
