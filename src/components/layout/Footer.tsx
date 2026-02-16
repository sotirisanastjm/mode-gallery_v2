import Link from "next/link";
import type { SiteSettings } from "@/types";

interface FooterProps {
    settings?: SiteSettings;
}

export function Footer({ settings }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-current/10 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="text-sm text-current/60">
                        © {currentYear} {settings?.siteName || "Mode Gallery"}.
                        All rights reserved.
                    </div>

                    {settings?.socialLinks && (
                        <nav
                            className="flex gap-4"
                            aria-label="Social links"
                        >
                            {settings.socialLinks.instagram && (
                                <a
                                    href={settings.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-current/60 transition-colors hover:text-current"
                                    aria-label="Instagram"
                                >
                                    Instagram
                                </a>
                            )}
                            {settings.socialLinks.facebook && (
                                <a
                                    href={settings.socialLinks.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-current/60 transition-colors hover:text-current"
                                    aria-label="Facebook"
                                >
                                    Facebook
                                </a>
                            )}
                            {settings.socialLinks.email && (
                                <a
                                    href={`mailto:${settings.socialLinks.email}`}
                                    className="text-current/60 transition-colors hover:text-current"
                                    aria-label="Email"
                                >
                                    Email
                                </a>
                            )}
                        </nav>
                    )}

                    <nav className="flex gap-4 text-sm" aria-label="Footer navigation">
                        <Link
                            href="/tattoo"
                            className="text-current/60 transition-colors hover:text-current"
                        >
                            Tattoo
                        </Link>
                        <Link
                            href="/art"
                            className="text-current/60 transition-colors hover:text-current"
                        >
                            Art
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
