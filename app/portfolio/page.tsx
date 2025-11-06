import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólió – Tulip Couture & Shop',
  description: 'Tekintse meg egyedi menyasszonyi és alkalmi ruháinkat',
};

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: 'Klasszikus Elegancia',
      category: 'Menyasszonyi',
      description: 'Időtlen szépség, hagyományos stílussal',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Modern Romance',
      category: 'Menyasszonyi',
      description: 'Kortárs design romantikus részletekkel',
      image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Vintage Charm',
      category: 'Alkalmi',
      description: 'Régi idők varázsa modern kivitelezésben',
      image: 'https://images.pexels.com/photos/1093242/pexels-photo-1093242.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Bohém Álom',
      category: 'Menyasszonyi',
      description: 'Könnyed, természetes szépség',
      image: 'https://images.pexels.com/photos/1024998/pexels-photo-1024998.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Királynői Glam',
      category: 'Estélyi',
      description: 'Pompázatos elegancia különleges alkalmakra',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Minimál Luxus',
      category: 'Menyasszonyi',
      description: 'Letisztult vonalak, maximális hatás',
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Csipke Varázs',
      category: 'Menyasszonyi',
      description: 'Kézzel készített csipke részletek',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Art Deco Stílus',
      category: 'Estélyi',
      description: 'Az 1920-as évek eleganciája',
      image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Virágos Romantika',
      category: 'Menyasszonyi',
      description: 'Hímzett virágmotívumok részletgazdag kivitelben',
      image: 'https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Portfólió
          </h1>
          <p className="text-xl text-white/90">
            Egyedi alkotásaink és kézműves munkáink
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-tulip-red font-semibold mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-heading font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Szeretnél egyedi ruhát készíttetni?
          </p>
          <a
            href="/kapcsolat"
            className="inline-block bg-tulip-red text-white px-8 py-3 rounded-md font-semibold hover:bg-[#a40e25] transition-colors"
          >
            Foglalj időpontot most
          </a>
        </div>
      </div>
    </div>
  );
}
