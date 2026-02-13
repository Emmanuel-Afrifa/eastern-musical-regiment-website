import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/organisms/Header";
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
    title: "Eastern Musical Regiment",
    description: "Home of quality brass bands",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <html lang="en" className="scroll-smooth">
        <>
            <Header />
            <body
                className={`${montserrat.variable} ${inter.variable} antialiased`}
            >
                <main>
                    {children}
                </main>
            </body>
        </>
      </html>
    );
}
