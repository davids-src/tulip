'use client';

export default function FounderManifesto() {
    return (
        <section className="py-24 bg-background transition-colors">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-16">

                    {/* Block 1 */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] text-center mb-8">
                            Mérnöki precizitás és művészi érzékenység
                        </h2>
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                            Könnyűipari mérnökként az innovációt hozom be a ruházati iparágba: hiszek a modern
                            technológiákban, az Ipar 4.0 szemléletben, a zero waste tervezésben és a tudatos
                            anyaghasználatban. Designerként pedig a kézzel rajzolt tervek, a finom részletek,
                            az egyediség és a nőiesség elegáns megfogalmazása vezérel.
                        </p>

                        <div className="border border-border p-8">
                            <p className="text-lg font-rubik font-normal text-foreground mb-4">
                                A Tulip darabjai így válnak egyszerre:
                            </p>
                            <ul className="space-y-2">
                                {['elegánssá', 'nőiessé', 'technológiailag átgondolttá', 'egyedivé és kis szériássá'].map((item, index) => (
                                    <li key={index} className="flex items-center text-lg font-rubik font-light text-brand-fuchsia">
                                        <span className="text-brand-fuchsia mr-3 text-xs">■</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                            Célom, hogy minden nő olyan ruhában léphessen ki a világba, amelyben
                            magabiztosnak, harmonikusnak és önazonosnak
                            érzi magát.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] text-center mb-8">
                            Küldetésem
                        </h2>
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                            A Tulip számomra nem csupán divatmárka, hanem hitvallás: megmutatni, hogy a teremtés,
                            az értékek megőrzése és az önmegvalósítás képes újraéleszteni egy hanyatló iparágat.
                        </p>
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                            A hazai könnyűipar megújítása elhivatottságom része. Hiszem, hogy a tudás, az innováció,
                            a modern szemlélet és a példamutató magatartás képesek visszaadni ennek a szakmának a
                            méltóságát – és vonzóvá tenni a következő generációk számára is.
                        </p>
                    </div>

                    {/* Block 3 */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] text-center mb-8">
                            A nő aki Tulip ruhát visel
                        </h2>
                        <p className="text-lg font-rubik font-light text-foreground mb-4">
                            A Tulip azoknak a nőknek szól, akik:
                        </p>
                        <ul className="space-y-3 mb-6">
                            {[
                                'harmóniában élnek önmagukkal',
                                'szeretik a letisztult, elegáns megjelenést',
                                'értékelik az egyediség és a luxus finom jelenlétét',
                                'személyiségükben erősek, stílusukban kifinomultak'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-lg font-rubik font-light text-foreground">
                                    <span className="text-brand-fuchsia mr-3 text-xs">■</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                            A ruháim célja, hogy ezt a belső szépséget és magabiztosságot minden pillanatban láthatóvá tegyék.
                        </p>
                    </div>

                    {/* Closing Text */}
                    <div className="pt-12 border-t border-border space-y-6">
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                            A Tulip erről szól: a női út szépségéről, a tudatos alkotás erejéről és arról a hitről,
                            hogy értéket teremteni felelősség – de kiváltság is.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
