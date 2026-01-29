import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Impresszum – TULIP',
};

export default function ImpresszumPage() {
    return (
        <main className="min-h-screen bg-background transition-colors pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.35em] mb-12">
                    Impresszum
                </h1>

                <div className="space-y-8 font-rubik font-light text-foreground leading-relaxed text-justify">
                    <section>
                        <h2 className="text-xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-4">A honlap üzemeltetője</h2>
                        <p><strong>Cégnév:</strong> Tulip Shop Hungary Kft.</p>
                        <p><strong>Székhely:</strong> 8000 Székesfehérvár, Ady Endre u. 11.</p>
                        <p><strong>Adószám:</strong> 32470720-2-07</p>
                        <p><strong>Cégjegyzékszám:</strong> 07-09-035722</p>
                        <p><strong>Képviselő:</strong> Skoda Dávid</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-4">Elérhetőség</h2>
                        <p><strong>E-mail:</strong> info@tulip.hu</p>
                        <p><strong>Telefon:</strong> +36 30 254 3373</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-4">Tárhelyszolgáltató</h2>
                        <p><strong>Név:</strong> Nethely Kft.</p>
                        <p><strong>Cím:</strong> 1115 Budapest, Halmi utca 29.</p>
                        <p><strong>E-mail:</strong> info@nethely.hu</p>
                    </section>

                    <p className="mt-12 text-xs opacity-60 italic">Utoljára frissítve: 2026. január 29.</p>
                </div>
            </div>
        </main>
    );
}
