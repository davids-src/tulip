'use client';

import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();
  const currentYear = 2026;

  return (
    <footer className="bg-background text-foreground transition-colors">
      <div className="flex w-full h-1">
        <div className="flex-1 bg-border/20" />
        <div className="flex-1 bg-brand-fuchsia" />
        <div className="flex-1 bg-border/20" />
        <div className="flex-1 bg-[#d11133]" />
        <div className="flex-1 bg-border/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-xs font-rubik font-light uppercase tracking-widest">
          <div className="text-center md:text-left">
            <p className="mb-2">{t('footer.copyright')} {currentYear}</p>
          </div>

          <nav className="flex space-x-8">
            <Link href="/impresszum" className="hover:text-brand-fuchsia transition-colors">
              {t('footer.imprint')}
            </Link>
            <Link href="/adatkezeles" className="hover:text-brand-fuchsia transition-colors">
              {t('footer.privacy')}
            </Link>
          </nav>

          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/tulipshophungarykft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-brand-fuchsia transition-colors"
              aria-label={t('footer.facebook_label')}
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-brand-fuchsia transition-colors"
              aria-label={t('footer.instagram_label')}
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
