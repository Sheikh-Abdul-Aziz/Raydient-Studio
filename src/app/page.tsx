import React from "react";
import Hero from "../components/hero";
import FeaturedProjects from "../components/featured-projects";
import RecentProjects from "../components/recent-projects";
import { Testimonial } from "@/components/testimonials";
import HomeFAQ from "@/components/home-faq";


export default function Home() {
	return (
		<> {/* Root */}
			{/* Header */}
			<main className="{flex flex-col bg-background items-center}">
				{/* Main */}
				<Hero /> {/* Hero */}
				<FeaturedProjects /> {/* Featured Projects */}
				<RecentProjects /> {/* Recent Projects */}
				<Testimonial /> {/* Testimonial */}
				<HomeFAQ /> {/* FAQ */}
			</main>
		</>
	);
}