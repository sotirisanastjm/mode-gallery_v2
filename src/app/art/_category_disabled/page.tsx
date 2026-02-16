import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery";
import { CategoryNav } from "@/components/layout";
import { getGalleryItems } from "@/lib/cms";
import { ART_CATEGORIES, CATEGORY_LABELS, type ArtCategory } from "@/types";

export const dynamic = "force-dynamic";

interface ArtCategoryPageProps {
    params: { category: string };
}

export function generateMetadata({ params }: ArtCategoryPageProps): Metadata {
    const category = params.category as ArtCategory;

    if (!ART_CATEGORIES.includes(category)) {
        return { title: "Not Found" };
    }

    const label = CATEGORY_LABELS[category];

    return {
        title: `${label} Art`,
        description: `Browse our ${label.toLowerCase()} collection.`,
    };
}

export default function ArtCategoryPage({ params }: ArtCategoryPageProps) {
    const category = params.category as ArtCategory;

    if (!ART_CATEGORIES.includes(category)) {
        notFound();
    }

    const items = getGalleryItems("art", category);
    const label = CATEGORY_LABELS[category];

    return (
        <>
            <CategoryNav mode="art" categories={ART_CATEGORIES} />
            <section aria-labelledby="gallery-heading">
                <h1 id="gallery-heading" className="mb-8 text-3xl font-bold">
                    {label}
                </h1>
                <GalleryGrid
                    items={items}
                    emptyMessage={`No ${label.toLowerCase()} available yet. Check back soon!`}
                />
            </section>
        </>
    );
}
