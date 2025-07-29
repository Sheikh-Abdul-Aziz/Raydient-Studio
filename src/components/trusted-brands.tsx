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
                isTilted={true}
                tiltDirection='left'
                autoplay={true}
                autoplaySpeed={0.1}
                autoplayDirection={"down"}
                pauseOnHover={true}
            />
        </div>
    );
}