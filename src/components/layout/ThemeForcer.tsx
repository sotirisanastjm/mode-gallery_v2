"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

interface ThemeForcerProps {
    theme: "light" | "dark";
}

export function ThemeForcer({ theme }: ThemeForcerProps) {
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme(theme);
    }, [setTheme, theme]);

    return null;
}
