import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">React Quiz</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
        <Link to="/blog" className={styles.navLink}>Blog</Link>
      </nav>
    </header>
  );
};

export default Header; 