import Image from "next/image";

export function ArtHero() {
    return (
        <section
            className="relative -mx-4 -mt-8 mb-10 overflow-hidden"
            aria-label="Art gallery hero"
        >
            {/* Hero container */}
            <div className="relative h-[52vh] min-h-[380px] max-h-[600px]">
                {/* Background image */}
                <Image
                    src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80&fit=crop&auto=format"
                    alt="Abstract art studio with vibrant paintings"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />

                {/* Warm gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-art-950/80 via-art-900/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-art-100 via-transparent to-art-950/30" />

                {/* Decorative accent line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-art-400 via-art-500 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-end px-4 pb-12 sm:px-8 md:px-12">
                    <div className="max-w-2xl">
                        {/* Eyebrow */}
                        <p
                            className="mb-3 text-[11px] font-medium uppercase tracking-[0.35em] text-art-300"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Mode² Collection
                        </p>

                        {/* Title */}
                        <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
                            Creative
                            <br />
                            <span className="text-art-400">Works</span>
                        </h2>

                        {/* Divider */}
                        <div className="mt-5 h-px w-16 bg-art-400/60" />

                        {/* Description */}
                        <p className="mt-5 max-w-md text-sm leading-relaxed text-art-200/80 sm:text-base">
                            Original paintings, hand-crafted clothing, and custom footwear — 
                            each piece a unique expression of artistry and style.
                        </p>

                        {/* Category pills */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {["Paintings", "Clothes", "Shoes"].map((cat) => (
                                <span
                                    key={cat}
                                    className="rounded-full border border-art-400/30 bg-art-900/40 px-3.5 py-1 text-xs font-medium text-art-300 backdrop-blur-sm"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom fade into page */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--background)] to-transparent" />
            </div>
        </section>
    );
}
