'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SkateNightPromo() {
    const [modalOpen, setModalOpen] = useState(false);

    // ESC billentyűre bezárás
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setModalOpen(false);
        };
        if (modalOpen) document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [modalOpen]);

    return (
        <>
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
                                        FASHION SHOW &amp; AFTER PARTY
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
                                    href="https://jegymester.hu/production/742578/skate-night-by-tulip/74002706"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brand-fuchsia text-brand-light dark:text-brand-dark px-5 py-4 font-rubik font-light text-center hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-fuchsia transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                                >
                                    Jegyvásárlás
                                </Link>

                                <Link
                                    href="/partnereim"
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

                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="text-brand-fuchsia font-rubik font-medium hover:opacity-80 transition-opacity text-center flex items-center justify-center py-4 cursor-pointer"
                                >
                                    Lépj kapcsolatba velem
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ animation: 'fadeIn 0.2s ease' }}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setModalOpen(false)}
                    />

                    {/* Modal card */}
                    <div
                        className="relative bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 shadow-2xl w-full max-w-sm overflow-hidden"
                        style={{ animation: 'slideUp 0.25s cubic-bezier(0.16,1,0.3,1)' }}
                    >
                        {/* Top accent bar */}
                        <div className="h-1 w-full bg-brand-fuchsia" />

                        <div className="px-8 py-8">
                            {/* Close button */}
                            <button
                                onClick={() => setModalOpen(false)}
                                className="absolute top-5 right-5 text-foreground/40 hover:text-foreground transition-colors"
                                aria-label="Bezárás"
                            >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>

                            {/* Label */}
                            <p className="text-[10px] font-rubik font-light tracking-[0.25em] uppercase text-brand-fuchsia mb-6">
                                Kapcsolat
                            </p>

                            {/* Name */}
                            <h3 className="text-2xl font-rubik font-light text-foreground tracking-wide mb-1">
                                Nikolett Oszoli
                            </h3>
                            <p className="text-sm font-rubik font-light text-foreground/50 tracking-widest uppercase mb-8">
                                TULIP
                            </p>

                            {/* Divider */}
                            <div className="w-8 h-px bg-brand-fuchsia mb-8" />

                            {/* Email */}
                            <a
                                href="mailto:nikolett.oszoli@tulip.hu"
                                className="group flex items-center gap-3 text-foreground/80 hover:text-brand-fuchsia transition-colors font-rubik font-light text-sm tracking-wide"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                                </svg>
                                nikolett.oszoli@tulip.hu
                            </a>
                        </div>

                        {/* Bottom close button */}
                        <div className="px-8 pb-8">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="w-full border border-border text-foreground/60 font-rubik font-light text-sm py-3 hover:border-brand-fuchsia hover:text-brand-fuchsia transition-all tracking-widest uppercase"
                            >
                                Bezárás
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(24px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0)    scale(1);    }
                }
            `}</style>
        </>
    );
}
