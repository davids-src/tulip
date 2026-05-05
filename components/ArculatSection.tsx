'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

interface ColorItem {
  img: string;
  descKey: string;
  nameKey: string;
  borderClass: string;
}

const paletteConfig: ColorItem[] = [
  { nameKey: 'home.arculat_colors.black_name', descKey: 'home.arculat_colors.black_desc', img: '/images/arculat_rajzolt_fekete.jpg', borderClass: 'border-black dark:border-white/50' },
  { nameKey: 'home.arculat_colors.red_name',   descKey: 'home.arculat_colors.red_desc',   img: '/images/arculat_rajzolt_piros.png', borderClass: 'border-[#d11133]' },
  { nameKey: 'home.arculat_colors.fuchsia_name',descKey: 'home.arculat_colors.fuchsia_desc',img: '/images/arculat_rajzolt_fukszia.png',borderClass: 'border-brand-fuchsia' },
  { nameKey: 'home.arculat_colors.bone_name',  descKey: 'home.arculat_colors.bone_desc',  img: '/images/arculat_rajzolt_feher.png', borderClass: 'border-[#fcfaf2] dark:border-white/30' },
];

export default function ArculatSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-background transition-colors border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-6">
            {t('home.arculat_title')}
          </h2>
          <h3 className="text-xl md:text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-6">
            {t('home.arculat_subtitle')}
          </h3>
          <p className="text-5xl md:text-5xl font-waterfall font-light text-brand-fuchsia max-w-5xl mx-auto leading-none text-center py-4">
            {t('home.arculat_tagline')}
          </p>
          <p className="text-xl font-rubik font-light text-foreground max-w-3xl mx-auto leading-relaxed text-center mt-8">
            {t('home.arculat_caption')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {paletteConfig.map((elem, idx) => (
            <div key={idx} className="flex flex-col space-y-6 group">
              <div className={`relative w-full aspect-[2/3] border border-border overflow-hidden transition-colors group-hover:${elem.borderClass}`}>
                <Image
                  src={elem.img}
                  alt={`${t('home.arculat_img_prefix')} ${t(elem.nameKey)}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h4 className="text-lg font-inter font-light uppercase tracking-widest text-[#d11133] mb-4 text-center border-b border-[#d11133]/20 pb-2">
                  {t(elem.nameKey)}
                </h4>
                <p className="text-base text-foreground/80 leading-relaxed font-rubik font-light text-justify">
                  {t(elem.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center border-t border-border pt-12">
          <p className="text-lg md:text-xl font-rubik font-light text-foreground/90 leading-relaxed tracking-wide text-justify">
            {t('home.arculat_closing')}
          </p>
        </div>
      </div>
    </section>
  );
}
