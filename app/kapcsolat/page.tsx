'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8">
            Kapcsolat
          </h1>
          <p className="text-lg font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
            Ha kérdésed van a kollekciókról, szeretnél egyedi darabot esetleg kis szériát, vagy egyszerűen csak
            kapcsolódnál a márkához – írj vagy hívj bátran.
            Örömmel kapcsolódunk.
          </p>
          <p className="text-lg font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
            A Tulip nem csupán egy márka. Egy érzés. Egy út. Egy történet, amelyben Te vagy a főszereplő.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-12 text-center">
            Elérhetőségeim
          </h2>

          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-4 p-6 border border-border hover:border-brand-fuchsia transition-colors">
              <Phone size={28} className="text-brand-fuchsia shrink-0" />
              <a
                href="tel:+36302543373"
                className="text-foreground font-rubik font-light hover:text-brand-fuchsia transition-colors text-2xl"
              >
                +36 30 254 3373
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4 p-6 border border-border hover:border-brand-fuchsia transition-colors">
              <Mail size={28} className="text-brand-fuchsia shrink-0" />
              <a
                href="mailto:info@tulip.hu"
                className="text-foreground font-rubik font-light hover:text-brand-fuchsia transition-colors text-2xl"
              >
                info@tulip.hu
              </a>
            </div>

            <div className="flex items-center justify-center space-x-4 p-6 border border-border">
              <MapPin size={28} className="text-brand-fuchsia shrink-0" />
              <span className="text-foreground font-rubik font-light text-2xl">
                HU, 8000 Székesfehérvár
              </span>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg font-rubik font-light text-foreground/80 italic max-w-xl mx-auto leading-relaxed">
              Várunk szeretettel műhelyünkben előzetes időpontegyeztetés után.
              Hívj vagy írj bizalommal, hogy megbeszélhessük az álmaid ruháját!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
