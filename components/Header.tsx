'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, LayoutGrid, PenLine, FileText, Users, Mail, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: 'Kezdőlap', href: '/', icon: Home },
    { label: 'Kollekció', href: '/kollekcio', icon: LayoutGrid },
    { label: 'Történetem', href: '/tortenetem', icon: PenLine },
    { label: 'Blog', href: '/blog', icon: FileText },
    { label: 'Partnereim', href: '/partnereim', icon: Users },
    { label: 'Kapcsolat', href: '/kapcsolat', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand section */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Theme-aware logo */}
            <div className="w-10 h-10 relative">
              <Image
                src={theme === 'light' ? '/logo-light.png' : '/logo-dark.png'}
                alt="TULIP Logo"
                width={40}
                height={40}
                className="transition-opacity"
              />
            </div>
            <span className="text-2xl font-rubik font-light text-brand-fuchsia tracking-[0.2em] uppercase transition-colors">
              TULIP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 text-xs font-rubik font-light uppercase tracking-widest transition-all hover:text-brand-coral ${pathname === item.href ? 'text-brand-coral' : 'text-foreground'
                    }`}
                >
                  {item.icon && <item.icon size={16} />}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Special Field: SKATE NIGHT */}
            <Link
              href="/skate-night"
              className="px-4 py-2 border border-brand-coral bg-background text-brand-coral text-xs font-rubik font-light uppercase tracking-widest hover:bg-brand-coral hover:text-brand-light dark:hover:text-brand-dark transition-all"
            >
              SKATE NIGHT
            </Link>

            {/* Toggles */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-foreground hover:text-brand-coral active:text-brand-coral transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <LanguageSelector />
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-foreground hover:text-brand-coral active:text-brand-coral transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="text-foreground hover:text-brand-coral active:text-brand-coral transition-colors"
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
        className={`lg:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center space-x-4 text-sm font-rubik font-light uppercase tracking-widest transition-colors ${pathname === item.href ? 'text-brand-coral' : 'text-foreground hover:text-brand-coral'
                }`}
            >
              {item.icon && <item.icon size={20} />}
              <span>{item.label}</span>
            </Link>
          ))}
          <Link
            href="/skate-night"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center px-4 py-3 border border-brand-coral text-brand-coral text-sm font-rubik font-light uppercase tracking-widest hover:bg-brand-coral hover:text-brand-light dark:hover:text-brand-dark transition-all"
          >
            SKATE NIGHT
          </Link>
          <div className="pt-4 border-t border-border flex justify-between items-center">
            <span className="text-xs font-rubik font-light uppercase tracking-widest">Language</span>
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </header>
  );
}
