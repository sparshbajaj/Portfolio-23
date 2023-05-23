import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Noise } from 'noisejs';
import PostItNote from './PostItNote';

const noise = new Noise(Math.random());

const perlinNoise = (x,y) => {
  return noise.simplex2(x,y);
};

const ConfinedNoise = () => {
  const canvasRef = useRef(null);
  const [hue, setHue] = useState(Math.random() * 360);
  const mouseXRef = useRef(window.innerWidth / 2);
  const mouseYRef = useRef(window.innerHeight / 2);

  const draw = useCallback((ctx, width, height, mouseX, mouseY) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Generate and draw artwork
    for (let x = 0; x < width; x += 5) {
      for (let y = 0; y < height; y += 5) {
        const n = perlinNoise(x / width + mouseX / 100, y / height + mouseY / 100);
        ctx.fillStyle = `hsl(${hue}, 50%, ${n * 100}%)`;
        ctx.fillRect(x, y, 5, 5);
      }
    }
  }, [hue]);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Draw initial artwork
    const ctx = canvas.getContext('2d');
    draw(ctx, canvas.width, canvas.height, mouseXRef.current, mouseYRef.current);
  }, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Update mouse position on mouse move
    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;
      draw(ctx, canvas.width, canvas.height, mouseXRef.current, mouseYRef.current);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => canvas.removeEventListener('mousemove', handleMouseMove);
  }, [draw]);

  useEffect(() => {
    // Update hue on component mount
    setHue(Math.random() * 360);
  }, []);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    // eslint-disable-next-line
    const ctx = canvas.getContext('2d');

    // Create a new canvas with the desired size
    const downloadCanvas = document.createElement('canvas');
    downloadCanvas.width = 1920;
    downloadCanvas.height = 1080;
    const downloadCtx = downloadCanvas.getContext('2d');

    // Draw the artwork onto the new canvas at a higher resolution
    for (let x = 0; x < downloadCanvas.width; x++) {
      for (let y = 0; y < downloadCanvas.height; y++) {
        const n = perlinNoise(x / downloadCanvas.width + mouseXRef.current / 100, y / downloadCanvas.height + mouseYRef.current / 100);
        downloadCtx.fillStyle = `hsl(${hue}, 50%, ${n * 100}%)`;
        downloadCtx.fillRect(x, y, 1, 1);
      }
    }

    // Generate data URL from new canvas
    const dataURL = downloadCanvas.toDataURL('image/png');

    // Create temporary anchor element and trigger download
    const link = document.createElement('a');
    link.download = 'wallpaper.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();

    // Clean up temporary canvas and link element
    document.body.removeChild(link);
    downloadCanvas.remove();
  };


  return (
    <div className="left-1/2 flex justify-center mt-9" >
      <div className="relative">
      <PostItNote />
        <canvas ref={canvasRef} className="rounded-full" style={{width: '90vw', height: '80vh'}} />
          <div className="rounded-full"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '90vw',
              height: '80vh',
              backdropFilter: 'blur(10px)',
              pointerEvents: 'none',
              }}
          ></div>
        
        <button onClick={handleDownload} className="absolute bottom-0 right-0 px-3 py-2 rounded-full bg-gray-500 bg-opacity-20 text-white">Render</button>
      </div>
    </div>
  );
};

export default ConfinedNoise;