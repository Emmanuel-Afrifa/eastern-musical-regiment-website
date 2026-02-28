import type { MetadataRoute } from "next";

export default function SiteMap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://easternmusicalregiment.vercel.app/",
            lastModified: new Date()
        },
        {
            url: "https://easternmusicalregiment.vercel.app/about",
            lastModified: new Date()
        },
        {
            url: "https://easternmusicalregiment.vercel.app/bands",
            lastModified: new Date()
        },
        {
            url: "https://easternmusicalregiment.vercel.app/events",
            lastModified: new Date()
        }

    ]
}