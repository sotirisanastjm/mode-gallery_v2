import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Mode Gallery | Choose Your Experience",
};

export default function HomePage() {
    return (
        <main id="main-content" className="flex min-h-screen flex-col md:flex-row">
            <Link
                href="/tattoo"
                className="group relative flex flex-1 flex-col items-center justify-center bg-ink-900 text-ink-50 transition-all duration-500 md:hover:flex-[1.2] overflow-hidden"
                aria-label="Enter tattoo gallery"
            >
                <Image
                    src="/tattoos/486598196_17848550805432519_5190940480037596429_n.jpg"
                    alt="Tattoo artistry"
                    fill
                    className="object-cover opacity-40 transition-all duration-700 group-hover:opacity-55 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/40 to-transparent" />
                <div className="relative z-10 text-center">
                    <h1 className="text-6xl font-bold tracking-wider md:text-8xl">
                        TATTOO
                    </h1>
                    <p className="mt-4 text-[10px] font-light uppercase tracking-[0.3em] text-ink-400">
                        187 Tattoo Studio
                    </p>
                    <p className="mt-2 text-sm text-ink-400">
                        Realistic • Old School • Black &amp; Grey
                    </p>
                    <span className="mt-8 inline-block rounded-full border border-ink-500 px-6 py-2 text-sm transition-colors group-hover:bg-ink-50 group-hover:text-ink-900">
                        Enter Gallery
                    </span>
                </div>
            </Link>

            <Link
                href="/art"
                className="group relative flex flex-1 flex-col items-center justify-center bg-art-100 text-art-900 transition-all duration-500 md:hover:flex-[1.2] overflow-hidden"
                aria-label="Enter art gallery"
            >
                <Image
                    src="/gallery/616560482_18080652137237457_279688664147355281_n.jpg"
                    alt="Creative art gallery"
                    fill
                    className="object-cover opacity-40 transition-all duration-700 group-hover:opacity-55 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-art-950/90 via-art-900/40 to-transparent" />
                <div className="relative z-10 text-center">
                    <h1 className="text-6xl font-bold tracking-wider md:text-8xl">
                        GALLERY
                    </h1>
                    <p className="mt-4 text-lg text-art-200 md:text-xl">
                        Creative Works
                    </p>
                    <p className="mt-2 text-sm text-art-300">
                        Paintings • Clothes • Shoes
                    </p>
                    <span className="mt-8 inline-block rounded-full border border-art-400 px-6 py-2 text-sm text-art-100 transition-colors group-hover:bg-art-50 group-hover:text-art-900">
                        Enter Gallery
                    </span>
                </div>
            </Link>
        </main>
    );
}
