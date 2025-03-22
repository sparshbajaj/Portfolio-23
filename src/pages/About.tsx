import React from 'react';
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

  return (
    <div id="swup" className={styles.content_container}>
      {/* Hero Section */}
      <section className={styles.hero_container}>
        <div className={styles.hero_image}>
          <img src={TrekImage} alt="Sparsh Bajaj" />
        </div>
        
        <div className={styles.hero_text}>
          <h1 className={styles.page_title}>About Me</h1>
          <p className={styles.default_paragraph_about}>
            I was always a curious child, constantly investigating the world around me and asking how and why things function.
            Driven by a passion to solve problems and make the world better, I have made a career in the UX space. I enjoy working
            in a fast-paced environment and I'm always up for a challenge.
          </p>
          
          <p className={styles.default_paragraph_about}>
            Before transitioning to UI/UX design, I built my foundation as a web developer. I earned my bachelor's in Computer Science with a focus 
            on cyber security through IBM, where I also began honing my technical skills by creating landing pages and crafting HTML email campaigns.
          </p>
          
          <p className={styles.default_paragraph_about}>
            My journey took an exciting turn when I joined startups that championed AI-first approaches. At MemorialCall—a cutting-edge, 
            AI-powered video conferencing platform and knowledge base—and later at Social Talent, an edtech company revolutionizing HR and 
            recruiting with AI, I played a key role in integrating AI into their platforms. These experiences not only deepened my 
            understanding of AI workflows and design principles for AI-first environments but also taught me to thrive in dynamic startup 
            settings, take on multiple roles, and build accessible AI solutions using robust design systems.
          </p>
          
          <p className={styles.default_paragraph_about}>
            When I'm not at work, I enjoy brewing my own ☕ coffee by the liffey river, listening to 🎵 music, and 🌍 exploring the world with my friends.
          </p>

          <DownloadButton
            href="/assets/Sparsh-Bajaj UX-Designer-CV.pdf"
            download="Sparsh-Bajaj UX-Designer-CV.pdf"
          >
            <span>Download CV</span>
          </DownloadButton>
        </div>
      </section>

      {/* Stats Grid */}
      <section className={styles.stats}>
        {/* First Row - 3 blocks (Full Name, Degree, Experience) */}
        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Full Name</div>
          <div className={styles.stat}>Sparsh Bajaj</div>
        </div>

        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Degree</div>
          <div className={styles.stat}>
            MSc. Cyber Security & B.Tech Computer Science
          </div>
        </div>

        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Experience</div>
          <div className={styles.stat}>6+ Years</div>
        </div>

        {/* Software section - full width (spans all 6 columns) */}
        <div className={`${styles.stat_wrapper}`}>
          <div className={styles.stat_title}>Software</div>
          <div className={styles.software_content}>
            <div className={styles.software_group}>
              <div className={styles.software_label}>Proficient</div>
              <div className={styles.software_icons}>
                {proficientTools.map((tool, index) => (
                  <img key={index} src={tool.icon} alt={tool.name} title={tool.name} />
                ))}
              </div>
            </div>
            
            <div className={styles.software_group}>
              <div className={styles.software_label}>Learning</div>
              <div className={styles.software_icons}>
                {learningTools.map((tool, index) => (
                  <img key={index} src={tool.icon} alt={tool.name} title={tool.name} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work History - half width */}
        <div className={styles.stat_wrapper_half}>
          <div className={styles.stat_title}>Work History</div>
          <div className={styles.checklist}>
            {workHistory.map((item, index) => (
              <div key={index} className={styles.checklist_item}>
                <span className={styles.checkbox}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Disciplines - 1.5 width */}
        <div className={styles.stat_wrapper_wide}>
          <div className={styles.stat_title}>Disciplines</div>
          <ul className={styles.disciplines_list}>
            {disciplines.map((discipline, index) => (
              <li key={index}>{discipline}</li>
            ))}
          </ul>
        </div>

        {/* Third Row - Languages and Myers-Briggs (both half-height) */}
        <div className={`${styles.stat_wrapper_wide} ${styles.half_height}`}>
          <div className={styles.stat_title}>Languages</div>
          <div className={styles.languages_content}>
            {languages.map((language, index) => (
              <div key={index} className={styles.language_item}>
                <img src={language.flag} alt={`${language.country} Flag`} className={styles.flag} />
                <div className={styles.language_info}>
                  <div className={styles.language_fluency}>{language.fluency}</div>
                  <div className={styles.language_name}>{language.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Myers-Briggs - half-height */}
        <div className={`${styles.stat_wrapper_wide} ${styles.half_height}`}>
          <div className={styles.stat_title}>Myers-Briggs</div>
          <div className={styles.stat}>INFJ-T</div>
        </div>
      </section>
    </div>
  );
};

export default About;