import Link from "next/link";

export default function NotFound() {
    return (
        <main id="main-content" className="flex min-h-screen flex-col md:flex-row">
            {/* Dark/Ink Side - 4 */}
            <div className="group relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-ink-900 text-ink-50">
                {/* Animated grain texture */}
                <div className="pointer-events-none absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
                </div>
                
                {/* Diagonal slash decoration */}
                <div className="absolute -right-20 top-0 h-full w-40 -skew-x-12 bg-ink-800/50" />
                
                <div className="relative z-10 text-center">
                    <span className="text-[12rem] font-black leading-none tracking-tighter text-ink-100 md:text-[18rem]">
                        4
                    </span>
                </div>
                
                {/* Bottom link */}
                <Link
                    href="/tattoo"
                    className="absolute bottom-12 z-10 rounded-full border border-ink-500 px-6 py-2 text-sm text-ink-300 transition-all hover:border-ink-300 hover:bg-ink-50 hover:text-ink-900"
                >
                    Explore Tattoos →
                </Link>
            </div>

            {/* Center Zero - spans both sides */}
            <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                <div className="relative">
                    {/* Glowing ring */}
                    <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-ink-400 via-transparent to-art-400 opacity-30 blur-xl" />
                    <span className="relative block text-[14rem] font-black leading-none tracking-tighter">
                        <span className="bg-gradient-to-b from-ink-200 via-ink-400 to-art-400 bg-clip-text text-transparent">
                            0
                        </span>
                    </span>
                </div>
            </div>

            {/* Mobile Zero */}
            <div className="flex items-center justify-center bg-gradient-to-r from-ink-900 to-art-100 py-4 md:hidden">
                <span className="text-8xl font-black leading-none tracking-tighter">
                    <span className="bg-gradient-to-r from-ink-200 to-art-600 bg-clip-text text-transparent">
                        0
                    </span>
                </span>
            </div>

            {/* Light/Art Side - 4 */}
            <div className="group relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-art-100 text-art-900">
                {/* Subtle pattern overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[length:24px_24px]" />
                </div>
                
                {/* Diagonal slash decoration */}
                <div className="absolute -left-20 top-0 h-full w-40 -skew-x-12 bg-art-200/50" />
                
                <div className="relative z-10 text-center">
                    <span className="text-[12rem] font-black leading-none tracking-tighter text-art-800 md:text-[18rem]">
                        4
                    </span>
                </div>
                
                {/* Bottom link */}
                <Link
                    href="/art"
                    className="absolute bottom-12 z-10 rounded-full border border-art-400 px-6 py-2 text-sm text-art-600 transition-all hover:border-art-600 hover:bg-art-900 hover:text-art-50"
                >
                    Explore Art →
                </Link>
            </div>

            {/* Centered message overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-1/4 z-30 text-center">
                <p className="text-xs font-light uppercase tracking-[0.4em] text-ink-400 mix-blend-difference md:text-sm">
                    Lost in the gallery
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-ink-500 mix-blend-difference">
                    Pick a direction to find your way
                </p>
            </div>

            {/* Home link at top */}
            <Link
                href="/"
                className="absolute left-1/2 top-8 z-30 -translate-x-1/2 text-xs font-light uppercase tracking-[0.3em] text-ink-400 mix-blend-difference transition-opacity hover:opacity-70"
            >
                ← Back to MODE²
            </Link>
        </main>
    );
}
