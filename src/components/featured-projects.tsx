"use client";

import React from "react";
import SectionHeader from "./section-header";
import { PortfolioCard } from "./portfolio-card";

const info = {
    title: "FEATURED PROJECTS",
    subtitle: (
        <>
            Highlighting our Standout Designs{" "}<br className="md:hidden" />and Brand Solutions
        </>
    ),
};

const brandLogo = "https://raydientstudio.vercel.app/android-chrome-512x512.png";
const imageUrl = "https://raydientstudio.vercel.app/og-image.jpg";

export default function FeaturedProjects() {

    const portfolioProjects = [
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: "Tech",
            type: "Website",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: "SaaS",
            type: "Website",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: "E-commerce",
            type: "Website",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Etiam vitae urna at erat cursus cursus.",
            category: "Marketing",
            type: "Website",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
    ]

    return (
        <section className="w-full h-auto px-0 py-8">
            <div className="w-full h-auto px-4 py-0">
                <div className="flex flex-col justify-center items-start text-left gap-y-6 left-0 right-0 max-w-7xl mx-auto">
                    <SectionHeader info={info} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {portfolioProjects.map((project, index) => (
                            <PortfolioCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                category={project.category}
                                type={project.type}
                                thumbnailUrl={project.brandLogo}
                                brandUrl={project.brandLogo}
                                caseStudyUrl={project.caseStudyUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};