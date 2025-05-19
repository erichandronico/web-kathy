import { useEffect, useRef } from 'react';

export const InstagramEmbed = ({ url }) => {
  const ref = useRef();

  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.setAttribute('src', '//www.instagram.com/embed.js');
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  const embedHtml = `
    <blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="background:#FFF; border:0; margin:1px; max-width:540px; min-width:326px; width:99.375%;">
    </blockquote>
  `;

  return (
    <div
      ref={ref}
      className="w-full max-w-xl mx-auto"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
};