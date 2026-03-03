import localFont from "next/font/local";

export const biome = localFont({
    src: [
        {
            path: "./fonts/biome-w-400.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/biome-w-700.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-biome",
    display: "swap",
    fallback: ["system-ui", "sans-serif"],
});

