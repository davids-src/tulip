'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: 'Főoldal', href: '/' },
    { label: 'Portfólió', href: '/portfolio' },
    { label: 'Rólunk', href: '/rolunk' },
    { label: 'Kapcsolat', href: '/kapcsolat' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-tulip-dark-gray/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-tulip-red">
              Tulip Couture
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-tulip-red ${
                  pathname === item.href
                    ? 'text-tulip-red'
                    : 'text-tulip-black dark:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-tulip-black dark:text-white" />
              ) : (
                <Sun size={20} className="text-tulip-black dark:text-white" />
              )}
            </button>
            <Link
              href="/kapcsolat"
              className="bg-tulip-red text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#a40e25] transition-colors"
            >
              Időpontfoglalás
            </Link>
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-tulip-black dark:text-white" />
              ) : (
                <Sun size={20} className="text-tulip-black dark:text-white" />
              )}
            </button>
            <button
              className="text-tulip-black dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-tulip-dark-gray border-t border-gray-200 dark:border-gray-800 transition-colors">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-tulip-red'
                    : 'text-tulip-black dark:text-white hover:text-tulip-red'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kapcsolat"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-tulip-red text-white px-6 py-2.5 rounded-md text-base font-medium hover:bg-[#a40e25] transition-colors text-center"
            >
              Időpontfoglalás
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
