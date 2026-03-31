import type {
    ArtCategory,
    Category,
    GalleryItem,
    Mode,
    SiteSettings,
    TattooCategory,
} from "@/types";
import { galleryItemsData, siteSettingsData } from "@/lib/static-data";

const tattooCategories = ["realistic", "old-school", "black-grey"] as const;
const artCategories = ["paintings", "clothes", "shoes"] as const;

function sortItemsByDate(items: GalleryItem[]): GalleryItem[] {
    return [...items].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getGalleryItems(mode: Mode, category: Category): GalleryItem[] {
    return sortItemsByDate(
        galleryItemsData.filter(
            (item) => item.mode === mode && item.category === category
        )
    );
}

export function getAllGalleryItemsByMode(mode: Mode): GalleryItem[] {
    return sortItemsByDate(
        galleryItemsData.filter((item) => item.mode === mode)
    );
}

export function getFeaturedItems(mode: Mode): GalleryItem[] {
    return getAllGalleryItemsByMode(mode).filter((item) => item.featured);
}

export function getItemsByCategory(mode: Mode): Record<string, GalleryItem[]> {
    const categories =
        mode === "tattoo"
            ? (tattooCategories as readonly TattooCategory[])
            : (artCategories as readonly ArtCategory[]);

    const result: Record<string, GalleryItem[]> = {};

    for (const category of categories) {
        result[category] = getGalleryItems(mode, category);
    }

    return result;
}

export function getSiteSettings(): SiteSettings {
    return siteSettingsData;
}
