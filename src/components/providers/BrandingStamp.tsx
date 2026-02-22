"use client";

import { useEffect } from "react";

function printBrandingStamp(): void {
    console.log(
        "%c🚀 Crafted by Sotiris Anastasiadis | https://anast.dev",
        "color: #4CAF50; font-size: 14px; font-weight: bold;"
    );
}

export function BrandingStamp(): null {
    useEffect(() => {
        printBrandingStamp();
    }, []);

    return null;
}
