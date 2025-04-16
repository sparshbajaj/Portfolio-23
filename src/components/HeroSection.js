import React from 'react';
// import myImage from '../images/hand_hello.png'; // Commented out for now
import ConfinedNoise from './ConfinedNoise';
import ReactTypingEffect from 'react-typing-effect';
// import './WorkDetail.css'; // Removed import if .bg-dp is the only style used

const HeroSection = ({ setCustomCursorEnabled }) => {

  const handleMouseEnter = () => {
    // Optional: Disable custom cursor library if needed, but don't set image cursor
    if (setCustomCursorEnabled) setCustomCursorEnabled(false);
    // document.body.style.cursor = `url(${myImage}), auto`; // Commented out custom cursor image
  }
  const handleMouseLeave = () => {
    // Optional: Re-enable custom cursor library if needed
     if (setCustomCursorEnabled) setCustomCursorEnabled(true);
    // document.body.style.cursor = 'default'; // Let CSS or cursor library handle default
  }

  return (
    <>
      {/* <div className='bg-dp'></div> Removed background image div */}
      {/* Added padding px-6 lg:px-8 py-12 */}
      <div className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-8 py-12">
        {/* Use text-center on container */}
        <div className="text-center">
          {/* Removed text size/weight classes - Inherited from App.css */}
          <h1 className="mb-4"> {/* Adjusted margin */}
            <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Hi. I'm Sparsh.
            </span>
            <br />
            A De
            <ReactTypingEffect
              text={["signer", "veloper"]}
              speed={150}
              eraseDelay={3000}
              typingDelay={1000}
              cursorClassName="text-[#8fdcc2]" // Style cursor to match accent color
            />
          </h1>
          {/* Removed text size/mx classes - Use container padding & max-width */}
          <p className="mb-4 max-w-xl mx-auto"> {/* Reduced margin, added max-width and auto margins */}
            I’m passionate about creating engaging UI designs that bring products to life. I also enjoy doodling and creating digital art.
          </p>
          <p className="mb-8 max-w-xl mx-auto"> {/* Adjusted margin, added max-width and auto margins */}
            Generate unique art from noise by moving your cursor inside the canvas below. Click on ‘render’ to download and set it as your wallpaper.
          </p>
        </div>
        <div className="mt-8"> {/* Added margin top to separate from text */}
          <ConfinedNoise />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
