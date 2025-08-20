"use client";

import React, { memo, ReactNode } from "react";

export const StatusIndicator = memo(({ children, className = "" }: { children: ReactNode; className?: string; }) => (
    <div className={`items-center justify-center relative overflow-visible ${className}`}>
        <div className="inline-flex flex-row items-center justify-center relative overflow-visible border-[2px] border-border rounded-none bg-background shadow-none">
            {children}
            <span className="absolute -right-[4.5px] -top-[4.5px] bg-background border-[2px] border-border rounded-full w-2 h-2" />
            <span className="absolute -bottom-[4.5px] -right-[4.5px] bg-background border-[2px] border-border rounded-full w-2 h-2" />
            <span className="absolute -left-[4.5px] -top-[4.5px] bg-background border-[2px] border-border rounded-full w-2 h-2" />
            <span className="absolute -bottom-[4.5px] -left-[4.5px] bg-background border-[2px] border-border rounded-full w-2 h-2" />
        </div>
    </div>
));

StatusIndicator.displayName = "Status Indicator";