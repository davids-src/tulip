import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-20 bg-white dark:bg-tulip-black transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3728313/pexels-photo-3728313.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Atelier"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-tulip-black dark:text-white mb-6">
              Rólunk
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                A Tulip Couture & Shop egy kézműves ruhaszalon, ahol minden darab
                gondosan, személyre szabottan készül. Szenvedélyünk a minőség, az
                elegancia és az egyediség.
              </p>
              <p>
                Több mint egy évtizedes tapasztalattal rendelkezünk a
                menyasszonyi divat területén. Hiszünk abban, hogy minden menyasszony
                megérdemli, hogy különlegesnek érezze magát a nagy napon.
              </p>
              <p>
                Műhelyünkben minden ruhát kézzel varrunk, a legfinomabb
                anyagokból, aprólékos részletességgel. Célunk, hogy ne csak egy
                ruhát készítsünk, hanem egy emléket, amit örökre megőrizhetsz.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-tulip-light-gray dark:bg-tulip-dark-gray rounded-lg">
                <p className="text-4xl font-heading font-bold text-tulip-red mb-2">
                  10+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Év tapasztalat
                </p>
              </div>
              <div className="text-center p-6 bg-tulip-light-gray dark:bg-tulip-dark-gray rounded-lg">
                <p className="text-4xl font-heading font-bold text-tulip-red mb-2">
                  500+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Boldog menyasszony
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
