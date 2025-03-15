import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Front-end Quiz Master</h1>
        
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Why We Created This Quiz</h2>
          <p>
            Front-end Quiz Master was developed to help developers strengthen their knowledge
            in key front-end technologies. Whether you're preparing for an interview, refreshing your
            skills, or simply testing your knowledge, our carefully curated questions provide
            a comprehensive assessment of your front-end expertise.
          </p>
        </div>
        
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Learning Through Practice</h2>
          <p>
            Studies show that active recall through quizzes is one of the most effective ways to 
            retain information. By testing yourself on real-world front-end development concepts,
            you're not just memorizing facts - you're building a deeper understanding of how
            these technologies work together.
          </p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>Interview Preparation</h3>
            <p>Practice with commonly asked interview questions to boost your confidence.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3>Skill Assessment</h3>
            <p>Identify your strengths and areas for improvement in different front-end domains.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <h3>Stay Updated</h3>
            <p>Keep up with the latest trends and best practices in the fast-evolving front-end landscape.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </div>
            <h3>Technical Growth</h3>
            <p>Expand your understanding of core concepts with our detailed explanations.</p>
          </div>
        </div>
        
        <div className={styles.card}>
          <h2 className={styles.subtitle}>Our Approach</h2>
          <p>
            Each quiz category focuses on essential concepts and practical applications. 
            We've designed questions that challenge your understanding and encourage deeper learning, 
            rather than simple memorization. After completing quizzes, you'll receive detailed 
            explanations that help solidify your knowledge.
          </p>
        </div>
        
        <div className={styles.callToAction}>
          <h2>Ready to test your skills?</h2>
          <a href="/" className={styles.actionButton}>Start a Quiz Now</a>
        </div>
      </div>
    </div>
  );
};

export default About;