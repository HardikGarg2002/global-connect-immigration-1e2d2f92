"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <TooltipProvider>
            <Sonner />
            {children}
        </TooltipProvider>
    );
}

