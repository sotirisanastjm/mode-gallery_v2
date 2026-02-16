export type Mode = "tattoo" | "art";

export type TattooCategory = "realistic" | "old-school" | "black-grey";
export type ArtCategory = "paintings" | "clothes" | "shoes";
export type Category = TattooCategory | ArtCategory;

export interface GalleryItem {
    slug: string;
    title: string;
    image: string;
    alt: string;
    description?: string;
    date: string;
    featured: boolean;
    category: Category;
    mode: Mode;
}

export interface SiteSettings {
    siteName: string;
    siteDescription: string;
    studioName: string;
    socialLinks: {
        instagram?: string;
        facebook?: string;
        email?: string;
    };
}

export const TATTOO_CATEGORIES: TattooCategory[] = [
    "realistic",
    "old-school",
    "black-grey",
];

export const ART_CATEGORIES: ArtCategory[] = [
    "paintings",
    "clothes",
    "shoes",
];

export const CATEGORY_LABELS: Record<Category, string> = {
    realistic: "Realistic",
    "old-school": "Old School",
    "black-grey": "Black & Grey",
    paintings: "Paintings",
    clothes: "Clothes",
    shoes: "Shoes",
};

export const MODE_CONFIG = {
    tattoo: {
        title: "INK",
        subtitle: "187 Tattoo Studio",
        theme: "dark" as const,
        categories: TATTOO_CATEGORIES,
        description: "Professional tattoo artistry",
    },
    art: {
        title: "ART",
        subtitle: "Creative Works",
        theme: "light" as const,
        categories: ART_CATEGORIES,
        description: "Paintings, clothing, and footwear designs",
    },
};
