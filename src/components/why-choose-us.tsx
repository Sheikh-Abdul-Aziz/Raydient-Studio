import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { IconLayersIntersect, IconUsersGroup, IconWand, IconWriting } from "@tabler/icons-react";
import SectionHeader from "./section-header";

const info = {
    title: "WHY CHOOSE US?",
    subtitle: (
        <>
            The Design Partner You&apos;ve{" "}<br className="md:hidden" />Been Looking For
        </>
    ),
};

export default function WhyChooseUs() {

    const items = [
        {
            id: 1,
            title: "Conversion Driven Copywriting",
            description: "We design & write to increase signups, sales, and engagement. Every detail supports your business goals.",
            icon: <IconWriting strokeWidth={1.5} size={28} className="text-muted-foreground" />
        },
        {
            id: 2,
            title: "Fully Dedicated Team",
            description: "You work with a dedicated team focused solely on your project. No juggling, no outsourcing.",
            icon: <IconUsersGroup strokeWidth={1.5} size={28} className="text-muted-foreground" />
        },
        {
            id: 3,
            title: "Optimized Motion Design",
            description: "We create animations that explain, guide, and keep users engaged at every step of the journey.",
            icon: <IconLayersIntersect strokeWidth={1.5} size={28} className="text-muted-foreground" />
        },
        {
            id: 4,
            title: "Precision in Every Pixel",
            description: "We design precisely for your brand, ensuring every element is pixel-perfect and aligned with your vision.",
            icon: <IconWand strokeWidth={1.5} size={28} className="text-muted-foreground" />
        },
    ];

    return (
        <div className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-7xl mx-auto">
                    <SectionHeader info={info} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 w-full h-auto">
                        {items.map((item) => (
                            <Card key={item.id} className="flex flex-col justify-start items-center shadow-none hover:bg-muted/80 active:bg-muted/80 transition-colors duration-170 ease-in-out cursor-pointer">
                                <CardContent>
                                    {item.icon}
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};