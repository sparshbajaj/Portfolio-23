import React, { useRef, useEffect } from 'react';
import { Noise } from 'noisejs';

const ConfinedNoise = () => {
  const canvasRef = useRef(null);
  const noise = new Noise(Math.random());

const perlinNoise=(x,y) => {
    let n=0 ;
    let frequency=1 ;
    let amplitude=1 ;
    let maxValue=0 ;

for (let i=0 ;i <4 ;i++) {
      n +=amplitude *noise.perlin2(x *frequency ,y *frequency );
      maxValue +=amplitude ;
      amplitude *=0.5 ;
      frequency *=2 ;
}

return n /maxValue ;
};

const draw=(ctx,width,height,mouseX,mouseY) => {
    // Clear canvas
    ctx.clearRect(0 ,0 ,width ,height );

// Generate and draw artwork
for (let x=0 ;x < width ;x+=10) {
      for (let y=0 ;y < height ;y+=10) {
        const n=perlinNoise(x /width +mouseX /100 ,y /height +mouseY /100 );
        ctx.fillStyle=`hsl(${n *360},50%,50%)`;
        ctx.fillRect(x,y ,10 ,10 );
      }
    }
};

useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

// Update mouse position on mouse move
const handleMouseMove=(e) => {
      mouseX=e.clientX;
      mouseY=e.clientY;
      draw(ctx ,canvas.width ,canvas.height ,mouseX ,mouseY );
};

window.addEventListener('mousemove', handleMouseMove);

return () => window.removeEventListener('mousemove', handleMouseMove);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const handleSaveClick = () => {
  // Create new canvas with desired size
  const saveCanvas = document.createElement('canvas');
  saveCanvas.width = 3840;
  saveCanvas.height = 2160;

  // Draw artwork onto saveCanvas at desired resolution
  draw(saveCanvas.getContext('2d'), saveCanvas.width, saveCanvas.height, window.innerWidth / 2, window.innerHeight / 2);

  // Generate data URL for image
  const dataURL = saveCanvas.toDataURL();

  // Download image
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'artwork.png';
  link.click();
};

return (
  <>
    <canvas
      ref={canvasRef}
      width={600} height={400}
      className="rounded-tl-full rounded-bl-full bg-white/30 mr-0"
    />
    <button onClick={handleSaveClick} className="bg-white text-white-600 rounded-full font-bold py-2 px-4 bg-opacity-20">
      Save
    </button>
  </>
);
};

export default ConfinedNoise;