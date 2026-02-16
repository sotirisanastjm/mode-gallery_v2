import type { Metadata } from "next";
import { CategoryFilter } from "@/components/gallery";
import { ArtHero } from "@/components/layout";
import { getAllGalleryItemsByMode, getItemsByCategory } from "@/lib/cms";
import { ART_CATEGORIES } from "@/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "All Art Work",
    description: "Browse our complete collection of creative works.",
};

export default function ArtPage() {
    const allItems = getAllGalleryItemsByMode("art");
    const itemsByCategory = getItemsByCategory("art");

    return (
        <>
            <ArtHero />
            <CategoryFilter
                mode="art"
                categories={ART_CATEGORIES}
                itemsByCategory={itemsByCategory}
                allItems={allItems}
            />
        </>
    );
}
