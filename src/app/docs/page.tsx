'use client';

import React from "react";
import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconChevronRight, IconCopy } from "@tabler/icons-react";
import { Header } from "@/components/semantic/header";
import { FlexLayout } from "@/components/layout/flex-layout";
import ThemeChanger from "@/components/theme-changer";

const RouterButton = ({ onClick, variant, size, radius, children }: { onClick: () => void, variant: "destructive" | "elevated" | "filled" | "linked" | "outlined" | "text" | "tonal", size: "small" | "badge" | "default" | "natural" | "large" | "action" | "icon" | "social" | "wide", radius: "none" | "small" | "medium" | "large" | "full" | null | undefined, children: React.ReactNode }) => (
	<Button onClick={onClick} variant={variant} size={size} radius={radius}>
		{children}
	</Button>
);

export default function Docs() {

	const router = useRouter();

	const navigateTo = (path: string) => router.push(path);

	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<Header className="fixed z-10 top-0 left-0 right-0 flex h-16 shrink-0 rounded-b-lg border-b border-border border-dashed bg-surface backdrop-blur supports-[backdrop-filter]:bg-surface/80 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
						<FlexLayout direction={"row"} items={"center"} gapX={2} paddingX={4} width={"full"}>
							<SidebarTrigger className="-ml-1" />
							<Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem>
										<BreadcrumbLink href="/">Home</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator />
									<BreadcrumbItem>
										<BreadcrumbPage>Docs</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
							<FlexLayout marginLeft={"auto"}>
								<ThemeChanger />
							</FlexLayout>
						</FlexLayout>
					</Header>
					<FlexLayout display={"flex"} direction={"col"} justify={"start"} items={"start"} width={"full"} height={"fit-content"} paddingX={4} paddingY={6} spaceY={6}>
						<FlexLayout display={"flex"} direction={"col"} spaceY={4} marginTop={16}>
							<h2 className="text-3xl font-bold text-primary">
								Docs
							</h2>

							<p className="font-medium">
								Official Documentation Portal of Raydient Studio™
							</p>

							<p className="text-sm text-muted-foreground">
								Effective Date: 24/07/2025 – Present <br />
								Business Name: Raydient Studio (hereinafter referred to as “Raydient Studio,” “we,” “us,” or “our”) <br />
								Website: <Link className="text-link hover:underline active:underline" href="https://raydientstudio.com" target="_blank" rel="noopener">raydientstudio.com</Link>
							</p>

							<p>
								Welcome to the centralized documentation hub of Raydient Studio™, your trusted remote-first premium design and frontend development agency. This portal serves as the authoritative source for all operational, legal, licensing, and service-related policies that govern our engagement with clients, partners, and third parties.
							</p>

							<p>
								All documents presented herein have been curated to establish clarity, uphold contractual fairness, ensure data and intellectual property compliance, and reflect our commitment to delivering world-class digital services under a legally sound and transparent framework.
							</p>

							<p>
								Whether you are a client, collaborator, or vendor, we strongly advise you to review the relevant documents before entering into any agreement, submitting a project request, or engaging in business with Raydient Studio™.
							</p>

							<h3 className="text-xl font-semibold mt-6">
								Legal Standing
							</h3>

							<p>
								All policies, agreements, and terms published under this portal are legally binding within applicable jurisdictions and may be updated periodically to reflect regulatory changes or internal process improvements.
							</p>

							<p>
								Your use of any Raydient Studio™ services constitutes your full acceptance of the latest versions of these documents.
							</p>

							<p>
								Unauthorized usage, misrepresentation, or violation of these documents may result in contractual termination or legal action.
							</p>

							<h3 className="text-xl font-semibold mt-6">
								Contact for Documentation Inquiries
							</h3>

							<p>
								For any documentation-related concerns, clarifications, or formal questions regarding our service terms, business operations, or licensing structure, please contact:
							</p>

							<p>
								Email: <Link href="mailto:info@raydientstudio.com" className="text-link hover:underline active:underline">info@raydientstudio.com</Link> <br />
								Business Name: Raydient Studio™ <br />
								Location: West Bengal, India
							</p>
						</FlexLayout>
						<FlexLayout display="flex" direction="row" items="center" width="full">
							<Button onClick={() => navigateTo("/docs")} variant="tonal" size="small" radius="medium">
								<IconCopy />
								Copy Docs
							</Button>
							<FlexLayout direction={"row"} marginLeft={"auto"} spaceX={2}>
								<RouterButton onClick={() => navigateTo("/")} variant="tonal" size="icon" radius="medium">
									<IconChevronLeft />
								</RouterButton>
								<RouterButton onClick={() => navigateTo("/docs/introduction")} variant="tonal" size="icon" radius="medium">
									<IconChevronRight />
								</RouterButton>
							</FlexLayout>
						</FlexLayout>
					</FlexLayout>
				</SidebarInset>
			</SidebarProvider>
		</>
	);
}