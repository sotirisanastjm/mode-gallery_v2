import { GalleryImage } from "./GalleryImage";
import type { GalleryItem } from "@/types";

interface GalleryGridProps {
    items: GalleryItem[];
    emptyMessage?: string;
}

export function GalleryGrid({
    items,
    emptyMessage = "No items to display",
}: GalleryGridProps) {
    if (items.length === 0) {
        return (
            <div className="flex min-h-[200px] items-center justify-center text-current/50">
                <p>{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            role="list"
            aria-label="Gallery items"
        >
            {items.map((item, index) => (
                <div key={item.slug} role="listitem">
                    <GalleryImage item={item} priority={index < 4} />
                </div>
            ))}
        </div>
    );
}
