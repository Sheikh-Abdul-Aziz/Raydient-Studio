import React from "react";
import Hero from "../components/hero";
import FeaturedProjects from "../components/featured-projects";
import RecentProjects from "../components/recent-projects";
import { Partners } from "@/components/trusted-brands";
import { Testimonial } from "@/components/testimonials";
import HomeFAQ from "@/components/home-faq";
import { Main } from "@/components/semantic/main";

export default function Home() {
	return (
		<> {/* Root */}
			{/* Header */}
			<Main className="flex flex-col bg-background items-center"> {/* Main */}
				<Hero /> {/* Hero */}
				<Partners /> {/* Partners */}
				<FeaturedProjects /> {/* Featured Projects */}
				<RecentProjects /> {/* Recent Projects */}
				<Testimonial /> {/* Testimonial */}
				<HomeFAQ /> {/* FAQ */}
			</Main>
			{/* Footer */}
		</>
	);
}