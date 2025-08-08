"use client";

import React from "react";
import InfiniteScroll from './blocks/InfiniteScroll';
import { IconRaydientStudio } from "./icon/icon";

const items = [
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
    { content: <IconRaydientStudio/> },
];

export default function TrustedBrands() {
    return (
        <div>
            <InfiniteScroll
                items={items}
                isTilted={false}
                width="100%"
                scrollDirection="horizontal"
                isReverse={true}
                isIntervention={true}
                autoplay={true}
                autoplaySpeed={3}
                autoplayDirection="right"
                pauseOnHover={false}
            />

        </div>
    );
}