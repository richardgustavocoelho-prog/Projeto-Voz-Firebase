"use client";

import Script from 'next/script';

export function WistiaVideo() {
  return (
    <div className="vsl-container">
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
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
