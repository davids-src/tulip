import type { Metadata } from 'next';
import FounderIntro from '@/components/FounderIntro';
import Timeline from '@/components/Timeline';

export const metadata: Metadata = {
  title: 'Történetem – TULIP',
  description: 'Ismerd meg, ki áll a TULIP mögött, és hogyan alakult a történet mérföldköveken át.',
};

export default function StoryPage() {
  return (
    <main>
      <FounderIntro />
      <Timeline />

      {/* Final CTA for Story Page */}
      <section className="py-24 bg-white dark:bg-[#0B0B0B] transition-colors border-t border-black/5 dark:border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-black dark:text-white mb-8">
            Legyél te is a Történetem része!
          </h2>
          <p className="text-xl text-gray-600 dark:text-tulip-mid-gray mb-12 max-w-2xl mx-auto">
            Hívd életre te is álmaid ruháját. Időpontfoglalás után várlak szeretettel budapesti műhelyemben.
          </p>
          <a
            href="/kapcsolat"
            className="inline-block bg-tulip-red text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#a40e25] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-tulip-red/20"
          >
            Időpontot foglalok
          </a>
        </div>
      </section>
    </main>
  );
}
