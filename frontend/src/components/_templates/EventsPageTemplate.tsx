import EventsSection from "../organisms/EventsSection"
import { getEvents } from "@/src/lib/strapi/events"

const EventsPageTemplate = async () => {

    const events = await getEvents()

    return (
        <section>
            <EventsSection events={events} />
        </section>
    )
}

export default EventsPageTemplate