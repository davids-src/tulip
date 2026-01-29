'use client';

import FlipCard from './FlipCard';
import collectionData from '@/data/collection.json';

export default function CollectionFlipGrid() {
    return (
        <section id="kollekcio" className="py-24 bg-background transition-colors">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.35em]">
                        Kollekcióm
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-0"> {/* Gap 0 for seamless look if requested, but PDF says 2x3 tiles, let's keep some gap for clarity unless specified otherwise. PDF page 3 shows them close. Let's use small gap. */}
                    {collectionData.slice(0, 6).map((item: any) => (
                        <FlipCard
                            key={item.id}
                            frontImage={item.frontImage}
                            logoLight={item.logoLight}
                            logoDark={item.logoDark}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
