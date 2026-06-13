import React from 'react';
import styles from './DownloadButton.module.css';

interface DownloadButtonProps {
  children: React.ReactNode;
  href: string;
  download: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ children, href, download }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = href;
    link.download = download;
    link.click();
  };

  return (
    <div className={styles.wrapper}>
      <button 
        className={styles.button} 
        onClick={handleDownload}
      >
        <span className={styles.buttonSpan}>
          {children}
        </span>
      </button>
    </div>
  );
};

export default DownloadButton;