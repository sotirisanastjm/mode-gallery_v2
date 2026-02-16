"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import type { Mode } from "@/types";

interface HeaderProps {
    mode?: Mode;
    studioName?: string;
}

export function Header({ mode }: HeaderProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <header className="sticky top-0 z-40 w-full border-b border-current/10 bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link
                    href="/"
                    className="group flex items-center gap-1 transition-opacity hover:opacity-80"
                    aria-label="Go to home page"
                >
                    <span className="text-lg font-bold tracking-tight">
                        MODE
                    </span>
                    <sup className="text-[11px] font-semibold opacity-40 -ml-0.5">
                        2
                    </sup>
                </Link>

                <nav className="flex items-center gap-4" aria-label="Main navigation">
                    {!isHome && <ModeToggle currentMode={mode} />}
                </nav>
            </div>
        </header>
    );
}
