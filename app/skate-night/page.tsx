'use client';

import Image from 'next/image';
import Link from 'next/link';
import Countdown from '@/components/Countdown';
import YouTubePlayer from '@/components/YouTubePlayer';

export default function SkateNightPage() {
    const earlyBirdDate = "2026-03-18T00:00:00+01:00";

    const worlds = [
        { title: "Sport: A mozgás dinamikája.", text: "„Ahol a kifinomult elegancia és a teljesítmény eggyé válik. A mozgás művészete a jégen.”" },
        { title: "Costume: A teatralitás határai.", text: "„Stílus irodától a reflektorfényig. Karizmatikus jelenlét minden szerepben.”" },
        { title: "Night: Az éjszaka érzékisége.", text: "„Érzéki suttogás az éjszakában. Babydollok olyan nőknek, akik ismerik a csábítás titkait.”" },
        { title: "Event: A klasszikus elegancia (Chanel stílus).", text: "„Varázslatos esték, formabontó sziluettek. Finoman formált luxus és elegancia találkozása.”" },
        { title: "Wedding: Fekete-törtfehér dráma.", text: "„Kézzel varrt csipke csodák az Atelier falai közül. Mert az esküvőtök sem csak egy nap, hanem örökké emlékezetes sziluett.”" },
        { title: "Diamond: A totális ragyogás", text: "„Apró csoda, végtelen ragyogás. A gyémánt, amely nem csak tündököl – hódít.”" },
    ];

    const stars = [
        { name: "Bréda Bia:", desc: "A jég és a stílus találkozása." },
        { name: "Newik:", desc: "Aki a show utáni lüktetést diktálja." },
        { name: "Beszeda Gábor:", desc: "Az est elegáns házigazdája." }
    ];

    return (
        <main className="min-h-screen bg-background transition-colors pb-20 pt-20">
            {/* Hero Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-border text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] leading-tight">
                        SKATE NIGHT by TULIP <br />
                        <span className="text-2xl md:text-3xl block mt-4 text-brand-fuchsia tracking-[0.2em]">A stílus a jégre költözik!</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-rubik font-light text-foreground/80 tracking-wide uppercase">
                        A trendek kedvelőinek exkluzív élménye.
                    </p>

                    <div className="pt-12 w-full max-w-5xl mx-auto">
                        <YouTubePlayer
                            videoId="zh5L5M6ZUJA"
                            title="SKATE NIGHT by TULIP"
                        />
                    </div>

                    <div className="inline-block border border-border p-6 mt-16">
                        <p className="text-lg md:text-xl font-rubik font-medium text-foreground uppercase tracking-widest">
                            2026. április 18. szombat
                        </p>
                        <p className="text-base text-brand-fuchsia mt-2 tracking-widest uppercase">
                            Székesfehérvár, MET Aréna
                        </p>
                    </div>

                    <div className="pt-8">
                        <Link
                            href="https://jegymester.hu/production/742578/skate-night-by-tulip/74002706"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#d11133] text-white px-12 py-5 text-sm font-rubik font-light uppercase tracking-widest hover:bg-[#b00e2a] transition-all"
                        >
                            Biztosítsd a helyed a ragyogásban
                        </Link>
                    </div>

                    <div className="mt-16 border border-border p-8">
                        <Countdown targetDate={earlyBirdDate} label="Early bird jegyek lejáró határideje:" />
                    </div>
                </div>
            </section>

            {/* Vízió */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
                <h2 className="text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-8 text-center">Vízió</h2>
                <p className="text-xl md:text-5xl font-waterfall text-brand-fuchsia text-center leading-relaxed">
                    „A divat számomra sokkal több, mint ruhák tervezése: párbeszéd önmagunkkal, eszköz a női identitás kifejezésére és a belső erő megmutatásának természetes formája.”
                </p>
            </section>

            {/* 6 Titokzatos Világ */}
            <section className="bg-background border-y border-border py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-16 text-center">6 Titokzatos Világ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {worlds.map((world, index) => (
                            <div key={index} className="border border-border p-8 bg-background group hover:border-[#d11133] transition-colors relative overflow-hidden">
                                <h3 className="text-xl font-inter font-light uppercase tracking-widest text-foreground mb-4 group-hover:text-[#d11133] transition-colors">
                                    {world.title}
                                </h3>
                                <p className="text-base font-rubik font-light text-foreground/80 leading-relaxed italic">
                                    {world.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mi vár rád? */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-5xl">
                <h2 className="text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-12 text-center">Mi vár rád?</h2>

                {/* 4 colors images */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
                    <div className="relative aspect-[2/3] border border-border group overflow-hidden">
                        <Image src="/images/arculat_rajzolt_fekete_jeg.jpg" alt="Fekete jég arculat" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="relative aspect-[2/3] border border-border group overflow-hidden">
                        <Image src="/images/arculat_rajzolt_piros_jeg.jpg" alt="Korall Piros jég arculat" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="relative aspect-[2/3] border border-border group overflow-hidden">
                        <Image src="/images/arculat_rajzolt_fukszia_jeg.jpg" alt="Fukszia jég arculat" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="relative aspect-[2/3] border border-border group overflow-hidden">
                        <Image src="/images/arculat_rajzolt_feher_jeg.jpg" alt="Csontszín jég arculat" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                </div>

                <div className="space-y-6 text-lg font-rubik font-light text-foreground leading-relaxed text-justify mb-12">
                    <p>
                        Ajándék, B2B szektor, Marketing & Szponzor kiállítói folyosó, Textil kiállítás a rajzpályázatra beküldött pályamunkákról, ruhaipari történetekről, Fashion show exkluzív rendhagyó környezetben, exkluzív élmény, jégkorcsolyázó modellek és ruhabemutató Bréda Bia zenei szetteire.
                    </p>
                    <p>
                        Exkluzív jegyet váltó látogatóknak welcome pezsgő, dekoratív környezetben gálavacsora a jégen a műsor alatt, a divatbemutatón követően after party Newikkal.
                    </p>
                </div>

                <div className="text-center">
                    <a href="https://www.youtube.com/watch?v=zh5L5M6ZUJA" target="_blank" rel="noopener noreferrer" className="inline-block uppercase tracking-widest text-[#d11133] hover:text-brand-fuchsia text-sm font-medium border-b border-[#d11133] hover:border-brand-fuchsia transition-all pb-1">
                        ▸ Reklámfilm megtekintése
                    </a>
                </div>
            </section>

            {/* Történetek & Ötletgazda */}
            <section className="bg-background py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-24">

                    {/* Oszoli Nikolett */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-[3/4] border border-white/20">
                            <Image
                                src="/images/ice_fashion_show-1.jpg"
                                alt="Oszoli Nikolett - Ötletgazda"
                                fill
                                className="object-cover opacity-80"
                            />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">
                                Ötletgazda: <span className="whitespace-nowrap">Oszoli Nikolett</span>
                            </h3>
                            <div className="text-base font-rubik font-light leading-relaxed text-justify space-y-4 text-foreground/80">
                                <p>
                                    “Ruhaipari szakemberként, a divatvilág magával ragadt és a székesfehérvári MET Aréna ad otthont az első kollekcióm bemutatásának amelyre közel 10 éve tudatosan készülök. A helyszín választás során olyan környezetet kerestem ami exkluzív és személyiségemet tükrözi, azonosulni tudok vele illetve rendhagyó módon eltér a korábbi évek trendkövető magatartásától, a kifutók világától. Szeretném a ruhát mozgásában bemutatni.”
                                </p>
                                <p>
                                    “Célom, hogy kiemelkedjek a divatiparban szakmai tudásommal, kézügyességemmel, kreativitásommal. A program, amelynek megalkotója vagyok a SKATE NIGHT by Tulip nevet viseli. A divatbemutató a jégpályán lesz bemutatva a jégcsarnokban műkorcsolyázó modellekkel. Az elnevezése két olyan cselekményből lett meghatározva ami közel áll a szívemhez: műkorcsolya és az éjszakai csillogás varázslatos világa.”
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Wiener Eistraum */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                        <div className="order-1 lg:order-2 relative aspect-video lg:aspect-[4/3] border border-white/20">
                            <Image
                                src="/images/Wiener-Eistraum-2019_Eröffnung_DSC00925_print_cPID_David-Bohmann.jpg"
                                alt="Wiener Eistraum"
                                fill
                                className="object-cover opacity-80"
                            />
                        </div>
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="text-base font-rubik font-light leading-relaxed text-justify space-y-4 text-foreground/80 italic border-l-2 border-brand-fuchsia pl-6">
                                <p>
                                    "Egy éve a bécsi jégálomban (Wiener, Eistraum) korcsolyáztam, tele kérdésekkel, de egyetlen erős képpel a fejemben: hogy egyszer valóra válik, amit itt megálmodtam: jégkori, csillogás, divatba öltött mozdulatok, lendület és, hogy egyszer mindez valóra válik."
                                </p>
                                <p>
                                    "1 évvel később (2026 januárban) ugyanitt korcsolyáztam, és már nem álom többé. A jég illata, a kifutó energiája és a stílus iránti szenvedély, a saját utam, most összeértek. Van valami különös ereje annak, amikor egy gondolatból út lesz, az útból pedig eredmény. Jó érzés visszanézni, és látni, hogy minden apró lépés számított. Most már tudom: amit itt megálmodtam (2025 januárban), annak itt volt a helye megszületni, jó érzés tudni, hogy nem adtam fel, amikor még csak én hittem benne."
                                </p>
                            </div>
                            <div className="pt-4 flex flex-col space-y-2">
                                <a href="https://www.wien.gv.at/en/leisure/vienna-ice-dream" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-[#d11133] hover:text-white transition-colors">▸ Részletek: Vienna Ice Dream (EN)</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Est fényei & Jegyek */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Stars */}
                    <div>
                        <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">
                            Az Est Fényei (The Stars)
                        </h2>
                        <ul className="space-y-6">
                            {stars.map((star, idx) => (
                                <li key={idx} className="flex flex-col">
                                    <span className="font-rubik font-medium text-lg uppercase tracking-wider text-foreground">{star.name}</span>
                                    <span className="font-rubik font-light text-foreground/70">{star.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tickets */}
                    <div>
                        <h2 className="text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8 border-b border-brand-fuchsia/20 pb-4">
                            Jegyek és Exkluzivitás
                        </h2>
                        <ul className="space-y-6 font-rubik font-light text-foreground/80 text-justify">
                            <li>
                                <span className="font-medium text-foreground block mb-1 uppercase tracking-widest text-sm">Normál jegy:</span>
                                Divatbemutató, after party.
                            </li>
                            <li>
                                <span className="font-medium text-[#d11133] block mb-1 uppercase tracking-widest text-sm">Exkluzív jegy:</span>
                                Kiemelt figyelem: Welcome pezsgő, gálavacsora 10 fős körasztaloknál közvetlenül a jégen - Csak 50 elérhető hely az elit számára.
                            </li>
                            <li className="pt-4 border-t border-border">
                                <span className="font-medium text-foreground block mb-1 uppercase tracking-widest text-sm">Early bird vége:</span>
                                <span className="text-brand-fuchsia">2026. március 18.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Charity */}
            <section className="bg-background border-t border-border py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h2 className="text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
                        Charity Blokk
                    </h2>

                    <p className="text-xl md:text-5xl font-waterfall text-brand-fuchsia mb-12">
                        „Mert amikor a stílus találkozik az együttérzéssel, a jégen csillogó fény valakinek az életében a remény fényévé válik.”
                    </p>

                    <p className="text-lg font-rubik font-light text-foreground mb-12 text-justify">
                        A jegybevételből karitatív célra ajánlok fel az Alba Bástya Család- és Gyermekjóléti Központ és az ÁGOTA® Alapítvány részére.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-background border border-border p-8">
                            <h3 className="font-inter font-light text-foreground uppercase tracking-widest mb-4 h-12">Alba Bástya Központ</h3>
                            <p className="text-sm font-rubik font-light text-foreground/60 mb-4 h-10">Székesfehérvár, Család- és Gyermekjóléti Központ</p>
                            <div className="space-y-2 flex flex-col">
                                <a href="https://csaladesgyermekjolet.hu/" target="_blank" rel="noreferrer" className="text-sm text-brand-fuchsia hover:underline">Weboldal megtekintése</a>
                                <a href="https://www.facebook.com/csaladesgyermekjolet.fehervar" target="_blank" rel="noreferrer" className="text-sm text-brand-fuchsia hover:underline">Facebook oldal</a>
                            </div>
                        </div>

                        <div className="bg-background border border-border p-8">
                            <h3 className="font-inter font-light text-foreground uppercase tracking-widest mb-4 h-12">ÁGOTA® Alapítvány</h3>
                            <p className="text-sm font-rubik font-light text-foreground/60 mb-4 h-10">Szeged, ÁGOTA® Alapítvány</p>
                            <div className="space-y-2 flex flex-col">
                                <a href="https://www.agotaalapitvany.hu/" target="_blank" rel="noreferrer" className="text-sm text-brand-fuchsia hover:underline">Weboldal megtekintése</a>
                                <a href="https://www.facebook.com/agota.alapitvany/" target="_blank" rel="noreferrer" className="text-sm text-brand-fuchsia hover:underline">Facebook oldal</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
