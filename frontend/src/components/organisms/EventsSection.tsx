"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import { Event } from "@/src/lib/strapi/types"
import EventsCard from "../molecules/EventsCard"
import { useState } from "react"
import Button from "../atoms/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

const EventsSection = ({events}: {events: Event[]}) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const goToPreviousEvent = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const goToNextEvent = () => {
        if (currentIndex >= 0 && currentIndex < events.length-1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const eventItem = events[currentIndex]
    const isRightFinished = currentIndex === events.length - 1
    const isLeftFinished = currentIndex === 0

    if (events && events.length === 0) {
        return (
            <section className="flex w-full bg-title-black">
                <div className="flex flex-col justify-center items-center w-full max-w-360 mx-auto px-6 md:px-10 min-h-screen">
                    <p className="text-gold text-center text-3xl md:text-4xl">No Upcoming events found</p>
                </div>
            </section>
        )
    }

    return (
        <Section>
            <Container>
                <div className="flex flex-col items-center px-6 md:px-10 text-center">
                    <div>
                        <EventsCard eventItem={eventItem} />
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-6 mt-14">
                        <Button
                            content={
                                <FontAwesomeIcon icon={faArrowLeft} className="text-base md:text-xl text-gold"/>
                            }
                            ariaLabel="previous button"
                            classname={`rounded-lg md:rounded-2xl px-5 py-1.5 md:px-10 md:py-3 bg-fg-black text-gold border-2 border-gold ${isLeftFinished ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                            handleClick={goToPreviousEvent}
                            disabled={isLeftFinished}
                        />
                        <Button
                            content={
                                <FontAwesomeIcon icon={faArrowRight} className="text-base md:text-xl text-gold"/>
                            }
                            ariaLabel="next button"
                            classname={`rounded-lg md:rounded-2xl px-5 py-1.5 md:px-10 md:py-3 bg-fg-black text-gold border-2 border-gold ${isRightFinished ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                            handleClick={goToNextEvent}
                            disabled={isRightFinished}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default EventsSection