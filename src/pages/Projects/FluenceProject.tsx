import styles from './FluenceProject.module.css';

export default function FluenceProject() {
  return (
    <div className={styles.container} > 
      <div style={{ 
        width: '98vw',
        height: 'calc(100vh - 30px)',
        position: 'relative',
        paddingLeft: '1vw',
        overflow: 'hidden',
      }}>
        <iframe
          src="https://loving-sweatshirt-6fa.notion.site/ebd/c367710cd28542cc8f122508f86b106e"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups"
          loading="lazy"
        />
      </div>
    </div>
  );
}
