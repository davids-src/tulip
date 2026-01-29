export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B0B0B] transition-colors pt-20">
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-black dark:text-white mb-8 tracking-wider uppercase">Blog</h1>
                <div className="w-24 h-1.5 bg-tulip-red mx-auto mb-12"></div>
                <p className="text-gray-600 dark:text-tulip-mid-gray text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
                    Hamarosan érkezünk friss stílustanácsokkal, esküvői trendekkel és kulisszatitkokkal a TULIP világából.
                </p>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-[4/3] bg-gray-100 dark:bg-white/5 rounded-3xl animate-pulse"></div>
                    ))}
                </div>
            </div>
        </main>
    );
}
