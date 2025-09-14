"use client";

import { ReactNode } from "react";
import { useSettings } from "@/hooks/use-settings";
import { MobileMenuProvider } from "@/components/mobile-menu";
import { LayoutProvider as LayoutProviderBase } from "@/components/layout-provider";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import CookieToast from "@/components/cookie-toast";
import MaintenanceBanner from "@/components/maintenance-banner";

function LayoutProvider({ children }: { children: ReactNode }) {

    const { isMaintenance } = useSettings();

    if (!isMaintenance) {
        return (
            <MobileMenuProvider>
                <LayoutProviderBase>
                    <Toaster />
                    <CookieToast />
                    {children}
                    <Analytics />
                    <SpeedInsights />
                </LayoutProviderBase>
            </MobileMenuProvider>
        );
    } else {
        return <MaintenanceBanner />;
    }
}

export { LayoutProvider };