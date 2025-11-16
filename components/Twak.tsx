'use client';

import { useEffect } from 'react';

// Proper TypeScript declaration merging – no 'any' needed
declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      hideWidget?: () => void;
      showWidget?: () => void;
      setAttributes?: (attributes: Record<string, string>, callback: () => void) => void;
      loaded?: boolean;
    };
    Tawk_LoadStart?: Date;
  }
}

const Tawk = (): null => {
  useEffect(() => {
    if (window.Tawk_API?.loaded) return;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement('script');
    const firstScript = document.getElementsByTagName('script')[0];

    script.async = true;
    script.src = 'https://embed.tawk.to/691915f4191341195c312bc0/1ja4vrgv1';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    firstScript.parentNode?.insertBefore(script, firstScript);
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = () => {
      const branding = document.querySelector('.tawk-branding');
      if (branding) branding.remove();
    };
  }, []);

  return null;
};
export default Tawk;