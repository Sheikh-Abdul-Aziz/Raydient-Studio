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
            title: "FinanceHub Dashboard",
            description:
                "Professional financial management dashboard for investment firms. Features real-time market data, portfolio analytics.",
            category: "Fintech",
            type: "Dashboard",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "MedConnect Telemedicine",
            description:
                "HIPAA-compliant telemedicine platform enabling secure video consultations, patient records management.",
            category: "Healthcare",
            type: "Platform",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "EduLearn LMS",
            description:
                "Modern learning management system for educational institutions. Features interactive courses, progress tracking.",
            category: "Education",
            type: "LMS",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
        {
            title: "FoodieHub Restaurant",
            description:
                "Premium restaurant website with online reservations, menu management, and integrated ordering system.",
            category: "Restaurant",
            type: "Website",
            imageUrl: imageUrl,
            brandLogo: brandLogo,
            caseStudyUrl: "#",
        },
    ]

    return (
        <div className="w-full h-auto px-0 py-8">
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
                                imageUrl={project.imageUrl}
                                brandLogo={project.brandLogo}
                                caseStudyUrl={project.caseStudyUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};