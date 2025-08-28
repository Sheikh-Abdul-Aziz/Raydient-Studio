"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { JetBrains_Mono } from "@/fonts/local";

interface PortfolioCardProps {
    title: string
    description: string
    category: string
    type: string
    imageUrl: string
    brandLogo?: string
    caseStudyUrl?: string
}

export function PortfolioCard({
    title,
    description,
    category,
    type,
    imageUrl,
    brandLogo,
    caseStudyUrl = "#",
}: PortfolioCardProps) {
    return (
        <Card className="group overflow-hidden bg-card border-border transition-all duration-300 gap-0 px-0 py-0 hover:-translate-y-1">
            <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={imageUrl || "/placeholder.svg"} alt={`${title} website preview`} fill className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardContent className="p-4 space-y-1">
                <div className="flex items-center justify-between gap-2">
                    {brandLogo && (
                        <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 relative">
                            <Image
                                src={brandLogo || "/placeholder.svg"}
                                alt={`${title} brand logo`}
                                fill
                                className="object-contain rounded-md"
                            />
                        </div>
                    )}
                    <div className="flex flex-row space-y-2 justify-between items-start">
                        <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="outline" className={`${JetBrains_Mono.className} text-xs rounded-sm border border-border text-muted-foreground`}>
                                {category}
                            </Badge>
                            <Badge variant="outline" className={`${JetBrains_Mono.className} text-xs rounded-sm border border-border text-muted-foreground`}>
                                {type}
                            </Badge>
                        </div>
                        <span className="border border-border shadow-none rounded-md -rotate-45 transition-transform group-hover:rotate-0" onClick={() => window.open(caseStudyUrl, "_blank")}>
                            <ArrowRight size={18} strokeWidth={1.5} className="text-muted-foreground" />
                        </span>
                    </div>
                </div>
                <h3 className="font-semibold text-lg text-card-foreground">{title}</h3>

                <p className="text-muted-foreground text-sm">{description}</p>

                <Button
                    variant="outlined"
                    size={"wide"}
                    onClick={() => window.open(caseStudyUrl, "_blank")}
                >
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
            </CardContent>
        </Card>
    )
}