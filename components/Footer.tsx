import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#050505] text-gray-600 dark:text-gray-400 py-20 border-t border-black/5 dark:border-white/5 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          <div className="space-y-8">
            <h3 className="text-black dark:text-white text-3xl font-heading font-extrabold tracking-widest uppercase">
              TULIP
            </h3>
            <p className="text-base leading-relaxed text-gray-500 dark:text-tulip-mid-gray">
              Kézzel varrt, egyedi menyasszonyi és alkalmi ruhák.
              Minden ruha egy történet – a tiéd velünk kezdődik.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-tulip-red transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-tulip-red transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-black dark:text-white text-lg font-bold mb-8 uppercase tracking-wider">Navigáció</h4>
            <nav className="flex flex-col space-y-4 font-medium">
              {[
                { label: 'Kezdőlap', href: '/' },
                { label: 'Kollekció', href: '/kollekcio' },
                { label: 'Történetem', href: '/tortenetem' },
                { label: 'Blog', href: '/blog' },
                { label: 'Partnereim', href: '/partnereim' },
                { label: 'Kapcsolat', href: '/kapcsolat' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-tulip-red transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-black dark:text-white text-lg font-bold mb-8 uppercase tracking-wider">Kapcsolat</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={22} className="text-tulip-red shrink-0" />
                <span className="text-base leading-tight">1052 Budapest, Petőfi Sándor utca 12.</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={22} className="text-tulip-red shrink-0" />
                <a
                  href="tel:+36301234567"
                  className="text-base hover:text-tulip-red transition-colors font-medium"
                >
                  +36 30 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={22} className="text-tulip-red shrink-0" />
                <a
                  href="mailto:info@tulipcouture.hu"
                  className="text-base hover:text-tulip-red transition-colors font-medium"
                >
                  info@tulipcouture.hu
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 dark:border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} TULIP. Minden jog fenntartva.</p>
          <div className="flex space-x-8 mt-6 md:mt-0 font-medium normal-case tracking-normal">
            <Link href="#" className="hover:text-tulip-red transition-colors">Adatkezelési tájékoztató</Link>
            <Link href="#" className="hover:text-tulip-red transition-colors">ÁSZF</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
