'use client';

import { useI18n } from '@/lib/i18n';

export default function FounderManifesto() {
  const { t, tArray } = useI18n();
  const items1 = tArray<string>('story.manifesto_items');
  const items2 = tArray<string>('story.manifesto_items2');

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-16">

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">
              {t('story.manifesto_h1')}
            </h2>
            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
              {t('story.manifesto_p1')}
            </p>
            <div className="border border-border p-8">
              <p className="text-lg font-rubik font-normal text-foreground mb-4">{t('story.manifesto_list_intro')}</p>
              <ul className="space-y-2">
                {items1.map((item, i) => (
                  <li key={i} className="flex items-center text-lg font-rubik font-light text-brand-fuchsia">
                    <span className="text-brand-fuchsia mr-3 text-xs">■</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
              {t('story.manifesto_p2')}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">
              {t('story.manifesto_h2')}
            </h2>
            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">{t('story.manifesto_p3')}</p>
            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">{t('story.manifesto_p4')}</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">
              {t('story.manifesto_h3')}
            </h2>
            <div className="border border-border p-8">
              <p className="text-lg font-rubik font-light text-foreground mb-4">{t('story.manifesto_list2_intro')}</p>
              <ul className="space-y-3">
                {items2.map((item, i) => (
                  <li key={i} className="flex items-center text-lg font-rubik font-light text-brand-fuchsia">
                    <span className="text-brand-fuchsia mr-3 text-xs">■</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">{t('story.manifesto_p5')}</p>
          </div>

          <div className="pt-12 border-t border-border space-y-6">
            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
              {t('story.manifesto_closing')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
