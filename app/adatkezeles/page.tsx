import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Adatkezelési Tájékoztató – TULIP',
};

export default function AdatkezelesPage() {
    return (
        <main className="min-h-screen bg-background transition-colors pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.35em] mb-12">
                    Adatkezelési Tájékoztató
                </h1>

                <div className="space-y-8 font-rubik font-light text-foreground leading-relaxed text-justify">
                    <p>
                        A Tulip Shop Hungary Kft. (székhely: 8000 Székesfehérvár, Ady Endre u. 11., képviselő: Skoda Dávid, a továbbiakban: Adatkezelő) mint a www.tulip.hu weboldal (a továbbiakban: Honlap) üzemeltetője, elkötelezett a felhasználók személyes adatainak védelme iránt.
                    </p>

                    <section>
                        <h2 className="text-xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-4">1. Az adatkezelés célja</h2>
                        <p>
                            Az adatkezelés célja a Honlapon keresztül érkező érdeklődések megválaszolása, kapcsolattartás, valamint a Skate Night rendezvényre történő jegyvásárlási folyamat és regisztráció kezelése.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-4">2. Kezelt adatok köre</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Név</li>
                            <li>E-mail cím</li>
                            <li>Telefonszám (opcionális)</li>
                            <li>Üzenet tartalma</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-4">3. Az adatkezelés jogalapja</h2>
                        <p>
                            Az adatkezelés jogalapja az érintett önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont), valamint a szerződés teljesítéséhez szükséges adatkezelés (GDPR 6. cikk (1) bekezdés b) pont) jegyvásárlás esetén.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-4">4. Adattárolás időtartama</h2>
                        <p>
                            Az adatokat a cél eléréséig, de legfeljebb a hozzájárulás visszavonásáig vagy a jogszabályban előírt őrzési idő végéig kezeljük.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-4">5. Az érintettek jogai</h2>
                        <p>
                            Ön kérheti személyes adatainak elérését, helyesbítését, törlését vagy kezelésének korlátozását, valamint tiltakozhat a személyes adatok kezelése ellen.
                        </p>
                    </section>

                    <p className="mt-12 text-xs opacity-60 italic">Utoljára frissítve: 2026. január 29.</p>
                </div>
            </div>
        </main>
    );
}
