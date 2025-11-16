'use client';

import { JSX, useEffect } from 'react';

const Tawk = (): JSX.Element | null => {
  useEffect(() => {
    if ((window as any).Tawk_API?.loaded) return;

    const Tawk_API: any = {};
    (window as any).Tawk_API = Tawk_API;

    const Tawk_LoadStart = new Date();
    (window as any).Tawk_LoadStart = Tawk_LoadStart;

    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/691915f4191341195c312bc0/1ja4vrgv1';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode?.insertBefore(s1, s0);

    return () => {
      // Optional: cleanup if you want
    };
  }, []);

  return null;
}
export default Tawk;