import { useState } from 'react';
import styles from './ImageWithLoader.module.css';

const ImageWithLoader = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  return (
    <div className={styles.imageWithLoader}>
      {isLoading && (
        <div className={styles.imageLoader}>
          <div className={styles.spinner}></div>
        </div>
      )}
      <img
        loading='lazy'
        src={src}
        alt={alt || "Explanation visualization"}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
          console.error(`Failed to load image: ${src}`);
        }}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default ImageWithLoader;