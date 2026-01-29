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
    <section className="py-24 bg-gray-50 dark:bg-[#0B0B0B] transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6">
            Kapcsolat
          </h2>
          <div className="w-20 h-1.5 bg-tulip-red mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-tulip-mid-gray max-w-2xl mx-auto">
            Foglalj időpontot vagy küldj üzenetet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-heading font-bold text-black dark:text-white mb-8">
              Vedd fel velünk a kapcsolatot
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="bg-tulip-red/10 p-4 rounded-2xl shrink-0">
                  <Phone className="w-6 h-6 text-tulip-red" />
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white text-lg mb-1">Telefon</p>
                  <a
                    href="tel:+36301234567"
                    className="text-gray-600 dark:text-tulip-mid-gray hover:text-tulip-red transition-colors text-lg"
                  >
                    +36 30 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-tulip-red/10 p-4 rounded-2xl shrink-0">
                  <Mail className="w-6 h-6 text-tulip-red" />
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white text-lg mb-1">Email</p>
                  <a
                    href="mailto:info@tulipcouture.hu"
                    className="text-gray-600 dark:text-tulip-mid-gray hover:text-tulip-red transition-colors text-lg"
                  >
                    info@tulipcouture.hu
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-tulip-red/10 p-4 rounded-2xl shrink-0">
                  <MapPin className="w-6 h-6 text-tulip-red" />
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white text-lg mb-1">Cím</p>
                  <p className="text-gray-600 dark:text-tulip-mid-gray text-lg leading-relaxed">
                    1052 Budapest<br />
                    Petőfi Sándor utca 12.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#151515] rounded-[2.5rem] p-10 shadow-2xl shadow-black/5 dark:shadow-none border border-black/5 dark:border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-black dark:text-white mb-2 uppercase tracking-wider"
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
                  className="w-full px-5 py-4 border border-black/10 dark:border-white/10 bg-transparent text-black dark:text-white rounded-2xl focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all"
                  placeholder="Kovács Anna"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-black dark:text-white mb-2 uppercase tracking-wider"
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
                  className="w-full px-5 py-4 border border-black/10 dark:border-white/10 bg-transparent text-black dark:text-white rounded-2xl focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all"
                  placeholder="anna@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-black dark:text-white mb-2 uppercase tracking-wider"
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
                  className="w-full px-5 py-4 border border-black/10 dark:border-white/10 bg-transparent text-black dark:text-white rounded-2xl focus:ring-2 focus:ring-tulip-red focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Miben segíthetek?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-tulip-red text-white px-8 py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all transform active:scale-95 shadow-lg shadow-tulip-red/20"
              >
                Üzenet küldése
              </button>

              {submitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
                  <p className="text-center text-green-600 dark:text-green-400 font-bold">
                    Köszönjük! Hamarosan jelentkezünk.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
