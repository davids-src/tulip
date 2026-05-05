'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function ContactSection() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter font-light text-[#d11133] uppercase tracking-[0.35em] mb-4">
            {t('contact.section_heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-12">
            <h3 className="text-xl md:text-2xl font-inter font-light text-brand-fuchsia uppercase tracking-[0.2em] mb-8">
              {t('contact.section_subheading')}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone size={22} className="text-brand-fuchsia shrink-0" />
                <a href="tel:+36302543373" className="text-foreground font-rubik font-light hover:text-brand-fuchsia transition-colors text-lg">
                  +36 30 254 3373
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={22} className="text-brand-fuchsia shrink-0" />
                <a href="mailto:info@tulip.hu" className="text-foreground font-rubik font-light hover:text-brand-fuchsia transition-colors text-lg">
                  info@tulip.hu
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={22} className="text-brand-fuchsia shrink-0" />
                <span className="text-foreground font-rubik font-light text-lg">HU, 8000 Székesfehérvár</span>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border p-8 md:p-10 shadow-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-rubik font-medium text-[#d11133] mb-2 uppercase tracking-widest">
                  {t('contact.label_name')}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-brand-fuchsia transition-all"
                  placeholder={t('contact.placeholder_name')}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-rubik font-medium text-[#d11133] mb-2 uppercase tracking-widest">
                  {t('contact.label_email')}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-brand-fuchsia transition-all"
                  placeholder={t('contact.placeholder_email')}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-rubik font-medium text-[#d11133] mb-2 uppercase tracking-widest">
                  {t('contact.label_message')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-brand-fuchsia transition-all resize-none"
                  placeholder={t('contact.placeholder_message')}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#d62b85] text-brand-light dark:text-brand-dark px-8 py-4 font-rubik font-light text-sm uppercase tracking-widest hover:opacity-90 transition-all active:scale-95"
              >
                {t('contact.submit')}
              </button>
              {submitted && (
                <div className="p-4 bg-brand-fuchsia/10 border border-brand-fuchsia/20">
                  <p className="text-center text-brand-fuchsia font-rubik font-light text-sm">
                    {t('contact.success')}
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
