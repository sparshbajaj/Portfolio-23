import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './ProjectsIsland.module.css';
import GridIcon from './icons/GridIcon';
import thumb1 from '/assets/thumb-1.png';
import thumb2 from '/assets/thumb-2.png';
const PROJECTS = [
    {
        title: 'Fluence',
        type: 'WEB DESIGN',
        thumb: thumb1,
        link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
    },
    {
        title: 'Speakeasy',
        type: 'UI/UX',
        thumb: thumb2,
        link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
    },
    {
        title: 'Codepen',
        type: 'IDENTITY',
        thumb: thumb1,
        link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
    },
    {
        title: 'Velare',
        type: 'WEB DESIGN',
        thumb: thumb2,
        link: 'https://loving-sweatshirt-6fa.notion.site/Fluence-Website-Redesign-c367710cd28542cc8f122508f86b106e',
    },
];
const ProjectsIsland = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const expandTimeoutRef = useRef(null);
    const collapseTimeoutRef = useRef(null);
    const islandRef = useRef(null);
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
            }, 100);
        }
    }, [isExpanded]);
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
            }, 300);
        }
    }, [isExpanded]);
    const handleToggle = useCallback(() => {
        if (!isExpanded) {
            setIsExpanded(true);
        }
    }, [isExpanded]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (islandRef.current && !islandRef.current.contains(event.target) && isExpanded) {
                setIsExpanded(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isExpanded]);
    useEffect(() => {
        return () => {
            if (expandTimeoutRef.current)
                clearTimeout(expandTimeoutRef.current);
            if (collapseTimeoutRef.current)
                clearTimeout(collapseTimeoutRef.current);
        };
    }, []);
    return (_jsxs("div", { ref: islandRef, className: `${styles.island} ${isExpanded ? styles.island_expanded : ''} ${isHovering ? styles.island_hovering : ''}`, onMouseEnter: handleExpand, onMouseLeave: handleCollapse, onClick: handleToggle, "aria-expanded": isExpanded, role: "region", "aria-label": "Projects showcase", children: [_jsxs("div", { className: styles.label_container, children: [_jsx(GridIcon, { className: styles.label_icon }), _jsx("span", { className: styles.label_text, children: "Projects" })] }), _jsx("div", { className: styles.projects_grid, children: _jsx("ul", { className: styles.projects_list, children: PROJECTS.map((project, index) => (_jsx("li", { className: styles.project_item, style: {
                            '--animation-order': index
                        }, children: _jsxs("a", { href: project.link, className: styles.project_link, target: "_blank", rel: "noopener noreferrer", "aria-label": `View ${project.title} project`, children: [_jsxs("div", { className: styles.project_content, children: [_jsx("h2", { className: styles.project_title, children: project.title }), _jsx("div", { className: styles.project_type, children: project.type })] }), _jsx("div", { className: styles.project_thumbnail, style: { backgroundImage: `url(${project.thumb})` } })] }) }, project.title))) }) })] }));
};
export default ProjectsIsland;
