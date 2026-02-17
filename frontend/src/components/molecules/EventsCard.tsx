import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faLocation } from "@fortawesome/free-solid-svg-icons"
import { Event } from "@/src/lib/strapi/types"
import { getStrapiMedia } from "@/src/lib/strapi/events"

const EventsCard = ({eventItem}: {eventItem: Event}) => {

    const eventSubDetails = [
        {icon: faCalendar, subTitle: eventItem.Date, subSubTitle: eventItem.Time},
        {icon: faLocation, subTitle: eventItem.Venue, subSubTitle: eventItem.City}
    ]


    const imgSrc = getStrapiMedia(eventItem.image.url)

    return (
        <div className="flex flex-col w-full max-w-3xl">
            <div className="relative aspect-square w-full mx-auto rounded-2xl">
                <Image
                    src={imgSrc}
                    alt={eventItem.image.alternativeText || "event image"}
                    fill 
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            <div className="mt-10 flex flex-col items-start">
                <h3 className="text-white text-2xl md:text-4xl lg:text-5xl mb-3 lg:mb-6 text-left">{eventItem.Title}</h3>
                {eventSubDetails.map((details, index) => {
                    return (
                        <div 
                            key={index}
                            className="flex items-center my-2 lg:my-3"
                        >
                            <FontAwesomeIcon icon={details.icon} className="text-xl md:text-2xl text-gold mr-3 md:mr-8" />
                            <div className="flex flex-col items-start">
                                <p className="text-fg-fade-white text-sm md:text-base lg:text-lg text-left">{details.subTitle}</p>
                                <p className="text-fg-dark-gray text-xs md:text-sm lg:text-base mt-1 text-left">{details.subSubTitle}</p>
                            </div>
                        </div>
                    )
                })}
                <p className="text-xs md:text-sm lg:text-base text-fg-fade-white text-left mt-3 mb-3">{eventItem.Description}</p>
                {eventItem.registrationLink && (
                    <a 
                        className="text-fg-dark-gray text-base"
                        href={eventItem.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="registration link"
                    >
                        Register here
                    </a>
                )}
            </div>
        </div>
    )
}

export default EventsCard