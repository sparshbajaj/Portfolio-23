import { useState, useEffect } from 'react';
import { Project, STATIC_PROJECTS } from '../data/projects';

const GHOST_API_URL = 'https://blog.sparshbajaj.me';
const GHOST_CONTENT_API_KEY = '6dee514456fe30f2ebe98ef29a';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>(STATIC_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await fetch(
          `${GHOST_API_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&filter=featured:true&fields=title,url,feature_image,custom_excerpt`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch featured projects');
        }

        const data = await response.json();
        
        const ghostProjects: Project[] = data.posts.map((post: any) => ({
          title: post.title,
          type: 'CASE STUDY', // Generic type for blog posts
          thumb: post.feature_image || '/assets/thumb.png',
          link: post.url
        }));

        // Combine Ghost featured posts with static projects
        // We put Ghost projects first as they are "Featured"
        setProjects([...ghostProjects, ...STATIC_PROJECTS]);
      } catch (err) {
        console.error('Error fetching featured projects:', err);
        setProjects(STATIC_PROJECTS); // Fallback to static
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
  }, []);

  return { projects, loading };
};
