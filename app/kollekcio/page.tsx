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
            A női elegancia legmagasabb formája, ami nem követi a világot. Irányt mutat neki.
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

        {/* Collection description text block */}
        <div className="mt-20 pt-16 border-t border-[#d11133]/20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide text-justify">
              {/* Ezt a szöveget cseréld le a tényleges kollekció leírásra */}
              A Tulip Luxuskollekció nem ruhákat mutat be hanem ikonikus darabokat teremt. Minden
              részletében a csendes fényű elegancia, a mértékletességbe rejtett luxus és a
              megkérdőjelezhetetlen szakmai minőség esszenciája jelenik meg. Belépsz egy világba, ahol a
              nőiesség státusz, a minőség érték, az elegancia pedig örökség.
            </p>
            <p className="mt-6 text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide text-justify">
              {/* Második bekezdés helye */}
              Minden darab egy művészi kompozíció: kézzel rajzolt vonalak, letisztult formák, légiesen finom
              textúrák. Nem a trendekhez igazodik hanem új fejezetet nyit a magas presztízsű hazai
              divatiparban.
            </p>
            <p className="mt-6 text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide text-justify">
              {/* Második bekezdés helye */}
              A kollekció azoknak szól, akik értik és érzik a valódi luxust, akiknek a minőség nem opció,
              hanem alapelv,
              akik a csendes eleganciában látják a legerősebb kijelentést, akik képesek megélni a nőiesség
              időtlen szépségét.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
