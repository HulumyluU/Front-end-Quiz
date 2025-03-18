import { useState } from 'react';
import styles from './ImageWithLoader.module.css'; // Import the separate CSS module


const ImageWithLoader = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className={styles.imageWithLoader}>
      {isLoading && (
        <div className={styles.imageLoader}>
          <div className={styles.spinner}></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default ImageWithLoader;