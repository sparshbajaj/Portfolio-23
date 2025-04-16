import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactAnimatedCursor from 'react-animated-cursor'; // Keeping for now, adjust styles
import HeroSection from './HeroSection';

function WorkPreviews() {
  const [customCursorEnabled, setCustomCursorEnabled] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data
    fetch('https://raw.githubusercontent.com/sparshbajaj/portfolio-2020/master/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {/* Updated Cursor Styles */}
      {customCursorEnabled && (
        <ReactAnimatedCursor
          innerSize={8} // Smaller
          outerSize={32} // Smaller outer
          color="143, 220, 194" // Accent color #8fdcc2 RGB
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.5} // Less pronounced outer scale
          trailingSpeed={8} // Faster trailing
          clickables={[
            'a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]',
            'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select',
            'textarea', 'button', '.link'
          ]}
          // Removed blend mode for simplicity
          // hasBlendMode={true}
          // outerStyle={{ mixBlendMode: 'exclusion' }}
        />
      )}

      <>
        {/* Hero Section - Removed wrapper div with mt-40 */}
        <HeroSection setCustomCursorEnabled={setCustomCursorEnabled} />

        {/* Work Previews Section */}
        {/* Added container padding/max-width */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
          {/* Used h2 style, adjusted margin */}
          <h2 className="text-center mb-12 sm:mb-16">
            // Work
          </h2>

          {/* Simplified Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted gap */}
            {data.map((work) => ( // Removed index and complex class logic
              <div
                key={work.slug} // Use slug or a unique ID
                className="relative group cursor-pointer overflow-hidden rounded-xl" // Use rounded-xl, add cursor/overflow
                onClick={() => navigate(`/work/${work.slug}`)}
              >
                <img
                  src={work.heroImage}
                  alt={work.title}
                  // Added aspect-video, adjusted rounding
                  className="w-full h-auto aspect-video object-cover rounded-xl transition duration-300 ease-in-out group-hover:scale-105"
                  // Removed fixed height style
                />
                {/* Simplified Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#111827]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl"> {/* Darker overlay, match rounding */}
                  {/* Adjusted text styling */}
                  <p className="text-center text-white text-lg font-semibold px-4"> {/* White text on dark overlay */}
                    {work.title} • {work.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default WorkPreviews;
