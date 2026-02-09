'use client';

import timelineData from '@/data/timeline.json';
import TimelineItem from './TimelineItem';

export default function Timeline() {
    return (
        <section className="py-24 bg-background transition-colors">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-rubik font-medium mb-6 text-[#d11133] uppercase">Idővonal</h2>
                        <div className="w-20 h-1 bg-brand-fuchsia mx-auto mb-6"></div>
                        <p className="text-xl font-rubik font-light text-foreground">
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
