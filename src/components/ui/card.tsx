import * as React from "react"

import { cn } from "@/lib/utils"

const CornerIcon = ({ className }: { className?: string; delay?: number; }) => {
	return (
		<div className={cn(`pointer-events-none h-3 w-3 border-[2px] border-border rounded-none bg-surface`, className)} />
	);
};

const BoundingCard = ({ children }: { children: React.ReactNode }) => (
	<div className="items-center justify-center relative overflow-visible">
		{children}
		<CornerIcon className="absolute -right-[4.5px] -top-[4.5px]" />
		<CornerIcon className="absolute -bottom-[4.5px] -right-[4.5px]" />
		<CornerIcon className="absolute -left-[4.5px] -top-[4.5px]" />
		<CornerIcon className="absolute -bottom-[4.5px] -left-[4.5px] " />
	</div>
);

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<BoundingCard>
		<div ref={ref} className={cn("relative overflow-visible rounded-none border-[2px] border-border bg-surface text-card-foreground shadow-none", className)} {...props} />
	</BoundingCard>
))
Card.displayName = "Card";

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6", className)}
		{...props}
	/>
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("font-medium font-label text-xl leading-none tracking-tight", className)}
		{...props}
	/>
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("p-4", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center p-6 pt-0", className)}
		{...props}
	/>
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }