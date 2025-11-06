import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-tulip-black text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-heading font-bold mb-4">
              Tulip Couture & Shop
            </h3>
            <p className="text-sm leading-relaxed">
              Kézzel varrt, egyedi menyasszonyi és alkalmi ruhák.
              Minden ruha egy történet – a tiéd velünk kezdődik.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Kapcsolat</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-tulip-red flex-shrink-0" />
                <span className="text-sm">Budapest, Magyarország</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-tulip-red flex-shrink-0" />
                <a
                  href="tel:+36301234567"
                  className="text-sm hover:text-white transition-colors"
                >
                  +36 30 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-tulip-red flex-shrink-0" />
                <a
                  href="mailto:info@tulipcouture.hu"
                  className="text-sm hover:text-white transition-colors"
                >
                  info@tulipcouture.hu
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Nyitvatartás</h4>
            <p className="text-sm mb-4">Hétfő – Péntek: 10:00 – 18:00</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tulip-dark-gray p-2.5 rounded-full hover:bg-tulip-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tulip-dark-gray p-2.5 rounded-full hover:bg-tulip-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-tulip-dark-gray mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Tulip Couture & Shop. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}
