"use client";

import Link from "next/link";
import type { Mode } from "@/types";

interface ModeToggleProps {
    currentMode?: Mode;
}

export function ModeToggle({ currentMode }: ModeToggleProps) {
    const isArt = currentMode === "art";
    const targetHref = isArt ? "/tattoo" : "/art";
    const targetLabel = isArt
        ? "Switch to tattoo gallery"
        : "Switch to art gallery";

    return (
        <Link
            href={targetHref}
            className="mode-toggle group relative flex h-9 w-9 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-full"
            role="switch"
            aria-checked={isArt}
            aria-label={targetLabel}
        >
            {/* Split-circle: yin-yang inspired duality symbol */}
            <svg
                viewBox="0 0 36 36"
                className="h-9 w-9 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                style={{
                    transform: isArt ? "rotate(180deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
            >
                {/* Outer ring */}
                <circle
                    cx="18"
                    cy="18"
                    r="16.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.25"
                />

                {/* Dark half (ink) — left side */}
                <path
                    d="M18 1.5 A16.5 16.5 0 0 0 18 34.5 A8.25 8.25 0 0 1 18 18 A8.25 8.25 0 0 0 18 1.5Z"
                    fill={isArt ? "#d4b896" : "#e0e0e0"}
                    className="transition-colors duration-500"
                />

                {/* Light half (art) — right side */}
                <path
                    d="M18 1.5 A16.5 16.5 0 0 1 18 34.5 A8.25 8.25 0 0 0 18 18 A8.25 8.25 0 0 1 18 1.5Z"
                    fill={isArt ? "#5c4636" : "#333333"}
                    className="transition-colors duration-500"
                />

                {/* Top dot */}
                <circle
                    cx="18"
                    cy="9.75"
                    r="2.5"
                    fill={isArt ? "#5c4636" : "#333333"}
                    className="transition-colors duration-500"
                />

                {/* Bottom dot */}
                <circle
                    cx="18"
                    cy="26.25"
                    r="2.5"
                    fill={isArt ? "#d4b896" : "#e0e0e0"}
                    className="transition-colors duration-500"
                />
            </svg>

            {/* Pulse ring on hover */}
            <span className="absolute inset-0 rounded-full border border-current/0 transition-all duration-300 group-hover:border-current/15 group-hover:scale-125" />
        </Link>
    );
}
