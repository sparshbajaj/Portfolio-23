import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactAnimatedCursor from 'react-animated-cursor';
import HeroSection  from './HeroSection';

    function WorkPreviews() {

      const [customCursorEnabled, setCustomCursorEnabled] = useState(true);
      const [data, setData] = useState([]);

      useEffect(() => {
        fetch('https://raw.githubusercontent.com/sparshbajaj/portfolio-2020/master/data.json')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);
      // console.log('WorkPreviews component is being rendered');
      const navigate = useNavigate();
      return (
        <div setCustomCursorEnabled={setCustomCursorEnabled}>
          {/* cursor */}
            {customCursorEnabled && (
                    <ReactAnimatedCursor
                      innerSize={20}
                      outerSize={20}
                      color="255,255,255"
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
          <>
          {/* Hero Section */}
          <div className='mt-40'>
            <HeroSection setCustomCursorEnabled={setCustomCursorEnabled} />
          </div>
          {/* Work Previews */}
          <div className="justify-center items-center mt-20">
            <h1 className="text-6xl font-bold mb-20 text-center">
            {"//Work"}
            </h1>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-6 gap-2 max-w-90vw mx-24 min-h-0 work-mob">
              {data.map((work, index) => {
                let className = 'p-4 col-span-1 md:col-span-5 relative group';
                if (index % 4 === 1) {
                  className = 'p-4 col-span-1 md:col-start-1 md:col-span-3 relative group';
                } else if (index % 4 === 2) {
                  className = 'p-4 col-span-1 md:col-start-4 md:col-span-2 relative group';
                } else if (index % 4 === 3) {
                  className = 'p-4 col-span-1 md:col-start-1 md:col-span-2 relative group';
                } else if (index % 4 === 0 && index !== 0) {
                  className = 'p-4 col-span-1 md:col-start-3 md:col-span-3 relative group';
                }
                return (
                  <div
                    key={index}
                    className={`${className}`}
                    onClick={() => navigate(`/work/${work.slug}`)}
                  >
                    <img
                      src={work.heroImage}
                      alt={work.title}
                      className="w-full rounded-full transition duration-300 ease-in-out transform group-hover:scale-105 object-cover"
                      style={{ height: '60vh' }}
                    />
                    <div className="absolute text-center transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex items-center justify-center" style={{ top: '0', right: '0', bottom: '0', left: '0' }}>
                      <div className='bg-black rounded-full bg-opacity-20 backdrop-blur-sm flex items-center justify-center px-9 py-9'>
                        <p className="text-white font-regular">{work.title} • {work.type}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          
          </>
        </div>
      );


    }
    
    export default WorkPreviews;