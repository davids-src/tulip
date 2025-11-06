'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
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
    <section className="py-20 bg-tulip-light-gray dark:bg-tulip-dark-gray transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-tulip-black dark:text-white mb-4">
            Kapcsolat
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Foglalj időpontot vagy küldj üzenetet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-heading font-semibold text-tulip-black dark:text-white mb-6">
              Vedd fel velünk a kapcsolatot
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-tulip-red/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-tulip-red" />
                </div>
                <div>
                  <p className="font-semibold text-tulip-black dark:text-white mb-1">Telefon</p>
                  <a
                    href="tel:+36301234567"
                    className="text-gray-600 dark:text-gray-300 hover:text-tulip-red transition-colors"
                  >
                    +36 30 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-tulip-red/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-tulip-red" />
                </div>
                <div>
                  <p className="font-semibold text-tulip-black dark:text-white mb-1">Email</p>
                  <a
                    href="mailto:info@tulipcouture.hu"
                    className="text-gray-600 dark:text-gray-300 hover:text-tulip-red transition-colors"
                  >
                    info@tulipcouture.hu
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-tulip-red/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-tulip-red" />
                </div>
                <div>
                  <p className="font-semibold text-tulip-black dark:text-white mb-1">Cím</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Budapest, Magyarország
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-tulip-black p-6 rounded-lg">
              <h4 className="font-semibold text-tulip-black dark:text-white mb-3">Nyitvatartás</h4>
              <p className="text-gray-600 dark:text-gray-300">Hétfő – Péntek: 10:00 – 18:00</p>
              <p className="text-gray-600 dark:text-gray-300">Szombat – Vasárnap: Zárva</p>
              <p className="text-sm text-tulip-red mt-2">
                *Időpontfoglalás szükséges
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-tulip-black rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-tulip-black dark:text-white mb-2"
                >
                  Név
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-tulip-dark-gray text-tulip-black dark:text-white rounded-md focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-tulip-black mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-tulip-dark-gray text-tulip-black dark:text-white rounded-md focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all"
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
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-tulip-red text-white px-8 py-3 rounded-md font-semibold hover:bg-[#a40e25] transition-colors"
              >
                Küldés
              </button>

              {submitted && (
                <p className="mt-4 text-center text-green-600 font-medium">
                  Köszönjük az üzenetedet! Hamarosan jelentkezünk.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
