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
    <section className="py-24 bg-background transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-4">
            Kapcsolat
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <h3 className="text-xl md:text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8">
              Kérdésed van? Vedd fel velem a kapcsolatot!
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone size={22} className="text-brand-fuchsia shrink-0" />
                <a
                  href="tel:+36302543373"
                  className="text-foreground font-rubik font-light hover:text-brand-fuchsia transition-colors text-lg"
                >
                  +36 30 254 3373
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Mail size={22} className="text-brand-fuchsia shrink-0" />
                <a
                  href="mailto:info@tulip.hu"
                  className="text-foreground font-rubik font-light hover:text-brand-fuchsia transition-colors text-lg"
                >
                  info@tulip.hu
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin size={22} className="text-brand-fuchsia shrink-0" />
                <span className="text-foreground font-rubik font-light text-lg">
                  HU, 8000 Székesfehérvár
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-background border border-border p-8 md:p-10 shadow-none">
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
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-brand-fuchsia transition-all"
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
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-brand-fuchsia transition-all"
                  placeholder="anna@example.com"
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
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-brand-fuchsia transition-all resize-none"
                  placeholder="Írj üzenetet..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#d62b85] text-brand-light dark:text-brand-dark px-8 py-4 font-rubik font-light text-sm uppercase tracking-widest hover:opacity-90 transition-all active:scale-95"
              >
                Üzenet küldése
              </button>

              {submitted && (
                <div className="p-4 bg-brand-fuchsia/10 border border-brand-fuchsia/20">
                  <p className="text-center text-brand-fuchsia font-rubik font-light text-sm">
                    Köszönjük! Üzenetedet megkaptuk.
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
