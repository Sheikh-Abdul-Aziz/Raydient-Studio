'use client';

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./header";
import BriefFooter from "./brief-footer"
import MainFooter from "./main-footer"
import { Main } from "./semantic/main";

export function LayoutProvider({ children }: { children: ReactNode; }) {

    const pathname = usePathname();

    const briefFooterRoutes = ["/signup", "/login", "/docs", "/docs/introduction", "/docs/terms-and-conditions", "/docs/privacy-policy", "/docs/cookie-policy", "/docs/refund-and-replacement-policy", "/docs/shipping-and-delivery-policy", "/docs/cancellation-policy",  "/docs/intellectual-property-policy", "/docs/partnership-program-policy", "/docs/warranty-and-guarantee-policy", "/docs/end-user-license-agreement", "/docs/non-disclosure-agreement", "/docs/service-level-agreement"];

    const isBriefFooter = briefFooterRoutes.includes(pathname);

    const docsRoutes = ["/docs", "/docs/introduction", "/docs/terms-and-conditions", "/docs/privacy-policy", "/docs/cookie-policy", "/docs/refund-and-replacement-policy", "/docs/shipping-and-delivery-policy", "/docs/cancellation-policy",  "/docs/intellectual-property-policy", "/docs/partnership-program-policy", "/docs/warranty-and-guarantee-policy", "/docs/end-user-license-agreement", "/docs/non-disclosure-agreement", "/docs/service-level-agreement"];

    const isDocsPage = docsRoutes.includes(pathname);

    return (
        <>
            {isDocsPage ? null : <Header />}
            {isDocsPage ? <Main display={"flex"} direction={"column"} justify={"center"} items={"start"} className="bg-surface"> {/* Main for docs pages */} {children} </Main> : <Main display={"flex"} direction={"column"} justify={"center"} items={"start"} className="bg-background"> {/* Main for non-docs pages */} {children} </Main>}
            {isBriefFooter ? <BriefFooter /> : <MainFooter />}
        </>
    );
}