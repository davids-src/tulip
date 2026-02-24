import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Jéghercegnő Ruhatervező Rajzpályázat – Tulip',
    description: 'Országos rajzpályázat diákoknak. Tervezd meg saját jéghercegnő ruhádat és akár a SKATE NIGHT divatbemutatón is bemutatásra kerülhet az alkotásod.',
};

export default function RajzpalyazatPage() {
    return (
        <main className="min-h-screen bg-background transition-colors pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
                        RAJZPÁLYÁZATI FELHÍVÁS<br />
                        <span className="text-2xl mt-4 block text-brand-fuchsia tracking-[0.2em]">JÉGHERCEGNŐ RUHATERVEZŐ PÁLYÁZAT</span>
                    </h1>
                    <p className="text-xl font-rubik font-light text-foreground max-w-3xl mx-auto leading-relaxed text-justify">
                        Fedezd fel a divattervezés világát!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    <div className="relative w-full aspect-video border border-border group">
                        <Image
                            src="/images/RAJZPÁLYÁZAT(1).png"
                            alt="Rajzpályázat divattervezés"
                            fill
                            className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>

                <div className="max-w-4xl mx-auto space-y-16 flex flex-col items-center">
                    <section className="w-full">
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                            Általános iskolás alsó, felső tagozatos diákok és középiskolások részére. Szereted a divatot? Érdekel, hogyan születik meg egy ruhakollekció? Lenyűgöz a tervezés, az alkotás, a kreatív önkifejezés? A Tulip Shop Hungary Kft. országos rajzpályázatot hirdet, ahol te is megmutathatod, milyen lenne a saját divatkreációd!
                        </p>
                    </section>

                    <section className="w-full">
                        <h2 className="text-2xl md:text-3xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-6 border-b border-[#d11133]/20 pb-4">
                            A pályázat célja
                        </h2>
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                            Hogy közelebb hozzuk a fiatalokhoz a divatipart, a tervezői gondolkodást és inspiráljuk őket a jövő kreatív alkotóiként.
                        </p>
                    </section>

                    <section className="w-full">
                        <h2 className="text-2xl md:text-3xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-6 border-b border-[#d11133]/20 pb-4">
                            Pályázati kategóriák
                        </h2>
                        <ul className="space-y-4 text-lg font-rubik font-light text-foreground">
                            <li className="flex items-start">
                                <span className="text-brand-fuchsia mr-4 mt-1">•</span>
                                <span>Általános iskola – alsó tagozat (6–10 év)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-fuchsia mr-4 mt-1">•</span>
                                <span>Általános iskola – felső tagozat (11–14 év)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-fuchsia mr-4 mt-1">•</span>
                                <span>Középiskola (11–18 év)</span>
                            </li>
                        </ul>
                    </section>

                    <section className="w-full">
                        <h2 className="text-2xl md:text-3xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-6 border-b border-[#d11133]/20 pb-4">
                            Díjazás
                        </h2>
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify mb-6">
                            Kategóriánként 1–3. helyezett kerül díjazásra. Az első helyezett pályamunkák valódi ruhadarabként megvalósításra kerülnek és bemutatásra kerülnek a SKATE NIGHT by TULIP divatbemutatón.
                        </p>
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                            Minden dobogós résztvevő kreatív csomagot, könyvjutalmat és 2 tiszteletjegyet kap (1 diák + 1 kísérő).
                        </p>
                    </section>

                    <section className="w-full">
                        <h2 className="text-2xl md:text-3xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-6 border-b border-[#d11133]/20 pb-4">
                            A divatbemutató részletei
                        </h2>
                        <p className="text-lg font-rubik font-medium text-brand-fuchsia mb-6 uppercase tracking-wider">
                            Székesfehérvár – MET Aréna (Rozmaring utca 14.)
                        </p>
                        <div className="border-l-4 border-brand-fuchsia pl-8 w-full">
                            <ul className="space-y-4 text-lg font-rubik font-light text-foreground">
                                <li className="flex flex-col md:flex-row md:justify-between border-b border-border/50 pb-2">
                                    <span className="font-medium text-brand-fuchsia mb-1 md:mb-0 md:w-1/3">14:00–16:00</span>
                                    <span className="md:w-2/3">Kapunyitás és regisztráció</span>
                                </li>
                                <li className="flex flex-col md:flex-row md:justify-between border-b border-border/50 pb-2">
                                    <span className="font-medium text-brand-fuchsia mb-1 md:mb-0 md:w-1/3">14:00–17:00</span>
                                    <span className="md:w-2/3">Kiállítók, marketing és termékbemutatók</span>
                                </li>
                                <li className="flex flex-col md:flex-row md:justify-between border-b border-border/50 pb-2">
                                    <span className="font-medium text-brand-fuchsia mb-1 md:mb-0 md:w-1/3">17:00–17:30</span>
                                    <span className="md:w-2/3">Ülőhelyek elfoglalása</span>
                                </li>
                                <li className="flex flex-col md:flex-row md:justify-between border-b border-border/50 pb-2">
                                    <span className="font-medium text-brand-fuchsia mb-1 md:mb-0 md:w-1/3">17:30–18:45</span>
                                    <span className="md:w-2/3">Fashion Show I. – Bréda Bia</span>
                                </li>
                                <li className="flex flex-col md:flex-row md:justify-between border-b border-border/50 pb-2">
                                    <span className="font-medium text-brand-fuchsia mb-1 md:mb-0 md:w-1/3">18:45–19:15</span>
                                    <span className="md:w-2/3">Szünet</span>
                                </li>
                                <li className="flex flex-col md:flex-row md:justify-between">
                                    <span className="font-medium text-brand-fuchsia mb-1 md:mb-0 md:w-1/3">19:15–20:30</span>
                                    <span className="md:w-2/3">Fashion Show II. – Finálé és eredményhirdetés</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="w-full">
                        <h2 className="text-2xl md:text-3xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-6 border-b border-[#d11133]/20 pb-4">
                            Jelentkezés és beküldés módja
                        </h2>
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify mb-6">
                            A pályamunkákat scannelve, elektronikus úton kell beküldeni.
                        </p>
                        <div className="border border-border p-8 w-full">
                            <div className="mb-6">
                                <span className="block text-sm font-inter text-foreground/60 uppercase tracking-widest mb-1">E-mail:</span>
                                <a href="mailto:info@tulip.hu" className="text-xl font-rubik font-medium text-brand-fuchsia hover:text-[#d11133] transition-colors">info@tulip.hu</a>
                            </div>
                            <div className="mb-6">
                                <span className="block text-sm font-inter text-foreground/60 uppercase tracking-widest mb-1">Tárgy:</span>
                                <span className="text-lg font-rubik text-foreground">JÉGHERCEGNŐ RAJZPÁLYÁZAT</span>
                            </div>
                            <div>
                                <span className="block text-sm font-inter text-foreground/60 uppercase tracking-widest mb-4">Kötelezően megadandó adatok:</span>
                                <ul className="space-y-2 text-base font-rubik font-light text-foreground grid grid-cols-1 md:grid-cols-2">
                                    <li className="flex items-center"><span className="text-brand-fuchsia mr-3 text-xs">■</span>Név</li>
                                    <li className="flex items-center"><span className="text-brand-fuchsia mr-3 text-xs">■</span>Életkor</li>
                                    <li className="flex items-center"><span className="text-brand-fuchsia mr-3 text-xs">■</span>E-mail cím</li>
                                    <li className="flex items-center"><span className="text-brand-fuchsia mr-3 text-xs">■</span>Iskola pontos neve</li>
                                    <li className="flex items-center"><span className="text-brand-fuchsia mr-3 text-xs">■</span>Tagozat</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                        <section>
                            <h2 className="text-xl md:text-2xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-4">
                                Beküldési határidő
                            </h2>
                            <p className="text-xl font-rubik font-medium text-foreground">
                                2026. március 31.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-4 border-b border-[#d11133]/20 pb-4">
                                Értesítés a nyertesekről
                            </h2>
                            <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                                2026. április 10-ig elektronikus úton, a jelentkezéskor megadott e-mail címre.
                            </p>
                        </section>
                    </div>

                    <section className="w-full">
                        <h2 className="text-2xl md:text-3xl font-inter font-light text-[#d11133] uppercase tracking-[0.2em] mb-6 border-b border-[#d11133]/20 pb-4">
                            Adatkezelési és megjelenési hozzájárulás
                        </h2>
                        <p className="text-lg font-rubik font-light text-foreground leading-relaxed text-justify">
                            A pályázók hozzájárulnak ahhoz, hogy nevük, életkoruk, tagozatuk és iskolájuk megjelenhet a www.tulip.hu oldalon, valamint a Tulip Shop Hungary Kft. közösségi média felületein.
                        </p>
                    </section>

                    <section className="border border-border p-12 text-center mt-16 w-full">
                        <h2 className="text-2xl md:text-3xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-4">
                            Kérdés esetén
                        </h2>
                        <p className="text-lg font-rubik font-light text-foreground mb-6">
                            Fordulj hozzánk bizalommal:
                        </p>
                        <a
                            href="mailto:info@tulip.hu"
                            className="inline-block bg-[#d11133] text-white px-10 py-5 text-sm font-rubik font-light uppercase tracking-widest hover:bg-[#b00e2a] transition-all"
                        >
                            info@tulip.hu
                        </a>
                    </section>

                </div>
            </div>
        </main>
    );
}
