export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background transition-colors pt-20">
            <div className="container mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
                        Blog
                    </h1>
                    <p className="text-xl font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
                        Hamarosan érkezünk friss stílustanácsokkal, esküvői trendekkel és kulisszatitkokkal a TULIP világából.
                        Célunk, hogy inspirációt nyújtsunk minden hölgynek, aki értékeli az egyedi tervezést és a kézműves minőséget.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-[4/3] bg-border/20 animate-pulse border border-border"></div>
                    ))}
                </div>
            </div>
        </main>
    );
}
