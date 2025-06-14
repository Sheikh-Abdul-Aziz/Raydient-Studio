'use client';

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./header";
import BriefFooter from "./brief-footer"
import MainFooter from "./main-footer"

export default function LayoutProvider({ children }: { children: ReactNode; }) {

    const pathname = usePathname();

    const briefFooterRoutes = ["/signup", "/login", "/docs", "/docs/introduction"];

    const isBriefFooter = briefFooterRoutes.includes(pathname);

    return (
        <>
            <Header />
            {children}
            {isBriefFooter ? <BriefFooter /> : <MainFooter />}
        </>
    );
}