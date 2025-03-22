import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Header />
        <main className={styles.mainContent} style={{ padding: '0 9vw' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
