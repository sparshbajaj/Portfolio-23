import React from 'react';
import myImage from '../images/hand_hello.png';
import ConfinedNoise from './ConfinedNoise';
import ReactTypingEffect from 'react-typing-effect';
import './WorkDetail.css';

const HeroSection = ({ setCustomCursorEnabled }) => {
  
  const handleMouseEnter = () => {
    setCustomCursorEnabled(false);
    document.body.style.cursor = `url(${myImage}), auto`;
    const cursorImageElement = document.querySelector('.cursor-image');
    if (cursorImageElement) {
      cursorImageElement.classList.add('cursor-image');
    }
  }
  const handleMouseLeave = () => {
    setCustomCursorEnabled(true);
    document.body.style.cursor = 'default';
    const cursorImageElement = document.querySelector('.cursor-image');
    if (cursorImageElement) {
      cursorImageElement.classList.remove('cursor-image');
    }
  }

  return (
    <>
    <div className='bg-dp'></div>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-center">
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
            cursor="_"
          />
        </h1>
        <p className="text-l mb-5 text-center mx-5">
        I’m passionate about creating engaging UI designs that bring products to life. I also enjoy doodling and creating digital art.
        </p>
        <p className="text-l mb-8 text-center mx-5">
        Generate unique art from noise by moving your cursor inside the canvas below. Click on ‘render’ to download and set it as your wallpaper.
        </p>
      </div>
      <div>
        <ConfinedNoise />
      </div>
    </div>

    </>
  );
};

export default HeroSection;