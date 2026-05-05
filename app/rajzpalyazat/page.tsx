'use client';

import { useI18n } from '@/lib/i18n';

interface TimelineItem { time: string; desc: string; note?: string; note2?: string; }

export default function RajzpalyazatPage() {
  const { t, tArray } = useI18n();
  const categories = tArray<string>('drawing.categories');
  const fields = tArray<string>('drawing.submit_fields');
  const timeline = tArray<TimelineItem>('drawing.timeline');

  return (
    <main className="min-h-screen bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-4">
            {t('drawing.heading')}
          </h1>
          <p className="text-5xl font-waterfall font-light text-brand-fuchsia max-w-2xl mx-auto leading-relaxed text-center">
            {t('drawing.subtitle')}
          </p>
          <p className="text-xl font-rubik font-light text-foreground max-w-3xl mx-auto leading-relaxed text-center mt-8">
            {t('drawing.discover')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 px-4">
          <div className="relative w-full aspect-auto border border-border group overflow-hidden">
            <img src="/images/RAJZPÁLYÁZAT(1).png" alt={t('drawing.img_alt')} className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16 flex flex-col items-center">
          <section className="w-full">
            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">{t('drawing.intro')}</p>
          </section>

          <section className="w-full">
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">{t('drawing.aim_heading')}</h2>
            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">{t('drawing.aim_text')}</p>
          </section>

          <section className="w-full">
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">{t('drawing.categories_heading')}</h2>
            <ul className="space-y-4 text-lg font-rubik font-light text-foreground">
              {categories.map((cat, i) => (
                <li key={i} className="flex items-center"><span className="text-brand-fuchsia mr-3 text-xs">■</span><span>{cat}</span></li>
              ))}
            </ul>
          </section>

          <section className="w-full">
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">{t('drawing.prizes_heading')}</h2>
            <div className="space-y-6 text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
              <p>{t('drawing.prizes_p1')}</p>
              <p className="font-medium text-foreground">{t('drawing.prizes_first_label')}</p>
              <p>{t('drawing.prizes_p2')}</p>
              <p>{t('drawing.prizes_p3')}</p>
            </div>
          </section>

          <section className="w-full">
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">{t('drawing.event_heading')}</h2>
            <p className="text-lg font-rubik font-light text-foreground mb-6">{t('drawing.event_award_note')}</p>
            <p className="text-lg font-rubik text-foreground mb-1 tracking-wider">{t('drawing.event_venue_label')}</p>
            <p className="text-lg font-rubik font-medium text-foreground mb-16">{t('drawing.event_venue_value')}</p>
            <p className="text-lg font-rubik text-foreground mb-6 tracking-wider">{t('drawing.timeline_label')}</p>
            <ul className="space-y-6 text-lg font-rubik font-light text-foreground">
              {timeline.map((item, i) => (
                <li key={i} className="flex flex-col border-b border-border/50 pb-4">
                  <div className="flex flex-col md:flex-row md:justify-between items-baseline">
                    <span className="text-brand-fuchsia mb-1 md:mb-0 md:w-1/3">{item.time}</span>
                    <span className="md:w-2/3">{item.desc}</span>
                  </div>
                  {item.note && <p className="text-sm text-brand-coral mt-2 font-light md:ml-[33.333333%]">{item.note}</p>}
                  {item.note2 && <span className="mt-1 md:ml-[33.333333%] text-sm">{item.note2}</span>}
                </li>
              ))}
            </ul>
          </section>

          <section className="w-full">
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">{t('drawing.submit_heading')}</h2>
            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify mb-6">{t('drawing.submit_text')}</p>
            <div className="border border-border p-8 w-full">
              <div className="mb-6">
                <span className="block text-sm font-inter text-foreground/60 uppercase tracking-widest mb-1">{t('drawing.submit_email_label')}</span>
                <a href="mailto:info@tulip.hu" className="text-xl font-rubik font-medium text-brand-fuchsia hover:text-[#d11133] transition-colors">info@tulip.hu</a>
              </div>
              <div className="mb-6">
                <span className="block text-sm font-inter text-foreground/60 uppercase tracking-widest mb-1">{t('drawing.submit_subject_label')}</span>
                <span className="text-lg font-rubik text-foreground">{t('drawing.submit_subject_value')}</span>
              </div>
              <div>
                <span className="block text-sm font-inter text-foreground/60 uppercase tracking-widest mb-4">{t('drawing.submit_required_label')}</span>
                <ul className="space-y-2 text-base font-rubik font-light text-foreground grid grid-cols-1 md:grid-cols-2">
                  {fields.map((f, i) => <li key={i} className="flex items-center"><span className="text-brand-fuchsia mr-3 text-xs">■</span>{f}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-x-12 lg:gap-x-24 gap-y-12 py-12 border-y border-brand-fuchsia/10">
            <div className="text-center md:text-left flex-1">
              <h3 className="text-sm font-inter text-brand-fuchsia tracking-widest mb-2">{t('drawing.deadline_label')}</h3>
              <p className="text-2xl font-rubik font-light text-foreground">{t('drawing.deadline_value')}</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-brand-fuchsia/20" />
            <div className="text-center md:text-left flex-[1.5]">
              <h3 className="text-sm font-inter text-brand-fuchsia uppercase tracking-widest mb-2">{t('drawing.notification_label')}</h3>
              <p className="text-lg font-rubik font-light text-foreground leading-relaxed">{t('drawing.notification_value')}</p>
            </div>
          </div>

          <section className="w-full">
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">{t('drawing.consent_heading')}</h2>
            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">{t('drawing.consent_text')}</p>
          </section>

          <section className="border border-border p-12 text-center mt-16 w-full">
            <h2 className="text-2xl md:text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-4">{t('drawing.question_heading')}</h2>
            <p className="text-lg font-rubik font-light text-center mb-6">{t('drawing.question_text')}</p>
            <a href="mailto:info@tulip.hu" className="inline-block bg-[#d11133] text-white px-10 py-5 text-sm font-rubik font-light uppercase tracking-widest hover:bg-[#b00e2a] transition-all">
              info@tulip.hu
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
