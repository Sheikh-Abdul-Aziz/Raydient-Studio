'use client';

import React from "react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Main } from "@/components/semantic/main";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const policies = [
	{
		title: "Terms and Conditions (T&C):",
		description:
			"The rules and guidelines for using a website, service, or product.",
	},
	{
		title: "Privacy Policy:",
		description: "How our agency collects, uses, and protects user data.",
	},
	{
		title: "Refund Policy:",
		description:
			"The process and conditions for obtaining a refund or making a return.",
	},
	{
		title: "Shipping Policy:",
		description:
			"The process and costs associated with shipping projects.",
	},
	{
		title: "Cancellation Policy:",
		description:
			"The process and conditions for cancelling a booking or subscription.",
	},
	{
		title: "Intellectual Property Policy:",
		description: "The ownership and use of intellectual property (IP) rights.",
	},
	{
		title: "Acceptable Use Policy (AUP):",
		description: "The acceptable uses of a service or product.",
	},
	{
		title: "Warranty and Guarantee Policy:",
		description:
			"Details the coverage, duration, and conditions of our warranty and guarantee, along with how to claim it if needed.",
	},
	{
		title: "About Us:",
		description:
			"Information regarding the organization, its mission, values, and background, including details relevant to its operations, services, or digital presence.",
	},
	{
		title: "End User License Agreement (EULA):",
		description: "The terms and conditions for using our services and products.",
	},
];

const RouterButton = ({ onClick, variant, size, radius, children }: { onClick: () => void, variant: "destructive" | "elevated" | "filled" | "linked" | "outlined" | "text" | "tonal", size: "small" | "badge" | "default" | "natural" | "large" | "action" | "icon" | "social" | "wide", radius: "none" | "small" | "medium" | "large" | "full" | null | undefined, children: React.ReactNode }) => (
	<Button onClick={onClick} variant={variant} size={size} radius={radius}>
		{children}
	</Button>
);

export default function Introduction() {

	const router = useRouter();

	const navigateTo = (path: string) => router.push(path);

	return (
		<Main className="min-h-screen flex flex-col items-start bg-background text-foreground px-6 py-6 space-y-4">
			<div className="mt-16">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Introduction</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<div className="space-y-4">
				<h2 className="text-3xl font-bold text-primary">
					Introduction
				</h2>
				<ol className="space-y-4 list-decimal list-inside text-base leading-relaxed">
					{policies.map((policy, index) => (
						<li key={index}>
							<strong>{policy.title}</strong> {policy.description}
						</li>
					))}
				</ol>
			</div>
			<div className="flex flex-row items-center justify-between w-full">
				<RouterButton onClick={() => navigateTo("/docs")} variant="tonal" size="small" radius="medium">
					Docs
					<IconArrowLeft />
				</RouterButton>
				<RouterButton onClick={() => navigateTo("/docs/introduction")} variant="tonal" size="small" radius="medium">
					Terms & Conditions
					<IconArrowRight />
				</RouterButton>
			</div>
		</Main>
	);
}