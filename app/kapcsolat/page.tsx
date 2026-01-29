'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
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
    <main className="min-h-screen bg-background transition-colors pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.35em] mb-8">
            Kapcsolat
          </h1>
          <p className="text-lg font-rubik font-light text-foreground max-w-2xl mx-auto leading-relaxed text-justify">
            Keress bátran, ha egyedi ruhát álmodtál meg, vagy ha kérdésed van kollekcióinkkal kapcsolatban.
            Minden megkeresésre igyekszünk mielőbb válaszolni.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <h2 className="text-xl md:text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8">
              Elérhetőségeim
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone size={24} className="text-brand-fuchsia shrink-0" />
                <a
                  href="tel:+36302543373"
                  className="text-foreground font-rubik font-light hover:text-brand-fuchsia transition-colors text-xl"
                >
                  +36 30 254 3373
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Mail size={24} className="text-brand-fuchsia shrink-0" />
                <a
                  href="mailto:info@tulip.hu"
                  className="text-foreground font-rubik font-light hover:text-brand-fuchsia transition-colors text-xl"
                >
                  info@tulip.hu
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin size={24} className="text-brand-fuchsia shrink-0" />
                <span className="text-foreground font-rubik font-light text-xl">
                  HU, 8000 Székesfehérvár
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-background border border-border p-8 md:p-10 rounded-none shadow-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-rubik font-medium text-[#d11133] mb-2 uppercase tracking-widest"
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
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-none focus:outline-none focus:ring-1 focus:ring-brand-fuchsia transition-all"
                  placeholder="Kovács Anna"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-rubik font-medium text-[#d11133] mb-2 uppercase tracking-widest"
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
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-none focus:outline-none focus:ring-1 focus:ring-brand-fuchsia transition-all"
                  placeholder="anna@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-rubik font-medium text-[#d11133] mb-2 uppercase tracking-widest"
                >
                  Telefonszám
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-none focus:outline-none focus:ring-1 focus:ring-brand-fuchsia transition-all"
                  placeholder="+36 30 123 4567"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-rubik font-medium text-[#d11133] mb-2 uppercase tracking-widest"
                >
                  Üzenet
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-none focus:outline-none focus:ring-1 focus:ring-brand-fuchsia transition-all resize-none"
                  placeholder="Írd meg kérdésedet vagy kérésedet..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#d62b85] text-white dark:text-brand-dark px-8 py-4 rounded-none font-rubik font-light text-sm uppercase tracking-widest hover:opacity-90 transition-all active:scale-95"
              >
                Üzenet küldése
              </button>

              {submitted && (
                <div className="p-4 bg-brand-fuchsia/10 border border-brand-fuchsia/20">
                  <p className="text-center text-brand-fuchsia font-rubik font-light text-sm">
                    Köszönjük! Hamarosan jelentkezünk a megadott elérhetőségeken.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
