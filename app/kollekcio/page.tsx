'use client';

import FlipCard from '@/components/FlipCard';
import collectionData from '@/data/collection.json';
import { useI18n } from '@/lib/i18n';

export default function CollectionPage() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
            {t('collection.heading')}
          </h1>
          <p className="text-lg font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-center">
            {t('collection.tagline')}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {collectionData.slice(0, 6).map((item: any) => (
            <FlipCard key={item.id} frontImage={item.frontImage} logoLight={item.logoLight} logoDark={item.logoDark} />
          ))}
        </div>

        <div className="mt-20 pt-16 border-t border-[#d11133]/20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide text-justify">
              {t('collection.body1')}
            </p>
            <p className="mt-6 text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide text-justify">
              {t('collection.body2')}
            </p>
            <p className="mt-6 text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide text-justify">
              {t('collection.body3')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
