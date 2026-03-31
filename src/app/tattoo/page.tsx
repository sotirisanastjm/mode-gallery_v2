import type { Metadata } from "next";
import { CategoryFilter } from "@/components/gallery";
import {
    getAllGalleryItemsByMode,
    getItemsByCategory,
} from "@/lib/gallery-data";
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
            <section
                className="tattoo-hero relative -mx-4 -mt-8 mb-12 overflow-hidden"
                aria-label="Featured tattoo work"
            >
                <div className="relative h-[50vh] min-h-[360px] max-h-[560px] w-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full scale-[1.03] object-cover opacity-[0.84] blur-[1.8px] brightness-[0.94] contrast-[1.14] saturate-[1.15]"
                        aria-hidden="true"
                    >
                        <source src="/gallery/videos/Mode.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-ink-950/64" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-ink-900/28" />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink-950/22 via-transparent to-ink-950/22" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900/85 to-transparent" />
                    <div
                        className="absolute inset-0 opacity-[0.018] mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    <div className="relative z-10 flex h-full items-center justify-center px-6">
                        <div className="relative w-full max-w-3xl">
                            <div className="pointer-events-none absolute -left-5 top-8 hidden h-[62%] w-[1px] bg-gradient-to-b from-transparent via-rose-300/80 to-transparent md:block" />
                            <div className="pointer-events-none absolute -right-5 bottom-8 hidden h-[62%] w-[1px] bg-gradient-to-b from-transparent via-rose-300/70 to-transparent md:block" />
                            <div className="pointer-events-none absolute -inset-x-6 inset-y-6 border border-white/10 opacity-80" />

                            <div className="relative overflow-hidden border border-white/20 bg-[linear-gradient(140deg,rgba(10,10,10,0.86)_0%,rgba(10,10,10,0.58)_52%,rgba(56,16,24,0.68)_100%)] px-7 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.62)] backdrop-blur-[2.5px] sm:px-10 sm:py-10">
                                <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen [background:radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.5),transparent_35%),radial-gradient(circle_at_85%_82%,rgba(244,63,94,0.36),transparent_38%)]" />
                                <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background:linear-gradient(115deg,transparent_0%,transparent_46%,rgba(255,255,255,0.5)_50%,transparent_54%,transparent_100%)]" />
                                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-rose-300/80 to-transparent" />

                                <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                                    <div className="md:pt-1">
                                        <span className="inline-flex border border-white/30 bg-white/90 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.34em] text-ink-950 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                                            Ink Collection
                                        </span>
                                        <div className="mt-4 h-px w-20 bg-gradient-to-r from-rose-300/85 to-transparent" />
                                    </div>

                                    <div>
                                        <h1 className="text-left text-4xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-white drop-shadow-[0_12px_34px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl">
                                            Tattoo
                                            <span className="mt-2 block text-transparent [text-shadow:none] bg-gradient-to-r from-white via-rose-100 to-rose-300 bg-clip-text">
                                                Work
                                            </span>
                                        </h1>
                                        <p className="mt-5 max-w-md text-left text-sm uppercase tracking-[0.2em] text-ink-200/90 sm:text-[13px]">
                                            Dark lines. Soft shading. Stories in skin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="relative mx-auto mb-14 max-w-5xl px-4 py-4"
                aria-labelledby="maya-mode-heading"
            >
                <div className="relative overflow-hidden border border-white/15 bg-gradient-to-br from-ink-900 via-ink-950 to-black p-7 shadow-[0_26px_70px_rgba(0,0,0,0.45)] sm:p-10">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay [background:repeating-linear-gradient(135deg,rgba(255,255,255,.25)_0_1px,transparent_1px_13px)]" />

                    <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-ink-400">
                                Artist Profile
                            </p>
                            <h2
                                id="maya-mode-heading"
                                className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl"
                            >
                                Maya Mode
                            </h2>
                            <div className="mt-5 h-px w-20 bg-gradient-to-r from-white/70 to-transparent" />
                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">
                                Signature tattoo work rooted in realism, old
                                school heritage, and black &amp; grey depth.
                                Every session is built as a personal
                                collaboration to create timeless, custom ink.
                            </p>
                        </div>

                        <div className="grid gap-3 border border-white/15 bg-black/30 p-5 backdrop-blur-sm">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-400">
                                Known For
                            </p>
                            <p className="text-base font-medium text-white">
                                Hyper-realistic portraits
                            </p>
                            <p className="text-base font-medium text-white">
                                Classic old school storytelling
                            </p>
                            <p className="text-base font-medium text-white">
                                Smooth black &amp; grey gradients
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CategoryFilter
                mode="tattoo"
                categories={TATTOO_CATEGORIES}
                itemsByCategory={itemsByCategory}
                allItems={allItems}
            />
        </>
    );
}
