'use client';

import Image from 'next/image';
import Link from 'next/link';
import Countdown from '@/components/Countdown';

export default function SkateNightPage() {
    const ticketStartDate = "2026-02-06T00:00:00+01:00";

    return (
        <main className="min-h-screen bg-background transition-colors pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                {/* Title Section */}
                <div className="text-center mb-16 space-y-2">
                    <p className="text-lg md:text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em]">
                        SKATE NIGHT BY TULIP
                    </p>
                    <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] leading-tight">
                        FASHION SHOW & AFTER PARTY
                    </h1>
                </div>

                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Promo Video */}
                    <div className="aspect-video bg-black/5 dark:bg-white/5 border border-border overflow-hidden rounded-none">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/TODO_PROMO_VIDEO_URL"
                            title="Skate Night Promo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Body Text */}
                    <div className="space-y-6 text-justify font-rubik font-light text-foreground leading-relaxed">
                        <p>
                            A TULIP bemutatja legújabb vízióját: a SKATE NIGHT-ot, ahol a divat és a dinamizmus találkozik.
                            Ez nem csupán egy divatbemutató, hanem egy egész estés élmény, amely a modern nőt ünnepli minden szerepében.
                        </p>
                        <p>
                            Várunk szeretettel a fashion show-n, ahol a legújabb kollekcióink debütálnak, majd az azt követő after partyn,
                            ahol a közösség ereje és a jó hangulat kerül fókuszba.
                        </p>
                    </div>

                    {/* Ticket Sales & Countdown */}
                    <div className="border border-border p-8 md:p-12 text-center bg-accent/30 rounded-none space-y-8">
                        <Countdown
                            targetDate={ticketStartDate}
                            label="Jegyértékesítés indul:"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                            <Link
                                href="TODO_TICKET_PURCHASE_URL"
                                className="px-8 py-4 bg-[#d11133] text-white text-xs font-rubik font-light uppercase tracking-widest hover:bg-[#b00e2a] transition-all rounded-none"
                            >
                                Szeretnék részt venni a rendezvényen
                            </Link>
                            <Link
                                href="TODO_SUPPORT_URL"
                                className="px-8 py-4 border border-brand-fuchsia text-brand-fuchsia text-xs font-rubik font-light uppercase tracking-widest hover:bg-brand-fuchsia hover:text-white transition-all rounded-none"
                            >
                                Szeretném támogatni a rendezvényt
                            </Link>
                            <Link
                                href="/skate-night"
                                className="px-8 py-4 bg-foreground text-background text-xs font-rubik font-light uppercase tracking-widest hover:opacity-90 transition-all rounded-none"
                            >
                                Szeretnék többet megtudni
                            </Link>
                            <Link
                                href="/kapcsolat"
                                className="px-8 py-4 text-brand-fuchsia text-xs font-rubik font-light uppercase tracking-widest hover:text-brand-fuchsia/80 transition-all rounded-none"
                            >
                                Lépj kapcsolatba velem
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
