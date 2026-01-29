'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, LayoutGrid, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: 'Kezdőlap', href: '/', icon: Home },
    { label: 'Kollekció', href: '/kollekcio', icon: LayoutGrid },
    { label: 'Történetem', href: '/tortenetem', icon: null },
    { label: 'Blog', href: '/blog', icon: null },
    { label: 'Partnereim', href: '/partnereim', icon: null },
    { label: 'Kapcsolat', href: '/kapcsolat', icon: null },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B0B0B]/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 border-2 border-tulip-red flex items-center justify-center text-[10px] text-black/40 dark:text-white/40 uppercase font-bold tracking-tighter transition-colors">
              Logo
            </div>
            <span className="text-2xl font-heading font-extrabold text-black dark:text-white tracking-widest uppercase group-hover:text-tulip-red transition-colors">
              TULIP
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 text-sm font-bold uppercase tracking-wider transition-all hover:text-tulip-red ${pathname === item.href
                    ? 'text-tulip-red underline underline-offset-8 decoration-2'
                    : 'text-black dark:text-white'
                  }`}
              >
                {item.icon && <item.icon size={18} />}
                <span>{item.label}</span>
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="text-black dark:text-white hover:text-tulip-red transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-black/5 dark:border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center space-x-4 text-lg font-bold uppercase tracking-widest transition-colors ${pathname === item.href
                  ? 'text-tulip-red'
                  : 'text-black dark:text-white hover:text-tulip-red'
                }`}
            >
              {item.icon && <item.icon size={22} />}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
