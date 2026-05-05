'use client';

import Image from 'next/image';
import Link from 'next/link';
import Countdown from '@/components/Countdown';
import YouTubePlayer from '@/components/YouTubePlayer';
import { useI18n } from '@/lib/i18n';

interface WorldItem { category: string; subtitle: string; text: string; }
interface StarItem { name: string; desc: string; }

export default function SkateNightPage() {
  const { t, tArray } = useI18n();
  const earlyBirdDate = "2026-03-18T00:00:00+01:00";
  const worlds = tArray<WorldItem>('skate_night.worlds');
  const stars = tArray<StarItem>('skate_night.stars');

  return (
    <main className="min-h-screen bg-background transition-colors pb-20 pt-20">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] leading-tight text-center">
            SKATE NIGHT by TULIP <br />
            <span className="text-5xl md:text-6xl block mt-8 font-waterfall font-light text-brand-fuchsia leading-none normal-case tracking-normal">
              {t('skate_night.hero_tagline')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-rubik font-light text-foreground/80 tracking-wide uppercase text-center">
            {t('skate_night.hero_subtitle')}
          </p>
          <div className="pt-12 w-full max-w-5xl mx-auto">
            <YouTubePlayer videoId="zh5L5M6ZUJA" title="SKATE NIGHT by TULIP" />
          </div>
          <div className="flex justify-center">
            <div className="inline-block border border-border p-6 mt-16 text-center mx-auto">
              <p className="text-lg md:text-xl font-rubik font-medium text-foreground uppercase tracking-widest text-center">
                {t('skate_night.event_date')}
              </p>
              <p className="text-base text-brand-fuchsia mt-2 tracking-widest uppercase text-center">
                {t('skate_night.event_venue')}
              </p>
            </div>
          </div>
          <div className="pt-8">
            <Link
              href="https://jegymester.hu/production/742578/skate-night-by-tulip/74002706"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#d11133] text-white px-12 py-5 text-sm font-rubik font-light uppercase tracking-widest hover:bg-[#b00e2a] transition-all"
            >
              {t('skate_night.buy_ticket_btn')}
            </Link>
          </div>
          <div className="mt-16 border border-border p-8">
            <Countdown targetDate={earlyBirdDate} label={t('skate_night.countdown_label')} />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
        <h2 className="text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-8 text-center">
          {t('skate_night.vision_heading')}
        </h2>
        <p className="text-xl md:text-5xl font-waterfall text-brand-fuchsia text-center leading-relaxed">
          {t('skate_night.vision_quote')}
        </p>
      </section>

      {/* 6 Worlds */}
      <section className="bg-background border-y border-border py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-16 text-center">
            {t('skate_night.worlds_heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {worlds.map((world, i) => (
              <div key={i} className="border border-border p-8 bg-background group hover:border-brand-fuchsia transition-colors relative overflow-hidden text-center md:text-left text-foreground">
                <h3 className="text-xl font-inter font-light uppercase tracking-widest mb-4 group-hover:text-brand-fuchsia transition-colors leading-tight">
                  {world.category}
                  <span className="block mt-2">{world.subtitle}</span>
                </h3>
                <p className="text-base font-rubik font-light text-foreground/80 leading-relaxed italic">{world.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What awaits */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-5xl">
        <h2 className="text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-12 text-center">
          {t('skate_night.awaits_heading')}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="relative aspect-[2/3] border border-border group overflow-hidden"><Image src="/images/arculat_rajzolt_fekete_jeg.jpg" alt={t('skate_night.img_black_alt')} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
          <div className="relative aspect-[2/3] border border-border group overflow-hidden"><Image src="/images/arculat_rajzolt_piros_jeg.jpg" alt={t('skate_night.img_red_alt')} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
          <div className="relative aspect-[2/3] border border-border group overflow-hidden"><Image src="/images/arculat_rajzolt_fukszia_jeg.jpg" alt={t('skate_night.img_fuchsia_alt')} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
          <div className="relative aspect-[2/3] border border-border group overflow-hidden"><Image src="/images/arculat_rajzolt_feher_jeg.jpg" alt={t('skate_night.img_bone_alt')} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
        </div>
        <div className="space-y-6 text-lg font-rubik font-light text-foreground leading-relaxed text-justify mb-12">
          <p>{t('skate_night.awaits_p1')}</p>
          <p>{t('skate_night.awaits_p2')}</p>
        </div>
        <div className="text-center">
          <a href="https://www.youtube.com/watch?v=zh5L5M6ZUJA" target="_blank" rel="noopener noreferrer" className="inline-block uppercase tracking-widest text-[#d11133] hover:text-brand-fuchsia text-sm font-medium border-b border-[#d11133] hover:border-brand-fuchsia transition-all pb-1">
            {t('skate_night.watch_film')}
          </a>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] border border-white/20">
              <Image src="/images/ice_fashion_show-1.jpg" alt={t('skate_night.originator_img_alt')} fill className="object-cover opacity-80" />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">
                {t('skate_night.originator_heading')}
              </h3>
              <div className="text-base font-rubik font-light leading-relaxed text-justify space-y-4 text-foreground/80 italic">
                <p>"Ruhaipari szakemberként, a divatvilág magával ragadt és a székesfehérvári MET Aréna ad otthont az első kollekcióm bemutatásának amelyre közel 10 éve tudatosan készülök."</p>
                <p>"Célom, hogy kiemelkedjek a divatiparban szakmai tudásommal, kézügyességemmel, kreativitásommal."</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="order-1 lg:order-2 relative aspect-video lg:aspect-[4/3] border border-white/20">
              <Image src="/images/Wiener-Eistraum-2019_Eröffnung_DSC00925_print_cPID_David-Bohmann.jpg" alt={t('skate_night.wiener_img_alt')} fill className="object-cover opacity-80" />
            </div>
            <div className="order-2 lg:order-1 space-y-6">
              <div className="text-base font-rubik font-light leading-relaxed text-justify space-y-4 text-foreground/80 italic border-l-2 border-brand-fuchsia pl-6">
                <p>"Egy éve a bécsi jégálomban korcsolyáztam, tele kérdésekkel, de egyetlen erős képpel a fejemben: hogy egyszer valóra válik, amit itt megálmodtam."</p>
                <p>"1 évvel később ugyanitt korcsolyáztam, és már nem álom többé."</p>
              </div>
              <div className="pt-4 flex flex-col space-y-2">
                <a href="https://www.wien.gv.at/en/leisure/vienna-ice-dream" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-[#d11133] hover:text-white transition-colors">
                  {t('skate_night.wiener_link')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stars & Tickets */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">
              {t('skate_night.stars_heading')}
            </h2>
            <ul className="space-y-6">
              {stars.map((star, i) => (
                <li key={i} className="flex flex-col">
                  <span className="font-medium text-foreground block mb-1 uppercase tracking-widest text-sm">{star.name}</span>
                  <span className="font-rubik font-light text-foreground/70">{star.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">
              {t('skate_night.tickets_heading')}
            </h2>
            <ul className="space-y-6 font-rubik font-light text-foreground/80 text-justify">
              <li>
                <span className="font-medium text-foreground block mb-1 uppercase tracking-widest text-sm">{t('skate_night.ticket_normal_label')}</span>
                {t('skate_night.ticket_normal_desc')}
              </li>
              <li>
                <span className="font-medium text-brand-coral block mb-1 uppercase tracking-widest text-sm">{t('skate_night.ticket_exclusive_label')}</span>
                {t('skate_night.ticket_exclusive_desc')}
              </li>
              <li className="pt-4 border-t border-border">
                <span className="font-medium text-foreground block mb-1 uppercase tracking-widest text-sm">{t('skate_night.early_bird_label')}</span>
                <span className="text-brand-fuchsia">{t('skate_night.early_bird_date')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Charity */}
      <section className="bg-background border-t border-border py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
            {t('skate_night.charity_heading')}
          </h2>
          <p className="text-xl md:text-5xl font-waterfall text-brand-fuchsia mb-12">{t('skate_night.charity_quote')}</p>
          <p className="text-lg font-rubik font-light text-foreground mb-12 text-center">{t('skate_night.charity_text')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-background border border-border p-8">
              <h3 className="font-inter font-light text-foreground uppercase tracking-widest mb-4 h-12">Alba Bástya Központ</h3>
              <p className="text-sm font-rubik font-light text-foreground/60 mb-4 h-10">Székesfehérvár, Család- és Gyermekjóléti Központ</p>
              <div className="space-y-2 flex flex-col">
                <a href="https://csaladesgyermekjolet.hu/" target="_blank" rel="noreferrer" className="text-sm text-brand-fuchsia hover:underline">{t('skate_night.charity_website')}</a>
                <a href="https://www.facebook.com/csaladesgyermekjolet.fehervar" target="_blank" rel="noreferrer" className="text-sm text-brand-fuchsia hover:underline">{t('skate_night.charity_facebook')}</a>
              </div>
            </div>
            <div className="bg-background border border-border p-8">
              <h3 className="font-inter font-light text-foreground uppercase tracking-widest mb-4 h-12">ÁGOTA® Alapítvány</h3>
              <p className="text-sm font-rubik font-light text-foreground/60 mb-4 h-10">Szeged, ÁGOTA® Alapítvány</p>
              <div className="space-y-2 flex flex-col">
                <a href="https://www.agotaalapitvany.hu/" target="_blank" rel="noreferrer" className="text-sm text-brand-fuchsia hover:underline">{t('skate_night.charity_website')}</a>
                <a href="https://www.facebook.com/agota.alapitvany/" target="_blank" rel="noreferrer" className="text-sm text-brand-fuchsia hover:underline">{t('skate_night.charity_facebook')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
