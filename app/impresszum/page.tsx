import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Impresszum – TULIP',
    description: 'A Tulip Shop Hungary Kft. impresszuma – elérhetőségek, cégjegyzékszám, adószám, tárhelyszolgáltató és szerzői jogi nyilatkozat.',
};

export default function ImpresszumPage() {
    return (
        <main className="min-h-screen bg-background transition-colors pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-12 text-center">
                    Impresszum
                </h1>

                <div className="space-y-10 font-rubik font-light text-foreground leading-relaxed text-justify">

                    {/* Szolgáltató adatai */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">
                            A szolgáltató adatai
                        </h2>
                        <div className="bg-accent/5 border border-border p-6 space-y-3">
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">A szolgáltató neve</span>
                                <p className="font-medium">Tulip Shop Hungary Kft.</p>
                            </div>
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">Székhely</span>
                                <p>8000 Székesfehérvár, Stomfai u. 22.</p>
                            </div>
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">Elérhetőségek</span>
                                <p>E-mail: <a href="mailto:info@tulip.hu" className="text-[#d11133] hover:underline">info@tulip.hu</a></p>
                                <p>Telefonszám: <a href="tel:+36302543373" className="text-[#d11133] hover:underline">+36 30 254 3373</a></p>
                                <p>Weboldal: <a href="https://www.tulip.hu" target="_blank" rel="noopener noreferrer" className="text-[#d11133] hover:underline">www.tulip.hu</a></p>
                            </div>
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">Cégképviseletre jogosult</span>
                                <p>Szabó-Oszoli Nikolett, ügyvezető</p>
                            </div>
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">Cégjegyzékszám</span>
                                <p>07 09 034300</p>
                            </div>
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">Adószám</span>
                                <p>32171811-2-07</p>
                            </div>
                        </div>
                    </section>

                    {/* Tárhelyszolgáltató */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">
                            Tárhelyszolgáltató
                        </h2>
                        <div className="bg-accent/5 border border-border p-6 space-y-3">
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">Név</span>
                                <p className="font-medium">Skoda Dávid András EV.</p>
                            </div>
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">Adószám</span>
                                <p>45755754-2-27</p>
                            </div>
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">Nyilvántartási szám</span>
                                <p>58338658</p>
                            </div>
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">Székhely</span>
                                <p>8000 Székesfehérvár, Lövölde utca 24. 4/15</p>
                            </div>
                            <div>
                                <span className="text-xs font-inter uppercase tracking-widest text-foreground/50 block mb-1">Kapcsolattartó</span>
                                <p>Skoda Dávid András – <a href="mailto:skoda.david@sironic.hu" className="text-[#d11133] hover:underline">skoda.david@sironic.hu</a></p>
                            </div>
                        </div>
                    </section>

                    {/* Szerzői jogi nyilatkozat */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-3">
                            Szerzői jogi nyilatkozat
                        </h2>
                        <p>
                            Minden jog fenntartva. Az oldalon található szövegek, szövegrészletek, fotók, ábrák, grafikák és animációk a szerzői jog védelme alatt állnak. További felhasználásuk csak a Tulip Shop Hungary Kft. előzetes írásos beleegyezésével történhet.
                        </p>
                        <p>
                            A Tulip Shop Hungary Kft. fenntartja a jogot, hogy a weboldal tartalmát saját belátása szerint és minden előzetes bejelentés nélkül módosítsa.
                        </p>
                        <p>
                            A tulip.hu weboldal más weboldalak linkjeit is tartalmazza. A Tulip Shop Hungary Kft. semmilyen felelősséget nem vállal ezen oldalak adatvédelmi stratégiájáért és tartalmáért.
                        </p>
                    </section>

                    <p className="mt-12 text-xs opacity-60">Utoljára frissítve: 2026. február 24.</p>
                </div>
            </div>
        </main>
    );
}
