'use client';

import Link from 'next/link';


export default function SkateNightPromo() {
    return (
        <section id="skate-night-promo" className="py-24 bg-white dark:bg-[#0B0B0B] transition-colors overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Video Column */}
                    <div className="relative group">
                        <div className="relative aspect-video overflow-hidden shadow-2xl border border-black/5 dark:border-white/10">
                            <video
                                className="w-full h-full object-cover"
                                controls
                                playsInline
                                preload="metadata"
                            >
                                <source src="/videos/skate-night.mp4" type="video/mp4" />
                                A böngésződ nem támogatja a videó lejátszását.
                            </video>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col space-y-8">
                        <div>
                            {/* Titles aligned left */}
                            <div className="mb-8">
                                {/* Main Title - SKATE NIGHT */}
                                <h2 className="text-3xl md:text-5xl font-rubik font-light text-[#d11133] uppercase tracking-[0.3em] mb-2 leading-none">
                                    SKATE NIGHT
                                </h2>

                                {/* Subtitle - FASHION SHOW & AFTER PARTY */}
                                <h3 className="text-lg md:text-xl font-rubik font-light text-[#d11133] uppercase tracking-widest">
                                    FASHION SHOW & AFTER PARTY
                                </h3>
                            </div>

                            <p className="text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide">
                                2026 április 18. - A stílus a jégre költözik!
                                Légy részese a varázslatnak, amikor a jég szenvedélyesen perzsel, a stílus pedig kecses táncot
                                lejt az esztétikummal.
                            </p>
                            <p className="mt-5 text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide">
                                Jön a SKATE NIGHT by TULIP a trendek kedvelőinek exkluzív élménye.
                                Különleges szettek, welcome pezsgő, fashion show, fergeteges after party.
                                Egy este, amikor Székesfehérvár a divat lüktető fővárosává válik.
                                Bréda Bia, Newik és Beszeda Gábor már biztosan ott lesznek.
                            </p>
                            <p className="mt-5 text-base md:text-lg font-rubik font-light text-foreground/80 leading-relaxed tracking-wide">
                                Ugye Te sem hagyod ki?
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link
                                href="TODO_TICKET_PURCHASE_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand-fuchsia text-brand-light dark:text-brand-dark px-5 py-4 font-rubik font-light text-center hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-fuchsia transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                            >
                                Szeretnék részt venni a rendezvényen
                            </Link>

                            <Link
                                href="/skate-night#tamogatas"
                                className="bg-background border border-border text-foreground px-5 py-4 font-rubik font-light text-center hover:border-brand-fuchsia transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Szeretném támogatni a rendezvényt
                            </Link>

                            <Link
                                href="/skate-night"
                                className="border-2 border-foreground text-foreground px-5 py-4 font-rubik font-light text-center hover:bg-foreground hover:text-background transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Szeretnék többet megtudni
                            </Link>

                            <Link
                                href="/kapcsolat"
                                className="text-brand-fuchsia font-rubik font-medium hover:opacity-80 transition-opacity text-center flex items-center justify-center py-4"
                            >
                                Lépj kapcsolatba velem
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
