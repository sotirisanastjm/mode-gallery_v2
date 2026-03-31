import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { getSiteSettings } from "@/lib/gallery-data";

export const metadata: Metadata = {
    title: "Tattoo Gallery",
    description:
        "Professional tattoo artistry featuring realistic, old school, and black & grey styles.",
};

interface TattooLayoutProps {
    children: ReactNode;
}

export default function TattooLayout({ children }: TattooLayoutProps) {
    const settings = getSiteSettings();

    return (
        <div className="flex min-h-screen flex-col bg-ink-900 text-ink-100">
            <Header mode="tattoo" studioName={settings.studioName} />
            <div className="container mx-auto flex-1 px-4 py-8">
                <main id="main-content">{children}</main>
            </div>
            <Footer settings={settings} />
        </div>
    );
}
