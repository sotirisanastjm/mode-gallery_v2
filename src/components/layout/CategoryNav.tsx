"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { CATEGORY_LABELS, type Mode, type Category } from "@/types";

interface CategoryNavProps {
    mode: Mode;
    categories: readonly Category[];
}

export function CategoryNav({ mode, categories }: CategoryNavProps) {
    const pathname = usePathname();
    const isTattoo = mode === "tattoo";

    const allItems = [
        { label: "All", href: `/${mode}`, category: null },
        ...categories.map((cat) => ({
            label: CATEGORY_LABELS[cat],
            href: `/${mode}/${cat}`,
            category: cat,
        })),
    ];

    return (
        <nav
            className="py-6"
            aria-label={`${mode} categories`}
        >
            {/* Top accent line */}
            <div
                className={clsx(
                    "mb-5 h-px",
                    isTattoo
                        ? "bg-gradient-to-r from-ink-500 via-ink-700 to-transparent"
                        : "bg-gradient-to-r from-art-400 via-art-300 to-transparent"
                )}
            />

            <div className="flex items-center gap-2">
                {/* Section label */}
                <span
                    className={clsx(
                        "mr-3 text-[10px] font-semibold uppercase tracking-[0.3em]",
                        isTattoo ? "text-ink-400" : "text-art-500"
                    )}
                >
                    Filter
                </span>

                {/* Vertical divider */}
                <div
                    className={clsx(
                        "mr-3 h-4 w-px",
                        isTattoo ? "bg-ink-600" : "bg-art-300"
                    )}
                />

                {/* Category links */}
                <div className="flex flex-wrap gap-1.5">
                    {allItems.map(({ label, href }) => {
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={href}
                                href={href}
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
                                aria-current={isActive ? "page" : undefined}
                            >
                                {label}
                                {/* Active underline accent */}
                                {isActive && (
                                    <span
                                        className={clsx(
                                            "absolute bottom-0 left-1/2 h-0.5 w-3/5 -translate-x-1/2",
                                            isTattoo ? "bg-ink-400" : "bg-art-400"
                                        )}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Bottom accent line */}
            <div
                className={clsx(
                    "mt-5 h-px",
                    isTattoo
                        ? "bg-gradient-to-r from-transparent via-ink-700 to-ink-500"
                        : "bg-gradient-to-r from-transparent via-art-300 to-art-400"
                )}
            />
        </nav>
    );
}
