import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false


const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
})


const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: "%s | Eastern Musical Regiment",
        default: "Eastern Musical Regiment"
    },
    description: "The official platform of the Eastern Musical Regiment, a unified musical regiment bringing together brassbands in the Eastern Region under shared values of excellence, discipline, and artistic integrity. Discover our bands, commitment to musical distinction and upcoming events.",
    // metadataBase: new URL("https://novamusicschool.vercel.app/"), 
    keywords: [
        "eastern musical regiment",
        "eastern musical",
        "eastern regiment",
        "Ghana Musical Regiment",
        "Ghana Music",
        "musical",
        "regiment"
    ],
    authors: [{ name: "Eastern Musical Regiment" }],
    creator: "Eastern Musical Regiment",
    openGraph: {
        title: "Eastern Musical Regiment",
        description: "The official platform of the Eastern Musical Regiment, a unified musical regiment bringing together brassbands in the Eastern Region under shared values of excellence, discipline, and artistic integrity. Discover our bands, commitment to musical distinction and upcoming events.",
        // url: "https://novamusicschool.vercel.app/",
        siteName: "Eastern Musical Regiment",
        images: [
            {
                url: "/images/EMR_LOGO.svg",
                width: 1200,
                height: 700,
                alt: "Eastern Musical Regiment",
            },
        ],
        locale: "en_GH",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Eastern Musical Regiment",
        description: "The official platform of the Eastern Musical Regiment, a unified musical regiment bringing together brassbands in the Eastern Region under shared values of excellence, discipline, and artistic integrity. Discover our bands, commitment to musical distinction and upcoming events.",
        images: ["/images/EMR_LOGO.svg"],
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <html lang="en" className="scroll-smooth">
        <body
            className={`${montserrat.variable} ${inter.variable} antialiased`}
        >
            <Header />
            <main>
                {children} 
            </main>
            <Footer />
        </body>
      </html>
    );
}
