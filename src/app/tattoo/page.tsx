import type { Metadata } from "next";
import { CategoryFilter } from "@/components/gallery";
import { getAllGalleryItemsByMode, getItemsByCategory } from "@/lib/cms";
import { TATTOO_CATEGORIES } from "@/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "All Tattoo Work",
    description:
        "Browse our complete collection of professional tattoo artistry.",
};

export default function TattooPage() {
    const allItems = getAllGalleryItemsByMode("tattoo");
    const itemsByCategory = getItemsByCategory("tattoo");
    return (
        <>
            {/* ─── Hero Banner with Video ─── */}
            <section
                className="tattoo-hero relative -mx-4 -mt-8 mb-12 overflow-hidden"
                aria-label="Featured tattoo work"
            >
                <div className="relative h-[50vh] min-h-[360px] max-h-[560px] w-full">
                    {/* Background video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                        aria-hidden="true"
                    >
                        <source src="/videos/Mode.mp4" type="video/mp4" />
                    </video>

                    {/* Layered overlays for depth */}
                    <div className="absolute inset-0 bg-ink-950/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/40" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900 to-transparent" />

                    {/* Noise texture overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                        <span className="mb-3 inline-block text-[10px] font-medium uppercase tracking-[0.35em] text-ink-400">
                            Portfolio
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-ink-50 md:text-5xl">
                            Tattoo Work
                        </h1>
                        <div className="mt-4 h-px w-12 bg-ink-400/40" />
                    </div>
                </div>
            </section>

            {/* ─── About 187 Tattoo Studio ─── */}
            <section
                className="mx-auto mb-14 max-w-xl text-center"
                aria-labelledby="about-studio"
            >
                <h2
                    id="about-studio"
                    className="mb-1 text-[10px] font-medium uppercase tracking-[0.3em] text-ink-400"
                >
                    The Studio
                </h2>
                <p className="text-xl font-semibold text-ink-100">
                    187 Tattoo Studio
                </p>
                <div className="mx-auto mt-3 h-px w-8 bg-ink-500/50" />
                <p className="mt-4 text-sm leading-relaxed text-ink-300">
                    Professional tattoo artistry specializing in realistic
                    portraits, old school traditions, and black &amp; grey
                    finesse. Every piece is a one-of-a-kind collaboration —
                    crafted with precision, worn with pride.
                </p>
            </section>

            {/* ─── Category Filter & Gallery ─── */}
            <CategoryFilter
                mode="tattoo"
                categories={TATTOO_CATEGORIES}
                itemsByCategory={itemsByCategory}
                allItems={allItems}
            />
        </>
    );
}
