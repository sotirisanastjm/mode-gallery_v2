export function ArtHero() {
    return (
        <section
            className="relative -mx-4 -mt-8 mb-12 overflow-hidden"
            aria-label="Featured art showcase"
        >
            <div className="relative h-[50vh] min-h-[360px] max-h-[560px] w-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full scale-[1.03] object-cover opacity-[0.84] blur-[1.8px] brightness-[0.94] contrast-[1.08] saturate-[1.18]"
                    aria-hidden="true"
                >
                    <source src="/gallery/videos/GalleryVideo.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-art-950/54" />
                <div className="absolute inset-0 bg-gradient-to-r from-art-950/72 via-art-900/34 to-art-950/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-art-100/18 via-transparent to-art-950/36" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-art-100/85 to-transparent" />
                <div
                    className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.86' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }}
                />

                <div className="relative z-10 flex h-full items-center justify-center px-6">
                    <div className="relative w-full max-w-4xl">
                        <div className="pointer-events-none absolute -left-4 top-8 hidden h-[62%] w-[1px] bg-gradient-to-b from-transparent via-art-300/85 to-transparent md:block" />
                        <div className="pointer-events-none absolute -right-4 bottom-8 hidden h-[62%] w-[1px] bg-gradient-to-b from-transparent via-art-300/80 to-transparent md:block" />
                        <div className="pointer-events-none absolute -inset-x-5 inset-y-6 border border-white/20 opacity-85" />

                        <div className="relative overflow-hidden border border-white/25 bg-[linear-gradient(138deg,rgba(17,24,39,0.82)_0%,rgba(15,23,42,0.5)_48%,rgba(154,52,18,0.62)_100%)] px-7 py-8 shadow-[0_28px_80px_rgba(8,10,21,0.6)] backdrop-blur-[2.5px] sm:px-10 sm:py-10">
                            <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen [background:radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.48),transparent_32%),radial-gradient(circle_at_86%_82%,rgba(251,146,60,0.36),transparent_38%)]" />
                            <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background:linear-gradient(115deg,transparent_0%,transparent_46%,rgba(255,255,255,0.45)_50%,transparent_54%,transparent_100%)]" />
                            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-300/80 to-transparent" />

                            <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                                <div className="md:pt-1">
                                    <span className="inline-flex border border-white/30 bg-white/90 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.34em] text-art-950 shadow-[0_8px_24px_rgba(8,10,21,0.38)]">
                                        Studio Cut
                                    </span>
                                    <div className="mt-4 h-px w-20 bg-gradient-to-r from-orange-300/85 to-transparent" />
                                </div>

                                <div>
                                    <h2 className="text-left text-4xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-white drop-shadow-[0_12px_34px_rgba(8,10,21,0.75)] sm:text-5xl md:text-6xl">
                                        Gallery
                                        <span className="mt-2 block bg-gradient-to-r from-white via-amber-100 to-orange-300 bg-clip-text text-transparent [text-shadow:none]">
                                            Motion
                                        </span>
                                    </h2>
                                    <p className="mt-5 max-w-lg text-left text-sm uppercase tracking-[0.2em] text-art-100/90 sm:text-[13px]">
                                        Canvas. Fabric. Footwear. One creative pulse.
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {["Paintings", "Clothes", "Shoes"].map(
                                            (category) => (
                                                <span
                                                    key={category}
                                                    className="border border-white/30 bg-black/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-art-100 backdrop-blur-sm"
                                                >
                                                    {category}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
