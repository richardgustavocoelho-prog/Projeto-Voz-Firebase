"use client";

import Script from 'next/script';

export function WistiaVideo() {
  return (
    <div className="vsl-container">
        <div className="wistia_responsive_padding">
          <div className="wistia_responsive_wrapper">
            <div
              className="wistia_embed wistia_async_5f16lbgntl videoFoam=true"
            >&nbsp;</div>
            <Script src="https://fast.wistia.com/embed/medias/5f16lbgntl.jsonp" strategy="lazyOnload" />
            <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
          </div>
        </div>
    </div>
  );
}
