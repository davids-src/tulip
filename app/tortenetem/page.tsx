import type { Metadata } from 'next';
import FounderIntro from '@/components/FounderIntro';
import FounderManifesto from '@/components/FounderManifesto';
import Timeline from '@/components/Timeline';

export const metadata: Metadata = {
  title: 'Történetem – TULIP',
  description: `Oszoli Nikolett vagyok a Tulip márka megálmodója, alapítója és tervezője – női szabó, könnyűipari mérnök, mérnöktanár, designer és kétgyermekes édesanya –, akit a női elegancia, a természet ihlető ereje és a kézzel rajzolt tervek időtlensége vezet az alkotásban.`,
};


export default function StoryPage() {
  return (
    <main className="bg-background transition-colors">
      <FounderIntro />
      <FounderManifesto />

      <Timeline />

      {/* Lippai Piros Placeholder Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.35em] text-center mb-12">
            Rólam írták
          </h2>
          <div className="max-w-4xl mx-auto space-y-8 font-rubik font-light text-foreground text-justify leading-relaxed">
            <p>
              [Hamarosan: Részletek a Lippai Piros által jegyzett cikkből és egyéb sajtómegjelenésekből.]
            </p>
            <div className="pt-8 border-t border-border text-xs opacity-60">
              Forrás: Lippai Piros, Stílus & Divat Magazin (attribúció helye)
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA for Story Page */}
      <section className="py-24 bg-accent/10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8">
            Legyél te is a Történetem része!
          </h2>
          <p className="text-xl font-rubik font-light text-foreground mb-12 max-w-2xl mx-auto text-justify md:text-center">
            Hívd életre te is álmaid ruháját. Időpontfoglalás után várlak szeretettel budapesti műhelyemben, ahol közösen alkothatjuk meg a számodra legtökéletesebb darabot.
          </p>
          <a
            href="/kapcsolat"
            className="inline-block bg-[#d11133] text-white px-10 py-5 text-sm font-rubik font-light uppercase tracking-widest hover:bg-[#b00e2a] transition-all"
          >
            Időpontot foglalok
          </a>
        </div>
      </section>
    </main>
  );
}
