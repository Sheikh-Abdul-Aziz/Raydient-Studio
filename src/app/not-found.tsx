"use server";

import { headers } from "next/headers";
import { getSiteData } from "@/lib/getSiteData";
import NotFoundClient from "./not-found-client";

export default async function NotFound() {

    const headersList = await headers()
    const domain = headersList.get("host")
    const data = await getSiteData(domain)

    return <NotFoundClient siteName={data.name} />
}