import { useState, useEffect } from 'react';
import styles from './Blog.module.css';

// Import JSON data
import blogData from './blogData.json';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  
  useEffect(() => {
    // Set blog posts from imported data
    if (blogData && blogData.posts) {
      setBlogPosts(blogData.posts);
    }
  }, []);

  // Get all unique tags
  const allTags = blogPosts && blogPosts.length > 0
    ? [...new Set(blogPosts.flatMap(post => post.tags || []))]
    : [];
  
  // Filter posts by selected tag
  const filteredPosts = selectedTag && blogPosts && blogPosts.length > 0
    ? blogPosts.filter(post => post.tags && post.tags.includes(selectedTag))
    : blogPosts || [];

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/800x400?text=Front-end+Quiz";
  };

  // Handle redirect to the specific link
  const handleReadMoreClick = (link) => {
    // Fix URL if it has incorrect format (https/: instead of https://)
    let fixedUrl = link;
    if (link.startsWith('https/:')) {
      fixedUrl = link.replace('https/:', 'https://');
    }
    window.open(fixedUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Front-end Quiz Blog</h1>
        <p className={styles.description}>
          Stay updated with the latest front-end development trends, tips, and tutorials
        </p>
        
        {/* Tags filter */}
        <div className={styles.tagsContainer}>
          <button 
            className={`${styles.tagButton} ${selectedTag === '' ? styles.activeTag : ''}`}
            onClick={() => setSelectedTag('')}
          >
            All
          </button>
          {allTags.map(tag => (
            <button 
              key={tag}
              className={`${styles.tagButton} ${selectedTag === tag ? styles.activeTag : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog posts */}
        <div className={styles.blogGrid}>
          {filteredPosts.map(post => (
            <article key={post.id} className={styles.blogCard}>
              <div className={styles.blogImageContainer}>
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className={styles.blogImage} 
                  onError={handleImageError}
                />
              </div>
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogDate}>{post.date}</span>
                  <span className={styles.blogAuthor}>by {post.author}</span>
                </div>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <div className={styles.tagList}>
                  {post.tags && post.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <button 
                  onClick={() => handleReadMoreClick(post.link)} 
                  className={styles.readMoreButton}
                >
                  Visit Course
                </button>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter signup */}
        <div className={styles.newsletterSection}>
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest front-end development news, tips, and resources directly to your inbox</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Blog;