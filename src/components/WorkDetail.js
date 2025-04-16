import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactAnimatedCursor from 'react-animated-cursor';
import FullScreenOverlay from "./FullScreenOverlay"; // Assuming this component is okay

const WorkDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [customCursorEnabled] = useState(true); // Keeping state, just updating props

  useEffect(() => {
    setIsLoading(true); // Start loading when slug changes
    fetch('https://raw.githubusercontent.com/sparshbajaj/portfolio-2020/master/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        const foundIndex = data.findIndex(work => work.slug === slug);
        setCurrentIndex(foundIndex >= 0 ? foundIndex : 0); // Handle not found case gracefully
        // Keep loading state for a minimum duration
        setTimeout(() => {
            setIsLoading(false);
        }, 500); // Shorter timeout? Or base on content load?
      })
      .catch(error => {
          console.error("Error fetching work data:", error);
          setIsLoading(false); // Stop loading on error
      });

    window.scrollTo(0, 0);

  }, [slug]);

  // Early return while loading or if data fetch failed
  if (isLoading) return <FullScreenOverlay isActive={true} />;
  if (!data || currentIndex < 0 || currentIndex >= data.length) return (
      <div className="text-center py-20">Work not found.</div> // Simple message if data is bad
  );

  const work = data[currentIndex]; // Get current work item
  const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;

  const handlePrev = () => {
    navigate(`/work/${data[prevIndex].slug}`);
  };

  const handleNext = () => {
    navigate(`/work/${data[nextIndex].slug}`);
  };

  return (
    <>
      {/* Updated Cursor Styles */}
      {customCursorEnabled && (
        <ReactAnimatedCursor
          innerSize={8}
          outerSize={32}
          color="143, 220, 194" // Accent color #8fdcc2 RGB
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.5}
          trailingSpeed={8}
          clickables={[
            'a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]',
            'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select',
            'textarea', 'button', '.link'
          ]}
        />
      )}

      {/* Use max-width container and padding */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
        {/* Hero Image - Updated classes */}
        <img
          src={work.heroImage}
          alt={work.title}
          className="w-full h-auto aspect-video object-cover rounded-xl mb-12 sm:mb-16" // Responsive classes
        />

        {/* Title */}
        <h1 className="mb-6 sm:mb-8"> {/* Inherits style, adjusted margin */}
          {work.title}
        </h1>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8 sm:mb-10"></div> {/* Tailwind divider */}

        {/* Metadata & Excerpt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 sm:mb-16">
          {/* Metadata Column */}
          <div className="space-y-4 text-sm"> {/* Use text-sm for metadata */}
            <div>
              <h4 className="font-semibold text-gray-400 mb-1">Category</h4> {/* Lighter heading */}
              <p>{work.type}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-400 mb-1">Year</h4>
              <p>{work.date}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-400 mb-1">Client</h4>
              <p>{work.client}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-400 mb-1">Progress</h4>
              <p>{work.progress}</p>
            </div>
          </div>

          {/* Excerpt Column */}
          <div className="md:col-span-2">
            {/* Inherits base paragraph style */}
            <p>{work.excerpt}</p>
          </div>
        </div>

        {/* Work Description Section - removed fixed width */}
        <section className="mb-12 sm:mb-16">
          <div
            dangerouslySetInnerHTML={{ __html: work.description }}
            className="json-html" // Styles applied via App.css
          />
        </section>

        {/* Navigation Buttons */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex justify-between">
          <button
            onClick={handlePrev}
            // Updated button styles
            className="py-2 px-4 text-[#8fdcc2] hover:bg-gray-800 rounded transition-colors duration-200"
          >
            &larr; Prev
          </button>
          <button
            onClick={handleNext}
            // Updated button styles
            className="py-2 px-4 text-[#8fdcc2] hover:bg-gray-800 rounded transition-colors duration-200"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkDetail;
