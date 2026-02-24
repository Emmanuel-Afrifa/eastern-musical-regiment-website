"use client"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faLocation } from "@fortawesome/free-solid-svg-icons"
import { Event } from "@/src/lib/strapi/types"
import { getStrapiMedia } from "@/src/lib/strapi/events"
import { useState, useEffect } from "react"

const EventsCard = ({eventItem}: {eventItem: Event}) => {

    const [showOverlay, setShowOverlay] = useState<boolean>(false)

    useEffect(() => {
        document.body.style.overflow = showOverlay ? "hidden": "auto"
    })

    const date = new Date(eventItem.Date)
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.toLocaleString("default", { month: "long"})

    const timeHour = eventItem.Time.slice(0, 2)
    const timeSuffix = parseInt(timeHour, 10) < 12 ? "AM" : "PM"
    const displayHour = parseInt(timeHour, 10) % 12 === 0 ? 12 : parseInt(timeHour, 10) % 12

    const timeMinute = eventItem.Time.slice(3, 5)

    const eventSubDetails = [
        {
            icon: faCalendar, 
            subTitle: `${month} ${day}, ${year}`, 
            subSubTitle: `${displayHour}:${timeMinute} ${timeSuffix}`},
        {icon: faLocation, subTitle: eventItem.Venue, subSubTitle: eventItem.City}
    ]


    const imgSrc = getStrapiMedia(eventItem.image.url)

    return (
        <div className="flex flex-col w-full max-w-3xl">
            <div 
                className="relative aspect-square w-full max-w-lg mx-auto rounded-2xl cursor-pointer"
                onClick={() => setShowOverlay(true)}
            >
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
                        className="text-fg-dark-gray text-base bg-grow z-0 hover:px-5 py-1 hover:text-fg-black transition-all duration-500"
                        href={eventItem.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="registration link"
                    >
                        Register here
                    </a>
                )}
            </div>

            {showOverlay && (
                <div 
                    className="flex justify-center items-center fixed inset-0 bg-black/80 backdrop-blur-2xl z-60 px-6 md:px-16 cursor-zoom-out"
                    onClick={() => setShowOverlay(false)}
                >
                    <div className="relative w-[90vw] h-[90vh] rounded-2xl">
                        <Image
                            src={imgSrc}
                            alt={eventItem.image.alternativeText + "full screen" || "event image full screen"}
                            fill 
                            className="object-contain rounded-2xl"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default EventsCard