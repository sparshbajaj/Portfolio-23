import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            I'm a UX/UI designer with 6+ years of experience creating intuitive digital experiences.
            My work focuses on user-centered design principles and data-driven decision making.
          </p>
          <div className={styles.skills}>
            <h2>Core Skills</h2>
            <ul className={styles.skillsList}>
              <li>User Research &amp; Testing</li>
              <li>Interaction Design</li>
              <li>Prototyping</li>
              <li>Design Systems</li>
              <li>Front-end Development Basics</li>
            </ul>
          </div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.profileImage}>
            <img src="/assets/Trek.b27994640ca600cba4e7.jpeg" alt="Sparsh Bajaj" />
          </div>
          <a href="/assets/Sparsh-Bajaj UX-Designer-CV.pdf" download className={styles.downloadCV}>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;