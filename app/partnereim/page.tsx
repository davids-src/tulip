export default function PartnereimPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B0B0B] transition-colors pt-20">
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-black dark:text-white mb-8 tracking-wider uppercase">Partnereim</h1>
                <div className="w-24 h-1.5 bg-tulip-red mx-auto mb-12"></div>
                <p className="text-gray-600 dark:text-tulip-mid-gray text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                    Akikkel együttműködünk, hogy a te történeted is tökéletes legyen.
                    Kapcsolataink a szakma legkiválóbb képviselőivel.
                </p>

                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 grayscale opacity-50">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="h-20 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center font-bold text-black/20 dark:text-white/20">
                            Partner Logo
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
