import BandsPageTemplate from "@/src/components/_templates/BandsPageTemplate"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Bands",
    description: "Explore the official bands within the Eastern Musical Regiment. Each ensemble upholds our shared standards of performance, discipline, and musical excellence across the region.",
    alternates: {
        canonical: "https://easternmusicalregiment.vercel.app/bands",
    },
};

const page = () => {
    return (
        <section>
            <BandsPageTemplate />
        </section>
    )
}

export default page