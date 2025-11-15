"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabsProps {
    tabs: {
        id: string;
        label: string;
        content: React.ReactNode;
    }[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}

export const TabsAnimated = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
}: TabsProps) => {
    const [active, setActive] = useState(propTabs[0]?.id || "");

    return (
        <div className={cn("relative w-full", containerClassName)}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
                {propTabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={cn(
                            "relative px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors",
                            "text-foreground/60 hover:text-foreground",
                            active === tab.id && "text-white",
                            tabClassName
                        )}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {active === tab.id && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                className={cn(
                                    "absolute inset-0 bg-canada-red rounded-full",
                                    activeTabClassName
                                )}
                            />
                        )}
                        <span className="relative block font-poppins z-10">
                            {tab.label}
                        </span>
                    </button>
                ))}
            </div>
            <FadeInDiv
                key={active}
                className={cn("mt-4", contentClassName)}
            >
                {propTabs.find((tab) => tab.id === active)?.content}
            </FadeInDiv>
        </div>
    );
};

const FadeInDiv = React.forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
});

FadeInDiv.displayName = "FadeInDiv";

