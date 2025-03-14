import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to React Quiz</h1>
        <p className={styles.description}>
          Test your React.js knowledge with our comprehensive quiz!
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>📚 Comprehensive Questions</h3>
            <p>Covering all major React.js concepts</p>
          </div>
          <div className={styles.feature}>
            <h3>⚡️ Instant Feedback</h3>
            <p>Get immediate results and explanations</p>
          </div>
          <div className={styles.feature}>
            <h3>🎯 Track Progress</h3>
            <p>Monitor your learning journey</p>
          </div>
        </div>
        <Link to="/quiz" className={styles.startButton}>
          Start Quiz
        </Link>
      </main>
    </div>
  );
};

export default Home; 