"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
    icon?: React.ComponentType<{ className?: string }>;
}

interface TimelineProps {
    data: TimelineEntry[];
    className?: string;
}

export const Timeline = ({ data, className }: TimelineProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    return (
        <div ref={containerRef} className={cn("relative mx-auto", className)}>
            <motion.div
                ref={ref}
                style={{
                    y,
                    opacity,
                    scale,
                }}
                className="relative space-y-8"
            >
                {data.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} isLast={index === data.length - 1} />
                ))}
            </motion.div>
        </div>
    );
};

const TimelineItem = ({
    item,
    index,
    isLast,
}: {
    item: TimelineEntry;
    index: number;
    isLast: boolean;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    const Icon = item.icon;

    return (
        <motion.div
            ref={ref}
            style={{
                y,
                opacity,
                scale,
            }}
            className="relative flex gap-8"
        >
            {/* Timeline line and circle */}
            <div className="flex flex-col items-center relative">
                {/* Connecting line from previous item */}
                {index !== 0 && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-canada-red via-canada-red-light to-canada-red -translate-y-full" style={{ height: '2rem' }} />
                )}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-canada-red text-white shadow-lg">
                    {Icon ? (
                        <Icon className="h-6 w-6" />
                    ) : (
                        <span className="text-lg font-bold">{index + 1}</span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                    {item.title}
                </h3>
                <div className="text-muted-foreground leading-relaxed">
                    {item.content}
                </div>
            </div>
        </motion.div>
    );
};

