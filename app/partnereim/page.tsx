import partnersData from '@/data/partners.json';

export default function PartnereimPage() {
    return (
        <main className="min-h-screen bg-background transition-colors pt-20">
            <div className="container mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.35em] mb-8">
                        Partnereim
                    </h1>
                    <p className="text-xl font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
                        Büszke vagyok arra, hogy a szakma kiválóságaival dolgozhatok együtt.
                        Partnereim segítenek abban, hogy minden részlet tökéletes legyen, és ügyfeleimnek a legjobb minőséget nyújthassam.
                    </p>
                </div>

                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12">
                    {partnersData.map((partner) => (
                        <div
                            key={partner.id}
                            className="aspect-square bg-border/10 flex items-center justify-center p-8 border border-border group hover:border-brand-fuchsia transition-colors"
                        >
                            <div className="text-xl font-inter font-light uppercase tracking-widest text-[#1d1d1b] dark:text-[#fffdf5] opacity-50 group-hover:opacity-100 transition-opacity text-center">
                                {partner.name}
                            </div>
                            {/* Actual Image component would go here using partner.logo */}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
