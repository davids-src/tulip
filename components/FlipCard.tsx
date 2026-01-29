'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FlipCardProps {
    title: string;
    category: string;
    frontImage: string;
    backImages: string[];
}

export default function FlipCard({ title, category, frontImage, backImages }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleToggle = () => {
        setIsFlipped(!isFlipped);
    };

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
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-soft border border-black/5 dark:border-white/5">
                    <Image
                        src={frontImage}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                        <p className="text-tulip-red text-xs uppercase tracking-widest font-extrabold mb-2">{category}</p>
                        <h3 className="text-white text-2xl font-heading font-bold">{title}</h3>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-soft bg-gray-50 dark:bg-tulip-dark-gray border border-tulip-red/30">
                    <Image
                        src={backImages[0]}
                        alt={`${title} detail`}
                        fill
                        className="object-cover opacity-40 dark:opacity-30"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/60 dark:bg-black/40 backdrop-blur-[2px]">
                        <h3 className="text-black dark:text-white text-2xl font-heading font-bold mb-3">{title}</h3>
                        <p className="text-gray-600 dark:text-tulip-mid-gray text-base font-medium">{category}</p>
                        <div className="mt-6 w-12 h-1 bg-tulip-red" />
                    </div>
                </div>
            </div>
        </div>
    );
}
