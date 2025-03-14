import { useState } from 'react';
import styles from './Quiz.module.css';
import quizData from '../../data/quizQuestions.json';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    if (answerIndex === quizData.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
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
            Your score: {score} out of {quizData.questions.length}
          </p>
          <button className={styles.button} onClick={resetQuiz}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const currentQuizQuestion = quizData.questions[currentQuestion];

  return (
    <div className={styles.container}>
      <div className={styles.quizCard}>
        <div className={styles.progress}>
          Question {currentQuestion + 1} of {quizData.questions.length}
        </div>
        
        <h2 className={styles.title}>{currentQuizQuestion.title}</h2>
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
            <button className={styles.button} onClick={handleNextQuestion}>
              {currentQuestion === quizData.questions.length - 1
                ? 'Finish Quiz'
                : 'Next Question'}
            </button>
          </div>
        )}

        {showExplanation && selectedAnswer !== null && (
          <div className={styles.explanation}>
            <h3>Explanation:</h3>
            <p>{currentQuizQuestion.explanation}</p>
            {currentQuizQuestion.imageUrl && (
              <div className={styles.imageContainer}>
                <img
                  src={currentQuizQuestion.imageUrl}
                  alt="Explanation visualization"
                  className={styles.explanationImage}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
