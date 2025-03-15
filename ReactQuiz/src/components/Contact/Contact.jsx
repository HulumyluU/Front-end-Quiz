import styles from './Contact.module.css';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.description}>
          Have questions about Front-end Quiz Master? Feel free to reach out!
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <h3>📧 Email</h3>
              <p><a href="ms3713287@gmail.com">ms3713287@gmail.com</a></p>
            </div>
            <div className={styles.contactCard}>
              <h3>💻 GitHub</h3>
              <a href="https://github.com/HulumyluU/Front-end-Quiz" target="_blank" rel="noopener noreferrer">
                @reactquiz
              </a>
            </div>
            <div className={styles.contactCard}>
              <h3>🌐 LinkedIn</h3>
              <a href="https://www.linkedin.com/in/maksym-sovyk/" target="_blank" rel="noopener noreferrer">
                React Quiz
              </a>
            </div>
            <div className={styles.contactCard}>
              <h3>🐦 Twitter</h3>
              <a href="https://twitter.com/reactquiz" target="_blank" rel="noopener noreferrer">
                @reactquiz
              </a>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
