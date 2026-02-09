'use client';

import Image from 'next/image';

export default function FounderIntro() {
    return (
        <section className="py-24 bg-white dark:bg-[#0B0B0B] transition-colors">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Slot */}
                    <div className="relative">
                        <div className="relative aspect-[4/5] overflow-hidden shadow-2xl border-4 border-foreground/10">
                            <Image
                                src="/images/about-founder.jpg" // Note: Ensure this file exists in public/images
                                alt="A TULIP megálmodója"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white font-rubik font-medium text-2xl">A TULIP megálmodója</p>
                                <div className="w-12 h-1 bg-brand-fuchsia mt-2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
                            Történetem
                        </h1>
                        <div className="w-24 h-1.5 bg-brand-fuchsia mb-10"></div>
                        <div className="space-y-6 text-lg md:text-xl font-rubik font-light text-foreground leading-relaxed">
                            <p>
                                Itt mutatom be, ki áll a TULIP mögött, hogyan indult minden, és miért lett a kézzel készített,
                                személyre szabott ruhák világa az életem része.
                            </p>
                            <p>
                                A divat számomra nem csak öltözködés, hanem önkifejezés és művészet.
                                Hiszek abban, hogy minden nő megérdemli azt az egyedi figyelmet,
                                amit egy kézzel készített, minden részletében rá szabott ruha adhat.
                            </p>
                            <p className="italic font-rubik font-medium text-foreground border-l-4 border-brand-fuchsia pl-6 py-2">
                                "A legszebb ruha, amit egy nő viselhet, az önbizalom. Én csak segítek ezt láthatóvá tenni."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
