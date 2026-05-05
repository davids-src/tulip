'use client';

import { useI18n } from '@/lib/i18n';

export default function AdatkezelesPage() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-12 text-center">
          {t('privacy.heading')}
        </h1>

        <div className="space-y-10 font-rubik font-light text-foreground leading-relaxed text-justify">

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s1_heading')}</h2>
            <p>Jelen adatkezelési tájékoztató célja, hogy a <strong>Tulip Shop Hungary Kft.</strong> (székhely: 8000 Székesfehérvár, Stomfai u. 22., továbbiakban: „Adatkezelő") által végzett adatkezelési tevékenységről átlátható, közérthető módon tájékoztassa az érintetteket.</p>
            <p>Az adatkezelés során az Adatkezelő a 2016/679/EU (GDPR) rendelet és a hatályos magyar jogszabályok előírásait követi.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s2_heading')}</h2>
            <div className="bg-accent/5 border border-border p-6 space-y-2">
              <p><strong>Cégnév:</strong> Tulip Shop Hungary Kft.</p>
              <p><strong>Székhely:</strong> 8000 Székesfehérvár, Stomfai u. 22.</p>
              <p><strong>Cégjegyzékszám:</strong> 07 09 034300</p>
              <p><strong>Adószám:</strong> 32171811-2-07</p>
              <p><strong>E-mail:</strong> <a href="mailto:info@tulip.hu" className="text-[#d11133] hover:underline">info@tulip.hu</a></p>
              <p><strong>Telefonszám:</strong> <a href="tel:+36302543373" className="text-[#d11133] hover:underline">+36 30 254 3373</a></p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s3_heading')}</h2>
            <p>Az Adatkezelő az alábbi célokból kezel személyes adatokat:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Kapcsolattartás és ügyfélkezelés</li>
              <li>Ajánlatkérés és szerződéskötés lebonyolítása</li>
              <li>Számlázás és számviteli kötelezettségek teljesítése</li>
              <li>Weboldal működtetése, működés monitorozása (süti/cookie kezelés)</li>
              <li>Rendezvényre való regisztráció</li>
              <li>Rendezvény fotó, videó dokumentálása</li>
              <li>Rendezvényekre regisztráltak kezelése</li>
              <li>Nyereményjátékra való regisztráció</li>
              <li>Nyeremények átvételéhez szükséges adat</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s4_heading')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-rubik font-medium text-foreground uppercase tracking-wider text-sm mb-2">4.1. Kapcsolattartás</h3>
                <ul className="list-disc pl-6 space-y-1"><li>név</li><li>e-mail cím</li><li>telefonszám</li><li>üzenet tartalma</li></ul>
              </div>
              <div>
                <h3 className="font-rubik font-medium text-foreground uppercase tracking-wider text-sm mb-2">4.2. Szerződéskötés és teljesítés</h3>
                <ul className="list-disc pl-6 space-y-1"><li>számlázási név</li><li>számlázási cím</li><li>adószám (vállalkozásoknál)</li><li>fizetési adatok</li></ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s5_heading')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>GDPR 6. cikk (1) a)</strong> – hozzájárulás (pl. hírlevél)</li>
              <li><strong>GDPR 6. cikk (1) b)</strong> – szerződés teljesítése</li>
              <li><strong>GDPR 6. cikk (1) c)</strong> – jogi kötelezettség teljesítése (számlázás)</li>
              <li><strong>GDPR 6. cikk (1) f)</strong> – jogos érdek (weboldal működtetése)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s6_heading')}</h2>
            <div className="bg-accent/5 border border-border p-6 space-y-2">
              <p className="font-medium text-foreground uppercase tracking-wider text-sm mb-3">Tárhelyszolgáltató:</p>
              <p><strong>Név:</strong> Skoda Dávid András EV.</p>
              <p><strong>Adószám:</strong> 45755754-2-27</p>
              <p><strong>Nyilvántartási szám:</strong> 58338658</p>
              <p><strong>Székhely:</strong> 8000 Székesfehérvár, Lövölde utca 24. 4/15</p>
              <p><strong>Kapcsolattartó:</strong> Skoda Dávid András, <a href="mailto:skoda.david@sironic.hu" className="text-[#d11133] hover:underline">skoda.david@sironic.hu</a></p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s7_heading')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>kapcsolattartás: max. <strong>1 év</strong></li>
              <li>számlázáshoz szükséges adatok: <strong>8 év</strong></li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s8_heading')}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>tájékoztatást kérni adataik kezeléséről</li>
              <li>kérni a helyesbítést</li>
              <li>kérni az adatok törlését („elfeledtetés joga")</li>
              <li>kérni az adatkezelés korlátozását</li>
              <li>tiltakozni a jogos érdek alapú adatkezelés ellen</li>
              <li>adathordozhatóságot kérni</li>
              <li>panasszal élni a NAIH-nál</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s9_heading')}</h2>
            <div className="bg-accent/5 border border-border p-6 space-y-2">
              <p><strong>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</strong></p>
              <p><strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9–11.</p>
              <p><strong>Weboldal:</strong> <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-[#d11133] hover:underline">www.naih.hu</a></p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s10_heading')}</h2>
            <p>A weboldal sütiket használ a működés biztosítása, statisztikák és felhasználói élmény javítása érdekében. A felhasználó a böngészőjében bármikor letilthatja a cookie-k használatát.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">{t('privacy.s11_heading')}</h2>
            <p>Az Adatkezelő fenntartja a jogot a jelen tájékoztató módosítására. A módosítás a weboldalon való közzététellel válik hatályossá.</p>
          </section>

          <p className="mt-12 text-xs opacity-60">{t('privacy.last_updated')}</p>
        </div>
      </div>
    </main>
  );
}
