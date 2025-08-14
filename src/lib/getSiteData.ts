export interface SiteData {
    name: string
}

export async function getSiteData(domain: string | null): Promise<SiteData> {
    if (!domain) {
        return { name: "Unknown Site" }
    }

    // Map of domains to site names
    const sites: Record<string, SiteData> = {
        "raydientstudio.vercel.app": { name: "Raydient Studio" }
    }

    // Return matching site or default
    return sites[domain] || { name: "Default Site" }
}