'use client';

import Link from 'next/link';

export default function SkateNightPromo() {
    return (
        <section id="skate-night-promo" className="py-24 bg-white dark:bg-[#0B0B0B] transition-colors overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Video Column */}
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-tulip-red/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10">
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
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-black dark:text-white leading-tight">
                                Fashion Show – <span className="text-tulip-red">Skate Night</span>
                            </h2>
                            <div className="w-20 h-1 bg-tulip-red mb-8"></div>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-tulip-mid-gray leading-relaxed">
                                Egy különleges divatbemutató és élményest, ahol a stílus és a mozgás találkozik.
                                Csatlakozz, és légy részese a Skate Night hangulatának.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link
                                href="TODO_TICKET_PURCHASE_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#C8102E] text-white px-5 py-4 rounded-2xl font-bold text-center hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#C8102E] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-tulip-red/20"
                            >
                                Szeretnék részt venni a rendezvényen
                            </Link>

                            <Link
                                href="/skate-night#tamogatas" // TODO: Check if explicit support URL exists
                                className="bg-black/5 dark:bg-white/10 text-black dark:text-white px-5 py-4 rounded-2xl font-bold text-center border border-black/10 dark:border-white/15 hover:border-black/20 dark:hover:border-white/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Szeretném támogatni a rendezvényt
                            </Link>

                            <Link
                                href="/skate-night"
                                className="border-2 border-black dark:border-white text-black dark:text-white px-5 py-4 rounded-2xl font-bold text-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Szeretnék többet megtudni
                            </Link>

                            <Link
                                href="/kapcsolat"
                                className="text-[#C8102E] font-bold underline underline-offset-4 hover:opacity-80 transition-opacity text-center flex items-center justify-center py-4"
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
