import React from 'react';
import './App.css';
import './index.css'; // import Tailwind CSS styles
import FloatingMenu from './components/FloatingMenu';
import Footer from './components/Footer';
import WorkPreviews from './components/WorkPreviews';
import WorkDetail from './components/WorkDetail';
import { Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './pages/about';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCiifFCn9dgxqFt5QP60COOdyr1ehImkJg",
    authDomain: "portfo-2020.firebaseapp.com",
    databaseURL: "https://portfo-2020.firebaseio.com",
    projectId: "portfo-2020",
    storageBucket: "portfo-2020.appspot.com",
    messagingSenderId: "391684964433",
    appId: "1:391684964433:web:dfeea801000ab70c44f870",
    measurementId: "G-H6GL2WZ2NZ"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  logEvent(analytics);

  return (
    <div className="App">
      {/* top header menu */}
      <div className="mb-20 menu-fix">
        <FloatingMenu />
        <div style={{ height: '15vh' }}></div>
      </div>
      
      {/* work previews or work detail */}
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<WorkPreviews />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </Router>

      {/* Footer */}
      <div className="mt-20">
          <Footer />
      </div>
    </div>
  );
  
}

export default App;