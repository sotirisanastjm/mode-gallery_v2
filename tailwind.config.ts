import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: {
                    50: "#f5f5f5",
                    100: "#e0e0e0",
                    200: "#b3b3b3",
                    300: "#808080",
                    400: "#4d4d4d",
                    500: "#333333",
                    600: "#262626",
                    700: "#1a1a1a",
                    800: "#0f0f0f",
                    900: "#0a0a0a",
                    950: "#050505",
                },
                art: {
                    50: "#fefefe",
                    100: "#faf7f5",
                    200: "#f5ebe6",
                    300: "#e8d5c4",
                    400: "#d4b896",
                    500: "#b8956a",
                    600: "#9a7b5c",
                    700: "#7a5f48",
                    800: "#5c4636",
                    900: "#3d2f24",
                    950: "#1f1812",
                },
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
        },
    },
    plugins: [],
};
export default config;
