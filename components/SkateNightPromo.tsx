'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SkateNightPromo() {
    return (
        <section id="skate-night-promo" className="py-24 bg-white dark:bg-[#0B0B0B] transition-colors overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Video Column */}
                    <div className="relative group">
                        <div className="relative aspect-video overflow-hidden shadow-2xl border border-black/5 dark:border-white/10">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // TODO: Replace with actual promo video URL
                                title="Fashion Show – Skate Night Promo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col space-y-8">
                        <div>
                            {/* Main title - SKATE NIGHT in coral */}
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src="/logo-tulipan-piros.svg"
                                    alt="Tulip Icon"
                                    width={60}
                                    height={60}
                                    className="opacity-80"
                                />
                                <h2 className="text-5xl md:text-6xl font-rubik font-light text-[#d11133] leading-tight uppercase">
                                    SKATE NIGHT
                                </h2>
                            </div>
                            {/* Subtitle - FASHION SHOW & AFTER PARTY in fuchsia */}
                            <h3 className="text-lg md:text-xl font-rubik font-light text-brand-fuchsia uppercase tracking-widest mb-2">
                                FASHION SHOW & AFTER PARTY
                            </h3>
                            <p className="text-sm font-rubik font-light text-brand-fuchsia uppercase tracking-wide mb-2">
                                BY TULIP
                            </p>
                            <div className="w-20 h-1 bg-brand-fuchsia mb-8"></div>
                            <p className="text-lg md:text-xl font-rubik font-light text-foreground leading-relaxed">
                                Egy különleges divatbemutató és élményest, ahol a stílus és a mozgás találkozik.
                                Csatlakozz, és légy részese a Skate Night hangulatának.
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
