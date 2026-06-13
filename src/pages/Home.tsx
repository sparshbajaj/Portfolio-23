import styles from './Home.module.css';
import Weather from '../components/Weather';
import { useState, useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import useReveal from '../hooks/useReveal';

const Home = () => {
  useSEO({
    title: 'Sparsh Bajaj | UX Designer & Creative Developer',
    description: 'Explore innovative design solutions and projects in UX/UI design and front-end development by Sparsh Bajaj.',
    canonicalUrl: 'https://sparshbajaj.me/',
  });

  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { ref: headingRef, isVisible: headingVisible } = useReveal<HTMLHeadingElement>({ threshold: 0.3 });
  const { ref: paragraphRef, isVisible: paragraphVisible } = useReveal<HTMLParagraphElement>({ threshold: 0.3 });
  const { ref: imageRef, isVisible: imageVisible } = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <>
      <div className={styles.contentContainer}>
        <div className={styles.textBlock}>
          <h1 
            ref={headingRef}
            className={`${styles.heading} ${styles.revealItem} ${headingVisible ? styles.revealVisible : ''}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Transforming Complexity into Elegant Solutions
          </h1>
          <p 
            ref={paragraphRef}
            className={`${styles.subheading} ${styles.revealItem} ${paragraphVisible ? styles.revealVisible : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            Idea &gt; Research &gt; Design &gt; Test &gt; Learn from it &gt; Make it better &gt; Test &gt;
            Learn from it &gt; Keep making it better &gt; Keep testing
          </p>
          <p className={styles.paragraph}>
            I am a Sci-fi, space geek, and tech savvy at heart. Simplicity, geometry, 
            and symmetry are at the core of my aesthetics. With over 6 years of experience 
            in UX, research, ideation and UI design my main focus area is to solve any 
            complex issue to make it easier for end user, I always A/B test and backup my 
            designs with data, which not just helps me decide what's best but also helps 
            stakeholders to understand why designs are necessary. Currently looking for 
            opportunities in Dublin, Ireland <Weather />
          </p>
        </div>
        <div 
          ref={imageRef}
          className={`${styles.imageBlock} ${styles.revealItem} ${imageVisible ? styles.revealVisible : ''}`}
          style={{ transitionDelay: '0.3s' }}
        >
          <div className={styles.profileImage} />
          <div className={styles.nowPlaying}>
            <img 
              src="/assets/spotify-color-svgrepo-com.svg" 
              alt="Spotify" 
              className={styles.spotifyIcon}
            />
            <span>Now Listening: UI Breakfast: UI/UX Design and Product Strategy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;