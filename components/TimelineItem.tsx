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
                <div className="w-6 h-6 rounded-full border-4 border-tulip-red bg-white dark:bg-tulip-black z-10 group-hover:scale-125 transition-transform duration-300"></div>
                {!isLast && <div className="w-1 flex-1 bg-gray-200 dark:bg-white/10 my-1"></div>}
            </div>

            {/* Content */}
            <div className="pb-12">
                <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-2xl border border-black/5 dark:border-white/5 group-hover:border-tulip-red/30 transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-tulip-red/5">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-tulip-red text-white text-sm font-bold mb-4 shadow-lg shadow-tulip-red/20">
                        {date}
                    </span>
                    <h3 className="text-2xl font-heading font-bold mb-3 text-black dark:text-white">{title}</h3>
                    <p className="text-gray-600 dark:text-tulip-mid-gray leading-relaxed text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
