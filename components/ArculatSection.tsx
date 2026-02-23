import Image from 'next/image';

export default function ArculatSection() {
    const paletta = [
        {
            cim: 'Fekete',
            kep: '/images/arculat_rajzolt_fekete.jpg',
            szoveg: 'Arculatunk alapja a fekete, amely a letisztultság és az időtlen elegancia biztos pontja. Határozott jelenléte stabil keretet ad a megjelenésnek, és olyan vizuális alapot teremt, amelyre magabiztosan építjük márkánkat.',
            borderSzolo: 'border-black dark:border-white/50'
        },
        {
            cim: 'Korall Piros',
            kep: '/images/arculat_rajzolt_piros.png',
            szoveg: 'Ezt az erőteljes alapot egészíti ki a korall piros, amely frissességet, energiát és pozitív lendületet hoz. Élénk tónusa azonnal megragadja a figyelmet, miközben barátságos és közvetlen karaktert ad a kommunikációnknak.',
            borderSzolo: 'border-[#d11133]'
        },
        {
            cim: 'Fukszia',
            kep: '/images/arculat_rajzolt_fukszia.png',
            szoveg: 'A fukszia a kreativitás és az egyediség színe, amely merész, vibráló akcentusként jelenik meg arculatunkban. A modern önkifejezés eszközeként játékosságot és határozott vizuális karaktert csempész a megjelenésbe.',
            borderSzolo: 'border-brand-fuchsia'
        },
        {
            cim: 'Csontszín',
            kep: '/images/arculat_rajzolt_feher.png',
            szoveg: 'Mindezt a csontszín finom, természetes árnyalata egyensúlyozza ki. Lágy tónusa harmonikus hátteret biztosít, amely elegánsan kiemeli a markánsabb színeket, és letisztult, rendezett összhatást teremt.',
            borderSzolo: 'border-[#fcfaf2] dark:border-white/30'
        }
    ];

    return (
        <section className="py-24 bg-background transition-colors border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-6">
                        Arculat
                    </h2>
                    <h3 className="text-xl md:text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-6">
                        Arculati Színvilág
                    </h3>
                    <p className="text-xl md:text-2xl font-waterfall text-brand-fuchsia leading-relaxed text-center">
                        &quot;Erő, harmónia, egyediség – négy színben megrajzolva.&quot;
                    </p>
                    <p className="text-base font-rubik font-light text-foreground/80 mt-4 leading-relaxed tracking-wide text-center">
                        A modell rajzokon vázolt ruhák a fináléban lesznek bemutatva.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                    {paletta.map((elem, idx) => (
                        <div key={idx} className="flex flex-col space-y-6 group">
                            {/* Kép */}
                            <div className={`relative w-full aspect-[2/3] border border-border overflow-hidden bg-accent/5 transition-colors group-hover:${elem.borderSzolo}`}>
                                <Image
                                    src={elem.kep}
                                    alt={`Arculati rajz – ${elem.cim}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-90 group-hover:opacity-100"
                                />
                            </div>

                            {/* Cím és Szöveg */}
                            <div className="flex flex-col flex-grow">
                                <h4 className="text-lg font-inter font-light uppercase tracking-widest text-[#d11133] mb-4 text-center border-b border-[#d11133]/20 pb-2">
                                    {elem.cim}
                                </h4>
                                <p className="text-base text-foreground/80 leading-relaxed font-rubik font-light text-justify">
                                    {elem.szoveg}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 max-w-3xl mx-auto text-center border-t border-border pt-12">
                    <p className="text-lg md:text-xl font-rubik font-light text-foreground/90 leading-relaxed tracking-wide text-justify">
                        Ez a színpaletta együtt egy olyan vizuális világot alkot, amely egyszerre modern, energikus és kifinomult — pontosan azt a hangulatot közvetítve, amit márkánkkal képviselünk.
                    </p>
                </div>
            </div>
        </section>
    );
}
