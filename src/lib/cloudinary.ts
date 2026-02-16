export function getCloudinaryUrl(
    publicId: string,
    options: {
        width?: number;
        height?: number;
        quality?: number;
        format?: string;
    } = {}
): string {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!cloudName) {
        return publicId;
    }

    const { width, height, quality = 80, format = "auto" } = options;

    const transforms: string[] = [];

    if (width) transforms.push(`w_${width}`);
    if (height) transforms.push(`h_${height}`);
    transforms.push(`q_${quality}`);
    transforms.push(`f_${format}`);
    transforms.push("c_fill");

    const transformString = transforms.join(",");

    if (publicId.startsWith("http")) {
        const urlParts = publicId.split("/upload/");
        if (urlParts.length === 2) {
            return `${urlParts[0]}/upload/${transformString}/${urlParts[1]}`;
        }
        return publicId;
    }

    return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}/${publicId}`;
}

export function getImageDimensions(
    aspectRatio: "square" | "portrait" | "landscape" = "square",
    baseSize: number = 400
): { width: number; height: number } {
    switch (aspectRatio) {
        case "portrait":
            return { width: baseSize, height: Math.round(baseSize * 1.33) };
        case "landscape":
            return { width: baseSize, height: Math.round(baseSize * 0.75) };
        default:
            return { width: baseSize, height: baseSize };
    }
}

export function getPlaceholderImage(
    width: number = 400,
    height: number = 400,
    text: string = "No Image"
): string {
    return `https://placehold.co/${width}x${height}/1a1a1a/808080?text=${encodeURIComponent(text)}`;
}
