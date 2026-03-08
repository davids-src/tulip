export default function DivatbemutatoAJegen() {
    return (
        <main className="min-h-screen bg-background transition-colors pt-20">
            <article className="container mx-auto px-4 py-24 max-w-4xl">
                <header className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-6">
                        Divatbemutató a jégen
                    </h1>
                    <p className="text-xl font-rubik font-light text-foreground mb-4">
                        Oszoli Nikolett új kollekciót mutat be Székesfehérváron
                    </p>
                    <time className="text-sm font-rubik text-foreground/60">2026. március 8.</time>
                </header>

                <div className="prose prose-lg max-w-none font-rubik font-light text-foreground leading-relaxed space-y-8">
                    <p className="text-justify">
                        A székesfehérvári MET Aréna ad otthont április 18-án egy rendhagyó divatbemutatónak, amely eltér a hagyományos kifutós formátumtól. Az esemény koncepciója szerint a kollekció darabjai nem statikus környezetben, hanem mozgás közben, műkorcsolyázó modelleken jelennek meg a jégcsarnok küzdőterén.
                    </p>

                    <p className="text-justify">
                        A bemutató megálmodója Oszoli Nikolett, okleveles könnyűipari mérnök, mérnöktanár és női szabó, aki közel egy évtizede készül első nagyszabású kollekciójának bemutatására. A helyszínválasztás tudatos döntés volt: a jégpálya tere a mozgás, az egyensúly és a dinamika révén más megvilágításba helyezi a ruhák szerkezeti és esztétikai tulajdonságait.
                    </p>

                    <blockquote className="border-l-4 border-brand-fuchsia pl-6 py-4 my-8 italic text-brand-fuchsia text-xl text-center">
                        „Tervezőként fontos számomra, hogy a ruhadarab ne csupán egyszerűen legyen prezentálva, hanem funkcionalitása közben is láthatóvá váljon. A mozgás kiemeli az anyaghasználatot, a szabásvonalakat és a konstrukció valódi minőségét”
                    </blockquote>
                    <p className="text-justify mt-[-1rem]">
                        – fogalmaz Oszoli Nikolett.
                    </p>

                    <p className="text-justify">
                        Az esemény ötlete egy évvel korábban, a bécsi Wiener Eistraum helyszínén született meg.
                    </p>

                    <blockquote className="border-l-4 border-brand-fuchsia pl-6 py-4 my-8 text-justify">
                        „Ott fogalmazódott meg bennem először, hogy a divat és a jég mozgásvilága összeérhet. Egy évvel később már konkrét tervekkel tértem vissza ugyanarra a pályára.”
                    </blockquote>

                    <p className="text-justify">
                        A bemutatásra kerülő kollekció hat tematikus egységből áll: Sport, Costume, Night, Wedding, Event és Diamond. A különböző irányok eltérő szerkezeti és formai megoldásokat alkalmaznak, a sportos dinamizmustól a teatralitáson át a klasszikus eleganciáig. A kollekció arculata négy meghatározó alapszínre épül – korallpiros, fukszia, fekete és csontszín –, amelyek eltérő textúrájú anyagokkal, csipkékkel, 3D díszítésekkel és strukturális elemekkel társulnak.
                    </p>

                    <blockquote className="border-l-4 border-brand-fuchsia pl-6 py-4 my-8 text-justify">
                        „A tervezési folyamat során a célom az volt, hogy a nőiesség különböző rétegeit mutassam meg. A sportos mozgás, az esti elegancia és az ünnepi megjelenés ugyanannak az identitásnak más-más arca”
                    </blockquote>
                    <p className="text-justify mt-[-1rem]">
                        – mondja Oszoli Nikolett.
                    </p>

                    <p className="text-justify">
                        Az esemény különlegességét az is adja, hogy a ruhák nem hagyományos kifutón, hanem egy sporttér dinamikus közegében jelennek meg, új perspektívát kínálva a kortárs divatbemutatók formanyelvére.
                    </p>

                    <blockquote className="border-l-4 border-brand-fuchsia pl-6 py-4 my-8 italic text-brand-fuchsia text-xl text-center">
                        „Hiszek abban, hogy a minőség és a szakmai megalapozottság hosszú távon meghatározóbb, mint a pillanatnyi trend. A kollekcióval nem csupán ruhákat mutatok be, hanem egy gondolkodásmódot is”
                    </blockquote>
                    <p className="text-justify mt-[-1rem]">
                        – emelte ki Oszoli Nikolett.
                    </p>

                    <p className="text-justify font-medium mt-8 border-l-4 border-[#d11133] pl-6 py-2">
                        Az április 18-i SKATE NIGHT by TULIP - Fashion Show & After Party-ra jegyeket <a href="https://jegymester.hu/production/742578/skate-night-by-tulip/74002706" target="_blank" rel="noopener noreferrer" className="text-brand-fuchsia hover:underline font-bold">ITT</a> lehet vásárolni!
                    </p>
                </div>

                <footer className="mt-12 pt-8 border-t border-border text-center">
                    <p className="text-sm font-rubik text-foreground/60">
                        Forrás: <a href="https://www.szekesfehervar.hu/divatbemutato-a-jegen-szabo-oszoli-nikolett-uj-kollekciot-mutat-be-szekesfehervaron" target="_blank" rel="noopener noreferrer" className="text-brand-fuchsia hover:underline">Székesfehérvár.hu</a>
                    </p>
                </footer>
            </article>
        </main>
    );
}
