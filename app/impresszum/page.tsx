'use client';

import { useI18n } from '@/lib/i18n';

export default function ImpresszumPage() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-12 text-center">
          {t('imprint.heading')}
        </h1>
        <div className="space-y-10 font-rubik font-light text-foreground leading-relaxed text-justify">

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">
              {t('imprint.provider_heading')}
            </h2>
            <div className="bg-accent/5 border border-border p-6 space-y-3">
              <div><span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.provider_name_label')}</span><p className="font-medium">Tulip Shop Hungary Kft.</p></div>
              <div><span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.registered_office_label')}</span><p>8000 Székesfehérvár, Stomfai u. 22.</p></div>
              <div>
                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.contact_label')}</span>
                <p>E-mail: <a href="mailto:info@tulip.hu" className="text-[#d11133] hover:underline">info@tulip.hu</a></p>
                <p>Tel: <a href="tel:+36302543373" className="text-[#d11133] hover:underline">+36 30 254 3373</a></p>
                <p>Web: <a href="https://www.tulip.hu" target="_blank" rel="noopener noreferrer" className="text-[#d11133] hover:underline">www.tulip.hu</a></p>
              </div>
              <div><span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.representative_label')}</span><p>{t('imprint.representative_value')}</p></div>
              <div><span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.company_number_label')}</span><p>07 09 034300</p></div>
              <div><span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.tax_number_label')}</span><p>32171811-2-07</p></div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">
              {t('imprint.hosting_heading')}
            </h2>
            <div className="bg-accent/5 border border-border p-6 space-y-3">
              <div><span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.hosting_name_label')}</span><p className="font-medium">Skoda Dávid András EV.</p></div>
              <div><span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.tax_number_label')}</span><p>45755754-2-27</p></div>
              <div><span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.hosting_reg_label')}</span><p>58338658</p></div>
              <div><span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.hosting_address_label')}</span><p>8000 Székesfehérvár, Lövölde utca 24. 4/15</p></div>
              <div><span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">{t('imprint.hosting_contact_label')}</span><p>Skoda Dávid András – <a href="mailto:skoda.david@sironic.hu" className="text-[#d11133] hover:underline">skoda.david@sironic.hu</a></p></div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">
              {t('imprint.copyright_heading')}
            </h2>
            <p>{t('imprint.copyright_p1')}</p>
            <p>{t('imprint.copyright_p2')}</p>
            <p>{t('imprint.copyright_p3')}</p>
          </section>

          <p className="mt-12 text-xs opacity-60">{t('imprint.last_updated')}</p>
        </div>
      </div>
    </main>
  );
}
