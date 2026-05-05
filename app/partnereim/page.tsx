'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import partnersData from '@/data/partners.json';
import { useI18n } from '@/lib/i18n';

export default function PartnereimPage() {
  const { t } = useI18n();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <main className="min-h-screen bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
            {t('partners.heading')}
          </h1>
          <p className="text-lg font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
            {t('partners.intro')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {partnersData.map((partner) => {
            const logoSrc = mounted && resolvedTheme === 'dark' ? partner.logoDark : partner.logoLight;
            return (
              <div key={partner.id} className="group flex flex-col border border-border hover:border-brand-fuchsia transition-all duration-300">
                <div className="relative aspect-square w-full overflow-hidden bg-background flex items-center justify-center p-6">
                  {mounted ? (
                    <Image
                      src={logoSrc}
                      alt={partner.name}
                      fill
                      className="object-contain p-4 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-border/5" />
                  )}
                </div>
                <div className="border-t border-border px-4 py-3 flex items-center justify-center min-h-[60px]">
                  <p className="text-xs font-inter font-light text-foreground/60 uppercase tracking-widest group-hover:text-brand-fuchsia transition-colors duration-300 text-center w-full">
                    {partner.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center border-t border-border pt-16">
          <p className="text-lg font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify mb-10">
            {t('partners.cta_text')}
          </p>
          <a
            href="mailto:info@tulip.hu"
            className="inline-block border border-brand-fuchsia text-brand-fuchsia px-10 py-4 text-sm font-rubik font-light uppercase tracking-widest hover:bg-brand-fuchsia hover:text-white transition-all duration-300"
          >
            {t('partners.cta_btn')}
          </a>
        </div>
      </div>
    </main>
  );
}
