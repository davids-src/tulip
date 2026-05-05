'use client';

import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from './ThemeProvider';
import { I18nProvider } from '@/lib/i18n';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleMiddleClick = (e: MouseEvent) => {
      if (e.button === 1) {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        if (link && link.href) {
          const href = link.getAttribute('href');
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
    <I18nProvider>
      <ThemeProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </I18nProvider>
  );
}
