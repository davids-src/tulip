'use client';

import Link from 'next/link';

export default function DrawingCompetition() {
    return (
        <section className="py-24 bg-white dark:bg-[#0B0B0B] transition-colors border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-6">
                            Rajzpályázat
                        </h2>
                        <p className="text-2xl md:text-3xl font-waterfall text-brand-fuchsia mb-8">
                            Álmodj ruhát, rajzolj szabadon!
                        </p>
                    </div>

                    <div className="space-y-6 text-lg font-rubik font-light text-foreground leading-relaxed text-justify mb-12">
                        <p>
                            A Tulip márka születése óvodás rajzokkal kezdődött – hercegnők tulipános ruhákban.
                            Hiszem, hogy minden gyermekben ott él a kreativitás csírája, és a rajzolás az egyik
                            legszebb módja annak, hogy szabadon kifejezzék önmagukat.
                        </p>
                        <p>
                            Ezért meghirdetem a <span className="font-medium text-brand-fuchsia">Tulip Rajzpályázatot</span>,
                            ahol óvodás és általános iskolás gyerekek álmodhatnak meg saját ruhadarabokat.
                            Lehet hercegnős, lehet tulipános, lehet teljesen egyedi – a fantázia szabad!
                        </p>
                    </div>

                    <div className="bg-accent/5 p-8 rounded-sm border-l-4 border-brand-fuchsia mb-12">
                        <h3 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-wider mb-4">
                            Pályázati feltételek
                        </h3>
                        <ul className="space-y-3 text-base font-rubik font-light text-foreground">
                            <li className="flex items-start">
                                <span className="text-brand-fuchsia mr-3 mt-1">•</span>
                                <span>Óvodás és általános iskolás gyerekek jelentkezhetnek</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-fuchsia mr-3 mt-1">•</span>
                                <span>A rajz témája: ruha, öltözék, divat – szabadon értelmezve</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-fuchsia mr-3 mt-1">•</span>
                                <span>Bármilyen technikával készülhet (ceruza, filc, festék, kollázs)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-fuchsia mr-3 mt-1">•</span>
                                <span>A rajzot fotózzátok le vagy szkenneljétek be, és küldjétek el emailben</span>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center space-y-6">
                        <p className="text-lg font-rubik font-light text-foreground italic">
                            A legszebb rajzokat megosztjuk közösségi oldalainkon, és a nyertesek különleges
                            meglepetésben részesülnek – talán egy kézzel készített Tulip kiegészítőben!
                        </p>

                        <div className="pt-6">
                            <Link
                                href="/kapcsolat"
                                className="inline-block bg-brand-fuchsia text-white px-10 py-5 text-sm font-rubik font-light uppercase tracking-widest hover:opacity-90 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                            >
                                Pályázatot beküldök
                            </Link>
                        </div>

                        <p className="text-sm font-rubik text-foreground/60 pt-4">
                            Kérdésed van? Írj nekünk bizalommal a kapcsolat oldalon keresztül!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
