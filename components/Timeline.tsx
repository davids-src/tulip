'use client';

import timelineData from '@/data/timeline.json';
import TimelineItem from './TimelineItem';

export default function Timeline() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-[#0B0B0B]/50 transition-colors">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-black dark:text-white">Idővonal</h2>
                        <div className="w-20 h-1 bg-tulip-red mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 dark:text-tulip-mid-gray">
                            A legfontosabb mérföldkövek röviden, dátumokkal.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        {timelineData.map((item, index) => (
                            <TimelineItem
                                key={index}
                                date={item.date}
                                title={item.title}
                                description={item.description}
                                isLast={index === timelineData.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
