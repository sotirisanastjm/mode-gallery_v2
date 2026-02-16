"use client";

import { useEffect } from "react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Optionally log error to an error reporting service
    }, [error]);

    return (
        <main
            id="main-content"
            className="flex min-h-screen flex-col items-center justify-center px-4"
        >
            <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
            <p className="mb-8 text-current/70">
                An unexpected error occurred
            </p>
            <button
                onClick={reset}
                className="rounded-full bg-ink-700 px-6 py-3 text-ink-50 transition-colors hover:bg-ink-600"
            >
                Try again
            </button>
        </main>
    );
}
