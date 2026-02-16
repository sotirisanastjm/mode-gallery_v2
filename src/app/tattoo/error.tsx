"use client";

import Link from "next/link";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function TattooError({ reset }: ErrorProps) {
    return (
        <section className="flex min-h-[50vh] flex-col items-center justify-center">
            <h1 className="mb-4 text-3xl font-bold">Error loading tattoos</h1>
            <p className="mb-8 text-ink-300">
                Something went wrong while loading the gallery
            </p>
            <div className="flex gap-4">
                <button
                    onClick={reset}
                    className="rounded-full bg-ink-700 px-6 py-3 text-ink-50 transition-colors hover:bg-ink-600"
                >
                    Try again
                </button>
                <Link
                    href="/"
                    className="rounded-full border border-ink-500 px-6 py-3 transition-colors hover:bg-ink-800"
                >
                    Go home
                </Link>
            </div>
        </section>
    );
}
