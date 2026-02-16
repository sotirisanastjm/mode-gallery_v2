"use client";

import Link from "next/link";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ArtError({ reset }: ErrorProps) {
    return (
        <section className="flex min-h-[50vh] flex-col items-center justify-center">
            <h1 className="mb-4 text-3xl font-bold">Error loading art</h1>
            <p className="mb-8 text-art-600">
                Something went wrong while loading the gallery
            </p>
            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="rounded-full bg-art-600 px-6 py-3 text-art-50 transition-colors hover:bg-art-500"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="rounded-full border border-art-400 px-6 py-3 transition-colors hover:bg-art-100"
                >
                    Go home
                </Link>
            </div>
        </section>
    );
}
