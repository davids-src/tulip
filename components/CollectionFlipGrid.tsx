'use client';

import FlipCard from './FlipCard';
import collectionData from '@/data/collection.json';
import { useI18n } from '@/lib/i18n';

export default function CollectionFlipGrid() {
  const { t } = useI18n();
  return (
    <section id="kollekcio" className="py-24 bg-background transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em]">
            {t('home.collection_title')}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
          {collectionData.slice(0, 6).map((item: any) => (
            <FlipCard
              key={item.id}
              frontImage={item.frontImage}
              logoLight={item.logoLight}
              logoDark={item.logoDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
