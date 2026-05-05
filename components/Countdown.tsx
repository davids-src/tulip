'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';

interface CountdownProps {
  targetDate: string;
  label: string;
}

export default function Countdown({ targetDate, label }: CountdownProps) {
  const { t } = useI18n();
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const calc = () => {
      const diff = +new Date(targetDate) - +new Date();
      if (diff <= 0) return null;
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  const unitLabels: Record<string, string> = {
    days: t('skate_night.countdown_days'),
    hours: t('skate_night.countdown_hours'),
    minutes: t('skate_night.countdown_minutes'),
    seconds: t('skate_night.countdown_seconds'),
  };

  return (
    <div className="flex flex-col items-center space-y-4 py-8">
      <p className="text-sm font-rubik font-light uppercase tracking-widest text-brand-fuchsia">{label}</p>
      <div className="flex space-x-4 md:space-x-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="bg-brand-fuchsia px-6 py-4">
              <span className="text-3xl md:text-5xl font-inter font-light text-brand-light dark:text-brand-dark">
                {String(value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] md:text-xs font-rubik font-light uppercase tracking-[0.2em] text-brand-fuchsia mt-2">
              {unitLabels[unit] ?? unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
