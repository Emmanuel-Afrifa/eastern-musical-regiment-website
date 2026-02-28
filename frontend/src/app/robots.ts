import type { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: "https://easternmusicalregiment.vercel.app/sitemap.xml"
    }
}