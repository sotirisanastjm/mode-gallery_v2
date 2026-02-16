"use client";

import Image from "next/image";
import { useState } from "react";
import { clsx } from "clsx";
import type { GalleryItem } from "@/types";
import { getPlaceholderImage } from "@/lib/cloudinary";

interface GalleryImageProps {
    item: GalleryItem;
    priority?: boolean;
}

export function GalleryImage({ item, priority = false }: GalleryImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const imageSrc = hasError
        ? getPlaceholderImage(400, 400, item.title)
        : item.image;

    return (
        <figure className="group relative overflow-hidden rounded-lg">
            <div className="aspect-square overflow-hidden bg-current/5">
                <Image
                    src={imageSrc}
                    alt={item.alt}
                    width={400}
                    height={400}
                    className={clsx(
                        "h-full w-full object-cover transition-all duration-500",
                        "group-hover:scale-105",
                        isLoaded ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                    priority={priority}
                />
            </div>

            <figcaption
                className={clsx(
                    "absolute inset-0 flex flex-col justify-end p-4",
                    "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
                    "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                )}
            >
                <h3 className="text-lg font-semibold text-white">
                    {item.title}
                </h3>
                {item.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-white/80">
                        {item.description}
                    </p>
                )}
            </figcaption>

            {item.featured && (
                <span
                    className="absolute right-2 top-2 rounded-full bg-yellow-500/90 px-2 py-0.5 text-xs font-medium text-black"
                    aria-label="Featured item"
                >
                    Featured
                </span>
            )}
        </figure>
    );
}
