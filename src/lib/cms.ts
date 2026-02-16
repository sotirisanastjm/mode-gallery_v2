import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
    GalleryItem,
    Mode,
    Category,
    SiteSettings,
    TattooCategory,
    ArtCategory,
} from "@/types";

const contentDir = path.join(process.cwd(), "content");

function getContentPath(...segments: string[]): string {
    return path.join(contentDir, ...segments);
}

function parseGalleryFile(
    filePath: string,
    mode: Mode,
    category: Category
): GalleryItem | null {
    try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);
        const slug = path.basename(filePath, ".md");

        return {
            slug,
            title: data.title || "",
            image: data.image || "",
            alt: data.alt || data.title || "",
            description: data.description,
            date: data.date ? new Date(data.date).toISOString() : "",
            featured: data.featured || false,
            category,
            mode,
        };
    } catch {
        return null;
    }
}

export function getGalleryItems(mode: Mode, category: Category): GalleryItem[] {
    const categoryPath = getContentPath(mode, category);

    if (!fs.existsSync(categoryPath)) {
        return [];
    }

    const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith(".md"));

    const items = files
        .map((file) => parseGalleryFile(path.join(categoryPath, file), mode, category))
        .filter((item): item is GalleryItem => item !== null);

    return items.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getAllGalleryItemsByMode(mode: Mode): GalleryItem[] {
    const categories =
        mode === "tattoo"
            ? (["realistic", "old-school", "black-grey"] as TattooCategory[])
            : (["paintings", "clothes", "shoes"] as ArtCategory[]);

    return categories.flatMap((category) => getGalleryItems(mode, category));
}

export function getFeaturedItems(mode: Mode): GalleryItem[] {
    return getAllGalleryItemsByMode(mode).filter((item) => item.featured);
}

export function getItemsByCategory(mode: Mode): Record<string, GalleryItem[]> {
    const categories =
        mode === "tattoo"
            ? (["realistic", "old-school", "black-grey"] as TattooCategory[])
            : (["paintings", "clothes", "shoes"] as ArtCategory[]);

    const result: Record<string, GalleryItem[]> = {};
    for (const category of categories) {
        result[category] = getGalleryItems(mode, category);
    }
    return result;
}

export function getSiteSettings(): SiteSettings {
    const settingsPath = getContentPath("settings", "general.md");

    const defaultSettings: SiteSettings = {
        siteName: "Mode Gallery",
        siteDescription: "Dual-theme portfolio for tattoo and art",
        studioName: "187 Tattoo Studio",
        socialLinks: {},
    };

    if (!fs.existsSync(settingsPath)) {
        return defaultSettings;
    }

    try {
        const fileContent = fs.readFileSync(settingsPath, "utf-8");
        const { data } = matter(fileContent);

        return {
            siteName: data.siteName || defaultSettings.siteName,
            siteDescription: data.siteDescription || defaultSettings.siteDescription,
            studioName: data.studioName || defaultSettings.studioName,
            socialLinks: {
                instagram: data.instagram,
                facebook: data.facebook,
                email: data.email,
            },
        };
    } catch {
        return defaultSettings;
    }
}
