import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type FlexElement = HTMLDivElement;

type NumericScale = | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96;

type SpacingValue = NumericScale | "auto";
type GapValue = NumericScale; // no 'auto'
type WidthHeightValue = NumericScale | "auto" | "full" | "fit" | "screen" | "min" | "max" | "fit-content" | "min-content" | "max-content";
type Overflow = "auto" | "clip" | "hidden" | "scroll" | "visible";
type PositionValue = "static" | "relative" | "absolute" | "fixed" | "sticky";
type DistanceValue = NumericScale;
type Display = "flex" | "inline-flex" | "block";
type Direction = "row" | "col" | "row-reverse" | "col-reverse";
type Wrap = "nowrap" | "wrap" | "wrap-reverse";
type ItemsValue = "start" | "center" | "end" | "stretch" | "baseline";
type JustifyValue = "start" | "center" | "end" | "between" | "around" | "evenly";
type AlignValue = "left" | "center" | "right" | "justify";

export interface FlexProps extends React.HTMLAttributes<FlexElement> {
	asChild?: boolean;
	className?: string;

	// enums
	overflow?: Overflow;
	position?: PositionValue;
	display?: Display;
	direction?: Direction;
	wrap?: Wrap;
	justify?: JustifyValue;
	items?: ItemsValue;
	align?: AlignValue;

	// spacing
	width?: WidthHeightValue;
	height?: WidthHeightValue;
	top?: DistanceValue;
	bottom?: DistanceValue;
	left?: DistanceValue;
	right?: DistanceValue;
	padding?: NumericScale;
	paddingX?: NumericScale;
	paddingY?: NumericScale;
	paddingTop?: NumericScale;
	paddingBottom?: NumericScale;
	paddingLeft?: NumericScale;
	paddingRight?: NumericScale;

	margin?: SpacingValue;
	marginX?: SpacingValue;
	marginY?: SpacingValue;
	marginTop?: SpacingValue;
	marginBottom?: SpacingValue;
	marginLeft?: SpacingValue;
	marginRight?: SpacingValue;

	gap?: GapValue;
	gapX?: GapValue;
	gapY?: GapValue;
	spaceX?: GapValue;
	spaceY?: GapValue;
}

const FlexLayout = React.forwardRef<HTMLDivElement, FlexProps>(
	(
		{
			asChild = false,
			className,
			overflow,
			display,
			direction,
			wrap,
			width,
			height,
			justify,
			items,
			align,
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
			overflow && `overflow-${overflow}`,
			display && `${display}-flex`,
			direction && `flex-${direction}`,
			wrap && `flex-${wrap}`,
			width && `w-${width}`,
			height && `h-${height}`,
			justify && `justify-${justify}`,
			items && `items-${items}`,
			align && `text-${align}`,

			padding !== undefined && `p-${padding}`,
			paddingX !== undefined && `px-${paddingX}`,
			paddingY !== undefined && `py-${paddingY}`,
			paddingTop !== undefined && `pt-${paddingTop}`,
			paddingBottom !== undefined && `pb-${paddingBottom}`,
			paddingLeft !== undefined && `pl-${paddingLeft}`,
			paddingRight !== undefined && `pr-${paddingRight}`,

			margin !== undefined && `m-${margin}`,
			marginX !== undefined && `mx-${marginX}`,
			marginY !== undefined && `my-${marginY}`,
			marginTop !== undefined && `mt-${marginTop}`,
			marginBottom !== undefined && `mb-${marginBottom}`,
			marginLeft !== undefined && `ml-${marginLeft}`,
			marginRight !== undefined && `mr-${marginRight}`,

			gap !== undefined && `gap-${gap}`,
			gapX !== undefined && `gap-x-${gapX}`,
			gapY !== undefined && `gap-y-${gapY}`,
			spaceX !== undefined && `space-x-${spaceX}`,
			spaceY !== undefined && `space-y-${spaceY}`,
		];

		return (
			<Layout ref={ref} className={cn("flex", dynamicClasses, className)} {...props} />
		);
	}
);

FlexLayout.displayName = "FlexLayout";

export { FlexLayout };