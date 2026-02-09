'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: string;
    label: string;
}

export default function Countdown({ targetDate, label }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    } | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            let timeLeft = null;

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) return null;

    return (
        <div className="flex flex-col items-center space-y-4 py-8">
            <p className="text-sm font-rubik font-light uppercase tracking-widest text-brand-fuchsia">
                {label}
            </p>
            <div className="flex space-x-4 md:space-x-8">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center">
                        <div className="bg-brand-fuchsia px-6 py-4">
                            <span className="text-3xl md:text-5xl font-inter font-light text-brand-light dark:text-brand-dark">
                                {String(value).padStart(2, '0')}
                            </span>
                        </div>
                        <span className="text-[10px] md:text-xs font-rubik font-light uppercase tracking-[0.2em] text-brand-fuchsia mt-2">
                            {unit === 'days' ? 'nap' : unit === 'hours' ? 'óra' : unit === 'minutes' ? 'perc' : 'mp'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
