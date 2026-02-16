import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery";
import { CategoryNav } from "@/components/layout";
import { getGalleryItems } from "@/lib/cms";
import { TATTOO_CATEGORIES, CATEGORY_LABELS, type TattooCategory } from "@/types";

export const dynamic = "force-dynamic";

interface TattooCategoryPageProps {
    params: { category: string };
}

export function generateMetadata({ params }: TattooCategoryPageProps): Metadata {
    const category = params.category as TattooCategory;

    if (!TATTOO_CATEGORIES.includes(category)) {
        return { title: "Not Found" };
    }

    const label = CATEGORY_LABELS[category];

    return {
        title: `${label} Tattoos`,
        description: `Browse our ${label.toLowerCase()} tattoo collection.`,
    };
}

export default function TattooCategoryPage({ params }: TattooCategoryPageProps) {
    const category = params.category as TattooCategory;

    if (!TATTOO_CATEGORIES.includes(category)) {
        notFound();
    }

    const items = getGalleryItems("tattoo", category);
    const label = CATEGORY_LABELS[category];

    return (
        <>
            <CategoryNav mode="tattoo" categories={TATTOO_CATEGORIES} />
            <section aria-labelledby="gallery-heading">
                <h1 id="gallery-heading" className="mb-8 text-3xl font-bold">
                    {label} Tattoos
                </h1>
                <GalleryGrid
                    items={items}
                    emptyMessage={`No ${label.toLowerCase()} tattoos available yet. Check back soon!`}
                />
            </section>
        </>
    );
}
