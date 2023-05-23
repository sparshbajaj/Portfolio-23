import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css'; // import Tailwind CSS styles
import ReactAnimatedCursor from "react-animated-cursor"
import FloatingMenu from './components/FloatingMenu';
import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WorkPreview from './WorkPreview';
import WorkShowcase from './WorkShowcase';


function App() {
  const [customCursorEnabled, setCustomCursorEnabled] = useState(true);

  return (
    <div className="App">
      {/* top header menu */}
      <div className='mb-20'>
      <FloatingMenu />
      <div style={{ height: '20vh' }}></div>
      </div>
      {/* cursor */}
      {customCursorEnabled && (
        <ReactAnimatedCursor
          innerSize={20}
          outerSize={20}
          color='255,255,255'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          trailingSpeed={2}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: 'exclusion'
          }}
        />
      )}

      {/* hero section */}
      <HeroSection setCustomCursorEnabled={setCustomCursorEnabled} />
      
    </div>
  );
}

export default App;