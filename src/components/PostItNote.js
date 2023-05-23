import React from 'react';
import './postitnote.css';

const PostItNote = () => {
  
  return (
    
    <div className="absolute top-0 right-60 postmob" style={{zIndex:'1'}}>
      <div className="post-it">
        <p className="sticky-note taped" >
          <strong>Haiku - Noise</strong><br/>
            Perlin noise flows free,<br/>
            Randomness in harmony,<br/>
            Beauty in chaos.
        </p>
      </div>
    </div>
  );
};

export default PostItNote;