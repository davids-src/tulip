'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import partnersData from '@/data/partners.json';

export default function PartnereimPage() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    return (
        <main className="min-h-screen bg-background transition-colors pt-20">
            <div className="container mx-auto px-4 py-24 max-w-5xl">

                {/* Fejléc */}
                <div className="text-center mb-20">
                    <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
                        Partnereim
                    </h1>
                    <p className="text-xl font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
                        A Tulip világát olyan szakemberek és műhelyek támogatják, akik ugyanazt az értékalapú
                        szemléletet képviselik, mint márkánk: a minőséget, a megbízhatóságot és az igényes alkotást.
                    </p>
                </div>

                {/* Partner kártyák – 2 oszlop mobilon, 4 desktopOn */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {partnersData.map((partner) => {
                        const logoSrc = mounted && resolvedTheme === 'dark'
                            ? partner.logoDark
                            : partner.logoLight;

                        return (
                            <div
                                key={partner.id}
                                className="group flex flex-col border border-border hover:border-[#d11133] transition-all duration-300"
                            >
                                {/* Logo terület */}
                                <div className="relative aspect-square w-full overflow-hidden bg-background flex items-center justify-center p-6">
                                    {mounted ? (
                                        <Image
                                            src={logoSrc}
                                            alt={partner.name}
                                            fill
                                            className="object-contain p-4 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-border/5" />
                                    )}
                                </div>

                                {/* Partner neve alul */}
                                <div className="border-t border-border px-4 py-3 flex items-center justify-center min-h-[60px]">
                                    <p
                                        className="text-xs font-inter font-light text-foreground/60 uppercase tracking-widest group-hover:text-[#d11133] transition-colors duration-300 text-justify w-full"
                                        style={{ textAlignLast: 'center' }}
                                    >
                                        {partner.name}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Záró CTA */}
                <div className="mt-24 text-center border-t border-border pt-16">
                    <p className="text-xl font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify mb-10">
                        Ha szeretnél partnerként csatlakozni a Tulip világához, írj bizalommal.
                        Nyitottak vagyunk új ötletekre, együttműködésekre, közös alkotásra.
                    </p>
                    <a
                        href="mailto:info@tulip.hu"
                        className="inline-block border border-[#d11133] text-[#d11133] px-10 py-4 text-sm font-rubik font-light uppercase tracking-widest hover:bg-[#d11133] hover:text-white transition-all duration-300"
                    >
                        Kapcsolatfelvétel
                    </a>
                </div>

            </div>
        </main>
    );
}
