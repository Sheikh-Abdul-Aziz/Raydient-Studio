import React from "react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Docs() {
	return (
		<main className="min-h-screen flex flex-col items-start bg-background text-foreground px-12 py-6 space-y-4 mt-[54px]">
			<div>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem className="hidden md:block">
							<BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="hidden md:block" />
						<BreadcrumbItem>
							<BreadcrumbPage>List of documentations</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<section className="space-y-4">
				<h2 className="text-3xl font-bold text-primary">
					List of Shopivo Policies and Supporting Documents
				</h2>
				<ol className="space-y-4 list-decimal list-inside text-base leading-relaxed">
					<li>
						<strong>Terms and Conditions (T&amp;C):</strong> The rules and
						guidelines for using a website, service, or product.
					</li>
					<li>
						<strong>Privacy Policy:</strong> How our company collects, uses, and
						protects user data.
					</li>
					<li>
						<strong>Refund and Return Policy:</strong> The process and
						conditions for obtaining a refund or making a return.
					</li>
					<li>
						<strong>Shipping Policy:</strong> The process and costs associated
						with shipping physical products.
					</li>
					<li>
						<strong>Cancellation Policy:</strong> The process and conditions for
						cancelling an order or subscription.
					</li>
					<li>
						<strong>Intellectual Property Policy:</strong> The ownership and use
						of intellectual property (IP) rights.
					</li>
					<li>
						<strong>Acceptable Use Policy (AUP):</strong> The acceptable uses of
						a service or product.
					</li>
					<li>
						<strong>Warranty and Guarantee Policy:</strong> Details the
						coverage, duration, and conditions of our warranty and guarantee,
						along with how to claim it if needed.
					</li>
					<li>
						<strong>About Us:</strong> Information regarding the organization,
						its mission, values, and background, including details relevant to
						its operations, services, or digital presence.
					</li>
					<li>
						<strong>All-User License Agreement (AULA):</strong> The terms and
						conditions for using a software or digital product.
					</li>
				</ol>
			</section>
		</main>
	);
}