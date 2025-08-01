"use client";

import React from "react";
import InfiniteScroll from './blocks/InfiniteScroll';

const items = [
    { content: "Text Item 1" },
    { content: <p>Paragraph Item 2</p> },
    { content: "Text Item 3" },
    { content: <p>Paragraph Item 4</p> },
    { content: "Text Item 5" },
    { content: <p>Paragraph Item 6</p> },
    { content: "Text Item 7" },
    { content: <p>Paragraph Item 8</p> },
    { content: "Text Item 9" },
    { content: <p>Paragraph Item 10</p> },
    { content: "Text Item 11" },
    { content: <p>Paragraph Item 12</p> },
    { content: "Text Item 13" },
    { content: <p>Paragraph Item 14</p> },
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
                pauseOnHover={true}
            />

        </div>
    );
}