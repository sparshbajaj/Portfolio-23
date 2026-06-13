import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BlogList from './pages/Blog/BlogList';
import NotFound from './pages/NotFound';
import JSONLDSchema from './components/JSONLDSchema';
import styles from './App.module.css';

// Analytics component to track page views
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title
      });
    }
  }, [location]);

  return null;
};

// Routes wrapper that keys on pathname for page transition animation
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <main className={styles.mainContent} key={location.pathname}>
      <div className={styles.pageTransition}>
        <JSONLDSchema />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
};

function App() {
  return (
    <Router>
      <Analytics />
      <div className={styles.appContainer}>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;