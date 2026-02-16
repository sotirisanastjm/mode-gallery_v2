"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { GalleryGrid } from "./GalleryGrid";
import {
    CATEGORY_LABELS,
    type Mode,
    type Category,
    type GalleryItem,
} from "@/types";

interface CategoryFilterProps {
    mode: Mode;
    categories: readonly Category[];
    itemsByCategory: Record<string, GalleryItem[]>;
    allItems: GalleryItem[];
}

export function CategoryFilter({
    mode,
    categories,
    itemsByCategory,
    allItems,
}: CategoryFilterProps) {
    const [activeCategory, setActiveCategory] = useState<Category | null>(null);
    const isTattoo = mode === "tattoo";

    const displayedItems = activeCategory
        ? itemsByCategory[activeCategory] || []
        : allItems;

    const filterOptions = [
        { label: "All", category: null },
        ...categories.map((cat) => ({
            label: CATEGORY_LABELS[cat],
            category: cat,
        })),
    ];

    const getHeading = () => {
        if (!activeCategory) {
            return isTattoo ? "All Work" : "All Art Work";
        }
        const label = CATEGORY_LABELS[activeCategory];
        return isTattoo ? `${label} Tattoos` : label;
    };

    return (
        <>
            <nav className="py-6" aria-label={`${mode} categories`}>
                <div
                    className={clsx(
                        "mb-5 h-px",
                        isTattoo
                            ? "bg-gradient-to-r from-ink-500 via-ink-700 to-transparent"
                            : "bg-gradient-to-r from-art-400 via-art-300 to-transparent"
                    )}
                />

                <div className="flex items-center gap-2">
                    <span
                        className={clsx(
                            "mr-3 text-[10px] font-semibold uppercase tracking-[0.3em]",
                            isTattoo ? "text-ink-400" : "text-art-500"
                        )}
                    >
                        Filter
                    </span>

                    <div
                        className={clsx(
                            "mr-3 h-4 w-px",
                            isTattoo ? "bg-ink-600" : "bg-art-300"
                        )}
                    />

                    <div className="flex flex-wrap gap-1.5">
                        {filterOptions.map(({ label, category }) => {
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={label}
                                    onClick={() => setActiveCategory(category)}
                                    className={clsx(
                                        "relative px-4 py-1.5 text-xs font-medium uppercase tracking-widest transition-all duration-300",
                                        isActive
                                            ? isTattoo
                                                ? "bg-ink-50 text-ink-900 shadow-[0_0_12px_rgba(245,245,245,0.15)]"
                                                : "bg-art-900 text-art-50 shadow-[0_2px_10px_rgba(61,47,36,0.25)]"
                                            : isTattoo
                                                ? "text-ink-400 hover:text-ink-100 hover:bg-ink-800/60"
                                                : "text-art-600 hover:text-art-900 hover:bg-art-200/60"
                                    )}
                                    aria-pressed={isActive}
                                >
                                    {label}
                                    {isActive && (
                                        <span
                                            className={clsx(
                                                "absolute bottom-0 left-1/2 h-0.5 w-3/5 -translate-x-1/2",
                                                isTattoo ? "bg-ink-400" : "bg-art-400"
                                            )}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div
                    className={clsx(
                        "mt-5 h-px",
                        isTattoo
                            ? "bg-gradient-to-r from-transparent via-ink-700 to-ink-500"
                            : "bg-gradient-to-r from-transparent via-art-300 to-art-400"
                    )}
                />
            </nav>

            <section aria-labelledby="gallery-heading">
                <h2
                    id="gallery-heading"
                    className={clsx(
                        "mb-8",
                        isTattoo
                            ? "text-[10px] font-medium uppercase tracking-[0.3em] text-ink-400"
                            : "text-3xl font-bold"
                    )}
                >
                    {getHeading()}
                </h2>
                <GalleryGrid
                    items={displayedItems}
                    emptyMessage={
                        activeCategory
                            ? `No ${CATEGORY_LABELS[activeCategory].toLowerCase()} ${isTattoo ? "tattoos" : "art"} available yet.`
                            : `No ${isTattoo ? "tattoo" : "art"} work available yet. Check back soon!`
                    }
                />
            </section>
        </>
    );
}
