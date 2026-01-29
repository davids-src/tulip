'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', date: '', message: '' });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1024998/pexels-photo-1024998.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Kapcsolat
          </h1>
          <p className="text-xl text-white/90">
            Foglalj időpontot vagy küldj üzenetet
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-heading font-bold text-tulip-black mb-8">
              Lépj kapcsolatba velünk
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-tulip-red/10 p-4 rounded-lg">
                  <Phone className="w-6 h-6 text-tulip-red" />
                </div>
                <div>
                  <p className="font-semibold text-tulip-black text-lg mb-1">
                    Telefon
                  </p>
                  <a
                    href="tel:+36301234567"
                    className="text-gray-600 hover:text-tulip-red transition-colors text-lg"
                  >
                    +36 30 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-tulip-red/10 p-4 rounded-lg">
                  <Mail className="w-6 h-6 text-tulip-red" />
                </div>
                <div>
                  <p className="font-semibold text-tulip-black text-lg mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@tulipcouture.hu"
                    className="text-gray-600 hover:text-tulip-red transition-colors text-lg"
                  >
                    info@tulipcouture.hu
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-tulip-red/10 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-tulip-red" />
                </div>
                <div>
                  <p className="font-semibold text-tulip-black text-lg mb-1">
                    Cím
                  </p>
                  <p className="text-gray-600 text-lg">
                    1052 Budapest<br />
                    Petőfi Sándor utca 12.<br />
                    Magyarország
                  </p>
                </div>
              </div>

            </div>

            <div className="bg-tulip-light-gray p-8 rounded-lg">
              <h3 className="font-heading text-2xl font-semibold text-tulip-black mb-4">
                Miért fontos az időpontfoglalás?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-tulip-red mr-2">•</span>
                  <span>Teljes figyelmünket neked szentelhetjük</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tulip-red mr-2">•</span>
                  <span>Elegendő idő van a részletek megbeszélésére</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tulip-red mr-2">•</span>
                  <span>Megtekintheted anyagmintáinkat és példáinkat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tulip-red mr-2">•</span>
                  <span>Személyre szabott tanácsadást kapsz</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 lg:p-10">
            <h3 className="text-2xl font-heading font-semibold text-tulip-black mb-6">
              Időpontfoglalás
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-tulip-black mb-2"
                >
                  Teljes név *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all"
                  placeholder="Kovács Anna"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-tulip-black mb-2"
                >
                  E-mail cím *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all"
                  placeholder="anna@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-tulip-black mb-2"
                >
                  Telefonszám *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all"
                  placeholder="+36 30 123 4567"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-tulip-black mb-2"
                >
                  Preferált időpont
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all"
                  placeholder="pl. 2025. január 15. 14:00"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-tulip-black mb-2"
                >
                  Üzenet
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Írd meg nekünk, milyen ruhát szeretnél..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-tulip-red text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#a40e25] transition-colors"
              >
                Időpont küldése
              </button>

              {submitted && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-center text-green-700 font-medium">
                    Köszönjük az üzenetedet! Hamarosan felvesszük veled a kapcsolatot.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-20 max-w-7xl mx-auto">
          <h3 className="text-3xl font-heading font-bold text-tulip-black mb-8 text-center">
            Találd meg szalonunkat
          </h3>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
            <p className="text-gray-600 text-center">
              Google Térkép helye:<br />
              1052 Budapest, Petőfi Sándor utca 12.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
