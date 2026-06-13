import { Helmet } from 'react-helmet-async';

const JSONLDSchema = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sparsh Bajaj",
          "url": "https://sparshbajaj.me",
          "sameAs": [
            "https://linkedin.com/in/sparsh-bajaj",
            "https://github.com/sparshbajaj",
            "https://twitter.com/sparshbajaj"
          ],
          "jobTitle": "Software Engineer & Tech Educator",
          "knowsAbout": [
            "React",
            "TypeScript",
            "Node.js",
            "Web3",
            "DevOps",
            "Cloud Architecture"
          ],
          "alumniOf": [
            {
              "@type": "CollegeOrUniversity",
              "name": "National University of Ireland, Galway"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Galway",
            "addressRegion": "County Galway",
            "addressCountry": "IE"
          }
        }, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Sparsh Bajaj Portfolio",
          "url": "https://sparshbajaj.me",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://sparshbajaj.me?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }, null, 2)}
      </script>
    </Helmet>
  );
};

export default JSONLDSchema;