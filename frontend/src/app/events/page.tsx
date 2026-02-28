import EventsPageTemplate from "@/src/components/_templates/EventsPageTemplate"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events",
    description: "Stay informed about upcoming performances, official programs, and regional events organized by the Eastern Musical Regiment and its affiliated bands.",
    alternates: {
        // canonical: "https://royal-music-academy.vercel.app/",
    },
};

const page = () => {
    return (
        <section>
            <EventsPageTemplate />
        </section>
    )
}

export default page