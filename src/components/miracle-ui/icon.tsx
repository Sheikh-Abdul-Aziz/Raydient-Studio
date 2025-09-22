import React, { forwardRef, HTMLAttributes } from 'react';
import Background from './background';
import Foreground from './foreground';
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva(
    "relative overflow-hidden w-9 h-9 flex justify-center items-center border border-border rounded-md"
)

export interface IconProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof iconVariants> {
    asChild?: boolean
}

const IconRaydientStudio = forwardRef<HTMLElement, IconProps>(
    ({ className, asChild = false, ...props }) => {

        const Icon = asChild ? Slot : "div"

        return (
            <Icon className={cn(iconVariants({ className }))} {...props}>
                <Background width="36" height="36" className="absolute text-surface-foreground" />
                <Foreground width="20" height="20" className="absolute text-surface" />
            </Icon>
        );
    });

IconRaydientStudio.displayName = "IconRaydientStudio";

export { IconRaydientStudio, iconVariants };