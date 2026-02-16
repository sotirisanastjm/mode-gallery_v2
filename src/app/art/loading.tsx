export default function ArtLoading() {
    return (
        <section>
            <div className="mb-8 h-10 w-48 animate-pulse rounded bg-art-200" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="aspect-square animate-pulse rounded-lg bg-art-200"
                    />
                ))}
            </div>
        </section>
    );
}
