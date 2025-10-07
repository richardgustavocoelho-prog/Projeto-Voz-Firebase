"use client";

import { useEffect, useRef } from 'react';

export function WistiaVideo() {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoContainerRef.current && !videoContainerRef.current.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const playerScript = document.createElement('script');
      playerScript.src = 'https://fast.wistia.com/player.js';
      playerScript.async = true;
      document.body.appendChild(playerScript);

      const embedScript = document.createElement('script');
      embedScript.src = 'https://fast.wistia.com/embed/5f16lbgntl.js';
      embedScript.async = true;
      embedScript.type = 'module';
      document.body.appendChild(embedScript);

      return () => {
        // Clean up scripts when component unmounts
        document.body.removeChild(playerScript);
        document.body.removeChild(embedScript);
      };
    }
  }, []);

  return (
    <div
      ref={videoContainerRef}
      className="vsl-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '40px auto',
        width: '100%',
        maxWidth: '800px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 0 25px rgba(249,178,51,0.15)',
        backgroundColor: '#141414'
      }}
    >
        <style>{`
          wistia-player[media-id='5f16lbgntl']:not(:defined) { 
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/5f16lbgntl/swatch'); 
            display: block; 
            filter: blur(5px); 
            padding-top:56.25%; 
          }
        `}</style>
      <div 
        className="wistia_embed wistia_async_5f16lbgntl" 
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        <div 
          className="wistia_swatch" 
          style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}
        >
          <img 
            src="https://fast.wistia.com/embed/medias/5f16lbgntl/swatch" 
            style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} 
            alt="" 
            aria-hidden="true" 
            // @ts-ignore
            onLoad={(e) => { e.currentTarget.parentNode.style.opacity = 1; }} 
          />
        </div>
      </div>
    </div>
  );
}
