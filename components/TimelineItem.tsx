'use client';

interface TimelineItemProps {
    date: string;
    title: string;
    description: string;
    isLast?: boolean;
}

export default function TimelineItem({ date, title, description, isLast }: TimelineItemProps) {
    return (
        <div className="flex gap-8 group">
            {/* Connector and Node */}
            <div className="flex flex-col items-center shrink-0">
                <div className="w-6 h-6 border-4 border-brand-fuchsia bg-background z-10 group-hover:scale-125 transition-transform duration-300"></div>
                {!isLast && <div className="w-1 flex-1 bg-[#d11133] my-1"></div>}
            </div>

            {/* Content */}
            <div className="pb-12">
                <div className="bg-background p-8 border border-border group-hover:border-brand-fuchsia/30 transition-all duration-300 shadow-sm">
                    <span className="inline-block px-4 py-1.5 bg-brand-fuchsia text-brand-light dark:text-brand-dark text-sm font-rubik font-medium mb-4 shadow-lg">
                        {date}
                    </span>
                    <h3 className="text-2xl font-rubik font-medium mb-3 text-brand-fuchsia">{title}</h3>
                    <p className="font-rubik font-light text-foreground leading-relaxed text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
