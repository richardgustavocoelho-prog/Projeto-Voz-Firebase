"use client";

import Script from 'next/script';

export function WistiaVideo() {
  return (
    <div className="vsl-container bg-black">
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <style>{`
          .wistia_responsive_padding {
            padding: 56.25% 0 0 0;
            position: relative;
          }
          .wistia_responsive_wrapper {
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
          }
          .wistia_embed {
            height: 100%;
            position: relative;
            width: 100%;
          }
          .wistia_swatch {
            height:100%;
            left:0;
            opacity:0;
            overflow:hidden;
            position:absolute;
            top:0;
            transition:opacity 200ms;
            width:100%;
          }
          .wistia_swatch > img {
            filter:blur(5px);
            height:100%;
            object-fit:contain;
            width:100%;
          }
        `}</style>
        <div className="wistia_responsive_padding">
          <div className="wistia_responsive_wrapper">
            <div className="wistia_embed wistia_async_5f16lbgntl videoFoam=true" style={{height:"100%", position:"relative", width:"100%"}}>
              <div className="wistia_swatch" style={{height:"100%",left:0,opacity:0,overflow:"hidden",position:"absolute",top:0,transition:"opacity 200ms",width:"100%"}}>
                <img src="https://fast.wistia.com/embed/medias/5f16lbgntl/swatch" style={{filter: "blur(5px)",height:"100%",objectFit:"contain",width:"100%"}} alt="" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
