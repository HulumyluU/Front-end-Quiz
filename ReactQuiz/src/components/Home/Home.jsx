import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const categories = [
    {
      id: 'react',
      title: 'React.js',
      icon: '⚛️',
      description: 'Test your React.js knowledge from basics to advanced concepts'
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      // Replace emoji with an image tag
      iconType: 'image',
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: 'Master core JavaScript concepts and modern ES6+ features'
    },
    {
      id: 'typescript',
      title: 'TypeScript',
      iconType: 'image',
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      description: 'Explore TypeScript types, interfaces, and advanced features'
    },
    {
      id: 'browser',
      title: 'Browser & DOM',
      icon: '🌐',
      description: 'Learn about DOM manipulation, event loop, and browser APIs'
    },
    {
      id: 'html-css',
      title: 'HTML & CSS',
      iconType: 'image',
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      description: 'Test your markup and styling skills'
    },
    {
      id: 'security',
      title: 'Front-end Security',
      icon: '🔒',
      description: 'Learn about secure coding practices'
    }
  ];

  const handleStartQuiz = () => {
    if (!selectedCategory) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }
    // Warning will be hidden when a category is selected
    setShowWarning(false);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Front-end Quiz Master</h1>
        <p className={styles.description}>
          Test your front-end development knowledge across different areas
          with most popular interview questions. Improve your skills and get ready for your next interview.
        </p>

        <div className={styles.categories}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${styles.category} ${
                selectedCategory === category.id ? styles.selected : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className={styles.categoryIcon}>
                {category.iconType === 'image' ? (
                  <img 
                    src={category.iconSrc} 
                    alt={`${category.title} logo`} 
                    style={{ width: '30px', height: '30px' }} 
                  />
                ) : (
                  category.icon
                )}
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>

        {showWarning && (
          <div className={styles.warning}>
            Please select a category before starting the quiz!
          </div>
        )}

        <Link
          to={selectedCategory ? `/quiz?category=${selectedCategory}` : '#'}
          className={styles.startButton}
          onClick={(e) => {
            if (!selectedCategory) {
              e.preventDefault();
              handleStartQuiz();
            }
          }}
        >
          Start Quiz
        </Link>
      </main>
    </div>
  );
};

export default Home;