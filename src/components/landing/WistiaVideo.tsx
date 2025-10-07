"use client";

import { useEffect, useRef } from 'react';

export function WistiaVideo() {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoContainerRef.current && !videoContainerRef.current.querySelector('script')) {
      const playerScript = document.createElement('script');
      playerScript.src = 'https://fast.wistia.com/player.js';
      playerScript.async = true;

      const embedScript = document.createElement('script');
      embedScript.src = 'https://fast.wistia.com/embed/5f16lbgntl.js';
      embedScript.async = true;
      embedScript.type = 'module';
      
      videoContainerRef.current.appendChild(playerScript);
      videoContainerRef.current.appendChild(embedScript);
    }
  }, []);

  return (
    <div ref={videoContainerRef} className="vsl-container">
       <style>{`
          wistia-player[media-id='5f16lbgntl']:not(:defined) { 
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/5f16lbgntl/swatch'); 
            display: block; 
            filter: blur(5px); 
            padding-top:56.25%; 
          }
        `}</style>
        <wistia-player media-id="5f16lbgntl" aspect="1.7777777777777777"></wistia-player>
    </div>
  );
}
