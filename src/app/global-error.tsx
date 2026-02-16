"use client";

interface GlobalErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorProps) {
    return (
        <html lang="en">
            <body>
                <main
                    style={{
                        display: "flex",
                        minHeight: "100vh",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem",
                        fontFamily: "system-ui, sans-serif",
                    }}
                >
                    <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                        Something went wrong
                    </h1>
                    <p style={{ marginBottom: "2rem", opacity: 0.7 }}>
                        A critical error occurred
                    </p>
                    <button
                        onClick={reset}
                        style={{
                            padding: "0.75rem 1.5rem",
                            backgroundColor: "#333",
                            color: "#fff",
                            border: "none",
                            borderRadius: "9999px",
                            cursor: "pointer",
                        }}
                    >
                        Try again
                    </button>
                </main>
            </body>
        </html>
    );
}
