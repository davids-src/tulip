'use client';

import Image from 'next/image';

export default function FounderIntro() {
    return (
        <section className="py-24 bg-white dark:bg-[#0B0B0B] transition-colors">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Slot */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-tulip-red/10 rounded-[3rem] -z-10 transform rotate-3"></div>
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/10">
                            <Image
                                src="/images/about-founder.jpg" // Note: Ensure this file exists in public/images
                                alt="A TULIP megálmodója"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white font-heading text-2xl font-bold">A TULIP megálmodója</p>
                                <div className="w-12 h-1 bg-tulip-red mt-2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-black dark:text-white leading-tight">
                            Történetem
                        </h1>
                        <div className="w-24 h-1.5 bg-tulip-red mb-10"></div>
                        <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-tulip-mid-gray leading-relaxed">
                            <p>
                                Itt mutatom be, ki áll a TULIP mögött, hogyan indult minden, és miért lett a kézzel készített,
                                személyre szabott ruhák világa az életem része.
                            </p>
                            <p>
                                A divat számomra nem csak öltözködés, hanem önkifejezés és művészet.
                                Hiszek abban, hogy minden nő megérdemli azt az egyedi figyelmet,
                                amit egy kézzel készített, minden részletében rá szabott ruha adhat.
                            </p>
                            <p className="italic font-heading text-black dark:text-white border-l-4 border-tulip-red pl-6 py-2">
                                "A legszebb ruha, amit egy nő viselhet, az önbizalom. Én csak segítek ezt láthatóvá tenni."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
