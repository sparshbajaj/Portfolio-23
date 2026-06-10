import { useEffect } from 'react';

interface SEOMetadata {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

export const useSEO = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
  canonicalUrl,
}: SEOMetadata) => {
  useEffect(() => {
    // 1. Update tab title
    document.title = title;

    // Helper function to update meta tag content by selector
    const updateMetaTag = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    // 2. Update description meta
    updateMetaTag('meta[name="description"]', description);

    // 3. Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', ogTitle || title);
    updateMetaTag('meta[property="og:description"]', ogDescription || description);
    updateMetaTag('meta[property="og:url"]', ogUrl || window.location.href);

    // 4. Update Twitter tags
    updateMetaTag('meta[property="twitter:title"]', ogTitle || title);
    updateMetaTag('meta[property="twitter:description"]', ogDescription || description);
    updateMetaTag('meta[property="twitter:url"]', ogUrl || window.location.href);

    // 5. Update Canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl || window.location.href);
    }
  }, [title, description, ogTitle, ogDescription, ogUrl, canonicalUrl]);
};
