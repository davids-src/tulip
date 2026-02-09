'use client';

import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const languages = [
    { code: 'hu', label: 'Magyar' },
    { code: 'en', label: 'English' },
];

export default function LanguageSelector() {
    const [currentLang, setCurrentLang] = useState('hu');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang) {
            setCurrentLang(savedLang);
        }
    }, []);

    const handleLanguageChange = (code: string) => {
        setCurrentLang(code);
        localStorage.setItem('preferredLanguage', code);
        setIsOpen(false);
        // In a real app, this might trigger a route change or i18n update
        console.log(`Language changed to: ${code}`);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 flex items-center space-x-1 text-foreground hover:text-brand-coral active:text-brand-coral transition-colors uppercase text-xs tracking-widest font-rubik font-light"
                aria-label="Select language"
            >
                <Globe size={18} className="text-brand-coral" />
                <span>{currentLang}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-32 bg-background border border-border shadow-lg z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`block w-full text-left px-4 py-2 text-xs uppercase tracking-widest font-rubik font-light transition-colors hover:bg-brand-coral hover:text-white ${currentLang === lang.code ? 'text-brand-coral' : 'text-foreground'
                                }`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
