'use client';

import { JSX, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SetScrollToTop = (): JSX.Element | null => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default SetScrollToTop;