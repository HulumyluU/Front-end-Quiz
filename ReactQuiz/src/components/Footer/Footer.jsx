import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      

      <div className={styles.footerBottom}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/HulumyluU" target="_blank" rel="noopener noreferrer">View My GitHub Projects</a>
          <a href="https://www.linkedin.com/in/maksym-sovyk/" target="_blank" rel="noopener noreferrer">Connect with Me on LinkedIn</a>
          <a href="https://hulumyluu.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">Explore My Portfolio</a>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Maksym Sovyk | Front-end Quiz Master | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 