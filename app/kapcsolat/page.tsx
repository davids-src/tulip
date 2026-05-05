'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
            {t('contact.page_title')}
          </h1>
          <p className="text-lg font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
            {t('contact.page_intro1')}
          </p>
          <p className="text-lg font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
            {t('contact.page_intro2')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-12 text-center">
            {t('contact.page_subheading')}
          </h2>
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-4 p-6 border border-border hover:border-brand-fuchsia transition-colors">
              <Phone size={24} className="text-brand-fuchsia shrink-0" />
              <a href="tel:+36302543373" className="text-foreground font-rubik font-light hover:text-brand-fuchsia transition-colors text-lg">
                +36 30 254 3373
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 border border-border hover:border-brand-fuchsia transition-colors">
              <Mail size={24} className="text-brand-fuchsia shrink-0" />
              <a href="mailto:info@tulip.hu" className="text-foreground font-rubik font-light hover:text-brand-fuchsia transition-colors text-lg">
                info@tulip.hu
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 border border-border hover:border-brand-fuchsia transition-colors group">
              <MapPin size={24} className="text-brand-fuchsia shrink-0" />
              <span className="text-foreground font-rubik font-light text-lg group-hover:text-brand-fuchsia transition-colors">
                HU, 8000 Székesfehérvár
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
