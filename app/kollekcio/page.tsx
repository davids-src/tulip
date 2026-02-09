import FlipCard from '@/components/FlipCard';
import collectionData from '@/data/collection.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kollekció – TULIP',
  description: 'Tekintse meg egyedi menyasszonyi és alkalmi ruháinkat',
};

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
            Kollekció
          </h1>
          <p className="text-xl font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
            Fedezd fèl legújabb alkotásainkat, melyek a legfinomabb anyagokból és végtelen odaadással készültek.
            Minden darab egyedi történetet mesél el, ötvözve a klasszikus eleganciát a modern szemlélettel.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {collectionData.slice(0, 6).map((item: any) => (
            <FlipCard
              key={item.id}
              frontImage={item.frontImage}
              logoLight={item.logoLight}
              logoDark={item.logoDark}
            />
          ))}
        </div>

        <div className="mt-32 text-center bg-accent/20 p-12 lg:p-20 border border-border">
          <h2 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-6">
            Szeretnél valami igazán egyedit?
          </h2>
          <p className="text-lg font-rubik font-light text-foreground mb-10 max-w-xl mx-auto text-justify">
            Minden ruhánk személyre szabható, de akár teljesen saját elképzelések alapján is tervezünk számodra.
            Vedd fel velünk a kapcsolatot, hogy elindíthassuk közös tervezési folyamatunkat.
          </p>
          <a
            href="/kapcsolat"
            className="inline-block bg-[#d11133] text-white px-10 py-5 text-sm font-rubik font-light uppercase tracking-widest hover:bg-[#b00e2a] transition-all"
          >
            Foglalj konzultációt
          </a>
        </div>
      </div>
    </main>
  );
}
