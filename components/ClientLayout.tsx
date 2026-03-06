'use client';

import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from './ThemeProvider';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Globális eseményfigyelő a görgővel (középső gombbal) való kattintáshoz.
    // Biztosítja, hogy a linkek új lapon nyíljanak meg, és ne zavarják meg az SPA navigációt,
    // megkerülve az esetleges hibás átirányításokat.
    const handleMiddleClick = (e: MouseEvent) => {
      if (e.button === 1) { // Görgő kattintás
        const target = e.target as HTMLElement;
        const link = target.closest('a');

        if (link && link.href) {
          const href = link.getAttribute('href');
          // Ha nem csak egy horgony (#), akkor erőszakoljuk az új ablakos megnyitást
          if (href && href !== '#' && !href.startsWith('#')) {
            e.preventDefault();
            e.stopPropagation();
            window.open(link.href, '_blank');
          }
        }
      }
    };

    window.addEventListener('auxclick', handleMiddleClick, { capture: true });
    return () => window.removeEventListener('auxclick', handleMiddleClick, { capture: true });
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
