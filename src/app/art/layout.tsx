import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Header, Footer, ThemeForcer } from "@/components/layout";
import { getSiteSettings } from "@/lib/cms";

export const metadata: Metadata = {
    title: "Art Gallery",
    description:
        "Creative works including paintings, custom clothing, and footwear designs.",
};

interface ArtLayoutProps {
    children: ReactNode;
}

export default function ArtLayout({ children }: ArtLayoutProps) {
    const settings = getSiteSettings();

    return (
        <>
            <ThemeForcer theme="light" />
            <Header mode="art" />
            <div className="container mx-auto flex-1 px-4 py-8">
                <main id="main-content">{children}</main>
            </div>
            <Footer settings={settings} />
        </>
    );
}
