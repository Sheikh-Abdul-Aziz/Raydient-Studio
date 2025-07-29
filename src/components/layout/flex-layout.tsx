import React, { forwardRef, HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// --- Types ---
type FlexElement = HTMLDivElement;

type ResponsiveValue<T> = T | { initial?: T; sm?: T; md?: T; lg?: T; xl?: T;['2xl']?: T };

type NumericScale =
	| 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14
	| 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96;

type SpacingValue = NumericScale | "auto";
type WidthHeightValue = NumericScale | "auto" | "full" | "fit" | "screen" | "min" | "max" | "fit-content" | "min-content" | "max-content";
type Overflow = "auto" | "clip" | "hidden" | "scroll" | "visible";
type PositionValue = "static" | "relative" | "absolute" | "fixed" | "sticky";
type Display = "flex" | "inline-flex" | "block" | "inline-block" | "hidden";
type Direction = "row" | "col" | "row-reverse" | "col-reverse";
type Wrap = "nowrap" | "wrap" | "wrap-reverse";
type ItemsValue = "start" | "center" | "end" | "stretch" | "baseline";
type JustifyValue = "start" | "center" | "end" | "between" | "around" | "evenly";
type AlignValue = "left" | "center" | "right" | "justify";

// --- Props ---
interface FlexProps extends HTMLAttributes<FlexElement> {
	asChild?: boolean;
	className?: string;

	display?: ResponsiveValue<Display>;
	position?: ResponsiveValue<PositionValue>;
	overflow?: ResponsiveValue<Overflow>;
	direction?: ResponsiveValue<Direction>;
	wrap?: ResponsiveValue<Wrap>;
	justify?: ResponsiveValue<JustifyValue>;
	items?: ResponsiveValue<ItemsValue>;
	align?: ResponsiveValue<AlignValue>;

	width?: ResponsiveValue<WidthHeightValue>;
	height?: ResponsiveValue<WidthHeightValue>;
	top?: ResponsiveValue<NumericScale>;
	bottom?: ResponsiveValue<NumericScale>;
	left?: ResponsiveValue<NumericScale>;
	right?: ResponsiveValue<NumericScale>;

	padding?: ResponsiveValue<NumericScale>;
	paddingX?: ResponsiveValue<NumericScale>;
	paddingY?: ResponsiveValue<NumericScale>;
	paddingTop?: ResponsiveValue<NumericScale>;
	paddingBottom?: ResponsiveValue<NumericScale>;
	paddingLeft?: ResponsiveValue<NumericScale>;
	paddingRight?: ResponsiveValue<NumericScale>;

	margin?: ResponsiveValue<SpacingValue>;
	marginX?: ResponsiveValue<SpacingValue>;
	marginY?: ResponsiveValue<SpacingValue>;
	marginTop?: ResponsiveValue<SpacingValue>;
	marginBottom?: ResponsiveValue<SpacingValue>;
	marginLeft?: ResponsiveValue<SpacingValue>;
	marginRight?: ResponsiveValue<SpacingValue>;

	gap?: ResponsiveValue<NumericScale>;
	gapX?: ResponsiveValue<NumericScale>;
	gapY?: ResponsiveValue<NumericScale>;
	spaceX?: ResponsiveValue<NumericScale>;
	spaceY?: ResponsiveValue<NumericScale>;
}

// --- Helpers ---
const resolveResponsiveClass = (prefix: string, value?: ResponsiveValue<any>): string[] => {
	if (value === undefined) return [];
	if (typeof value !== "object") return [`${prefix}-${value}`];
	return Object.entries(value).map(([key, val]) =>
		key === "initial" ? `${prefix}-${val}` : `${key}:${prefix}-${val}`
	);
};

const resolveEnumClass = (value?: ResponsiveValue<string>): string[] => {
	if (!value) return [];
	if (typeof value !== "object") return [value];
	return Object.entries(value).map(([key, val]) =>
		key === "initial" ? val : `${key}:${val}`
	);
};

// --- Layout ---
const FlexLayout = forwardRef<FlexElement, FlexProps>(
	(
		{
			asChild = false,
			className,
			display,
			position,
			overflow,
			direction,
			wrap,
			justify,
			items,
			align,
			width,
			height,
			top,
			bottom,
			left,
			right,
			padding,
			paddingX,
			paddingY,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			margin,
			marginX,
			marginY,
			marginTop,
			marginBottom,
			marginLeft,
			marginRight,
			gap,
			gapX,
			gapY,
			spaceX,
			spaceY,
			...props
		},
		ref
	) => {

		const Layout = asChild ? Slot : "div";

		const dynamicClasses = [
			...resolveEnumClass(display),
			...resolveEnumClass(position),
			...resolveEnumClass(overflow),
			...resolveEnumClass(direction && `flex-${direction}`),
			...resolveEnumClass(wrap && `flex-${wrap}`),
			...resolveEnumClass(justify && `justify-${justify}`),
			...resolveEnumClass(items && `items-${items}`),
			...resolveEnumClass(align && `text-${align}`),

			...resolveResponsiveClass("w", width),
			...resolveResponsiveClass("h", height),
			...resolveResponsiveClass("top", top),
			...resolveResponsiveClass("bottom", bottom),
			...resolveResponsiveClass("left", left),
			...resolveResponsiveClass("right", right),

			...resolveResponsiveClass("p", padding),
			...resolveResponsiveClass("px", paddingX),
			...resolveResponsiveClass("py", paddingY),
			...resolveResponsiveClass("pt", paddingTop),
			...resolveResponsiveClass("pb", paddingBottom),
			...resolveResponsiveClass("pl", paddingLeft),
			...resolveResponsiveClass("pr", paddingRight),

			...resolveResponsiveClass("m", margin),
			...resolveResponsiveClass("mx", marginX),
			...resolveResponsiveClass("my", marginY),
			...resolveResponsiveClass("mt", marginTop),
			...resolveResponsiveClass("mb", marginBottom),
			...resolveResponsiveClass("ml", marginLeft),
			...resolveResponsiveClass("mr", marginRight),

			...resolveResponsiveClass("gap", gap),
			...resolveResponsiveClass("gap-x", gapX),
			...resolveResponsiveClass("gap-y", gapY),
			...resolveResponsiveClass("space-x", spaceX),
			...resolveResponsiveClass("space-y", spaceY),
		];

		return (
			<Layout ref={ref} className={cn("flex", dynamicClasses, className)} {...props} />
		);
	}
);

FlexLayout.displayName = "FlexLayout";

export { FlexLayout };