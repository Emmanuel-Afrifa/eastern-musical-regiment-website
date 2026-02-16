"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import Button from "../atoms/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import YoutubeCard from "./YoutubeCard"

type BandProps = {
    id: string;
    name: string;
    image: string;
    description: string;
    location: string;
    genres?: string[];
    bandMedia?: {
        src: string;
        type: string;
    }[]
}

const BandCard = ({bandItem}: {bandItem: BandProps}) => {

    const [showOverlay, setShowOverlay] = useState<boolean>(false)
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        document.body.style.overflow = showOverlay ? "hidden" : "auto"
    }, [showOverlay])

    const normalizedBandMedia = bandItem.bandMedia ?? []

    const mediaLength = normalizedBandMedia.length
    const hasMedia = mediaLength > 0
    const mediaItem =  hasMedia ? normalizedBandMedia[currentIndex] : null

    const previousIndex = hasMedia ? (currentIndex - 1 + mediaLength) % mediaLength : 0
    const nextIndex = hasMedia ? (currentIndex + 1) % mediaLength : 0

    return (
        <div className="relative">
            <div className="flex flex-col xl:flex-row items-center justify-center">
                <div 
                    className="relative aspect-video w-full md:w-3/4 lg:w-1/2 rounded-2xl cursor-pointer"
                    onClick={() => setShowOverlay(true)}
                >
                    <Image 
                        src={bandItem.image}
                        alt="band image"
                        fill
                        className="object-cover w-full h-full rounded-2xl"
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center xl:items-start xl:ml-14 mt-8 xl:mt-0">
                    <h3 className="text-gold text-2xl md:text-3xl xl:text-4xl mb-6 xl:mb-8 text-center">{bandItem.name}</h3>
                    <p className="text-fg-gray text-sm md:text-base xl:text-lg text-center xl:text-left">{bandItem.description}</p>
                    <p className="text-fg-dark-gray text-sm md:text-base xl:text-lg my-4 xl:my-6">{bandItem.location}</p>
                    {bandItem.genres && (
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {bandItem.genres.map((genre, index) => {
                                return (
                                    <p 
                                        key={index}
                                        className="px-4 md:px-6 py-1.5 rounded-full text-gold bg-bg-dark-gold border border-gold text-sm md:text-base"
                                    >
                                        {genre}
                                    </p>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>

            {showOverlay && (
                <div 
                    className="flex justify-center items-center fixed inset-0 bg-black/80 backdrop-blur-2xl z-60 cursor-zoom-out px-6 md:px-16"
                >
                    <div className="flex flex-col w-full max-w-xl xl:max-w-3xl">
                        <div className="self-center mb-8">
                            <Button
                                content={
                                    <FontAwesomeIcon icon={faClose} size="xl" />
                                }
                                ariaLabel="close button"
                                classname="button text-gold"
                                handleClick={() => setShowOverlay(false)}
                            />
                        </div>

                        <div>
                            {mediaItem && (
                                mediaItem.type === "image" ? (
                                    <div className="relative aspect-video rounded-2xl">
                                        <Image
                                            src={mediaItem.src}
                                            alt="band image"
                                            fill
                                            className="object-cover w-full h-full rounded-2xl"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full">
                                        <YoutubeCard videoId={mediaItem.src}/>
                                    </div>
                                )
                            )}
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                            <Button
                                content={
                                    <FontAwesomeIcon icon={faArrowLeft} size="xl" />
                                }
                                ariaLabel="previous button"
                                classname="button text-gold"
                                handleClick={() => setCurrentIndex(previousIndex)}
                                disabled={!hasMedia}
                            />
                            <Button
                                content={
                                    <FontAwesomeIcon icon={faArrowRight} size="xl" />
                                }
                                ariaLabel="next button"
                                classname="button text-gold"
                                handleClick={() => setCurrentIndex(nextIndex)}
                                disabled={!hasMedia}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BandCard