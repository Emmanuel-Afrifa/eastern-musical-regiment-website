import EventsSection from "../organisms/EventsSection"
import EventsIntroSection from "../organisms/EventsIntroSection"
import { getEvents } from "@/src/lib/strapi/events"

const EventsPageTemplate = async () => {

    const events = await getEvents()

    return (
        <section>
            <EventsIntroSection />
            <EventsSection events={events} />
        </section>
    )
}

export default EventsPageTemplate