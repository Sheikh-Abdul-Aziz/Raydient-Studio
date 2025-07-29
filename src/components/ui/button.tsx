import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center text-center gap-x-2 whitespace-nowrap rounded-md text-sm font-normal font-accent leading-none tracking-normal transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                destructive: "bg-destructive text-destructive-foreground hover:text-destructive-foreground/90 active:text-destructive-foreground/90 hover:bg-destructive/80 active:bg-destructive/80 shadow-xs",
                elevated: "bg-background text-secondary-foreground shadow-xs hover:bg-secondary hover:text-secondary-foreground active:bg-secondary active:text-secondary-foreground",
                filled: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/90 shadow-xs ",
                linked: "bg-transparent text-primary underline-offset-4 hover:underline active:underline",
                outlined: "bg-surface text-foreground hover:bg-secondary active:bg-secondary hover:text-secondary-foreground active:text-secondary-foreground border border-border border-solid",
                text: "bg-transparent text-secondary-foreground/80 hover:bg-secondary hover:text-secondary-foreground active:bg-secondary active:text-secondary-foreground",
                tonal: "bg-accent/80 hover:bg-accent active:bg-accent text-accent-foreground hover:text-accent-foreground active:text-accent-foreground",
            },
            size: {
                badge: "h-7 gap-1.5 px-3 py-1 text-xs font-display font-[700] items-center align-middle text- uppercase bg-surface/80 text-foreground/80 shadow-none",
                default: "h-8 md:h-9 text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 gap-x-1.5 md:gap-x-2",
                natural: "h-9 px-4 py-2",
                small: "h-8 px-3 text-xs",
                large: "h-10 px-8",
                action: "h-8 px-2 py-2 text-xs shadow-none",
                icon: "h-8 w-8 px-2 py-2 shadow-none [&_svg]:text-muted-foreground hover:text-foreground active:text-foreground",
                social: "h-8 w-8 px-2 py-2 [&_svg]:text-muted-foreground hover:text-foreground active:text-foreground",
                wide: "h-9 w-full px-4 py-2",
            },
            radius: {
                none: "rounded-none",
                small: "rounded-sm",
                medium: "rounded-md",
                large: "rounded-lg",
                extraLarge: "rounded-xl",
                full: "rounded-full",
            },
            align: {
                left: "justify-start text-left",
                center: "justify-center text-center",
                right: "justify-end text-right",
            },
        },
        defaultVariants: {
            variant: "filled",
            size: "natural",
            radius: "medium",
            align: "center"
        },
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
    className, variant, size, radius, align, asChild = false, ...props }, ref) => {
        const Element = asChild ? Slot : "button"
        return (
            <Element className={cn(buttonVariants({ className, variant, size, radius, align }))} ref={ref} {...props}/>
        )
    }
)
Button.displayName = "Button";

export { Button, buttonVariants };