'use client';

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconChevronRight, IconCopy } from "@tabler/icons-react";
import { Header } from "@/components/semantic/header";
import { FlexLayout } from "@/components/layout/flex-layout";
import ThemeChanger from "@/components/theme-changer";


const RouterButton = ({
    onClick,
    variant,
    size,
    radius,
    children,
}: {
    onClick: () => void;
    variant: "destructive" | "elevated" | "filled" | "linked" | "outlined" | "text" | "tonal";
    size: "small" | "badge" | "default" | "natural" | "large" | "action" | "icon" | "social" | "wide";
    radius: "none" | "small" | "medium" | "large" | "full" | null | undefined;
    children: React.ReactNode;
}) => (
    <Button onClick={onClick} variant={variant} size={size} radius={radius}>
        {children}
    </Button>
);

export default function TermsAndConditions() {
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
                                        <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Terms and Conditions</BreadcrumbPage>
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
                            <h2 className="text-3xl font-bold text-primary">Terms and Conditions</h2>
                            <p className="text-sm text-muted-foreground">
                                Effective Date: 24/07/2025 – Present <br />
                                Business Name: Raydient Studio (hereinafter referred to as “Raydient Studio,” “we,” “us,” or “our”) <br />
                                Website: <Link className="text-link hover:underline active:underline" href="https://raydientstudio.com" target="_blank" rel="noopener">raydientstudio.com</Link>
                            </p>

                            <p>
                                Please read these Terms and Conditions (“Terms”) carefully before accessing or using our website, purchasing any services, or engaging in any business with Raydient Studio. By accessing or using any part of our platform or services, you agree to be bound by these Terms. If you do not agree to all the terms and conditions, you may not access the platform or use any services.
                            </p>

                            <h3 className="text-xl font-semibold mt-6">1. Definitions</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li><strong>Services</strong> refer to design, development, branding, consultancy, or any other services offered by Raydient Studio.</li>
                                <li><strong>Client</strong> means any individual, business, or entity engaging with Raydient Studio for its services.</li>
                                <li><strong>Deliverables</strong> refer to final files, designs, code, or materials shared with the Client upon completion or milestones.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6">2. General Terms</h3>
                            <div className="space-y-2">
                                <p><strong>2.1 Eligibility</strong><br />
                                    You must be at least 18 years of age or accessing our services under supervision of a guardian.
                                </p>
                                <p><strong>2.2 Account Registration</strong><br />
                                    You agree to provide accurate information and maintain confidentiality of your credentials.
                                </p>
                                <p><strong>2.3 Payments</strong><br />
                                    All payments are in INR or USD and must be completed through accepted gateways. Taxes may apply.
                                </p>
                                <p><strong>2.4 Intellectual Property</strong><br />
                                    Work remains our property until fully paid. Portfolio use is allowed unless NDA prohibits.
                                </p>
                                <p><strong>2.5 Prohibited Activities</strong><br />
                                    You may not resell, misrepresent, or use deliverables for unlawful or unethical purposes.
                                </p>
                                <p><strong>2.6 Revisions</strong><br />
                                    Limited revisions are included. Extra revisions are charged as per agreement.
                                </p>
                                <p><strong>2.7 Termination</strong><br />
                                    We reserve the right to suspend or terminate services upon policy violation.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold mt-6">3. Pricing and Payment Terms</h3>
                            <div className="space-y-2">
                                <p><strong>3.1 Transparent Pricing</strong><br />
                                    Pricing is communicated via proposals. No hidden fees beyond agreed scope and tax.
                                </p>
                                <p><strong>3.2 Discounts and Promotions</strong><br />
                                    Offers are time-bound and may be withdrawn without notice.
                                </p>
                                <p><strong>3.3 Deposit and Payment Schedule</strong><br />
                                    Projects may require 50% advance, with remaining on milestone or delivery completion.
                                </p>
                                <p><strong>3.4 Refund Policy</strong><br />
                                    Payments are non-refundable once work begins. Eligible refunds may deduct admin fees.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold mt-6">4. Intellectual Property and Licensing</h3>
                            <div className="space-y-2">
                                <p><strong>4.1 Ownership Transfer</strong><br />
                                    Ownership is transferred only upon full payment.
                                </p>
                                <p><strong>4.2 Portfolio Rights</strong><br />
                                    We may showcase work unless restricted by NDA.
                                </p>
                                <p><strong>4.3 Third-Party Assets</strong><br />
                                    Client must comply with third-party licensing for stock assets.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold mt-6">5. Confidentiality</h3>
                            <p>
                                Both parties agree to confidentiality for sensitive information unless disclosure is legally required.
                            </p>

                            <h3 className="text-xl font-semibold mt-6">6. Limitation of Liability</h3>
                            <p>
                                We are not liable for indirect, incidental, or consequential damages. All services are provided “as-is”.
                            </p>

                            <h3 className="text-xl font-semibold mt-6">7. Governing Law</h3>
                            <p>
                                These Terms are governed by the laws of India. Jurisdiction: West Bengal courts.
                            </p>

                            <h3 className="text-xl font-semibold mt-6">8. Updates to Terms</h3>
                            <p>
                                These Terms may be revised. Continued use implies acceptance of changes.
                            </p>

                            <h3 className="text-xl font-semibold mt-6">Contact Us</h3>
                            <p>
                                Email: <Link href="mailto:info@raydientstudio.com" className="text-link hover:underline active:underline">info@raydientstudio.com</Link><br />
                                Assistance: RayAI (AI Agent only)
                            </p>
                        </FlexLayout>
                        <FlexLayout display="flex" direction="row" items="center" width="full">
                            <Button onClick={() => navigateTo("/docs")} variant="tonal" size="small" radius="medium">
                                <IconCopy />
                                Copy Docs
                            </Button>
                            <FlexLayout direction={"row"} marginLeft={"auto"} spaceX={2}>
                                <RouterButton onClick={() => navigateTo("/docs/introduction")} variant="tonal" size="icon" radius="medium">
                                    <IconChevronLeft />
                                </RouterButton>
                                <RouterButton onClick={() => navigateTo("/docs/privacy-policy")} variant="tonal" size="icon" radius="medium">
                                    <IconChevronRight />
                                </RouterButton>
                            </FlexLayout>
                        </FlexLayout>
                    </FlexLayout>
                </SidebarInset>
            </SidebarProvider >
        </>
    );
}