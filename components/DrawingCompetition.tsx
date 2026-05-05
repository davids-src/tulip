'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export default function DrawingCompetition() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-background transition-colors border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-4">
              {t('home.drawing_title')}
            </h2>
            <p className="text-5xl font-waterfall font-light text-brand-fuchsia max-w-2xl mx-auto leading-relaxed text-center">
              {t('home.drawing_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <p className="text-lg md:text-xl font-rubik font-light text-foreground leading-relaxed text-justify">
                {t('home.drawing_body')}
              </p>
              <div className="pt-4">
                <Link
                  href="/rajzpalyazat"
                  className="inline-block bg-[#d11133] text-white px-10 py-5 text-sm font-rubik font-light uppercase tracking-widest hover:bg-[#b00e2a] transition-all"
                >
                  {t('home.drawing_details_btn')}
                </Link>
              </div>
            </div>

            <div className="relative w-full border border-border group overflow-hidden">
              <Image
                src="/images/RAJZPÁLYÁZAT(1).png"
                alt={t('home.drawing_img_alt')}
                width={800}
                height={1000}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
