'use client';

import FlipCard from './FlipCard';
import collectionData from '@/data/collection.json';

export default function CollectionFlipGrid() {
    return (
        <section id="kollekcio" className="py-24 bg-white dark:bg-[#0B0B0B] transition-colors">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6">
                        Kollekcióm
                    </h2>
                    <div className="w-24 h-1.5 bg-tulip-red mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {collectionData.slice(0, 6).map((item) => (
                        <FlipCard
                            key={item.id}
                            title={item.title}
                            category={item.category}
                            frontImage={item.frontImage}
                            backImages={item.backImages}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
