/**
 * MIT License
 *
 * Copyright (c) [2025] [Miracle UI, Library] {@link https://github.com/Miracle-UI-Suite}.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export type FlexElement = HTMLDivElement;

export type ResponsiveValue<T> = T | { initial?: T;[key: string]: T | undefined };

export type NumericScale =
    | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14
    | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96;

export type FractionalScale =
    | "1/2" | "1/3" | "2/3"
    | `1/${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`
    | `2/${2 | 4 | 5 | 6 | 8 | 10 | 12}`
    | `3/${4 | 5 | 6 | 8 | 10 | 12}`
    | `4/${5 | 6 | 8 | 10 | 12}`
    | `5/${6 | 8 | 10 | 12}`
    | `6/${7 | 8 | 10 | 12}`
    | `7/8` | `8/9` | `9/10` | `10/11` | `11/12`;

export type ZIndex = "0" | "10" | "20" | "30" | "40" | "50" | "auto";
export type AspectRatio = "auto" | "square" | "video" | `${number}/${number}`;
export type Visibility = "visible" | "invisible";
export type Opacity = 0 | 25 | 50 | 75 | 100;
export type PointerEvents = "none" | "auto";

export type SpacingValue = NumericScale | "auto" | "px";
export type WidthHeightValue = | NumericScale | FractionalScale | "auto" | "px" | "full" | "fit" | "screen" | "min" | "max" | "fit-content" | "min-content" | "max-content";

export type WidthValue = WidthHeightValue | "dvw" | "lvw" | "svw";
export type HeightValue = WidthHeightValue | "dvh" | "lvh" | "svh";

export type SizeValue = | NumericScale | FractionalScale | "auto" | "px" | "full" | "fit" | "screen" | "min" | "max" | "dvw" | "lvw" | "svw" | "dvh" | "lvh" | "svh";

export type MinWidthHeightValue = | WidthHeightValue | "none" | "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

export type MaxWidthHeightValue = MinWidthHeightValue;

export type Overflow = "auto" | "clip" | "hidden" | "scroll" | "visible";
export type PositionValue = "static" | "relative" | "absolute" | "fixed" | "sticky";
export type Display = "flex" | "inline-flex" | "block" | "inline-block" | "hidden";
export type Direction = "row" | "col" | "row-reverse" | "col-reverse";
export type Wrap = "nowrap" | "wrap" | "wrap-reverse";
export type ItemsValue = "start" | "center" | "end" | "stretch" | "baseline";
export type JustifyValue = "start" | "center" | "end" | "between" | "around" | "evenly";
export type AlignValue = "left" | "center" | "right" | "justify";