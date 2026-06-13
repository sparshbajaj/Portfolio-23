// Type definitions for Ghost Content API responses
export interface GhostPost {
  id: string;
  title: string;
  slug: string;
  url: string;
  excerpt: string;
  feature_image: string | null;
  published_at: string;
  reading_time: number;
  custom_excerpt: string | null;
}
