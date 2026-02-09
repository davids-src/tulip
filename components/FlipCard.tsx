'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

interface FlipCardProps {
    frontImage: string;
    logoLight: string;
    logoDark: string;
}

export default function FlipCard({ frontImage, logoLight, logoDark }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const { theme } = useTheme();

    const handleToggle = () => {
        setIsFlipped(!isFlipped);
    };

    const logo = theme === 'dark' ? logoDark : logoLight;

    return (
        <div
            className="group perspective-1000 w-full aspect-[3/4] cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onFocus={() => setIsFlipped(true)}
            onBlur={() => setIsFlipped(false)}
            tabIndex={0}
            role="button"
            aria-pressed={isFlipped}
            onClick={handleToggle}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''
                    }`}
            >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-none overflow-hidden border border-border bg-background">
                    <Image
                        src={frontImage}
                        alt="Collection item photo"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-none overflow-hidden bg-background border border-brand-fuchsia/20 flex items-center justify-center p-8">
                    <div className="relative w-full h-full max-w-[80%] max-h-[80%]">
                        <Image
                            src={logo}
                            alt="Brand logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
