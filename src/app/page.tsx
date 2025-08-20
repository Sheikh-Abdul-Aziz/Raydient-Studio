import React from "react";
import FAQ from "@/components/faq";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import PricingCards from "@/components/pricing-cards";
import RecentProjects from "@/components/recent-projects";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import Newsletter from "@/components/newsletter";
import Testimonial from "@/components/testimonials";
import TrustedBrands from "@/components/trusted-brands";

export default function Home() {
    return (
        <> {/* Root */}
            {/* Header */}
            {/* Main */}
            <Hero /> {/* Hero */}
            <TrustedBrands />
            <Services /> {/* Services */}
            <FeaturedProjects /> {/* Featured Projects */}
            <RecentProjects /> {/* Recent Projects */}
            <WhyChooseUs /> {/* Why Choose Us */}
            <PricingCards /> {/* Pricing Cards */}
            <Testimonial />
            <FAQ /> {/* FAQ */}
            <Newsletter /> {/* Newsletter */}
            {/* Footer */}
        </>
    );
}