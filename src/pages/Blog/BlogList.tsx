import { useState, useEffect } from 'react';
import styles from './Blog.module.css';
import { useSEO } from '../../hooks/useSEO';
import useReveal from '../../hooks/useReveal';

interface Post {
  id: string;
  title: string;
  slug: string;
  url: string;
  excerpt: string;
  feature_image: string | null;
  published_at: string;
  reading_time: number;
}

const GHOST_API_URL = 'https://blog.sparshbajaj.me';
const GHOST_CONTENT_API_KEY = import.meta.env.VITE_GHOST_CONTENT_API_KEY;

const BlogList = () => {
  useSEO({
    title: 'Blog | Sparsh Bajaj',
    description: 'Read articles and case studies on UI/UX design, product strategy, and front-end development by Sparsh Bajaj.',
    canonicalUrl: 'https://sparshbajaj.me/blog',
  });

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { ref: gridRef, isVisible: gridVisible } = useReveal({ threshold: 0.1 });

  useEffect(() => {
    // Set the global background to white for this page only
    document.body.style.backgroundColor = '#ffffff';
    
    // Cleanup function to reset background when navigating away
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    if (!GHOST_CONTENT_API_KEY) {
      setError('Ghost Content API key not configured');
      setLoading(false);
      return;
    }

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${GHOST_API_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&fields=id,title,slug,url,excerpt,feature_image,published_at,reading_time`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        setPosts(data.posts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.blogContainer} ref={gridRef}>
      {loading ? (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <span>Loading posts...</span>
        </div>
      ) : error ? (
        <div className={styles.error}>Error: {error}</div>
      ) : posts.length === 0 ? (
        <div className={styles.noPosts}>No posts found yet. Check back later!</div>
      ) : (
        <div className={styles.grid}>
          {posts.map((post, index) => (
            <a 
              href={post.url} 
              key={post.id} 
              className={`${styles.card} ${styles.revealItem} ${gridVisible ? styles.revealVisible : ''}`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              {post.feature_image && (
                <div className={styles.imageContainer}>
                  <img src={post.feature_image} alt={post.title} className={styles.featureImage} loading="lazy" />
                </div>
              )}
              <div className={styles.content}>
                <h2 className={styles.title}>{post.title}</h2>
                <div className={styles.meta}>
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })} &bull; {post.reading_time} min read
                </div>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;