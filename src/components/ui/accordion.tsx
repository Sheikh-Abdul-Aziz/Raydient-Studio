"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = React.forwardRef<
    React.Ref<typeof AccordionPrimitive.Root>,
    React.ComponentPropsWithRef<typeof AccordionPrimitive.Root>
>(function Accordion({ className, ...props }) {
    return <AccordionPrimitive.Root data-slot="accordion" className={cn([], className)} {...props} />
})

const AccordionItem = React.forwardRef<
    React.Ref<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithRef<typeof AccordionPrimitive.Item>
>(function AccordionItem({ className, ...props }) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("transition-colors duration-250 ease-in-out bg-surface hover:bg-muted/80 active:bg-muted/80 border border-border border-solid shadow-[0_0px_0px_rgba(0,0,0,0)] rounded-lg px-4 mb-3 last:mb-0", className)}
            {...props}
        />
    )
})

const AccordionTrigger = React.forwardRef<
    React.Ref<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>
>(function AccordionTrigger({ className, children, ...props }) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "flex flex-1 items-center justify-between gap-4 rounded-md py-3 text-left text-foreground/90 text-base font-medium outline-none ring-0 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDownIcon className="text-muted-foreground pointer-events-none size-[17px] shrink-0 translate-y-0.5 transition-transform duration-250 ease-in-out" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
})

const AccordionContent = React.forwardRef<
    React.Ref<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>
>(function AccordionContent({ className, children, ...props }) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down transition-transform duration-250 ease-in-out overflow-hidden text-sm text-muted-foreground"
            {...props}
        >
            <div className={cn("pt-0 pb-4", className)}>{children}</div>
        </AccordionPrimitive.Content>
    )
})

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }