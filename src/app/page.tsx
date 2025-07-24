import React from "react";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featured-projects";
import RecentProjects from "@/components/recent-projects";
import FAQ from "@/components/faq";
import { Main } from "@/components/semantic/main";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import PricingCards from "@/components/pricing-cards";

export default function Home() {
	return (
		<> {/* Root */}
			{/* Header */}
			<Main className="antialiased flex flex-col bg-background items-center"> {/* Main */}
				<Hero /> {/* Hero */}
				<WhyChooseUs /> {/* Why Choose Us */}
				<Services /> {/* Services */}
				<FeaturedProjects /> {/* Featured Projects */}
				<RecentProjects /> {/* Recent Projects */}
				<PricingCards /> {/* Pricing Cards */}
				<FAQ /> {/* FAQ */}
			</Main>
			{/* Footer */}
		</>
	);
}