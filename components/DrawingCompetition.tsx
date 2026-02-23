'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function DrawingCompetition() {
    return (
        <section className="py-24 bg-white dark:bg-[#0B0B0B] transition-colors border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-4">
                            RAJZPÁLYÁZATI FELHÍVÁS
                        </h2>
                        <p className="text-xl md:text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em]">
                            JÉGHERCEGNŐ RUHATERVEZŐ PÁLYÁZAT
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-8">
                            <p className="text-lg md:text-xl font-rubik font-light text-foreground leading-relaxed text-justify">
                                Fedezd fel a divattervezés világát! A Tulip Shop Hungary Kft. országos rajzpályázatot hirdet általános és középiskolás diákok számára. Tervezd meg saját jéghercegnő ruhádat, és akár a SKATE NIGHT by TULIP divatbemutatón is bemutatásra kerülhet!
                            </p>

                            <div className="pt-4">
                                <Link
                                    href="/rajzpalyazat"
                                    className="inline-block bg-[#d11133] text-white px-10 py-5 text-sm font-rubik font-light uppercase tracking-widest hover:bg-[#b00e2a] transition-all"
                                >
                                    RÉSZLETEK MEGTEKINTÉSE
                                </Link>
                            </div>
                        </div>

                        <div className="relative w-full border border-border group overflow-hidden">
                            <Image
                                src="/images/RAJZPÁLYÁZAT(1).png"
                                alt="Rajzpályázat divattervezés"
                                width={800}
                                height={1000}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
