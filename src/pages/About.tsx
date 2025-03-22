import React from 'react';
import styles from './About.module.css';
import TrekImage from '/assets/Trek.b27994640ca600cba4e7.jpeg';
import FigmaIcon from '/assets/figma.svg';
import NotionIcon from '/assets/notion2.svg';
import XDIcon from '/assets/adobe-xd.svg';
import MiroIcon from '/assets/miro.svg';
import AIIcon from '/assets/ai.svg';
import PSIcon from '/assets/ps.svg';
import WebflowIcon from '/assets/webflow.svg';
import AEIcon from '/assets/after-effects.svg';
import AmericanFlag from '/assets/american_flag2.svg';
import IndiaFlag from '/assets/India_flag.svg';

const About = () => {
  return (
    <div id="swup" className={styles.content_container}>
      {/* Hero Section */}
      <div className={styles.hero_container}>
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

          <button className={styles.cv_button}>
            <a href="/assets/Sparsh-Bajaj UX-Designer-CV.pdf" download>
              <span className={styles.cv_button_top}>Download CV</span>
            </a>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.stats}>
        {/* Full Name */}
        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Full Name</div>
          <div className={styles.stat}>Sparsh Bajaj</div>
        </div>

        {/* Degree */}
        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Degree</div>
          <div className={styles.stat}>
            MSc. Cyber Security & B.Tech Computer Science
          </div>
        </div>

        {/* Experience */}
        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Experience</div>
          <div className={styles.stat}>6+ Years</div>
        </div>

        {/* Software */}
        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Software</div>
          <div className={styles.software_content}>
            <div className={styles.software_group}>
              <div className={styles.software_label}>Proficient</div>
              <div className={styles.software_icons}>
                <img src={FigmaIcon} alt="Figma" />
                <img src={NotionIcon} alt="Notion" />
                <img src={XDIcon} alt="Adobe XD" />
                <img src={WebflowIcon} alt="Webflow" />
                <img src={AIIcon} alt="Illustrator" />
                <img src={PSIcon} alt="Photoshop" />
              </div>
            </div>
            
            <div className={styles.software_group}>
              <div className={styles.software_label}>Learning</div>
              <div className={styles.software_icons}>
                <img src={WebflowIcon} alt="Webflow" />
                <img src={AEIcon} alt="After Effects" />
              </div>
            </div>
          </div>
        </div>

        {/* Work History */}
        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Work History</div>
          <div className={styles.checklist}>
            <div className={styles.checklist_item}>
              <span className={styles.checkbox}>✓</span> Agency
            </div>
            <div className={styles.checklist_item}>
              <span className={styles.checkbox}>✓</span> Startup
            </div>
            <div className={styles.checklist_item}>
              <span className={styles.checkbox}>✓</span> In-house
            </div>
            <div className={styles.checklist_item}>
              <span className={styles.checkbox}>✓</span> Freelance
            </div>
          </div>
        </div>

        {/* Disciplines */}
        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Disciplines</div>
          <ul className={styles.disciplines_list}>
            <li>UI/UX</li>
            <li>Web Design</li>
            <li>Illustration</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Research</li>
            <li>Strategy</li>
            <li>Ideation</li>
            <li>Prototyping</li>
            <li>Wireframing</li>
            <li>Interaction Design</li>
            <li>Visual Design</li>
            <li>Game Design</li>
          </ul>
        </div>

        {/* Languages */}
        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Languages</div>
          <div className={styles.languages_content}>
            <div className={styles.language_item}>
              <img src={AmericanFlag} alt="USA Flag" className={styles.flag} />
              <div className={styles.language_info}>
                <div className={styles.language_fluency}>Fluent</div>
                <div className={styles.language_name}>English</div>
              </div>
            </div>
            <div className={styles.language_item}>
              <img src={IndiaFlag} alt="India Flag" className={styles.flag} />
              <div className={styles.language_info}>
                <div className={styles.language_fluency}>Native</div>
                <div className={styles.language_name}>Hindi</div>
              </div>
            </div>
            <div className={styles.language_item}>
              <img src={IndiaFlag} alt="Punjabi Flag" className={styles.flag} />
              <div className={styles.language_info}>
                <div className={styles.language_fluency}>Native</div>
                <div className={styles.language_name}>Punjabi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Myers-Briggs */}
        <div className={styles.stat_wrapper}>
          <div className={styles.stat_title}>Myers-Briggs</div>
          <div className={styles.stat}>INFJ-T</div>
        </div>
      </div>
    </div>
  );
};

export default About;
