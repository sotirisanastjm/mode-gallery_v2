import type { MetadataRoute } from "next";
import { TATTOO_CATEGORIES, ART_CATEGORIES } from "@/types";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/tattoo`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/art`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ];

    const tattooCategories: MetadataRoute.Sitemap = TATTOO_CATEGORIES.map(
        (category) => ({
            url: `${baseUrl}/tattoo/${category}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        })
    );

    const artCategories: MetadataRoute.Sitemap = ART_CATEGORIES.map(
        (category) => ({
            url: `${baseUrl}/art/${category}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        })
    );

    return [...staticPages, ...tattooCategories, ...artCategories];
}
