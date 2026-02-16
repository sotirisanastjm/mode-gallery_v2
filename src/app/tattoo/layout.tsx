import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Header, Footer, ThemeForcer } from "@/components/layout";
import { getSiteSettings } from "@/lib/cms";

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
        <>
            <ThemeForcer theme="dark" />
            <Header mode="tattoo" studioName={settings.studioName} />
            <div className="container mx-auto flex-1 px-4 py-8">
                <main id="main-content">{children}</main>
            </div>
            <Footer settings={settings} />
        </>
    );
}
