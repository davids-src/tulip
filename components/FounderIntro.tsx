'use client';

import Image from 'next/image';

export default function FounderIntro() {
    return (
        <section className="py-24 bg-white dark:bg-[#0B0B0B] transition-colors">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Slot */}
                    <div className="relative">
                        <div className="relative aspect-[4/5] overflow-hidden shadow-2xl border-4 border-foreground/10">
                            <Image
                                src="/images/Nikolett Oszoli_Tulip Shop Hungary Kft..png"
                                alt="A TULIP megálmodója"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white font-rubik font-medium text-2xl">A TULIP megálmodója</p>

                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-8 text-center lg:text-left">
                            Történetem
                        </h1>

                        <div className="space-y-6 text-lg md:text-xl font-rubik font-light text-foreground leading-relaxed">
                            <p>
                                Oszoli Nikolett vagyok a Tulip márka megálmodója, alapítója és tervezője – női szabó,
                                könnyűipari mérnök, mérnöktanár, designer és kétgyermekes édesanya –, akit a női elegancia, a
                                természet ihlető ereje és a kézzel rajzolt tervek időtlensége vezet az alkotásban.
                            </p>
                            <p>
                                A Tulip születése nem egyetlen pillanat műve volt, hanem egy évtizedeken át érlelődő történet.
                            </p>
                            <p>
                                Már óvodás korban is tulipános ruhákat rajzoltam hercegnőknek, általános iskolában díjat
                                nyertem Tulipánország című mesémmel, később pedig szülővárosom ikonikus épülete, a
                                Tulipánosház vált meghatározó inspirációvá. Ez az örök motívum ma már nemcsak jelképezi,
                                hanem formálja is a márkám lényegét.
                            </p>
                            <p className="italic font-rubik font-medium text-foreground border-l-4 border-brand-fuchsia pl-6 py-2">
                                "A divat számomra sokkal több, mint ruhák tervezése: párbeszéd önmagunkkal, eszköz a női
                                identitás kifejezésére, és a belső erő megmutatásának természetes formája."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
