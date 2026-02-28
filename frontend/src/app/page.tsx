import HomePageTemplate from "../components/_templates/HomePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://easternmusicalregiment.vercel.app/",
    },
};

export default async function Home() {

    return (
        <section>
            <HomePageTemplate />
        </section>
    );
}
