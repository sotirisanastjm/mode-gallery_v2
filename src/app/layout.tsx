import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: {
        default: "Mode Gallery | Tattoo & Art Portfolio",
        template: "%s | Mode Gallery",
    },
    description:
        "Dual-theme portfolio showcasing professional tattoo artistry and creative works including paintings, clothing, and footwear designs.",
    keywords: [
        "tattoo",
        "art",
        "portfolio",
        "realistic tattoo",
        "old school tattoo",
        "paintings",
        "custom clothing",
    ],
    authors: [{ name: "MODE²" }],
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Mode Gallery",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script
                    src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                    strategy="lazyOnload"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
            >
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>
                <ThemeProvider>
                    <div className="flex min-h-screen flex-col">
                        {children}
                    </div>
                </ThemeProvider>
                <Script id="netlify-identity-redirect" strategy="lazyOnload">
                    {`
                        if (window.netlifyIdentity) {
                            window.netlifyIdentity.on("init", user => {
                                if (!user) {
                                    window.netlifyIdentity.on("login", () => {
                                        document.location.href = "/admin/";
                                    });
                                }
                            });
                        }
                    `}
                </Script>
            </body>
        </html>
    );
}
