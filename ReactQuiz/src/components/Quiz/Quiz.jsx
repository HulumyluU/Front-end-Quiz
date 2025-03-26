import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Quiz.module.css';

// Import all quiz data
import reactQuiz from '../../data/reactQuiz.json';
import javascriptQuiz from '../../data/javascriptQuiz.json';
import typescriptQuiz from '../../data/typescriptQuiz.json';
import browserQuiz from '../../data/browserQuiz.json';
import htmlCssQuiz from '../../data/htmlCssQuiz.json';
import securityQuiz from '../../data/securityQuiz.json';
import angularQuiz from '../../data/angularQuiz.json';
import vueQuiz from '../../data/vueQuiz.json';
import ImageWithLoader from './ImageWithLoader'; // animation for loader if img did not pop up immidiatelly

const quizData = {
  react: reactQuiz,
  angular: angularQuiz,
  vue: vueQuiz,
  javascript: javascriptQuiz,
  typescript: typescriptQuiz,
  browser: browserQuiz,
  'html-css': htmlCssQuiz,
  security: securityQuiz
};



function Quiz(){
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get('category');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Redirect to home if no category is selected or category doesn't exist
    if (!category || !quizData[category]) {
      navigate('/');
    }
  }, [category, navigate]);

  if (!category || !quizData[category]) {
    return null;
  }

  const currentQuizData = quizData[category];
  const questions = currentQuizData.questions;

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className={styles.container}>
        <div className={styles.quizComplete}>
          <h1 className={styles.title}>Quiz Completed! 🎉</h1>
          <p className={styles.score}>
            Your score: {score} out of {questions.length}
          </p>
          <div className={styles.actions}>
            <button className={styles.button} onClick={resetQuiz}>
              Try Again
            </button>
            <button 
              className={`${styles.button} ${styles.mainMenuButton}`} 
              onClick={() => navigate('/')}
            >
              Go to Main Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuizQuestion = questions[currentQuestion];

  return (
    <div className={styles.container}>
      <div className={styles.quizCard}>
        <div className={styles.quizHeader}>
          <h2 className={styles.categoryTitle}>{currentQuizData.name}</h2>
          <div className={styles.progress}>
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
        
        <h3 className={styles.title}>{currentQuizQuestion.title}</h3>
        <p className={styles.question}>{currentQuizQuestion.question}</p>

        <div className={styles.options}>
          {currentQuizQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`${styles.option} ${
                selectedAnswer === index
                  ? index === currentQuizQuestion.correctAnswer
                    ? styles.correct
                    : styles.incorrect
                  : ''
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <div className={styles.actions}>
            <button
              className={styles.button}
              onClick={() => setShowExplanation(!showExplanation)}
            >
              {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
            </button>
            <button 
              onClick={handleNextQuestion} 
              className={styles.button}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        )}

        {showExplanation && selectedAnswer !== null && (
          <div className={styles.explanation}>
            <h3>Explanation:</h3>
            <p>{currentQuizQuestion.explanation}</p>
            {currentQuizQuestion.imageUrl && (
              <div className={styles.imageContainer}>
                <ImageWithLoader
                  src={currentQuizQuestion.imageUrl}
                  alt="Explanation visualization"
                  className={styles.explanationImage}
                />
              </div>
            )}
          </div>
        )}

        {quizCompleted && (
          <button 
            onClick={() => navigate('/')} 
            className={`${styles.button} ${styles.mainMenuButton}`}
          >
            Go to Main Menu
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;