'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export default function FounderIntro() {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-background transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl border-4 border-foreground/10">
              <Image
                src="/images/Nikolett Oszoli_Tulip Shop Hungary Kft..png"
                alt={t('story.founder_img_alt')}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-rubik font-medium text-2xl">{t('story.founder_caption')}</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8 text-center lg:text-left">
              {t('story.heading')}
            </h1>
            <div className="space-y-6 text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
              <p>{t('story.intro_p1')}</p>
              <p>{t('story.intro_p2')}</p>
              <p>{t('story.intro_p3')}</p>
              <p className="text-lg font-rubik font-light text-foreground leading-relaxed italic border-l-2 border-brand-fuchsia pl-6">
                {t('story.intro_quote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
