import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children: ReactNode;
    vertical?: boolean;
    repeat?: number;
    duration?: number; // in seconds
    gap?: number | string; // rem or px
}

export function Marquee({
    className,
    reverse = false,
    pauseOnHover = true,
    children,
    vertical = false,
    repeat = 4,
    duration = 40,
    gap = "1rem",
    ...props
}: MarqueeProps) {
    const directionClass = vertical
        ? reverse
            ? "animate-marquee-vertical-reverse"
            : "animate-marquee-vertical"
        : reverse
            ? "animate-marquee-reverse"
            : "animate-marquee";

    const flexDirection = vertical ? "flex-col" : "flex-row";

    return (
        <div
            {...props}
            className={cn(
                "group overflow-hidden p-2",
                flexDirection,
                "flex",
                className
            )}
            style={
                {
                    "--duration": `${duration}s`,
                    "--gap": typeof gap === "number" ? `${gap}px` : gap,
                } as React.CSSProperties
            }
        >
            {Array.from({ length: repeat }).map((_, i) => (
                <div
                    key={i}
                    {...(i !== 0 ? { "aria-hidden": "true" } : {})}
                    className={cn(
                        "shrink-0 justify-around [gap:var(--gap)]",
                        flexDirection,
                        directionClass,
                        pauseOnHover && "group-hover:[animation-play-state:paused]"
                    )}
                >
                    {children}
                </div>
            ))}
        </div>
    );
}