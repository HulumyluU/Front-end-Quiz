import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import categoriesData from './categories.json'; // storing categories data (icons and descriptions about categories sections)

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Load categories data
    setCategories(categoriesData);
  }, []);

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
            Enhance your front-end development expertise by tackling popular interview questions across React.js, Vue.js, Angular, JavaScript, TypeScript, and HTML & CSS. Sharpen your coding skills, master frameworks, and prepare confidently for your next job interview
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
                    loading="lazy" 
                    src={category.iconSrc} 
                    alt={`${category.title} logo`} 
                    style={{ width: '30px', height: '30px' }} 
                  />
                ) : category.iconType === 'multipleImages' ? (
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {category.iconSrc.map((src, index) => (
                      <img 
                        key={index}
                        src={src} 
                        alt={`${category.title} logo part ${index + 1}`} 
                        style={{ width: '30px', height: '30px' }} 
                      />
                    ))}
                  </div>
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
          to={selectedCategory ? `/quiz/${selectedCategory}` : '#'}
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