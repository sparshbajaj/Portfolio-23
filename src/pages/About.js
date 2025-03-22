import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './About.module.css';
import TrekImage from '/assets/Trek.b27994640ca600cba4e7.jpeg';
import FigmaIcon from '/assets/figma.svg';
import NotionIcon from '/assets/notion2.svg';
import XDIcon from '/assets/adobe-xd.svg';
import Miro from '/assets/miro.svg';
import AIIcon from '/assets/ai.svg';
import PSIcon from '/assets/ps.svg';
import WebflowIcon from '/assets/webflow.svg';
import AEIcon from '/assets/after-effects.svg';
import AmericanFlag from '/assets/american_flag2.svg';
import IndiaFlag from '/assets/India_flag.svg';
import DownloadButton from '../components/DownloadButton';
const About = () => {
    // Software tools data organized in arrays for easier management
    const proficientTools = [
        { icon: FigmaIcon, name: "Figma" },
        { icon: NotionIcon, name: "Notion" },
        { icon: XDIcon, name: "Adobe XD" },
        { icon: Miro, name: "Miro" },
        { icon: AIIcon, name: "Illustrator" },
        { icon: PSIcon, name: "Photoshop" }
    ];
    const learningTools = [
        { icon: WebflowIcon, name: "Webflow" },
        { icon: AEIcon, name: "After Effects" }
    ];
    // Languages data for easier management
    const languages = [
        { flag: AmericanFlag, country: "USA", fluency: "Fluent", name: "English" },
        { flag: IndiaFlag, country: "India", fluency: "Native", name: "Hindi" },
        { flag: IndiaFlag, country: "India", fluency: "Native", name: "Punjabi" }
    ];
    // Work history data
    const workHistory = ["Agency", "Startup", "In-house", "Freelance"];
    // Disciplines data
    const disciplines = [
        "UI/UX", "Web Design", "Illustration", "HTML", "CSS",
        "Research", "Strategy", "Ideation", "Prototyping",
        "Wireframing", "Interaction Design", "Visual Design", "Game Design"
    ];
    return (_jsxs("div", { id: "swup", className: styles.content_container, children: [_jsxs("section", { className: styles.hero_container, children: [_jsx("div", { className: styles.hero_image, children: _jsx("img", { src: TrekImage, alt: "Sparsh Bajaj" }) }), _jsxs("div", { className: styles.hero_text, children: [_jsx("h1", { className: styles.page_title, children: "About Me" }), _jsx("p", { className: styles.default_paragraph_about, children: "I was always a curious child, constantly investigating the world around me and asking how and why things function. Driven by a passion to solve problems and make the world better, I have made a career in the UX space. I enjoy working in a fast-paced environment and I'm always up for a challenge." }), _jsx("p", { className: styles.default_paragraph_about, children: "Before transitioning to UI/UX design, I built my foundation as a web developer. I earned my bachelor's in Computer Science with a focus on cyber security through IBM, where I also began honing my technical skills by creating landing pages and crafting HTML email campaigns." }), _jsx("p", { className: styles.default_paragraph_about, children: "My journey took an exciting turn when I joined startups that championed AI-first approaches. At MemorialCall\u2014a cutting-edge, AI-powered video conferencing platform and knowledge base\u2014and later at Social Talent, an edtech company revolutionizing HR and recruiting with AI, I played a key role in integrating AI into their platforms. These experiences not only deepened my understanding of AI workflows and design principles for AI-first environments but also taught me to thrive in dynamic startup settings, take on multiple roles, and build accessible AI solutions using robust design systems." }), _jsx("p", { className: styles.default_paragraph_about, children: "When I'm not at work, I enjoy brewing my own \u2615 coffee by the liffey river, listening to \uD83C\uDFB5 music, and \uD83C\uDF0D exploring the world with my friends." }), _jsx(DownloadButton, { href: "/assets/Sparsh-Bajaj UX-Designer-CV.pdf", download: "Sparsh-Bajaj UX-Designer-CV.pdf", children: _jsx("span", { children: "Download CV" }) })] })] }), _jsxs("section", { className: styles.stats, children: [_jsxs("div", { className: styles.stat_wrapper, children: [_jsx("div", { className: styles.stat_title, children: "Full Name" }), _jsx("div", { className: styles.stat, children: "Sparsh Bajaj" })] }), _jsxs("div", { className: styles.stat_wrapper, children: [_jsx("div", { className: styles.stat_title, children: "Degree" }), _jsx("div", { className: styles.stat, children: "MSc. Cyber Security & B.Tech Computer Science" })] }), _jsxs("div", { className: styles.stat_wrapper, children: [_jsx("div", { className: styles.stat_title, children: "Experience" }), _jsx("div", { className: styles.stat, children: "6+ Years" })] }), _jsxs("div", { className: `${styles.stat_wrapper}`, children: [_jsx("div", { className: styles.stat_title, children: "Software" }), _jsxs("div", { className: styles.software_content, children: [_jsxs("div", { className: styles.software_group, children: [_jsx("div", { className: styles.software_label, children: "Proficient" }), _jsx("div", { className: styles.software_icons, children: proficientTools.map((tool, index) => (_jsx("img", { src: tool.icon, alt: tool.name, title: tool.name }, index))) })] }), _jsxs("div", { className: styles.software_group, children: [_jsx("div", { className: styles.software_label, children: "Learning" }), _jsx("div", { className: styles.software_icons, children: learningTools.map((tool, index) => (_jsx("img", { src: tool.icon, alt: tool.name, title: tool.name }, index))) })] })] })] }), _jsxs("div", { className: styles.stat_wrapper_half, children: [_jsx("div", { className: styles.stat_title, children: "Work History" }), _jsx("div", { className: styles.checklist, children: workHistory.map((item, index) => (_jsxs("div", { className: styles.checklist_item, children: [_jsx("span", { className: styles.checkbox, children: "\u2713" }), " ", item] }, index))) })] }), _jsxs("div", { className: styles.stat_wrapper_wide, children: [_jsx("div", { className: styles.stat_title, children: "Disciplines" }), _jsx("ul", { className: styles.disciplines_list, children: disciplines.map((discipline, index) => (_jsx("li", { children: discipline }, index))) })] }), _jsxs("div", { className: `${styles.stat_wrapper_wide} ${styles.half_height}`, children: [_jsx("div", { className: styles.stat_title, children: "Languages" }), _jsx("div", { className: styles.languages_content, children: languages.map((language, index) => (_jsxs("div", { className: styles.language_item, children: [_jsx("img", { src: language.flag, alt: `${language.country} Flag`, className: styles.flag }), _jsxs("div", { className: styles.language_info, children: [_jsx("div", { className: styles.language_fluency, children: language.fluency }), _jsx("div", { className: styles.language_name, children: language.name })] })] }, index))) })] }), _jsxs("div", { className: `${styles.stat_wrapper_wide} ${styles.half_height}`, children: [_jsx("div", { className: styles.stat_title, children: "Myers-Briggs" }), _jsx("div", { className: styles.stat, children: "INFJ-T" })] })] })] }));
};
export default About;
