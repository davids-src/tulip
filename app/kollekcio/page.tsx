import FlipCard from '@/components/FlipCard';
import collectionData from '@/data/collection.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kollekció – TULIP',
  description: 'Tekintse meg egyedi menyasszonyi és alkalmi ruháinkat',
};

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0B0B] transition-colors pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-black dark:text-white mb-6 uppercase tracking-widest">
            Kollekció
          </h1>
          <div className="w-32 h-1.5 bg-tulip-red mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-tulip-mid-gray max-w-2xl mx-auto leading-relaxed">
            Fedezd fel legújabb alkotásainkat, melyek a legfinomabb anyagokból és végtelen odaadással készültek.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionData.map((item) => (
            <FlipCard
              key={item.id}
              title={item.title}
              category={item.category}
              frontImage={item.frontImage}
              backImages={item.backImages}
            />
          ))}
        </div>

        <div className="mt-32 text-center bg-gray-50 dark:bg-white/5 p-12 lg:p-20 rounded-[3rem] border border-black/5 dark:border-white/5 shadow-2xl shadow-black/5">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-black dark:text-white mb-6">
            Szeretnél valami igazán egyedit?
          </h2>
          <p className="text-xl text-gray-600 dark:text-tulip-mid-gray mb-10 max-w-xl mx-auto">
            Minden ruhánk személyre szabható, de akár teljesen saját elképzelések alapján is tervezünk számodra.
          </p>
          <a
            href="/kapcsolat"
            className="inline-block bg-tulip-red text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#a40e25] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-tulip-red/20"
          >
            Foglalj konzultációt
          </a>
        </div>
      </div>
    </main>
  );
}
