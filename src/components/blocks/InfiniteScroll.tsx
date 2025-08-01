import React, { useRef, useEffect, ReactNode, FC } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

interface InfiniteScrollItem {
    content: ReactNode;
}

interface InfiniteScrollProps {
    width?: string;
    maxHeight?: string;
    items?: InfiniteScrollItem[];
    itemMinWidth?: number;
    itemMinHeight?: number;
    isTilted?: boolean;
    tiltDirection?: "left" | "right";
    autoplay?: boolean;
    autoplaySpeed?: number;
    autoplayDirection?: "down" | "up" | "left" | "right";
    pauseOnHover?: boolean;
    scrollDirection?: "vertical" | "horizontal";
    isReverse?: boolean;
    isIntervention?: boolean;
    distance?: number; // 👈 New
}

const InfiniteScroll: FC<InfiniteScrollProps> = ({
    width = "100%",
    maxHeight = "100%",
    items = [],
    itemMinWidth = 150,
    itemMinHeight = 150,
    isTilted = false,
    tiltDirection = "left",
    autoplay = false,
    autoplaySpeed = 0.5,
    autoplayDirection = "down",
    pauseOnHover = false,
    scrollDirection = "vertical",
    isReverse = false,
    isIntervention = true,
    distance = 20, // 👈 Default distance
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const axis = scrollDirection === "horizontal" ? "x" : "y";

    const getTiltTransform = (): string => {
        if (!isTilted) return "none";
        return tiltDirection === "left"
            ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
            : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container || items.length === 0) return;

        const divItems = gsap.utils.toArray<HTMLDivElement>(container.children);
        if (!divItems.length) return;

        const firstItem = divItems[0];
        const itemSize =
            scrollDirection === "horizontal"
                ? firstItem.offsetWidth
                : firstItem.offsetHeight;

        const totalItemSize = itemSize + distance;
        const totalSize = totalItemSize * items.length;

        const wrapFn = gsap.utils.wrap(-totalSize, totalSize);

        // Set initial positions
        divItems.forEach((child, i) => {
            const pos = i * totalItemSize;
            gsap.set(child, { [axis]: pos });
        });

        let observer: Observer | null = null;

        if (isIntervention) {
            observer = Observer.create({
                target: container,
                type: "wheel,touch,pointer",
                preventDefault: true,
                onPress: ({ target }) => {
                    (target as HTMLElement).style.cursor = "grabbing";
                },
                onRelease: ({ target }) => {
                    (target as HTMLElement).style.cursor = "grab";
                },
                onChange: ({ deltaX, deltaY, isDragging, event }) => {
                    const delta = axis === "y" ? deltaY : deltaX;
                    const multiplier = event.type === "wheel" ? -1 : 1;
                    const directionFactor = isReverse ? 1 : -1;
                    const distanceMove = delta * multiplier * (isDragging ? 5 : 10) * directionFactor;

                    divItems.forEach((child) => {
                        gsap.to(child, {
                            duration: 0.5,
                            ease: "expo.out",
                            [axis]: `+=${distanceMove}`,
                            modifiers: {
                                [axis]: gsap.utils.unitize(wrapFn),
                            },
                        });
                    });
                },
            });
        }

        let rafId: number;

        if (autoplay) {
            const directionFactor =
                (autoplayDirection === "down" || autoplayDirection === "right") ? 1 : -1;
            const speedPerFrame = autoplaySpeed * directionFactor * (isReverse ? -1 : 1);

            const tick = () => {
                divItems.forEach((child) => {
                    gsap.set(child, {
                        [axis]: `+=${speedPerFrame}`,
                        modifiers: {
                            [axis]: gsap.utils.unitize(wrapFn),
                        },
                    });
                });
                rafId = requestAnimationFrame(tick);
            };

            rafId = requestAnimationFrame(tick);

            if (pauseOnHover) {
                const stopTicker = () => rafId && cancelAnimationFrame(rafId);
                const startTicker = () => {
                    rafId = requestAnimationFrame(tick);
                };

                container.addEventListener("mouseenter", stopTicker);
                container.addEventListener("mouseleave", startTicker);

                return () => {
                    observer?.kill();
                    stopTicker();
                    container.removeEventListener("mouseenter", stopTicker);
                    container.removeEventListener("mouseleave", startTicker);
                };
            } else {
                return () => {
                    observer?.kill();
                    if (rafId) cancelAnimationFrame(rafId);
                };
            }
        }

        return () => {
            observer?.kill();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [
        items,
        autoplay,
        autoplaySpeed,
        autoplayDirection,
        pauseOnHover,
        isTilted,
        tiltDirection,
        scrollDirection,
        isReverse,
        isIntervention,
        distance, // 👈 Dependency
    ]);

    return (
        <div
            className="overflow-hidden"
            ref={wrapperRef}
            style={{ maxHeight }}
        >
            <div
                ref={containerRef}
                style={{
                    width,
                    transform: getTiltTransform(),
                    display: scrollDirection === "horizontal" ? "inline-flex" : "block",
                    flexDirection: scrollDirection === "horizontal" ? "row" : "column",
                    gap: `${distance}px`, // 👈 Use spacing here
                }}
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            height: scrollDirection === "vertical" ? `${itemMinHeight}px` : undefined,
                            width: scrollDirection === "horizontal" ? `${itemMinWidth}px` : undefined,
                            flexShrink: 0,
                        }}
                    >
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;