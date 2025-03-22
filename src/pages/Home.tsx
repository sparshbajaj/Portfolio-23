import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.contentContainer}>
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>Transforming Complexity into Elegant Solutions</h1>
          <p className={styles.subheading}>
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
            opportunities in Dublin, Ireland.
          </p>
        </div>
        <div className={styles.imageBlock}>
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