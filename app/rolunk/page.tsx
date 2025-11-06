import Image from 'next/image';
import type { Metadata } from 'next';
import { Heart, Award, Users, Scissors } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rólunk – Tulip Couture & Shop',
  description: 'Ismerd meg csapatunkat és történetünket',
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Szenvedély',
      description:
        'Minden ruhát szívvel-lélekkel készítünk, hogy tökéletesen tükrözze egyéniségedet.',
    },
    {
      icon: Award,
      title: 'Minőség',
      description:
        'Csak a legjobb alapanyagokat használjuk és aprólékosan dolgozunk minden részleten.',
    },
    {
      icon: Users,
      title: 'Személyre szabás',
      description:
        'Minden menyasszony egyedi, így minden ruhánk is az. Velünk álmaid valóra válnak.',
    },
    {
      icon: Scissors,
      title: 'Kézműves munka',
      description:
        'Ruhainkat teljes egészében kézzel varrjuk, hagyományos szabászati technikákkal.',
    },
  ];

  const timeline = [
    {
      year: '2013',
      title: 'Megalapítás',
      description: 'A Tulip Couture megnyitja kapuit Budapesten.',
    },
    {
      year: '2015',
      title: 'Első díj',
      description: 'Elnyerjük az Év Menyasszonyi Szalonja címet.',
    },
    {
      year: '2018',
      title: 'Bővítés',
      description: 'Új műhellyel és showroommal bővítünk.',
    },
    {
      year: '2025',
      title: 'Ma',
      description: 'Több mint 500 boldog menyasszony bizalma.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3728313/pexels-photo-3728313.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Rólunk
          </h1>
          <p className="text-xl text-white/90">
            Történetünk és értékeink
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-heading font-bold text-tulip-black mb-6 text-center">
            Történetünk
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              A Tulip Couture & Shop 2013-ban nyitotta meg kapuit Budapesten, azzal a
              céllal, hogy minden menyasszonynak egyedi, kézzel varrt álomruhát
              készítsen nagy napjára.
            </p>
            <p>
              Alapítónk, aki már gyermekkorától fogva szenvedélyesen szerette a
              varrást és a divattervezést, úgy érezte, hogy a menyasszonyi ruházat
              piaca túlságosan általánossá vált. Azt akarta, hogy minden
              menyasszony különlegesnek érezhesse magát, egy olyan ruhában, ami
              tökéletesen kifejezi egyéniségét és stílusát.
            </p>
            <p>
              Mára több mint egy évtizedes tapasztalattal rendelkezünk, és több mint
              500 boldog menyasszony bizalmát élveztük. Minden ruhánk egyedi
              alkotás, kézzel varrva, a legfinomabb anyagokból készítve.
            </p>
          </div>
        </div>

        <div className="bg-tulip-light-gray py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-tulip-black mb-12 text-center">
              Értékeink
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-tulip-red/10 rounded-full mb-4">
                      <Icon className="w-10 h-10 text-tulip-red" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-tulip-black mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl font-heading font-bold text-tulip-black mb-12 text-center">
            Utazásunk
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-tulip-red/20 hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <h3 className="text-3xl font-heading font-bold text-tulip-red mb-2">
                      {item.year}
                    </h3>
                    <h4 className="text-xl font-semibold text-tulip-black mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="w-4 h-4 bg-tulip-red rounded-full hidden md:block"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-tulip-black text-white py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Kezdjük el közösen!
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Foglalj időpontot, és tervezd meg velünk álmaid ruháját
            </p>
            <a
              href="/kapcsolat"
              className="inline-block bg-tulip-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#a40e25] transition-colors"
            >
              Időpontfoglalás
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
