import AboutPageTemplate from "@/src/components/_templates/AboutPageTemplate"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Discover the story, leadership, and guiding principles of the Eastern Musical Regiment.",
    alternates: {
        canonical: "https://easternmusicalregiment.vercel.app/about",
    },
};

const page = () => {
    return (
        <section>
            <AboutPageTemplate />
        </section>
    )
}

export default page