import Image from 'next/image';
import partnersData from '@/data/partners.json';


export default function PartnereimPage() {
    return (
        <main className="min-h-screen bg-background transition-colors pt-20">
            <div className="container mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
                        Partnereim
                    </h1>
                    <p className="text-xl font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
                        A Tulip világát olyan szakemberek és műhelyek támogatják, akik ugyanazt az értékalapú
                        szemléletet képviselik, mint márkánk: a minőséget, a megbízhatóságot és az igényes alkotást.
                    </p>
                </div>

                <div className="mt-24 grid grid-cols-2 gap-12 max-w-2xl mx-auto">
                    {partnersData.map((partner) => (
                        <div
                            key={partner.id}
                            className="aspect-square bg-border/10 flex items-center justify-center p-10 border border-border group hover:border-[#d11133] transition-colors"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain p-4 opacity-70 group-hover:opacity-100 transition-opacity dark:invert"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-xl font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify pb-24">
                Ha szeretnél partnerként csatlakozni a Tulip világához, írj bizalommal. Nyitottak vagyunk új
                ötletekre, együttműködésekre, közös alkotásra.
            </p>
        </main>
    );
}
