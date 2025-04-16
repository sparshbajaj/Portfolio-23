import React from 'react';
import './App.css';
import './index.css';
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

  // --- Firebase Config (Keep as is) ---
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
  // --- End Firebase Config ---

  return (
    <div className="App flex flex-col min-h-screen"> {/* Ensure App takes full height */}
      {/* FloatingMenu is fixed, so it's outside the main flow */}
      {/* Removed mb-20 and wrapper div for menu */}
      <FloatingMenu />
      {/* Removed fixed height spacer div */}

      {/* Main content area with padding for fixed header and footer */}
      {/* Added main tag, pt-16/md:pt-20 for menu height, pb for footer, flex-grow */}
      <main className="flex-grow pt-16 md:pt-20 pb-16 sm:pb-24">
        <Router>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<WorkPreviews />} />
              <Route path="/work/:slug" element={<WorkDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </main>

      {/* Footer */}
      {/* Removed mt-20 from wrapper div */}
      <Footer />
    </div>
  );
  
}

export default App;