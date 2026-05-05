'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import YouTubePlayer from '@/components/YouTubePlayer';
import { useI18n } from '@/lib/i18n';

export default function SkateNightPromo() {
  const { t } = useI18n();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false); };
    if (modalOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [modalOpen]);

  return (
    <>
      <section id="skate-night-promo" className="py-24 bg-background transition-colors overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <YouTubePlayer videoId="zh5L5M6ZUJA" title="SKATE NIGHT by TULIP – Reklámfilm" />
            </div>

            <div className="flex flex-col space-y-8">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-rubik font-light text-[#d11133] uppercase tracking-[0.3em] mb-2 leading-none">
                    SKATE NIGHT
                  </h2>
                  <h3 className="text-lg md:text-xl font-rubik font-light text-fuchsia uppercase tracking-widest">
                    {t('home.skate_night_subtitle')}
                  </h3>
                </div>
                <p className="text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide text-justify">
                  {t('home.skate_night_body1')}
                </p>
                <p className="mt-5 text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide text-justify">
                  {t('home.skate_night_body2')}
                </p>
                <p className="mt-5 text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide text-center">
                  {t('home.skate_night_body3')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="https://jegymester.hu/production/742578/skate-night-by-tulip/74002706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden bg-brand-fuchsia text-white px-6 py-4 font-rubik font-medium uppercase tracking-[0.2em] text-sm text-center shadow-[0_4px_24px_rgba(180,0,120,0.35)] hover:shadow-[0_6px_32px_rgba(180,0,120,0.55)] focus:outline-none focus:ring-2 focus:ring-brand-fuchsia transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3" /></svg>
                    {t('home.buy_ticket')}
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </Link>

                <Link
                  href="/partnereim"
                  className="bg-background border border-border text-foreground px-5 py-4 font-rubik font-light text-center hover:border-brand-fuchsia transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t('home.support_event')}
                </Link>

                <Link
                  href="/skate-night"
                  className="border-2 border-foreground text-foreground px-5 py-4 font-rubik font-light text-center hover:bg-foreground hover:text-background transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t('home.learn_more')}
                </Link>

                <button
                  onClick={() => setModalOpen(true)}
                  className="text-brand-fuchsia font-rubik font-medium hover:opacity-80 transition-opacity text-center flex items-center justify-center py-4 cursor-pointer"
                >
                  {t('home.contact_me')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ animation: 'fadeIn 0.2s ease' }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <div className="relative bg-background border border-border shadow-2xl w-full max-w-sm overflow-hidden" style={{ animation: 'slideUp 0.25s cubic-bezier(0.16,1,0.3,1)' }}>
            <div className="h-1 w-full bg-brand-fuchsia" />
            <div className="px-8 py-8">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-foreground/40 hover:text-foreground transition-colors"
                aria-label={t('contact.close_label')}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <p className="text-[10px] font-rubik font-light tracking-[0.25em] uppercase text-brand-fuchsia mb-6">
                {t('contact.modal_label')}
              </p>
              <h3 className="text-2xl font-rubik font-light text-foreground tracking-wide mb-1">Nikolett Oszoli</h3>
              <p className="text-sm font-rubik font-light text-foreground/50 tracking-widest uppercase mb-8">TULIP</p>
              <div className="w-8 h-px bg-brand-fuchsia mb-8" />
              <a
                href="mailto:nikolett.oszoli@tulip.hu"
                className="group flex items-center gap-3 text-foreground/80 hover:text-brand-fuchsia transition-colors font-rubik font-light text-sm tracking-wide"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                  <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                nikolett.oszoli@tulip.hu
              </a>
            </div>
            <div className="px-8 pb-8">
              <button
                onClick={() => setModalOpen(false)}
                className="w-full border border-border text-foreground/60 font-rubik font-light text-sm py-3 hover:border-brand-fuchsia hover:text-brand-fuchsia transition-all tracking-widest uppercase"
              >
                {t('contact.modal_close')}
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </>
  );
}
