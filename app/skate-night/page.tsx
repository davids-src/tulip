import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Fashion Show – Skate Night – TULIP',
    description: 'Divatbemutató és élményest, ahol a stílus és a mozgás találkozik. Részletek és részvételi lehetőségek.',
};

export default function SkateNightPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B0B0B] transition-colors">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-tulip-red/5 dark:bg-tulip-red/10 -z-10"></div>
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-black dark:text-white uppercase tracking-tighter">
                        Fashion Show – <span className="text-tulip-red">Skate Night</span>
                    </h1>
                    <div className="w-32 h-1.5 bg-tulip-red mx-auto mb-8"></div>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-tulip-mid-gray max-w-3xl mx-auto leading-relaxed">
                        Stílus és mozgás találkozása egy felejthetetlen este keretében.
                        Ismerd meg a legújabb kollekciónkat egy rendhagyó bemutatón.
                    </p>
                </div>
            </section>

            {/* Video Content */}
            <section className="py-20 bg-gray-50 dark:bg-[#151515]">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-white/5">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // TODO: Replace with actual promo video URL
                                title="Fashion Show – Skate Night Promo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Details */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-black dark:text-white">Részletek</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-tulip-red/10 flex items-center justify-center text-tulip-red shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-black dark:text-white">Dátum</h3>
                                        <p className="text-gray-600 dark:text-tulip-mid-gray text-lg">Hamarosan bejelentjük</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-tulip-red/10 flex items-center justify-center text-tulip-red shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-black dark:text-white">Helyszín</h3>
                                        <p className="text-gray-600 dark:text-tulip-mid-gray text-lg">Budapest, Hungary (Pontos helyszín TODO)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <Link
                                href="TODO_TICKET_PURCHASE_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#C8102E] text-white px-8 py-5 rounded-2xl font-bold text-center hover:opacity-90 transition-all shadow-xl shadow-tulip-red/20"
                            >
                                Jegyvásárlás (Hamarosan)
                            </Link>
                            <Link
                                href="#tamogatas"
                                className="bg-black dark:bg-white text-white dark:text-black px-8 py-5 rounded-2xl font-bold text-center hover:opacity-90 transition-all"
                            >
                                Szeretném támogatni
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section id="tamogatas" className="py-24 bg-tulip-red text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Támogatói Lehetőségek</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-12 opacity-90">
                        Szeretnél részese lenni Budapest egyik legkülönlegesebb divateseményének mint partner vagy támogató?
                        Vedd fel velünk a kapcsolatot a részletekért.
                    </p>
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 inline-block text-left max-w-xl w-full">
                        <p className="text-lg leading-relaxed italic">
              // TODO: Add detailed sponsorship tiers and benefits here.
                            Például: Main Partner, Media Partner, Experience Partner.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/kapcsolat"
                            className="text-black dark:text-white border-2 border-black dark:border-white px-8 py-4 rounded-xl font-bold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                        >
                            Kapcsolatfelvétel
                        </Link>
                        <Link
                            href="/"
                            className="text-tulip-red font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            Vissza a főoldalra
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
